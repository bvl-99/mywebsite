<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    // --- Karaoke Text State ---
    let karaokeProgress = 0;
    let karaokeContainer: HTMLElement;
    const aboutText = "I specialize in building secure, scalable software and robust web applications. With a strong foundation in computer science and network security, I focus on bridging the gap between clean, efficient code and resilient digital infrastructure, delivering solutions that are both highly performant and highly secure.";
    const words = aboutText.split(' ');

    let observer: IntersectionObserver;

    function handleScroll() {
        if (!karaokeContainer) return;
        const rect = karaokeContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Starts animating when 85% down the viewport, fully lit at 35%
        const start = windowHeight * 0.85;
        const end = windowHeight * 0.35;

        let progress = (start - rect.top) / (start - end);
        karaokeProgress = Math.max(0, Math.min(1, progress));
    }

    onMount(() => {
        // --- Original jQuery Logic ---
        const jQuery = (window as any).jQuery;
        const Typed = (window as any).Typed;

        if (jQuery) {
            "use strict";

            // Navbar on scrolling
            jQuery(window).scroll(function (this: any) {
                if (jQuery(this).scrollTop() > 200) {
                    jQuery('.navbar').fadeIn('slow').css('display', 'flex');
                } else {
                    jQuery('.navbar').fadeOut('slow').css('display', 'none');
                }
            });

            // Smooth scrolling on the navbar links
            jQuery(".navbar-nav a").on('click', function (this: any, event: any) {
                if (this.hash !== "") {
                    event.preventDefault();
                    jQuery('html, body').animate({
                        scrollTop: jQuery(this.hash).offset().top - 45
                    }, 1500, 'easeInOutExpo');

                    if (jQuery(this).parents('.navbar-nav').length) {
                        jQuery('.navbar-nav .active').removeClass('active');
                        jQuery(this).closest('a').addClass('active');
                    }
                }
            });

            // Typed Initiate
            if (jQuery('.typed-text-output').length == 1) {
                let typed_strings = jQuery('.typed-text').text();
                new Typed('.typed-text-output', {
                    strings: typed_strings.split(', '),
                    typeSpeed: 100,
                    backSpeed: 20,
                    smartBackspace: false,
                    loop: true
                });
            }

            // Modal Video
            let videoSrc: string;
            jQuery('.btn-play').click(function (this: any) {
                videoSrc = jQuery(this).data("src");
            });

            jQuery('#videoModal').on('shown.bs.modal', function () {
                jQuery("#video").attr('src', videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
            });

            jQuery('#videoModal').on('hide.bs.modal', function () {
                jQuery("#video").attr('src', videoSrc);
            });

            // Scroll to Bottom
            jQuery(window).scroll(function (this: any) {
                if (jQuery(this).scrollTop() > 100) {
                    jQuery('.scroll-to-bottom').fadeOut('slow');
                } else {
                    jQuery('.scroll-to-bottom').fadeIn('slow');
                }
            });

            // Skills
            jQuery('.skill').waypoint(function () {
                jQuery('.progress .progress-bar').each(function (this: any) {
                    jQuery(this).css("width", jQuery(this).attr("aria-valuenow") + '%');
                });
            }, {offset: '80%'});

            // Portfolio isotope and filter
            let portfolioIsotope = jQuery('.portfolio-container').isotope({
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            });
            jQuery('#portfolio-flters li').on('click', function (this: any) {
                jQuery("#portfolio-flters li").removeClass('active');
                jQuery(this).addClass('active');
                portfolioIsotope.isotope({filter: jQuery(this).data('filter')});
            });

            // Back to top button
            jQuery(window).scroll(function (this: any) {
                if (jQuery(this).scrollTop() > 200) {
                    jQuery('.back-to-top').fadeIn('slow');
                } else {
                    jQuery('.back-to-top').fadeOut('slow');
                }
            });
            jQuery('.back-to-top').click(function () {
                jQuery('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
                return false;
            });

            // Testimonials carousel
            if (jQuery(".testimonial-carousel").length) {
                jQuery(".testimonial-carousel").owlCarousel({
                    autoplay: true,
                    smartSpeed: 1500,
                    dots: true,
                    loop: true,
                    items: 1
                });
            }

            // Ripples settings
            if (jQuery('#home').length) {
                jQuery('#home').ripples({
                    resolution: 512,
                    dropRadius: 16,
                    perturbance: 0.01
                });
            }
        }

        // --- NEW: Custom Animation Observers & Listeners ---
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Play animation only once
                }
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

        document.querySelectorAll('.animate-on-scroll, .timeline-anim').forEach(el => observer.observe(el));

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger once to set initial state
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', handleScroll);
        }
        if (observer) {
            observer.disconnect();
        }
    });
</script>

<!-- Navbar Start -->
<nav class="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
    <a href="/" class="navbar-brand ml-lg-3">
        <h1 class="m-0 display-5"><span class="text-primary">v</span>Bordea</h1>
    </a>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" aria-label="Toggle navigation">
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
        <a href="assets/docs/cv.pdf" class="btn btn-outline-primary d-none d-lg-block" style="display: block; max-width: 200px;" download="Valentin - CV.pdf">Get CV</a>
    </div>
</nav>
<!-- Navbar End -->

<!-- Header Start -->
<div class="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style="min-height: 100vh;">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                <div class="profile-circle d-flex justify-content-center">
                    <!-- Wrapper provides the circular mask, image scales up inside it -->
                    <div class="hero-image-wrapper">
                        <img id="profile-photo" class="hero-profile-image" src="assets/img/profile.png" alt="Avatar">
                    </div>
                </div>
            </div>
            <div class="col-lg-7 text-center text-lg-left">
                <h3 class="text-white font-weight-normal mb-3">I'm</h3>
                <h1 class="display-3 text-uppercase mb-2" style="-webkit-text-stroke: 1px #ffffff; line-height: 0.9;">
                    <span class="text-white">Liviu-Valentin Bordea</span>
                </h1>
                <!-- svelte-ignore a11y_missing_content -->
                <h1 class="typed-text-output d-inline font-weight-lighter text-white" aria-label="Job Titles"></h1>
                <div class="typed-text d-none">Software Developer, Cybersecurity Specialist, Web Developer</div>
            </div>
        </div>
    </div>
</div>
<!-- Header End -->

<!-- About Start -->
<div class="container-fluid py-5" id="about">
    <div class="container">
        <div class="position-relative d-flex align-items-center justify-content-center">
            <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">About</h1>
            <h1 class="position-absolute text-uppercase text-primary">About Me</h1>
        </div>
        <div class="row align-items-center">
            <div class="col-lg-5 pb-4 pb-lg-0">
                <img class="img-fluid rounded w-100" src="assets/img/about.jpg" alt="About Profile">
            </div>
            <div class="col-lg-7">
                <h3 class="mb-4 text-center text-lg-left">Web Developer & Cybersecurity Specialist</h3>
                <!-- Custom Karaoke Paragraph -->
                <p class="karaoke-text" style="text-align: justify; line-height: 1.6;" bind:this={karaokeContainer}>
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
<!-- About End -->

<!-- Qualification Start -->
<div class="container-fluid py-5" id="qualification">
    <div class="container">
        <div class="position-relative d-flex align-items-center justify-content-center">
            <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Education</h1>
            <h1 class="position-absolute text-uppercase text-primary">Education</h1>
        </div>
        <div class="row align-items-center">
            <div class="col-lg-8 offset-lg-2 text-left">
                <h3 class="mb-4">Academic Background</h3>
                <div class="border-left border-primary pt-2 pl-4 ml-2">
                    <!-- Added timeline-anim classes -->
                    <div class="position-relative mb-4 timeline-anim" style="animation-delay: 100ms;">
                        <i class="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                        <h5 class="font-weight-bold mb-1">Master's Degree in Cybersecurity</h5>
                        <p class="mb-2"><strong>West University of Timișoara</strong> | <small>2022 - 2024</small></p>
                        <p>Focused on network security, threat detection, risk management, and the architectural development of highly secure applications.</p>
                    </div>
                    <div class="position-relative mb-4 timeline-anim" style="animation-delay: 300ms;">
                        <i class="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                        <h5 class="font-weight-bold mb-1">Bachelor's Degree in Computer Science</h5>
                        <p class="mb-2"><strong>West University of Timișoara</strong> | <small>2018 - 2022</small></p>
                        <p>Core foundation in algorithmic problem solving, system architecture, and full-stack software development.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Qualification End -->

<!-- Portfolio Start -->
<div class="container-fluid pt-5 pb-3" id="portfolio">
    <div class="container">
        <div class="position-relative d-flex align-items-center justify-content-center">
            <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Gallery</h1>
            <h1 class="position-absolute text-uppercase text-primary">My Portfolio</h1>
        </div>
        <div class="portfolio-scroll-container">
            <div class="portfolio-scroll">
                <!-- Added animate-on-scroll classes -->
                <a href="/personal-projects" class="portfolio-item animate-on-scroll" style="animation-delay: 100ms;">
                    <img class="img-fluid rounded" src="assets/img/personal-projects-thumbnail.jpg" alt="Personal Projects">
                </a>
                <a href="/educational-projects" class="portfolio-item animate-on-scroll" style="animation-delay: 250ms;">
                    <img class="img-fluid rounded" src="assets/img/educational-projects-thumbnail.jpg" alt="Educational Projects">
                </a>
                <a href="/certifications" class="portfolio-item animate-on-scroll" style="animation-delay: 400ms;">
                    <img class="img-fluid rounded" src="assets/img/certifications-thumbnail.jpg" alt="Certifications">
                </a>
            </div>
        </div>
    </div>
</div>
<!-- Portfolio End -->

<!-- Skill Start -->
<div class="container-fluid py-5" id="skill">
    <div class="container">
        <div class="position-relative d-flex align-items-center justify-content-center">
            <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Skills</h1>
            <h1 class="position-absolute text-uppercase text-primary">Core Competencies</h1>
        </div>
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="skill mb-4">
                    <div class="d-flex justify-content-between">
                        <h6 class="font-weight-bold">Web Development</h6>
                        <h6 class="font-weight-bold">95%</h6>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="skill mb-4">
                    <div class="d-flex justify-content-between">
                        <h6 class="font-weight-bold">Cybersecurity</h6>
                        <h6 class="font-weight-bold">90%</h6>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="skill mb-4">
                    <div class="d-flex justify-content-between">
                        <h6 class="font-weight-bold">System Architecture</h6>
                        <h6 class="font-weight-bold">85%</h6>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="skill mb-4">
                    <div class="d-flex justify-content-between">
                        <h6 class="font-weight-bold">Communication</h6>
                        <h6 class="font-weight-bold">95%</h6>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="skill mb-4">
                    <div class="d-flex justify-content-between">
                        <h6 class="font-weight-bold">Agile & Teamwork</h6>
                        <h6 class="font-weight-bold">85%</h6>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="skill mb-4">
                    <div class="d-flex justify-content-between">
                        <h6 class="font-weight-bold">Problem Solving</h6>
                        <h6 class="font-weight-bold">95%</h6>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-info" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Skill End -->

<!-- Services Start -->
<div class="container-fluid pt-5" id="service">
    <div class="container">
        <div class="position-relative d-flex align-items-center justify-content-center">
            <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Services</h1>
            <h1 class="position-absolute text-uppercase text-primary">What I Do</h1>
        </div>
        <div class="row pb-3">
            <!-- Added animate-on-scroll classes to all 6 service blocks -->
            <div class="col-lg-4 col-md-6 text-center mb-5 animate-on-scroll" style="animation-delay: 100ms;">
                <div class="d-flex align-items-center justify-content-center mb-4">
                    <i class="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3"></i>
                    <h4 class="font-weight-bold m-0">Web Development</h4>
                </div>
                <p>Building responsive, modern web applications tailored to business needs with clean, scalable code.</p>
            </div>
            <div class="col-lg-4 col-md-6 text-center mb-5 animate-on-scroll" style="animation-delay: 200ms;">
                <div class="d-flex align-items-center justify-content-center mb-4">
                    <i class="fa fa-2x fa-shield-alt service-icon bg-primary text-white mr-3"></i>
                    <h4 class="font-weight-bold m-0">Cybersecurity</h4>
                </div>
                <p>Auditing software and implementing robust security measures to protect applications against modern digital threats.</p>
            </div>
            <div class="col-lg-4 col-md-6 text-center mb-5 animate-on-scroll" style="animation-delay: 300ms;">
                <div class="d-flex align-items-center justify-content-center mb-4">
                    <i class="fa fa-2x fa-server service-icon bg-primary text-white mr-3"></i>
                    <h4 class="font-weight-bold m-0">System Architecture</h4>
                </div>
                <p>Designing secure, high-performance infrastructures and environments optimized for scale and reliability.</p>
            </div>
            <div class="col-lg-4 col-md-6 text-center mb-5 animate-on-scroll" style="animation-delay: 400ms;">
                <div class="d-flex align-items-center justify-content-center mb-4">
                    <i class="fa fa-2x fa-tachometer-alt service-icon bg-primary text-white mr-3"></i>
                    <h4 class="font-weight-bold m-0">Performance Tuning</h4>
                </div>
                <p>Streamlining existing systems, identifying bottlenecks, and optimizing applications for maximum efficiency.</p>
            </div>
            <div class="col-lg-4 col-md-6 text-center mb-5 animate-on-scroll" style="animation-delay: 500ms;">
                <div class="d-flex align-items-center justify-content-center mb-4">
                    <i class="fa fa-2x fa-network-wired service-icon bg-primary text-white mr-3"></i>
                    <h4 class="font-weight-bold m-0">Network Setup</h4>
                </div>
                <p>Configuring secure networks and optimizing digital environments for both performance and robust data safety.</p>
            </div>
            <div class="col-lg-4 col-md-6 text-center mb-5 animate-on-scroll" style="animation-delay: 600ms;">
                <div class="d-flex align-items-center justify-content-center mb-4">
                    <i class="fa fa-2x fa-database service-icon bg-primary text-white mr-3"></i>
                    <h4 class="font-weight-bold m-0">Data Strategy</h4>
                </div>
                <p>Implementing reliable data backup strategies, integrity checks, and effective disaster recovery plans.</p>
            </div>
        </div>
    </div>
</div>
<!-- Services End -->

<!-- Contact Start -->
<div class="container-fluid py-5" id="contact">
    <div class="container">
        <div class="position-relative d-flex align-items-center justify-content-center">
            <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Contact</h1>
            <h1 class="position-absolute text-uppercase text-primary">Get In Touch</h1>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="contact-form text-center">
                    <div id="success"></div>
                    <form action="https://formspree.io/f/mldjnpjy" method="POST" id="contactForm" novalidate data-sveltekit-reload>
                        <div class="form-row">
                            <!-- Updated Placeholders and added HTML5 Validation -->
                            <div class="control-group col-sm-6">
                                <input type="text" name="name" class="form-control p-4" placeholder="e.g., Jane Doe" required minlength="2" />
                            </div>
                            <div class="control-group col-sm-6">
                                <input type="email" name="email" class="form-control p-4" placeholder="e.g., jane.doe@example.com" required />
                            </div>
                        </div>
                        <div class="control-group mt-3">
                            <input type="text" name="subject" class="form-control p-4" placeholder="e.g., Freelance Project Inquiry" required minlength="3" />
                        </div>
                        <div class="control-group mt-3">
                            <textarea name="message" class="form-control py-3 px-4" rows="5" placeholder="Tell me briefly about your project or inquiry..." required minlength="10"></textarea>
                        </div>
                        <div class="mt-3">
                            <button class="btn btn-outline-primary" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Contact End -->

<!-- Scroll to Bottom -->
<i class="fa fa-2x fa-angle-down text-white scroll-to-bottom"></i>

<!-- Back to Top -->
<a href="#home" class="btn btn-outline-dark px-0 back-to-top" aria-label="Back to top"><i class="fa fa-angle-double-up"></i></a>

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

    /* Wrap dynamically injected classes in :global() to prevent Svelte warnings */
    :global(.animate-on-scroll.is-visible) {
        animation: whimsicalBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    @keyframes whimsicalBounce {
        0% { opacity: 0; transform: translateY(40px) scale(0.9); }
        50% { opacity: 1; transform: translateY(-10px) scale(1.02); }
        75% { transform: translateY(5px) scale(0.98); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
    }

    .timeline-anim {
        opacity: 0;
        transform: translateX(-40px);
    }

    :global(.timeline-anim.is-visible) {
        animation: timelineSlide 0.8s ease-out forwards;
    }

    @keyframes timelineSlide {
        0% { opacity: 0; transform: translateX(-40px); }
        100% { opacity: 1; transform: translateX(0); }
    }
</style>
