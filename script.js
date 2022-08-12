function getRandomJoke(max) {
    return Math.floor(Math.random() * max)
}
let jokes = ["Qual é a cidade brasileira que não tem táxi? R: Uberlândia.", "Por que o rádio"];
jokes.push("test")

function print1() {
    //document.getElementById("test").innerHTML = jokes[getRandomJoke(jokes.length)] }
    document.getElementById("msg").innerHTML = jokes[getRandomJoke(jokes.length)]
}