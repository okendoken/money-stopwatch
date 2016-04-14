/**
 * Created by Philip on 4/14/2016.
 */

var timeNow = function () {
        return (new Date()).getTime();
    },
    timeTotal = parseInt(localStorage.getItem('timeTotal') || "0"),
    timeStartCurrent = timeNow(),
    timeStartTotal = timeStartCurrent - timeTotal,
    $timeCurrent = document.getElementById('time-current'),
    $timeTotal = document.getElementById('time-total'),
    $moneyCurrent = document.getElementById('money-current'),
    $moneyTotal = document.getElementById('money-total'),
    rate = 50,
    timePassedCurrent = {},
    timePassedTotal = {};
setInterval(function () {
    timePassedTotal.millis = timeNow() - timeStartTotal;
    timePassedTotal.deciseconds = timePassedTotal.millis / 100;
    timePassedTotal.seconds = timePassedTotal.millis / 1000;
    timePassedTotal.minutes = timePassedTotal.seconds / 60;
    timePassedTotal.hours = timePassedTotal.minutes / 60;
    $timeTotal.innerHTML = Math.floor(timePassedTotal.hours)
        + ':' + Math.floor(timePassedTotal.minutes % 60)
        + ':' + Math.floor(timePassedTotal.seconds % 60)
        + '.' + Math.floor(timePassedTotal.deciseconds % 10);
    $moneyTotal.innerHTML = '$' + Math.round(timePassedTotal.hours * rate * 100) / 100;
    localStorage.setItem('timeTotal', '' + timePassedTotal.millis);

    timePassedCurrent.millis = timeNow() - timeStartCurrent;
    timePassedCurrent.deciseconds = timePassedCurrent.millis / 100;
    timePassedCurrent.seconds = timePassedCurrent.millis / 1000;
    timePassedCurrent.minutes = timePassedCurrent.seconds / 60;
    timePassedCurrent.hours = timePassedCurrent.minutes / 60;
    $timeCurrent.innerHTML = Math.floor(timePassedCurrent.hours)
        + ':' + Math.floor(timePassedCurrent.minutes % 60)
        + ':' + Math.floor(timePassedCurrent.seconds % 60)
        + '.' + Math.floor(timePassedCurrent.deciseconds % 10);
    $moneyCurrent.innerHTML = '$' + Math.round(timePassedCurrent.hours * rate * 100) / 100;
}, 100);