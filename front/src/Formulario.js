export default ({botao,eventoTeclado,cadastrar})=>{
    return (
        <form >
            <input type="text" onChange={eventoTeclado} name="nome" placeholder="Nome" className="form-control"/>
            <input type="text" onChange={eventoTeclado} name="marca" placeholder="Marca" className="form-control"/>
            {
                botao ? <input type="button" onClick={cadastrar} value="cadastrar" className="btn btn-primary"/>
                :      <div>       <input type="button" value="alterar" className="btn btn-warning" />
                <input type="button" value="Remover" className="btn btn-danger" />
                <input type="button"  value="cancelar" className="btn btn-secondary"/>
                </div>
            }


            
            
        </form>
        )
}

