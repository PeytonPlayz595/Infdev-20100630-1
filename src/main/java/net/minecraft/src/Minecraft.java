package net.minecraft.src;

import org.lwjgl.LWJGLException;
import org.lwjgl.input.Keyboard;
import org.lwjgl.input.Mouse;
import org.lwjgl.opengl.Display;
import org.lwjgl.opengl.GL11;
import net.PeytonPlayz585.opengl.LWJGLMain;

public class Minecraft implements Runnable {
	public PlayerController playerController = new PlayerControllerSP(this);
	public int displayWidth;
	public int displayHeight;
	private Timer timer = new Timer(20.0F);
	public World theWorld;
	public RenderGlobal renderGlobal;
	public EntityPlayerSP thePlayer;
	public EffectRenderer effectRenderer;
	public Session session = null;
	public String minecraftUri;
	public volatile boolean isGamePaused = false;
	public RenderEngine renderEngine;
	public FontRenderer fontRenderer;
	public GuiScreen currentScreen = null;
	public LoadingScreenRenderer loadingScreen = new LoadingScreenRenderer(this);
	public EntityRenderer entityRenderer = new EntityRenderer(this);
	private int ticksRan = 0;
	private int leftClickCounter = 0;
	public String objectMouseOverString = null;
	public int rightClickDelayTimer = 0;
	public GuiIngame ingameGUI;
	public boolean skipRenderWorld = false;
	public ModelBiped playerModelBiped = new ModelBiped(0.0F);
	public MovingObjectPosition objectMouseOver = null;
	public GameSettings gameSettings;
	public MouseHelper mouseHelper;
	public static long[] tickTimes = new long[512];
	public static int numRecordedFrameTimes = 0;
	private TextureWaterFX textureWaterFX = new TextureWaterFX();
	private TextureLavaFX textureLavaFX = new TextureLavaFX();
	volatile boolean running = true;
	public String debug = "";
	long prevFrameTime = -1L;
	public boolean inGameHasFocus = false;
	private int mouseTicksRan = 0;
	public boolean isRaining = false;
	long systemTime = System.currentTimeMillis();
	private static Minecraft mc;

	public Minecraft(int var4, int var5, boolean var6) {
		new ThreadSleepForever(this, "Timer hack thread");
		this.displayWidth = var4;
		this.displayHeight = var5;
		mc = this;
	}

	public void setServer(String var1, int var2) {
	}

	public void startGame() {
		this.gameSettings = new GameSettings(this);
		this.renderEngine = new RenderEngine(this.gameSettings);
		this.fontRenderer = new FontRenderer(this.gameSettings, "/default.png", this.renderEngine);
		this.loadScreen();
		this.mouseHelper = new MouseHelper();

		this.checkGLError("Pre startup");
		GL11.glEnable(GL11.GL_TEXTURE_2D);
		GL11.glShadeModel(GL11.GL_SMOOTH);
		GL11.glClearDepth((float)1.0D);
		GL11.glEnable(GL11.GL_DEPTH_TEST);
		GL11.glDepthFunc(GL11.GL_LEQUAL);
		GL11.glEnable(GL11.GL_ALPHA_TEST);
		GL11.glAlphaFunc(GL11.GL_GREATER, 0.1F);
		GL11.glCullFace(GL11.GL_BACK);
		GL11.glMatrixMode(GL11.GL_PROJECTION);
		GL11.glLoadIdentity();
		GL11.glMatrixMode(GL11.GL_MODELVIEW);
		this.checkGLError("Startup");
		//this.sndManager.loadSoundSettings(this.gameSettings);
		this.renderEngine.registerTextureFX(this.textureLavaFX);
		this.renderEngine.registerTextureFX(this.textureWaterFX);
		this.renderEngine.registerTextureFX(new TextureWaterFlowFX());
		this.renderEngine.registerTextureFX(new TextureLavaFlowFX());
		this.renderEngine.registerTextureFX(new TextureFlamesFX(0));
		this.renderEngine.registerTextureFX(new TextureFlamesFX(1));
		this.renderGlobal = new RenderGlobal(this, this.renderEngine);
		GL11.glViewport(0, 0, this.displayWidth, this.displayHeight);
		Minecraft.getMinecraft().displayGuiMessage(new GuiMainMenu(), "EARLY BETA TESTING!", "THIS PROJECT IS STILL IN TESTING!\nTHERE WILL BE BUGS!");
		this.effectRenderer = new EffectRenderer(this.theWorld, this.renderEngine);
		this.checkGLError("Post startup");
		this.ingameGUI = new GuiIngame(this);
		this.playerController.init();
	}

	private void loadScreen() {
		ScaledResolution var1 = new ScaledResolution(this.displayWidth, this.displayHeight);
		int var2 = var1.getScaledWidth();
		int var3 = var1.getScaledHeight();
		GL11.glClear(GL11.GL_DEPTH_BUFFER_BIT | GL11.GL_COLOR_BUFFER_BIT);
		GL11.glMatrixMode(GL11.GL_PROJECTION);
		GL11.glLoadIdentity();
		GL11.glOrtho(0.0D, (double)var2, (double)var3, 0.0D, 1000.0D, 3000.0D);
		GL11.glMatrixMode(GL11.GL_MODELVIEW);
		GL11.glLoadIdentity();
		GL11.glTranslatef(0.0F, 0.0F, -2000.0F);
		GL11.glViewport(0, 0, this.displayWidth, this.displayHeight);
		GL11.glClearColor(0.0F, 0.0F, 0.0F, 0.0F);
		GL11.glDisable(GL11.GL_LIGHTING);
		GL11.glDisable(GL11.GL_FOG);
		GL11.glEnable(GL11.GL_TEXTURE_2D);
		Tessellator var4 = Tessellator.instance;
		GL11.glBindTexture(GL11.GL_TEXTURE_2D, this.renderEngine.getTexture("/dirt.png"));
		GL11.glColor4f(1.0F, 1.0F, 1.0F, 1.0F);
		float var5 = 32.0F;
		var4.startDrawingQuads();
		var4.setColorOpaque_I(4210752);
		var4.addVertexWithUV(0.0D, (double)this.displayHeight, 0.0D, 0.0D, (double)((float)this.displayHeight / var5 + 0.0F));
		var4.addVertexWithUV((double)this.displayWidth, (double)this.displayHeight, 0.0D, (double)((float)this.displayWidth / var5), (double)((float)this.displayHeight / var5 + 0.0F));
		var4.addVertexWithUV((double)this.displayWidth, 0.0D, 0.0D, (double)((float)this.displayWidth / var5), 0.0D);
		var4.addVertexWithUV(0.0D, 0.0D, 0.0D, 0.0D, 0.0D);
		var4.draw();
		GL11.glEnable(GL11.GL_ALPHA_TEST);
		GL11.glAlphaFunc(GL11.GL_GREATER, 0.1F);
		this.fontRenderer.drawStringWithShadow("Loading...", 8, this.displayHeight / 2 - 16, -1);
	}

	public void displayGuiScreen(GuiScreen var1) {
		if(!(this.currentScreen instanceof GuiErrorScreen)) {
			if(this.currentScreen != null) {
				this.currentScreen.onGuiClosed();
			}

			if(var1 == null && this.theWorld == null) {
				var1 = new GuiMainMenu();
			} else if(var1 == null && this.thePlayer.health <= 0) {
				var1 = new GuiGameOver();
			}

			this.currentScreen = (GuiScreen)var1;
			if(var1 != null) {
				this.setIngameNotInFocus();
				ScaledResolution var2 = new ScaledResolution(this.displayWidth, this.displayHeight);
				int var3 = var2.getScaledWidth();
				int var4 = var2.getScaledHeight();
				((GuiScreen)var1).setWorldAndResolution(this, var3, var4);
				this.skipRenderWorld = false;
			} else {
				this.setIngameFocus();
			}

		}
	}
	
	public void displayGuiMessage(GuiScreen var1, String var2, String var3) {
		GuiMessage guimessage = new GuiMessage(var1, var2, var3);
		this.displayGuiScreen(guimessage);
	}

	private void checkGLError(String var1) {
		int var2 = GL11.glGetError();
		if(var2 != 0) {
			String var3 = GL11.gluErrorString(var2);
			System.out.println("########## GL ERROR ##########");
			System.out.println("@ " + var1);
			System.out.println(var2 + ": " + var3);
		}

	}

	public void shutdownMinecraftApplet() {
		System.out.println("Stopping!");
		this.changeWorld1((World)null);
		GLAllocation.deleteTexturesAndDisplayLists();
		//this.sndManager.closeMinecraft();

		System.gc();
	}

	public void run() {
		this.running = true;
		this.startGame();
		long var1 = System.currentTimeMillis();
		int var3 = 0;

		while(this.running) {
			AxisAlignedBB.clearBoundingBoxPool();
			Vec3D.initialize();
				
			if(this.isGamePaused) {
				float var4 = this.timer.renderPartialTicks;
				this.timer.updateTimer();
				this.timer.renderPartialTicks = var4;
			} else {
				this.timer.updateTimer();
			}

			for(int var14 = 0; var14 < this.timer.elapsedTicks; ++var14) {
				++this.ticksRan;
				this.runTick();
			}

			this.checkGLError("Pre render");
			if(this.isGamePaused) {
				this.timer.renderPartialTicks = 1.0F;
			}

			GL11.glEnable(GL11.GL_TEXTURE_2D);
			if(this.theWorld != null) {
				while(this.theWorld.updatingLighting()) {
				}
			}

			if(!this.skipRenderWorld) {
				this.playerController.setPartialTime(this.timer.renderPartialTicks);
				this.entityRenderer.updateCameraAndRender(this.timer.renderPartialTicks);
			}

			if(Keyboard.isKeyDown(33) && Keyboard.isKeyDown(7)) {
				this.displayDebugInfo();
			} else {
				this.prevFrameTime = System.nanoTime();
			}

			Thread.yield();
			Display.update();
			if(Display.getWidth() != this.displayWidth || Display.getHeight() != this.displayHeight) {
				this.displayWidth = LWJGLMain.canvas.getWidth();
				this.displayHeight = LWJGLMain.canvas.getHeight();
				if(this.displayWidth <= 0) {
					this.displayWidth = 1;
				}

				if(this.displayHeight <= 0) {
					this.displayHeight = 1;
				}

				this.resize(this.displayWidth, this.displayHeight);
			}

			if(this.gameSettings.limitFramerate) {
				try {
					Thread.sleep(5L);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}

			this.checkGLError("Post render");
			++var3;

			for(this.isGamePaused = !this.isMultiplayerWorld() && this.currentScreen != null && this.currentScreen.doesGuiPauseGame(); System.currentTimeMillis() >= var1 + 1000L; var3 = 0) {
				this.debug = var3 + " fps, " + WorldRenderer.chunksUpdated + " chunk updates";
				WorldRenderer.chunksUpdated = 0;
				var1 += 1000L;
			}
		}
	}

	private void displayDebugInfo() {
		if(this.prevFrameTime == -1L) {
			this.prevFrameTime = System.nanoTime();
		}

		long var1 = System.nanoTime();
		tickTimes[numRecordedFrameTimes++ & tickTimes.length - 1] = var1 - this.prevFrameTime;
		this.prevFrameTime = var1;
		GL11.glClear(GL11.GL_DEPTH_BUFFER_BIT);
		GL11.glMatrixMode(GL11.GL_PROJECTION);
		GL11.glLoadIdentity();
		GL11.glOrtho(0.0D, (double)this.displayWidth, (double)this.displayHeight, 0.0D, 1000.0D, 3000.0D);
		GL11.glMatrixMode(GL11.GL_MODELVIEW);
		GL11.glLoadIdentity();
		GL11.glTranslatef(0.0F, 0.0F, -2000.0F);
		GL11.glLineWidth(1.0F);
		GL11.glDisable(GL11.GL_TEXTURE_2D);
		Tessellator var3 = Tessellator.instance;
		var3.startDrawing(7);
		var3.setColorOpaque_I(538968064);
		var3.addVertex(0.0D, (double)(this.displayHeight - 100), 0.0D);
		var3.addVertex(0.0D, (double)this.displayHeight, 0.0D);
		var3.addVertex((double)tickTimes.length, (double)this.displayHeight, 0.0D);
		var3.addVertex((double)tickTimes.length, (double)(this.displayHeight - 100), 0.0D);
		var3.draw();
		long var4 = 0L;

		int var6;
		for(var6 = 0; var6 < tickTimes.length; ++var6) {
			var4 += tickTimes[var6];
		}

		var6 = (int)(var4 / 200000L / (long)tickTimes.length);
		var3.startDrawing(7);
		var3.setColorOpaque_I(541065216);
		var3.addVertex(0.0D, (double)(this.displayHeight - var6), 0.0D);
		var3.addVertex(0.0D, (double)this.displayHeight, 0.0D);
		var3.addVertex((double)tickTimes.length, (double)this.displayHeight, 0.0D);
		var3.addVertex((double)tickTimes.length, (double)(this.displayHeight - var6), 0.0D);
		var3.draw();
		var3.startDrawing(1);

		for(int var7 = 0; var7 < tickTimes.length; ++var7) {
			int var8 = (var7 - numRecordedFrameTimes & tickTimes.length - 1) * 255 / tickTimes.length;
			int var9 = var8 * var8 / 255;
			var9 = var9 * var9 / 255;
			int var10 = var9 * var9 / 255;
			var10 = var10 * var10 / 255;
			var3.setColorOpaque_I(-16777216 + var10 + var9 * 256 + var8 * 4096);
			long var11 = tickTimes[var7] / 200000L;
			var3.addVertex((double)((float)var7 + 0.5F), (double)((float)((long)this.displayHeight - var11) + 0.5F), 0.0D);
			var3.addVertex((double)((float)var7 + 0.5F), (double)((float)this.displayHeight + 0.5F), 0.0D);
		}

		var3.draw();
		GL11.glEnable(GL11.GL_TEXTURE_2D);
	}

	public void shutdown() {
		this.running = false;
	}

	public void setIngameFocus() {
		if(Display.isActive()) {
			if(!this.inGameHasFocus) {
				this.inGameHasFocus = true;
				this.mouseHelper.grabMouseCursor();
				this.displayGuiScreen((GuiScreen)null);
				this.mouseTicksRan = this.ticksRan + 10000;
			}
		}
	}

	public void setIngameNotInFocus() {
		if(this.inGameHasFocus) {
			if(this.thePlayer != null) {
				this.thePlayer.resetPlayerKeyState();
			}

			this.inGameHasFocus = false;
			this.mouseHelper.ungrabMouseCursor();
		}
	}

	public void displayInGameMenu() {
		if(this.currentScreen == null) {
			this.displayGuiScreen(new GuiIngameMenu());
		}
	}

	private void sendClickBlockToController(int var1, boolean var2) {
		if(!this.playerController.isInTestMode) {
			if(var1 != 0 || this.leftClickCounter <= 0) {
				if(var2 && this.objectMouseOver != null && this.objectMouseOver.typeOfHit == 0 && var1 == 0) {
					int var3 = this.objectMouseOver.blockX;
					int var4 = this.objectMouseOver.blockY;
					int var5 = this.objectMouseOver.blockZ;
					this.playerController.sendBlockRemoving(var3, var4, var5, this.objectMouseOver.sideHit);
					this.effectRenderer.addBlockHitEffects(var3, var4, var5, this.objectMouseOver.sideHit);
				} else {
					this.playerController.resetBlockRemoving();
				}

			}
		}
	}

	private void clickMouse(int var1) {
		if(var1 != 0 || this.leftClickCounter <= 0) {
			if(var1 == 0) {
				this.entityRenderer.itemRenderer.swing();
			}

			int var3;
			if(this.objectMouseOver == null) {
				if(var1 == 0 && !(this.playerController instanceof PlayerControllerCreative)) {
					this.leftClickCounter = 10;
				}
			} else if(this.objectMouseOver.typeOfHit == 1) {
				if(var1 == 0) {
					this.thePlayer.attackEntity(this.objectMouseOver.entityHit);
				}

				if(var1 == 1) {
					this.thePlayer.interactWithEntity(this.objectMouseOver.entityHit);
				}
			} else if(this.objectMouseOver.typeOfHit == 0) {
				int var2 = this.objectMouseOver.blockX;
				var3 = this.objectMouseOver.blockY;
				int var4 = this.objectMouseOver.blockZ;
				int var5 = this.objectMouseOver.sideHit;
				Block var6 = Block.blocksList[this.theWorld.getBlockId(var2, var3, var4)];
				if(var1 == 0) {
					this.theWorld.extinguishFire(var2, var3, var4, this.objectMouseOver.sideHit);
					if(var6 != Block.bedrock || this.thePlayer.unusedMiningCooldown >= 100) {
						this.playerController.clickBlock(var2, var3, var4);
					}
				} else {
					ItemStack var7 = this.thePlayer.inventory.getCurrentItem();
					int var8 = this.theWorld.getBlockId(var2, var3, var4);
					if(var8 > 0 && Block.blocksList[var8].blockActivated(this.theWorld, var2, var3, var4, this.thePlayer)) {
						return;
					}

					if(var7 == null) {
						return;
					}

					int var9 = var7.stackSize;
					if(var7.useItem(this.thePlayer, this.theWorld, var2, var3, var4, var5)) {
						this.entityRenderer.itemRenderer.swing();
					}

					if(var7.stackSize == 0) {
						this.thePlayer.inventory.mainInventory[this.thePlayer.inventory.currentItem] = null;
					} else if(var7.stackSize != var9) {
						this.entityRenderer.itemRenderer.resetEquippedProgress();
					}
				}
			}

			if(var1 == 1) {
				ItemStack var10 = this.thePlayer.inventory.getCurrentItem();
				if(var10 != null) {
					var3 = var10.stackSize;
					ItemStack var11 = var10.useItemRightClick(this.theWorld, this.thePlayer);
					if(var11 != var10 || var11 != null && var11.stackSize != var3) {
						this.thePlayer.inventory.mainInventory[this.thePlayer.inventory.currentItem] = var11;
						this.entityRenderer.itemRenderer.resetEquippedProgress2();
						if(var11.stackSize == 0) {
							this.thePlayer.inventory.mainInventory[this.thePlayer.inventory.currentItem] = null;
						}
					}
				}
			}

		}
	}

	private void resize(int var1, int var2) {
		if(var1 <= 0) {
			var1 = 1;
		}

		if(var2 <= 0) {
			var2 = 1;
		}

		this.displayWidth = var1;
		this.displayHeight = var2;
		if(this.currentScreen != null) {
			ScaledResolution var3 = new ScaledResolution(var1, var2);
			int var4 = var3.getScaledWidth();
			int var5 = var3.getScaledHeight();
			this.currentScreen.setWorldAndResolution(this, var4, var5);
		}

	}

	private void clickMiddleMouseButton() {
		if(this.objectMouseOver != null) {
			int var1 = this.theWorld.getBlockId(this.objectMouseOver.blockX, this.objectMouseOver.blockY, this.objectMouseOver.blockZ);
			if(var1 == Block.grass.blockID) {
				var1 = Block.dirt.blockID;
			}

			if(var1 == Block.stairDouble.blockID) {
				var1 = Block.stairSingle.blockID;
			}

			if(var1 == Block.bedrock.blockID) {
				var1 = Block.stone.blockID;
			}

			this.thePlayer.inventory.setCurrentItem(var1, this.playerController instanceof PlayerControllerCreative);
		}

	}

	public void runTick() {
		this.ingameGUI.updateTick();

		if (thePlayer != null && theWorld != null) {
			IChunkProvider ichunkprovider = theWorld.getChunkProvider();
			if (ichunkprovider instanceof ChunkProviderLoadOrGenerate) {
				ChunkProviderLoadOrGenerate chunkproviderloadorgenerate = (ChunkProviderLoadOrGenerate) ichunkprovider;
				int j = MathHelper.floor_float((int) thePlayer.posX) >> 4;
				int i1 = MathHelper.floor_float((int) thePlayer.posZ) >> 4;
				chunkproviderloadorgenerate.func_21110_c(j, i1);
			}
		}
		
		if(!this.isGamePaused && this.theWorld != null) {
			this.playerController.onUpdate();
		}

		GL11.glBindTexture(GL11.GL_TEXTURE_2D, this.renderEngine.getTexture("/terrain.png"));

		if(this.currentScreen == null && this.thePlayer != null && this.thePlayer.health <= 0) {
			this.displayGuiScreen((GuiScreen)null);
		}

		if(this.currentScreen == null || this.currentScreen.allowUserInput) {
			label226:
			while(true) {
				while(true) {
					while(true) {
						long var1;
						do {
							if(!Mouse.next()) {
								if(this.leftClickCounter > 0) {
									--this.leftClickCounter;
								}

								while(true) {
									while(true) {
										do {
											if(!Keyboard.next()) {
												if(this.currentScreen == null) {
													if(Mouse.isButtonDown(0) && (float)(this.ticksRan - this.mouseTicksRan) >= this.timer.ticksPerSecond / 4.0F && this.inGameHasFocus) {
														this.clickMouse(0);
														this.mouseTicksRan = this.ticksRan;
													}

													if(Mouse.isButtonDown(1) && (float)(this.ticksRan - this.mouseTicksRan) >= this.timer.ticksPerSecond / 4.0F && this.inGameHasFocus) {
														this.clickMouse(1);
														this.mouseTicksRan = this.ticksRan;
													}
												}

												this.sendClickBlockToController(0, this.currentScreen == null && Mouse.isButtonDown(0) && this.inGameHasFocus);
												break label226;
											}

											this.thePlayer.handleKeyPress(Keyboard.getEventKey(), Keyboard.getEventKeyState());
										} while(!Keyboard.getEventKeyState());
										
										if(this.currentScreen != null) {
											this.currentScreen.handleKeyboardInput();
										} else {
											if(Keyboard.getEventKey() == 1) {
												this.displayInGameMenu();
											}

											if(this.playerController instanceof PlayerControllerCreative) {
												if(Keyboard.getEventKey() == this.gameSettings.keyBindLoad.keyCode) {
												}

												if(Keyboard.getEventKey() == this.gameSettings.keyBindSave.keyCode) {
												}
											}

											if(Keyboard.getEventKey() == 33 && Keyboard.isKeyDown(6)) {
												this.gameSettings.thirdPersonView = !this.gameSettings.thirdPersonView;
												this.isRaining = !this.isRaining;
											}

											if(Keyboard.getEventKey() == this.gameSettings.keyBindInventory.keyCode) {
												this.displayGuiScreen(new GuiInventory(this.thePlayer.inventory));
											}

											if(Keyboard.getEventKey() == this.gameSettings.keyBindDrop.keyCode) {
												this.thePlayer.dropPlayerItemWithRandomChoice(this.thePlayer.inventory.decrStackSize(this.thePlayer.inventory.currentItem, 1), false);
											}
										}

										for(int var4 = 0; var4 < 9; ++var4) {
											if(Keyboard.getEventKey() == 2 + var4) {
												this.thePlayer.inventory.currentItem = var4;
											}
										}

										if(Keyboard.getEventKey() == this.gameSettings.keyBindToggleFog.keyCode) {
											this.gameSettings.setOptionFloatValue(4, !Keyboard.isKeyDown(42) && !Keyboard.isKeyDown(54) ? 1 : -1);
										}
									}
								}
							}

							var1 = System.currentTimeMillis() - this.systemTime;
						} while(var1 > 200L);

						int var3 = Mouse.getEventDWheel();
						if(var3 != 0) {
							this.thePlayer.inventory.changeCurrentItem(var3);
						}

						if(this.currentScreen == null) {
							if(!this.inGameHasFocus && Mouse.getEventButtonState()) {
								this.setIngameFocus();
							} else {
								if(Mouse.getEventButton() == 0 && Mouse.getEventButtonState()) {
									this.clickMouse(0);
									this.mouseTicksRan = this.ticksRan;
								}

								if(Mouse.getEventButton() == 1 && Mouse.getEventButtonState()) {
									this.clickMouse(1);
									this.mouseTicksRan = this.ticksRan;
								}

								if(Mouse.getEventButton() == 2 && Mouse.getEventButtonState()) {
									this.clickMiddleMouseButton();
								}
							}
						} else if(this.currentScreen != null) {
							this.currentScreen.handleMouseInput();
						}
					}
				}
			}
		}

		if(this.currentScreen != null) {
			this.mouseTicksRan = this.ticksRan + 10000;
		}

		if(this.currentScreen != null) {
			this.currentScreen.handleInput();
			if(this.currentScreen != null) {
				this.currentScreen.updateScreen();
			}
		}

		if(this.theWorld != null) {
			this.theWorld.difficultySetting = this.gameSettings.difficulty;
			if(!this.isGamePaused) {
				this.entityRenderer.updateRenderer();
			}

			if(!this.isGamePaused) {
				this.renderGlobal.updateClouds();
			}

			if(!this.isGamePaused) {
				this.theWorld.updateEntities();
			}

			if(!this.isGamePaused && !this.isMultiplayerWorld()) {
				this.theWorld.tick();
			}

			if(!this.isGamePaused) {
				this.theWorld.randomDisplayUpdates(MathHelper.floor_double(this.thePlayer.posX), MathHelper.floor_double(this.thePlayer.posY), MathHelper.floor_double(this.thePlayer.posZ));
			}

			if(!this.isGamePaused) {
				this.effectRenderer.updateEffects();
			}
		}

		this.systemTime = System.currentTimeMillis();
	}

	public boolean isMultiplayerWorld() {
		return false;
	}

	public void startWorld(String var1) {
		this.changeWorld1((World)null);
		System.gc();
		World var2 = new World(var1);
		if(var2.isNewWorld) {
			this.changeWorld2(var2, "Generating level");
		} else {
			this.changeWorld2(var2, "Loading level");
		}

	}

	public void changeWorld1(World var1) {
		this.changeWorld2(var1, "");
	}

	public void changeWorld2(World var1, String var2) {
		if(this.theWorld != null) {
			this.theWorld.saveWorldIndirectly(this.loadingScreen);
		}

		this.theWorld = var1;
		if(var1 != null) {
			this.playerController.onWorldChange(var1);
			var1.fontRenderer = this.fontRenderer;
			if(!this.isMultiplayerWorld()) {
				this.thePlayer = (EntityPlayerSP)var1.createDebugPlayer(EntityPlayerSP.class);
				var1.playerEntity = this.thePlayer;
			} else if(this.thePlayer != null) {
				this.thePlayer.preparePlayerToSpawn();
				if(var1 != null) {
					var1.playerEntity = this.thePlayer;
					var1.spawnEntityInWorld(this.thePlayer);
				}
			}

			this.preloadWorld(var2);
			if(this.thePlayer == null) {
				this.thePlayer = new EntityPlayerSP(this, var1, this.session);
				this.thePlayer.preparePlayerToSpawn();
				this.playerController.flipPlayer(this.thePlayer);
			}

			this.thePlayer.movementInput = new MovementInputFromOptions(this.gameSettings);
			if(this.renderGlobal != null) {
				this.renderGlobal.changeWorld(var1);
			}

			if(this.effectRenderer != null) {
				this.effectRenderer.clearEffects(var1);
			}

			this.playerController.onRespawn(this.thePlayer);
			var1.playerEntity = this.thePlayer;
			var1.spawnPlayerWithLoadedChunks();
			if(var1.isNewWorld) {
				var1.saveWorldIndirectly(this.loadingScreen);
			}
		}

		System.gc();
		this.systemTime = 0L;
	}

	private void preloadWorld(String var1) {
		this.loadingScreen.printText(var1);
		this.loadingScreen.displayLoadingString("Building terrain");
		short var2 = 128;
		int var3 = 0;
		int var4 = var2 * 2 / 16 + 1;
		var4 *= var4;

		int var5;
		for(var5 = -var2; var5 <= var2; var5 += 16) {
			int var6 = this.theWorld.spawnX;
			int var7 = this.theWorld.spawnZ;
			if(this.theWorld.playerEntity != null) {
				var6 = (int)this.theWorld.playerEntity.posX;
				var7 = (int)this.theWorld.playerEntity.posZ;
			}

			for(int var8 = -var2; var8 <= var2; var8 += 16) {
				this.loadingScreen.setLoadingProgress(var3++ * 100 / var4);
				this.theWorld.getBlockId(var6 + var5, 64, var7 + var8);

				while(this.theWorld.updatingLighting()) {
				}
			}
		}

		this.loadingScreen.displayLoadingString("Simulating world for a bit");
		short var9 = 2000;
		BlockSand.fallInstantly = true;

		for(var5 = 0; var5 < var9; ++var5) {
			this.theWorld.tickUpdates(true);
		}

		BlockSand.fallInstantly = false;
	}

	public String debugInfoRenders() {
		return this.renderGlobal.getDebugInfoRenders();
	}

	public String getEntityDebug() {
		return this.renderGlobal.getDebugInfoEntities();
	}

	public String debugInfoEntities() {
		return "P: " + this.effectRenderer.getStatistics() + ". T: " + this.theWorld.getDebugLoadedEntities();
	}

	public void respawn() {
		if(this.thePlayer != null && this.theWorld != null) {
			this.theWorld.setEntityDead(this.thePlayer);
		}

		this.theWorld.setSpawnLocation();
		this.thePlayer = new EntityPlayerSP(this, this.theWorld, this.session);
		this.thePlayer.preparePlayerToSpawn();
		this.playerController.flipPlayer(this.thePlayer);
		if(this.theWorld != null) {
			this.theWorld.playerEntity = this.thePlayer;
			this.theWorld.spawnPlayerWithLoadedChunks();
		}

		this.thePlayer.movementInput = new MovementInputFromOptions(this.gameSettings);
		this.playerController.onRespawn(this.thePlayer);
		this.preloadWorld("Respawning");
	}

	public static Minecraft getMinecraft() {
		return mc;
	}
}
