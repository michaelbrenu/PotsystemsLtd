<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/logo-full.jpg" type="image/jpeg" />
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

  <!-- ── Navigation ──────────────────────── -->
  <nav class="nav">
    <div class="nav-inner">
      <a class="nav-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>">
        <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/logo-full.jpg" class="nav-logo-img" alt="POTSystem Limited" />
        <div class="brand-name">POTSystem<span>Architecture · Engineering · Construction</span></div>
      </a>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links">
        <?php pot_nav_link( 'Home', 'home', home_url( '/' ) ); ?>
        <?php pot_nav_link( 'Architecture &amp; Urban Planning', 'architecture', home_url( '/architecture/' ) ); ?>
        <?php pot_nav_link( 'Engineering', 'engineering', home_url( '/engineering/' ) ); ?>
        <?php pot_nav_link( 'Construction &amp; Project Management', 'construction', home_url( '/construction/' ) ); ?>
        <?php pot_nav_link( 'Contact', 'contact', home_url( '/contact/' ) ); ?>
      </ul>
      <div class="nav-cta">
        <a class="cta-btn" href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Contact
          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="2" y1="10" x2="10" y2="2"/><polyline points="4,2 10,2 10,8"/></svg>
        </a>
      </div>
    </div>
  </nav>
  <div class="nav-overlay"></div>
