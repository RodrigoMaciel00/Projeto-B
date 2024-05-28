import java.util.ArrayList;

public class Cadastro {
    private final PessoaDAO pessoaDAO;

    public Cadastro() {
        this.pessoaDAO = new PessoaDAO();
    }

    public void cadastrarPessoa_comBanco(Pessoa p) {
        pessoaDAO.adiciona(p);
        System.out.println("Pessoa cadastrada com sucesso!");
    }

    public void listar_com_banco() {
        ArrayList<Pessoa> pessoas = pessoaDAO.listarPessoas();
        for (Pessoa p : pessoas) {
            System.out.println("Nome: " + p.getNome() + ", Idade: " + p.getIdade());
        }
    }
}
