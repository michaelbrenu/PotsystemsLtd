<?php
/**
 * POT System Theme — functions.php
 */

/* ── Theme Setup ──────────────────────────────────────────────────────── */
function pot_system_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    register_nav_menus( [ 'primary' => __( 'Primary Menu', 'pot-system' ) ] );
}
add_action( 'after_setup_theme', 'pot_system_setup' );

/* ── Enqueue Styles & Scripts ─────────────────────────────────────────── */
function pot_system_enqueue_scripts() {

    // Google Fonts preconnect (added via wp_head action below)
    wp_enqueue_style(
        'pot-system-fonts',
        'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Barlow:wght@400;500;600&family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;900&family=Fira+Sans:wght@400;500;600;700&display=swap',
        [],
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'pot-system-style',
        get_template_directory_uri() . '/assets/css/styles.css',
        [ 'pot-system-fonts' ],
        '1.0.0'
    );

    // Nav (hamburger toggle)
    wp_enqueue_script(
        'pot-system-nav',
        get_template_directory_uri() . '/assets/js/nav.js',
        [],
        '1.0.0',
        true
    );

    // Cookie consent banner
    wp_enqueue_script(
        'pot-system-cookies',
        get_template_directory_uri() . '/assets/js/cookies.js',
        [],
        '1.0.0',
        true
    );

    // Scroll animations (ES module)
    wp_enqueue_script(
        'pot-system-animations',
        get_template_directory_uri() . '/assets/js/animations.js',
        [],
        '1.0.0',
        true
    );

    // Contact page only: EmailJS + reCAPTCHA
    if ( is_page( 'contact' ) ) {
        wp_enqueue_script(
            'emailjs-sdk',
            'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js',
            [],
            null,
            false
        );
        wp_enqueue_script(
            'google-recaptcha',
            'https://www.google.com/recaptcha/api.js',
            [],
            null,
            false
        );
    }
}
add_action( 'wp_enqueue_scripts', 'pot_system_enqueue_scripts' );

/* ── Add type="module" to animations script tag ───────────────────────── */
add_filter( 'script_loader_tag', function ( $tag, $handle ) {
    if ( $handle === 'pot-system-animations' ) {
        return str_replace( '<script ', '<script type="module" ', $tag );
    }
    return $tag;
}, 10, 2 );

/* ── Google Fonts preconnect hints ───────────────────────────────────── */
add_action( 'wp_head', function () {
    echo '<link rel="preconnect" href="https://fonts.googleapis.com" />' . "\n";
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />' . "\n";
}, 1 );

/* ── Nav helper: output a nav <li> with active class ─────────────────── */
function pot_nav_link( $label, $page_slug, $url ) {
    if ( $page_slug === 'home' ) {
        $is_active = is_front_page();
    } else {
        $is_active = is_page( $page_slug );
    }
    $active = $is_active ? ' class="active"' : '';
    printf( '<li><a href="%s"%s>%s</a></li>', esc_url( $url ), $active, $label );
}
