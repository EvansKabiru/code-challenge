// code indicating different car speeds and the driver's licence status.(points refers to demerit points).

function status(speed){
    if (speed <=70){
        return 'OK'
    }
    else if (speed >=71 && speed <=75){
        return '1 point'
    }
    else if (speed >=76 && speed <=80){
        return '2 points'
    }
    else if (speed >=81 && speed <=85){
        return '3 points'
    }
    else if ( speed >=86 && speed <=90){
        return '4 points'
    }
    else if (speed >=91 && speed <=95){
        return '5 points'
    }
    else if (speed >=96 && speed <=100){
        return '6 points'
    }
    else if (speed >=101 && speed <=105){
        return '7 points'
    }
    else if (speed >=106 && speed <=110){
        return '8 points'
    }
    else if (speed >=111 && speed <=115){
        return '9 points'
    }
    else if (speed >=116 && speed <= 120){
        return '10 points'
    }
    else if (speed >=121 && speed <= 125){
        return '11 points'
    }
    else if (speed >=126 && speed <= 130){
        return '12 points'
    }
    else if (speed >=131){
        return 'Licence Suspended'
    }
}

// testing the code above

const speed = 65
const point = status(speed)
console.log(`speed is ${speed} equals : $ {speed}`)