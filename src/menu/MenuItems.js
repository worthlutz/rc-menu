import styled from '@emotion/styled'

const Item = styled.div`
  padding: 0.25em 0.25em 0.25em 0.25em;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  &:hover {
    background: lightgrey;
  }
`
const IconSpan = styled.span`
  /*color: red;*/
  width: 1em;
  flex: 0 0 auto;
`
const TextSpan = styled.span`
  flex: 1 1 auto;
  margin-left: 0.3em;
  font-weight: ${(props) => (props.isBold === true ? 'bold' : 'null')};
`
const Link = styled.a`
  color: inherit;
  text-decoration: none;
`

// MenuLinkItem component  -----------------------------------
export function MenuItem({ item, isBold, Icon, onClick }) {
  const clickHandler = () => onClick(item)

  return (
    <Item id='item' key={item.text} onClick={clickHandler}>
      <IconSpan>{Icon ? <Icon /> : null}</IconSpan>
      <TextSpan isBold={isBold}>{item.text}</TextSpan>
    </Item>
  )
}

// MenuLinkItem component  -----------------------------------
export function MenuLinkItem({ item, Icon }) {
  return (
    <Item id='MenuLinkItem'>
      <IconSpan>{Icon ? <Icon /> : null}</IconSpan>
      <TextSpan>
        <Link target='_blank' href={item.href} rel='noreferrer'>
          {item.text}
        </Link>
      </TextSpan>
    </Item>
  )
}
