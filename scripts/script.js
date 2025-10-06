

//botões
const pikachu = document.querySelector("#pikachu")
const charmander = document.querySelector("#charmander")
const bulbasaur = document.querySelector("#bulbasaur")
const snorlax = document.querySelector("#snorlax")

//variaveis
const main = document.querySelector("#main")

pikachu.addEventListener("click", function () {
    main.innerHTML = ""
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(res => res.json())
        .then(data => {
            main.innerHTML += `<img class="imagem-pokemon" src="${data.sprites.front_default}">`
            const imagemPokemon = document.querySelector(".imagem-pokemon")

            imagemPokemon.style.height = "400px"
            imagemPokemon.style.width = "400px"
            imagemPokemon.style.position = "relative"
            imagemPokemon.style.zIndex = "11"
            main.innerHTML += `<p>Nome: ${data.name}</p>`
            main.innerHTML += `<p>Altura: ${data.height}m</p>`
            main.innerHTML += `<p>Peso: ${data.weight}kg</p>`

            pikachu.style.backgroundColor = "yellow"
            charmander.style.backgroundColor = "yellow"
            bulbasaur.style.backgroundColor = "yellow"
            snorlax.style.backgroundColor = "yellow"

            pikachu.style.color = "black"
            charmander.style.color = "black"
            bulbasaur.style.color = "black"
            snorlax.style.color = "black"
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
            imagemPokemon.style.height = "400px"
            imagemPokemon.style.width = "400px"
            imagemPokemon.style.position = "relative"
            imagemPokemon.style.zIndex = "11" 
            main.innerHTML += `<p>Nome: ${data.name}</p>`
            main.innerHTML += `<p>Altura: ${data.height}m</p>`
            main.innerHTML += `<p>Peso: ${data.weight}kg</p>`
            pikachu.style.backgroundColor = "orange"
            charmander.style.backgroundColor = "orange"
            bulbasaur.style.backgroundColor = "orange"
            snorlax.style.backgroundColor = "orange"
            pikachu.style.color = "black"
            charmander.style.color = "black"
            bulbasaur.style.color = "black"
            snorlax.style.color = "black"

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
            imagemPokemon.style.height = "400px"
            imagemPokemon.style.width = "400px"
            imagemPokemon.style.position = "relative"
            imagemPokemon.style.zIndex = "11"
            main.innerHTML += `<p>Nome: ${data.name}</p>`
            main.innerHTML += `<p>Altura: ${data.height}m</p>`
            main.innerHTML += `<p>Peso: ${data.weight}kg</p>`
            pikachu.style.backgroundColor = "green"
            charmander.style.backgroundColor = "green"
            bulbasaur.style.backgroundColor = "green"
            snorlax.style.backgroundColor = "green"
            pikachu.style.color = "white"
            charmander.style.color = "white"
            bulbasaur.style.color = "white"
            snorlax.style.color = "white"


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
            imagemPokemon.style.height = "400px"
            imagemPokemon.style.width = "400px"
            imagemPokemon.style.position = "relative"
            imagemPokemon.style.zIndex = "11"
            main.innerHTML += `<p>Nome: ${data.name}</p>`
            main.innerHTML += `<p>Altura: ${data.height}m</p>`
            main.innerHTML += `<p>Peso: ${data.weight}kg</p>`
            pikachu.style.backgroundColor = "rgb(49, 90, 123)"
            charmander.style.backgroundColor = "rgb(49, 90, 123)"
            bulbasaur.style.backgroundColor = "rgb(49, 90, 123)"
            snorlax.style.backgroundColor = "rgb(49, 90, 123)"
            pikachu.style.color = "white"
            charmander.style.color = "white"
            bulbasaur.style.color = "white"
            snorlax.style.color = "white"
        })
        .catch(err => console.log("ERRO: ", err))
})
