import { Container,Form,Background } from "./styles";
import { Link } from "react-router-dom";
import { FiMail,FiLock,FiUser } from 'react-icons/fi'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useState } from "react";

export function SignUp(){

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  function handleSubmit(){
    if(!name || !email || !password){
      return alert('Todos os campos precisam ser preenchidos!')
    }
    console.log({name, email,password})
  }

  return(
    <Container>
      <Background/>
        <Form>
            <h1>Rocket Notes</h1>
            <p>Aplicação para salvar e gerenciar seus links úteis.</p>
            <h2>Crie sua conta</h2>

            <Input
              placeholder="Nome"
              type="text"
              icon={FiUser}
              onChange={event => setName(event.target.value)}
            />

            <Input
              placeholder="E-mail"
              type="text"
              icon={FiMail}
              onChange={event => setEmail(event.target.value)}
            />

            <Input
              placeholder="Password"
              type="password"
              icon={FiLock}
              onChange={event => setPassword(event.target.value)}
            />

            <Button title="Cadastrar" onClick={handleSubmit} />

            <Link to="/"> Voltar para o login</Link>
        </Form>        
    </Container>
  )
}