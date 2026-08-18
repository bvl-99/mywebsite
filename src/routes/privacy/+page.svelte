<svelte:head>
    <title>Privacy Policy | vBordea</title>
    <meta name="description" content="How data is handled, stored, and protected on our website." />
    <meta property="og:title" content="Privacy Policy | vBordea" />
    <meta property="og:description" content="Data handling and privacy practices for our website." />
    <meta property="og:type" content="website" />
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
    <h2 class="text-center font-weight-bold mb-3" style="font-size: 2.2rem; color: #1A1A1A;">Privacy Policy</h2>
    <p class="text-center text-muted mb-4">No tracking bloat. No data sales. Here’s how your info is actually handled.</p>

    <div class="accordion" id="privacyAccordion">
        <div class="card mb-2 border rounded">
            <div class="card-header bg-white py-2" id="headingOne">
                <button class="btn btn-link btn-block py-2" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    1. Information Collected
                </button>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#privacyAccordion">
                <div class="card-body">
                    Only what you explicitly send through the contact form (name, email, message). Standard server logs collect minimal connection data solely for traffic monitoring and blocking malicious access attempts.
                </div>
            </div>
        </div>

        <div class="card mb-2 border rounded">
            <div class="card-header bg-white py-2" id="headingTwo">
                <button class="btn btn-link btn-block collapsed py-2" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    2. How Your Info Is Used
                </button>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#privacyAccordion">
                <div class="card-body">
                    Strictly to reply to your email or discuss potential projects. Your details are never shared, sold, or added to automated marketing lists.
                </div>
            </div>
        </div>

        <div class="card mb-2 border rounded">
            <div class="card-header bg-white py-2" id="headingThree">
                <button class="btn btn-link btn-block collapsed py-2" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    3. Cookies & Analytics
                </button>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#privacyAccordion">
                <div class="card-body">
                    This site uses basic, functional cookies required for essential page operation. No invasive third-party ad networks or intrusive behavioral tracking cookies are attached.
                </div>
            </div>
        </div>

        <div class="card mb-2 border rounded">
            <div class="card-header bg-white py-2" id="headingFour">
                <button class="btn btn-link btn-block collapsed py-2" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    4. Security Protocols
                </button>
            </div>
            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#privacyAccordion">
                <div class="card-body">
                    Traffic is encrypted in transit over HTTPS. Form processing is handled using secure endpoints to prevent unauthorized access or interception.
                </div>
            </div>
        </div>

        <div class="card mb-2 border rounded">
            <div class="card-header bg-white py-2" id="headingFive">
                <button class="btn btn-link btn-block collapsed py-2" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    5. Contact & Data Deletion
                </button>
            </div>
            <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#privacyAccordion">
                <div class="card-body">
                    Want past email threads or data wiped? Send a direct message to <a href="mailto:contact@valentinbordea.com" class="text-primary font-weight-bold">contact@valentinbordea.com</a> and it will be removed promptly.
                </div>
            </div>
        </div>
    </div>

    <p class="text-muted mt-4 text-center"><small>Last updated: August 2026</small></p>
</div>
