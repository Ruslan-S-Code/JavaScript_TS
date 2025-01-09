function showPersonalInfo (name: string, city: string, age: number): void {
    const roundedAge = Math.abs(age);
    const info = 
        "Hallo mein Name ist " + name + ". " + 
        "Ich bin " + roundedAge + " Jahre alt." +
        "Ich komme aus " + city + ".";
    console.log(info);
}

showPersonalInfo("SuperCoder", "Düsseldorf", 27);