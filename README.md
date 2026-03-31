## Project Title

> *Art Canvas — React-Based Drawing Application*

---

## Student Information

* **Name:** Yaju Bhasinka
* **Roll Number:** 34
* **Course / Program:** BCA
* **Semester / Year:** 3rd Semester / 2081

---

## Instructor Information

* **Instructor Name:** Mr. Dipak Shrestha
* **Course Title:** React Development / Full Stack Development
* **College Name:** Samriddhi College

---

## Project Overview

> This project is a browser-based drawing application developed using React.
> It allows users to draw freely on a digital canvas using a brush tool, pick colors, adjust brush size, and erase parts of their drawing.
> Users can save their drawings to the browser's localStorage and reopen them anytime from the gallery.
> The application is fully offline and requires no backend or internet connection to work.
> The main goal is to demonstrate core React concepts through a simple, practical, and visually clean drawing tool inspired by MS Paint.

---

## Objectives

* Build a responsive React application using functional components and hooks
* Implement real-world drawing features using the HTML5 Canvas API
* Understand and apply localStorage for client-side data persistence
* Apply clean UI/UX design principles

---

## Technologies Used

* Claude Ai
* Copilot

### Frontend

* React.js 
* HTML5 Canvas API
* CSS3 (Custom Styling)
* JavaScript (ES6+)

### Backend

* Not applicable — this is a fully frontend project with no backend

### Database

* Browser localStorage — used to store saved drawings as base64 image data

### Other Tools

* Git & GitHub
* Vite — Development server and build tool

---

## Key Features

* Freehand drawing using Brush tool on HTML5 Canvas
* Eraser tool to remove parts of the drawing
* 20-color preset palette with custom color picker
* Adjustable brush size from 1px to 50px
* Save drawings to localStorage with one click
* Gallery to view, load, and delete saved drawings
* Clear canvas button to start fresh
* Status bar showing active tool, brush size, and saved count
* Notification messages for Save, Load, Clear, and Delete actions

---

## Screens / Modules

* Drawing Canvas (Main Screen)
* Toolbar (File, Tools, Size, Color sections)
* Gallery Modal (Saved Drawings)
* Status Bar

---

## Installation & Setup
```bash
# Clone repository
git clone https://github.com/yajubhasinka/art-canvas.git

# Go to project folder
cd new-rproject

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## Project Structure
```
/new-rproject
│── src/
│   ├── components/
│   │   ├── Canvas.jsx
│   │   ├── Toolbar.jsx
│   │   ├── Button.jsx
│   │   ├── Icons.jsx
│   │   └── SavedDrawings.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│── index.html
│── package.json
│── vite.config.js
│── README.md
```

---

## GitHub & Live Demo

* **GitHub Repository:** (https://github.com/Samriddhicollege/React-project-ArtCanvas-By_YajuBhasinka.git)
* **Live URL :** https://react-project-art-canvas-by-yaju-bh.vercel.app/

---

## Testing

* Tested drawing functionality with different brush sizes and colors
* Verified localStorage save and load works correctly after page refresh
* Tested gallery modal — open, load, and delete saved drawings
* Checked edge cases — drawing on empty canvas, saving multiple drawings, clearing canvas

---

## Challenges Faced

* Difficulty in matching mouse coordinates to the correct drawing position on the canvas due to CSS scaling
* Passing the canvas DOM reference from Canvas.jsx up to App.jsx for saving the drawing
* Coordinating state updates and localStorage writes in the correct order to avoid saving empty data
* Managing multiple useState hooks across components without mixing up responsibilities

---

## Future Enhancements

* Add Undo / Redo functionality (Ctrl+Z support)
* Add shape tools — rectangle, circle, straight line
* Export canvas as a downloadable PNG or JPEG file
* Add Firebase cloud storage so drawings can be saved online and accessed from any device

---

## Acknowledgement

> I would like to thank my instructor **Mr. Dipak Shrestha** for guidance and support throughout this project.

---

## Declaration

> I hereby declare that this project is my original work and has been completed as part of my academic submission.
