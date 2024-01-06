package net.PeytonPlayz585.io;

import java.util.Collection;

import net.PeytonPlayz585.opengl.LWJGLMain;

public class FileSystemUtils {
	
	public static void recursiveDeleteDirectory(String dir) {
		Collection<LWJGLMain.FileEntry> lst = LWJGLMain.listFiles(dir, true, true);
		for(LWJGLMain.FileEntry t : lst) {
			if(!t.isDirectory) {
				LWJGLMain.deleteFile(t.path);
			}
		}
		for(LWJGLMain.FileEntry t : lst) {
			if(t.isDirectory) {
				LWJGLMain.deleteFile(t.path);
			}
		}
		LWJGLMain.deleteFile(dir);
	}

}