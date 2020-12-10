import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Nav from './Nav'
import CalendarBoard from './CalendarBoard'

const useStyles = makeStyles({
  app:{
    display:'grid',
    height: '100vh',
    gridTemplateRows: '60px 1fr'
  },
  nav:{
    backgroundColor: '#FF7D7D',
  },
  board:{
    backgroundColor: '#ABE7FF',
  }
})


const App= ()=> {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <Nav className={classes.nav} nav={classes.nav}/>
      <CalendarBoard className={classes.board} board={classes.board}/>
    </div>
  );
}

export default App;
