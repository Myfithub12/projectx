document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const preferredApp = localStorage.getItem('preferredApp');
        if (preferredApp) {
            openWithPreferredApp(file, preferredApp);
        } else {
            document.getElementById('appSelection').style.display = 'block';
        }
    }
});

function setApp(appName) {
    localStorage.setItem('preferredApp', appName);
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        openWithPreferredApp(file, appName);
    }
    document.getElementById('appSelection').style.display = 'none';
}

function openWithPreferredApp(file, appName) {
    alert(`Opening ${file.name} with ${appName}`);
    // Logic to open the file with the selected app goes here
    // This might involve sending the file to a server and opening it there,
    // or using a JavaScript library to process the file in the browser.
}