document.addEventListener('DOMContentLoaded', function() {
    // Tab Functionality
    const tabs = document.querySelectorAll('.tabs ul li');
    const tabContents = document.querySelectorAll('.tab-content'); // Assuming you might add tab contents later

    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                // Add active class to the clicked tab
                this.classList.add('active');

                // If you were to have tab contents, you'd handle content switching here
                // For example, if you had elements with class 'tab-content' and data-tab attributes
                // you would show/hide them based on the clicked tab.
            });
        });
    }

    // TextAl Button Functionality
    const textAlButton = document.querySelector('.text-al-button');
    if (textAlButton) {
        textAlButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission if button is inside a form
            alert('TextAl feature triggered!\n\nIn a real application, this would use AI to generate text based on your product description.');
            // In a real application, you would perform an action like:
            // 1. Get the current short description text.
            // 2. Send it to a backend service (API) for AI processing.
            // 3. Receive generated text from the backend.
            // 4. Update the short description textarea with the generated text.
        });
    }

    // Character Counter for Name Field (Optional)
    const productNameInput = document.getElementById('productName');
    const limitLabel = document.querySelector('.limit-label'); // Assuming the span with class 'limit-label' is next to the input

    if (productNameInput && limitLabel) {
        productNameInput.addEventListener('input', function() {
            const currentLength = this.value.length;
            const maxLength = parseInt(this.getAttribute('maxlength'), 10); // Get max length from HTML attribute
            limitLabel.textContent = maxLength - currentLength; // Update the counter

            if (currentLength > maxLength) {
                limitLabel.style.color = 'red'; // Optionally change color if limit exceeded
            } else {
                limitLabel.style.color = '#777'; // Revert to default color
            }
        });
    }
});