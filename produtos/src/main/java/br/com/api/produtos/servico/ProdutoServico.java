package br.com.api.produtos.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.produtos.modelo.ProdutoModelo;
import br.com.api.produtos.modelo.RespostaModelo;
import br.com.api.produtos.repositorio.ProdutoRepositorio;

@Service
public class ProdutoServico {
    @Autowired
    private ProdutoRepositorio produto;
    @Autowired
    private RespostaModelo respostaModelo;

    public Iterable<ProdutoModelo> listar() {
        return produto.findAll();
    }

    public ResponseEntity<?> cadastrar(ProdutoModelo produtoModelo) {
        if (produtoModelo.getNome().equals("")) {
            respostaModelo.setMensagem("Produto não pode ser vazio");
            return new ResponseEntity<>(respostaModelo, HttpStatus.BAD_REQUEST);
        } else if (produtoModelo.getMarca().equals("")) {
            respostaModelo.setMensagem("Marca não pode ser vazia");
            return new ResponseEntity<>(respostaModelo, HttpStatus.BAD_REQUEST);
        } else {

            return new ResponseEntity<>(produto.save(produtoModelo), HttpStatus.CREATED);
        }

    }

    public ResponseEntity<?> atualizar(ProdutoModelo produtoModelo){
        if (produtoModelo.getNome().equals("")) {
            respostaModelo.setMensagem("Produto não pode ser vazio");
            return new ResponseEntity<>(respostaModelo, HttpStatus.BAD_REQUEST);
        } else if (produtoModelo.getMarca().equals("")) {
            respostaModelo.setMensagem("Marca não pode ser vazia");
            return new ResponseEntity<>(respostaModelo, HttpStatus.BAD_REQUEST);
        } else {

            return new ResponseEntity<>(produto.save(produtoModelo), HttpStatus.OK);
        }
    }

    public ResponseEntity<RespostaModelo> remover(long codigo){
        
        produto.deleteById(codigo);
        respostaModelo.setMensagem("O produto foi removido com sucesso");
        return new ResponseEntity<RespostaModelo>(respostaModelo,HttpStatus.OK);
    }
}
