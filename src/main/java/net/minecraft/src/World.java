package net.minecraft.src;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;
import java.util.TreeSet;

import net.PeytonPlayz585.io.FileSystemUtils;
import net.PeytonPlayz585.opengl.LWJGLMain;

public class World implements IBlockAccess {
	private List lightingToUpdate;
	private List loadedEntityList;
	private List unloadedEntityList;
	private TreeSet scheduledTickTreeSet;
	private Set scheduledTickSet;
	public List loadedTileEntityList;
	public long worldTime;
	private long skyColor;
	private long fogColor;
	private long cloudColor;
	public int skylightSubtracted;
	private int updateLCG;
	private int DIST_HASH_MAGIC;
	public boolean editingBlocks;
	public static float[] lightBrightnessTable = new float[16];
	public Entity playerEntity;
	public int difficultySetting;
	public Object fontRenderer;
	public Random rand;
	public int spawnX;
	public int spawnY;
	public int spawnZ;
	public boolean isNewWorld;
	private List worldAccesses;
	private IChunkProvider chunkProvider;
	private static String saveDirectory;
	public long randomSeed;
	private NBTTagCompound nbtCompoundPlayer;
	public long setSizeOnDisk;
	public final String levelName;
	private ArrayList collidingBoundingBoxes;
	private List entitiesWithinAABBExcludingEntity;
	static int lightUpdates = 0;
	private int lightUpdated;

	public static NBTTagCompound getLevelData(String var1) {
		byte[] data = LWJGLMain.readFile(var1 + "/level.dat");
		System.out.println(var1 + "/level.dat");
		if(data != null) {
			try {
				NBTTagCompound var5 = (NBTTagCompound) NBTBase.readNamedTag(new DataInputStream(new ByteArrayInputStream(data)));
				NBTTagCompound var6 = var5.getCompoundTag("Data");
				return var6;
			} catch (IOException e) {
				e.printStackTrace();
				return null;
			}
		} else {
			return null;
		}
	}
	
	public static void deleteWorld(String var1) {
		String dir = var1 + "/";
		FileSystemUtils.recursiveDeleteDirectoryWithProgress(dir, "Deleting World!", "Please Wait...", Minecraft.getMinecraft().loadingScreen);
	}

	public World(String var2) {
		this(var2, (new Random()).nextLong());
	}

	public World(String var2, long var3) {
		lightUpdated = 0;
		this.lightingToUpdate = new ArrayList();
		this.loadedEntityList = new ArrayList();
		this.unloadedEntityList = new ArrayList();
		this.scheduledTickTreeSet = new TreeSet();
		this.scheduledTickSet = new HashSet();
		this.loadedTileEntityList = new ArrayList();
		this.worldTime = 0L;
		this.skyColor = 8961023L;
		this.fogColor = 12638463L;
		this.cloudColor = 16777215L;
		this.skylightSubtracted = 0;
		this.updateLCG = (new Random()).nextInt();
		this.DIST_HASH_MAGIC = 1013904223;
		this.editingBlocks = false;
		this.rand = new Random();
		this.isNewWorld = false;
		this.worldAccesses = new ArrayList();
		this.randomSeed = 0L;
		this.setSizeOnDisk = 0L;
		this.collidingBoundingBoxes = new ArrayList();
		this.entitiesWithinAABBExcludingEntity = new ArrayList();
		this.levelName = var2;
		this.saveDirectory = var2;
		byte[] data = LWJGLMain.readFile(saveDirectory + "/level.dat");
		System.out.println(saveDirectory + "/level.dat");
		this.isNewWorld = data == null ? false : true;
		if(data != null) {
			try {
				NBTTagCompound var6 = (NBTTagCompound) NBTBase.readNamedTag(new DataInputStream(new ByteArrayInputStream(data)));
				NBTTagCompound var7 = var6.getCompoundTag("Data");
				this.randomSeed = var7.getLong("RandomSeed");
				this.spawnX = var7.getInteger("SpawnX");
				this.spawnY = var7.getInteger("SpawnY");
				this.spawnZ = var7.getInteger("SpawnZ");
				this.worldTime = var7.getLong("Time");
				this.setSizeOnDisk = var7.getLong("SizeOnDisk");
				this.nbtCompoundPlayer = var7.getCompoundTag("Player");
			} catch (Exception var8) {
				var8.printStackTrace();
			}
		}

		boolean var9 = false;
		if(this.randomSeed == 0L) {
			this.randomSeed = var3;
			var9 = true;
		}

		this.chunkProvider = this.getChunkProvider(saveDirectory);
		if(var9) {
			this.spawnX = 0;
			this.spawnY = 64;

			for(this.spawnZ = 0; !this.findSpawn(this.spawnX, this.spawnZ); this.spawnZ += this.rand.nextInt(64) - this.rand.nextInt(64)) {
				this.spawnX += this.rand.nextInt(64) - this.rand.nextInt(64);
			}
		}

		this.calculateInitialSkylight();
	}

	protected IChunkProvider getChunkProvider(String var1) {
		return new ChunkProviderLoadOrGenerate(this, new ChunkLoader(var1), new ChunkProviderGenerate(this, this.randomSeed));
	}

	public void setSpawnLocation() {
		while(this.getFirstUncoveredBlock(this.spawnX, this.spawnZ) == 0) {
			this.spawnX += this.rand.nextInt(8) - this.rand.nextInt(8);
			this.spawnZ += this.rand.nextInt(8) - this.rand.nextInt(8);
		}

	}

	private boolean findSpawn(int var1, int var2) {
		return this.getFirstUncoveredBlock(var1, var2) == Block.sand.blockID;
	}

	private int getFirstUncoveredBlock(int var1, int var2) {
		int var3;
		for(var3 = 63; this.getBlockId(var1, var3 + 1, var2) != 0; ++var3) {
		}

		return this.getBlockId(var1, var3, var2);
	}

	public void spawnPlayerWithLoadedChunks() {
		try {
			if(this.nbtCompoundPlayer != null) {
				this.playerEntity.readFromNBT(this.nbtCompoundPlayer);
				this.nbtCompoundPlayer = null;
			}

			this.spawnEntityInWorld(this.playerEntity);
		} catch (Exception var2) {
			var2.printStackTrace();
		}

	}

	public void saveWorld(boolean var1, IProgressUpdate var2) {
		if(this.chunkProvider.canSave()) {
			if(var2 != null) {
				var2.displayProgressMessage("Saving level");
			}

			this.saveLevel();
			if(var2 != null) {
				var2.displayLoadingString("Saving chunks");
			}

			this.chunkProvider.saveChunks(var1, var2);
		}
	}

	private void saveLevel() {
		NBTTagCompound var1 = new NBTTagCompound();
		var1.setLong("RandomSeed", this.randomSeed);
		var1.setInteger("SpawnX", this.spawnX);
		var1.setInteger("SpawnY", this.spawnY);
		var1.setInteger("SpawnZ", this.spawnZ);
		var1.setLong("Time", this.worldTime);
		var1.setLong("SizeOnDisk", this.setSizeOnDisk);
		var1.setLong("LastPlayed", System.currentTimeMillis());
		NBTTagCompound var2;
		if(this.playerEntity != null) {
			var2 = new NBTTagCompound();
			this.playerEntity.writeToNBT(var2);
			var1.setCompoundTag("Player", var2);
		}

		var2 = new NBTTagCompound();
		var2.setTag("Data", var1);

		try {
			byte[] var3 = LWJGLMain.readFile(saveDirectory + "/level.dat_new");
			byte[] var4 = LWJGLMain.readFile(saveDirectory + "/level.dat_old");
			byte[] var5 = LWJGLMain.readFile(saveDirectory + "/level.dat");
			ByteArrayOutputStream bao = new ByteArrayOutputStream(131072);
			NBTBase.writeNamedTag(var2, new DataOutputStream(bao));
			LWJGLMain.writeFile(saveDirectory + "/level.dat_new", bao.toByteArray());
			if(LWJGLMain.readFile(saveDirectory + "/level.dat_old") != null) {
				LWJGLMain.deleteFile(saveDirectory + "/level.dat_old");
			}

			LWJGLMain.renameFile(saveDirectory + "/level.dat", saveDirectory + "/level.dat_old");
			if(LWJGLMain.readFile(saveDirectory + "/level.dat") != null) {
				LWJGLMain.deleteFile(saveDirectory + "/level.dat");
			}
			
			LWJGLMain.renameFile(saveDirectory + "/level.dat_new", saveDirectory + "/level.dat");
			
			if(LWJGLMain.readFile(saveDirectory + "/level.dat_new") != null) {
				LWJGLMain.deleteFile(saveDirectory + "/level.dat_new");
			}
		} catch (Exception var6) {
			var6.printStackTrace();
		}
	}

	public boolean saveWorld(int var1) {
		if(!this.chunkProvider.canSave()) {
			return true;
		} else {
			if(var1 == 0) {
				this.saveLevel();
			}

			return this.chunkProvider.saveChunks(false, (IProgressUpdate)null);
		}
	}

	public int getBlockId(int var1, int var2, int var3) {
		return var1 >= -32000000 && var3 >= -32000000 && var1 < 32000000 && var3 <= 32000000 ? (var2 < 0 ? 0 : (var2 >= 128 ? 0 : this.getChunkFromChunkCoords(var1 >> 4, var3 >> 4).getBlockID(var1 & 15, var2, var3 & 15))) : 0;
	}

	public boolean blockExists(int var1, int var2, int var3) {
		return var2 >= 0 && var2 < 128 ? this.chunkExists(var1 >> 4, var3 >> 4) : false;
	}

	public boolean checkChunksExist(int var1, int var2, int var3, int var4, int var5, int var6) {
		if(var5 >= 0 && var2 < 128) {
			var1 >>= 4;
			var2 >>= 4;
			var3 >>= 4;
			var4 >>= 4;
			var5 >>= 4;
			var6 >>= 4;

			for(int var7 = var1; var7 <= var4; ++var7) {
				for(int var8 = var3; var8 <= var6; ++var8) {
					if(!this.chunkExists(var7, var8)) {
						return false;
					}
				}
			}

			return true;
		} else {
			return false;
		}
	}

	private boolean chunkExists(int var1, int var2) {
		return this.chunkProvider.chunkExists(var1, var2);
	}

	public Chunk getChunkFromBlockCoords(int var1, int var2) {
		return this.getChunkFromChunkCoords(var1 >> 4, var2 >> 4);
	}

	public Chunk getChunkFromChunkCoords(int var1, int var2) {
		return this.chunkProvider.provideChunk(var1, var2);
	}

	public boolean setBlockAndMetadata(int var1, int var2, int var3, int var4, int var5) {
		if(var1 >= -32000000 && var3 >= -32000000 && var1 < 32000000 && var3 <= 32000000) {
			if(var2 < 0) {
				return false;
			} else if(var2 >= 128) {
				return false;
			} else {
				Chunk var6 = this.getChunkFromChunkCoords(var1 >> 4, var3 >> 4);
				return var6.setBlockIDWithMetadata(var1 & 15, var2, var3 & 15, var4, var5);
			}
		} else {
			return false;
		}
	}

	public boolean setBlock(int var1, int var2, int var3, int var4) {
		if(var1 >= -32000000 && var3 >= -32000000 && var1 < 32000000 && var3 <= 32000000) {
			if(var2 < 0) {
				return false;
			} else if(var2 >= 128) {
				return false;
			} else {
				Chunk var5 = this.getChunkFromChunkCoords(var1 >> 4, var3 >> 4);
				return var5.setBlockID(var1 & 15, var2, var3 & 15, var4);
			}
		} else {
			return false;
		}
	}

	public Material getBlockMaterial(int var1, int var2, int var3) {
		int var4 = this.getBlockId(var1, var2, var3);
		return var4 == 0 ? Material.air : Block.blocksList[var4].blockMaterial;
	}

	public int getBlockMetadata(int var1, int var2, int var3) {
		if(var1 >= -32000000 && var3 >= -32000000 && var1 < 32000000 && var3 <= 32000000) {
			if(var2 < 0) {
				return 0;
			} else if(var2 >= 128) {
				return 0;
			} else {
				Chunk var4 = this.getChunkFromChunkCoords(var1 >> 4, var3 >> 4);
				var1 &= 15;
				var3 &= 15;
				return var4.getBlockMetadata(var1, var2, var3);
			}
		} else {
			return 0;
		}
	}

	public void setBlockMetadataWithNotify(int var1, int var2, int var3, int var4) {
		this.setBlockMetadata(var1, var2, var3, var4);
	}

	public boolean setBlockMetadata(int var1, int var2, int var3, int var4) {
		if(var1 >= -32000000 && var3 >= -32000000 && var1 < 32000000 && var3 <= 32000000) {
			if(var2 < 0) {
				return false;
			} else if(var2 >= 128) {
				return false;
			} else {
				Chunk var5 = this.getChunkFromChunkCoords(var1 >> 4, var3 >> 4);
				var1 &= 15;
				var3 &= 15;
				var5.setBlockMetadata(var1, var2, var3, var4);
				return true;
			}
		} else {
			return false;
		}
	}

	public boolean setBlockWithNotify(int var1, int var2, int var3, int var4) {
		if(this.setBlock(var1, var2, var3, var4)) {
			this.markBlockNeedsUpdate(var1, var2, var3, var4);
			return true;
		} else {
			return false;
		}
	}

	public boolean setBlockAndMetadataWithNotify(int var1, int var2, int var3, int var4, int var5) {
		if(this.setBlockAndMetadata(var1, var2, var3, var4, var5)) {
			this.markBlockNeedsUpdate(var1, var2, var3, var4);
			return true;
		} else {
			return false;
		}
	}

	private void markBlockNeedsUpdate(int var1, int var2, int var3, int var4) {
		for(int var5 = 0; var5 < this.worldAccesses.size(); ++var5) {
			((IWorldAccess)this.worldAccesses.get(var5)).markBlockAndNeighborsNeedsUpdate(var1, var2, var3);
		}

		this.notifyBlocksOfNeighborChange(var1, var2, var3, var4);
	}

	public void markBlockAsNeedsUpdate(int var1, int var2, int var3, int var4) {
		if(var3 > var4) {
			int var5 = var4;
			var4 = var3;
			var3 = var5;
		}

		this.markBlocksDirty(var1, var3, var2, var1, var4, var2);
	}

	public void markBlocksDirty(int var1, int var2, int var3, int var4, int var5, int var6) {
		for(int var7 = 0; var7 < this.worldAccesses.size(); ++var7) {
			((IWorldAccess)this.worldAccesses.get(var7)).markBlockRangeNeedsUpdate(var1, var2, var3, var4, var5, var6);
		}

	}

	public void notifyBlocksOfNeighborChange(int var1, int var2, int var3, int var4) {
		this.notifyBlockOfNeighborChange(var1 - 1, var2, var3, var4);
		this.notifyBlockOfNeighborChange(var1 + 1, var2, var3, var4);
		this.notifyBlockOfNeighborChange(var1, var2 - 1, var3, var4);
		this.notifyBlockOfNeighborChange(var1, var2 + 1, var3, var4);
		this.notifyBlockOfNeighborChange(var1, var2, var3 - 1, var4);
		this.notifyBlockOfNeighborChange(var1, var2, var3 + 1, var4);
	}

	private void notifyBlockOfNeighborChange(int var1, int var2, int var3, int var4) {
		if(!this.editingBlocks) {
			Block var5 = Block.blocksList[this.getBlockId(var1, var2, var3)];
			if(var5 != null) {
				var5.onNeighborBlockChange(this, var1, var2, var3, var4);
			}

		}
	}

	public boolean canBlockSeeTheSky(int var1, int var2, int var3) {
		return this.getChunkFromChunkCoords(var1 >> 4, var3 >> 4).canBlockSeeTheSky(var1 & 15, var2, var3 & 15);
	}

	public int getBlockLightValue(int var1, int var2, int var3) {
		return this.getBlockLightValue_do(var1, var2, var3, true);
	}

	public int getBlockLightValue_do(int var1, int var2, int var3, boolean var4) {
		if(var1 >= -32000000 && var3 >= -32000000 && var1 < 32000000 && var3 <= 32000000) {
			int var5;
			if(var4) {
				var5 = this.getBlockId(var1, var2, var3);
				if(var5 == Block.stairSingle.blockID || var5 == Block.tilledField.blockID) {
					int var6 = this.getBlockLightValue_do(var1, var2 + 1, var3, false);
					int var7 = this.getBlockLightValue_do(var1 + 1, var2, var3, false);
					int var8 = this.getBlockLightValue_do(var1 - 1, var2, var3, false);
					int var9 = this.getBlockLightValue_do(var1, var2, var3 + 1, false);
					int var10 = this.getBlockLightValue_do(var1, var2, var3 - 1, false);
					if(var7 > var6) {
						var6 = var7;
					}

					if(var8 > var6) {
						var6 = var8;
					}

					if(var9 > var6) {
						var6 = var9;
					}

					if(var10 > var6) {
						var6 = var10;
					}

					return var6;
				}
			}

			if(var2 < 0) {
				return 0;
			} else if(var2 >= 128) {
				var5 = 15 - this.skylightSubtracted;
				if(var5 < 0) {
					var5 = 0;
				}

				return var5;
			} else {
				Chunk var11 = this.getChunkFromChunkCoords(var1 >> 4, var3 >> 4);
				var1 &= 15;
				var3 &= 15;
				return var11.getBlockLightValue(var1, var2, var3, this.skylightSubtracted);
			}
		} else {
			return 15;
		}
	}

	public boolean canExistingBlockSeeTheSky(int var1, int var2, int var3) {
		if(var1 >= -32000000 && var3 >= -32000000 && var1 < 32000000 && var3 <= 32000000) {
			if(var2 < 0) {
				return false;
			} else if(var2 >= 128) {
				return true;
			} else if(!this.chunkExists(var1 >> 4, var3 >> 4)) {
				return false;
			} else {
				Chunk var4 = this.getChunkFromChunkCoords(var1 >> 4, var3 >> 4);
				var1 &= 15;
				var3 &= 15;
				return var4.canBlockSeeTheSky(var1, var2, var3);
			}
		} else {
			return false;
		}
	}

	public int getHeightValue(int var1, int var2) {
		if(var1 >= -32000000 && var2 >= -32000000 && var1 < 32000000 && var2 <= 32000000) {
			if(!this.chunkExists(var1 >> 4, var2 >> 4)) {
				return 0;
			} else {
				Chunk var3 = this.getChunkFromChunkCoords(var1 >> 4, var2 >> 4);
				return var3.getHeightValue(var1 & 15, var2 & 15);
			}
		} else {
			return 0;
		}
	}

	public void neighborLightPropagationChanged(EnumSkyBlock var1, int var2, int var3, int var4, int var5) {
		if(this.blockExists(var2, var3, var4)) {
			if(var1 == EnumSkyBlock.Sky) {
				if(this.canExistingBlockSeeTheSky(var2, var3, var4)) {
					var5 = 15;
				}
			} else if(var1 == EnumSkyBlock.Block) {
				int var6 = this.getBlockId(var2, var3, var4);
				if(Block.lightValue[var6] > var5) {
					var5 = Block.lightValue[var6];
				}
			}

			if(this.getSavedLightValue(var1, var2, var3, var4) != var5) {
				this.scheduleLightingUpdate(var1, var2, var3, var4, var2, var3, var4);
			}
		}
	}

	public int getSavedLightValue(EnumSkyBlock var1, int var2, int var3, int var4) {
		if(var3 >= 0 && var3 < 128 && var2 >= -32000000 && var4 >= -32000000 && var2 < 32000000 && var4 <= 32000000) {
			int var5 = var2 >> 4;
			int var6 = var4 >> 4;
			if(!this.chunkExists(var5, var6)) {
				return 0;
			} else {
				Chunk var7 = this.getChunkFromChunkCoords(var5, var6);
				return var7.getSavedLightValue(var1, var2 & 15, var3, var4 & 15);
			}
		} else {
			return var1.defaultLightValue;
		}
	}

	public void setLightValue(EnumSkyBlock var1, int var2, int var3, int var4, int var5) {
		if(var2 >= -32000000 && var4 >= -32000000 && var2 < 32000000 && var4 <= 32000000) {
			if(var3 >= 0) {
				if(var3 < 128) {
					if(this.chunkExists(var2 >> 4, var4 >> 4)) {
						Chunk var6 = this.getChunkFromChunkCoords(var2 >> 4, var4 >> 4);
						var6.setLightValue(var1, var2 & 15, var3, var4 & 15, var5);

						for(int var7 = 0; var7 < this.worldAccesses.size(); ++var7) {
							((IWorldAccess)this.worldAccesses.get(var7)).markBlockAndNeighborsNeedsUpdate(var2, var3, var4);
						}

					}
				}
			}
		}
	}

	public float getBrightness(int var1, int var2, int var3) {
		return lightBrightnessTable[this.getBlockLightValue(var1, var2, var3)];
	}

	public boolean isDaytime() {
		return this.skylightSubtracted < 4;
	}

	public MovingObjectPosition rayTraceBlocks(Vec3D var1, Vec3D var2) {
		return this.rayTraceBlocks_do(var1, var2, false);
	}

	public MovingObjectPosition rayTraceBlocks_do(Vec3D var1, Vec3D var2, boolean var3) {
		if(!Double.isNaN(var1.xCoord) && !Double.isNaN(var1.yCoord) && !Double.isNaN(var1.zCoord)) {
			if(!Double.isNaN(var2.xCoord) && !Double.isNaN(var2.yCoord) && !Double.isNaN(var2.zCoord)) {
				int var4 = MathHelper.floor_double(var2.xCoord);
				int var5 = MathHelper.floor_double(var2.yCoord);
				int var6 = MathHelper.floor_double(var2.zCoord);
				int var7 = MathHelper.floor_double(var1.xCoord);
				int var8 = MathHelper.floor_double(var1.yCoord);
				int var9 = MathHelper.floor_double(var1.zCoord);
				int var10 = 20;

				while(var10-- >= 0) {
					if(Double.isNaN(var1.xCoord) || Double.isNaN(var1.yCoord) || Double.isNaN(var1.zCoord)) {
						return null;
					}

					if(var7 == var4 && var8 == var5 && var9 == var6) {
						return null;
					}

					double var11 = 999.0D;
					double var13 = 999.0D;
					double var15 = 999.0D;
					if(var4 > var7) {
						var11 = (double)var7 + 1.0D;
					}

					if(var4 < var7) {
						var11 = (double)var7 + 0.0D;
					}

					if(var5 > var8) {
						var13 = (double)var8 + 1.0D;
					}

					if(var5 < var8) {
						var13 = (double)var8 + 0.0D;
					}

					if(var6 > var9) {
						var15 = (double)var9 + 1.0D;
					}

					if(var6 < var9) {
						var15 = (double)var9 + 0.0D;
					}

					double var17 = 999.0D;
					double var19 = 999.0D;
					double var21 = 999.0D;
					double var23 = var2.xCoord - var1.xCoord;
					double var25 = var2.yCoord - var1.yCoord;
					double var27 = var2.zCoord - var1.zCoord;
					if(var11 != 999.0D) {
						var17 = (var11 - var1.xCoord) / var23;
					}

					if(var13 != 999.0D) {
						var19 = (var13 - var1.yCoord) / var25;
					}

					if(var15 != 999.0D) {
						var21 = (var15 - var1.zCoord) / var27;
					}

					boolean var29 = false;
					byte var35;
					if(var17 < var19 && var17 < var21) {
						if(var4 > var7) {
							var35 = 4;
						} else {
							var35 = 5;
						}

						var1.xCoord = var11;
						var1.yCoord += var25 * var17;
						var1.zCoord += var27 * var17;
					} else if(var19 < var21) {
						if(var5 > var8) {
							var35 = 0;
						} else {
							var35 = 1;
						}

						var1.xCoord += var23 * var19;
						var1.yCoord = var13;
						var1.zCoord += var27 * var19;
					} else {
						if(var6 > var9) {
							var35 = 2;
						} else {
							var35 = 3;
						}

						var1.xCoord += var23 * var21;
						var1.yCoord += var25 * var21;
						var1.zCoord = var15;
					}

					Vec3D var30 = Vec3D.createVector(var1.xCoord, var1.yCoord, var1.zCoord);
					var7 = (int)(var30.xCoord = (double)MathHelper.floor_double(var1.xCoord));
					if(var35 == 5) {
						--var7;
						++var30.xCoord;
					}

					var8 = (int)(var30.yCoord = (double)MathHelper.floor_double(var1.yCoord));
					if(var35 == 1) {
						--var8;
						++var30.yCoord;
					}

					var9 = (int)(var30.zCoord = (double)MathHelper.floor_double(var1.zCoord));
					if(var35 == 3) {
						--var9;
						++var30.zCoord;
					}

					int var31 = this.getBlockId(var7, var8, var9);
					int var32 = this.getBlockMetadata(var7, var8, var9);
					Block var33 = Block.blocksList[var31];
					MovingObjectPosition var34;
					if(var31 > 0 && var33.canCollideCheck(var32, var3)) {
						var34 = var33.collisionRayTrace(this, var7, var8, var9, var1, var2);
						if(var34 != null) {
							return var34;
						}
					}

					var31 = this.getBlockId(var7, var8 - 1, var9);
					var32 = this.getBlockMetadata(var7, var8 - 1, var9);
					var33 = Block.blocksList[var31];
					if(var31 > 0 && var33.canCollideCheck(var32, var3)) {
						var34 = var33.collisionRayTrace(this, var7, var8 - 1, var9, var1, var2);
						if(var34 != null) {
							return var34;
						}
					}
				}

				return null;
			} else {
				return null;
			}
		} else {
			return null;
		}
	}

	public void playSoundAtEntity(Entity var1, String var2, float var3, float var4) {
		for(int var5 = 0; var5 < this.worldAccesses.size(); ++var5) {
			float var6 = 16.0F;
			if(var3 > 1.0F) {
				var6 *= var3;
			}

			if(this.playerEntity.getDistanceSqToEntity(var1) < (double)(var6 * var6)) {
				((IWorldAccess)this.worldAccesses.get(var5)).playSound(var2, var1.posX, var1.posY - (double)var1.yOffset, var1.posZ, var3, var4);
			}
		}

	}

	public void playSoundEffect(double var1, double var3, double var5, String var7, float var8, float var9) {
		try {
			for(int var10 = 0; var10 < this.worldAccesses.size(); ++var10) {
				float var11 = 16.0F;
				if(var8 > 1.0F) {
					var11 *= var8;
				}

				double var12 = var1 - this.playerEntity.posX;
				double var14 = var3 - this.playerEntity.posY;
				double var16 = var5 - this.playerEntity.posZ;
				if(var12 * var12 + var14 * var14 + var16 * var16 < (double)(var11 * var11)) {
					((IWorldAccess)this.worldAccesses.get(var10)).playSound(var7, var1, var3, var5, var8, var9);
				}
			}
		} catch (Exception var18) {
			var18.printStackTrace();
		}

	}

	public void playMusic(double var1, double var3, double var5, String var7, float var8) {
	}

	public void spawnParticle(String var1, double var2, double var4, double var6, double var8, double var10, double var12) {
		for(int var14 = 0; var14 < this.worldAccesses.size(); ++var14) {
			((IWorldAccess)this.worldAccesses.get(var14)).spawnParticle(var1, var2, var4, var6, var8, var10, var12);
		}

	}

	public void spawnEntityInWorld(Entity var1) {
		int var2 = MathHelper.floor_double(var1.posX / 16.0D);
		int var3 = MathHelper.floor_double(var1.posZ / 16.0D);
		if(this.chunkExists(var2, var3)) {
			this.getChunkFromChunkCoords(var2, var3).addEntity(var1);
			this.loadedEntityList.add(var1);

			for(int var4 = 0; var4 < this.worldAccesses.size(); ++var4) {
				((IWorldAccess)this.worldAccesses.get(var4)).obtainEntitySkin(var1);
			}
		} else {
			System.out.println("Failed to add entity " + var1);
		}

	}

	public void setEntityDead(Entity var1) {
		var1.setEntityDead();
	}

	public void addWorldAccess(IWorldAccess var1) {
		this.worldAccesses.add(var1);
	}

	public void removeWorldAccess(IWorldAccess var1) {
		this.worldAccesses.remove(var1);
	}

	public List getCollidingBoundingBoxes(Entity var1, AxisAlignedBB var2) {
		this.collidingBoundingBoxes.clear();
		int var3 = MathHelper.floor_double(var2.minX);
		int var4 = MathHelper.floor_double(var2.maxX + 1.0D);
		int var5 = MathHelper.floor_double(var2.minY);
		int var6 = MathHelper.floor_double(var2.maxY + 1.0D);
		int var7 = MathHelper.floor_double(var2.minZ);
		int var8 = MathHelper.floor_double(var2.maxZ + 1.0D);

		for(int var9 = var3; var9 < var4; ++var9) {
			for(int var10 = var5 - 1; var10 < var6; ++var10) {
				for(int var11 = var7; var11 < var8; ++var11) {
					Block var12 = Block.blocksList[this.getBlockId(var9, var10, var11)];
					if(var12 != null) {
						var12.getCollidingBoundingBoxes(this, var9, var10, var11, var2, this.collidingBoundingBoxes);
					}
				}
			}
		}

		double var16 = 0.25D;
		List var14 = this.getEntitiesWithinAABBExcludingEntity(var1, var2.expand(var16, var16, var16));

		for(int var15 = 0; var15 < var14.size(); ++var15) {
			AxisAlignedBB var13 = ((Entity)var14.get(var15)).getBoundingBox();
			if(var13 != null) {
				this.collidingBoundingBoxes.add(var13);
			}

			var13 = var1.getCollisionBox((Entity)var14.get(var15));
			if(var13 != null) {
				this.collidingBoundingBoxes.add(var13);
			}
		}

		return this.collidingBoundingBoxes;
	}

	public int calculateSkylightSubtracted(float var1) {
		float var2 = this.getCelestialAngle(var1);
		float var3 = 1.0F - (MathHelper.cos(var2 * (float)Math.PI * 2.0F) * 2.0F + 0.5F);
		if(var3 < 0.0F) {
			var3 = 0.0F;
		}

		if(var3 > 1.0F) {
			var3 = 1.0F;
		}

		return (int)(var3 * 11.0F);
	}

	public Vec3D getSkyColor(float var1) {
		float var2 = this.getCelestialAngle(var1);
		float var3 = MathHelper.cos(var2 * (float)Math.PI * 2.0F) * 2.0F + 0.5F;
		if(var3 < 0.0F) {
			var3 = 0.0F;
		}

		if(var3 > 1.0F) {
			var3 = 1.0F;
		}

		float var4 = (float)(this.skyColor >> 16 & 255L) / 255.0F;
		float var5 = (float)(this.skyColor >> 8 & 255L) / 255.0F;
		float var6 = (float)(this.skyColor & 255L) / 255.0F;
		var4 *= var3;
		var5 *= var3;
		var6 *= var3;
		return Vec3D.createVector((double)var4, (double)var5, (double)var6);
	}

	public float getCelestialAngle(float var1) {
		int var2 = (int)(this.worldTime % 24000L);
		float var3 = ((float)var2 + var1) / 24000.0F - 0.25F;
		if(var3 < 0.0F) {
			++var3;
		}

		if(var3 > 1.0F) {
			--var3;
		}

		float var4 = var3;
		var3 = 1.0F - (float)((Math.cos((double)var3 * Math.PI) + 1.0D) / 2.0D);
		var3 = var4 + (var3 - var4) / 3.0F;
		return var3;
	}

	public Vec3D getCloudColor(float var1) {
		float var2 = this.getCelestialAngle(var1);
		float var3 = MathHelper.cos(var2 * (float)Math.PI * 2.0F) * 2.0F + 0.5F;
		if(var3 < 0.0F) {
			var3 = 0.0F;
		}

		if(var3 > 1.0F) {
			var3 = 1.0F;
		}

		float var4 = (float)(this.cloudColor >> 16 & 255L) / 255.0F;
		float var5 = (float)(this.cloudColor >> 8 & 255L) / 255.0F;
		float var6 = (float)(this.cloudColor & 255L) / 255.0F;
		var4 *= var3 * 0.9F + 0.1F;
		var5 *= var3 * 0.9F + 0.1F;
		var6 *= var3 * 0.85F + 0.15F;
		return Vec3D.createVector((double)var4, (double)var5, (double)var6);
	}

	public Vec3D getFogColor(float var1) {
		float var2 = this.getCelestialAngle(var1);
		float var3 = MathHelper.cos(var2 * (float)Math.PI * 2.0F) * 2.0F + 0.5F;
		if(var3 < 0.0F) {
			var3 = 0.0F;
		}

		if(var3 > 1.0F) {
			var3 = 1.0F;
		}

		float var4 = (float)(this.fogColor >> 16 & 255L) / 255.0F;
		float var5 = (float)(this.fogColor >> 8 & 255L) / 255.0F;
		float var6 = (float)(this.fogColor & 255L) / 255.0F;
		var4 *= var3 * 0.94F + 0.06F;
		var5 *= var3 * 0.94F + 0.06F;
		var6 *= var3 * 0.91F + 0.09F;
		return Vec3D.createVector((double)var4, (double)var5, (double)var6);
	}

	public int getTopSolidOrLiquidBlock(int var1, int var2) {
		return 64;
	}

	public float getStarBrightness(float var1) {
		float var2 = this.getCelestialAngle(var1);
		float var3 = 1.0F - (MathHelper.cos(var2 * (float)Math.PI * 2.0F) * 2.0F + 12.0F / 16.0F);
		if(var3 < 0.0F) {
			var3 = 0.0F;
		}

		if(var3 > 1.0F) {
			var3 = 1.0F;
		}

		return var3 * var3 * 0.5F;
	}

	public void scheduleBlockUpdate(int var1, int var2, int var3, int var4) {
		NextTickListEntry var5 = new NextTickListEntry(var1, var2, var3, var4);
		byte var6 = 8;
		if(this.checkChunksExist(var1 - var6, var2 - var6, var3 - var6, var1 + var6, var2 + var6, var3 + var6)) {
			if(var4 > 0) {
				var5.setScheduledTime((long)Block.blocksList[var4].tickRate() + this.worldTime);
			}

			if(!this.scheduledTickSet.contains(var5)) {
				this.scheduledTickSet.add(var5);
				this.scheduledTickTreeSet.add(var5);
			}
		}

	}

	public void updateEntities() {
		this.loadedEntityList.removeAll(this.unloadedEntityList);

		int var1;
		int var3;
		for(var1 = 0; var1 < this.worldAccesses.size(); ++var1) {
			IWorldAccess var2 = (IWorldAccess)this.worldAccesses.get(var1);

			for(var3 = 0; var3 < this.unloadedEntityList.size(); ++var3) {
				var2.releaseEntitySkin((Entity)this.unloadedEntityList.get(var3));
			}
		}

		this.unloadedEntityList.clear();

		for(var1 = 0; var1 < this.loadedEntityList.size(); ++var1) {
			Entity var6 = (Entity)this.loadedEntityList.get(var1);
			if(var6.ridingEntity != null) {
				if(!var6.ridingEntity.isDead && var6.ridingEntity.riddenByEntity == var6) {
					continue;
				}

				var6.ridingEntity.riddenByEntity = null;
				var6.ridingEntity = null;
			}

			if(!var6.isDead) {
				this.updateEntity(var6);
			}

			if(var6.isDead) {
				var3 = MathHelper.floor_double(var6.posX / 16.0D);
				int var4 = MathHelper.floor_double(var6.posZ / 16.0D);
				if(this.chunkExists(var3, var4)) {
					this.getChunkFromChunkCoords(var3, var4).removeEntity(var6);
				}

				this.loadedEntityList.remove(var1--);

				for(int var5 = 0; var5 < this.worldAccesses.size(); ++var5) {
					((IWorldAccess)this.worldAccesses.get(var5)).releaseEntitySkin(var6);
				}
			}
		}

		for(var1 = 0; var1 < this.loadedTileEntityList.size(); ++var1) {
			TileEntity var7 = (TileEntity)this.loadedTileEntityList.get(var1);
			var7.updateEntity();
		}

	}

	private void updateEntity(Entity var1) {
		int var2 = MathHelper.floor_double(var1.posX);
		int var3 = MathHelper.floor_double(var1.posY);
		int var4 = MathHelper.floor_double(var1.posZ);
		byte var5 = 16;
		if(this.checkChunksExist(var2 - var5, 0, var4 - var5, var2 + var5, 128, var4 + var5)) {
			var1.lastTickPosX = var1.posX;
			var1.lastTickPosY = var1.posY;
			var1.lastTickPosZ = var1.posZ;
			var1.prevRotationYaw = var1.rotationYaw;
			var1.prevRotationPitch = var1.rotationPitch;
			int var6 = MathHelper.floor_double(var1.posX / 16.0D);
			int var7 = MathHelper.floor_double(var1.posY / 16.0D);
			int var8 = MathHelper.floor_double(var1.posZ / 16.0D);
			if(var1.ridingEntity != null) {
				var1.updateRidden();
			} else {
				var1.onUpdate();
			}

			int var9 = MathHelper.floor_double(var1.posX / 16.0D);
			int var10 = MathHelper.floor_double(var1.posY / 16.0D);
			int var11 = MathHelper.floor_double(var1.posZ / 16.0D);
			if(var6 != var9 || var7 != var10 || var8 != var11) {
				if(this.chunkExists(var6, var8)) {
					this.getChunkFromChunkCoords(var6, var8).removeEntityAtIndex(var1, var7);
				}

				if(this.chunkExists(var9, var11)) {
					this.getChunkFromChunkCoords(var9, var11).addEntity(var1);
				} else {
					var1.setEntityDead();
				}
			}

			if(var1.riddenByEntity != null) {
				if(!var1.riddenByEntity.isDead && var1.riddenByEntity.ridingEntity == var1) {
					this.updateEntity(var1.riddenByEntity);
				} else {
					var1.riddenByEntity.ridingEntity = null;
					var1.riddenByEntity = null;
				}
			}

			if(Double.isNaN(var1.posX) || Double.isInfinite(var1.posX)) {
				var1.posX = var1.lastTickPosX;
			}

			if(Double.isNaN(var1.posY) || Double.isInfinite(var1.posY)) {
				var1.posY = var1.lastTickPosY;
			}

			if(Double.isNaN(var1.posZ) || Double.isInfinite(var1.posZ)) {
				var1.posZ = var1.lastTickPosZ;
			}

			if(Double.isNaN((double)var1.rotationPitch) || Double.isInfinite((double)var1.rotationPitch)) {
				var1.rotationPitch = var1.prevRotationPitch;
			}

			if(Double.isNaN((double)var1.rotationYaw) || Double.isInfinite((double)var1.rotationYaw)) {
				var1.rotationYaw = var1.prevRotationYaw;
			}

		}
	}

	public boolean checkIfAABBIsClear(AxisAlignedBB var1) {
		List var2 = this.getEntitiesWithinAABBExcludingEntity((Entity)null, var1);

		for(int var3 = 0; var3 < var2.size(); ++var3) {
			Entity var4 = (Entity)var2.get(var3);
			if(!var4.isDead && var4.preventEntitySpawning) {
				return false;
			}
		}

		return true;
	}

	public boolean getIsAnyLiquid(AxisAlignedBB var1) {
		int var2 = MathHelper.floor_double(var1.minX);
		int var3 = MathHelper.floor_double(var1.maxX + 1.0D);
		int var4 = MathHelper.floor_double(var1.minY);
		int var5 = MathHelper.floor_double(var1.maxY + 1.0D);
		int var6 = MathHelper.floor_double(var1.minZ);
		int var7 = MathHelper.floor_double(var1.maxZ + 1.0D);
		if(var1.minX < 0.0D) {
			--var2;
		}

		if(var1.minY < 0.0D) {
			--var4;
		}

		if(var1.minZ < 0.0D) {
			--var6;
		}

		for(int var8 = var2; var8 < var3; ++var8) {
			for(int var9 = var4; var9 < var5; ++var9) {
				for(int var10 = var6; var10 < var7; ++var10) {
					Block var11 = Block.blocksList[this.getBlockId(var8, var9, var10)];
					if(var11 != null && var11.blockMaterial.getIsLiquid()) {
						return true;
					}
				}
			}
		}

		return false;
	}

	public boolean isBoundingBoxBurning(AxisAlignedBB var1) {
		int var2 = MathHelper.floor_double(var1.minX);
		int var3 = MathHelper.floor_double(var1.maxX + 1.0D);
		int var4 = MathHelper.floor_double(var1.minY);
		int var5 = MathHelper.floor_double(var1.maxY + 1.0D);
		int var6 = MathHelper.floor_double(var1.minZ);
		int var7 = MathHelper.floor_double(var1.maxZ + 1.0D);

		for(int var8 = var2; var8 < var3; ++var8) {
			for(int var9 = var4; var9 < var5; ++var9) {
				for(int var10 = var6; var10 < var7; ++var10) {
					int var11 = this.getBlockId(var8, var9, var10);
					if(var11 == Block.fire.blockID || var11 == Block.lavaMoving.blockID || var11 == Block.lavaStill.blockID) {
						return true;
					}
				}
			}
		}

		return false;
	}

	public boolean handleMaterialAcceleration(AxisAlignedBB var1, Material var2, Entity var3) {
		int var4 = MathHelper.floor_double(var1.minX);
		int var5 = MathHelper.floor_double(var1.maxX + 1.0D);
		int var6 = MathHelper.floor_double(var1.minY);
		int var7 = MathHelper.floor_double(var1.maxY + 1.0D);
		int var8 = MathHelper.floor_double(var1.minZ);
		int var9 = MathHelper.floor_double(var1.maxZ + 1.0D);
		boolean var10 = false;
		Vec3D var11 = Vec3D.createVector(0.0D, 0.0D, 0.0D);

		for(int var12 = var4; var12 < var5; ++var12) {
			for(int var13 = var6; var13 < var7; ++var13) {
				for(int var14 = var8; var14 < var9; ++var14) {
					Block var15 = Block.blocksList[this.getBlockId(var12, var13, var14)];
					if(var15 != null && var15.blockMaterial == var2) {
						double var16 = (double)((float)(var13 + 1) - BlockFluid.getPercentAir(this.getBlockMetadata(var12, var13, var14)));
						if((double)var7 >= var16) {
							var10 = true;
							var15.velocityToAddToEntity(this, var12, var13, var14, var3, var11);
						}
					}
				}
			}
		}

		if(var11.lengthVector() > 0.0D) {
			var11 = var11.normalize();
			double var18 = 0.004D;
			var3.motionX += var11.xCoord * var18;
			var3.motionY += var11.yCoord * var18;
			var3.motionZ += var11.zCoord * var18;
		}

		return var10;
	}

	public boolean isMaterialInBB(AxisAlignedBB var1, Material var2) {
		int var3 = MathHelper.floor_double(var1.minX);
		int var4 = MathHelper.floor_double(var1.maxX + 1.0D);
		int var5 = MathHelper.floor_double(var1.minY);
		int var6 = MathHelper.floor_double(var1.maxY + 1.0D);
		int var7 = MathHelper.floor_double(var1.minZ);
		int var8 = MathHelper.floor_double(var1.maxZ + 1.0D);

		for(int var9 = var3; var9 < var4; ++var9) {
			for(int var10 = var5; var10 < var6; ++var10) {
				for(int var11 = var7; var11 < var8; ++var11) {
					Block var12 = Block.blocksList[this.getBlockId(var9, var10, var11)];
					if(var12 != null && var12.blockMaterial == var2) {
						return true;
					}
				}
			}
		}

		return false;
	}

	public void createExplosion(Entity var1, double var2, double var4, double var6, float var8) {
		(new Explosion()).doExplosion(this, var1, var2, var4, var6, var8);
	}

	public float getBlockDensity(Vec3D var1, AxisAlignedBB var2) {
		double var3 = 1.0D / ((var2.maxX - var2.minX) * 2.0D + 1.0D);
		double var5 = 1.0D / ((var2.maxY - var2.minY) * 2.0D + 1.0D);
		double var7 = 1.0D / ((var2.maxZ - var2.minZ) * 2.0D + 1.0D);
		int var9 = 0;
		int var10 = 0;

		for(float var11 = 0.0F; var11 <= 1.0F; var11 = (float)((double)var11 + var3)) {
			for(float var12 = 0.0F; var12 <= 1.0F; var12 = (float)((double)var12 + var5)) {
				for(float var13 = 0.0F; var13 <= 1.0F; var13 = (float)((double)var13 + var7)) {
					double var14 = var2.minX + (var2.maxX - var2.minX) * (double)var11;
					double var16 = var2.minY + (var2.maxY - var2.minY) * (double)var12;
					double var18 = var2.minZ + (var2.maxZ - var2.minZ) * (double)var13;
					if(this.rayTraceBlocks(Vec3D.createVector(var14, var16, var18), var1) == null) {
						++var9;
					}

					++var10;
				}
			}
		}

		return (float)var9 / (float)var10;
	}

	public void extinguishFire(int var1, int var2, int var3, int var4) {
		if(var4 == 0) {
			--var2;
		}

		if(var4 == 1) {
			++var2;
		}

		if(var4 == 2) {
			--var3;
		}

		if(var4 == 3) {
			++var3;
		}

		if(var4 == 4) {
			--var1;
		}

		if(var4 == 5) {
			++var1;
		}

		if(this.getBlockId(var1, var2, var3) == Block.fire.blockID) {
			this.playSoundEffect((double)((float)var1 + 0.5F), (double)((float)var2 + 0.5F), (double)((float)var3 + 0.5F), "random.fizz", 0.5F, 2.6F + (this.rand.nextFloat() - this.rand.nextFloat()) * 0.8F);
			this.setBlockWithNotify(var1, var2, var3, 0);
		}

	}

	public Entity createDebugPlayer(Class var1) {
		return null;
	}

	public String getDebugLoadedEntities() {
		return "All: " + this.loadedEntityList.size();
	}

	public Entity getPlayerEntity() {
		return this.playerEntity;
	}

	public TileEntity getBlockTileEntity(int var1, int var2, int var3) {
		Chunk var4 = this.getChunkFromChunkCoords(var1 >> 4, var3 >> 4);
		return var4 != null ? var4.getChunkBlockTileEntity(var1 & 15, var2, var3 & 15) : null;
	}

	public void setBlockTileEntity(int var1, int var2, int var3, TileEntity var4) {
		Chunk var5 = this.getChunkFromChunkCoords(var1 >> 4, var3 >> 4);
		if(var5 != null) {
			var5.setChunkBlockTileEntity(var1 & 15, var2, var3 & 15, var4);
		}

	}

	public void removeBlockTileEntity(int var1, int var2, int var3) {
		Chunk var4 = this.getChunkFromChunkCoords(var1 >> 4, var3 >> 4);
		if(var4 != null) {
			var4.removeChunkBlockTileEntity(var1 & 15, var2, var3 & 15);
		}

	}

	public boolean isBlockNormalCube(int var1, int var2, int var3) {
		Block var4 = Block.blocksList[this.getBlockId(var1, var2, var3)];
		return var4 == null ? false : var4.isOpaqueCube();
	}

	public void saveWorldIndirectly(IProgressUpdate var1) {
		this.saveWorld(true, var1);
	}
	
	public boolean updatingLighting() {
		if (lightUpdated >= 50) {
			return false;
		}
		lightUpdated++;
		try {
			int i = 500;
			for (; lightingToUpdate.size() > 0; ((MetadataChunkBlock) lightingToUpdate.remove(lightingToUpdate.size() - 1)).updateLight(this)) {
				if (--i <= 0) {
					boolean flag = true;
					return flag;
				}
			}

			boolean flag1 = false;
			return flag1;
		} finally {
			lightUpdated--;
		}
	}

	public void scheduleLightingUpdate(EnumSkyBlock var1, int var2, int var3, int var4, int var5, int var6, int var7) {
		scheduleLightingUpdate(var1, var2, var3, var4, var5, var6, var7, true);
	}
	
	public void scheduleLightingUpdate(EnumSkyBlock enumskyblock, int i, int j, int k, int l, int i1, int j1, boolean flag) {
		lightUpdates++;
		if (lightUpdates == 50) {
			lightUpdates--;
			return;
		}
		int k1 = (l + i) / 2;
		int l1 = (j1 + k) / 2;
		if (!blockExists(k1, 64, l1)) {
			lightUpdates--;
			return;
		}
		int i2 = lightingToUpdate.size();
		if (flag) {
			int j2 = 5;
			if (j2 > i2) {
				j2 = i2;
			}
			for (int l2 = 0; l2 < j2; l2++) {
				MetadataChunkBlock metadatachunkblock = (MetadataChunkBlock) lightingToUpdate.get(lightingToUpdate.size() - l2 - 1);
				if (metadatachunkblock.skyBlock == enumskyblock && metadatachunkblock.getLightUpdated(i, j, k, l, i1, j1)) {
					lightUpdates--;
					return;
				}
			}

		}
		lightingToUpdate.add(new MetadataChunkBlock(enumskyblock, i, j, k, l, i1, j1));
		int k2 = 0xf4240;
		if (lightingToUpdate.size() > 0xf4240) {
			System.out.println((new StringBuilder()).append("More than ").append(k2).append(" updates, aborting lighting updates").toString());
			lightingToUpdate.clear();
		}
		lightUpdates--;
	}

	public void calculateInitialSkylight() {
		int var1 = this.calculateSkylightSubtracted(1.0F);
		if(var1 != this.skylightSubtracted) {
			this.skylightSubtracted = var1;
		}

	}

	public void tick() {
		if(!this.loadedEntityList.contains(this.playerEntity) && this.playerEntity != null) {
			System.out.println("DOHASDOSHIH!");
			this.spawnEntityInWorld(this.playerEntity);
		}

		int var1 = this.calculateSkylightSubtracted(1.0F);
		int var2;
		if(var1 != this.skylightSubtracted) {
			this.skylightSubtracted = var1;

			for(var2 = 0; var2 < this.worldAccesses.size(); ++var2) {
				((IWorldAccess)this.worldAccesses.get(var2)).updateAllRenderers();
			}
		}

		++this.worldTime;
		if(this.worldTime % 20L == 0L) {
			this.saveWorld(false, (IProgressUpdate)null);
		}

		this.tickUpdates(false);
		var2 = MathHelper.floor_double(this.playerEntity.posX);
		int var3 = MathHelper.floor_double(this.playerEntity.posZ);
		byte var4 = 64;
		ChunkCache var5 = new ChunkCache(this, var2 - var4, 0, var3 - var4, var2 + var4, 128, var3 + var4);

		for(int var6 = 0; var6 < 8000; ++var6) {
			this.updateLCG = this.updateLCG * 3 + this.DIST_HASH_MAGIC;
			int var7 = this.updateLCG >> 2;
			int var8 = (var7 & 127) - 64 + var2;
			int var9 = (var7 >> 8 & 127) - 64 + var3;
			int var10 = var7 >> 16 & 127;
			int var11 = var5.getBlockId(var8, var10, var9);
			if(Block.tickOnLoad[var11]) {
				Block.blocksList[var11].updateTick(this, var8, var10, var9, this.rand);
			}
		}

	}

	public boolean tickUpdates(boolean var1) {
		int var2 = this.scheduledTickTreeSet.size();
		if(var2 != this.scheduledTickSet.size()) {
			throw new IllegalStateException("TickNextTick list out of synch");
		} else {
			if(var2 > 500) {
				var2 = 500;
			}

			for(int var3 = 0; var3 < var2; ++var3) {
				NextTickListEntry var4 = (NextTickListEntry)this.scheduledTickTreeSet.first();
				if(!var1 && var4.scheduledTime > this.worldTime) {
					break;
				}

				this.scheduledTickTreeSet.remove(var4);
				this.scheduledTickSet.remove(var4);
				byte var5 = 8;
				if(this.checkChunksExist(var4.xCoord - var5, var4.yCoord - var5, var4.zCoord - var5, var4.xCoord + var5, var4.yCoord + var5, var4.zCoord + var5)) {
					int var6 = this.getBlockId(var4.xCoord, var4.yCoord, var4.zCoord);
					if(var6 == var4.blockID && var6 > 0) {
						Block.blocksList[var6].updateTick(this, var4.xCoord, var4.yCoord, var4.zCoord, this.rand);
					}
				}
			}

			return this.scheduledTickTreeSet.size() != 0;
		}
	}

	public void randomDisplayUpdates(int var1, int var2, int var3) {
		byte var4 = 16;
		Random var5 = new Random();

		for(int var6 = 0; var6 < 1000; ++var6) {
			int var7 = var1 + this.rand.nextInt(var4) - this.rand.nextInt(var4);
			int var8 = var2 + this.rand.nextInt(var4) - this.rand.nextInt(var4);
			int var9 = var3 + this.rand.nextInt(var4) - this.rand.nextInt(var4);
			int var10 = this.getBlockId(var7, var8, var9);
			if(var10 > 0) {
				Block.blocksList[var10].randomDisplayTick(this, var7, var8, var9, var5);
			}
		}

	}

	public List getEntitiesWithinAABBExcludingEntity(Entity var1, AxisAlignedBB var2) {
		this.entitiesWithinAABBExcludingEntity.clear();
		int var3 = MathHelper.floor_double((var2.minX - 2.0D) / 16.0D);
		int var4 = MathHelper.floor_double((var2.maxX + 2.0D) / 16.0D);
		int var5 = MathHelper.floor_double((var2.minZ - 2.0D) / 16.0D);
		int var6 = MathHelper.floor_double((var2.maxZ + 2.0D) / 16.0D);

		for(int var7 = var3; var7 <= var4; ++var7) {
			for(int var8 = var5; var8 <= var6; ++var8) {
				if(this.chunkExists(var7, var8)) {
					this.getChunkFromChunkCoords(var7, var8).getEntitiesWithinAABBForEntity(var1, var2, this.entitiesWithinAABBExcludingEntity);
				}
			}
		}

		return this.entitiesWithinAABBExcludingEntity;
	}

	public List getEntitiesWithinAABB(Class var1, AxisAlignedBB var2) {
		int var3 = MathHelper.floor_double((var2.minX - 2.0D) / 16.0D);
		int var4 = MathHelper.floor_double((var2.maxX + 2.0D) / 16.0D);
		int var5 = MathHelper.floor_double((var2.minZ - 2.0D) / 16.0D);
		int var6 = MathHelper.floor_double((var2.maxZ + 2.0D) / 16.0D);
		ArrayList var7 = new ArrayList();

		for(int var8 = var3; var8 <= var4; ++var8) {
			for(int var9 = var5; var9 <= var6; ++var9) {
				if(this.chunkExists(var8, var9)) {
					this.getChunkFromChunkCoords(var8, var9).getEntitiesOfTypeWithinAAAB(var1, var2, var7);
				}
			}
		}

		return var7;
	}

	public List getLoadedEntityList() {
		return this.loadedEntityList;
	}

	public void updateTileEntityChunkAndDoNothing(int var1, int var2, int var3) {
		if(this.blockExists(var1, var2, var3)) {
			this.getChunkFromBlockCoords(var1, var3).setChunkModified();
		}

	}

	public int countEntities(Class var1) {
		int var2 = 0;

		for(int var3 = 0; var3 < this.loadedEntityList.size(); ++var3) {
			Entity var4 = (Entity)this.loadedEntityList.get(var3);
			if(var1.isAssignableFrom(var4.getClass())) {
				++var2;
			}
		}

		return var2;
	}

	public void addLoadedEntities(List var1) {
		this.loadedEntityList.addAll(var1);

		for(int var2 = 0; var2 < this.worldAccesses.size(); ++var2) {
			IWorldAccess var3 = (IWorldAccess)this.worldAccesses.get(var2);

			for(int var4 = 0; var4 < var1.size(); ++var4) {
				var3.obtainEntitySkin((Entity)var1.get(var4));
			}
		}

	}

	public void unloadEntities(List var1) {
		this.unloadedEntityList.addAll(var1);
	}

	public boolean canBlockBePlacedAt(int var1, int var2, int var3, int var4, boolean var5) {
		int var6 = this.getBlockId(var2, var3, var4);
		Block var7 = Block.blocksList[var6];
		Block var8 = Block.blocksList[var1];
		AxisAlignedBB var9 = var8.getCollisionBoundingBoxFromPool(this, var2, var3, var4);
		if(var5) {
			var9 = null;
		}

		return (var1 > 0 && var7 == null || var7 == Block.waterMoving || var7 == Block.waterStill || var7 == Block.lavaMoving || var7 == Block.lavaStill || var7 == Block.fire) && (var9 == null || this.checkIfAABBIsClear(var9)) && var8.canPlaceBlockAt(this, var2, var3, var4);
	}

	public PathEntity getPathToEntity(Entity var1, Entity var2, float var3) {
		int var4 = MathHelper.floor_double(var1.posX);
		int var5 = MathHelper.floor_double(var1.posY);
		int var6 = MathHelper.floor_double(var1.posZ);
		int var7 = (int)(var3 + 32.0F);
		int var8 = var4 - var7;
		int var9 = var5 - var7;
		int var10 = var6 - var7;
		int var11 = var4 + var7;
		int var12 = var5 + var7;
		int var13 = var6 + var7;
		ChunkCache var14 = new ChunkCache(this, var8, var9, var10, var11, var12, var13);
		return (new Pathfinder(var14)).createEntityPathTo(var1, var2, var3);
	}

	public PathEntity getEntityPathToXYZ(Entity var1, int var2, int var3, int var4, float var5) {
		int var6 = MathHelper.floor_double(var1.posX);
		int var7 = MathHelper.floor_double(var1.posY);
		int var8 = MathHelper.floor_double(var1.posZ);
		int var9 = (int)(var5 + 32.0F);
		int var10 = var6 - var9;
		int var11 = var7 - var9;
		int var12 = var8 - var9;
		int var13 = var6 + var9;
		int var14 = var7 + var9;
		int var15 = var8 + var9;
		ChunkCache var16 = new ChunkCache(this, var10, var11, var12, var13, var14, var15);
		return (new Pathfinder(var16)).createEntityPathTo(var1, var2, var3, var4, var5);
	}
	
	public boolean doChunksNearChunkExist(int i, int j, int k, int l) {
		return checkChunksExist(i - l, j - l, k - l, i + l, j + l, k + l);
	}

	static {
		float var0 = 0.05F;

		for(int var1 = 0; var1 <= 15; ++var1) {
			float var2 = 1.0F - (float)var1 / 15.0F;
			lightBrightnessTable[var1] = (1.0F - var2) / (var2 * 3.0F + 1.0F) * (1.0F - var0) + var0;
		}

	}
}
