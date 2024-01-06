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

	public void updateLight(World var1) {
		for(int var2 = this.x; var2 <= this.maxX; ++var2) {
			for(int var3 = this.z; var3 <= this.maxZ; ++var3) {
				if(var1.blockExists(var2, 0, var3)) {
					for(int var4 = this.y; var4 <= this.maxY; ++var4) {
						if(var4 >= 0 && var4 < 128) {
							int var5 = var1.getSavedLightValue(this.skyBlock, var2, var4, var3);
							boolean var6 = false;
							int var7 = var1.getBlockId(var2, var4, var3);
							int var8 = Block.lightOpacity[var7];
							if(var8 == 0) {
								var8 = 1;
							}

							int var9 = 0;
							if(this.skyBlock == EnumSkyBlock.Sky) {
								if(var1.canExistingBlockSeeTheSky(var2, var4, var3)) {
									var9 = 15;
								}
							} else if(this.skyBlock == EnumSkyBlock.Block) {
								var9 = Block.lightValue[var7];
							}

							int var10;
							int var16;
							if(var8 >= 15 && var9 == 0) {
								var16 = 0;
							} else {
								var10 = var1.getSavedLightValue(this.skyBlock, var2 - 1, var4, var3);
								int var11 = var1.getSavedLightValue(this.skyBlock, var2 + 1, var4, var3);
								int var12 = var1.getSavedLightValue(this.skyBlock, var2, var4 - 1, var3);
								int var13 = var1.getSavedLightValue(this.skyBlock, var2, var4 + 1, var3);
								int var14 = var1.getSavedLightValue(this.skyBlock, var2, var4, var3 - 1);
								int var15 = var1.getSavedLightValue(this.skyBlock, var2, var4, var3 + 1);
								var16 = var10;
								if(var11 > var10) {
									var16 = var11;
								}

								if(var12 > var16) {
									var16 = var12;
								}

								if(var13 > var16) {
									var16 = var13;
								}

								if(var14 > var16) {
									var16 = var14;
								}

								if(var15 > var16) {
									var16 = var15;
								}

								var16 -= var8;
								if(var16 < 0) {
									var16 = 0;
								}

								if(var9 > var16) {
									var16 = var9;
								}
							}

							if(var5 != var16) {
								var1.setLightValue(this.skyBlock, var2, var4, var3, var16);
								var10 = var16 - 1;
								if(var10 < 0) {
									var10 = 0;
								}

								var1.neighborLightPropagationChanged(this.skyBlock, var2 - 1, var4, var3, var10);
								var1.neighborLightPropagationChanged(this.skyBlock, var2, var4 - 1, var3, var10);
								var1.neighborLightPropagationChanged(this.skyBlock, var2, var4, var3 - 1, var10);
								if(var2 + 1 >= this.maxX) {
									var1.neighborLightPropagationChanged(this.skyBlock, var2 + 1, var4, var3, var10);
								}

								if(var4 + 1 >= this.maxY) {
									var1.neighborLightPropagationChanged(this.skyBlock, var2, var4 + 1, var3, var10);
								}

								if(var3 + 1 >= this.maxZ) {
									var1.neighborLightPropagationChanged(this.skyBlock, var2, var4, var3 + 1, var10);
								}
							}
						}
					}
				}
			}
		}

	}

	public boolean getLightUpdated(int var1, int var2, int var3, int var4, int var5, int var6) {
		if(var1 >= this.x && var2 >= this.y && var3 >= this.z && var4 <= this.maxX && var5 <= this.maxY && var6 <= this.maxZ) {
			return true;
		} else {
			byte var7 = 1;
			if(var1 >= this.x - var7 && var2 >= this.y - var7 && var3 >= this.z - var7 && var4 <= this.maxX + var7 && var5 <= this.maxY + var7 && var6 <= this.maxZ + var7) {
				if(var1 < this.x) {
					this.x = var1;
				}

				if(var2 < this.y) {
					this.y = var2;
				}

				if(var3 < this.z) {
					this.z = var3;
				}

				if(var4 > this.maxX) {
					this.maxX = var4;
				}

				if(var5 > this.maxY) {
					this.maxY = var5;
				}

				if(var6 > this.maxZ) {
					this.maxZ = var6;
				}

				return true;
			} else {
				return false;
			}
		}
	}
}
