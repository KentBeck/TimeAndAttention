function timeString(now) {
    return now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

function updateTitle() {
    window.document.title = timeString(new Date());
}

setInterval(updateTitle, 1000);