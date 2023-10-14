package net.minecraft.src;

public class ChunkCache implements IBlockAccess {
	private int chunkX;
	private int chunkZ;
	private Chunk[][] chunkArray;
	private World worldObj;

	public ChunkCache(World var1, int var2, int var3, int var4, int var5, int var6, int var7) {
		this.worldObj = var1;
		this.chunkX = var2 >> 4;
		this.chunkZ = var4 >> 4;
		int var8 = var5 >> 4;
		int var9 = var7 >> 4;
		this.chunkArray = new Chunk[var8 - this.chunkX + 1][var9 - this.chunkZ + 1];

		for(int var10 = this.chunkX; var10 <= var8; ++var10) {
			for(int var11 = this.chunkZ; var11 <= var9; ++var11) {
				this.chunkArray[var10 - this.chunkX][var11 - this.chunkZ] = var1.getChunkFromChunkCoords(var10, var11);
			}
		}

	}

	public int getBlockId(int var1, int var2, int var3) {
		if(var2 < 0) {
			return 0;
		} else if(var2 >= 128) {
			return 0;
		} else {
			int var4 = (var1 >> 4) - this.chunkX;
			int var5 = (var3 >> 4) - this.chunkZ;
			return this.chunkArray[var4][var5].getBlockID(var1 & 15, var2, var3 & 15);
		}
	}

	public TileEntity getBlockTileEntity(int var1, int var2, int var3) {
		int var4 = (var1 >> 4) - this.chunkX;
		int var5 = (var3 >> 4) - this.chunkZ;
		return this.chunkArray[var4][var5].getChunkBlockTileEntity(var1 & 15, var2, var3 & 15);
	}

	public float getBrightness(int var1, int var2, int var3) {
		return World.lightBrightnessTable[this.getLightValue(var1, var2, var3)];
	}

	public int getLightValue(int var1, int var2, int var3) {
		return this.getLightValueExt(var1, var2, var3, true);
	}

	public int getLightValueExt(int i, int j, int k, boolean flag) {
		if (i < 0xfe17b800 || k < 0xfe17b800 || i >= 0x1e84800 || k > 0x1e84800) {
			return 15;
		}
		if (flag) {
			int l = getBlockId(i, j, k);
			if (l == Block.stairSingle.blockID || l == Block.tilledField.blockID) {
				int k1 = getLightValueExt(i, j + 1, k, false);
				int i2 = getLightValueExt(i + 1, j, k, false);
				int j2 = getLightValueExt(i - 1, j, k, false);
				int k2 = getLightValueExt(i, j, k + 1, false);
				int l2 = getLightValueExt(i, j, k - 1, false);
				if (i2 > k1) {
					k1 = i2;
				}
				if (j2 > k1) {
					k1 = j2;
				}
				if (k2 > k1) {
					k1 = k2;
				}
				if (l2 > k1) {
					k1 = l2;
				}
				return k1;
			}
		}
		if (j < 0) {
			return 0;
		}
		if (j >= 128) {
			int i1 = 15 - worldObj.skylightSubtracted;
			if (i1 < 0) {
				i1 = 0;
			}
			return i1;
		} else {
			int j1 = (i >> 4) - chunkX;
			int l1 = (k >> 4) - chunkZ;
			return chunkArray[j1][l1].getBlockLightValue(i & 0xf, j, k & 0xf, worldObj.skylightSubtracted);
		}
	}

	public int getBlockMetadata(int var1, int var2, int var3) {
		if(var2 < 0) {
			return 0;
		} else if(var2 >= 128) {
			return 0;
		} else {
			int var4 = (var1 >> 4) - this.chunkX;
			int var5 = (var3 >> 4) - this.chunkZ;
			return this.chunkArray[var4][var5].getBlockMetadata(var1 & 15, var2, var3 & 15);
		}
	}

	public Material getBlockMaterial(int var1, int var2, int var3) {
		int var4 = this.getBlockId(var1, var2, var3);
		return var4 == 0 ? Material.air : Block.blocksList[var4].blockMaterial;
	}

	public boolean isBlockNormalCube(int var1, int var2, int var3) {
		Block var4 = Block.blocksList[this.getBlockId(var1, var2, var3)];
		return var4 == null ? false : var4.isOpaqueCube();
	}
}
