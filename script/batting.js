// Get the selected value from the dropdown
const selection = document.getElementById('hitOrOut').value;

// Creating variables for ERA calculation
let era = parseFloat(document.getElementById('eraValue').innerText);
const earnedRuns = 1; //assuming 1 earned run is added for each "hit"

// Update ERA based on user selection
switch(selection) {
    case 'hit':
        era += earnedRuns;
        break;
    case 'strike':
    case 'flyout':
    case 'groundout':
    case 'thrownout':
        era -= earnedRuns;
        break;
    case 'walk':
        // Walk does nothing to ERA
        break;
    default:
        break;
}

function saveFormData() {
    const formData = {
        name: document.getElementById('date').value,
        name: document.getElementById('name').value,
        team: document.getElementById('team').value,
        position: document.getElementById('position').value,
        atbat: document.getElementById('atbat').value,
        hitOrOut: document.getElementById('hitOrOut').value
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Form data has been saved successfully.');
}

// Load the saved form data if it exists
window.onload = function() {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
        const formData = JSON.parse(savedFormData);
        document.getElementById('date').value = formData.name;
        document.getElementById('name').value = formData.name;
        document.getElementById('team').value = formData.team;
        document.getElementById('position').value = formData.position;
        document.getElementById('atbat').value = formData.atbat;
        document.getElementById('hitOrOut').value = formData.hitOrOut;
    }
};