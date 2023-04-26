for showing time in HH:MM:SS we can either use .toLocaleTimeString() but it was showing some kind of error so i have used this format

var now = new Date().getHours() + ":" + 
            new Date().getMinutes() + ":" +
            new Date().getSeconds()
