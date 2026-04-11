# Task Manager

**Student Name:** Allen G Meti  
**Student ID:** 24019726  
**Module:** INFS 202  
**Project:** Midterm Project — React Web Application  

---

## Description

A task management web application built with React and TypeScript. Users can create, view, edit, delete, and mark tasks as complete. Tasks can be filtered by status and searched by title. Each task has a title, description, priority level, and due date.

---

## Technologies Used

- React
- TypeScript
- React Router DOM
- Vite
- CSS

---

## Features

- View all tasks in a list
- Add new tasks with a form
- Edit existing tasks
- Delete tasks
- Mark tasks as complete or undo
- Filter tasks by All, Pending, or Done
- Search tasks by title
- View full task details on a separate page
- Form validation with error messages
- Responsive layout

---

## Project Structure
src/
├── components/
│   ├── Navbar.tsx
│   └── TaskCard.tsx
├── pages/
│   ├── Home.tsx
│   ├── List.tsx
│   ├── Details.tsx
│   └── AddTask.tsx
├── App.tsx
└── main.tsx

---

## How to Run

1. Make sure you have Node.js installed
2. Download or clone the project
3. Open a terminal in the project folder
4. Run the following commands:
```bash
npm install
npm run dev
```

5. Open your browser and go to `http://localhost:5173`

---

## Pages

| Route | Page |
|---|---|
| /home | Home page with task summary |
| /list | Full list of all tasks |
| /add | Form to add a new task |
| /details/:id | Full details of a single task |

---

## Screenshots

Screenshots are in the `/screenshots` folder.