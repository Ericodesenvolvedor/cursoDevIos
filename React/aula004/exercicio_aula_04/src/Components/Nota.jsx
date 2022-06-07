import Nome from "./Nome";

function Notas({nota1, nota2, nota3, nota4}) {

    const media = () => {
        return (nota1 + nota2 + nota3 + nota4) / 4
    }

    return (
        <table>
            <caption>Aluno: <Nome /></caption>
            
            <thead>
                <tr>
                    <th scope="col">Nota 1</th>
                    <th scope="col">Nota 2</th>
                    <th scope="col">Nota 3</th>
                    <th scope="col">Nota 4</th>
                    <th scope="col">Média</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>{nota1}</td>
                    <td>{nota2}</td>
                    <td>{nota3}</td>
                    <td>{nota4}</td>
                    <td>{media()}</td>
                </tr>
            </tbody>
        </table>
    )

}

export default Notas;