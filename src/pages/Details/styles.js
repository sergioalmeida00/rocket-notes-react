import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 6.56rem auto;
  grid-template-areas:
   "header"
   "content";

   > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 4rem 0;
   }
`

export const Links = styled.ul`
  list-style: none;

  > li{
    margin-top: 0.75rem;

    a{
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`

export const Content = styled.div`
  max-width: 34.38rem;
  margin: 0 auto;
  display: flex ;
  flex-direction: column;
  gap: 1rem;

  > button:first-child{
    align-self: flex-end;    
  }

  > h1{
    font-size: 2.25rem;
    font-weight: 500;
  }

  > p{
    font-size: 1rem;
    text-align: justify;
  }
`
