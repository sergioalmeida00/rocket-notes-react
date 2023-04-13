import styled from "styled-components"

export const Container = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 9rem;
  /* display: block; */

  background-color:${({theme}) => theme.COLORS.BACKGROUND_900};
  color:${({theme}) => theme.COLORS.WHITE};

  border: none;
  border-radius: 8px;
  resize: none;
  /* margin-bottom: 0.8rem; */

  padding: 0.75rem;

  &::placeholder{
    color:${({theme}) => theme.COLORS.GRAY_300};
  }
`