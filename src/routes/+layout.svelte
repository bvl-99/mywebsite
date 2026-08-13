<script>
    import '../app.css'; // Adjust path if necessary
</script>

<div class="app-container d-flex flex-column min-vh-100">

    <slot /> <!-- This loads your pages -->

    <!-- UPDATED 2026 FOOTER -->
    <footer class="text-center py-4 mt-auto w-100" style="background-color: #f8f9fa;">
        <div class="container">
            <p class="mb-0 text-muted font-weight-bold">
                2026 &copy; valentinbordea.com. All Rights Reserved.
            </p>
        </div>
    </footer>
</div>
