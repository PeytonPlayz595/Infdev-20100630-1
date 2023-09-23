package net.minecraft.src;

import java.util.Random;

public class BlockFlowing extends BlockFluid {
	int numAdjacentSources = 0;
	boolean[] isOptimalFlowDirection = new boolean[4];
	int[] flowCost = new int[4];

	protected BlockFlowing(int var1, Material var2) {
		super(var1, var2);
	}

	private void updateFlow(World var1, int var2, int var3, int var4) {
		int var5 = var1.getBlockMetadata(var2, var3, var4);
		var1.setBlockAndMetadata(var2, var3, var4, this.blockID + 1, var5);
		var1.markBlocksDirty(var2, var3, var4, var2, var3, var4);
	}

	public void updateTick(World var1, int var2, int var3, int var4, Random var5) {
		int var6 = this.getFlowDecay(var1, var2, var3, var4);
		boolean var7 = true;
		int var9;
		if(var6 > 0) {
			byte var8 = -100;
			this.numAdjacentSources = 0;
			int var11 = this.getSmallestFlowDecay(var1, var2 - 1, var3, var4, var8);
			var11 = this.getSmallestFlowDecay(var1, var2 + 1, var3, var4, var11);
			var11 = this.getSmallestFlowDecay(var1, var2, var3, var4 - 1, var11);
			var11 = this.getSmallestFlowDecay(var1, var2, var3, var4 + 1, var11);
			var9 = var11 + this.fluidType;
			if(var9 >= 8 || var11 < 0) {
				var9 = -1;
			}

			if(this.getFlowDecay(var1, var2, var3 + 1, var4) >= 0) {
				int var10 = this.getFlowDecay(var1, var2, var3 + 1, var4);
				if(var10 >= 8) {
					var9 = var10;
				} else {
					var9 = var10 + 8;
				}
			}

			if(this.numAdjacentSources >= 2 && this.blockMaterial == Material.water) {
				var9 = 0;
			}

			if(this.blockMaterial == Material.lava && var6 < 8 && var9 < 8 && var9 > var6 && var5.nextInt(4) != 0) {
				var9 = var6;
				var7 = false;
			}

			if(var9 != var6) {
				var6 = var9;
				if(var9 < 0) {
					var1.setBlockWithNotify(var2, var3, var4, 0);
				} else {
					var1.setBlockMetadataWithNotify(var2, var3, var4, var9);
					var1.scheduleBlockUpdate(var2, var3, var4, this.blockID);
					var1.notifyBlocksOfNeighborChange(var2, var3, var4, this.blockID);
				}
			} else if(var7) {
				this.updateFlow(var1, var2, var3, var4);
			}
		} else {
			this.updateFlow(var1, var2, var3, var4);
		}

		if(this.liquidCanDisplaceBlock(var1, var2, var3 - 1, var4)) {
			if(var6 >= 8) {
				var1.setBlockAndMetadataWithNotify(var2, var3 - 1, var4, this.blockID, var6);
			} else {
				var1.setBlockAndMetadataWithNotify(var2, var3 - 1, var4, this.blockID, var6 + 8);
			}
		} else if(var6 >= 0 && (var6 == 0 || this.blockBlocksFlow(var1, var2, var3 - 1, var4))) {
			boolean[] var12 = this.getOptimalFlowDirections(var1, var2, var3, var4);
			var9 = var6 + this.fluidType;
			if(var6 >= 8) {
				var9 = 1;
			}

			if(var9 >= 8) {
				return;
			}

			if(var12[0]) {
				this.flowIntoBlock(var1, var2 - 1, var3, var4, var9);
			}

			if(var12[1]) {
				this.flowIntoBlock(var1, var2 + 1, var3, var4, var9);
			}

			if(var12[2]) {
				this.flowIntoBlock(var1, var2, var3, var4 - 1, var9);
			}

			if(var12[3]) {
				this.flowIntoBlock(var1, var2, var3, var4 + 1, var9);
			}
		}

	}

	private void flowIntoBlock(World var1, int var2, int var3, int var4, int var5) {
		if(this.liquidCanDisplaceBlock(var1, var2, var3, var4)) {
			int var6 = var1.getBlockId(var2, var3, var4);
			if(var6 > 0) {
				if(this.blockMaterial == Material.lava) {
					this.triggerLavaMixEffects(var1, var2, var3, var4);
				} else {
					Block.blocksList[var6].dropBlockAsItem(var1, var2, var3, var4, var1.getBlockMetadata(var2, var3, var4));
				}
			}

			var1.setBlockAndMetadataWithNotify(var2, var3, var4, this.blockID, var5);
		}

	}

	private int calculateFlowCost(World var1, int var2, int var3, int var4, int var5, int var6) {
		int var7 = 1000;

		for(int var8 = 0; var8 < 4; ++var8) {
			if((var8 != 0 || var6 != 1) && (var8 != 1 || var6 != 0) && (var8 != 2 || var6 != 3) && (var8 != 3 || var6 != 2)) {
				int var9 = var2;
				int var11 = var4;
				if(var8 == 0) {
					var9 = var2 - 1;
				}

				if(var8 == 1) {
					++var9;
				}

				if(var8 == 2) {
					var11 = var4 - 1;
				}

				if(var8 == 3) {
					++var11;
				}

				if(!this.blockBlocksFlow(var1, var9, var3, var11) && (var1.getBlockMaterial(var9, var3, var11) != this.blockMaterial || var1.getBlockMetadata(var9, var3, var11) != 0)) {
					if(!this.blockBlocksFlow(var1, var9, var3 - 1, var11)) {
						return var5;
					}

					if(var5 < 4) {
						int var12 = this.calculateFlowCost(var1, var9, var3, var11, var5 + 1, var8);
						if(var12 < var7) {
							var7 = var12;
						}
					}
				}
			}
		}

		return var7;
	}

	private boolean[] getOptimalFlowDirections(World var1, int var2, int var3, int var4) {
		int var5;
		int var6;
		for(var5 = 0; var5 < 4; ++var5) {
			this.flowCost[var5] = 1000;
			var6 = var2;
			int var8 = var4;
			if(var5 == 0) {
				var6 = var2 - 1;
			}

			if(var5 == 1) {
				++var6;
			}

			if(var5 == 2) {
				var8 = var4 - 1;
			}

			if(var5 == 3) {
				++var8;
			}

			if(!this.blockBlocksFlow(var1, var6, var3, var8) && (var1.getBlockMaterial(var6, var3, var8) != this.blockMaterial || var1.getBlockMetadata(var6, var3, var8) != 0)) {
				if(!this.blockBlocksFlow(var1, var6, var3 - 1, var8)) {
					this.flowCost[var5] = 0;
				} else {
					this.flowCost[var5] = this.calculateFlowCost(var1, var6, var3, var8, 1, var5);
				}
			}
		}

		var5 = this.flowCost[0];

		for(var6 = 1; var6 < 4; ++var6) {
			if(this.flowCost[var6] < var5) {
				var5 = this.flowCost[var6];
			}
		}

		for(var6 = 0; var6 < 4; ++var6) {
			this.isOptimalFlowDirection[var6] = this.flowCost[var6] == var5;
		}

		return this.isOptimalFlowDirection;
	}

	private boolean blockBlocksFlow(World var1, int var2, int var3, int var4) {
		int var5 = var1.getBlockId(var2, var3, var4);
		if(var5 != Block.doorWood.blockID && var5 != Block.signStanding.blockID && var5 != Block.ladder.blockID) {
			if(var5 == 0) {
				return false;
			} else {
				Material var6 = Block.blocksList[var5].blockMaterial;
				return var6.isSolid();
			}
		} else {
			return true;
		}
	}

	protected int getSmallestFlowDecay(World var1, int var2, int var3, int var4, int var5) {
		int var6 = this.getFlowDecay(var1, var2, var3, var4);
		if(var6 < 0) {
			return var5;
		} else {
			if(var6 == 0) {
				++this.numAdjacentSources;
			}

			if(var6 >= 8) {
				var6 = 0;
			}

			return var5 >= 0 && var6 >= var5 ? var5 : var6;
		}
	}

	private boolean liquidCanDisplaceBlock(World var1, int var2, int var3, int var4) {
		Material var5 = var1.getBlockMaterial(var2, var3, var4);
		return var5 == this.blockMaterial ? false : (var5 == Material.lava ? false : !this.blockBlocksFlow(var1, var2, var3, var4));
	}

	public void onBlockAdded(World var1, int var2, int var3, int var4) {
		super.onBlockAdded(var1, var2, var3, var4);
		if(var1.getBlockId(var2, var3, var4) == this.blockID) {
			var1.scheduleBlockUpdate(var2, var3, var4, this.blockID);
		}

	}
}
