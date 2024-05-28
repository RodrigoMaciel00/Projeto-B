import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class PessoaDAO {
    private final Connection connection;

    public PessoaDAO() {
        this.connection = Conexao.getConexao();
    }

    public void adiciona(Pessoa p) {
        String sql = "INSERT INTO Pessoa(nome, idade) VALUES(?, ?)";
        try {
            try (PreparedStatement stmt = connection.prepareStatement(sql)) {
                stmt.setString(1, p.getNome());
                stmt.setInt(2, p.getIdade());
                stmt.execute();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public ArrayList<Pessoa> listarPessoas() {
        ArrayList<Pessoa> pessoas = new ArrayList<>();
        String sql = "SELECT * FROM Pessoa";
        try {
            try (PreparedStatement stmt = connection.prepareStatement(sql); ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    Pessoa p = new Pessoa();
                    p.setIdP(rs.getInt("idP"));
                    p.setNome(rs.getString("nome"));
                    p.setIdade(rs.getInt("idade"));
                    pessoas.add(p);
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return pessoas;
    }
}
