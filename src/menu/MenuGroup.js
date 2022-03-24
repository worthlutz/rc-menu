import { useState } from 'react'
import styled from '@emotion/styled'

import { DownIcon, RightIcon } from './icons'
import { MenuItem } from './MenuItems'

const Group = styled.div`
  border-top: 1px solid #d9d9d9;
  padding: 0.25em 0;
`
// indents items in group
// no indention if no title text
const Items = styled.div`
  padding-left: ${(props) => (props.text ? '1em' : '0em')};
`

const emptyFn = () => {}

export default function MenuGroup({ group, children }) {
  const { text, isCloseable, initiallyClosed } = group

  // - if text is falsy, isCloseable and initiallyClosed are ignored as
  //   there will be no header
  // - the value of open will not be retained when the menu is closed and reopened
  //   this state will need to be raised up to the ?? component to change this
  const [open, setOpen] = useState(
    text && isCloseable ? !initiallyClosed : true,
  )

  const toggleOpen = () => setOpen(!open)

  const header = text ? (
    <MenuItem
      item={group}
      isBold
      // eslint-disable-next-line no-nested-ternary
      Icon={isCloseable ? (open ? DownIcon : RightIcon) : null}
      onClick={isCloseable ? toggleOpen : emptyFn}
    />
  ) : null

  return (
    <Group>
      {header}
      <Items text={text}>{open ? children : null}</Items>
    </Group>
  )
}
