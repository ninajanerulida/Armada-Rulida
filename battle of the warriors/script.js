// Define the warrior objects
const warrior1 = {
    name: "Thor",
    hp: 100,
    strength: 15,
    attack() {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};

const warrior2 = {
    name: "Zeus",
    hp: 100,
    strength: 12,
    attack() {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};

// Simulate 10 rounds of battle
for (let round = 1; round <= 10; round++) {
    console.log(`Round ${round}:`);
    
    // Thor attacks Zeus
    let damage = warrior1.attack();
    warrior2.hp -= damage;
    console.log(`${warrior1.name} attacks ${warrior2.name} for ${damage} damage. ${warrior2.name} has ${Math.max(warrior2.hp, 0)} HP left.`);
    
    // Check if Zeus is still alive
    if (warrior2.hp <= 0) break;
    
    // Zeus attacks Thor
    damage = warrior2.attack();
    warrior1.hp -= damage;
    console.log(`${warrior2.name} attacks ${warrior1.name} for ${damage} damage. ${warrior1.name} has ${Math.max(warrior1.hp, 0)} HP left.`);
    
    // Check if Thor is still alive
    if (warrior1.hp <= 0) break;
    
    console.log("---------------------------------");
}

// Determine the winner
console.log("Final Results:");
if (warrior1.hp > warrior2.hp) {
    console.log(`${warrior1.name} wins with ${warrior1.hp} HP left!`);
} else if (warrior2.hp > warrior1.hp) {
    console.log(`${warrior2.name} wins with ${warrior2.hp} HP left!`);
} else {
    console.log("It's a draw! Both warriors are equally strong.");
}

// Prevent favicon.ico error in console
if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'data:,';
    document.head.appendChild(link);
}
