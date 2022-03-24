import { useState } from 'react'
import styled from 'styled-components'

import { DownIcon, RightIcon } from './icons'
import { MenuItem } from './MenuItems'

const Sm = styled.div`
  padding-left: 1em; /* indents items in submenu */
`

export default function SubMenu({ item, children }) {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(!open)

  return (
    <>
      <MenuItem
        item={item}
        Icon={open ? DownIcon : RightIcon}
        onClick={toggleOpen}
      />
      {open ? <Sm>{children}</Sm> : null}
    </>
  )
}
