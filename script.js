function correctData2(date) {
    return date < 10 ? "0" + date : date;
}

function saleTime2() {
    let endDate = new Date(2024, 8, 21);
    let nowDate = new Date();
    let finish = endDate - nowDate;

    let day = Math.floor(finish / (24 * 60 * 60 * 1000));
    let hours = Math.floor((finish % (24 * 60 * 60 * 100)) / (60 * 60 * 1000));
    let minuts = Math.floor((finish % (60 * 60 * 1000)) / (60 * 1000));
    let seconds = Math.floor((finish % (60 * 1000)) / 1000);

    let timeValue = document.getElementsByClassName("timetitle1")
    timeValue[0].innerHTML = correctData(day);
    timeValue[1].innerHTML = correctData(hours);
    timeValue[2].innerHTML = correctData(minuts);
    timeValue[3].innerHTML = correctData(seconds)


    console.log(day, hours, minuts, seconds);

}
saleTime2()


setInterval(() => saleTime2(), 1000)

// 95498411414141

function correctData(date) {
    return date < 10 ? "0" + date : date;
}

function saleTime() {
    let endDate = new Date(2024, 8, 21);
    let nowDate = new Date();
    let finish = endDate - nowDate;

    let day = Math.floor(finish / (24 * 60 * 60 * 1000));
    let hours = Math.floor((finish % (24 * 60 * 60 * 100)) / (60 * 60 * 1000));
    let minuts = Math.floor((finish % (60 * 60 * 1000)) / (60 * 1000));
    let seconds = Math.floor((finish % (60 * 1000)) / 1000);

    let timeValue = document.getElementsByClassName("timetitle2")
    timeValue[0].innerHTML = correctData(day);
    timeValue[1].innerHTML = correctData(hours);
    timeValue[2].innerHTML = correctData(minuts);
    timeValue[3].innerHTML = correctData(seconds)


    console.log(day, hours, minuts, seconds);

}
saleTime()


setInterval(() => saleTime(), 1000)




