package net.minecraft.src;

public interface IProgressUpdate {
	void displayProgressMessage(String var1);

	void displayLoadingString(String var1);
	
	void displayLoadingString(String var1, String var2);

	void setLoadingProgress(int var1);
}
