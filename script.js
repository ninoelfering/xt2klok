function spacexKlok(){

    var sxKlok = new Date();

    var hours = sxKlok.getHours();
    var minutes = sxKlok.getMinutes();
    var seconds = sxKlok.getSeconds();

    // AM / PM aanduiding
    var amPm = ( hours < 12 ) ? "AM" : "PM";

    // Uren veranderen naar 12 uur 
    hours = (hours > 12) ? hours - 12 : hours;
    
    // De volgende uren weergeven met een 0
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    // Klok weergeven
    document.getElementById('klok').innerHTML =
        hours + " : " + minutes + " : " + seconds + " " + amPm;
    var t = setTimeout(spacexKlok, 500);


}