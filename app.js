async function loadAssignmentsForDate(year, month, day) {
    const url = `/assignments/api/${year}/${month}/${day}/`;
    const response = await fetch(url);
    return await response.json();
}

// Example: attach to a date picker
document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById("date");

    if (dateInput) {
        dateInput.addEventListener("change", async () => {
            const dt = new Date(dateInput.value);
            const data = await loadAssignmentsForDate(
                dt.getFullYear(),
                dt.getMonth() + 1,
                dt.getDate()
            );

            displayAssignments(data.assignments);
        });
    }
});

function displayAssignments(assignments) {
    const container = document.getElementById("assignments");
    container.innerHTML = "";

    assignments.forEach(a => {
        const div = document.createElement("div");
        div.className = "assignment-item";
        div.textContent = `${a.role}: ${a.person || "Unassigned"}`;
        container.appendChild(div);
    });
}
