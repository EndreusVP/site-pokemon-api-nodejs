//botões
const pikachu = document.querySelector("#pikachu")
const charmander = document.querySelector("#charmander")
const bulbasaur = document.querySelector("#bulbasaur")
const snorlax = document.querySelector("#snorlax")

//variaveis
let main = document.querySelector("#main")

pikachu.addEventListener("click", function () {
    main.innerHTML = ""
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(res => res.json())
        .then(data => {
            main.innerHTML += `<img class="imagem-pokemon" src="${data.sprites.front_default}">`
            const imagemPokemon = document.querySelector(".imagem-pokemon")
            imagemPokemon.style = "width: 300px;"
            imagemPokemon.style = "height: 400px;" 
            main.innerHTML += `<p>Altura: ${data.height}m</p>`
            main.innerHTML += `<p>Peso: ${data.weight}kg</p>`
        })
        .catch(err => console.error("ERRO:", err))
})

charmander.addEventListener("click", function () {
    main.innerHTML = ""
    fetch("https://pokeapi.co/api/v2/pokemon/charmander")
        .then(res => res.json())
        .then(data => {
            main.innerHTML += `<img class="imagem-pokemon" src="${data.sprites.front_default}">`
            const imagemPokemon = document.querySelector(".imagem-pokemon")
            imagemPokemon.style = "width: 300px;"
            imagemPokemon.style = "height: 400px;" 
            main.innerHTML += `<p>Altura: ${data.height}m</p>`
            main.innerHTML += `<p>Peso: ${data.weight}kg</p>`
        })
        .catch(err => console.log("ERRO: ", err))
})

bulbasaur.addEventListener("click", function () {
    main.innerHTML = ""
    fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
        .then(res => res.json())
        .then(data => {
            main.innerHTML += `<img class="imagem-pokemon" src="${data.sprites.front_default}">`
            const imagemPokemon = document.querySelector(".imagem-pokemon")
            imagemPokemon.style = "width: 300px;"
            imagemPokemon.style = "height: 400px;" 
            imagemPokemon.style = "position: relative;"
            main.innerHTML += `<p>Nome: ${data.name}</p>`
            main.innerHTML += `<p>Altura: ${data.height}m</p>`
            main.innerHTML += `<p>Peso: ${data.weight}kg</p>`
        })
        .catch(err => console.log("ERRO: ", err))
})

snorlax.addEventListener("click", function () {
    main.innerHTML = ""
    fetch("https://pokeapi.co/api/v2/pokemon/snorlax")
        .then(res => res.json())
        .then(data => {
            main.innerHTML += `<img class="imagem-pokemon" src="${data.sprites.front_default}">`
            const imagemPokemon = document.querySelector(".imagem-pokemon")
            imagemPokemon.style = "width: 300px;"
            imagemPokemon.style = "height: 400px;" 
            main.innerHTML += `<p>Nome: ${data.name}</p>`
            main.innerHTML += `<p>Altura: ${data.height}m</p>`
            main.innerHTML += `<p>Peso: ${data.weight}kg</p>`
        })
        .catch(err => console.log("ERRO: ", err))
})