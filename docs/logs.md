# Logbook

## SPA

Creating a [SPA](history.md#historic-context-of-web-development) using only [client-side rendering](strategies.md#client-side-rendering-csr) with React.

- 26.03.2024 - 1 hour
  - Setup a React app with vite and tailwind in the pnpm monorepo
  - Migrate the [Nordic Shop Tailwind template](https://github.com/tailwindtoolbox/Nordic-Store/blob/master/index.html) and separate it into sections as components

## Astro

Creating an [MPA](history.md#historic-context-of-web-development) using only [server-side rendering](strategies.md#pure-server-side-rendering-ssr) with Astro.

- 08.07.2024 - 1 hour
  - Setup a Astro app with tailwind in the pnpm monorepo
  - Migrate the [Nordic Shop Tailwind template](https://github.com/tailwindtoolbox/Nordic-Store/blob/master/index.html) and separate it into sections as components
    - _I could copy, paste the React component content from the [SPA](#spa) with the following replacements_
      - `className` -> `class`
      - `htmlFor` -> `for`
      - `defaultChecked` -> `checked`