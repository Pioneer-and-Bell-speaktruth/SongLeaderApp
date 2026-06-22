async function loadAssignments(year, month, day) {
    const response = await fetch(`/assignments/api/${year}/${month}/${day}/`);
    return await response.json();
}

async function updateSong(assignmentId, number, title) {
    await fetch(`/assignments/api/update-song/${assignmentId}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            song_number: number,
            song_title: title
        })
    });
}

