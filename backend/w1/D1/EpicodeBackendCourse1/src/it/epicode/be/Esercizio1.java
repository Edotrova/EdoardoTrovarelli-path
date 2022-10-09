package it.epicode.be;

public class Esercizio1 {
public static void main(String[] args) {
	int x = moltiplica(4,5);
	System.out.println(x);
	
}


public static int moltiplica(int n1, int n2) {
return n1 * n2;}


public static String concatena(String s, int n) {
	return s + n;
}


public static String[] inserisci(String[]arr, String s) {
	String[] res = 	new String [6];
		res[0] = arr[0];
		res[1] = arr[1];
		res[2] = s;
		res[3] = arr[2];
		res[4] = arr[3];
		res[5] = arr [4];
		String[] res1 = {arr[0], arr[1], s, arr[2], arr[3], arr[4], arr[5]};
		return res1;
}
		
}





