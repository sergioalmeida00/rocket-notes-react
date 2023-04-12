import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";
  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

`

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  > h1{
    font-size: 1.5rem;
    color: ${({theme}) => theme.COLORS.ORANGE };
  }
`

export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  
  padding-top:4rem ;
  text-align: center;

  >li{
    margin-bottom:1.5rem ;
  }
`

export const Search = styled.div`
  grid-area: search;
  padding: 4rem 4rem 0;
`

export const Content = styled.div`
 grid-area: content;
  /* background-color: gray; */
`

export const NewNote = styled.button`
  grid-area: newnote;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border: none;
  background-color: ${({theme}) => theme.COLORS.ORANGE};
  font-weight: 400;
  font-size: 1.25rem;
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  
`
