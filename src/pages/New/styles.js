import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows:6.56rem auto;

  grid-template-areas: 
  "header"
  "content"
  ;

  > main{
    grid-area: content;
    overflow-y: auto;
  }

  .tags{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`

export const Form = styled.form`
    max-width: 35rem;
    margin: 3rem auto;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.25rem;

    a{
      color: ${({theme}) => theme.COLORS.GRAY_100};
      font-size: 1.25rem;
    }
  }
`