import loadable from '@loadable/component'
import styled from 'styled-components'

import { MenuIcon } from './icons'

const Test1 = loadable(() => import('./Test1'));

// --- all tasks ------------------------------------------
export const tasks = {
  Test1
};

// --- Task -----------------------------------------------
export function Task({tag}) {
  const Unavailable = () => {
    return (
      <div style={{
        height: '100%',
        width: '50%',
        margin: 'auto',
        padding: '1em',
        backgroundColor: "red"
      }}>
        Task requested (tag={tag}) does not exist!
      </div>
    )
  }

  const TagName = tasks[tag] || Unavailable;
  return <TagName />
}

// --- TaskContainer ---------------------------------------
const OuterContainer =  styled.div`
  position: relative;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  position: relative;
  padding: 0.3em;
  display: flex;
  justify-content: left;
  align-items: center;
`
const InnerContainer = styled.div`
  flex: 1 1 auto;
`
const TitleSpan = styled.span`
  padding-left: 0.5em;
`

export function TaskContainer({title, onMenuIconClick, children}) {
  return (
    <OuterContainer>
      <Header>
        <MenuIcon onClick={onMenuIconClick} />
        <TitleSpan>{title}</TitleSpan>
      </Header>
      <InnerContainer>
        {children}
      </InnerContainer>
    </OuterContainer>
  )
}
