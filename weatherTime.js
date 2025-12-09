function generateCalendar() {
    let currentDate = new Date();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let firstDay = new Date(year, month, 1).getDay();

    let calendarHTML = `<h3>${monthNames[month]} ${year}</h3>`;
    calendarHTML += "<table><tr>";

    // Days of the Week
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let day of weekdays) {
        calendarHTML += `<th>${day}</th>`;
    }

    calendarHTML += "</tr><tr>";

    // Empty cells before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        calendarHTML += "<td></td>";
    }

    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        if ((firstDay + day - 1) % 7 === 0 && day !== 1) {
            calendarHTML += "</tr><tr>";
        }
        calendarHTML += `<td>${day}</td>`;
    }

    calendarHTML += "</tr></table>";

    document.getElementById("calendar").innerHTML = calendarHTML;
}

generateCalendar();  // Call function to generate calendar on page load
