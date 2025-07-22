
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
const container = document.getElementById("farben");

function plus() {
    const input = document.createElement("input");
    input.type = "color";
    input.className = "animation";
    input.addEventListener("input", color);
    container.appendChild(input);
    save();
    color();
}

function minus() {
    if (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
        save();
        color();
    }
}

function color() {
    const colors = Array.from(container.querySelectorAll("input[type=color]"))
                        .map(i => i.value);
    document.documentElement.style.setProperty("--color-gradient", colors.join(", "));
    save()
}

function save() {
    for (const input of container.querySelectorAll("input[type=color]")) {
        input.setAttribute("value", input.value);
    }
    localStorage.setItem("inputsHTML", container.innerHTML);
}

function load() {
    const html = localStorage.getItem("inputsHTML");
    if (html) {
        container.innerHTML = html;
        for (const input of container.querySelectorAll("input[type=color]")) {
            input.addEventListener("input", color);
        }
        color();
    }
}

load();

function createPrinter(text) {
    return function* () {
        let word = "";
        for (let i = 0; i < text.length; i++) {
            for (let j = 0; j < characters.length; j++) {
                yield word + characters[j]; // Zeige den Versuch
                if (text[i] === characters[j]) {
                    word += characters[j]; // Richtigen Buchstaben hinzufügen
                    break;
                }
            }
        }
    };
}

function printing() {
    const gen = createPrinter(document.getElementById("print-text").value)(); // Achtung: () um den Generator aufzurufen

    const interval = setInterval(() => {
        const next = gen.next();
        if (next.done) {
            clearInterval(interval);
        } else {
            document.getElementById("text").innerText = next.value;
        }
    }, 10); // alle 100ms

}
