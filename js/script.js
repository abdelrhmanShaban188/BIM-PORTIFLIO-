document.addEventListener('DOMContentLoaded', () => {
    const { personalInfo, skills, projects, categories, services } = portfolioData;

    // 1. Load Personal Information
    const heroName = document.querySelector('#hero-name');
    const heroTitle = document.querySelector('#hero-title');
    const heroDesc = document.querySelector('#hero-desc');
    const contactEmail = document.querySelector('#contact-email');
    const footerName = document.querySelector('#footer-name');

    if (heroName) heroName.innerHTML = personalInfo.name;
    
    // Typing Effect for Title
    if (heroTitle) {
        heroTitle.textContent = '';
        let i = 0;
        const titleText = personalInfo.title;
        function typeWriter() {
            if (i < titleText.length) {
                heroTitle.textContent += titleText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        typeWriter();
    }

    if (heroDesc) heroDesc.innerHTML = personalInfo.about;
    if (contactEmail) contactEmail.href = `mailto:${personalInfo.email}`;

    // Update Overlay & Footer Social Links
    const updateSocials = () => {
        const whatsappPhone = personalInfo.phone.replace(/\D/g, '');
        
        // Footer
        const linkedinBtn = document.querySelector('#link-linkedin');
        const whatsappBtn = document.querySelector('#link-whatsapp');
        const gmailBtn = document.querySelector('#link-gmail');
        
        if (linkedinBtn) { linkedinBtn.href = personalInfo.linkedIn; linkedinBtn.target = "_blank"; }
        if (whatsappBtn) { whatsappBtn.href = `https://wa.me/${whatsappPhone}`; whatsappBtn.target = "_blank"; }
        if (gmailBtn) { gmailBtn.href = `mailto:${personalInfo.email}`; }
        
        // Overlay
        const linkedinOverlay = document.querySelector('#link-linkedin-overlay');
        const whatsappOverlay = document.querySelector('#link-whatsapp-overlay');
        const gmailOverlay = document.querySelector('#link-gmail-overlay');
        
        if (linkedinOverlay) { linkedinOverlay.href = personalInfo.linkedIn; linkedinOverlay.target = "_blank"; }
        if (whatsappOverlay) { whatsappOverlay.href = `https://wa.me/${whatsappPhone}`; whatsappOverlay.target = "_blank"; }
        if (gmailOverlay) { gmailOverlay.href = `mailto:${personalInfo.email}`; }
    };
    updateSocials();

    // 2. Render Skills
    const skillsContainer = document.querySelector('#skills-container');
    if (skillsContainer) {
        skills.forEach(skill => {
            const div = document.createElement('div');
            div.className = 'skill-tag';
            div.textContent = skill;
            skillsContainer.appendChild(div);
        });
    }

    // 3. Render Services
    const servicesGrid = document.querySelector('#services-grid');
    if (servicesGrid) {
        services.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card animate-up';
            card.innerHTML = `
                <div class="service-icon"><i class="fas fa-microchip"></i></div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-desc">${service.details}</p>
            `;
            servicesGrid.appendChild(card);
        });
    }

    // 4. Render Tabs & Projects
    const tabsContainer = document.querySelector('#tabs-container');
    const projectsContainer = document.querySelector('#projects-container');

    if (tabsContainer) {
        categories.forEach((cat, index) => {
            const btn = document.createElement('button');
            btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
            btn.textContent = cat.name;
            btn.dataset.category = cat.id;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderProjects(cat.id);
            });
            tabsContainer.appendChild(btn);
        });
    }

    function renderProjects(filterId = 'all') {
        if (!projectsContainer) return;
        projectsContainer.innerHTML = '';

        let displayList = filterId === 'all' 
            ? projects 
            : projects.filter(p => p.category === filterId);

        displayList.forEach(item => {
            const card = document.createElement('div');
            card.className = 'project-card animate-up';
            card.innerHTML = `
                <img src="${(item.images && item.images.length > 0) ? item.images[0] : 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'}" alt="${item.title}" class="project-image">
                <div class="project-info">
                    <h3 class="project-title">${item.title}</h3>
                    <div class="project-meta">
                        ${item.location || 'BIM PROJECT'} | ${item.consultant || 'ELECTRICAL'}
                        ${item.client ? `<br>Client: ${item.client}` : ''}
                    </div>
                </div>
            `;
            card.addEventListener('click', () => openGallery(item));
            projectsContainer.appendChild(card);
        });
    }
    renderProjects();

    // 5. Gallery Logic
    let currentProject = null;
    let currentGalleryImages = [];
    let currentImgIndex = 0;
    const galleryModal = document.querySelector('#gallery-modal');
    const galleryImage = document.querySelector('#gallery-image');
    const galleryInfo = document.querySelector('#gallery-info');
    const closeGallery = document.querySelector('.close-gallery');

    function openGallery(project) {
        if (!project.images || project.images.length === 0) return;
        currentProject = project;
        currentGalleryImages = project.images;
        currentImgIndex = 0;
        updateGallery(project);
        galleryModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function updateGallery(project) {
        const url = currentGalleryImages[currentImgIndex];
        const isVideo = url.toLowerCase().endsWith('.mp4');
        
        const galleryImage = document.querySelector('#gallery-image');
        const galleryVideo = document.querySelector('#gallery-video');
        
        if (isVideo) {
            galleryImage.style.display = 'none';
            galleryVideo.style.display = 'block';
            galleryVideo.src = url;
            galleryVideo.play();
        } else {
            galleryVideo.style.display = 'none';
            galleryVideo.pause();
            galleryImage.style.display = 'block';
            galleryImage.src = url;
        }

        const refBtn = project.refLink ? `<a href="${project.refLink}" target="_blank" class="gallery-ref-link">View Reference <i class="fas fa-external-link-alt"></i></a>` : '';

        galleryInfo.innerHTML = `
            <h3>${project.title}</h3>
            <p class="gallery-description">${project.details}</p>
            ${refBtn}
            <p class="gallery-counter">${currentImgIndex + 1} / ${currentGalleryImages.length}</p>
        `;
    }

    if (closeGallery) {
        closeGallery.addEventListener('click', () => {
            const galleryVideo = document.querySelector('#gallery-video');
            galleryVideo.pause();
            galleryModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    const switchMedia = () => {
        updateGallery(currentProject);
    };

    document.querySelector('#prev-img').addEventListener('click', (e) => {
        e.stopPropagation();
        currentImgIndex = (currentImgIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
        switchMedia();
    });

    document.querySelector('#next-img').addEventListener('click', (e) => {
        e.stopPropagation();
        currentImgIndex = (currentImgIndex + 1) % currentGalleryImages.length;
        switchMedia();
    });

    galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            const galleryVideo = document.querySelector('#gallery-video');
            galleryVideo.pause();
            galleryModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Mouse wheel navigation for gallery
    let isScrolling = false;
    galleryModal.addEventListener('wheel', (e) => {
        if (isScrolling) return;
        
        isScrolling = true;
        setTimeout(() => { isScrolling = false; }, 400); // 400ms delay to prevent fast scrolling

        if (e.deltaY > 0) {
            // Scroll down -> Next
            currentImgIndex = (currentImgIndex + 1) % currentGalleryImages.length;
        } else {
            // Scroll up -> Prev
            currentImgIndex = (currentImgIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
        }
        
        switchMedia();
        
        e.preventDefault();
    }, { passive: false });

    // 6. Menu Controls
    const menuToggle = document.querySelector('#menu-toggle');
    const menuOverlay = document.querySelector('#menu-overlay');
    const menuLinks = document.querySelectorAll('.menu-link');

    if (menuToggle && menuOverlay) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            document.body.style.overflow = menuOverlay.classList.contains('active') ? 'hidden' : 'auto';
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 7. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
