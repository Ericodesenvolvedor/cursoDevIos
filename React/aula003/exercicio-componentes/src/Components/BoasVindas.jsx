import PropTypes from 'prop-types';

function BoasVindas(props) {
    return (
        <section>
            <h1>Bem-vindo(a), {props.nome} ao módulo de React</h1>
            <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>
        </section>
    )
}

BoasVindas.defaultProps = {
    nome: 'Anonimo'
};

BoasVindas.propTypes = {
    nome: PropTypes.string
}

export default BoasVindas;