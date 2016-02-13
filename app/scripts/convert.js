// app/scripts/convert.js

module.exports = function(time) {
    var numCheck = Number(time);
    if(isNaN(numCheck) === false && time.toString().length === 10) {
        var date = new Date(time * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        
        var natural = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        
        return { "unix": time, "natural": natural };
    }
    else {
        return null;
    }
};
