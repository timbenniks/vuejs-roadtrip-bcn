# Nuxt 3 Vue.js BCN

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## You need an ENV file with:
```
CONTENTFUL_SPACE_ID=
CONTENTFUL_DELIVERY_API_KEY=
CONTENTFUL_PREVIEW_API_KEY=

BIGCOMMERCE_API_TOKEN=
BIGCOMMERCE_STORE_HASH=

UNIFORM_API_KEY=
UNIFORM_PROJECT_ID=
```

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
