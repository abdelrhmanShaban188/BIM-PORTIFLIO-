document.addEventListener('DOMContentLoaded', () => {
    const { projects, categories, services, personalInfo } = portfolioData;

    // 1. Menu Controls
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
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Populate Static Data
    const aboutText = document.querySelector('#about-text');
    if (aboutText) aboutText.innerHTML = personalInfo.about;

    // 3. Render Services
    const servicesGrid = document.querySelector('#services-grid');
    if (servicesGrid) {
        services.forEach(s => {
            const card = document.createElement('div');
            card.className = 'service-card';
            card.innerHTML = `
                <div class="s-icon"><i class="fa-solid fa-microchip"></i></div>
                <h3 class="s-title">${s.title}</h3>
                <p class="modal-desc" style="font-size:0.9rem;">${s.details}</p>
            `;
            servicesGrid.appendChild(card);
            
            gsap.from(card, {
                y: 30,
                opacity: 0,
                duration: 0.6,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%'
                }
            });
        });
    }

    // 4. Render Filters
    const filterTabs = document.querySelector('#filter-tabs');
    if (filterTabs) {
        categories.forEach((cat, index) => {
            const btn = document.createElement('button');
            btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
            btn.textContent = cat.name;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderProjects(cat.id);
            });
            filterTabs.appendChild(btn);
        });
    }

    // 5. Render Projects
    const projectsGrid = document.querySelector('#projects-grid');
    function renderProjects(categoryId = 'all') {
        projectsGrid.innerHTML = '';
        const filtered = categoryId === 'all' ? projects : projects.filter(p => p.category === categoryId);

        filtered.forEach(p => {
            const card = document.createElement('div');
            card.className = `project-card ${p.badge ? 'software-card' : ''}`;
            const mainImg = p.images && p.images.length > 0 ? p.images[0] : 'placeholder.png';
            
            card.innerHTML = `
                <img src="${mainImg}" alt="${p.title}" class="project-image">
                <div class="project-info">
                    ${p.badge ? `<span class="p-badge" style="background: var(--accent); color: #fff; padding: 5px 12px; font-size: 0.6rem; font-weight: 900; position: absolute; top: -15px; left: 0; text-transform: uppercase; letter-spacing: 2px;">${p.badge}</span>` : ''}
                    <span class="p-cat">${p.category.toUpperCase()}</span>
                    <h3 class="p-title">${p.title}</h3>
                </div>
            `;

            card.addEventListener('click', () => openModal(p));
            projectsGrid.appendChild(card);
            
            gsap.from(card, {
                scale: 0.9,
                opacity: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 95%'
                }
            });
        });
    }
    renderProjects();

    // 6. Modal / Gallery Logic
    const modal = document.querySelector('#project-modal');
    const closeBtn = document.querySelector('.close-modal');
    const mediaContainer = document.querySelector('#modal-media-container');
    const modalTitle = document.querySelector('#modal-title');
    const modalCat = document.querySelector('#modal-category');
    const modalDetails = document.querySelector('#modal-details');
    const modalMeta = document.querySelector('#modal-meta');
    const modalRef = document.querySelector('#modal-ref-link');

    let currentProject = null;
    let currentImgIndex = 0;

    function openModal(p) {
        currentProject = p;
        currentImgIndex = 0;
        updateModalContent();
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        gsap.from('.modal-content', { scale: 0.9, opacity: 0, duration: 0.4, ease: 'power2.out' });
    }

    function updateModalContent() {
        if (!currentProject) return;

        const media = currentProject.images[currentImgIndex];
        const isVideo = media.toLowerCase().endsWith('.mp4');
        const isYouTube = media.includes('youtube.com') || media.includes('youtu.be');
        const isDrive = media.includes('drive.google.com');

        if (isYouTube) {
            const videoId = media.split('v=')[1] || media.split('/').pop().split('?')[0];
            mediaContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="width:100%; height:100%"></iframe>`;
        } else if (isDrive) {
            const driveId = media.split('/d/')[1].split('/')[0];
            mediaContainer.innerHTML = `<iframe src="https://drive.google.com/file/d/${driveId}/preview" frameborder="0" allow="autoplay" style="width:100%; height:100%"></iframe>`;
        } else if (isVideo) {
            mediaContainer.innerHTML = `<video src="${media}" controls autoplay style="width:100%; height:100%"></video>`;
        } else {
            mediaContainer.innerHTML = `<img src="${media}" alt="${currentProject.title}">`;
        }

        modalTitle.textContent = currentProject.title;
        modalCat.textContent = currentProject.category.toUpperCase();
        modalDetails.innerHTML = currentProject.details;

        // Meta data
        modalMeta.innerHTML = `
            ${currentProject.location ? `<li><span class="meta-label">Location</span><span class="meta-value">${currentProject.location}</span></li>` : ''}
            ${currentProject.consultant ? `<li><span class="meta-label">Consultant</span><span class="meta-value">${currentProject.consultant}</span></li>` : ''}
            ${currentProject.client ? `<li><span class="meta-label">Client</span><span class="meta-value">${currentProject.client}</span></li>` : ''}
        `;

        // Reference link
        if (currentProject.refLink) {
            modalRef.style.display = 'inline-block';
            modalRef.href = currentProject.refLink;
        } else {
            modalRef.style.display = 'none';
        }
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Prev/Next buttons
    document.querySelector('#prev-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        currentImgIndex = (currentImgIndex - 1 + currentProject.images.length) % currentProject.images.length;
        updateModalContent();
    });

    document.querySelector('#next-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        currentImgIndex = (currentImgIndex + 1) % currentProject.images.length;
        updateModalContent();
    });

    // Keyboard & Mouse Scroll controls for modal
    let isScrolling = false;
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                currentImgIndex = (currentImgIndex - 1 + currentProject.images.length) % currentProject.images.length;
                updateModalContent();
            } else if (e.key === 'ArrowRight') {
                currentImgIndex = (currentImgIndex + 1) % currentProject.images.length;
                updateModalContent();
            } else if (e.key === 'Escape') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });

    modal.addEventListener('wheel', (e) => {
        if (isScrolling) return;
        isScrolling = true;
        
        if (e.deltaY > 0) {
            // Scroll Down -> Next
            currentImgIndex = (currentImgIndex + 1) % currentProject.images.length;
        } else {
            // Scroll Up -> Prev
            currentImgIndex = (currentImgIndex - 1 + currentProject.images.length) % currentProject.images.length;
        }
        
        updateModalContent();
        
        setTimeout(() => {
            isScrolling = false;
        }, 500); // 500ms debounce
    });

    // 7. Smooth Scrolling
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Only handle local anchor links starting with # but not just #
            if (href && href.startsWith('#') && href !== "#") {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 50,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Initial Hero reveal
    gsap.from('.hero-content h1', { y: 100, opacity: 0, duration: 1, ease: 'power4.out', delay: 0.2 });
    gsap.from('.hero-content h2', { y: 50, opacity: 0, duration: 1, ease: 'power4.out', delay: 0.4 });
    gsap.from('.hero-content p', { y: 50, opacity: 0, duration: 1, ease: 'power4.out', delay: 0.6 });
    gsap.from('.cta-button', { y: 30, opacity: 0, duration: 1, ease: 'power4.out', delay: 0.8 });
});
