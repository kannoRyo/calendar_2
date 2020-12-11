import React from 'react' ;
import {makeStyles} from '@material-ui/core'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const useStyles = makeStyles({
    title: {
      color:'#5e5e5e',
      margin: '0 10px 0 15px',
    },
    yearMonth: {
        margin:'2px', 
        fontFamily:'Rubik',
        fontSize:'20px'
    },
    navIcon: {
        fontSize:'35px',
        cursor: 'pointer',
        '&:hover':{
            opacity:'0.5'
        }
    }
  });

const Nav = ({nav,year,month,previousMonth,nextMonth})=>{
    const classes = useStyles()
    console.log(month)
    return(
       <div className={nav} style={{margin: '8px'}}>
           <CalendarTodayIcon style={{fontSize: '32px'}}/>
           <h2 className={classes.title}>
               カレンダー
           </h2>
           <NavigateBeforeIcon className={classes.navIcon} onClick={()=> previousMonth()}/>
           <NavigateNextIcon className={classes.navIcon} onClick={()=> nextMonth()}/>           
            <p className={classes.yearMonth}>{`${year}年${month+1}月`}</p>
       </div>
    )
}

export default Nav