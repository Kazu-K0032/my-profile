module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['@typescript-eslint', 'tailwindcss'],
  rules: {
    quotes: ['error', 'double'],
    'no-console': 'warn',
  },
};
