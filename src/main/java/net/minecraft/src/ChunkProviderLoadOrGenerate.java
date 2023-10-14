package net.minecraft.src;

import java.io.IOException;

public class ChunkProviderLoadOrGenerate implements IChunkProvider {
	private Chunk blankChunk;
	private IChunkProvider chunkProvider;
	private IChunkLoader chunkLoader;
	private Chunk[] chunks = new Chunk[1024];
	private World worldObj;
	int lastQueriedChunkXPos = -999999999;
	int lastQueriedChunkZPos = -999999999;
	private Chunk lastQueriedChunk;

	public ChunkProviderLoadOrGenerate(World var1, IChunkLoader var2, IChunkProvider var3) {
		this.blankChunk = new Chunk(var1, new byte[-Short.MIN_VALUE], 0, 0);
		this.blankChunk.isChunkRendered = true;
		this.blankChunk.neverSave = true;
		this.worldObj = var1;
		this.chunkLoader = var2;
		this.chunkProvider = var3;
	}

	public boolean chunkExists(int var1, int var2) {
		if(var1 == this.lastQueriedChunkXPos && var2 == this.lastQueriedChunkZPos && this.lastQueriedChunk != null) {
			return true;
		} else {
			int var3 = var1 & 31;
			int var4 = var2 & 31;
			int var5 = var3 + var4 * 32;
			return this.chunks[var5] != null && (this.chunks[var5] == this.blankChunk || this.chunks[var5].isAtLocation(var1, var2));
		}
	}

	public Chunk provideChunk(int i, int j) {
		if (i == lastQueriedChunkXPos && j == lastQueriedChunkZPos && lastQueriedChunk != null) {
			return lastQueriedChunk;
		}
		if (!worldObj.field_9430_x && !func_21111_d(i, j)) {
			return blankChunk;
		}
		int k = i & 0x1f;
		int l = j & 0x1f;
		int i1 = k + l * 32;
		if (!chunkExists(i, j)) {
			if (chunks[i1] != null) {
				chunks[i1].onChunkUnload();
				//saveChunk(chunks[i1]);
				//saveExtraChunkData(chunks[i1]);
			}
			Chunk chunk = getChunkAt(i, j);
			if (chunk == null) {
				if (chunkProvider == null) {
					chunk = blankChunk;
				} else {
					chunk = chunkProvider.provideChunk(i, j);
				}
			}
			chunks[i1] = chunk;
			chunk.doNothing();
			if (chunks[i1] != null) {
				chunks[i1].onChunkLoad();
			}
			if (!chunks[i1].isTerrainPopulated && chunkExists(i + 1, j + 1) && chunkExists(i, j + 1)
					&& chunkExists(i + 1, j)) {
				populate(this, i, j);
			}
			if (chunkExists(i - 1, j) && !provideChunk(i - 1, j).isTerrainPopulated && chunkExists(i - 1, j + 1)
					&& chunkExists(i, j + 1) && chunkExists(i - 1, j)) {
				populate(this, i - 1, j);
			}
			if (chunkExists(i, j - 1) && !provideChunk(i, j - 1).isTerrainPopulated && chunkExists(i + 1, j - 1)
					&& chunkExists(i, j - 1) && chunkExists(i + 1, j)) {
				populate(this, i, j - 1);
			}
			if (chunkExists(i - 1, j - 1) && !provideChunk(i - 1, j - 1).isTerrainPopulated && chunkExists(i - 1, j - 1)
					&& chunkExists(i, j - 1) && chunkExists(i - 1, j)) {
				populate(this, i - 1, j - 1);
			}
		}
		lastQueriedChunkXPos = i;
		lastQueriedChunkZPos = j;
		lastQueriedChunk = chunks[i1];
		return chunks[i1];
	}

	private Chunk getChunkAt(int var1, int var2) {
		if (chunkLoader == null) {
			return null;
		}
		try {
			Chunk chunk = chunkLoader.loadChunk(worldObj, var1, var2);
			if (chunk != null) {
				chunk.lastSaveTime = worldObj.worldTime;
			}
			return chunk;
		} catch (Exception exception) {
			exception.printStackTrace();
		}
		return blankChunk;
	}

	private void saveExtraChunkData(Chunk var1) {
		if(this.chunkLoader != null) {
			try {
				this.chunkLoader.saveExtraChunkData(this.worldObj, var1);
			} catch (Exception var3) {
				var3.printStackTrace();
			}

		}
	}

	private void saveChunk(Chunk var1) {
		if(this.chunkLoader != null) {
			try {
				var1.lastSaveTime = this.worldObj.worldTime;
				this.chunkLoader.saveChunk(this.worldObj, var1);
			} catch (IOException var3) {
				var3.printStackTrace();
			}

		}
	}

	public void populate(IChunkProvider var1, int var2, int var3) {
		Chunk var4 = this.provideChunk(var2, var3);
		if(!var4.isTerrainPopulated) {
			var4.isTerrainPopulated = true;
			if(this.chunkProvider != null) {
				this.chunkProvider.populate(var1, var2, var3);
				var4.setChunkModified();
			}
		}

	}

	public boolean saveChunks(boolean flag, IProgressUpdate iprogressupdate) {
		int i = 0;
		int j = 0;
		if (iprogressupdate != null) {
			for (int k = 0; k < chunks.length; k++) {
				if (chunks[k] != null && chunks[k].needsSaving(flag)) {
					j++;
				}
			}

		}
		int l = 0;
		for (int i1 = 0; i1 < chunks.length; i1++) {
			if (chunks[i1] == null) {
				continue;
			}
			if (flag && !chunks[i1].neverSave) {
				saveExtraChunkData(chunks[i1]);
			}
			if (!chunks[i1].needsSaving(flag)) {
				continue;
			}
			saveChunk(chunks[i1]);
			chunks[i1].isModified = false;
			if (++i == 2 && !flag) {
				return false;
			}
			if (iprogressupdate != null && ++l % 10 == 0) {
				iprogressupdate.setLoadingProgress((l * 100) / j);
			}
		}

		if (flag) {
			if (chunkLoader == null) {
				return true;
			}
			chunkLoader.saveExtraData();
		}
		return true;
	}
	
	private int field_21113_i;
	private int field_21112_j;
	
	public void func_21110_c(int i, int j) {
		field_21113_i = i;
		field_21112_j = j;
	}
	
	public boolean func_21111_d(int i, int j) {
		byte byte0 = 15;
		return i >= field_21113_i - byte0 && j >= field_21112_j - byte0 && i <= field_21113_i + byte0 && j <= field_21112_j + byte0;
	}

	public boolean canSave() {
		return true;
	}
}
