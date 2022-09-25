module.exports = {
  content: [
    './layout/*.{liquid, json}',
    './templates/*.{liquid, json}',
    './templates/customers/*.{liquid, json}',
    './sections/*.{liquid, json}',
    './snippets/*.{liquid, json}'
  ],
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}