import { Container,Form } from "./styles";
import { Link } from "react-router-dom";
import { Header } from '../../components/Header'
import { Input } from "../../components/Input";
import { Section} from "../../components/Section";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

export function New(){
  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/" > Voltar </Link>
          </header>
          <Input
            placeholder="Titulo"
            type="text"
          />
          <TextArea placeholder="Observações"/>   
          <Section title="Links úteis">
              <NoteItem 
                placeholder="Novo Link"
                value="https://www.rocketseat.com.br/"
              />
              <NoteItem 
                placeholder="Novo Link"
                isNew
              />
          </Section>
          
          <Section title="Marcadores">
            <div className="tags">
                <NoteItem   
                  placeholder="Novo Link"
                  value="React"
                />
                <NoteItem 
                  placeholder="Novo Tag"
                  isNew
                />
            </div>
          </Section>

          <Button title="Salvar"/>

        </Form>
      </main>
    </Container>
  )
}