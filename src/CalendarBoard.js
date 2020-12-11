import React from 'react'
import { makeStyles, GridList , GridListTile} from '@material-ui/core';
import {renderDates} from './func/calendarFormatFunction'

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
    tile: {
        height: 'auto',
        width: '14%',
        border: '1px solid #dbdbdb',
        textAlign: 'center',
        fontSize:'11px',
        color:'#000',
        padding: '6px 0'
    }
  }));

const CalendarBoard = ({board,year,month})=>{
    const classes = useStyles()

    const rows = [
        renderDates(year,month).splice(0,7),
        renderDates(year,month).splice(7,7),
        renderDates(year,month).splice(14,7),
        renderDates(year,month).splice(21,7),
        renderDates(year,month).splice(28,7),
    ]

    return(
            <GridList className={classes.gridList, board} style={{display:'flex'}} col={7}>
                {
                    rows.map((dates,index)=>{
                        return(
                            <>
                                <GridListTile class={classes.tile}>
                                    <div>{dates[0]}</div>
                                </GridListTile>  
                                <GridListTile class={classes.tile}>
                                    <div>{dates[1]}</div>
                                </GridListTile>  
                                <GridListTile class={classes.tile}>
                                    <div>{dates[2]}</div>
                                </GridListTile>  
                                <GridListTile class={classes.tile}>
                                    <div>{dates[3]}</div>
                                </GridListTile>  
                                <GridListTile class={classes.tile}>
                                    <div>{dates[4]}</div>
                                </GridListTile>  
                                <GridListTile class={classes.tile}>
                                    <div>{dates[5]}</div>
                                </GridListTile>  
                                <GridListTile class={classes.tile}>
                                    <div>{dates[6]}</div>
                                </GridListTile>  
                            </>
                        )
                    })
                }                         
            </GridList>
    )
}

export default CalendarBoard