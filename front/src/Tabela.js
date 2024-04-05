export default ({vetor}) => {
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map(iten=>{
                        return(
                            <tr>
                            <td>{iten.codigo}</td>
                            <td>{iten.nome}</td>
                            <td>{iten.marca}</td>
                            <td> <button className="btn btn-success" >Selecionar</button> </td>
        
                        </tr>
        
                        )
                    })
                }
            </tbody>
        </table>
    )
}