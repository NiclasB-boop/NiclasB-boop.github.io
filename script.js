
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

const colorsheme = localStorage.getItem("colorsheme");

function plus() {
    const l = document.createElement("input")
    l.type = "color"
    l.className = "animation"
    l.addEventListener("input",color)
    document.getElementById("farben").appendChild(l)
    color()
}

function minus() {
    const l = document.getElementById("farben")
    const n = l.children[l.children.length-1]
    l.removeChild(n)
    color()
}

function color() {
    let color = []
    for (let i of document.querySelectorAll("input[type=color]")) {
        color.push(i.value)
    }
    localStorage.setItem("colorsheme", document.getElementById("farben").innerHTML);
    document.querySelector(':root').style.setProperty("--color-gradient", color.join(", "))
}
color()
document.getElementById("farben").innerHTML = colorsheme;
