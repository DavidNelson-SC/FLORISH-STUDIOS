// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 60;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Handle subscription form submission
document.getElementById('subscriptionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        emailConsent: document.querySelector('input[name="emailConsent"]').checked,
        smsConsent: document.querySelector('input[name="smsConsent"]').checked
    };
    
    // Validate form
    if (!formData.name || !formData.email) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Validate phone if SMS consent is checked
    if (formData.smsConsent && !formData.phone) {
        showMessage('Please provide a phone number for SMS updates.', 'error');
        return;
    }
    
    // Simulate form submission (in a real application, this would send data to a server)
    console.log('Subscription data:', formData);
    
    // Show success message
    showMessage('Thank you for subscribing! You\'ll receive updates soon.', 'success');
    
    // Reset form
    this.reset();
});

// Function to show messages
function showMessage(message, type) {
    const messageDiv = document.getElementById('subscribeMessage');
    messageDiv.textContent = message;
    messageDiv.className = `subscribe-message ${type}`;
    
    // Clear message after 5 seconds
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = 'subscribe-message';
    }, 5000);
}

// Add to cart button functionality (placeholder)
document.querySelectorAll('.product-button').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        
        // Animate button
        this.textContent = 'Added!';
        this.style.background = '#4caf50';
        
        // Log to console (in a real app, this would add to cart)
        console.log(`Added to cart: ${productName}`);
        
        // Reset button after 2 seconds
        setTimeout(() => {
            this.textContent = 'Add to Cart';
            this.style.background = '';
        }, 2000);
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});
