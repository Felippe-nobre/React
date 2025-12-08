import "./CampoTexto.css";
const CampoTexto = (props) => {
  const placeholderModificado = `${props.placeholder}...`;
  //let valor = "";

  //const [valor, setValor] = useState(''); // Estado - hooks do React, serve para armazenar o valor de uma variável e atualizar a interface quando esse valor mudar.
  const aoDigitar = (evento) => {
    props.aoAlterado(evento.target.value);
  };
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitar}
        required={props.obrigatorio}
        placeholder={placeholderModificado}
      />
    </div>
  );
};
export default CampoTexto;
