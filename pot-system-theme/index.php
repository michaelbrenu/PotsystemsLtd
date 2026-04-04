<?php
/**
 * Fallback template — redirects to front page.
 * WordPress requires index.php to exist in every theme.
 */
get_header(); ?>

<div class="section">
  <div class="container" style="text-align:center;padding:80px 20px;">
    <h1 class="section-title">Page Not Found</h1>
    <p class="prose" style="margin-bottom:28px;">The page you are looking for does not exist.</p>
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn-primary">Back to Home</a>
  </div>
</div>

<?php get_footer();
