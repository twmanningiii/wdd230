let dayname = [
                "sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursaday",
                "Friday",
                "Saturday"
            ];
let months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ];

let d = new Date();
let dayName = dayname[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + ", " + monthName + " " + d.getDate() + "," + " " + d.getFullYear();

document.getElementById("currentdate").textContent = fulldate;
       

const lastVisit = parseFloat(document.cookie.replace(/(?:(?:^|.*;)\s*last_modif\s*=\s*([^;]*).*$)|^.*$/, "$1"));
const lastModif = Date.parse(document.lastModified);

if (isNaN(lastVisit) || lastModif > lastVisit) {
  document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 2999 23:59:59 GMT; path=${location.pathname}`;

  if (isFinite(lastVisit)) {
    alert("This page has been changed!");
  }
}

var date = document.lastModified;
var lastModifiedDate = new Date(date);
document.getElementById("result").innerHTML = "The document was last modified on : " + lastModifiedDate;
