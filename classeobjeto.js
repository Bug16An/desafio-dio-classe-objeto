class dataOfHero{
    constructor(nameOfHero, classOfHero, ageOfHero, attackOfHero){
        this.nameOfHero = nameOfHero
        this.classOfHero = classOfHero
        this.ageOfHero = ageOfHero
        this.attackOfHero = attackOfHero
    }  
show(){
    switch(this.classOfHero) {
        case ("Mago"):
            this.attackOfHero = "Usando a magia";
            break
        case ("Guerreiro"):
            this.attackOfHero = "Usando espada";
            break
        case ("Monge"):
            this.attackOfHero = "Usando artes marciais";
            break
        case ("Ninja"):
            this.attackOfHero = "Usando shuriken"
            break 
        }

    console.log(`O ${this.nameOfHero} da classe ${this.classOfHero} tem ${this.ageOfHero} e atacou ${this.attackOfHero}`)
    
    console.log(`O ${this.classOfHero} atacou ${this.attackOfHero}`)

    
}
}

let hero = new dataOfHero ("Debug", "Ninja", "15years");
hero.show()




