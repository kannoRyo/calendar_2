import React, {useState} from 'react'
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
    display:'flex',
    marign:'7px'
  },
  board:{
  }
})

const App= ()=> {
  const classes = useStyles()
  const d =new Date()
  const [year,setYear] = useState(d.getFullYear())
  const [month,setMonth] = useState(d.getMonth())

  const previousMonth = ()=>{
    if(month === 0){
      setMonth(11)
      setYear(year - 1)
    }else{
      setMonth(month - 1)
    }
  }

  const nextMonth = () =>{
    if(month === 11){
      setMonth(0)
      setYear(year+1)
    }else{
      setMonth(month + 1)
    }
  }

  return (
    <div className={classes.app}>
      <Nav 
        className={classes.nav} 
        nav={classes.nav}
        year={year}        
        month={month}
        previousMonth={()=>previousMonth()}
        nextMonth={()=>nextMonth()}
      />
      <CalendarBoard 
        className={classes.board} 
        board={classes.board}
        year={year}
        month={month}
      />
    </div>
  );
}

export default App;
