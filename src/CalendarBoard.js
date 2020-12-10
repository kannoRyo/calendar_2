import React from 'react'
import { makeStyles, GridList , GridListTile} from '@material-ui/core';
import {getCalendarHead, getCalendarBody, getCalendarTale, renderDates} from './func/calendarFormatFunction'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      margin:'0',
      width: '100%',
      height: 450,
    },
  }));

const CalendarBoard = ({board,setYear,setMonth,year,month})=>{
    const classes = useStyles() 


    console.log(renderDates(year,month))


    return(
            <GridList className={classes.gridList, board} style={{display:'flex'}} col={7}>
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border:'1px solid #dbdbdb'}}>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                
                <GridListTile   style={{ height: 'auto', width: '14.2857%' , border: '1px solid #dbdbdb'} }>
                </GridListTile>                           
            </GridList>
    )
}

export default CalendarBoard