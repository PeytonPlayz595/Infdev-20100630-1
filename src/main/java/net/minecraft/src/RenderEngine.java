package net.minecraft.src;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.IntBuffer;
import java.util.ArrayList;
import java.util.HashMap;

import org.lwjgl.opengl.GL11;

import net.PeytonPlayz585.opengl.LWJGLMain;
import net.PeytonPlayz585.opengl.MinecraftImageData;

public class RenderEngine {

	public RenderEngine(GameSettings gamesettings) {
		textureMap = new HashMap<String, Integer>();
		textureNameToImageMap = new HashMap<Integer, MinecraftImageData>();
		singleIntBuffer = GLAllocation.createIntBuffer(1);
		imageDataB1 = GLAllocation.createByteBuffer(0x100000);
		imageDataB2 = GLAllocation.createByteBuffer(0x100000);
		textureList = new ArrayList<TextureFX>();
		clampTexture = false;
		blurTexture = false;
		options = gamesettings;
	}

	public int getTexture(String s) {
		Integer integer = (Integer) textureMap.get(s);
		if (integer != null) {
			return integer.intValue();
		}
		try {
			singleIntBuffer.clear();
			GLAllocation.generateTextureNames(singleIntBuffer);
			int i = singleIntBuffer.get(0);
			if (s.startsWith("%%")) {
				clampTexture = true;
				setupTexture(readTextureImage(LWJGLMain.loadResourceBytes(s.substring(7))), i);
				clampTexture = false;
			} else {
				if(s.equals("/terrain.png") && Minecraft.getMinecraft().gameSettings.mipmap) {
					useMipmaps = true;
				}
				setupTexture(readTextureImage(LWJGLMain.loadResourceBytes(s)), i);
				useMipmaps = false;
			}
			textureMap.put(s, Integer.valueOf(i));
			return i;
		} catch (IOException ioexception) {
			throw new RuntimeException("!!");
		}
	}
	
	public int allocateAndSetupTexture(MinecraftImageData bufferedimage) {
		singleIntBuffer.clear();
		GLAllocation.generateTextureNames(singleIntBuffer);
		int i = singleIntBuffer.get(0);
		setupTexture(bufferedimage, i);
		textureNameToImageMap.put(Integer.valueOf(i), bufferedimage);
		return i;
	}
	
	public int allocateAndSetupTexture(byte[] data, int w, int h) {
		int i = GL11.glGenTextures();
		bindTexture(i);
		GL11.glTexParameteri(3553 /* GL_TEXTURE_2D */, 10241 /* GL_TEXTURE_MIN_FILTER */, 9729 /* GL_LINEAR */);
		GL11.glTexParameteri(3553 /* GL_TEXTURE_2D */, 10240 /* GL_TEXTURE_MAG_FILTER */, 9728 /* GL_NEAREST */);
		GL11.glTexParameteri(3553 /* GL_TEXTURE_2D */, 10242 /* GL_TEXTURE_WRAP_S */, 10497 /* GL_REPEAT */);
		GL11.glTexParameteri(3553 /* GL_TEXTURE_2D */, 10243 /* GL_TEXTURE_WRAP_T */, 10497 /* GL_REPEAT */);
		imageDataB1.clear();
		imageDataB1.put(data);
		imageDataB1.position(0).limit(data.length);
		GL11.glTexImage2D(3553 /* GL_TEXTURE_2D */, 0, 6408 /* GL_RGBA */, w, h, 0, 6408 /* GL_RGBA */,
						5121 /* GL_UNSIGNED_BYTE */, imageDataB1);
		return i;
	}

	public void setupTexture(MinecraftImageData bufferedimage, int i) {
		bindTexture(i);
		if (useMipmaps) {
			GL11.glTexParameteri(3553 /* GL_TEXTURE_2D */, 10241 /* GL_TEXTURE_MIN_FILTER */, GL11.GL_NEAREST_MIPMAP_LINEAR);
			GL11.glTexParameteri(3553 /* GL_TEXTURE_2D */, 10240 /* GL_TEXTURE_MAG_FILTER */, GL11.GL_NEAREST /* GL_LINEAR */);
			GL11.glTexParameteri(3553 /* GL_TEXTURE_2D */, GL11.GL_TEXTURE_MAX_LEVEL, 4);
		} else {
			GL11.glTexParameteri(3553 /* GL_TEXTURE_2D */, 10241 /* GL_TEXTURE_MIN_FILTER */, 9728 /* GL_NEAREST */);
			GL11.glTexParameteri(3553 /* GL_TEXTURE_2D */, 10240 /* GL_TEXTURE_MAG_FILTER */, 9728 /* GL_NEAREST */);
		}
		if (blurTexture) {
			GL11.glTexParameteri(3553 /* GL_TEXTURE_2D */, 10241 /* GL_TEXTURE_MIN_FILTER */, 9729 /* GL_LINEAR */);
			GL11.glTexParameteri(3553 /* GL_TEXTURE_2D */, 10240 /* GL_TEXTURE_MAG_FILTER */, 9729 /* GL_LINEAR */);
		}
		if (clampTexture) {
			GL11.glTexParameteri(3553 /* GL_TEXTURE_2D */, 10242 /* GL_TEXTURE_WRAP_S */, 10496 /* GL_CLAMP */);
			GL11.glTexParameteri(3553 /* GL_TEXTURE_2D */, 10243 /* GL_TEXTURE_WRAP_T */, 10496 /* GL_CLAMP */);
		} else {
			GL11.glTexParameteri(3553 /* GL_TEXTURE_2D */, 10242 /* GL_TEXTURE_WRAP_S */, 10497 /* GL_REPEAT */);
			GL11.glTexParameteri(3553 /* GL_TEXTURE_2D */, 10243 /* GL_TEXTURE_WRAP_T */, 10497 /* GL_REPEAT */);
		}
		int j = bufferedimage.w;
		int k = bufferedimage.h;
		int ai[] = bufferedimage.data;
		byte abyte0[] = new byte[j * k * 4];
		for (int l = 0; l < ai.length; l++) {
			int j1 = ai[l] >> 24 & 0xff;
			int l1 = ai[l] >> 16 & 0xff;
			int j2 = ai[l] >> 8 & 0xff;
			int l2 = ai[l] >> 0 & 0xff;
			if (options != null && options.anaglyph) {
				int j3 = (l1 * 30 + j2 * 59 + l2 * 11) / 100;
				int l3 = (l1 * 30 + j2 * 70) / 100;
				int j4 = (l1 * 30 + l2 * 70) / 100;
				l1 = j3;
				j2 = l3;
				l2 = j4;
			}
			abyte0[l * 4 + 0] = (byte) l1;
			abyte0[l * 4 + 1] = (byte) j2;
			abyte0[l * 4 + 2] = (byte) l2;
			abyte0[l * 4 + 3] = (byte) j1;
		}
		imageDataB1.clear();
		imageDataB1.put(abyte0);
		imageDataB1.position(0).limit(abyte0.length);
		GL11.glTexImage2D(3553 /* GL_TEXTURE_2D */, 0, 6408 /* GL_RGBA */, j, k, 0, 6408 /* GL_RGBA */,
				5121 /* GL_UNSIGNED_BYTE */, imageDataB1);
		if (useMipmaps) {
			for (int i1 = 1; i1 <= 4; i1++) {
				int k1 = j >> i1 - 1;
				int i2 = j >> i1;
				int k2 = k >> i1;
				imageDataB2.clear();
				for (int i3 = 0; i3 < i2; i3++) {
					for (int k3 = 0; k3 < k2; k3++) {
						int i4 = imageDataB1.getInt((i3 * 2 + 0 + (k3 * 2 + 0) * k1) * 4);
						int k4 = imageDataB1.getInt((i3 * 2 + 1 + (k3 * 2 + 0) * k1) * 4);
						int l4 = imageDataB1.getInt((i3 * 2 + 1 + (k3 * 2 + 1) * k1) * 4);
						int i5 = imageDataB1.getInt((i3 * 2 + 0 + (k3 * 2 + 1) * k1) * 4);
						int j5 = averageColor(averageColor(i4, k4), averageColor(l4, i5));
						imageDataB2.putInt((i3 + k3 * i2) * 4, j5);
					}

				}
				
				GL11.glTexImage2D(3553 /* GL_TEXTURE_2D */, i1, 6408 /* GL_RGBA */, i2, k2, 0, 6408 /* GL_RGBA */,
						5121 /* GL_UNSIGNED_BYTE */, imageDataB2);
				ByteBuffer tmp = imageDataB1;
				imageDataB1 = imageDataB2;
				imageDataB2 = tmp;
			}

		}
	}

	public void deleteTexture(int i) {
		GL11.glDeleteTextures(i);
	}

	public int getTextureForDownloadableImage(String s, String s1) {
		return getTexture("/char.png");
	}
	
	public void registerTextureFX(TextureFX texturefx) {
		textureList.add(texturefx);
		texturefx.onTick();
	}

	private int averageColor(int i, int j) {
		int k = (i & 0xff000000) >> 24 & 0xff;
		int l = (j & 0xff000000) >> 24 & 0xff;
		return ((k + l >> 1) << 24) + ((i & 0xfefefe) + (j & 0xfefefe) >> 1);
		
	}

	private MinecraftImageData readTextureImage(byte[] inputstream) throws IOException {
		return LWJGLMain.loadPNG(inputstream);
	}

	public void bindTexture(int i) {
		if (i < 0) {
			return;
		} else {
			GL11.glBindTexture(3553 /* GL_TEXTURE_2D */, i);
			return;
		}
	}

	public static boolean useMipmaps = false;
	private static HashMap<String, Integer> textureMap;
	private HashMap<Integer, MinecraftImageData> textureNameToImageMap;
	private IntBuffer singleIntBuffer;
	private ByteBuffer imageDataB1;
	private ByteBuffer imageDataB2;
	private java.util.List<TextureFX> textureList;
	private GameSettings options;
	private boolean clampTexture;
	private boolean blurTexture;
}