class Hero {
    constructor (name, age, type) {
        this.name = name;
        this.age = age;
        this. type = type;
    }

    fight() {
        let atk;

        switch (this.type) {
        case "Mage":
            atk = "Spell";
            break;
        case "Warrior":
            atk = "Sword";
            break;
        case "Monk":
                atk = "Martial Art"
            break;
        case "Ninja":
            atk = "Shuriken"
            break;
        default:
            atk = "Invalid Hero"
            break;
        }

        console.log(`The ${this.type} attacked using ${atk}`);
    }        
}

const mage = new Hero("William", 999, "Mage");
const warrior = new Hero("William", 888, "Warrior");
const monk = new Hero("William", 777, "Monk");
const ninja = new Hero("William", 666, "Ninja");

mage.fight();
warrior.fight();
monk.fight();
ninja.fight();