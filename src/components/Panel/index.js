import { MiniPanel, Title, Info } from './styles'

export const Panel = ({ title, information, border = true }) => {
  return (
    <MiniPanel border={border}>
        <Title>{title}</Title>
        <Info>{information}</Info>
    </MiniPanel>
  )
}
