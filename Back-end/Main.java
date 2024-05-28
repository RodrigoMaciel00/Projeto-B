import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            Cadastro cd = new Cadastro();
            int opcao;
            do {
                System.out.println("Escolha uma opção:");
                System.out.println("1. Cadastrar Pessoa");
                System.out.println("2. Listar Pessoas");
                System.out.println("0. Encerrar");
                
                opcao = sc.nextInt();
                sc.nextLine();  // Consome a nova linha
                
                switch (opcao) {
                    case 1 -> {
                        Pessoa pessoa = new Pessoa();
                        System.out.println("Digite o nome da pessoa:");
                        pessoa.setNome(sc.nextLine());
                        System.out.println("Digite a idade da pessoa:");
                        pessoa.setIdade(sc.nextInt());
                        sc.nextLine();  // Consome a nova linha
                        cd.cadastrarPessoa_comBanco(pessoa);
                    }
                    case 2 -> cd.listar_com_banco();
                    case 0 -> System.out.println("Encerrando o programa.");
                    default -> System.out.println("Opção inválida!");
                }
            } while (opcao != 0);
        }
    }
}
