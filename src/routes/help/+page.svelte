<svelte:head>
    <title>Help & Support | vBordea</title>
    <meta name="description" content="Get in touch for technical help, code questions, or support." />
    <meta property="og:title" content="Help & Support | vBordea" />
    <meta property="og:description" content="Technical support and inquiry guidelines." />
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
    <h2 class="text-center font-weight-bold mb-3" style="font-size: 2.2rem; color: #1A1A1A;">Help & Support</h2>
    <p class="text-center text-muted mb-4">Guidelines for getting direct support or reporting technical issues.</p>

    <div class="accordion" id="helpAccordion">
        <div class="card mb-2 border rounded">
            <div class="card-header bg-white py-2" id="hHeadingOne">
                <button class="btn btn-link btn-block py-2" type="button" data-toggle="collapse" data-target="#hCollapseOne" aria-expanded="true" aria-controls="hCollapseOne">
                    Need help with a project or code review?
                </button>
            </div>
            <div id="hCollapseOne" class="collapse show" aria-labelledby="hHeadingOne" data-parent="#helpAccordion">
                <div class="card-body">
                    If you have questions regarding a project shared on this portfolio or need assistance with web engineering and security, reach out with brief details about your codebase or platform.
                </div>
            </div>
        </div>

        <div class="card mb-2 border rounded">
            <div class="card-header bg-white py-2" id="hHeadingTwo">
                <button class="btn btn-link btn-block collapsed py-2" type="button" data-toggle="collapse" data-target="#hCollapseTwo" aria-expanded="false" aria-controls="hCollapseTwo">
                    Reporting site issues or broken links
                </button>
            </div>
            <div id="hCollapseTwo" class="collapse" aria-labelledby="hHeadingTwo" data-parent="#helpAccordion">
                <div class="card-body">
                    Found an issue on this site or a broken link in one of the project demos? Send a message describing the issue and the browser/device you're using so it can be fixed.
                </div>
            </div>
        </div>

        <div class="card mb-2 border rounded">
            <div class="card-header bg-white py-2" id="hHeadingThree">
                <button class="btn btn-link btn-block collapsed py-2" type="button" data-toggle="collapse" data-target="#hCollapseThree" aria-expanded="false" aria-controls="hCollapseThree">
                    Direct Contact
                </button>
            </div>
            <div id="hCollapseThree" class="collapse" aria-labelledby="hHeadingThree" data-parent="#helpAccordion">
                <div class="card-body">
                    Email directly at <a href="mailto:contact@valentinbordea.com" class="text-primary font-weight-bold">contact@valentinbordea.com</a> for project inquiries or technical support.
                </div>
            </div>
        </div>
    </div>
</div>
