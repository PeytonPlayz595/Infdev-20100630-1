package net.minecraft.src;

import org.lwjgl.input.Keyboard;

public class GameSettings {
	private static final String[] RENDER_DISTANCES = new String[]{"FAR", "NORMAL", "SHORT", "TINY"};
	private static final String[] DIFFICULTIES = new String[]{"Peaceful", "Easy", "Normal", "Hard"};
	public boolean music = true;
	public boolean sound = true;
	public boolean invertMouse = false;
	public boolean showFPS = false;
	public int renderDistance = 0;
	public boolean viewBobbing = true;
	public boolean anaglyph = false;
	public boolean limitFramerate = false;
	public boolean fancyGraphics = true;
	public KeyBinding keyBindForward = new KeyBinding("Forward", 17);
	public KeyBinding keyBindLeft = new KeyBinding("Left", 30);
	public KeyBinding keyBindBack = new KeyBinding("Back", 31);
	public KeyBinding keyBindRight = new KeyBinding("Right", 32);
	public KeyBinding keyBindJump = new KeyBinding("Jump", 57);
	public KeyBinding keyBindInventory = new KeyBinding("Inventory", 23);
	public KeyBinding keyBindDrop = new KeyBinding("Drop", 16);
	public KeyBinding keyBindChat = new KeyBinding("Chat", 20);
	public KeyBinding keyBindToggleFog = new KeyBinding("Toggle fog", 33);
	public KeyBinding keyBindSave = new KeyBinding("Save location", 28);
	public KeyBinding keyBindLoad = new KeyBinding("Load location", 19);
	public KeyBinding[] keyBindings = new KeyBinding[]{this.keyBindForward, this.keyBindLeft, this.keyBindBack, this.keyBindRight, this.keyBindJump, this.keyBindDrop, this.keyBindInventory, this.keyBindChat, this.keyBindToggleFog, this.keyBindSave, this.keyBindLoad};
	protected Minecraft mc;
	public int numberOfOptions = 12;
	public int difficulty = 2;
	public boolean thirdPersonView = false;
	public boolean highPerformance = false;
	public boolean mipmap = false;

	public GameSettings(Minecraft var1) {
		this.mc = var1;
		this.loadOptions();
	}

	public String getOptionDisplayString(int var1) {
		return this.keyBindings[var1].keyDescription + ": " + Keyboard.getKeyName(this.keyBindings[var1].keyCode);
	}

	public void setKeyBinding(int var1, int var2) {
		this.keyBindings[var1].keyCode = var2;
		this.saveOptions();
	}

	public void setOptionFloatValue(int var1, int var2) {
		if(var1 == 0) {
			this.music = !this.music;
			//this.mc.sndManager.onSoundOptionsChanged();
		}

		if(var1 == 1) {
			this.sound = !this.sound;
			//this.mc.sndManager.onSoundOptionsChanged();
		}

		if(var1 == 2) {
			this.invertMouse = !this.invertMouse;
		}

		if(var1 == 3) {
			this.showFPS = !this.showFPS;
		}

		if(var1 == 4) {
			this.renderDistance = this.renderDistance + var2 & 3;
		}

		if(var1 == 5) {
			this.viewBobbing = !this.viewBobbing;
		}

		if(var1 == 6) {
			this.anaglyph = !this.anaglyph;
		}

		if(var1 == 7) {
			this.limitFramerate = !this.limitFramerate;
		}

		if(var1 == 8) {
			this.difficulty = this.difficulty + var2 & 3;
		}

		if(var1 == 9) {
			this.fancyGraphics = !this.fancyGraphics;
			this.mc.renderGlobal.loadRenderers();
		}
		
		if(var1 == 10) {
			this.highPerformance = !this.highPerformance;
			if(this.highPerformance) {
				this.renderDistance = 2;
				this.viewBobbing = false;
				this.fancyGraphics = false;
				this.anaglyph = false;
			}
			this.mc.renderGlobal.loadRenderers();
		}
		
		if(var1 == 11) {
			this.mipmap = !this.mipmap;
		}

		this.saveOptions();
	}

	public String getKeyBinding(int var1) {
		return var1 == 0 ? "Music: " + (this.music ? "ON" : "OFF") : (var1 == 1 ? "Sound: " + (this.sound ? "ON" : "OFF") : (var1 == 2 ? "Invert mouse: " + (this.invertMouse ? "ON" : "OFF") : (var1 == 3 ? "Show FPS: " + (this.showFPS ? "ON" : "OFF") : (var1 == 4 ? "Render distance: " + RENDER_DISTANCES[this.renderDistance] : (var1 == 5 ? "View bobbing: " + (this.viewBobbing ? "ON" : "OFF") : (var1 == 6 ? "3d anaglyph: " + (this.anaglyph ? "ON" : "OFF") : (var1 == 7 ? "Limit framerate: " + (this.limitFramerate ? "ON" : "OFF") : (var1 == 8 ? "Difficulty: " + DIFFICULTIES[this.difficulty] : (var1 == 9 ? "Graphics: " + (this.fancyGraphics ? "FANCY" : "FAST") : (var1 == 10 ? "High Performance Mode: " + (this.highPerformance ? "ON" : "OFF") : (var1 == 11 ? "MipMap: " + (this.mipmap ? "ON" : "OFF") : "")))))))))));
	}

	public void loadOptions() {
//		try {
//			if(!this.optionsFile.exists()) {
//				return;
//			}
//
//			BufferedReader var1 = new BufferedReader(new FileReader(this.optionsFile));
//			String var2 = "";
//
//			while(true) {
//				var2 = var1.readLine();
//				if(var2 == null) {
//					var1.close();
//					break;
//				}
//
//				String[] var3 = var2.split(":");
//				if(var3[0].equals("music")) {
//					this.music = var3[1].equals("true");
//				}
//
//				if(var3[0].equals("sound")) {
//					this.sound = var3[1].equals("true");
//				}
//
//				if(var3[0].equals("invertYMouse")) {
//					this.invertMouse = var3[1].equals("true");
//				}
//
//				if(var3[0].equals("showFrameRate")) {
//					this.showFPS = var3[1].equals("true");
//				}
//
//				if(var3[0].equals("viewDistance")) {
//					this.renderDistance = Integer.parseInt(var3[1]);
//				}
//
//				if(var3[0].equals("bobView")) {
//					this.viewBobbing = var3[1].equals("true");
//				}
//
//				if(var3[0].equals("anaglyph3d")) {
//					this.anaglyph = var3[1].equals("true");
//				}
//
//				if(var3[0].equals("limitFramerate")) {
//					this.limitFramerate = var3[1].equals("true");
//				}
//
//				if(var3[0].equals("difficulty")) {
//					this.difficulty = Integer.parseInt(var3[1]);
//				}
//
//				if(var3[0].equals("fancyGraphics")) {
//					this.fancyGraphics = var3[1].equals("true");
//				}
//
//				for(int var4 = 0; var4 < this.keyBindings.length; ++var4) {
//					if(var3[0].equals("key_" + this.keyBindings[var4].keyDescription)) {
//						this.keyBindings[var4].keyCode = Integer.parseInt(var3[1]);
//					}
//				}
//			}
//		} catch (Exception var5) {
//			System.out.println("Failed to load options");
//			var5.printStackTrace();
//		}

	}

	public void saveOptions() {
//		try {
//			PrintWriter var1 = new PrintWriter(new FileWriter(this.optionsFile));
//			var1.println("music:" + this.music);
//			var1.println("sound:" + this.sound);
//			var1.println("invertYMouse:" + this.invertMouse);
//			var1.println("showFrameRate:" + this.showFPS);
//			var1.println("viewDistance:" + this.renderDistance);
//			var1.println("bobView:" + this.viewBobbing);
//			var1.println("anaglyph3d:" + this.anaglyph);
//			var1.println("limitFramerate:" + this.limitFramerate);
//			var1.println("difficulty:" + this.difficulty);
//			var1.println("fancyGraphics:" + this.fancyGraphics);
//
//			for(int var2 = 0; var2 < this.keyBindings.length; ++var2) {
//				var1.println("key_" + this.keyBindings[var2].keyDescription + ":" + this.keyBindings[var2].keyCode);
//			}
//
//			var1.close();
//		} catch (Exception var3) {
//			System.out.println("Failed to save options");
//			var3.printStackTrace();
//		}

	}
}
