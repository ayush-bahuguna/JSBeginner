const countdown = () => {

    //get time in milliseconds
    const newYearDate = new Date('Jan 1, 2022 00:00:000').getTime() ;
    const currDate = new Date().getTime() ;
    const gap = (newYearDate - currDate) ;

    //calculations (methmetiks)
    const second = 1000 ;
    const minute = second * 60 ;
    const hour = minute * 60 ;
    const day = hour * 24 ;

    const textDay = Math.floor(gap / day) ;
    const textHour = Math.floor((gap % day) / hour) ;
    const textMinute = Math.floor((gap % hour) / minute) ;
    const textSecond = Math.floor((gap % minute) / second) ;
    
    //selecting elements
    const d = document.getElementById('days') ;
    const h = document.getElementById('hours') ;
    const m = document.getElementById('mins') ;
    const s = document.getElementById('seconds') ;

    //set text
    d.innerHTML = textDay ;
    h.innerHTML = textHour ;
    m.innerHTML = textMinute ;
    s.innerHTML = textSecond ;
} ;

setInterval(countdown, 1000) ;