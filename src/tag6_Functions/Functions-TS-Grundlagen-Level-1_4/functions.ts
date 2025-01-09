function showHero(heroName: string, heroPower: string, heroEnemy: string): void {
    
    const nameOutput = `Mein:e Lieblingsheld:in aus Marvel ist: ${heroName}`;
    const powerOutput = `Er/sie hat die Fähigkeit: ${heroPower}`;
    const enemyOutput = `Sein/Ihre größte/r Gegner:in ist: ${heroEnemy}`;
    
    console.log(`${nameOutput}. ${powerOutput}. ${enemyOutput}.`);
}

showHero("Iron-Man", "Siene Rüstung ist mit modernsten Technik ausgestattet, wie zum Beispiel Laserstrahlen", "Mandarin");
showHero("Wonder Woman", "Übermenschliche Stärke und Geschwindigkeit", "Cheetah");
