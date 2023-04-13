import {Container, Brand, Menu, Search, Content, NewNote} from './styles'
import {FiPlus, FiSearch} from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'

export function Home(){
  return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header/>

      <Menu>
          <li><ButtonText title="Todos" isActive/></li>
          <li><ButtonText title="React"/></li>
          <li><ButtonText title="Node"/></li>  
      </Menu>

      <Search>
        <Input placeholder="Como pesquisar pelo titulo" icon={FiSearch} />
      </Search>

      <Content>   
        <Section title="Minhas Notas">
          <Note
            data={
              {
                title:'React', 
                tags:[
                  {id:'1', name:'React'},
                  {id:'2', name:'Node'}
                ]
              }
            }
          />          
        </Section>     
      </Content>

      <NewNote to="/new">
        <FiPlus/>
        Criar nota
      </NewNote>

    </Container>
  )
}