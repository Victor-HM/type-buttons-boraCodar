import styled from 'styled-components'

type TButtonProps = {
 typeButton?: "PRIMARY" | "SECONDARY" | "TERTIARY";
 cursor?: "default" | "wait" | "move" | "not-allowed";
 hover?: boolean;
 focus?: boolean
}

export const Button = styled.button<TButtonProps>`
 background-color: ${(props) => props.typeButton === 'SECONDARY' ? '#3C3748' : props.typeButton === 'TERTIARY' ? 'transparent': '#8257E5'};
 cursor: ${(props) => props.cursor ? props.cursor : 'default'};
 border-radius: 1.5rem;
 padding: 0.75rem 1.5rem;
 color: white;
 font-family: 'Inter', sans-serif;
 font-size: 0.875rem;
 font-weight: 500;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 0.5rem;
 transition: filter 250ms;
 appearance: none;

 &:hover {
  filter: ${(props) => props.hover ? 'brightness(120%)' : ''};
 }

 &:focus {
  border: ${(props) => props.focus ? '2px solid white' : ''};
 }

 &:disabled {
  opacity: 56%;
 }
`