


const convertTimeArry = (arr) => {
    const [hour12Str, ...times] = timearry(arr);
    const hour12 = parseInt(hour12Str, 10);

    let hour24 = 0;

    if (hour12 < 12 && (times[times.length - 1] == 'PM')) {
        hour24 = hour12 + 12;
    } else if (hour12 == 12 && (times[times.length - 1] == 'PM')) {
        hour24 = 12;
    } else if (hour12 < 12 && times[times.length - 1] == 'AM') {
        hour24 = hour12;
    }

    const time24Arry = [timeFormate(hour24), ...times]

    const secondAndSimbol = time24Arry.slice(-2)[0];
    const hourAndMinute = time24Arry.slice(0, 2).join(':')

    return hourAndMinute + ':' + secondAndSimbol;
}

const timeFormate = (time) => {
    const timestr = time.toString();
    if (timestr.length == 1) {
        return "0" + timestr;
    }
    return timestr.toString();
}

const timearry = (timestr) => {
    const [secondsPlusSimbol, ...restArry] = timestr.split(':').reverse();
    const secondes = secondsPlusSimbol.substr(0, 2);
    const simbol = secondsPlusSimbol.substr(2, 4);
    return [...restArry.reverse(), secondes, simbol];
}

const timeString = '12:05:45PM';

console.log(convertTimeArry(timeString));


//timearry(timeString)