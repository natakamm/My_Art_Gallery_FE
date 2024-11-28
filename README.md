# My Art Gallery

My Art Gallery is a project where users can create galleries, upload projects, showcase progress pictures, comment on projects, and favorite them. They are also able to create their own blog posts and share their knowledge with others. This is a full-stack web app using Node.js (for the backend), React.js (for the frontend), MongoDB (as a database), and JWT authentication.

## File Structure

```
src
├── assets
│ └── images
├── components
│   ├── shared
│   │   ├── Button.jsx         # Reusable Button component
│   │   ├── Modal.jsx          # Reusable Modal (for displaying popups)
│   │   ├── Navbar.jsx         # Site-wide navigation bar
│   │   ├── Footer.jsx         # Site-wide footer
│   │   ├── Input.jsx          # Reusable Input field component
│   │   └── Spinner.jsx
│   └── gallery
├── context
│ ├── UserContext.jsx # Handles user details
│ ├── ProjectContext.jsx # Manages gallery and project data
│ ├── BlogContext.jsx # Handles user-written blog posts
│ ├── AuthContext.jsx # Handles login, signup, logout, and stores user JWT
│ └── CommentsContext.jsx # Manages comments (CRUD operations)
├── pages
│   ├── Login.jsx
│   ├── SignUp.jsx
│   └── Homepage.jsx
├── App.jsx
├── main.jsx
├── index.css
├── App.scss
├── tailwind.config.js
└── postcss.config.js
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Install Vite

`npm create vite@latest new-react-app -- --template react`

### Navigate into your project directory:

`cd new-react-app`

### Install Dependencies

`npm install`

### Install and Configure Tailwind CSS

Next, we will install Tailwind CSS

### Install Tailwind CSS

`npm install -D tailwindcss postcss autoprefixer`

### Initialize Tailwind CSS

`npx tailwindcss init -p`

### Configure Tailwind

### In the tailwind.config.js file, replace the content with the following:

```
/** @type {import('tailwindcss').Config} */
export default {
content: ['./index.html', './src/**/\*.{js,ts,jsx,tsx}'],
theme: {
extend: {}
},
plugins: []
};
```

### Add Tailwind Directives

Open the index.css file located in the src folder, and replace its content with the Tailwind CSS directives:

@tailwind base;
@tailwind components;
@tailwind utilities;

### Install Daisy UI

`npm i -D daisyui`

### Configure Daisy UI

In your tailwind.config.js file, add daisyui to the plugins array:

```
/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
content: ['./index.html', './src/**/\*.{js,ts,jsx,tsx}'],
theme: {
extend: {}
},
plugins: [daisyui]
};
```

### Install Sass

`npm install sass`

Check out the various UI components from [Daisy](https://daisyui.com/components/) here.
