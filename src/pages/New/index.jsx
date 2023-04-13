import { Container,Form } from "./styles";
import { Header } from '../../components/Header'
import { Input } from "../../components/Input";
import { Section} from "../../components/Section";
import { TextArea } from "../../components/TextArea";

export function New(){
  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/"> Voltar </a>
          </header>
          <Input
            placeholder="Titulo"
            type="text"
          />
          <Section title="Links úteis">
            <TextArea placeholder="Observações"/>            
          </Section>
        </Form>
      </main>
    </Container>
  )
}