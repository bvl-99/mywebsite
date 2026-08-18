<svelte:head>
    <title>Terms & Conditions | vBordea</title>
    <meta name="description" content="Terms and conditions governing the use of our website." />
    <meta property="og:title" content="Terms & Conditions | vBordea" />
    <meta property="og:description" content="Terms and conditions governing the use of our website." />
    <meta property="og:url" content="https://valentinbordea.com/terms" />
    <meta name="twitter:title" content="Terms & Conditions | vBordea" />
    <meta name="twitter:description" content="Terms and conditions governing the use of our website." />
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
    <h2 class="text-center font-weight-bold mb-3" style="font-size: 2.2rem; color: #1A1A1A;">Terms & Conditions</h2>
    <p class="text-center text-muted mb-4">Straightforward guidelines regarding the use of this site and services.</p>

    <div class="accordion" id="termsAccordion">
        <div class="card mb-2 border rounded">
            <div class="card-header bg-white py-2" id="tHeadingOne">
                <button class="btn btn-link btn-block py-2" type="button" data-toggle="collapse" data-target="#tCollapseOne" aria-expanded="true" aria-controls="tCollapseOne">
                    1. Site Usage
                </button>
            </div>
            <div id="tCollapseOne" class="collapse show" aria-labelledby="tHeadingOne" data-parent="#termsAccordion">
                <div class="card-body">
                    The code samples, project write-ups, and portfolio items showcased here are for informational and professional demonstration purposes. Feel free to browse and review the work.
                </div>
            </div>
        </div>

        <div class="card mb-2 border rounded">
            <div class="card-header bg-white py-2" id="tHeadingTwo">
                <button class="btn btn-link btn-block collapsed py-2" type="button" data-toggle="collapse" data-target="#tCollapseTwo" aria-expanded="false" aria-controls="tCollapseTwo">
                    2. Intellectual Property
                </button>
            </div>
            <div id="tCollapseTwo" class="collapse" aria-labelledby="tHeadingTwo" data-parent="#termsAccordion">
                <div class="card-body">
                    All original branding, designs, and content are created and owned by the author, Valentin. Client projects or open-source software referenced maintain their respective licenses and agreements.
                </div>
            </div>
        </div>

        <div class="card mb-2 border rounded">
            <div class="card-header bg-white py-2" id="tHeadingThree">
                <button class="btn btn-link btn-block collapsed py-2" type="button" data-toggle="collapse" data-target="#tCollapseThree" aria-expanded="false" aria-controls="tCollapseThree">
                    3. Service Scope & Security Consulting
                </button>
            </div>
            <div id="tCollapseThree" class="collapse" aria-labelledby="tHeadingThree" data-parent="#termsAccordion">
                <div class="card-body">
                    Any development work, code audits, or security consults are defined under formal written project scopes prior to execution. Unauthorized testing on third-party systems is neither encouraged nor accepted.
                </div>
            </div>
        </div>

        <div class="card mb-2 border rounded">
            <div class="card-header bg-white py-2" id="tHeadingFour">
                <button class="btn btn-link btn-block collapsed py-2" type="button" data-toggle="collapse" data-target="#tCollapseFour" aria-expanded="false" aria-controls="tCollapseFour">
                    4. External Links & Inquiries
                </button>
            </div>
            <div id="tCollapseFour" class="collapse" aria-labelledby="tHeadingFour" data-parent="#termsAccordion">
                <div class="card-body">
                    Links to external GitHub repositories, social profiles, or tools are provided for convenience. External site policies apply once you navigate away from this domain. For formal engagement inquiries, contact <a href="mailto:contact@valentinbordea.com" class="text-primary font-weight-bold">contact@valentinbordea.com</a>.
                </div>
            </div>
        </div>
    </div>

    <p class="text-muted mt-4 text-center"><small>Last updated: August 2026</small></p>
</div>
