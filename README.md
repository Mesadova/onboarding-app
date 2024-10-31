# Onboarding digital (React)

## 📄 Description

This repository contains a **digital onboarding app** based on sliding cards using React framework. The application is modular and may serve as a template with a non-fixed number of cards and information. For each object values of an array, it creates a series of sliding cards with keys title, description, background color and image. The app provides a two-way sliding navigation: via buttons (one card at a time, `RenderButtons.jsx`) and global position (access any card in the app, `Indicator.jsx`).

## ✨ Features

- **React functionalities:** Allows user-application interaction via JavaScript code. The app is modular and each component is independent from the others, meaning that component deletion/modification won't affect the others functionality.

- **Modularity:** The application allow for an undefined number of cards without the need of configuring the app's components.

- **Responsive design:** Use of responsive design for mobile and desktop devices compatibility, providing an overall uniform experience in all platforms.

## 💻 Technologies

- React
- HTML
- CSS

## 📋 Requirements

This project uses the following tools and libraries:

- **Vite:** For fast development builds.
- **React:** JavaScript library for building user interfaces.
- **Styled Components:** To manage component styling.
- **Bootstrap:** For responsive design and reusable UI components.

## 🛠️ Project setup

### ✔️ - Prerequisites

Ensure you have `Node.js` installed. Then, clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/onboarding-app.git
cd ./onboarding-app/
npm install
```

### ✔️ - Running the project

1. Development Server with Vite:** 

    Start the Vite development server by running:

```bash
npm run dev
```

The project will run on `http://localhost:5173` by default.

2. **Using Styled Components and Bootstrap:**

    Styled Components is used for component-specific styles. Styles are created in JavaScript and scoped to individual components.
    Bootstrap is used to provide responsive layout and additional UI components.

```bash
npm install styled-components
npm install react-bootstrap
```
