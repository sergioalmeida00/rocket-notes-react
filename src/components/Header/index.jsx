import { RiShutDownLine } from 'react-icons/ri'
import { Container,Profile,Logout } from "./styles"

export function Header(){
  return(
    <Container>
      <Profile to="/profile" >
        <img src="https://github.com/sergioalmeida00.png" alt="Foto do Usuario" />
        
        <div>
          <span>Bem-vindo</span>
          <strong>Sérgio Almeida</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>

  )
}