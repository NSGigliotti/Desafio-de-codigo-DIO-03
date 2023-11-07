var read = require('readline-sync')

class Hero {
    constructor(heroName, heroClass, heroAge) {
        this.heroName = heroName,
            this.heroClass = heroClass,
            this.heroAge = heroAge
    }

    attack(heroClass) {
        let attackType
        if (heroClass == "mago") {
            attackType = "usou magia"
        } else if (heroClass == "guerreiro") {
            attackType = "usou espada"
        } else if (heroClass == "monge") {
            attackType = "usou artes marciais"
        } else {
            attackType = "usou shuriken"
        }


        console.log(`o ${heroClass} atacou usando ${attackType}`)
    }

}

let heroName
let isName = 1
while (isName <= 1) {
    heroName = read.question("Nome do Heroi:")

    if (heroName) {
        isName++
    }
}


let heroClass
let isClass = 1
console.log("Escolha a casse do heroi entre, mago, guerreiro, monge e ninja")
while (isClass <= 1) {
    heroClass = read.question("Classe do Heroi:")

    heroClass = heroClass.toLowerCase()

    if (heroClass === "mago" || heroClass == 'guerreiro' || heroClass == 'monge' || heroClass == "ninja") {
        isClass++
    }

}

let heroAge
let isAge = 1
while (isAge <= 1) {
    heroAge = read.question("Idade do Heroi:")

    if (heroAge && !isNaN(heroAge)) {
        isAge++
    }
}

const hero = new Hero(heroName, heroClass, heroAge)

hero.attack(hero.heroClass)
