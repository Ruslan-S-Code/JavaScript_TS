const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);

const output = document.querySelector("#dateList") as HTMLUListElement;

if (output) {
    output.innerHTML = `
        <li><strong>Date 1:</strong> ${date1}</li>
        <li><strong>Date 2:</strong> ${date2}</li>
        <li><strong>Date 3:</strong> ${date3}</li>
        <li><strong>Date 4:</strong> ${date4}</li>
    `;
}