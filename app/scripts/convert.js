// app/scripts/convert.js

module.exports = function(time) {
    var numCheck = Number(time);
    if(isNaN(numCheck) === false && time.toString().length === 10) {
        var date = new Date(time * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        
        console.log(date.toGMTString());
        console.log(date.toLocaleString());
        
        var natural = date.toGMTString();
        
        return { "unix": time, "natural": natural };
    }
    else if(isNaN(numCheck) && isNaN(Date.parse(time)) === false) {
        var date = new Date(time);
        var unix = date.getTime()/1000;
        return { "unix": unix, "natural": time };
    }
    else {
        return null;
    }
};
