document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');
    const myParagraph = document.getElementById('myParagraph');

    myButton.addEventListener('click', function() {
        myParagraph.textContent = 'The paragraph text has been changed by JavaScript!';
        myParagraph.style.color = 'blue';
    });
});