import "./Footer.css";

// eslint-disable-next-line import/no-anonymous-default-export
// componente com função anônima
// export default props =>
//   <footer className='footer'>
//     Rodapé
//   </footer>

export default function Footer(props) {
  return (
    <footer className="footer">
      <span>
        Desenvolvido com <i className="fa fa-heart text-danger"></i> por{" "}
        <strong>
          <span className="text-success">KLM</span>
          <span className="text-primary">Tech</span>
        </strong>
      </span>
    </footer>
  );
}
