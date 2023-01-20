import styled from 'styled-components'

type TCursor = "default" | "wait" | "move" | "not-allowed"

export interface IButtonProps {
 color?: "PRIMARY" | "SECONDARY" | "TERTIARY";
 cursor?: TCursor;
}