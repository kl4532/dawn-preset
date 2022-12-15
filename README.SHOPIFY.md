# Dawn preset

## Shopify cheatscheet
**HELP** ````shopify````

Login ````shopify login````

Switch stores ```` shopify switch --store STORE````

Serve ```` shopify theme serve````


## Tailwind
### Included extensions:
- Tailwind 3.1.8

### Tailwind setup:
**In dawn-preset tailwind already set, only ``npm i`` is needed.**

#### OPTIONAL setup guide

Install Tailwind, postcss & autoprefixer dependencies

`npm instal -D tailwindcss @tailwindcss/forms @tailwindcss/typography postcss autoprefixer`

Settings for Tailwind located in:
- `tailwind.config.js`
- `postcss.config.js`
- `src/tailwind.css`

Copy those files to your new setup.

Add `tailwind.css` into `assets/`

Add @import ``tailwind.css`` in ``assets/base.css``

[//]: # (Breaks something...)
[//]: # (Add `{{ 'tailwind.css' | asset_url | stylesheet_tag }}` to the `layout/theme.liquid`)

## Run Tailwind watch
To create and watch tailwind styles run:
`npx tailwind -i ./src/tailwind.css -o ./assets/tailwind.css --watch` 

