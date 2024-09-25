# MCA Cricket Tournaments Website

Welcome to the **MCA Cricket Tournaments Website**! This project is a comprehensive platform designed to organize and manage various cricket tournaments across different formats. Leveraging modern web technologies, it offers an engaging user experience with 3D visualizations, smooth animations, and a seamless multi-step registration process.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Components](#components)
  - [NavBar](#navbar)
  - [Sidebar](#sidebar)
  - [Canva](#canva)
  - [Clump](#clump)
  - [Pointer](#pointer)
  - [Sex](#sex)
  - [Men](#men)
  - [Women](#women)
  - [RegistrationForm](#registrationform)
  - [Step Components](#step-components)
- [Routing](#routing)
- [Animations](#animations)
- [3D Rendering](#3d-rendering)
- [Form Handling](#form-handling)
- [State Management](#state-management)
- [Styling](#styling)
- [Backend Integration](#backend-integration)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview

The MCA Cricket Tournaments Website is a dynamic platform that facilitates the organization of cricket tournaments in various formats such as T20, ODI, Test, T10, and Domestic leagues. The website offers users an interactive experience with features like animated parallax sections, 3D visualizations, and a multi-step registration form for enrolling teams and players.

## Features

- **Responsive Navigation Bar**: Easily navigate between different sections of the website.
- **Interactive Sidebar**: Provides quick links to important sections like About, Players, Formats, MCA, and Contact.
- **3D Visualizations**: Enhanced with Three.js and React-Three-Fiber for engaging graphics.
- **Smooth Animations**: Implemented using GSAP and ScrollTrigger for a seamless user experience.
- **Multi-step Registration Form**: Allows users to register teams and players through an intuitive multi-step process.
- **Responsive Design**: Ensures the website looks great on all devices.
- **Backend Integration**: Form submissions are handled via Axios, sending data to a backend server.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **React Router**: Handles routing within the application.
- **GSAP (GreenSock Animation Platform)**: For advanced animations.
- **ScrollTrigger**: A GSAP plugin for scroll-based animations.
- **Three.js**: 3D JavaScript library for rendering 3D graphics.
- **@react-three/fiber**: React renderer for Three.js.
- **@react-three/cannon**: Physics integration for React-Three-Fiber.
- **@react-three/drei**: Useful helpers for React-Three-Fiber.
- **@react-three/postprocessing**: Post-processing effects for React-Three-Fiber.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: Promise-based HTTP client for the browser.
- **React Context API**: For state management across components.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Ni1esh-Yadav/Cricket_UII/tree/main

  ## Start Frontend Server
  
   cd ref-object-clump
   ```

2. Install Dependencies

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the necessary packages:

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   ```

   The application will run at `http://localhost:5127`.

   ## Backend Server
   
   cd..
   
   cd server
   
   1. **Install Dependencies**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the necessary packages:

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   node app.js
   ```

   The application will run at `http://localhost:5000`

## Usage

1. **Navigate the Website**

   Use the navigation bar to explore different sections like Men, Women, Registration Form, etc.

2. **View Tournaments**

   Scroll through various tournament formats like T20, ODI, Test, T10, and Domestic. Each section provides detailed information and an option to enroll.

3. **Register Your Team**

   Click on the "Enroll" button in any tournament section to start the multi-step registration process.

4. **Submit Registration**

   Fill out the form across multiple steps and submit your team details. The data is sent to the backend server for processing.

## Folder Structure

```
mca-cricket-tournaments/
├── public/
│   ├── index.html
│   └── assets/
│       └── img/
├── src/
│   ├── Components/
│   │   ├── NavBar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Men.jsx
│   │   ├── Women.jsx
│   │   ├── RegistrationForm.jsx
│   │   └── Sex.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── hooks/
│   │   └── useParallaxEffect.js
│   ├── styles/
│   │   └── (CSS files)
│   ├── steps/
│   │   ├── Step1.jsx
│   │   ├── Step2.jsx
│   │   ├── Step3.jsx
│   │   └── Summary.jsx
│   ├── three/
│   │   ├── Canva.jsx
│   │   ├── Clump.jsx
│   │   └── Pointer.jsx
│   ├── App.jsx
│   ├── index.js
│   └── ...other files
├── package.json
├── README.md
└── ...other files
```

## Components

### NavBar

**File:** `src/Components/NavBar.jsx`

The `NavBar` component provides the main navigation for the website, allowing users to access different sections like Home, Men, Women, and Registration.

**Key Features:**

- Responsive design using Tailwind CSS.
- Contains links to various routes managed by React Router.

### Sidebar

**File:** `src/Components/Sidebar.jsx`

The `Sidebar` component offers additional navigation and information sections such as About, Players, Formats, MCA, and Contact.

**Key Features:**

- Conditionally rendered based on the `isOpen` state from `AppContext`.
- Uses Tailwind CSS for styling and responsiveness.
- Contains links that are hidden on smaller screens (`hidden md:block`).

### Canva

**File:** `src/three/Canva.jsx`

The `Canva` component sets up the 3D scene using Three.js and React-Three-Fiber.

**Key Features:**

- Configures the Three.js canvas with camera settings.
- Adds lighting and environment effects.
- Integrates physics using `@react-three/cannon`.
- Includes post-processing effects like Ambient Occlusion and SMAA.
- Contains 3D objects like `Pointer` and `Clump`.
- Adds orbit controls for interactive navigation.

### Clump

**File:** `src/three/Clump.jsx`

The `Clump` component creates a group of spheres with physics applied.

**Key Features:**

- Uses `useSphere` from `@react-three/cannon` to handle physics.
- Dynamically scales based on viewport size.
- Applies forces to spheres in the `useFrame` hook to create movement.
- Uses textures for visual enhancement.

### Pointer

**File:** `src/three/Pointer.jsx`

*(Assumed similar to `Clump.jsx` but not provided. Ensure to implement or update accordingly.)*

### Sex

**File:** `src/Components/Sex.jsx`

The `Sex` component provides navigation options to different player categories, namely Men and Women.

**Key Features:**

- Animates into view using GSAP and ScrollTrigger.
- Contains images with hover effects for interactivity.
- Navigates to respective routes on click.

### Men

**File:** `src/Components/Men.jsx`

The `Men` component displays information about men's cricket tournaments in various formats with parallax scrolling effects.

**Key Features:**

- Utilizes GSAP for parallax animations.
- Contains multiple sections, each representing a different tournament format.
- Each section includes a background image, description, and an enroll button.

### Women

**File:** `src/Components/Women.jsx`

*(Assumed similar structure to `Men.jsx` but tailored for women's tournaments. Ensure to implement or update accordingly.)*

### RegistrationForm

**File:** `src/Components/RegistrationForm.jsx`

The `RegistrationForm` component manages a multi-step form for team and player registration.

**Key Features:**

- Handles multiple steps: Captain Registration, Player Details, Team Information, and Summary.
- Manages form state using React's `useState`.
- Navigates between steps using `nextStep` and `prevStep` functions.
- Submits form data to the backend using Axios.

### Step Components

#### Step1

**File:** `src/steps/Step1.jsx`

Handles the first step of registration: Captain Registration.

**Fields:**

- Full Name
- Date of Birth
- Phone Number
- Address

#### Step2

**File:** `src/steps/Step2.jsx`

Handles the second step of registration: Player Details.

**Fields:**

- Playing 11
- Substitute Player

#### Step3

**File:** `src/steps/Step3.jsx`

Handles the third step of registration: Team Information.

**Fields:**

- Team Name
- Captain Name

#### Summary

**File:** `src/steps/Summary.jsx`

Displays a summary of all entered data and handles form submission.

**Key Features:**

- Shows all form data for review.
- Submits data to the backend server via Axios.
- Provides user feedback upon successful or failed submission.

## Routing

The application uses **React Router** to manage client-side routing. The routes are defined in `src/index.js` using `createBrowserRouter`:

- `/` : Renders the `Canva` component.
- `/Women` : Renders the `Women` component.
- `/Men` : Renders the `Men` component.
- `/RegistrationForm` : Renders the `RegistrationForm` component.

The `App` component serves as the main layout, including the `NavBar` and an `Outlet` for nested routes.

## Animations

**GSAP** and **ScrollTrigger** are used to create smooth and engaging animations throughout the website.

- **Parallax Effects**: Implemented in the `Men` component to create a depth effect as users scroll through different tournament sections.
- **Fade-In Animations**: Applied to content sections to smoothly appear as they enter the viewport.
- **Interactive Elements**: Buttons and images have hover effects for better interactivity.

**Example: Parallax Effect in Men Component**

```javascript
useEffect(() => {
  gsap.utils.toArray(".parallax-section").forEach((section) => {
    gsap.fromTo(
      section.querySelector(".content"),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  });
}, []);
```

## 3D Rendering

The project integrates **Three.js** through **React-Three-Fiber** to render interactive 3D graphics.

- **Canvas Setup**: Configured in the `Canva` component with lighting, environment, and camera settings.
- **Physics Integration**: Managed by `@react-three/cannon` to simulate realistic movements.
- **Post-processing Effects**: Applied using `@react-three/postprocessing` for ambient occlusion and anti-aliasing.

**Example: Clump Component**

```javascript
const Clump = () => {
  // ...setup and useSphere hook

  useFrame(() => {
    // Apply forces to spheres
  });

  return (
    <instancedMesh
      // ...mesh properties
    >
      {/* Mesh details */}
    </instancedMesh>
  );
};
```

## Form Handling

The multi-step registration form is built using React's state management and handles user input across multiple steps.

- **State Management**: Managed via `useState` in `RegistrationForm.jsx`.
- **Navigation**: Users can move between steps using `Next` and `Back` buttons.
- **Submission**: Form data is submitted to a backend server using Axios.

**Example: Handling Form State**

```javascript
const [formData, setFormData] = useState({
  name: '',
  DateofBirth: '',
  PhoneNumber: '',
  Address: '',
  Playing11: '',
  Substitute: '',
  TeamName: '',
  CaptainName: '',
});

const handleChange = (input) => (e) => {
  setFormData({ ...formData, [input]: e.target.value });
};
```

## State Management

The application uses the **React Context API** to manage global state across components.

**AppContext**

- **File:** `src/context/AppContext.jsx`
- **Purpose:** Manages the `isOpen` state for components like `Sidebar`.
  
**Example: Using AppContext in Sidebar**

```javascript
const { isOpen } = useContext(AppContext);

return (
  <div className={`... ${isOpen ? 'translate-y-0' : '-translate-y-full'} ...`}>
    {/* Sidebar content */}
  </div>
);
```

## Styling

**Tailwind CSS** is used extensively for styling components, ensuring a responsive and modern design.

- **Utility Classes**: Used for layout, spacing, colors, and typography.
- **Responsive Design**: Achieved through Tailwind's responsive utilities like `md:w-full`, `lg:w-1/5`, etc.
- **Hover Effects**: Applied for interactivity on buttons and images.

**Example: Button Styling in Men Component**

```html
<button onClick={onEnroll} className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
  T-20 Enroll
</button>
```

## Backend Integration

The registration form submits data to a backend server using **Axios**.

**Summary Component**

- **File:** `src/steps/Summary.jsx`
- **Functionality:** Sends form data to `http://localhost:5000/submit` via a POST request.

**Example: Form Submission**

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:5000/submit', formData, {
      headers: { 'Content-Type': 'application/json' },
    });
    alert('Registration complete! Backend received the data.');
  } catch (error) {
    alert('There was an error submitting the form');
  }
};
```

**Note:** Ensure that the backend server is set up to handle the POST request at the specified endpoint.

## Screenshots
![Hero](https://github.com/user-attachments/assets/fe6facfc-689b-45eb-9236-8fd9f9ed2a66)

![Sex](https://github.com/user-attachments/assets/0416ffa4-f8d8-4346-a7b7-864be25d92a9)

![Men](https://github.com/user-attachments/assets/5f08a69d-49e8-4f81-baa6-b8b36ce71fcf)

![Registration](https://github.com/user-attachments/assets/b12b74bd-9f46-4e42-826e-32d281bef03a)

## Contact

For any questions or feedback, please reach out to:

- **Email:** Nm9172@gmail.com
- **GitHub:** [Ni1esh-Yadav](https://github.com/Ni1esh-Yadav/Cricket-UI)

---

Thank you for checking out the MCA Cricket Tournaments Website! We hope it serves as a robust platform for organizing and managing cricket tournaments seamlessly.
