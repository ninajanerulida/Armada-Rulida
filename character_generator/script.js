// Step 1: Create a Character Object
class Character {
    constructor(name = "Hero") {
        this.name = name;
        this.health = 100;
        this.class = this.assignRandomClass();
        this.specialAbility = this.assignRandomAbility();
        this.randomizeHealth();
    }

    // Step 2: Assign a Random Class
    assignRandomClass() {
        const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
        return classes[Math.floor(Math.random() * classes.length)];
    }

    // Step 3: Add Randomized Health
    randomizeHealth() {
        this.health = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
    }

    // Step 4: Assign a Special Ability
    assignRandomAbility() {
        const abilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];
        return abilities[Math.floor(Math.random() * abilities.length)];
    }

    // Step 6: Battle Simulation
    battle(otherCharacter) {
        const damage = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
        const originalHealth = otherCharacter.health;
        otherCharacter.health = Math.max(0, otherCharacter.health - damage);
        console.log(`Character ${this.name} attacked Character ${otherCharacter.name} with ${this.specialAbility}. ${otherCharacter.name}'s health dropped from ${originalHealth} to ${otherCharacter.health}.`);
    }
}

// Step 5: Generate a Character
function generateCharacter(name = null) {
    const names = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];
    const randomName = name || names[Math.floor(Math.random() * names.length)];
    return new Character(randomName);
}

// Step 7: Generate Multiple Characters
function generateMultipleCharacters(x) {
    const characters = [];
    for (let i = 0; i < x; i++) {
        characters.push(generateCharacter());
    }
    return characters;
}

// Testing
const char1 = generateCharacter();
const char2 = generateCharacter();
console.log(char1);
console.log(char2);
char1.battle(char2);

const team = generateMultipleCharacters(3);
console.log(team);
