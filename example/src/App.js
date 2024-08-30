import { useState } from 'react'
import styled from '@emotion/styled'

import { Menu } from '@wal3/rc-menu'
import { tasks, Task, TaskContainer } from './tasks'

import menuConfig from './configuration/menuConfig'


const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
`
// TODO: change DefaultTask to be the welcome screen to the Application
const defaultTitle = "Welcome to the Admin Application"
const DefaultTask = () => {
  return (
    <div>
      <div style={{padding: '1em'}}>No Task loaded</div>
    </div>
  )
}

function App() {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ currentTask, setCurrentTask ] = useState(DefaultTask);
  const [ taskTitle, setTaskTitle ] = useState(defaultTitle)

  const closeMenu = () => {
    setMenuOpen(false);
  }

  const menuClickHandler = (clicked) => {
    // item is the individual menu item config from menuconfig
    // use data from item to determine what happens

    setTaskTitle(clicked.item.text)
    setCurrentTask(Task({tag: clicked.item.options.tag}));
  }

  const menuIconClickHandler = () => setMenuOpen(true);

  return (
    <AppContainer id="app-container">

      <TaskContainer title={taskTitle} onMenuIconClick={menuIconClickHandler} >
        {currentTask}
      </TaskContainer>

      <Menu
        config={menuConfig}
        open={menuOpen}
        onClick={menuClickHandler}
        onClose={closeMenu}
      />

    </AppContainer>
  );
}

export default App;
