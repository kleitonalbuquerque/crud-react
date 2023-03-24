import { Component } from "react";
import Main from "../template/Main";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Adicionar, Listar, Atualizar e Excluir.",
};

export default class UserCrud extends Component {
  render() {
    return (
      <Main {...headerProps}>
        Cadastro de Usuário
      </Main>
    )
  }
}

// export default function UserCrud() {
//   return <Main {...headerProps}>Cadastro de Usuário</Main>;
// }
