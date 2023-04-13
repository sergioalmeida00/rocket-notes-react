import styled from "styled-components";

export const Container = styled.div`
  display:  flex;
  background-color: ${({theme, isNew}) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_900 };
  color: ${({theme, isNew}) => theme.COLORS.GRAY_300 };

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300 }` : "none"} ;
  margin-bottom:0.8rem;
  border-radius:8px;
  padding-right:1rem;

  > button {
    border:none;
    background:none;

    svg{
      color: ${({theme, isNew}) => isNew ?  theme.COLORS.ORANGE :  theme.COLORS.RED };
    }
  }

  > input {
    height:3rem;
    width:100%;
    padding:0.75rem;
    color: ${({theme, isNew}) => theme.COLORS.WHITE };
    background:transparent;
    border:none;

    &::placeholder{
      color: ${({theme, isNew}) => theme.COLORS.GRAY_300 };
    }
  }
`