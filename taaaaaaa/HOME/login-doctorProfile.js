document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            const bars = document.querySelectorAll('.bar');
            if (navLinks.classList.contains('active')) {
                bars[0].style.transform = 'translateY(8px) rotate(45deg)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    const bookingForm = document.getElementById('booking-form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const selectedTime = document.querySelector('input[name="appointment_time"]:checked');

            if (selectedTime) {
                const timeText = selectedTime.nextElementSibling.nextElementSibling.textContent;

                alert(`Appointment booking initiated for ${timeText}.\nRedirecting to payment gateway...`);

            }
        });
    }
    const timeRadios = document.querySelectorAll('.time-radio');

    timeRadios.forEach(radioLabel => {
        const input = radioLabel.querySelector('input');

        if (input.checked) {
            radioLabel.style.borderColor = 'var(--primary-color)';
            radioLabel.style.backgroundColor = 'rgba(15, 61, 43, 0.02)';
        }

        input.addEventListener('change', () => {

            timeRadios.forEach(lbl => {
                lbl.style.borderColor = '#e1e4e8';
                lbl.style.backgroundColor = 'transparent';
            });


            if (input.checked) {
                radioLabel.style.borderColor = 'var(--primary-color)';
                radioLabel.style.backgroundColor = 'rgba(15, 61, 43, 0.02)';
            }
        });
    });
});

// Doctor Profile Dynamic Loading
document.addEventListener("DOMContentLoaded", () => {
    // Only run if we are on the doctor profile page
    if (!document.querySelector('.profile-header')) return;

    const doctorsData = {
        "1": {
            avatar: "DSJ",
            name: "Dr. Sarah Johnson",
            specialty: "Cardiologist",
            rating: "4.9 (234 reviews)",
            location: "New York, NY",
            experience: "15 years experience",
            about: "Dr. Sarah Johnson is a board-certified cardiologist with extensive experience in treating heart conditions. She specializes in preventive cardiology and has helped thousands of patients maintain healthy hearts.",
            education: "MD from Harvard Medical School",
            experienceDetail: "15 years of professional experience in cardiologist"
        },
        "2": {
            avatar: "DMC",
            name: "Dr. Michael Chen",
            specialty: "Pediatrician",
            rating: "4.8 (189 reviews)",
            location: "New York, NY",
            experience: "12 years experience",
            about: "Dr. Michael Chen is a dedicated pediatrician who focuses on the physical, emotional, and social health of children. He aims to ensure all children receive compassionate and comprehensive medical care.",
            education: "MD from Johns Hopkins University",
            experienceDetail: "12 years of professional experience in pediatrics"
        },
        "3": {
            avatar: "DER",
            name: "Dr. Emily Rodriguez",
            specialty: "Dermatologist",
            rating: "4.9 (312 reviews)",
            location: "New York, NY",
            experience: "10 years experience",
            about: "Dr. Emily Rodriguez is a highly skilled dermatologist focusing on medical and cosmetic dermatology. She provides personalized skin care treatments to help patients achieve and maintain healthy skin.",
            education: "MD from Stanford University",
            experienceDetail: "10 years of professional experience in dermatology"
        },
        "4": {
            avatar: "DJW",
            name: "Dr. James Wilson",
            specialty: "Orthopedic Surgeon",
            rating: "4.7 (156 reviews)",
            location: "New York, NY",
            experience: "18 years experience",
            about: "Dr. James Wilson specializes in orthopedic surgery, dealing with conditions involving the musculoskeletal system. He is an expert in joint replacement and sports medicine.",
            education: "MD from Yale School of Medicine",
            experienceDetail: "18 years of professional experience in orthopedic surgery"
        },
        "5": {
            avatar: "DLP",
            name: "Dr. Lisa Patel",
            specialty: "Psychiatrist",
            rating: "4.9 (267 reviews)",
            location: "New York, NY",
            experience: "14 years experience",
            about: "Dr. Lisa Patel is an empathetic psychiatrist providing comprehensive mental health care. She advocates for holistic approaches combined with evidence-based treatments to improve patient well-being.",
            education: "MD from University of Pennsylvania",
            experienceDetail: "14 years of professional experience in psychiatry"
        },
        "6": {
            avatar: "DRK",
            name: "Dr. Robert Kim",
            specialty: "General Practitioner",
            rating: "4.8 (412 reviews)",
            location: "New York, NY",
            experience: "20 years experience",
            about: "Dr. Robert Kim is a highly experienced general practitioner dedicated to family medicine. He emphasizes preventive care and maintains a broad clinical perspective to address various health concerns.",
            education: "MD from University of California, San Francisco",
            experienceDetail: "20 years of professional experience in general practice"
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    let doctorId = urlParams.get('id');

    // Default to 1 if no id is passed or invalid id
    if (!doctorId || !doctorsData[doctorId]) {
        doctorId = "1";
    }

    const doc = doctorsData[doctorId];

    // Update Header Avatar
    const avatarEl = document.querySelector('.header-container .avatar');
    if (avatarEl) avatarEl.textContent = doc.avatar;

    // Update Name
    const nameEl = document.querySelector('.doctor-info h1');
    if (nameEl) nameEl.textContent = doc.name;

    // Update Specialty
    const specialtyEl = document.querySelector('.doctor-info .specialty');
    if (specialtyEl) specialtyEl.textContent = doc.specialty;

    // Update Meta Spans (Rating, Location, Experience)
    // We must preserve the SVGs!
    const metaSpans = document.querySelectorAll('.doctor-info .meta span');
    if (metaSpans.length >= 3) {
        metaSpans[0].innerHTML = metaSpans[0].querySelector('svg').outerHTML + " " + doc.rating;
        metaSpans[1].innerHTML = metaSpans[1].querySelector('svg').outerHTML + " " + doc.location;
        metaSpans[2].innerHTML = metaSpans[2].querySelector('svg').outerHTML + " " + doc.experience;
    }

    // Update About
    const aboutEl = document.querySelector('.card-about p');
    if (aboutEl) aboutEl.textContent = doc.about;

    // Update Education
    const eduEl = document.querySelector('.card-education p');
    if (eduEl) eduEl.textContent = doc.education;

    // Update Experience block
    const expEl = document.querySelector('.card-experience p');
    if (expEl) expEl.textContent = doc.experienceDetail;
});
