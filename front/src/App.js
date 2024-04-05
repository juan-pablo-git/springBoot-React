import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {
  const [btnCadastrar,setBtnCadastrar] = useState(true)
  const [produtos,setProdutos] = useState([])
  const [objProduto,setObjProduto] = useState({})

  useEffect(()=>{
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido))
  },[])

  const aoDigitar = (e)=>{
    setObjProduto({...objProduto,[e.target.name]:e.target.value})
  }

  const cadastrar = () =>{
    fetch('http://localhost:8080/cadastrar',{
      method:'post',
      body:JSON.stringify(objProduto),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem)
      }else{
        setProdutos([...produtos,retorno_convertido])
        alert("Produto cadastrado com sucesso")
      }
    })
  }


  return (
    <div className="App">
      <p>{JSON.stringify(objProduto)}</p>
     <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar}/>
     <Tabela vetor={produtos} />
    </div>
  );
}

export default App;
