const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();

const dateWithDash = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
const dateWithSlash = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

const localTime = currentDate.toLocaleTimeString();
const utcTime = currentDate.toUTCString().split(' ')[4];

const dateDashElement = document.getElementById("date-dash");
const dateSlashElement = document.getElementById("date-slash");
const localTimeElement = document.getElementById("local-time");
const utcTimeElement = document.getElementById("utc-time");

if (dateDashElement) dateDashElement.textContent = dateWithDash;
if (dateSlashElement) dateSlashElement.textContent = dateWithSlash;
if (localTimeElement) localTimeElement.textContent = localTime;
if (utcTimeElement) utcTimeElement.textContent = utcTime;