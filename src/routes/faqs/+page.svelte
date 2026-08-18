<svelte:head>
    <title>FAQs | vBordea</title>
    <meta name="description" content="Quick answers regarding development, security audits, and work inquiries with Valentin." />
    <meta property="og:title" content="FAQs | vBordea" />
    <meta property="og:description" content="Quick answers regarding development, security audits, and work inquiries with Valentin." />
    <meta property="og:url" content="https://valentinbordea.com/faqs" />
    <meta name="twitter:title" content="FAQs | vBordea" />
    <meta name="twitter:description" content="Quick answers regarding development, security audits, and work inquiries with Valentin." />
</svelte:head>

<style>
    :global(body), :global(html) { height: 100%; display: flex; flex-direction: column; }
    .main-content { flex-grow: 1; padding-top: 80px; max-width: 800px; }
    .card-header button { width: 100%; text-align: left; font-weight: 600; color: #1A1A1A; text-decoration: none; }
    .card-header button:focus { box-shadow: none; }
    .card-header button:hover { text-decoration: none; color: #078571; }
    .card-body { color: #555; line-height: 1.6; text-align: left; }
</style>

<div class="main-content container mt-5 pt-5 mb-5">
    <h2 class="text-center font-weight-bold mb-3" style="font-size: 2.2rem; color: #1A1A1A;">Frequently Asked Questions</h2>
    <p class="text-center text-muted mb-4">Quick answers on stack preference, workflow, and availability.</p>

    <div class="accordion" id="faqAccordion">
        <div class="card mb-2 border rounded">
            <div class="card-header bg-white py-2" id="fHeadingOne">
                <button class="btn btn-link btn-block py-2" type="button" data-toggle="collapse" data-target="#fCollapseOne" aria-expanded="true" aria-controls="fCollapseOne">
                    What primary technical services do you focus on?
                </button>
            </div>
            <div id="fCollapseOne" class="collapse show" aria-labelledby="fHeadingOne" data-parent="#faqAccordion">
                <div class="card-body">
                    Modern web development, backend/frontend engineering, web application security reviews, performance optimization, and custom software builds.
                </div>
            </div>
        </div>

        <div class="card mb-2 border rounded">
            <div class="card-header bg-white py-2" id="fHeadingTwo">
                <button class="btn btn-link btn-block collapsed py-2" type="button" data-toggle="collapse" data-target="#fCollapseTwo" aria-expanded="false" aria-controls="fCollapseTwo">
                    How do you approach application security?
                </button>
            </div>
            <div id="fCollapseTwo" class="collapse" aria-labelledby="fHeadingTwo" data-parent="#faqAccordion">
                <div class="card-body">
                    By building with security in mind from day one—applying strict input validation, safe authentication practices, proper encryption standards, and threat analysis early in the development lifecycle.
                </div>
            </div>
        </div>

        <div class="card mb-2 border rounded">
            <div class="card-header bg-white py-2" id="fHeadingThree">
                <button class="btn btn-link btn-block collapsed py-2" type="button" data-toggle="collapse" data-target="#fCollapseThree" aria-expanded="false" aria-controls="fCollapseThree">
                    Are you available for freelance projects or technical consulting?
                </button>
            </div>
            <div id="fCollapseThree" class="collapse" aria-labelledby="fHeadingThree" data-parent="#faqAccordion">
                <div class="card-body">
                    Yes. Depending on current project commitments. Drop a note through the contact form to discuss scope.
                </div>
            </div>
        </div>

        <div class="card mb-2 border rounded">
            <div class="card-header bg-white py-2" id="fHeadingFour">
                <button class="btn btn-link btn-block collapsed py-2" type="button" data-toggle="collapse" data-target="#fCollapseFour" aria-expanded="false" aria-controls="fCollapseFour">
                    What is the best way to get in touch?
                </button>
            </div>
            <div id="fCollapseFour" class="collapse" aria-labelledby="fHeadingFour" data-parent="#faqAccordion">
                <div class="card-body">
                    Use the form on the main page or send an email directly to <a href="mailto:contact@valentinbordea.com" class="text-primary font-weight-bold">contact@valentinbordea.com</a>. Response time is typically within 24 hours.
                </div>
            </div>
        </div>
    </div>
</div>
