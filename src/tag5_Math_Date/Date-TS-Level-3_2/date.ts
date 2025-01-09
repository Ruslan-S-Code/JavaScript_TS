import { differenceInYears, differenceInHours, differenceInSeconds, format } from "date-fns";

const date1970 = new Date("1970-01-01T00:00:00Z");
const now = new Date();

const yearsDifference = differenceInYears(now, date1970);
const hoursDifference = differenceInHours(now, date1970);
const secondsDifference = differenceInSeconds(now, date1970);

const myBirthday = new Date("1985-07-05T12:40:00Z");
const currentAge = differenceInYears(now, myBirthday);
const ageOn2007 = differenceInYears(new Date("2007-04-07T00:00:00Z"), myBirthday);

const formattedResults = `
    <p>Differenz in Jahren: ${yearsDifference}</p>
    <p>Differenz in Stunden: ${hoursDifference}</p>
    <p>Differenz in Sekunden: ${secondsDifference}</p>
    <p>Aktuelles Alter: ${currentAge}</p>
    <p>Alter am 07.04.2007: ${ageOn2007}</p>
    <p>Formatierter Geburtstag:</p>
    <ul>
        <li>${format(myBirthday, "dd.MM.yyyy HH:mm:ss")}</li>
        <li>${format(myBirthday, "dd.MM.yyyy HH:mm")}</li>
        <li>${format(myBirthday, "dd.MM.yy")}</li>
        <li>${format(myBirthday, "dd. MMMM yyyy")}</li>
        <li>${format(myBirthday, "HH:mm")}</li>
        <li>${format(myBirthday, "EEEE")}</li>
        <li>${format(myBirthday, "MMMM")}</li>
        <li>${format(myBirthday, "dd 'des' MMMM 'im Jahre des Herrn' yyyy")}</li>
    </ul>
`;

const outputDiv = document.getElementById("results");
if (outputDiv) {
    outputDiv.innerHTML = formattedResults;
}