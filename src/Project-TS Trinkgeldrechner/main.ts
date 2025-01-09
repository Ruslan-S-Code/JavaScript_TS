type ServiceQuality = "schlecht" | "mittel" | "super";

function calculateAndDisplayBill(): void {
    // HTML-Elemente abrufen
    const billAmountInput = document.querySelector("#billAmount") as HTMLInputElement;
    const numberOfPeopleInput = document.querySelector("#numberOfPeople") as HTMLInputElement;
    const serviceQualityInput = document.querySelector("#serviceQuality") as HTMLSelectElement;
    const resultContainer = document.querySelector("#resultContainer") as HTMLDivElement;
    const resultTable = document.querySelector("#resultTable") as HTMLTableSectionElement;

    // Eingabewerte abrufen
    const billAmount = parseFloat(billAmountInput.value);
    const numberOfPeople = parseInt(numberOfPeopleInput.value, 10);
    const serviceQuality = serviceQualityInput.value as ServiceQuality;

    // Validierung der Eingabewerte
    if (isNaN(billAmount) || isNaN(numberOfPeople) || billAmount <= 0 || numberOfPeople <= 0) {
        alert("Bitte gültige Werte für Rechnungsbetrag und Anzahl der Personen eingeben!");
        return;
    }

    // Prozent basierend auf Servicequalität bestimmen
    let tipPercentage: number;
    switch (serviceQuality) {
        case "schlecht":
            tipPercentage = 0.02;
            break;
        case "mittel":
            tipPercentage = 0.1;
            break;
        case "super":
            tipPercentage = 0.2;
            break;
        default:
            tipPercentage = 0;
    }

    // Berechnungen durchführen
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    const amountPerPerson = totalAmount / numberOfPeople;

    // Ergebnis in der Tabelle anzeigen
    resultTable.innerHTML = `
        <tr>
            <th>Rechnungsbetrag:</th>
            <td>${billAmount.toFixed(2)}€</td>
        </tr>
        <tr>
            <th>Trinkgeld (${serviceQuality}):</th>
            <td>${tipAmount.toFixed(2)}€</td>
        </tr>
        <tr>
            <th>Gesamtsumme:</th>
            <td>${totalAmount.toFixed(2)}€</td>
        </tr>
        <tr>
            <th>Betrag pro Person (${numberOfPeople} Personen):</th>
            <td>${amountPerPerson.toFixed(2)}€</td>
        </tr>
    `;

    // Ergebniscontainer anzeigen
    resultContainer.style.display = "block";
}

// Event-Listener für den Button hinzufügen
const calculateButton = document.querySelector("#calculateButton") as HTMLButtonElement;
calculateButton.addEventListener("click", calculateAndDisplayBill);