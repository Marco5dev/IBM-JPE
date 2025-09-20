document.addEventListener('DOMContentLoaded', function() {
    // --- Home Page Functionality ---
    const btnRecommendations = document.getElementById('btn-recommendations');
    const btnClear = document.getElementById('btn-clear');
    const recommendationSection = document.getElementById('recommendation-section');

    if (btnRecommendations) {
        btnRecommendations.addEventListener('click', () => {
            recommendationSection.classList.remove('hidden');
        });
    }

    if (btnClear) {
        btnClear.addEventListener('click', () => {
            recommendationSection.classList.add('hidden');
        });
    }

    const btnSearch = document.getElementById('btn-search');
    const destinationInput = document.getElementById('destination-input');
    
    if (btnSearch) {
        btnSearch.addEventListener('click', () => {
            const country = (destinationInput.value || '').trim().toLowerCase();
            let resultHtml = '<h3>Recommendations for ' + (destinationInput.value || '—') + '</h3>';
            
            if (country === 'australia') {
                resultHtml += `
                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1524293581274-1f621382b632?w=500" alt="Sydney Opera House">
                        <img src="https://images.unsplash.com/photo-1516132438253-06c43a3756a1?w=500" alt="Great Barrier Reef">
                        <p>Visit the iconic Sydney Opera House and explore the vibrant Great Barrier Reef.</p>
                    </div>`;
            } else if (country === 'japan') {
                resultHtml += `
                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=500" alt="Tokyo city street">
                        <img src="https://images.unsplash.com/photo-1526481280643-33c94628e8d2?w=500" alt="Fuji Mountain">
                        <p>Experience the bustling streets of Tokyo and the serene beauty of Mt. Fuji.</p>
                    </div>`;
            } else {
                resultHtml += '<p>No recommendations found. Please try "Australia" or "Japan".</p>';
            }
            
            // Display the results
            const resultsDiv = document.createElement('div');
            resultsDiv.innerHTML = resultHtml;
            recommendationSection.innerHTML = ''; // Clear previous results
            recommendationSection.appendChild(resultsDiv);
            recommendationSection.classList.remove('hidden');
        });
    }

    // --- Contact Page Functionality ---
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents the page from reloading
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Form Submitted:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
            
            alert('Thank you for your message! We will get back to you soon.');
            
            contactForm.reset(); // Clears the form fields
        });
    }
});
