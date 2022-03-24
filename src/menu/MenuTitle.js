import styled from 'styled-components'

import { CloseIcon } from './icons'

const Title = styled.div`
  min-width: 200px;
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 100%;
`
const TitleSpan = styled.div`
  color: red;
  padding: 0 0.5em 0 0; /*space between title & icon */
`

export default function MenuTitle({ title, onClose }) {
  const exitIconClickHandler = () => onClose()

  return (
    <Title>
      <TitleSpan>{title}</TitleSpan>
      <CloseIcon onClick={exitIconClickHandler} />
    </Title>
  )
}
