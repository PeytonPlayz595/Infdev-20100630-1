package net.minecraft.src;

import java.util.ArrayList;
import java.util.List;

public class GuiMessage extends GuiScreen {
	
	private String title1;
	private String title2;
	private final List listLines2 = new ArrayList();
	private GuiScreen parent;
	
	public GuiMessage(GuiScreen var1, String var2, String var3) {
		parent = var1;
		title1 = var2;
		title2 = var3;
	}
	
	public void initGui() {
		this.controlList.clear();
		this.controlList.add(new GuiButton(0, this.width / 2 - 100, this.height / 4 + 72, "I Understand!"));
		this.listLines2.clear();
        this.listLines2.addAll(this.fontRenderer.listFormattedStringToWidth(this.title2));
	}
	
	protected void actionPerformed(GuiButton var1) {
		if(var1.id == 0) {
			this.mc.displayGuiScreen(parent);
		}
	}
	
	public void drawScreen(int var1, int var2, float var3) {
		this.drawDefaultBackground();
		this.drawCenteredString(fontRenderer, title1, this.width / 2, 70, 16777215);
		int i = 90;
		
		for (Object s : this.listLines2) {
            this.drawCenteredString(this.fontRenderer, (String) s, this.width / 2, i, 16777215);
            i += 9;
        }
		
		super.drawScreen(var1, var2, var3);
	}

}
