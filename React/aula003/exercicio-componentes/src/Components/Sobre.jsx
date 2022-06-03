let estiloBackground = {backgroundColor: '#02016b'}

function Sobre() {
    return(
        <article>
            <h2 style={estiloBackground}>Single Page Application - SPA</h2>
            <p> 
                - Uma aplicação web ou um site de uma única página. <br />
                - Reescrevendo dinamicamente a página atual com o novo dado solicitado. <br />
                - Recarrega apenas parte da interface. <br />
                - Consultas no servidor só são necessárias para buscas novos dados e não páginas inteiras. <br />
                - Transições entre páginas mais rápidas <br />
            </p>
            <h2 style={estiloBackground}>Múltiplas páginas - MPA</h2>
            <p>
                - Página inteira no servidor. <br />
                - Recarrega a nova página completa a cada atualização necessária.
            </p>
        </article>
    );
};

export default Sobre;