import { useCallback, useEffect, useState } from 'react'
import Drawer from '@mui/material/Drawer'

import MenuTitle from './MenuTitle'
import MenuGroup from './MenuGroup'
import { MenuItem, MenuLinkItem } from './MenuItems'
import SubMenu from './SubMenu'

export default function Menu({ config, open, onClick, onClose }) {
  const [title, setTitle] = useState('Loading')
  const [menuGroups, setMenuGroups] = useState([])

  const getItemComponents = useCallback(
    (items) => {
      const itemClickHandler = (item) => {
        onClick(item)
        onClose()
      }

      const menuItems = items.flatMap((item, i) => {
        const { type, text } = item
        // eslint-disable-next-line no-prototype-builtins
        if (item.hasOwnProperty('type')) {
          let submenuItems = []
          switch (type) {
            case 'MenuItem':
              return (
                <MenuItem
                  key={i.toString() + text}
                  item={item}
                  onClick={itemClickHandler}
                />
              )

            case 'MenuLinkItem':
              return <MenuLinkItem key={i.toString() + text} item={item} />

            case 'SubMenu':
              if (item.items) {
                submenuItems = getItemComponents(item.items)
              }
              return (
                <SubMenu key={i.toString() + text} item={item}>
                  {submenuItems}
                </SubMenu>
              )

            default:
              console.error(
                `undefined MenuItem type(${type} in config - text= ${text}`,
              )
          }
        } else {
          console.error(`missing type in menuItem config - text= ${text}`)
        }
        return null
      })
      return menuItems
    },
    [onClick, onClose],
  )

  useEffect(() => {
    const allGroups = config.groups.map((group, i) => {
      let menuItems = []
      // eslint-disable-next-line no-prototype-builtins
      if (group.hasOwnProperty('items')) {
        menuItems = getItemComponents(group.items)
      }
      return (
        <MenuGroup key={i.toString() + group.text} group={group}>
          {menuItems}
        </MenuGroup>
      )
    })

    setTitle(config.title || 'XX no title in config')
    setMenuGroups(allGroups)
  }, [config, getItemComponents])

  return (
    <Drawer open={open} onClose={onClose}>
      <MenuTitle title={title} onClose={onClose} />
      {menuGroups}
    </Drawer>
  )
}
