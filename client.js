// client.js - Enhanced Interactive functionality for Chitkara University Event Portal

// ===== DATA STORE (Mock Data) =====
const eventsData = [
    {
        id: 1,
        title: "Tech Fest 2026",
        date: "2026-03-15",
        time: "10:00 AM - 6:00 PM",
        venue: "Main Auditorium",
        description: "Annual technical festival with coding competitions, robotics, and workshops from top industry experts including Google and Microsoft engineers.",
        shortDesc: "Coding, robotics & workshops",
        image: "https://www.chitkarauniversity.edu.in/wp-content/uploads/2024/01/build-athon-banner.jpg",
        category: "Technical",
        registeredCount: 156,
        capacity: 300,
        price: "Free",
        featured: true
    },
    {
        id: 2,
        title: "Cultural Night",
        date: "2026-04-20",
        time: "6:00 PM - 10:00 PM",
        venue: "Open Air Theatre",
        description: "Annual cultural extravaganza featuring music, dance, drama, and fashion show by college students. Celebrity judges and exciting performances.",
        shortDesc: "Music, dance & drama performances",
        image: "https://www.chitkara.edu.in/wp-content/uploads/2025/04/Afinity-thumb.jpg",
        category: "Cultural",
        registeredCount: 320,
        capacity: 500,
        price: "₹100",
        featured: false
    },
    {
        id: 3,
        title: "Sports Meet",
        date: "2026-05-05",
        time: "9:00 AM - 5:00 PM",
        venue: "University Sports Complex",
        description: "Inter-college sports competition including cricket, football, basketball, and athletics. Trophies and medals for winners.",
        shortDesc: "Cricket, football, basketball & more",
        image: "https://www.chitkaraschool.in/wp-content/uploads/2025/02/Chitkara-Lit-Fest.jpg",
        category: "Sports",
        registeredCount: 210,
        capacity: 400,
        price: "₹50",
        featured: false
    },
    {
        id: 4,
        title: "Guest Lecture: AI Revolution",
        date: "2026-03-10",
        time: "2:00 PM - 4:00 PM",
        venue: "Seminar Hall",
        description: "Distinguished speaker from industry shares insights on artificial intelligence and future career paths. Interactive Q&A session included.",
        shortDesc: "AI & future careers",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&auto=format",
        category: "Academic",
        registeredCount: 89,
        capacity: 150,
        price: "Free",
        featured: false
    },
    {
        id: 5,
        title: "Hackathon 2026",
        date: "2026-03-25",
        time: "9:00 AM (24 hrs)",
        venue: "CS Department",
        description: "24-hour coding marathon to build innovative solutions for real-world problems. Exciting prizes worth ₹50,000!",
        shortDesc: "24-hour coding challenge",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format",
        category: "Technical",
        registeredCount: 67,
        capacity: 100,
        price: "Free",
        featured: false
    },
    {
        id: 6,
        title: "Alumni Meet",
        date: "2026-04-02",
        time: "5:00 PM onwards",
        venue: "College Lawn",
        description: "Networking event with distinguished alumni. Reconnect and build professional relationships with industry leaders.",
        shortDesc: "Networking with alumni",
        image: "https://www.chitkarauniversity.edu.in/wp-content/uploads/2024/02/Emerge-Fest-thumb.jpg",
        category: "Networking",
        registeredCount: 145,
        capacity: 200,
        price: "Free",
        featured: false
    },
    {
        id: 7,
        title: "Workshop: Web Development",
        date: "2026-03-18",
        time: "10:00 AM - 4:00 PM",
        venue: "Lab 301",
        description: "Hands-on workshop on MERN stack development. Build a complete project by end of day.",
        shortDesc: "MERN Stack Workshop",
        image: "https://www.chitkara.edu.in/wp-content/uploads/2024/11/rangrezz-banner.jpg",
        category: "Workshop",
        registeredCount: 45,
        capacity: 50,
        price: "₹200",
        featured: false
    },
    {
        id: 8,
        title: "Startup Pitch Competition",
        date: "2026-03-28",
        time: "11:00 AM - 5:00 PM",
        venue: "Innovation Hub",
        description: "Pitch your startup ideas to investors. Winner gets incubation support and funding of ₹1 Lakh.",
        shortDesc: "Pitch to investors",
        image: "https://www.chitkara.edu.in/wp-content/uploads/2023/02/litfest-banner.jpg",
        category: "Workshop",
        registeredCount: 23,
        capacity: 30,
        price: "Free",
        featured: false
    }
];

// Gallery images data
const galleryImages = [
    { src: "https://www.chitkara.edu.in/wp-content/uploads/2025/04/Xpect-banner.jpg", caption: "Tech Fest 2025 - Coding Competition" },
    { src: "https://www.chitkara.edu.in/wp-content/uploads/2022/08/cultural-night-banner.jpg", caption: "Cultural Night 2025 - Dance Performance" },
    { src: "https://www.chitkara.edu.in/wp-content/uploads/2024/10/Football-Tournament-banner.jpg", caption: "Sports Meet 2025 - Football Final" },
    { src: "https://www.chitkara.edu.in/wp-content/uploads/2025/09/Protothon-AI-2025-banner.jpg", caption: "Protothon AI Grand Finale at Chitkara University 2025" },
    { src: "https://www.chitkara.edu.in/wp-content/uploads/2025/07/Jazzee-thumb.webp", caption: "Hackathon 2025 - Winners" },
    { src: "https://media.licdn.com/dms/image/v2/D5622AQFQ_M9Y3dqTMQ/feedshare-shrink_800/B56ZsqEjPyJ8Ag-/0/1765937398603?e=2147483647&v=beta&t=AQWqPfvd8TSJOi1zi2S3uWZu1p4UwXtEfJlgL3uLkpM", caption: "Alumni Meet 2025" },
    { src: "https://www.chitkara.edu.in/wp-content/uploads/2018/03/BCA.jpg", caption: "Workshop - Web Development" },
    { src: "https://www.chitkara.edu.in/wp-content/uploads/2024/01/Triumph-banner.jpg", caption: "Startup Pitch Competition" },
];

// ===== DOM ELEMENTS =====
const eventGrid = document.getElementById('eventGrid');
const galleryGrid = document.getElementById('galleryGrid');
const eventModal = document.getElementById('eventModal');
const registerModal = document.getElementById('registerModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const closeRegisterModal = document.getElementById('closeRegisterModal');
const registrationForm = document.getElementById('registrationForm');
const eventSelect = document.getElementById('eventSelect');
const eventManagementList = document.getElementById('eventManagementList');
const addEventBtn = document.getElementById('addEventBtn');
const lightbox = document.getElementById('lightbox');
const filterBtns = document.querySelectorAll('.filter-btn');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const toStep2 = document.getElementById('toStep2');
const toStep3 = document.getElementById('toStep3');
const backToStep1 = document.getElementById('backToStep1');
const backToStep2 = document.getElementById('backToStep2');
const eventSelectionGrid = document.getElementById('eventSelectionGrid');
const successToast = document.getElementById('successToast');

// ===== STATE MANAGEMENT =====
let currentEventId = null;
let selectedEventForRegistration = null;
let currentFilter = 'all';

// ===== UTILITY FUNCTIONS =====
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function formatShortDate(dateString) {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Calculate days remaining
function getDaysRemaining(eventDate) {
    const today = new Date();
    const event = new Date(eventDate);
    const diffTime = event - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Calculate time remaining for countdown
function getTimeRemaining(eventDate) {
    const total = new Date(eventDate) - new Date();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return { total, days, hours, minutes, seconds };
}

// Update countdown timer
function updateCountdown() {
    const featuredEvent = eventsData.find(e => e.featured) || eventsData[0];
    const timeRemaining = getTimeRemaining(featuredEvent.date);
    
    document.getElementById('days').textContent = String(timeRemaining.days).padStart(2, '0');
    document.getElementById('hours').textContent = String(timeRemaining.hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(timeRemaining.minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(timeRemaining.seconds).padStart(2, '0');
    
    if (timeRemaining.total <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// ===== RENDER EVENT CARDS with Filters =====
function renderEventCards(filter = 'all') {
    eventGrid.innerHTML = '';
    
    const filteredEvents = filter === 'all' 
        ? eventsData 
        : eventsData.filter(event => event.category.toLowerCase() === filter.toLowerCase());
    
    filteredEvents.forEach(event => {
        const daysLeft = getDaysRemaining(event.date);
        const card = document.createElement('div');
        card.className = 'event-card';
        card.dataset.id = event.id;
        card.dataset.category = event.category;
        card.setAttribute('data-aos', 'fade-up');
        
        card.innerHTML = `
            <div class="card-img" style="background-image: linear-gradient(0deg, rgba(139,0,0,0.4), rgba(0,0,0,0.2)), url('${event.image}')">
                <span class="card-date"><i class="far fa-calendar-alt"></i> ${formatShortDate(event.date)}</span>
                ${event.price === 'Free' ? '<span class="price-badge free">FREE</span>' : `<span class="price-badge">${event.price}</span>`}
            </div>
            <div class="card-content">
                <h3>${event.title}</h3>
                <p class="card-desc">${event.shortDesc}</p>
                <div class="card-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${event.venue}</span>
                    <span class="countdown-badge ${daysLeft <= 3 ? 'urgent' : ''}">
                        <i class="far fa-clock"></i> ${daysLeft > 0 ? daysLeft + 'd' : 'Today'}
                    </span>
                </div>
                <div class="card-footer">
                    <span class="registered"><i class="fas fa-users"></i> ${event.registeredCount}/${event.capacity}</span>
                    <span class="category-tag ${event.category.toLowerCase()}">${event.category}</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openEventDetail(event.id));
        eventGrid.appendChild(card);
    });
}

// ===== OPEN EVENT DETAIL MODAL (Enhanced) =====
function openEventDetail(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event) return;
    
    currentEventId = eventId;
    const daysLeft = getDaysRemaining(event.date);
    const registrationPercentage = (event.registeredCount / event.capacity) * 100;
    
    modalContent.innerHTML = `
        <div class="event-detail">
            <span class="detail-category ${event.category.toLowerCase()}">${event.category}</span>
            <h2>${event.title}</h2>
            
            <div class="detail-image" style="background-image: url('${event.image}');">
                <div class="image-overlay">
                    <span class="detail-price">${event.price}</span>
                </div>
            </div>
            
            <div class="detail-meta-grid">
                <div class="meta-item">
                    <i class="fas fa-calendar-alt"></i>
                    <div>
                        <strong>Date</strong>
                        <span>${formatDate(event.date)}</span>
                    </div>
                </div>
                <div class="meta-item">
                    <i class="fas fa-clock"></i>
                    <div>
                        <strong>Time</strong>
                        <span>${event.time}</span>
                    </div>
                </div>
                <div class="meta-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <strong>Venue</strong>
                        <span>${event.venue}</span>
                    </div>
                </div>
                <div class="meta-item">
                    <i class="fas fa-users"></i>
                    <div>
                        <strong>Seats Available</strong>
                        <span>${event.capacity - event.registeredCount} / ${event.capacity}</span>
                    </div>
                </div>
            </div>
            
            <div class="registration-progress">
                <div class="progress-header">
                    <span>Registration Filling Fast!</span>
                    <span>${Math.round(registrationPercentage)}% Full</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${registrationPercentage}%"></div>
                </div>
            </div>
            
            <div class="detail-description">
                <h3>About the Event</h3>
                <p>${event.description}</p>
            </div>
            
            <div class="detail-actions">
                <button class="register-btn" id="registerFromDetailBtn">
                    <i class="fas fa-ticket-alt"></i> Register Now
                </button>
                <button class="share-btn" id="shareEventBtn">
                    <i class="fas fa-share-alt"></i> Share
                </button>
            </div>
        </div>
    `;
    
    eventModal.classList.add('active');
    
    document.getElementById('registerFromDetailBtn').addEventListener('click', () => {
        eventModal.classList.remove('active');
        openMultiStepRegisterModal(event.id);
    });
    
    document.getElementById('shareEventBtn').addEventListener('click', () => {
        alert('Share feature coming soon!');
    });
}

// ===== MULTI-STEP REGISTRATION MODAL =====
function openMultiStepRegisterModal(eventId = null) {
    // Reset modal to step 1
    document.querySelectorAll('.step-content').forEach(el => el.style.display = 'none');
    document.getElementById('step1').style.display = 'block';
    
    // Update step indicators
    document.querySelectorAll('.step').forEach((step, index) => {
        if (index === 0) step.classList.add('active');
        else step.classList.remove('active');
    });
    
    // Render event selection grid
    renderEventSelectionGrid();
    
    if (eventId) {
        selectedEventForRegistration = eventsData.find(e => e.id === eventId);
        document.querySelectorAll('.event-select-card').forEach(card => {
            if (card.dataset.id == eventId) {
                card.classList.add('selected');
            }
        });
        document.getElementById('toStep2').disabled = false;
    }
    
    registerModal.classList.add('active');
}

function renderEventSelectionGrid() {
    eventSelectionGrid.innerHTML = '';
    eventsData.forEach(event => {
        const daysLeft = getDaysRemaining(event.date);
        const card = document.createElement('div');
        card.className = `event-select-card ${selectedEventForRegistration?.id === event.id ? 'selected' : ''}`;
        card.dataset.id = event.id;
        
        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="event-select-info">
                <h4>${event.title}</h4>
                <p><i class="fas fa-calendar"></i> ${formatShortDate(event.date)}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${event.venue}</p>
                <span class="event-select-price">${event.price}</span>
            </div>
            <div class="event-select-check">
                <i class="fas fa-check-circle"></i>
            </div>
        `;
        
        card.addEventListener('click', () => {
            document.querySelectorAll('.event-select-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedEventForRegistration = eventsData.find(e => e.id == event.id);
            document.getElementById('toStep2').disabled = false;
        });
        
        eventSelectionGrid.appendChild(card);
    });
}

// Step Navigation
document.getElementById('toStep2')?.addEventListener('click', () => {
    if (!selectedEventForRegistration) return;
    
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    
    // Update step indicators
    document.querySelectorAll('.step')[0].classList.remove('active');
    document.querySelectorAll('.step')[1].classList.add('active');
    
    // Pre-fill event in dropdown if exists
    if (eventSelect) {
        eventSelect.value = selectedEventForRegistration.id;
    }
});

document.getElementById('backToStep1')?.addEventListener('click', () => {
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
    
    document.querySelectorAll('.step')[1].classList.remove('active');
    document.querySelectorAll('.step')[0].classList.add('active');
});

document.getElementById('toStep3')?.addEventListener('click', () => {
    if (validateStep2()) {
        // Populate summary
        const summary = document.getElementById('registrationSummary');
        summary.innerHTML = `
            <div class="summary-item">
                <span>Event:</span>
                <strong>${selectedEventForRegistration.title}</strong>
            </div>
            <div class="summary-item">
                <span>Name:</span>
                <strong>${document.getElementById('fullName').value}</strong>
            </div>
            <div class="summary-item">
                <span>Email:</span>
                <strong>${document.getElementById('email').value}</strong>
            </div>
            <div class="summary-item">
                <span>Phone:</span>
                <strong>${document.getElementById('phone').value}</strong>
            </div>
            <div class="summary-item">
                <span>College ID:</span>
                <strong>${document.getElementById('collegeId').value}</strong>
            </div>
            <div class="summary-item">
                <span>Department:</span>
                <strong>${document.getElementById('department').value || 'Not specified'}</strong>
            </div>
        `;
        
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step3').style.display = 'block';
        
        document.querySelectorAll('.step')[1].classList.remove('active');
        document.querySelectorAll('.step')[2].classList.add('active');
    }
});

document.getElementById('backToStep2')?.addEventListener('click', () => {
    document.getElementById('step3').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    
    document.querySelectorAll('.step')[2].classList.remove('active');
    document.querySelectorAll('.step')[1].classList.add('active');
});

function validateStep2() {
    let isValid = true;
    clearErrors();
    
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const collegeId = document.getElementById('collegeId').value.trim();
    const terms = document.getElementById('terms').checked;
    
    if (fullName.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters';
        isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address';
        isValid = false;
    }
    
    const phoneRegex = /^[\d\s\-+()]{10,15}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Enter a valid phone number (10-15 digits)';
        isValid = false;
    }
    
    if (collegeId.length < 4) {
        document.getElementById('collegeIdError').textContent = 'Enter a valid College ID';
        isValid = false;
    }
    
    if (!terms) {
        document.getElementById('termsError').textContent = 'You must agree to the terms';
        isValid = false;
    }
    
    return isValid;
}

// ===== RENDER GALLERY with Lightbox =====
function renderGallery() {
    galleryGrid.innerHTML = '';
    galleryImages.forEach((img, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-aos', 'zoom-in');
        item.setAttribute('data-index', index);
        
        item.innerHTML = `
            <img src="${img.src}" alt="${img.caption}" loading="lazy">
            <div class="gallery-caption">${img.caption}</div>
        `;
        
        item.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(item);
    });
}

function openLightbox(index) {
    const lightbox = document.querySelector('.lightbox-modal');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    
    lightboxImg.src = galleryImages[index].src;
    lightboxCaption.textContent = galleryImages[index].caption;
    lightbox.classList.add('active');
}

// Close lightbox
document.querySelector('.close-lightbox')?.addEventListener('click', () => {
    document.querySelector('.lightbox-modal').classList.remove('active');
});

// ===== RENDER ADMIN EVENT MANAGEMENT LIST =====
function renderAdminEventList() {
    eventManagementList.innerHTML = '';
    eventsData.forEach(event => {
        const registrationPercentage = (event.registeredCount / event.capacity) * 100;
        const item = document.createElement('div');
        item.className = 'manage-event-item';
        item.innerHTML = `
            <div class="event-info">
                <span class="event-name"><i class="fas fa-calendar"></i> ${event.title}</span>
                <span class="event-stats">${event.registeredCount}/${event.capacity}</span>
            </div>
            <div class="event-progress-small">
                <div class="progress-bar-small" style="width: ${registrationPercentage}%"></div>
            </div>
            <span class="event-actions">
                <i class="fas fa-edit" title="Edit" onclick="alert('Edit ${event.title} (Mock)')"></i>
                <i class="fas fa-trash-alt" title="Delete" style="color: #d32f2f;" onclick="alert('Delete ${event.title} (Mock)')"></i>
                <i class="fas fa-eye" title="View" onclick="openEventDetail(${event.id})"></i>
            </span>
        `;
        eventManagementList.appendChild(item);
    });
}

// ===== FORM VALIDATION (Original) =====
function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
}

// ===== REGISTRATION SUBMISSION (Enhanced) =====
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateStep2()) {
        // Show success toast
        successToast.classList.add('show');
        setTimeout(() => {
            successToast.classList.remove('show');
        }, 3000);
        
        // Update registered count
        if (selectedEventForRegistration) {
            selectedEventForRegistration.registeredCount++;
        }
        
        // Close modal
        registerModal.classList.remove('active');
        
        // Reset form
        registrationForm.reset();
        selectedEventForRegistration = null;
        
        // Refresh displays
        renderEventCards(currentFilter);
        renderAdminEventList();
    }
});

// ===== FILTER EVENT CARDS =====
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter events
        currentFilter = btn.dataset.filter;
        renderEventCards(currentFilter);
    });
});

// ===== CLOSE MODALS =====
closeModal.addEventListener('click', () => {
    eventModal.classList.remove('active');
});

closeRegisterModal.addEventListener('click', () => {
    registerModal.classList.remove('active');
    registrationForm.reset();
    clearErrors();
    selectedEventForRegistration = null;
    
    // Reset steps
    document.querySelectorAll('.step-content').forEach(el => el.style.display = 'none');
    document.getElementById('step1').style.display = 'block';
    document.querySelectorAll('.step').forEach((step, index) => {
        if (index === 0) step.classList.add('active');
        else step.classList.remove('active');
    });
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === eventModal) {
        eventModal.classList.remove('active');
    }
    if (e.target === registerModal) {
        registerModal.classList.remove('active');
        registrationForm.reset();
        clearErrors();
    }
});

// ===== ADD EVENT BUTTON MOCK =====
addEventBtn.addEventListener('click', () => {
    alert('Admin: Create new event form would open here.');
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    // Render all sections
    renderEventCards();
    renderGallery();
    renderAdminEventList();
    
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Smooth scroll for navigation
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            // Update active class
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu if open
            document.getElementById('navLinks').classList.remove('active');
        });
    });
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            document.getElementById('navLinks').classList.toggle('active');
        });
    }
    
    // Particles effect (simple version)
    createParticles();
});

// Simple particle effect for hero section
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.width = Math.random() * 10 + 5 + 'px';
        particle.style.height = particle.style.width;
        particlesContainer.appendChild(particle);
    }
}

// Expose functions globally for onclick events
window.openEventDetail = openEventDetail;
window.openRegisterModal = openMultiStepRegisterModal;