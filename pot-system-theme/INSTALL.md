# POT System WordPress Theme — Installation Guide

## Requirements
- WordPress 6.0 or later
- PHP 7.4 or later

---

## Installation

1. **Zip the theme folder**
   - Compress `pot-system-theme/` into `pot-system-theme.zip`

2. **Upload to WordPress**
   - WordPress Admin → Appearance → Themes → Add New → Upload Theme
   - Choose `pot-system-theme.zip` → Install Now → Activate

3. **Create Pages** (in WordPress Admin → Pages → Add New)

   Create the following pages with these exact slugs:

   | Page Title                          | Slug              | Template auto-detected |
   |-------------------------------------|-------------------|------------------------|
   | Home                                | *(set as homepage)* | `front-page.php`     |
   | Architecture & Urban Planning       | `architecture`    | `page-architecture.php` |
   | Engineering                         | `engineering`     | `page-engineering.php` |
   | Construction & Project Management   | `construction`    | `page-construction.php` |
   | Contact                             | `contact`         | `page-contact.php` |
   | Smart Building                      | `smart-building`  | `page-smart-building.php` |

4. **Set the Homepage**
   - Settings → Reading → "A static page" → Homepage: select **Home**

5. **Set Permalinks**
   - Settings → Permalinks → Post name (`/%postname%/`) → Save Changes

---

## Contact Form

The EmailJS contact form is pre-configured with:
- **Service ID:** `service_029b0cp`
- **Template ID:** `template_gziidep`
- **Public Key:** `zqAAepO4DISqS5BeE`
- **reCAPTCHA:** v2 Checkbox

No additional configuration needed — the form is ready to use.

---

## Navigation

The nav links are automatically highlighted based on the current page.
To customise the menu, edit `header.php` and update the URLs, or set up a WordPress Custom Menu via Appearance → Menus.
