import styled from 'styled-components'

type TButtonProps = {
 background?: string
}

export const ColumnStyle = styled.button<TButtonProps>`
 background-color: ${(props) => props.background ? props.background : 'transparent'};
 display: flex;
 justify-content: center;
 align-items: center;
 text-align: center;
 padding-top: 2rem;
 padding-bottom: 2rem;

 & p {
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem
 }
`