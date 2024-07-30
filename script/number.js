document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const numberInput = document.getElementById('numberInput').value;
    const hitChecked = document.getElementById('hit').checked;

    console.log('Number:', numberInput);
    console.log('Hit:', hitChecked);