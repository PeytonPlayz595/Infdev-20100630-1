package net.minecraft.src;

public class MetadataChunkBlock {
	public final EnumSkyBlock skyBlock;
	public int x;
	public int y;
	public int z;
	public int maxX;
	public int maxY;
	public int maxZ;

	public MetadataChunkBlock(EnumSkyBlock var1, int var2, int var3, int var4, int var5, int var6, int var7) {
		this.skyBlock = var1;
		this.x = var2;
		this.y = var3;
		this.z = var4;
		this.maxX = var5;
		this.maxY = var6;
		this.maxZ = var7;
	}

	public void updateLight(World world) {
		int i = (maxX - x) + 1;
		int j = (maxY - y) + 1;
		int k = (maxZ - z) + 1;
		int l = i * j * k;
		if (l > 32768) {
			System.out.println("Light too large, skipping!");
			return;
		}
		int i1 = 0;
		int j1 = 0;
		boolean flag = false;
		boolean flag1 = false;
		for (int k1 = x; k1 <= maxX; k1++) {
			for (int l1 = z; l1 <= maxZ; l1++) {
				int i2 = k1 >> 4;
				int j2 = l1 >> 4;
				boolean flag2 = false;
				if (flag && i2 == i1 && j2 == j1) {
					flag2 = flag1;
				} else {
					flag2 = world.doChunksNearChunkExist(k1, 0, l1, 1);
					if (flag2) {
						Chunk chunk = world.getChunkFromChunkCoords(k1 >> 4, l1 >> 4);
					}
					flag1 = flag2;
					i1 = i2;
					j1 = j2;
				}
				if (!flag2) {
					continue;
				}
				if (y < 0) {
					y = 0;
				}
				if (maxY >= 128) {
					maxY = 127;
				}
				for (int k2 = y; k2 <= maxY; k2++) {
					int l2 = world.getSavedLightValue(skyBlock, k1, k2, l1);
					int i3 = 0;
					int j3 = world.getBlockId(k1, k2, l1);
					int k3 = Block.lightOpacity[j3];
					if (k3 == 0) {
						k3 = 1;
					}
					int l3 = 0;
					if (skyBlock == EnumSkyBlock.Sky) {
						if (world.canExistingBlockSeeTheSky(k1, k2, l1)) {
							l3 = 15;
						}
					} else if (skyBlock == EnumSkyBlock.Block) {
						l3 = Block.lightValue[j3];
					}
					if (k3 >= 15 && l3 == 0) {
						i3 = 0;
					} else {
						int i4 = world.getSavedLightValue(skyBlock, k1 - 1, k2, l1);
						int k4 = world.getSavedLightValue(skyBlock, k1 + 1, k2, l1);
						int l4 = world.getSavedLightValue(skyBlock, k1, k2 - 1, l1);
						int i5 = world.getSavedLightValue(skyBlock, k1, k2 + 1, l1);
						int j5 = world.getSavedLightValue(skyBlock, k1, k2, l1 - 1);
						int k5 = world.getSavedLightValue(skyBlock, k1, k2, l1 + 1);
						i3 = i4;
						if (k4 > i3) {
							i3 = k4;
						}
						if (l4 > i3) {
							i3 = l4;
						}
						if (i5 > i3) {
							i3 = i5;
						}
						if (j5 > i3) {
							i3 = j5;
						}
						if (k5 > i3) {
							i3 = k5;
						}
						i3 -= k3;
						if (i3 < 0) {
							i3 = 0;
						}
						if (l3 > i3) {
							i3 = l3;
						}
					}
					if (l2 == i3) {
						continue;
					}
					world.setLightValue(skyBlock, k1, k2, l1, i3);
					int j4 = i3 - 1;
					if (j4 < 0) {
						j4 = 0;
					}
					world.neighborLightPropagationChanged(skyBlock, k1 - 1, k2, l1, j4);
					world.neighborLightPropagationChanged(skyBlock, k1, k2 - 1, l1, j4);
					world.neighborLightPropagationChanged(skyBlock, k1, k2, l1 - 1, j4);
					if (k1 + 1 >= maxX) {
						world.neighborLightPropagationChanged(skyBlock, k1 + 1, k2, l1, j4);
					}
					if (k2 + 1 >= maxY) {
						world.neighborLightPropagationChanged(skyBlock, k1, k2 + 1, l1, j4);
					}
					if (l1 + 1 >= maxZ) {
						world.neighborLightPropagationChanged(skyBlock, k1, k2, l1 + 1, j4);
					}
				}

			}

		}
	}

	public boolean getLightUpdated(int i, int j, int k, int l, int i1, int j1) {
		if (i >= x && j >= y && k >= z && l <= maxX && i1 <= maxY
				&& j1 <= maxZ) {
			return true;
		}
		int k1 = 1;
		if (i >= x - k1 && j >= y - k1 && k >= z - k1 && l <= maxX + k1
				&& i1 <= maxY + k1 && j1 <= maxZ + k1) {
			int l1 = maxX - x;
			int i2 = maxY - y;
			int j2 = maxZ - z;
			if (i > x) {
				i = x;
			}
			if (j > y) {
				j = y;
			}
			if (k > z) {
				k = z;
			}
			if (l < maxX) {
				l = maxX;
			}
			if (i1 < maxY) {
				i1 = maxY;
			}
			if (j1 < maxZ) {
				j1 = maxZ;
			}
			int k2 = l - i;
			int l2 = i1 - j;
			int i3 = j1 - k;
			int j3 = l1 * i2 * j2;
			int k3 = k2 * l2 * i3;
			if (k3 - j3 <= 2) {
				x = i;
				y = j;
				z = k;
				maxX = l;
				maxY = i1;
				maxZ = j1;
				return true;
			}
		}
		return false;
	}
}
