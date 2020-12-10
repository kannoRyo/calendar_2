// カレンダー作成
export const getCalendarHead = (year,month) =>{
    const dates=[]
    const  d =new Date(year,month,0).getDate();   
    const  n =new Date(year,month,1).getDay();   
    
    for(let i=0; i<n ; i++){
        dates.unshift(d-i)
    }

    return dates 
}

export const getCalendarBody = (year,month)=>{
    const dates=[]
    const lastDate = new Date(year, month+1, 0).getDate()

    for(let i=1; i <= lastDate ;i++ ){
        dates.push(i)
    }

    return dates
}

export const getCalendarTale = (year,month) =>{
    const dates=[]
    let n =new Date(year,month+1,1).getDay();   
    let i = 1

    for( n; n<=6 ; n++){
        dates.push(i)
        i++
    }

    return dates
}

export const renderDates = (year,month)=>{
    const dates = [
        ...getCalendarHead(year,month),
        ...getCalendarBody(year,month),
        ...getCalendarTale(year,month)
    ]

    return dates
}

//　カレンダー作成　ここまで