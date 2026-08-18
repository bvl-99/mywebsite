<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    let karaokeProgress = $state(0);
    let karaokeContainer = $state<HTMLElement | undefined>(undefined);

    const aboutText =
        "I specialize in building secure, scalable software and robust web applications. With a strong foundation in computer science and network security, I focus on bridging the gap between clean, efficient code and resilient digital infrastructure, delivering solutions that are both highly performant and highly secure.";

    const words = aboutText.split(' ');

    let observer: IntersectionObserver | undefined;

    function handleScroll(): void {
        if (!karaokeContainer) return;

        const rect = karaokeContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const start = windowHeight * 0.85;
        const end = windowHeight * 0.35;

        const progress = (start - rect.top) / (start - end);

        karaokeProgress = Math.max(0, Math.min(1, progress));
    }

    onMount(() => {
        const jQuery = (window as any).jQuery;
        const Typed = (window as any).Typed;

        if (jQuery) {
            "use strict";

            jQuery(window).scroll(function (this: any) {
                if (jQuery(this).scrollTop() > 200) {
                    jQuery('.navbar').fadeIn('slow').css('display', 'flex');
                } else {
                    jQuery('.navbar').fadeOut('slow').css('display', 'none');
                }
            });

            jQuery(".navbar-nav a").on('click', function (this: any, event: any) {
                if (this.hash !== "") {
                    event.preventDefault();

                    jQuery('html, body').animate(
                        {
                            scrollTop: jQuery(this.hash).offset().top - 45
                        },
                        1500,
                        'easeInOutExpo'
                    );

                    if (jQuery(this).parents('.navbar-nav').length) {
                        jQuery('.navbar-nav .active').removeClass('active');
                        jQuery(this).closest('a').addClass('active');
                    }
                }
            });

            if (jQuery('.typed-text-output').length == 1 && Typed) {
                const typed_strings = jQuery('.typed-text').text();

                new Typed('.typed-text-output', {
                    strings: typed_strings.split(', '),
                    typeSpeed: 100,
                    backSpeed: 20,
                    smartBackspace: false,
                    loop: true
                });
            }

            let videoSrc: string = '';

            jQuery('.btn-play').click(function (this: any) {
                videoSrc = jQuery(this).data("src");
            });

            jQuery('#videoModal').on('shown.bs.modal', function () {
                if (videoSrc) {
                    jQuery("#video").attr(
                        'src',
                        videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
                    );
                }
            });

            jQuery('#videoModal').on('hide.bs.modal', function () {
                jQuery("#video").attr('src', videoSrc);
            });

            jQuery(window).scroll(function (this: any) {
                if (jQuery(this).scrollTop() > 100) {
                    jQuery('.scroll-to-bottom').fadeOut('slow');
                } else {
                    jQuery('.scroll-to-bottom').fadeIn('slow');
                }
            });

            const portfolioIsotope = jQuery('.portfolio-container').isotope({
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            });

            jQuery('#portfolio-flters li').on('click', function (this: any) {
                jQuery("#portfolio-flters li").removeClass('active');
                jQuery(this).addClass('active');

                portfolioIsotope.isotope({
                    filter: jQuery(this).data('filter')
                });
            });

            jQuery(window).scroll(function (this: any) {
                if (jQuery(this).scrollTop() > 200) {
                    jQuery('.back-to-top').fadeIn('slow');
                } else {
                    jQuery('.back-to-top').fadeOut('slow');
                }
            });

            jQuery('.back-to-top').click(function () {
                jQuery('html, body').animate(
                    {
                        scrollTop: 0
                    },
                    1500,
                    'easeInOutExpo'
                );

                return false;
            });

            if (jQuery(".testimonial-carousel").length) {
                jQuery(".testimonial-carousel").owlCarousel({
                    autoplay: true,
                    smartSpeed: 1500,
                    dots: true,
                    loop: true,
                    items: 1
                });
            }

            if (jQuery('#home').length) {
                jQuery('#home').ripples({
                    resolution: 512,
                    dropRadius: 16,
                    perturbance: 0.01
                });
            }
        }

        observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer?.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        document
            .querySelectorAll('.animate-on-scroll, .timeline-anim')
            .forEach((el: Element) => {
                observer?.observe(el);
            });

        window.addEventListener('scroll', handleScroll);
        handleScroll();
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', handleScroll);
        }

        observer?.disconnect();
    });

    let name = $state('');
    let email = $state('');
    let subject = $state('');
    let message = $state('');

    let errors = $state({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    function validateEmail(value: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function validateName(): void {
        const value = name.trim();

        if (!value) {
            errors.name = 'Please enter your name.';
        } else if (value.length < 2) {
            errors.name = 'Your name must contain at least 2 characters.';
        } else {
            errors.name = '';
        }
    }

    function validateEmailField(): void {
        const value = email.trim();

        if (!value) {
            errors.email = 'Please enter your email address.';
        } else if (!validateEmail(value)) {
            errors.email =
                'Please enter a valid email address, such as jane@example.com.';
        } else {
            errors.email = '';
        }
    }

    function validateSubject(): void {
        const value = subject.trim();

        if (!value) {
            errors.subject = 'Please enter a subject.';
        } else if (value.length < 3) {
            errors.subject =
                'The subject must contain at least 3 characters.';
        } else {
            errors.subject = '';
        }
    }

    function validateMessage(): void {
        const value = message.trim();

        if (!value) {
            errors.message = 'Please enter a message.';
        } else if (value.length < 10) {
            errors.message =
                'Your message must contain at least 10 characters.';
        } else {
            errors.message = '';
        }
    }

    function validateForm(event: SubmitEvent): void {
        validateName();
        validateEmailField();
        validateSubject();
        validateMessage();

        const hasErrors = Object.values(errors).some(
            (error: string) => error !== ''
        );

        if (hasErrors) {
            event.preventDefault();

            if (errors.name) {
                document.getElementById('name')?.focus();
            } else if (errors.email) {
                document.getElementById('email')?.focus();
            } else if (errors.subject) {
                document.getElementById('subject')?.focus();
            } else if (errors.message) {
                document.getElementById('message')?.focus();
            }
        }
    }
</script>

<nav class="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
    <a href="/" class="navbar-brand ml-lg-3">
        <h1 class="m-0 display-5">
            <span class="text-primary">v</span>Bordea
        </h1>
    </a>

    <button
        type="button"
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-label="Toggle navigation"
    >
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse px-lg-3" id="navbarCollapse">
        <div class="navbar-nav m-auto py-0">
            <a href="#home" class="nav-item nav-link active">Home</a>
            <a href="#about" class="nav-item nav-link">About</a>
            <a href="#qualification" class="nav-item nav-link">Education</a>
            <a href="#portfolio" class="nav-item nav-link">Portfolio</a>
            <a href="#skill" class="nav-item nav-link">Skills</a>
            <a href="#service" class="nav-item nav-link">Services</a>
            <a href="#contact" class="nav-item nav-link">Contact</a>
        </div>

        <a
            href="assets/docs/cv.pdf"
            class="btn btn-outline-primary d-none d-lg-block"
            style="display: block; max-width: 200px;"
            download="Valentin - CV.pdf"
        >
            Get CV
        </a>
    </div>
</nav>

<div
    class="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
    id="home"
    style="min-height: 100vh;"
>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                <div class="profile-circle d-flex justify-content-center">
                    <div class="hero-image-wrapper">
                        <img
                            id="profile-photo"
                            class="hero-profile-image"
                            src="assets/img/profile.webp"
                            alt="Avatar"
                        />
                    </div>
                </div>
            </div>

            <div class="col-lg-7 text-center text-lg-left">
                <h3 class="text-white font-weight-normal mb-3">
                    I'm
                </h3>

                <h1
                    class="display-3 text-uppercase mb-2"
                    style="-webkit-text-stroke: 1px #ffffff; line-height: 0.9;"
                >
                    <span class="text-white">
                        Liviu-Valentin Bordea
                    </span>
                </h1>

                <h1
                    class="typed-text-output d-inline font-weight-lighter text-white"
                    aria-label="Job Titles"
                ></h1>

                <div class="typed-text d-none">
                    Software Developer, Cybersecurity Specialist
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid py-5" id="about">
    <div class="container">
        <div class="position-relative d-flex align-items-center justify-content-center">
            <h1
                class="display-1 text-uppercase text-white"
                style="-webkit-text-stroke: 1px #dee2e6;"
            >
                About
            </h1>

            <h1 class="position-absolute text-uppercase text-primary">
                About Me
            </h1>
        </div>

        <div class="row align-items-center">
            <div class="col-lg-5 pb-4 pb-lg-0">
                <img
                    class="img-fluid rounded w-100"
                    src="assets/img/about.webp"
                    alt="About Profile"
                />
            </div>

            <div class="col-lg-7">
                <h3 class="mb-4 text-center text-lg-left">
                    Software Developer & Cybersecurity Specialist
                </h3>

                <p
                    class="karaoke-text"
                    style="text-align: justify; line-height: 1.6;"
                    bind:this={karaokeContainer}
                >
                    {#each words as word, i}
                        <span
                            class="karaoke-word"
                            style="opacity: {karaokeProgress * words.length > i ? 1 : 0.25};"
                        >
                            {word}
                        </span>
                        {' '}
                    {/each}
                </p>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid py-5" id="qualification">
    <div class="container">
        <div class="position-relative d-flex align-items-center justify-content-center">
            <h1
                class="display-1 text-uppercase text-white"
                style="-webkit-text-stroke: 1px #dee2e6;"
            >
                Education
            </h1>

            <h1 class="position-absolute text-uppercase text-primary">
                Education
            </h1>
        </div>

        <div class="row align-items-center">
            <div class="col-lg-8 offset-lg-2 text-left">
                <h3 class="mb-4">
                    Academic Background
                </h3>

                <div class="border-left border-primary pt-2 pl-4 ml-2">
                    <div
                        class="position-relative mb-4 timeline-anim"
                        style="animation-delay: 100ms;"
                    >
                        <i
                            class="far fa-dot-circle text-primary position-absolute"
                            style="top: 2px; left: -32px;"
                        ></i>

                        <h5 class="font-weight-bold mb-1">
                            Master's Degree in Cybersecurity
                        </h5>

                        <p class="mb-2">
                            <strong>West University of Timișoara</strong>
                            |
                            <small>2022 - 2024</small>
                        </p>

                        <p>
                            Focused on network security, threat detection,
                            risk management, and the architectural development
                            of highly secure applications.
                        </p>
                    </div>

                    <div
                        class="position-relative mb-4 timeline-anim"
                        style="animation-delay: 300ms;"
                    >
                        <i
                            class="far fa-dot-circle text-primary position-absolute"
                            style="top: 2px; left: -32px;"
                        ></i>

                        <h5 class="font-weight-bold mb-1">
                            Bachelor's Degree in Computer Science
                        </h5>

                        <p class="mb-2">
                            <strong>West University of Timișoara</strong>
                            |
                            <small>2018 - 2022</small>
                        </p>

                        <p>
                            Core foundation in algorithmic problem solving,
                            system architecture, and full-stack software
                            development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid pt-5 pb-3" id="portfolio">
    <div class="container">
        <div class="position-relative d-flex align-items-center justify-content-center">
            <h1
                class="display-1 text-uppercase text-white"
                style="-webkit-text-stroke: 1px #dee2e6;"
            >
                Gallery
            </h1>

            <h1 class="position-absolute text-uppercase text-primary">
                My Portfolio
            </h1>
        </div>

        <div class="portfolio-scroll-container">
            <div class="portfolio-scroll">
                <a
                    href="/personal-projects"
                    class="portfolio-item animate-on-scroll"
                    style="animation-delay: 100ms;"
                >
                    <img
                        class="img-fluid rounded"
                        src="assets/img/personal-projects-thumbnail.webp"
                        alt="Personal Projects"
                    />
                </a>

                <a
                    href="/educational-projects"
                    class="portfolio-item animate-on-scroll"
                    style="animation-delay: 250ms;"
                >
                    <img
                        class="img-fluid rounded"
                        src="assets/img/educational-projects-thumbnail.webp"
                        alt="Educational Projects"
                    />
                </a>

                <a
                    href="/certifications"
                    class="portfolio-item animate-on-scroll"
                    style="animation-delay: 400ms;"
                >
                    <img
                        class="img-fluid rounded"
                        src="assets/img/certifications-thumbnail.webp"
                        alt="Certifications"
                    />
                </a>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid py-5" id="skill">
    <div class="container">
        <div class="position-relative d-flex align-items-center justify-content-center">
            <h1
                class="display-1 text-uppercase text-white"
                style="-webkit-text-stroke: 1px #dee2e6;"
            >
                Skills
            </h1>

            <h1 class="position-absolute text-uppercase text-primary">
                Tech Stack
            </h1>
        </div>

        <div class="row">
            <div class="col-md-6 mb-4">
                <div
                    class="tech-stack-item animate-on-scroll"
                    style="animation-delay: 100ms;"
                >
                    <div class="tech-stack-number">01</div>

                    <div class="tech-stack-content">
                        <h5 class="font-weight-bold mb-2">
                            Frontend
                        </h5>

                        <p class="mb-0">
                            HTML · CSS · JavaScript · TypeScript ·
                            Svelte · Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-4">
                <div
                    class="tech-stack-item animate-on-scroll"
                    style="animation-delay: 200ms;"
                >
                    <div class="tech-stack-number">02</div>

                    <div class="tech-stack-content">
                        <h5 class="font-weight-bold mb-2">
                            Web Engineering
                        </h5>

                        <p class="mb-0">
                            Responsive Design · Accessibility ·
                            Performance · REST / JSON · Forms & Validation · SEO
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-4">
                <div
                    class="tech-stack-item animate-on-scroll"
                    style="animation-delay: 300ms;"
                >
                    <div class="tech-stack-number">03</div>

                    <div class="tech-stack-content">
                        <h5 class="font-weight-bold mb-2">
                            Development Workflow
                        </h5>

                        <p class="mb-0">
                            Git · GitHub · npm · CI/CD ·
                            GitHub Actions · Automated Workflows
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-4">
                <div
                    class="tech-stack-item animate-on-scroll"
                    style="animation-delay: 400ms;"
                >
                    <div class="tech-stack-number">04</div>

                    <div class="tech-stack-content">
                        <h5 class="font-weight-bold mb-2">
                            Infrastructure
                        </h5>

                        <p class="mb-0">
                            DNS · Cloudflare · SSL/TLS · Hosting ·
                            Virtual Machines · Basic Docker
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-4">
                <div
                    class="tech-stack-item animate-on-scroll"
                    style="animation-delay: 500ms;"
                >
                    <div class="tech-stack-number">05</div>

                    <div class="tech-stack-content">
                        <h5 class="font-weight-bold mb-2">
                            Security
                        </h5>

                        <p class="mb-0">
                            Web Security Principles · Secure Development ·
                            Cybersecurity
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-4">
                <div
                    class="tech-stack-item animate-on-scroll"
                    style="animation-delay: 600ms;"
                >
                    <div class="tech-stack-number">06</div>

                    <div class="tech-stack-content">
                        <h5 class="font-weight-bold mb-2">
                            Development Approach
                        </h5>

                        <p class="mb-0">
                            Problem Solving · Debugging ·
                            Continuous Learning · AI-Assisted Development
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid pt-5" id="service">
    <div class="container">
        <div class="position-relative d-flex align-items-center justify-content-center">
            <h1
                class="display-1 text-uppercase text-white"
                style="-webkit-text-stroke: 1px #dee2e6;"
            >
                Services
            </h1>

            <h1 class="position-absolute text-uppercase text-primary">
                What I Do
            </h1>
        </div>

        <div class="row pb-3">
            <div
                class="col-lg-4 col-md-6 text-center mb-5 animate-on-scroll"
                style="animation-delay: 100ms;"
            >
                <div class="d-flex align-items-center justify-content-center mb-4">
                    <i class="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3"></i>
                    <h4 class="font-weight-bold m-0">
                        Web Development
                    </h4>
                </div>

                <p>
                    Building responsive, modern web applications tailored
                    to business needs with clean, scalable code.
                </p>
            </div>

            <div
                class="col-lg-4 col-md-6 text-center mb-5 animate-on-scroll"
                style="animation-delay: 200ms;"
            >
                <div class="d-flex align-items-center justify-content-center mb-4">
                    <i class="fa fa-2x fa-shield-alt service-icon bg-primary text-white mr-3"></i>
                    <h4 class="font-weight-bold m-0">
                        Cybersecurity
                    </h4>
                </div>

                <p>
                    Auditing software and implementing robust security
                    measures to protect applications against modern
                    digital threats.
                </p>
            </div>

            <div
                class="col-lg-4 col-md-6 text-center mb-5 animate-on-scroll"
                style="animation-delay: 300ms;"
            >
                <div class="d-flex align-items-center justify-content-center mb-4">
                    <i class="fa fa-2x fa-server service-icon bg-primary text-white mr-3"></i>
                    <h4 class="font-weight-bold m-0">
                        System Architecture
                    </h4>
                </div>

                <p>
                    Designing secure, high-performance infrastructures
                    and environments optimized for scale and reliability.
                </p>
            </div>

            <div
                class="col-lg-4 col-md-6 text-center mb-5 animate-on-scroll"
                style="animation-delay: 400ms;"
            >
                <div class="d-flex align-items-center justify-content-center mb-4">
                    <i class="fa fa-2x fa-tachometer-alt service-icon bg-primary text-white mr-3"></i>
                    <h4 class="font-weight-bold m-0">
                        Performance Tuning
                    </h4>
                </div>

                <p>
                    Streamlining existing systems, identifying bottlenecks,
                    and optimizing applications for maximum efficiency.
                </p>
            </div>

            <div
                class="col-lg-4 col-md-6 text-center mb-5 animate-on-scroll"
                style="animation-delay: 500ms;"
            >
                <div class="d-flex align-items-center justify-content-center mb-4">
                    <i class="fa fa-2x fa-network-wired service-icon bg-primary text-white mr-3"></i>
                    <h4 class="font-weight-bold m-0">
                        Network Setup
                    </h4>
                </div>

                <p>
                    Configuring secure networks and optimizing digital
                    environments for both performance and robust data safety.
                </p>
            </div>

            <div
                class="col-lg-4 col-md-6 text-center mb-5 animate-on-scroll"
                style="animation-delay: 600ms;"
            >
                <div class="d-flex align-items-center justify-content-center mb-4">
                    <i class="fa fa-2x fa-database service-icon bg-primary text-white mr-3"></i>
                    <h4 class="font-weight-bold m-0">
                        Data Strategy
                    </h4>
                </div>

                <p>
                    Implementing reliable data backup strategies,
                    integrity checks, and effective disaster recovery plans.
                </p>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid py-5" id="contact">
    <div class="container">
        <div class="position-relative d-flex align-items-center justify-content-center">
            <h1
                class="display-1 text-uppercase text-white"
                style="-webkit-text-stroke: 1px #dee2e6;"
            >
                Contact
            </h1>

            <h1 class="position-absolute text-uppercase text-primary">
                Get In Touch
            </h1>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="contact-form text-center">
                    <div id="success"></div>

                    <form
                        action="https://formspree.io/f/mldjnpjy"
                        method="POST"
                        id="contactForm"
                        novalidate
                        data-sveltekit-reload
                        onsubmit={validateForm}
                    >
                        <div class="form-row">
                            <div class="control-group col-sm-6">
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    class="form-control p-4"
                                    placeholder="e.g., Jane Doe"
                                    autocomplete="name"
                                    required
                                    minlength="2"
                                    bind:value={name}
                                    onblur={validateName}
                                    aria-invalid={errors.name ? 'true' : 'false'}
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                />

                                {#if errors.name}
                                    <div
                                        id="name-error"
                                        class="text-danger mt-1 text-start"
                                        role="alert"
                                    >
                                        {errors.name}
                                    </div>
                                {/if}
                            </div>

                            <div class="control-group col-sm-6">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    class="form-control p-4"
                                    placeholder="e.g., jane.doe@example.com"
                                    autocomplete="email"
                                    required
                                    bind:value={email}
                                    onblur={validateEmailField}
                                    aria-invalid={errors.email ? 'true' : 'false'}
                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                />

                                {#if errors.email}
                                    <div
                                        id="email-error"
                                        class="text-danger mt-1 text-start"
                                        role="alert"
                                    >
                                        {errors.email}
                                    </div>
                                {/if}
                            </div>
                        </div>

                        <div class="control-group mt-3">
                            <input
                                id="subject"
                                type="text"
                                name="subject"
                                class="form-control p-4"
                                placeholder="e.g., Freelance Project Inquiry"
                                required
                                minlength="3"
                                bind:value={subject}
                                onblur={validateSubject}
                                aria-invalid={errors.subject ? 'true' : 'false'}
                                aria-describedby={errors.subject ? 'subject-error' : undefined}
                            />

                            {#if errors.subject}
                                <div
                                    id="subject-error"
                                    class="text-danger mt-1 text-start"
                                    role="alert"
                                >
                                    {errors.subject}
                                </div>
                            {/if}
                        </div>

                        <div class="control-group mt-3">
                            <textarea
                                id="message"
                                name="message"
                                class="form-control py-3 px-4"
                                rows="5"
                                placeholder="Tell me briefly about your project or inquiry..."
                                required
                                minlength="10"
                                bind:value={message}
                                onblur={validateMessage}
                                aria-invalid={errors.message ? 'true' : 'false'}
                                aria-describedby={errors.message ? 'message-error' : undefined}
                            ></textarea>

                            {#if errors.message}
                                <div
                                    id="message-error"
                                    class="text-danger mt-1 text-start"
                                    role="alert"
                                >
                                    {errors.message}
                                </div>
                            {/if}
                        </div>

                        <div class="mt-3">
                            <button
                                class="btn btn-outline-primary"
                                type="submit"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<i class="fa fa-2x fa-angle-down text-white scroll-to-bottom"></i>

<a
    href="#home"
    class="btn btn-outline-dark px-0 back-to-top"
    aria-label="Back to top"
>
    <i class="fa fa-angle-double-up"></i>
</a>

<style>
    .hero-image-wrapper {
        position: relative;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 5px solid #f8f9fa;
        background: #f8f9fa;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
        transform: translateY(40%);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #profile-photo {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        object-fit: contain;
        object-position: center;
        display: block;
        border: 5px solid #f8f9fa;
    }

    :global(.animate-on-scroll) {
        opacity: 1;
        transform: translateY(0);
    }

    :global(.animate-on-scroll.is-visible) {
        animation: whimsicalBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    @keyframes whimsicalBounce {
        0% {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
        }

        50% {
            opacity: 1;
            transform: translateY(-10px) scale(1.02);
        }

        75% {
            transform: translateY(5px) scale(0.98);
        }

        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    .timeline-anim {
        opacity: 0;
        transform: translateX(-40px);
    }

    :global(.timeline-anim.is-visible) {
        animation: timelineSlide 0.8s ease-out forwards;
    }

    @keyframes timelineSlide {
        0% {
            opacity: 0;
            transform: translateX(-40px);
        }

        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .tech-stack-item {
        position: relative;
        display: flex;
        align-items: flex-start;
        padding: 25px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        transition: transform 0.3s ease, padding-left 0.3s ease;
    }

    .tech-stack-item::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 0;
        height: 2px;
        background: #007bff;
        transition: width 0.4s ease;
    }

    .tech-stack-item:hover {
        transform: translateX(6px);
    }

    .tech-stack-item:hover::before {
        width: 70px;
    }

    .tech-stack-number {
        min-width: 50px;
        margin-right: 20px;
        font-size: 14px;
        font-weight: 700;
        color: #007bff;
        letter-spacing: 1px;
    }

    .tech-stack-content h5 {
        transition: color 0.3s ease;
    }

    .tech-stack-item:hover .tech-stack-content h5 {
        color: #007bff;
    }

    .tech-stack-content p {
        line-height: 1.8;
        color: #6c757d;
    }

    @media (max-width: 899px) {
        .hero-image-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            max-width: 30vw;
            max-height: 30vw;
            border-radius: 50%;
            border: 5px solid #f8f9fa;
            background: #f8f9fa;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
            margin: 0 auto;
            overflow: visible;
        }

        #profile-photo {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
            display: block;
            border: none;
        }

        .form-row {
            gap: 20px;
        }
    }

    @media (max-width: 767.98px) {
        .tech-stack-item {
            padding: 20px 0;
        }

        .tech-stack-number {
            min-width: 40px;
            margin-right: 15px;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        :global(.animate-on-scroll.is-visible),
        :global(.timeline-anim.is-visible) {
            animation: none;
            opacity: 1;
            transform: none;
        }

        .tech-stack-item,
        .tech-stack-item::before,
        .tech-stack-content h5 {
            transition: none;
        }
    }
</style>
