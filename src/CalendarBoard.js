import React from 'react'
import { makeStyles, GridList , GridListTile} from '@material-ui/core';
import tileData from './img/tileData'

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

const CalendarBoard = ({board})=>{
    const classes = useStyles()
    return(
            <GridList className={classes.gridList, board} style={{display:'flex'}} col={7}>
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                
                <GridListTile key="Subheader"  style={{ height: 'auto', width: '14.2857%' }}>
                </GridListTile>                           
            </GridList>
    )
}

export default CalendarBoard