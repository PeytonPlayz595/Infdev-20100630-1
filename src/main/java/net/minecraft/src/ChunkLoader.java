package net.minecraft.src;

import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.util.Iterator;

import net.PeytonPlayz585.opengl.LWJGLMain;

public class ChunkLoader implements IChunkLoader {
	
	private String saveDir;
	
	public ChunkLoader(String dir) {
		saveDir = dir;
	}

	private String chunkFileForXZ(int x, int z) {
		int unsignedX = x + 30233088;
		int unsignedZ = z + 30233088;
		StringBuilder path = new StringBuilder(10);
		for(int i = 0; i < 5; ++i) {
			int remainderX = unsignedX % 36;
			int remainderZ = unsignedZ % 36;
			path.append(getChar(remainderX));
			path.append(getChar(remainderZ));
			unsignedX /= 36;
			unsignedZ /= 36;
		}
		return path.toString();
	}
	
	private char getChar(int num) {
		if(num < 10) {
			return (char) ('0' + num);
		} else {
			return (char) ('A' + num - 10);
		}
	}

	public Chunk loadChunk(World var1, int x, int z) {
		String name = chunkFileForXZ(x, z);
		String path = saveDir + "/" + name;
		byte[] dat = LWJGLMain.readFile(path);
		if(dat != null) {
			try {
				NBTTagCompound nbt = (NBTTagCompound) NBTBase.readNamedTag(new DataInputStream(new ByteArrayInputStream(dat)));
				int xx = nbt.getInteger("xPos");
				int zz = nbt.getInteger("zPos");
				if(x != xx || z != zz) {
					String name2 = chunkFileForXZ(xx, zz);
					System.err.println("The chunk file '" + name + "' was supposed to be at [" + x + ", " + z + "], but the file contained a chunk from [" + xx + ", " + zz +
							"]. It's data will be moved to file '" + name2 + "', and a new empty chunk will be created for file '" + name + "' for [" + x + ", " + z + "]");
					LWJGLMain.renameFile(path, saveDir + "/" + name2);
					return null;
				}
				
				return loadChunkIntoWorldFromCompound(var1, nbt);
			} catch (IOException e) {
				System.err.println("Corrupt chunk '" + name + "' was found at: [" + x + ", " + z + "]");
				System.err.println("The file will be deleted");
				LWJGLMain.deleteFile(path);
				e.printStackTrace();
				return null;
			}
		}else {
			return null;
		}
	}

	public void saveChunk(World var1, Chunk var2) {
		NBTTagCompound toSave = new NBTTagCompound();
		storeChunkInCompound(var2, var1, toSave);
		ByteArrayOutputStream bao = new ByteArrayOutputStream(98304);
		try (DataOutputStream dos = new DataOutputStream(new BufferedOutputStream(bao))) {
			NBTBase.writeNamedTag(toSave, dos);
			dos.flush();
			byte[] data = bao.toByteArray();
			LWJGLMain.writeFile(saveDir + "/" + chunkFileForXZ(var2.xPosition, var2.zPosition), data);
		} catch (IOException e) {
			System.err.println("Failed to serialize chunk at [" + var2.xPosition + ", " + var2.zPosition + "] to byte array");
			e.printStackTrace();
			return;
		}
	}

	public void storeChunkInCompound(Chunk var1, World var2, NBTTagCompound var3) {
		var3.setInteger("xPos", var1.xPosition);
		var3.setInteger("zPos", var1.zPosition);
		var3.setLong("LastUpdate", var2.worldTime);
		var3.setByteArray("Blocks", var1.blocks);
		var3.setByteArray("Data", var1.data.data);
		var3.setByteArray("SkyLight", var1.skylightMap.data);
		var3.setByteArray("BlockLight", var1.blocklightMap.data);
		var3.setByteArray("HeightMap", var1.heightMap);
		var3.setBoolean("TerrainPopulated", var1.isTerrainPopulated);
		var1.hasEntities = false;
		NBTTagList var4 = new NBTTagList();

//		Iterator var6;
//		NBTTagCompound var8;
//		for(int var5 = 0; var5 < var1.entities.length; ++var5) {
//			var6 = var1.entities[var5].iterator();
//
//			while(var6.hasNext()) {
//				Entity var7 = (Entity)var6.next();
//				var1.hasEntities = true;
//				var8 = new NBTTagCompound();
//				if(var7.addEntityID(var8)) {
//					var4.setTag(var8);
//				}
//			}
//		}
//
//		var3.setTag("Entities", var4);
//		NBTTagList var9 = new NBTTagList();
//		var6 = var1.chunkTileEntityMap.values().iterator();
//
//		while(var6.hasNext()) {
//			TileEntity var10 = (TileEntity)var6.next();
//			var8 = new NBTTagCompound();
//			var10.writeToNBT(var8);
//			var9.setTag(var8);
//		}
//
//		var3.setTag("TileEntities", var9);
	}

	public static Chunk loadChunkIntoWorldFromCompound(World var0, NBTTagCompound var1) {
		int var2 = var1.getInteger("xPos");
		int var3 = var1.getInteger("zPos");
		Chunk var4 = new Chunk(var0, var2, var3);
		var4.blocks = var1.getByteArray("Blocks");
		var4.data = new NibbleArray(var1.getByteArray("Data"));
		var4.skylightMap = new NibbleArray(var1.getByteArray("SkyLight"));
		var4.blocklightMap = new NibbleArray(var1.getByteArray("BlockLight"));
		var4.heightMap = var1.getByteArray("HeightMap");
		var4.isTerrainPopulated = var1.getBoolean("TerrainPopulated");
		if(!var4.data.isValid()) {
			var4.data = new NibbleArray(var4.blocks.length);
		}

		if(var4.heightMap == null || !var4.skylightMap.isValid()) {
			var4.heightMap = new byte[256];
			var4.skylightMap = new NibbleArray(var4.blocks.length);
			var4.generateHeightMap();
		}

		if(!var4.blocklightMap.isValid()) {
			var4.blocklightMap = new NibbleArray(var4.blocks.length);
			var4.doNothing();
		}

//		NBTTagList var5 = var1.getTagList("Entities");
//		if(var5 != null) {
//			for(int var6 = 0; var6 < var5.tagCount(); ++var6) {
//				NBTTagCompound var7 = (NBTTagCompound)var5.tagAt(var6);
//				Entity var8 = EntityList.createEntityFromNBT(var7, var0);
//				var4.hasEntities = true;
//				if(var8 != null) {
//					var4.addEntity(var8);
//				}
//			}
//		}
//
//		NBTTagList var10 = var1.getTagList("TileEntities");
//		if(var10 != null) {
//			for(int var11 = 0; var11 < var10.tagCount(); ++var11) {
//				NBTTagCompound var12 = (NBTTagCompound)var10.tagAt(var11);
//				TileEntity var9 = TileEntity.createAndLoadEntity(var12);
//				if(var9 != null) {
//					var4.addTileEntity(var9);
//				}
//			}
//		}

		return var4;
	}

	public void saveExtraData() {
	}

	public void saveExtraChunkData(World var1, Chunk var2) {
	}
}
