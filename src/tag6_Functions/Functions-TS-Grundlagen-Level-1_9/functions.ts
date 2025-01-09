function introduceYourself(
    vorname: string,
    nachname: string,
    geburtsort: string,
    alter: number,
    wohnort: string,
)

: void {
    const introduction =
    "Mein Name ist " + vorname + " " + nachname + ". " + 
    "Ich bin in " + geburtsort + " geboren." + 
    "Ich lerne bei Supercode." + "Ich bin " + alter + " Jahre alt." + 
    "Ich wohne in " + wohnort + ".";
    console.log (introduction);
}

introduceYourself("Ruslan", "Bairamov", "Krivoy Rog", 39, "Wuppertal");
introduceYourself("Aurora", "Stardust", "New York", 20, "Celestia");

