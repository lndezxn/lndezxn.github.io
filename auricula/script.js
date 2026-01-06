// Helper to shuffle array (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to render the survey from config
function renderSurvey() {
    const form = document.getElementById('survey-form');
    const submitBtnContainer = document.querySelector('.form-actions');
    
    // Create container for dynamic items
    const dynamicContent = document.createElement('div');
    dynamicContent.id = 'dynamic-content';
    
    // Generate headers for the matrix table
    const tableHeaderHTML = `
        <thead>
            <tr>
                <th>Criteria</th>
                ${surveyConfig.scale.map(s => `<th>${s.label} (${s.value})</th>`).join('')}
            </tr>
        </thead>
    `;

    // Shuffle items before rendering
    const shuffledItems = shuffleArray([...surveyConfig.items]);

    shuffledItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 't-item';
        itemDiv.dataset.id = item.id;

        // Generate rows for each criterion
        const tableBodyRows = surveyConfig.criteria.map(criterion => {
            // Note: Removed 'required' attribute to allow partial submission
            const radioButtons = surveyConfig.scale.map(s => `
                <td><input type="radio" name="${item.id}_${criterion.id}" value="${s.value}"></td>
            `).join('');
            
            return `
                <tr>
                    <td>${criterion.label}</td>
                    ${radioButtons}
                </tr>
            `;
        }).join('');

        itemDiv.innerHTML = `
            <h2>${item.title}</h2>
            <div class="media-container">
                <img src="${item.image}" alt="${item.title}" class="stimulus-img">
                <audio controls class="stimulus-audio">
                    <source src="${item.audio}" type="audio/wav">
                    Your browser does not support the audio element.
                </audio>
            </div>
            
            <div class="question-matrix">
                <table>
                    ${tableHeaderHTML}
                    <tbody>
                        ${tableBodyRows}
                    </tbody>
                </table>
            </div>
        `;
        
        dynamicContent.appendChild(itemDiv);
    });

    // Insert dynamic content before the submit button
    form.insertBefore(dynamicContent, submitBtnContainer);
}

// Render on load
document.addEventListener('DOMContentLoaded', renderSurvey);

document.getElementById('survey-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect initial form data
    const formData = new FormData(e.target);
    const rawData = Object.fromEntries(formData.entries());
    
    // Construct valid payload with only complete cases
    const payload = {};
    if (rawData.userId) payload.userId = rawData.userId;
    payload.timestamp = new Date().toISOString();

    let completedCount = 0;

    // Iterate through original config items (to check all possible IDs)
    surveyConfig.items.forEach(item => {
        const itemPrefix = item.id;
        
        // Check if ALL criteria for this item are answered
        const allAnswered = surveyConfig.criteria.every(c => {
            const key = `${itemPrefix}_${c.id}`;
            return rawData[key] !== undefined && rawData[key] !== "";
        });

        if (allAnswered) {
            // Keep data for this item
            surveyConfig.criteria.forEach(c => {
                const key = `${itemPrefix}_${c.id}`;
                payload[key] = rawData[key];
            });
            completedCount++;
        }
    });

    console.log(`Collecting data: ${completedCount}/${surveyConfig.items.length} items completed.`);

    if (completedCount === 0) {
        if (!confirm("You haven't fully completed any items. Submit anyway?")) {
            return;
        }
    }

    // Replace this URL with your actual backend URL where you want to receive the data.
    // If testing locally with the python script provided, use http://localhost:5000/submit
    // If deploying, you need a public URL (e.g., Heroku, Railway, PythonAnywhere, etc.)
    const BACKEND_URL = 'http://localhost:5000/submit';

    fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(response => {
        if (response.ok) {
            // Redirect to the thank you page
            window.location.href = 'thank-you.html';
        } else {
            alert('There was an error submitting your responses. Please try again.');
            console.error('Server responded with:', response.status);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Could not connect to the server. Please check if the backend is running.');
    });
});
