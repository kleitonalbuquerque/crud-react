import { Component } from "react";
import axios from "axios"
import Main from "../template/Main";

const baseUrl = 'http://localhost:3001/users'
const initalState = {
  user: { name: '', email: '' },
  list: []
}

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Adicionar, Listar, Atualizar e Excluir.",
};

export default class UserCrud extends Component {

  state = { ...initalState }

  clear() {
    this.setState({ user: initalState.user })
  }

  save() {
    const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user)
      .then(res => {
        const list = this.getUpdatedList(res.data)
        this.setState({ user: initalState.user, list })
      })
  }

  getUpdatedList(user) {
    const list = this.state.list.filter(u => u.id !== user.id)
    list.unshift(user)
    return list
  }

  render() {
    return (
      <Main {...headerProps}>
        Cadastro de Usuário
      </Main>
    )
  }
}
