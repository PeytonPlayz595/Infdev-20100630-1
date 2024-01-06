package net.minecraft.src;

import java.util.Random;

public class ChunkProviderGenerate implements IChunkProvider {
	private Random rand;
	private NoiseGeneratorOctaves noiseGen1;
	private NoiseGeneratorOctaves noiseGen2;
	private NoiseGeneratorOctaves noiseGen3;
	private NoiseGeneratorOctaves noiseGen4;
	private NoiseGeneratorOctaves noiseGen5;
	private NoiseGeneratorOctaves noiseGen6;
	private NoiseGeneratorOctaves noiseGen7;
	private NoiseGeneratorOctaves mobSpawnerNoise;
	private World worldObj;
	private double[] noiseArray;
	double[] noise3;
	double[] noise1;
	double[] noise2;
	double[] noise6;
	double[] noise7;
	int[][] unused = new int[32][32];

	public ChunkProviderGenerate(World var1, long var2) {
		this.worldObj = var1;
		this.rand = new Random(var2);
		this.noiseGen1 = new NoiseGeneratorOctaves(this.rand, 16);
		this.noiseGen2 = new NoiseGeneratorOctaves(this.rand, 16);
		this.noiseGen3 = new NoiseGeneratorOctaves(this.rand, 8);
		this.noiseGen4 = new NoiseGeneratorOctaves(this.rand, 4);
		this.noiseGen5 = new NoiseGeneratorOctaves(this.rand, 4);
		this.noiseGen6 = new NoiseGeneratorOctaves(this.rand, 10);
		this.noiseGen7 = new NoiseGeneratorOctaves(this.rand, 16);
		this.mobSpawnerNoise = new NoiseGeneratorOctaves(this.rand, 8);
	}

	public void generateTerrain(int var1, int var2, byte[] var3) {
		byte var4 = 4;
		byte var5 = 64;
		int var6 = var4 + 1;
		byte var7 = 17;
		int var8 = var4 + 1;
		this.noiseArray = this.initializeNoiseField(this.noiseArray, var1 * var4, 0, var2 * var4, var6, var7, var8);

		for(int var9 = 0; var9 < var4; ++var9) {
			for(int var10 = 0; var10 < var4; ++var10) {
				for(int var11 = 0; var11 < 16; ++var11) {
					double var12 = 0.125D;
					double var14 = this.noiseArray[((var9 + 0) * var8 + var10 + 0) * var7 + var11 + 0];
					double var16 = this.noiseArray[((var9 + 0) * var8 + var10 + 1) * var7 + var11 + 0];
					double var18 = this.noiseArray[((var9 + 1) * var8 + var10 + 0) * var7 + var11 + 0];
					double var20 = this.noiseArray[((var9 + 1) * var8 + var10 + 1) * var7 + var11 + 0];
					double var22 = (this.noiseArray[((var9 + 0) * var8 + var10 + 0) * var7 + var11 + 1] - var14) * var12;
					double var24 = (this.noiseArray[((var9 + 0) * var8 + var10 + 1) * var7 + var11 + 1] - var16) * var12;
					double var26 = (this.noiseArray[((var9 + 1) * var8 + var10 + 0) * var7 + var11 + 1] - var18) * var12;
					double var28 = (this.noiseArray[((var9 + 1) * var8 + var10 + 1) * var7 + var11 + 1] - var20) * var12;

					for(int var30 = 0; var30 < 8; ++var30) {
						double var31 = 0.25D;
						double var33 = var14;
						double var35 = var16;
						double var37 = (var18 - var14) * var31;
						double var39 = (var20 - var16) * var31;

						for(int var41 = 0; var41 < 4; ++var41) {
							int var42 = var41 + var9 * 4 << 11 | 0 + var10 * 4 << 7 | var11 * 8 + var30;
							short var43 = 128;
							double var44 = 0.25D;
							double var46 = var33;
							double var48 = (var35 - var33) * var44;

							for(int var50 = 0; var50 < 4; ++var50) {
								int var51 = 0;
								if(var11 * 8 + var30 < var5) {
									var51 = Block.waterStill.blockID;
								}

								if(var46 > 0.0D) {
									var51 = Block.stone.blockID;
								}

								var3[var42] = (byte)var51;
								var42 += var43;
								var46 += var48;
							}

							var33 += var37;
							var35 += var39;
						}

						var14 += var22;
						var16 += var24;
						var18 += var26;
						var20 += var28;
					}
				}
			}
		}

	}

	public void replaceBlocks(int var1, int var2, byte[] var3) {
		byte var4 = 64;

		for(int var5 = 0; var5 < 16; ++var5) {
			for(int var6 = 0; var6 < 16; ++var6) {
				double var7 = (double)(var1 * 16 + var5);
				double var9 = (double)(var2 * 16 + var6);
				double var11 = 1.0D / 32.0D;
				boolean var13 = this.noiseGen4.a(var7 * var11, var9 * var11, 0.0D) + this.rand.nextDouble() * 0.2D > 0.0D;
				boolean var14 = this.noiseGen4.a(var9 * var11, 109.0134D, var7 * var11) + this.rand.nextDouble() * 0.2D > 3.0D;
				int var15 = (int)(this.noiseGen5.generateNoiseOctaves(var7 * var11 * 2.0D, var9 * var11 * 2.0D) / 3.0D + 3.0D + this.rand.nextDouble() * 0.25D);
				int var16 = -1;
				int var17 = Block.grass.blockID;
				int var18 = Block.dirt.blockID;
				int var19 = (var5 * 16 + var6) * 128 + 128;

				for(int var20 = 127; var20 >= 0; --var20) {
					--var19;
					if(var20 <= 0 + this.rand.nextInt(6) - 1) {
						var3[var19] = (byte)Block.bedrock.blockID;
					} else if(var3[var19] == 0) {
						var16 = -1;
					} else if(var3[var19] == Block.stone.blockID) {
						if(var16 == -1) {
							if(var15 <= 0) {
								var17 = 0;
								var18 = (byte)Block.stone.blockID;
							} else if(var20 >= var4 - 4 && var20 <= var4 + 1) {
								var17 = Block.grass.blockID;
								var18 = Block.dirt.blockID;
								if(var14) {
									var17 = 0;
								}

								if(var14) {
									var18 = Block.gravel.blockID;
								}

								if(var13) {
									var17 = Block.sand.blockID;
								}

								if(var13) {
									var18 = Block.sand.blockID;
								}
							}

							if(var20 < var4 && var17 == 0) {
								var17 = Block.waterStill.blockID;
							}

							var16 = var15;
							if(var20 >= var4 - 1) {
								var3[var19] = (byte)var17;
							} else {
								var3[var19] = (byte)var18;
							}
						} else if(var16 > 0) {
							--var16;
							var3[var19] = (byte)var18;
						}
					}
				}
			}
		}

	}

	public Chunk provideChunk(int var1, int var2) {
		this.rand.setSeed((long)var1 * 341873128712L + (long)var2 * 132897987541L);
		byte[] var3 = new byte[-Short.MIN_VALUE];
		Chunk var4 = new Chunk(this.worldObj, var3, var1, var2);
		this.generateTerrain(var1, var2, var3);
		this.replaceBlocks(var1, var2, var3);
		this.generateCaves(var1, var2, var3);
		var4.generateHeightMap();
		return var4;
	}

	protected void generateLargeCaveNode(int var1, int var2, byte[] var3, double var4, double var6, double var8) {
		this.generateCaveNode(var1, var2, var3, var4, var6, var8, 1.0F + this.rand.nextFloat() * 6.0F, 0.0F, 0.0F, -1, -1, 0.5D);
	}

	protected void generateCaveNode(int var1, int var2, byte[] var3, double var4, double var6, double var8, float var10, float var11, float var12, int var13, int var14, double var15) {
		double var17 = (double)(var1 * 16 + 8);
		double var19 = (double)(var2 * 16 + 8);
		float var21 = 0.0F;
		float var22 = 0.0F;
		Random var23 = new Random(this.rand.nextLong());
		if(var14 <= 0) {
			byte var24 = 112;
			var14 = var24 - var23.nextInt(var24 / 4);
		}

		boolean var52 = false;
		if(var13 == -1) {
			var13 = var14 / 2;
			var52 = true;
		}

		int var25 = var23.nextInt(var14 / 2) + var14 / 4;

		for(boolean var26 = var23.nextInt(6) == 0; var13 < var14; ++var13) {
			double var27 = 1.5D + (double)(MathHelper.sin((float)var13 * (float)Math.PI / (float)var14) * var10 * 1.0F);
			double var29 = var27 * var15;
			float var31 = MathHelper.cos(var12);
			float var32 = MathHelper.sin(var12);
			var4 += (double)(MathHelper.cos(var11) * var31);
			var6 += (double)var32;
			var8 += (double)(MathHelper.sin(var11) * var31);
			if(var26) {
				var12 *= 0.92F;
			} else {
				var12 *= 0.7F;
			}

			var12 += var22 * 0.1F;
			var11 += var21 * 0.1F;
			var22 *= 0.9F;
			var21 *= 12.0F / 16.0F;
			var22 += (var23.nextFloat() - var23.nextFloat()) * var23.nextFloat() * 2.0F;
			var21 += (var23.nextFloat() - var23.nextFloat()) * var23.nextFloat() * 4.0F;
			if(!var52 && var13 == var25 && var10 > 1.0F) {
				this.generateCaveNode(var1, var2, var3, var4, var6, var8, var23.nextFloat() * 0.5F + 0.5F, var11 - (float)Math.PI * 0.5F, var12 / 3.0F, var13, var14, 1.0D);
				this.generateCaveNode(var1, var2, var3, var4, var6, var8, var23.nextFloat() * 0.5F + 0.5F, var11 + (float)Math.PI * 0.5F, var12 / 3.0F, var13, var14, 1.0D);
				return;
			}

			if(var52 || var23.nextInt(4) != 0) {
				double var33 = var4 - var17;
				double var35 = var8 - var19;
				double var37 = (double)(var14 - var13);
				double var39 = (double)(var10 + 2.0F + 16.0F);
				if(var33 * var33 + var35 * var35 - var37 * var37 > var39 * var39) {
					return;
				}

				if(var4 >= var17 - 16.0D - var27 * 2.0D && var8 >= var19 - 16.0D - var27 * 2.0D && var4 <= var17 + 16.0D + var27 * 2.0D && var8 <= var19 + 16.0D + var27 * 2.0D) {
					int var53 = MathHelper.floor_double(var4 - var27) - var1 * 16 - 1;
					int var34 = MathHelper.floor_double(var4 + var27) - var1 * 16 + 1;
					int var54 = MathHelper.floor_double(var6 - var29) - 1;
					int var36 = MathHelper.floor_double(var6 + var29) + 1;
					int var55 = MathHelper.floor_double(var8 - var27) - var2 * 16 - 1;
					int var38 = MathHelper.floor_double(var8 + var27) - var2 * 16 + 1;
					if(var53 < 0) {
						var53 = 0;
					}

					if(var34 > 16) {
						var34 = 16;
					}

					if(var54 < 1) {
						var54 = 1;
					}

					if(var36 > 120) {
						var36 = 120;
					}

					if(var55 < 0) {
						var55 = 0;
					}

					if(var38 > 16) {
						var38 = 16;
					}

					boolean var56 = false;

					int var40;
					int var43;
					for(var40 = var53; !var56 && var40 < var34; ++var40) {
						for(int var41 = var55; !var56 && var41 < var38; ++var41) {
							for(int var42 = var36 + 1; !var56 && var42 >= var54 - 1; --var42) {
								var43 = (var40 * 16 + var41) * 128 + var42;
								if(var42 >= 0 && var42 < 128) {
									if(var3[var43] == Block.waterMoving.blockID || var3[var43] == Block.waterStill.blockID) {
										var56 = true;
									}

									if(var42 != var54 - 1 && var40 != var53 && var40 != var34 - 1 && var41 != var55 && var41 != var38 - 1) {
										var42 = var54;
									}
								}
							}
						}
					}

					if(!var56) {
						for(var40 = var53; var40 < var34; ++var40) {
							double var57 = ((double)(var40 + var1 * 16) + 0.5D - var4) / var27;

							for(var43 = var55; var43 < var38; ++var43) {
								double var44 = ((double)(var43 + var2 * 16) + 0.5D - var8) / var27;
								int var46 = (var40 * 16 + var43) * 128 + var36;
								boolean var47 = false;

								for(int var48 = var36 - 1; var48 >= var54; --var48) {
									double var49 = ((double)var48 + 0.5D - var6) / var29;
									if(var49 > -0.7D && var57 * var57 + var49 * var49 + var44 * var44 < 1.0D) {
										byte var51 = var3[var46];
										if(var51 == Block.grass.blockID) {
											var47 = true;
										}

										if(var51 == Block.stone.blockID || var51 == Block.dirt.blockID || var51 == Block.grass.blockID) {
											if(var48 < 10) {
												var3[var46] = (byte)Block.lavaMoving.blockID;
											} else {
												var3[var46] = 0;
												if(var47 && var3[var46 - 1] == Block.dirt.blockID) {
													var3[var46 - 1] = (byte)Block.grass.blockID;
												}
											}
										}
									}

									--var46;
								}
							}
						}

						if(var52) {
							break;
						}
					}
				}
			}
		}

	}

	private void generateCaves(int var1, int var2, byte[] var3) {
		byte var4 = 8;
		this.rand.setSeed(this.worldObj.randomSeed);
		long var5 = this.rand.nextLong() / 2L * 2L + 1L;
		long var7 = this.rand.nextLong() / 2L * 2L + 1L;

		for(int var9 = var1 - var4; var9 <= var1 + var4; ++var9) {
			for(int var10 = var2 - var4; var10 <= var2 + var4; ++var10) {
				this.rand.setSeed((long)var9 * var5 + (long)var10 * var7 ^ this.worldObj.randomSeed);
				int var11 = this.rand.nextInt(this.rand.nextInt(this.rand.nextInt(40) + 1) + 1);
				if(this.rand.nextInt(15) != 0) {
					var11 = 0;
				}

				for(int var12 = 0; var12 < var11; ++var12) {
					double var13 = (double)(var9 * 16 + this.rand.nextInt(16));
					double var15 = (double)this.rand.nextInt(this.rand.nextInt(120) + 8);
					double var17 = (double)(var10 * 16 + this.rand.nextInt(16));
					int var19 = 1;
					if(this.rand.nextInt(4) == 0) {
						this.generateLargeCaveNode(var1, var2, var3, var13, var15, var17);
						var19 += this.rand.nextInt(4);
					}

					for(int var20 = 0; var20 < var19; ++var20) {
						float var21 = this.rand.nextFloat() * (float)Math.PI * 2.0F;
						float var22 = (this.rand.nextFloat() - 0.5F) * 2.0F / 8.0F;
						float var23 = this.rand.nextFloat() * 2.0F + this.rand.nextFloat();
						this.generateCaveNode(var1, var2, var3, var13, var15, var17, var23, var21, var22, 0, 0, 1.0D);
					}
				}
			}
		}

	}

	private double[] initializeNoiseField(double[] var1, int var2, int var3, int var4, int var5, int var6, int var7) {
		if(var1 == null) {
			var1 = new double[var5 * var6 * var7];
		}

		double var8 = 684.412D;
		double var10 = 684.412D;
		this.noise6 = this.noiseGen6.a(this.noise6, var2, var3, var4, var5, 1, var7, 1.0D, 0.0D, 1.0D);
		this.noise7 = this.noiseGen7.a(this.noise7, var2, var3, var4, var5, 1, var7, 100.0D, 0.0D, 100.0D);
		this.noise3 = this.noiseGen3.a(this.noise3, var2, var3, var4, var5, var6, var7, var8 / 80.0D, var10 / 160.0D, var8 / 80.0D);
		this.noise1 = this.noiseGen1.a(this.noise1, var2, var3, var4, var5, var6, var7, var8, var10, var8);
		this.noise2 = this.noiseGen2.a(this.noise2, var2, var3, var4, var5, var6, var7, var8, var10, var8);
		int var12 = 0;
		int var13 = 0;

		for(int var14 = 0; var14 < var5; ++var14) {
			for(int var15 = 0; var15 < var7; ++var15) {
				double var16 = (this.noise6[var13] + 256.0D) / 512.0D;
				if(var16 > 1.0D) {
					var16 = 1.0D;
				}

				double var18 = 0.0D;
				double var20 = this.noise7[var13] / 8000.0D;
				if(var20 < 0.0D) {
					var20 = -var20;
				}

				var20 = var20 * 3.0D - 3.0D;
				if(var20 < 0.0D) {
					var20 /= 2.0D;
					if(var20 < -1.0D) {
						var20 = -1.0D;
					}

					var20 /= 1.4D;
					var20 /= 2.0D;
					var16 = 0.0D;
				} else {
					if(var20 > 1.0D) {
						var20 = 1.0D;
					}

					var20 /= 6.0D;
				}

				var16 += 0.5D;
				var20 = var20 * (double)var6 / 16.0D;
				double var22 = (double)var6 / 2.0D + var20 * 4.0D;
				++var13;

				for(int var24 = 0; var24 < var6; ++var24) {
					double var25 = 0.0D;
					double var27 = ((double)var24 - var22) * 12.0D / var16;
					if(var27 < 0.0D) {
						var27 *= 4.0D;
					}

					double var29 = this.noise1[var12] / 512.0D;
					double var31 = this.noise2[var12] / 512.0D;
					double var33 = (this.noise3[var12] / 10.0D + 1.0D) / 2.0D;
					if(var33 < 0.0D) {
						var25 = var29;
					} else if(var33 > 1.0D) {
						var25 = var31;
					} else {
						var25 = var29 + (var31 - var29) * var33;
					}

					var25 -= var27;
					double var35;
					if(var24 > var6 - 4) {
						var35 = (double)((float)(var24 - (var6 - 4)) / 3.0F);
						var25 = var25 * (1.0D - var35) + -10.0D * var35;
					}

					if((double)var24 < var18) {
						var35 = (var18 - (double)var24) / 4.0D;
						if(var35 < 0.0D) {
							var35 = 0.0D;
						}

						if(var35 > 1.0D) {
							var35 = 1.0D;
						}

						var25 = var25 * (1.0D - var35) + -10.0D * var35;
					}

					var1[var12] = var25;
					++var12;
				}
			}
		}

		return var1;
	}

	public boolean chunkExists(int var1, int var2) {
		return true;
	}

	public void populate(IChunkProvider var1, int var2, int var3) {
		int var4 = var2 * 16;
		int var5 = var3 * 16;
		this.rand.setSeed(this.worldObj.randomSeed);
		long var6 = this.rand.nextLong() / 2L * 2L + 1L;
		long var8 = this.rand.nextLong() / 2L * 2L + 1L;
		this.rand.setSeed((long)var2 * var6 + (long)var3 * var8 ^ this.worldObj.randomSeed);
		double var10 = 0.25D;

		int var12;
		int var13;
		int var14;
		int var15;
		for(var12 = 0; var12 < 4; ++var12) {
			var13 = var4 + this.rand.nextInt(16) + 8;
			var14 = this.rand.nextInt(128);
			var15 = var5 + this.rand.nextInt(16) + 8;
			(new WorldGenDungeons()).generate(this.worldObj, this.rand, var13, var14, var15);
		}

		for(var12 = 0; var12 < 20; ++var12) {
			var13 = var4 + this.rand.nextInt(16);
			var14 = this.rand.nextInt(128);
			var15 = var5 + this.rand.nextInt(16);
			(new WorldGenMinable(Block.dirt.blockID, 32)).generate(this.worldObj, this.rand, var13, var14, var15);
		}

		for(var12 = 0; var12 < 10; ++var12) {
			var13 = var4 + this.rand.nextInt(16);
			var14 = this.rand.nextInt(128);
			var15 = var5 + this.rand.nextInt(16);
			(new WorldGenMinable(Block.gravel.blockID, 32)).generate(this.worldObj, this.rand, var13, var14, var15);
		}

		for(var12 = 0; var12 < 20; ++var12) {
			var13 = var4 + this.rand.nextInt(16);
			var14 = this.rand.nextInt(128);
			var15 = var5 + this.rand.nextInt(16);
			(new WorldGenMinable(Block.oreCoal.blockID, 16)).generate(this.worldObj, this.rand, var13, var14, var15);
		}

		for(var12 = 0; var12 < 20; ++var12) {
			var13 = var4 + this.rand.nextInt(16);
			var14 = this.rand.nextInt(64);
			var15 = var5 + this.rand.nextInt(16);
			(new WorldGenMinable(Block.oreIron.blockID, 8)).generate(this.worldObj, this.rand, var13, var14, var15);
		}

		if(this.rand.nextInt(1) == 0) {
			var12 = var4 + this.rand.nextInt(16);
			var13 = this.rand.nextInt(32);
			var14 = var5 + this.rand.nextInt(16);
			(new WorldGenMinable(Block.oreGold.blockID, 8)).generate(this.worldObj, this.rand, var12, var13, var14);
		}

		if(this.rand.nextInt(4) == 0) {
			var12 = var4 + this.rand.nextInt(16);
			var13 = this.rand.nextInt(16);
			var14 = var5 + this.rand.nextInt(16);
			(new WorldGenMinable(Block.oreDiamond.blockID, 8)).generate(this.worldObj, this.rand, var12, var13, var14);
		}

		var10 = 0.5D;
		var12 = (int)((this.mobSpawnerNoise.generateNoiseOctaves((double)var4 * var10, (double)var5 * var10) / 8.0D + this.rand.nextDouble() * 4.0D + 4.0D) / 3.0D);
		if(var12 < 0) {
			var12 = 0;
		}

		WorldGenTrees var18 = new WorldGenTrees();
		if(this.rand.nextInt(10) == 0) {
			++var12;
		}

		int var16;
		for(var14 = 0; var14 < var12; ++var14) {
			var15 = var4 + this.rand.nextInt(16) + 8;
			var16 = var5 + this.rand.nextInt(16) + 8;
			var18.setScale(1.0D, 1.0D, 1.0D);
			var18.generate(this.worldObj, this.rand, var15, this.worldObj.getHeightValue(var15, var16), var16);
		}

		int var17;
		for(var14 = 0; var14 < 2; ++var14) {
			var15 = var4 + this.rand.nextInt(16) + 8;
			var16 = this.rand.nextInt(128);
			var17 = var5 + this.rand.nextInt(16) + 8;
			(new WorldGenFlowers(Block.plantYellow.blockID)).generate(this.worldObj, this.rand, var15, var16, var17);
		}

		if(this.rand.nextInt(2) == 0) {
			var14 = var4 + this.rand.nextInt(16) + 8;
			var15 = this.rand.nextInt(128);
			var16 = var5 + this.rand.nextInt(16) + 8;
			(new WorldGenFlowers(Block.plantRed.blockID)).generate(this.worldObj, this.rand, var14, var15, var16);
		}

		if(this.rand.nextInt(4) == 0) {
			var14 = var4 + this.rand.nextInt(16) + 8;
			var15 = this.rand.nextInt(128);
			var16 = var5 + this.rand.nextInt(16) + 8;
			(new WorldGenFlowers(Block.mushroomBrown.blockID)).generate(this.worldObj, this.rand, var14, var15, var16);
		}

		if(this.rand.nextInt(8) == 0) {
			var14 = var4 + this.rand.nextInt(16) + 8;
			var15 = this.rand.nextInt(128);
			var16 = var5 + this.rand.nextInt(16) + 8;
			(new WorldGenFlowers(Block.mushroomRed.blockID)).generate(this.worldObj, this.rand, var14, var15, var16);
		}

		for(var14 = 0; var14 < 50; ++var14) {
			var15 = var4 + this.rand.nextInt(16) + 8;
			var16 = this.rand.nextInt(this.rand.nextInt(120) + 8);
			var17 = var5 + this.rand.nextInt(16) + 8;
			(new WorldGenLiquids(Block.waterMoving.blockID)).generate(this.worldObj, this.rand, var15, var16, var17);
		}

		for(var14 = 0; var14 < 20; ++var14) {
			var15 = var4 + this.rand.nextInt(16) + 8;
			var16 = this.rand.nextInt(this.rand.nextInt(this.rand.nextInt(112) + 8) + 8);
			var17 = var5 + this.rand.nextInt(16) + 8;
			(new WorldGenLiquids(Block.lavaMoving.blockID)).generate(this.worldObj, this.rand, var15, var16, var17);
		}

	}

	public boolean saveChunks(boolean var1, IProgressUpdate var2) {
		return true;
	}

	public boolean unload100OldestChunks() {
		return false;
	}

	public boolean canSave() {
		return true;
	}
}
