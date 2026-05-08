# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
GRAVELGO/
│
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── images/
│       ├── hero.jpg
│       ├── stone.jpg
│       ├── sand.jpg
│       ├── cement.jpg
│       └── gravel.jpg
│
├── src/
│
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── CartItem.jsx
│   │   └── Loader.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Catalog.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── OrderForm.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── AdminDashboard.jsx
│   │   └── NotFound.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── styles/
│   │   └── main.css
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js