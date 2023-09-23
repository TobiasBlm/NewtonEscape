function berechne() {
    const g = 9.81;
    const masse = document.getElementById('masse').value;
    const hoehenunterschied = document.getElementById('hoehenunterschied').value;
    const zeit = document.getElementById('zeit').value;
    const ergebnis = document.getElementById('ergebnis').value;

    const berechnetesErgebnis = (masse * g * hoehenunterschied) / zeit;

    if (Math.round(berechnetesErgebnis * 10) / 10 === parseFloat(ergebnis)) {
        alert("Gut gemacht! Die Lösungsbuchstaben sind f,a,t,g");
    } else {
        alert("Das Ergebnis ist falsch! Versuche es nochmal!");
    }
}