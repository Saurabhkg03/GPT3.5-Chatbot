// script.js
const typewriter = document.getElementById('typewriter');
const answerText = typewriter.textContent;
let index = 0;

function type() {
  if (index <= answerText.length) {
    typewriter.innerHTML = answerText.slice(0, index) + '<span class="blinking-cursor">|</span>';
    index++;
    if (index < answerText.length) {
      setTimeout(type, Math.random() * 10 + 1); // Adjust the timeout interval here (e.g., 50 ms)
    } else {
      typewriter.innerHTML = answerText.slice(0, index);
    }
  }
}

type();

typewriter.innerHTML = answerText; // Show the full answer
const loadingOverlay = document.getElementById('loading-overlay');
loadingOverlay.style.display = 'none';

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const label = document.getElementById('question-label');
    const labelText = label.textContent;
    let labelIndex = 0;

    function typeLabel() {
        if (labelIndex <= labelText.length) {
            label.innerHTML = labelText.slice(0, labelIndex) + '<span class="blinking-cursor">|</span>';
            labelIndex++;
            if (labelIndex < labelText.length) {
                setTimeout(typeLabel, Math.random() * 50 + 20); // Adjust speed as needed
            } else {
                label.innerHTML = labelText.slice(0, labelIndex);
            }
        }
    }

    typeLabel();
});


function showLoading() {
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.display = 'flex';
  }