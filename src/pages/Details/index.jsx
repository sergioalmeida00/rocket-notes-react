import { Container,Links,Content } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {

  return (
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title="Excluir Nota"/>
          <h1>Introdução a React</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, beatae illum odio natus ut cum deserunt voluptatem! Quis rem natus soluta placeat, explicabo eos molestias velit voluptates excepturi modi quam!</p>
          <Section title="Links Uteis">
            <Links>
              <li><a href="https://github.com/sergioalmeida00">https://github.com/sergioalmeida00</a></li>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express"/>
            <Tag title="Node"/>
          </Section>

          <Button title="Voltar" loading={false} />
        </Content>
      </main>
    </Container>
  )
}

