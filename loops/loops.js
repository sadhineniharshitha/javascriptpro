let date = document.getElementById("date");
for (let i = 1; i <= 31; i++) {
  date.innerHTML += `<option>${i}</option>`;
}

let months = ["jan", "feb", "mar", "apr", "may", "jun", "july", "aug", "sep", "oct", "nov", "dec"];
let month = document.getElementById("month");
for (let i = 0; i <= months.length; i++) {
  month.innerHTML += `<option>${months[i]}</option>`;
}

let year = document.getElementById("year");
for (let i = 1905; i <= 2025; i++) {
  year.innerHTML += `<option>${i}</option>`;
}

