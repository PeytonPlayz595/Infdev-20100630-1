package net.minecraft.src;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Chunk {
	public static boolean isLit;
	public byte[] blocks;
	public boolean isChunkLoaded;
	public World worldObj;
	public NibbleArray data;
	public NibbleArray skylightMap;
	public NibbleArray blocklightMap;
	public byte[] heightMap;
	public int height;
	public final int xPosition;
	public final int zPosition;
	public Map chunkTileEntityMap;
	public List[] entities;
	public boolean isTerrainPopulated;
	public boolean isModified;
	public boolean neverSave;
	public boolean isChunkRendered;
	public boolean hasEntities;
	public long lastSaveTime;

	public Chunk(World var1, int var2, int var3) {
		this.chunkTileEntityMap = new HashMap();
		this.entities = new List[8];
		this.isTerrainPopulated = false;
		this.isModified = false;
		this.isChunkRendered = false;
		this.hasEntities = false;
		this.lastSaveTime = 0L;
		this.worldObj = var1;
		this.xPosition = var2;
		this.zPosition = var3;
		this.heightMap = new byte[256];

		for(int var4 = 0; var4 < this.entities.length; ++var4) {
			this.entities[var4] = new ArrayList();
		}

	}

	public Chunk(World var1, byte[] var2, int var3, int var4) {
		this(var1, var3, var4);
		this.blocks = var2;
		this.data = new NibbleArray(var2.length);
		this.skylightMap = new NibbleArray(var2.length);
		this.blocklightMap = new NibbleArray(var2.length);
	}

	public boolean isAtLocation(int var1, int var2) {
		return var1 == this.xPosition && var2 == this.zPosition;
	}

	public int getHeightValue(int var1, int var2) {
		return this.heightMap[var2 << 4 | var1] & 255;
	}

	public void doNothing() {
	}
	
	private void func_996_c(int i, int j) {
		int k = getHeightValue(i, j);
		int l = xPosition * 16 + i;
		int i1 = zPosition * 16 + j;
		checkSkylightNeighborHeight(l - 1, i1, k);
		checkSkylightNeighborHeight(l + 1, i1, k);
		checkSkylightNeighborHeight(l, i1 - 1, k);
		checkSkylightNeighborHeight(l, i1 + 1, k);
	}

	public void generateHeightMap() {
		int i = 127;
		for (int j = 0; j < 16; j++) {
			for (int k = 0; k < 16; k++) {
				int l = 127;
				for (int i1 = j << 11 | k << 7; l > 0 && Block.lightOpacity[blocks[(i1 + l) - 1]] == 0; l--) {
				}
				heightMap[k << 4 | j] = (byte) l;
				if (l < i) {
					i = l;
				}
			}

		}

		height = i;
		isModified = true;
	}

	private void checkSkylightNeighborHeight(int var1, int var2, int var3) {
		int var4 = this.worldObj.getHeightValue(var1, var2);
		if(var4 > var3) {
			this.worldObj.scheduleLightingUpdate(EnumSkyBlock.Sky, var1, var3, var2, var1, var4, var2);
		} else if(var4 < var3) {
			this.worldObj.scheduleLightingUpdate(EnumSkyBlock.Sky, var1, var4, var2, var1, var3, var2);
		}

		this.isModified = true;
	}

	private void relightBlock(int var1, int var2, int var3) {
		int var4 = this.heightMap[var3 << 4 | var1] & 255;
		int var5 = var4;
		if(var2 > var4) {
			var5 = var2;
		}

		while(var5 > 0 && Block.lightOpacity[this.getBlockID(var1, var5 - 1, var3)] == 0) {
			--var5;
		}

		if(var5 != var4) {
			this.worldObj.markBlockAsNeedsUpdate(var1, var3, var5, var4);
			this.heightMap[var3 << 4 | var1] = (byte)var5;
			int var6;
			int var7;
			int var8;
			if(var5 < this.height) {
				this.height = var5;
			} else {
				var6 = 127;

				for(var7 = 0; var7 < 16; ++var7) {
					for(var8 = 0; var8 < 16; ++var8) {
						if((this.heightMap[var8 << 4 | var7] & 255) < var6) {
							var6 = this.heightMap[var8 << 4 | var7] & 255;
						}
					}
				}

				this.height = var6;
			}

			var6 = this.xPosition * 16 + var1;
			var7 = this.zPosition * 16 + var3;
			if(var5 < var4) {
				for(var8 = var5; var8 < var4; ++var8) {
					this.skylightMap.set(var1, var8, var3, 15);
				}
			} else {
				this.worldObj.scheduleLightingUpdate(EnumSkyBlock.Sky, var6, var4, var7, var6, var5, var7);

				for(var8 = var4; var8 < var5; ++var8) {
					this.skylightMap.set(var1, var8, var3, 0);
				}
			}

			var8 = 15;

			int var9;
			for(var9 = var5; var5 > 0 && var8 > 0; this.skylightMap.set(var1, var5, var3, var8)) {
				--var5;
				int var10 = Block.lightOpacity[this.getBlockID(var1, var5, var3)];
				if(var10 == 0) {
					var10 = 1;
				}

				var8 -= var10;
				if(var8 < 0) {
					var8 = 0;
				}
			}

			while(var5 > 0 && Block.lightOpacity[this.getBlockID(var1, var5 - 1, var3)] == 0) {
				--var5;
			}

			if(var5 != var9) {
				this.worldObj.scheduleLightingUpdate(EnumSkyBlock.Sky, var6 - 1, var5, var7 - 1, var6 + 1, var9, var7 + 1);
			}

			this.isModified = true;
		}
	}

	public int getBlockID(int var1, int var2, int var3) {
		return this.blocks[var1 << 11 | var3 << 7 | var2];
	}

	public boolean setBlockIDWithMetadata(int i, int j, int k, int l, int i1) {
		byte byte0 = (byte) l;
		int j1 = heightMap[k << 4 | i] & 0xff;
		int k1 = blocks[i << 11 | k << 7 | j] & 0xff;
		if (k1 == l && data.get(i, j, k) == i1) {
			return false;
		}
		int l1 = xPosition * 16 + i;
		int i2 = zPosition * 16 + k;
		blocks[i << 11 | k << 7 | j] = byte0;
		if (k1 != 0) {
			Block.blocksList[k1].onBlockRemoval(worldObj, l1, j, i2);
		}
		data.set(i, j, k, i1);
		if (Block.lightOpacity[byte0] != 0) {
			if (j >= j1) {
				relightBlock(i, j + 1, k);
			}
		} else if (j == j1 - 1) {
			relightBlock(i, j, k);
		}
		worldObj.scheduleLightingUpdate(EnumSkyBlock.Sky, l1, j, i2, l1, j, i2);
		worldObj.scheduleLightingUpdate(EnumSkyBlock.Block, l1, j, i2, l1, j, i2);
		func_996_c(i, k);
		data.set(i, j, k, i1);
		if (l != 0) {
			Block.blocksList[l].onBlockAdded(worldObj, l1, j, i2);
		}
		isModified = true;
		return true;
	}

	public boolean setBlockID(int i, int j, int k, int l) {
		byte byte0 = (byte) l;
		int i1 = heightMap[k << 4 | i] & 0xff;
		int j1 = blocks[i << 11 | k << 7 | j] & 0xff;
		if (j1 == l) {
			return false;
		}
		int k1 = xPosition * 16 + i;
		int l1 = zPosition * 16 + k;
		blocks[i << 11 | k << 7 | j] = byte0;
		if (j1 != 0) {
			Block.blocksList[j1].onBlockRemoval(worldObj, k1, j, l1);
		}
		data.set(i, j, k, 0);
		if (Block.lightOpacity[byte0] != 0) {
			if (j >= i1) {
				relightBlock(i, j + 1, k);
			}
		} else if (j == i1 - 1) {
			relightBlock(i, j, k);
		}
		worldObj.scheduleLightingUpdate(EnumSkyBlock.Sky, k1, j, l1, k1, j, l1);
		worldObj.scheduleLightingUpdate(EnumSkyBlock.Block, k1, j, l1, k1, j, l1);
		func_996_c(i, k);
		if (l != 0) {
			Block.blocksList[l].onBlockAdded(worldObj, k1, j, l1);
		}
		isModified = true;
		return true;
	}

	public int getBlockMetadata(int var1, int var2, int var3) {
		return this.data.get(var1, var2, var3);
	}

	public void setBlockMetadata(int var1, int var2, int var3, int var4) {
		this.isModified = true;
		this.data.set(var1, var2, var3, var4);
	}

	public int getSavedLightValue(EnumSkyBlock var1, int var2, int var3, int var4) {
		return var1 == EnumSkyBlock.Sky ? this.skylightMap.get(var2, var3, var4) : (var1 == EnumSkyBlock.Block ? this.blocklightMap.get(var2, var3, var4) : 0);
	}

	public void setLightValue(EnumSkyBlock var1, int var2, int var3, int var4, int var5) {
		this.isModified = true;
		if(var1 == EnumSkyBlock.Sky) {
			this.skylightMap.set(var2, var3, var4, var5);
		} else {
			if(var1 != EnumSkyBlock.Block) {
				return;
			}

			this.blocklightMap.set(var2, var3, var4, var5);
		}

	}

	public int getBlockLightValue(int var1, int var2, int var3, int var4) {
		int var5 = this.skylightMap.get(var1, var2, var3);
		if(var5 > 0) {
			isLit = true;
		}

		var5 -= var4;
		int var6 = this.blocklightMap.get(var1, var2, var3);
		if(var6 > var5) {
			var5 = var6;
		}

		return var5;
	}

	public void addEntity(Entity var1) {
		this.hasEntities = true;
		int var2 = MathHelper.floor_double(var1.posX / 16.0D);
		int var3 = MathHelper.floor_double(var1.posZ / 16.0D);
		if(var2 != this.xPosition || var3 != this.zPosition) {
			System.out.println("Wrong location! " + var1);
		}

		int var4 = MathHelper.floor_double(var1.posY / 16.0D);
		if(var4 < 0) {
			var4 = 0;
		}

		if(var4 >= this.entities.length) {
			var4 = this.entities.length - 1;
		}

		this.entities[var4].add(var1);
	}

	public void removeEntity(Entity var1) {
		this.removeEntityAtIndex(var1, MathHelper.floor_double(var1.posY / 16.0D));
	}

	public void removeEntityAtIndex(Entity var1, int var2) {
		if(var2 < 0) {
			var2 = 0;
		}

		if(var2 >= this.entities.length) {
			var2 = this.entities.length - 1;
		}

		if(!this.entities[var2].contains(var1)) {
			System.out.println("There\'s no such entity to remove: " + var1);
		}

		this.entities[var2].remove(var1);
	}

	public boolean canBlockSeeTheSky(int var1, int var2, int var3) {
		return var2 >= (this.heightMap[var3 << 4 | var1] & 255);
	}

	public TileEntity getChunkBlockTileEntity(int var1, int var2, int var3) {
		int var4 = var1 + var2 * 1024 + var3 * 1024 * 1024;
		TileEntity var5 = (TileEntity)this.chunkTileEntityMap.get(Integer.valueOf(var4));
		if(var5 == null) {
			int var6 = this.getBlockID(var1, var2, var3);
			BlockContainer var7 = (BlockContainer)Block.blocksList[var6];
			var7.onBlockAdded(this.worldObj, this.xPosition * 16 + var1, var2, this.zPosition * 16 + var3);
			var5 = (TileEntity)this.chunkTileEntityMap.get(Integer.valueOf(var4));
		}

		return var5;
	}

	public void addTileEntity(TileEntity var1) {
		int var2 = var1.xCoord - this.xPosition * 16;
		int var3 = var1.yCoord;
		int var4 = var1.zCoord - this.zPosition * 16;
		this.setChunkBlockTileEntity(var2, var3, var4, var1);
	}

	public void setChunkBlockTileEntity(int var1, int var2, int var3, TileEntity var4) {
		int var5 = var1 + var2 * 1024 + var3 * 1024 * 1024;
		var4.worldObj = this.worldObj;
		var4.xCoord = this.xPosition * 16 + var1;
		var4.yCoord = var2;
		var4.zCoord = this.zPosition * 16 + var3;
		if(this.getBlockID(var1, var2, var3) != 0 && Block.blocksList[this.getBlockID(var1, var2, var3)] instanceof BlockContainer) {
			if(this.isChunkLoaded) {
				if(this.chunkTileEntityMap.get(Integer.valueOf(var5)) != null) {
					this.worldObj.loadedTileEntityList.remove(this.chunkTileEntityMap.get(Integer.valueOf(var5)));
				}

				this.worldObj.loadedTileEntityList.add(var4);
			}

			this.chunkTileEntityMap.put(Integer.valueOf(var5), var4);
		} else {
			System.out.println("Attempted to place a tile entity where there was no entity tile!");
		}
	}

	public void removeChunkBlockTileEntity(int var1, int var2, int var3) {
		int var4 = var1 + var2 * 1024 + var3 * 1024 * 1024;
		if(this.isChunkLoaded) {
			this.worldObj.loadedTileEntityList.remove(this.chunkTileEntityMap.remove(Integer.valueOf(var4)));
		}

	}

	public void onChunkLoad() {
		this.isChunkLoaded = true;
		this.worldObj.loadedTileEntityList.addAll(this.chunkTileEntityMap.values());

		for(int var1 = 0; var1 < this.entities.length; ++var1) {
			this.worldObj.addLoadedEntities(this.entities[var1]);
		}

	}

	public void onChunkUnload() {
		this.isChunkLoaded = false;
		this.worldObj.loadedTileEntityList.removeAll(this.chunkTileEntityMap.values());

		for(int var1 = 0; var1 < this.entities.length; ++var1) {
			this.worldObj.unloadEntities(this.entities[var1]);
		}

	}

	public void setChunkModified() {
		this.isModified = true;
	}

	public void getEntitiesWithinAABBForEntity(Entity var1, AxisAlignedBB var2, List var3) {
		int var4 = MathHelper.floor_double((var2.minY - 2.0D) / 16.0D);
		int var5 = MathHelper.floor_double((var2.maxY + 2.0D) / 16.0D);
		if(var4 < 0) {
			var4 = 0;
		}

		if(var5 >= this.entities.length) {
			var5 = this.entities.length - 1;
		}

		for(int var6 = var4; var6 <= var5; ++var6) {
			List var7 = this.entities[var6];

			for(int var8 = 0; var8 < var7.size(); ++var8) {
				Entity var9 = (Entity)var7.get(var8);
				if(var9 != var1 && var9.boundingBox.intersectsWith(var2)) {
					var3.add(var9);
				}
			}
		}

	}

	public void getEntitiesOfTypeWithinAAAB(Class var1, AxisAlignedBB var2, List var3) {
		int var4 = MathHelper.floor_double((var2.minY - 2.0D) / 16.0D);
		int var5 = MathHelper.floor_double((var2.maxY + 2.0D) / 16.0D);
		if(var4 < 0) {
			var4 = 0;
		}

		if(var5 >= this.entities.length) {
			var5 = this.entities.length - 1;
		}

		for(int var6 = var4; var6 <= var5; ++var6) {
			List var7 = this.entities[var6];

			for(int var8 = 0; var8 < var7.size(); ++var8) {
				Entity var9 = (Entity)var7.get(var8);
				if(var1.isAssignableFrom(var9.getClass()) && var9.boundingBox.intersectsWith(var2)) {
					var3.add(var9);
				}
			}
		}

	}

	public boolean needsSaving(boolean var1) {
		return this.neverSave ? false : (this.hasEntities && this.worldObj.worldTime != this.lastSaveTime ? true : this.isModified);
	}
}
