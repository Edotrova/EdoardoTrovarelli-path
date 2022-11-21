package Thread;

public class Es1 implements Runnable {

	
	
	public String simbolo;

	public Es1(String simbolo) {
		this.simbolo = simbolo;
	}

	public static void main(String[] args) {

		
		Es1 runnable1 = new Es1("#");
		Es1 runnable2 = new Es1("*");

		Thread thread1 = new Thread(runnable1);
		Thread thread2 = new Thread(runnable2);

		thread1.start();
		thread2.start();

	}
	@Override
	public void run() {
		
		try {
			for (int i = 0; i < 10; i++) {
				System.out.println(simbolo);
				Thread.sleep(1000);
			}
		} catch (InterruptedException e) {
			System.out.println("Errore");
		}
		
	}

}
