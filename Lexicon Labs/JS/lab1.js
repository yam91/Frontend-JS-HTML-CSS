//func1
function sleepIn(weekday, vacation) {
    if (!weekday) {
        return true;
    }
    else if (vacation) {
        return true;
    }
    return false;
}

//func2
function monkeyTrouble (aSmile,bSmile) {
    if (aSmile) {
        if (bSmile) {
            return true;
        }
    }
    else if (!bSmile) {
        return true;
    }
    return false;
}

//func3
function stringTimes(str, n){
    return str.repeat(n);
}

//func4
function luckySum (a,b,c) {
    var sum =0;
    if (a !== 13) {
        sum = sum + a;
        if (b !== 13) {
            sum = sum + b;
            if (c !== 13) {
                return sum+c;
            }
            else {
                return sum;
            }
        }
        else {
            return sum;
        }        
    }
    return sum;
}

//func5
function caught_speeding(speed, birthday) {
    s = speed;
    if (birthday) {
        s = s - 5;
    }
    if (s<=60) {
        return 0;
    }
    else if (61 <= s <= 80) {
        return 1;
    }
    return 2;
}