
function Passwort() {
    const Gross = document.getElementById("Gross").checked
    const Klein = document.getElementById("Klein").checked
    const Zahl = document.getElementById("Zahl").checked
    const Sonder = document.getElementById("Sonder").checked
    const Kleinbuchstaben = "abcdefghijklmnopqrstuvwxyz"
    const Grossbuchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const Zahlen = "1234567890"
    const Sonderzeichen = "!\"§$%&/()=?`²³{[]}\\^°@€µ|<>"
    const Laenge = document.getElementById("Laenge").value
    let chars = ""

    if (Gross) chars += Grossbuchstaben
    if (Klein) chars += Kleinbuchstaben
    if (Zahl) chars += Zahlen
    if (Sonder) chars += Sonderzeichen
    
    let passwort = ""
    for (let i =0; i < Laenge; i++) {
        passwort += chars[Math.floor(Math.random()*chars.length)]
    }
    document.getElementById("Passwort").innerText = passwort
}