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
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format",
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
        description: "Annual cultural extravaganza featuring music, dance, drama, and fashion show by college students.",
        shortDesc: "Music, dance & drama performances",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&auto=format",
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
        description: "Inter-college sports competition including cricket, football, basketball, and athletics.",
        shortDesc: "Cricket, football, basketball & more",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&auto=format",
        category: "Sports",
        registeredCount: 210,
        capacity: 400,
        price: "₹50",
        featured: false
    },
    {
        id: 4,
        title: "Guest Lecture: AI",
        date: "2026-03-10",
        time: "2:00 PM - 4:00 PM",
        venue: "Seminar Hall",
        description: "Distinguished speaker shares insights on artificial intelligence and future career paths.",
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
        description: "24-hour coding marathon to build innovative solutions for real-world problems.",
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
        description: "Networking event with distinguished alumni.",
        shortDesc: "Networking with alumni",
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&auto=format",
        category: "Networking",
        registeredCount: 145,
        capacity: 200,
        price: "Free",
        featured: false
    },
    {
        id: 7,
        title: "Workshop: Web Dev",
        date: "2026-03-18",
        time: "10:00 AM - 4:00 PM",
        venue: "Lab 301",
        description: "Hands-on workshop on MERN stack development.",
        shortDesc: "MERN Stack Workshop",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format",
        category: "Workshop",
        registeredCount: 45,
        capacity: 50,
        price: "₹200",
        featured: false
    },
    {
        id: 8,
        title: "Startup Pitch",
        date: "2026-03-28",
        time: "11:00 AM - 5:00 PM",
        venue: "Innovation Hub",
        description: "Pitch your startup ideas to investors.",
        shortDesc: "Pitch to investors",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format",
        category: "Workshop",
        registeredCount: 23,
        capacity: 30,
        price: "Free",
        featured: false
    }
];

// Gallery images data
const galleryImages = [
    { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format", caption: "Tech Fest 2025 - Coding Competition" },
    { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format", caption: "Cultural Night 2025 - Dance Performance" },
    { src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&auto=format", caption: "Sports Meet 2025 - Football Final" },
    { src: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?w=600&auto=format", caption: "Hackathon 2025 - Winners" },
    { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&auto=format", caption: "Alumni Meet 2025" },
    { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format", caption: "Workshop - Web Development" }
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
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const fabButton = document.getElementById('fabButton');
const closeLightbox = document.querySelector('.close-lightbox');

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

function getDaysRemaining(eventDate) {
    const today = new Date();
    const event = new Date(eventDate);
    const diffTime = event - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

function getTimeRemaining(eventDate) {
    const total = new Date(eventDate) - new Date();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
}

// ===== UPDATE COUNTDOWN =====
function updateCountdown() {
    const featuredEvent = eventsData.find(e => e.featured) || eventsData[0];
    const timeRemaining = getTimeRemaining(featuredEvent.date);
    
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (daysEl && hoursEl && minutesEl && secondsEl) {
        daysEl.textContent = String(timeRemaining.days).padStart(2, '0');
        hoursEl.textContent = String(timeRemaining.hours).padStart(2, '0');
        minutesEl.textContent = String(timeRemaining.minutes).padStart(2, '0');
        secondsEl.textContent = String(timeRemaining.seconds).padStart(2, '0');
        
        if (timeRemaining.total <= 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
        }
    }
}

// ===== RENDER EVENT CARDS =====
function renderEventCards(filter = 'all') {
    if (!eventGrid) return;
    
    eventGrid.innerHTML = '';
    
    const filteredEvents = filter === 'all' 
        ? eventsData 
        : eventsData.filter(event => event.category.toLowerCase() === filter.toLowerCase());
    
    filteredEvents.forEach(event => {
        const daysLeft = getDaysRemaining(event.date);
        const card = document.createElement('div');
        card.className = 'event-card';
        card.dataset.id = event.id;
        card.dataset.category = event.category.toLowerCase();
        
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

// ===== OPEN EVENT DETAIL MODAL =====
function openEventDetail(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event || !modalContent) return;
    
    currentEventId = eventId;
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
                        <strong>Seats</strong>
                        <span>${event.capacity - event.registeredCount} left</span>
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
    
    document.getElementById('registerFromDetailBtn')?.addEventListener('click', () => {
        eventModal.classList.remove('active');
        openMultiStepRegisterModal(event.id);
    });
    
    document.getElementById('shareEventBtn')?.addEventListener('click', () => {
        alert('Share feature coming soon!');
    });
}

// ===== MULTI-STEP REGISTRATION =====
function openMultiStepRegisterModal(eventId = null) {
    if (!registerModal) return;
    
    // Reset to step 1
    document.querySelectorAll('.step-content').forEach(el => el.style.display = 'none');
    if (step1) step1.style.display = 'block';
    
    // Update step indicators
    document.querySelectorAll('.step').forEach((step, index) => {
        if (index === 0) step.classList.add('active');
        else step.classList.remove('active');
    });
    
    renderEventSelectionGrid();
    
    if (eventId) {
        selectedEventForRegistration = eventsData.find(e => e.id === eventId);
        document.querySelectorAll('.event-select-card').forEach(card => {
            if (card.dataset.id == eventId) {
                card.classList.add('selected');
            }
        });
        if (toStep2) toStep2.disabled = false;
    }
    
    registerModal.classList.add('active');
}

function renderEventSelectionGrid() {
    if (!eventSelectionGrid) return;
    
    eventSelectionGrid.innerHTML = '';
    eventsData.forEach(event => {
        const card = document.createElement('div');
        card.className = `event-select-card ${selectedEventForRegistration?.id === event.id ? 'selected' : ''}`;
        card.dataset.id = event.id;
        
        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}" loading="lazy">
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
            if (toStep2) toStep2.disabled = false;
        });
        
        eventSelectionGrid.appendChild(card);
    });
}

// Step Navigation
if (toStep2) {
    toStep2.addEventListener('click', () => {
        if (!selectedEventForRegistration) return;
        
        if (step1) step1.style.display = 'none';
        if (step2) step2.style.display = 'block';
        
        document.querySelectorAll('.step')[0]?.classList.remove('active');
        document.querySelectorAll('.step')[1]?.classList.add('active');
    });
}

if (backToStep1) {
    backToStep1.addEventListener('click', () => {
        if (step2) step2.style.display = 'none';
        if (step1) step1.style.display = 'block';
        
        document.querySelectorAll('.step')[1]?.classList.remove('active');
        document.querySelectorAll('.step')[0]?.classList.add('active');
    });
}

if (toStep3) {
    toStep3.addEventListener('click', () => {
        if (validateStep2()) {
            const summary = document.getElementById('registrationSummary');
            if (summary && selectedEventForRegistration) {
                summary.innerHTML = `
                    <div class="summary-item">
                        <span>Event:</span>
                        <strong>${selectedEventForRegistration.title}</strong>
                    </div>
                    <div class="summary-item">
                        <span>Name:</span>
                        <strong>${document.getElementById('fullName')?.value || ''}</strong>
                    </div>
                    <div class="summary-item">
                        <span>Email:</span>
                        <strong>${document.getElementById('email')?.value || ''}</strong>
                    </div>
                    <div class="summary-item">
                        <span>Phone:</span>
                        <strong>${document.getElementById('phone')?.value || ''}</strong>
                    </div>
                    <div class="summary-item">
                        <span>College ID:</span>
                        <strong>${document.getElementById('collegeId')?.value || ''}</strong>
                    </div>
                `;
            }
            
            if (step2) step2.style.display = 'none';
            if (step3) step3.style.display = 'block';
            
            document.querySelectorAll('.step')[1]?.classList.remove('active');
            document.querySelectorAll('.step')[2]?.classList.add('active');
        }
    });
}

if (backToStep2) {
    backToStep2.addEventListener('click', () => {
        if (step3) step3.style.display = 'none';
        if (step2) step2.style.display = 'block';
        
        document.querySelectorAll('.step')[2]?.classList.remove('active');
        document.querySelectorAll('.step')[1]?.classList.add('active');
    });
}

function validateStep2() {
    let isValid = true;
    clearErrors();
    
    const fullName = document.getElementById('fullName')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const phone = document.getElementById('phone')?.value.trim() || '';
    const collegeId = document.getElementById('collegeId')?.value.trim() || '';
    const terms = document.getElementById('terms')?.checked || false;
    
    if (fullName.length < 3) {
        const nameError = document.getElementById('nameError');
        if (nameError) nameError.textContent = 'Name must be at least 3 characters';
        isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        const emailError = document.getElementById('emailError');
        if (emailError) emailError.textContent = 'Enter a valid email address';
        isValid = false;
    }
    
    const phoneRegex = /^[\d\s\-+()]{10,15}$/;
    if (!phoneRegex.test(phone)) {
        const phoneError = document.getElementById('phoneError');
        if (phoneError) phoneError.textContent = 'Enter a valid phone number (10-15 digits)';
        isValid = false;
    }
    
    if (collegeId.length < 4) {
        const collegeIdError = document.getElementById('collegeIdError');
        if (collegeIdError) collegeIdError.textContent = 'Enter a valid College ID';
        isValid = false;
    }
    
    if (!terms) {
        const termsError = document.getElementById('termsError');
        if (termsError) termsError.textContent = 'You must agree to the terms';
        isValid = false;
    }
    
    return isValid;
}

// ===== RENDER GALLERY =====
function renderGallery() {
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    galleryImages.forEach((img, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        item.innerHTML = `
            <img src="${img.src}" alt="${img.caption}" loading="lazy">
            <div class="gallery-caption">${img.caption}</div>
        `;
        
        item.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(item);
    });
}

function openLightbox(index) {
    if (!lightbox) return;
    
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    
    if (lightboxImg) lightboxImg.src = galleryImages[index].src;
    if (lightboxCaption) lightboxCaption.textContent = galleryImages[index].caption;
    lightbox.classList.add('active');
}

// ===== RENDER ADMIN EVENT LIST =====
function renderAdminEventList() {
    if (!eventManagementList) return;
    
    eventManagementList.innerHTML = '';
    eventsData.forEach(event => {
        const item = document.createElement('div');
        item.className = 'event-item';
        item.innerHTML = `
            ${event.title} <span>${event.registeredCount}/${event.capacity}</span>
        `;
        eventManagementList.appendChild(item);
    });
}

// ===== FILTER EVENT CARDS =====
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        currentFilter = btn.dataset.filter || 'all';
        renderEventCards(currentFilter);
    });
});

// ===== CLOSE MODALS =====
if (closeModal) {
    closeModal.addEventListener('click', () => {
        eventModal.classList.remove('active');
    });
}

if (closeRegisterModal) {
    closeRegisterModal.addEventListener('click', () => {
        registerModal.classList.remove('active');
        if (registrationForm) registrationForm.reset();
        clearErrors();
        selectedEventForRegistration = null;
        
        document.querySelectorAll('.step-content').forEach(el => el.style.display = 'none');
        if (step1) step1.style.display = 'block';
        document.querySelectorAll('.step').forEach((step, index) => {
            if (index === 0) step.classList.add('active');
            else step.classList.remove('active');
        });
    });
}

window.addEventListener('click', (e) => {
    if (e.target === eventModal) {
        eventModal.classList.remove('active');
    }
    if (e.target === registerModal) {
        registerModal.classList.remove('active');
        if (registrationForm) registrationForm.reset();
        clearErrors();
    }
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

if (closeLightbox) {
    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
}

// ===== REGISTRATION SUBMISSION =====
if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateStep2()) {
            if (successToast) {
                successToast.classList.add('show');
                setTimeout(() => {
                    successToast.classList.remove('show');
                }, 3000);
            }
            
            if (selectedEventForRegistration) {
                selectedEventForRegistration.registeredCount++;
            }
            
            registerModal.classList.remove('active');
            registrationForm.reset();
            selectedEventForRegistration = null;
            
            renderEventCards(currentFilter);
            renderAdminEventList();
            
            // Reset steps
            document.querySelectorAll('.step-content').forEach(el => el.style.display = 'none');
            if (step1) step1.style.display = 'block';
            document.querySelectorAll('.step').forEach((step, index) => {
                if (index === 0) step.classList.add('active');
                else step.classList.remove('active');
            });
        }
    });
}

// ===== ADD EVENT BUTTON =====
if (addEventBtn) {
    addEventBtn.addEventListener('click', () => {
        alert('Admin: Create new event form would open here.');
    });
}

// ===== MOBILE MENU =====
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// ===== FAB BUTTON =====
if (fabButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            fabButton.classList.add('visible');
        } else {
            fabButton.classList.remove('visible');
        }
    });
    
    fabButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
        
        if (navLinks) navLinks.classList.remove('active');
    });
});

// ===== PARTICLES EFFECT =====
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

// ===== PRELOADER =====
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('hidden');
    }
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    renderEventCards();
    renderGallery();
    renderAdminEventList();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    createParticles();
    
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }
});

// ===== EXPOSE GLOBALLY =====
window.openEventDetail = openEventDetail;
window.openMultiStepRegisterModal = openMultiStepRegisterModal;