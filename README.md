# 📝 NextJS To-Do App

A modern, responsive to-do list application built with Next.js, TypeScript, and Tailwind CSS. This app allows users to create, edit, and delete tasks with a clean and intuitive interface.

## ✨ Features

- ✅ **Add Tasks**: Create new to-do items with ease
- 📝 **Edit Tasks**: Modify existing tasks in-place
- 🗑️ **Delete Tasks**: Remove completed or unwanted tasks
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI**: Clean interface built with Tailwind CSS and DaisyUI
- 🔄 **Real-time Updates**: Instant UI updates using Next.js router refresh
- 📊 **Task Management**: View all tasks in a organized table format
- 🆔 **Unique IDs**: Each task has a UUID for reliable identification

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Database**: JSON Server (local development)
- **UUID Generation**: [UUID v4](https://www.npmjs.com/package/uuid)

## 📦 Project Structure

```
to-do-app/
├── app/
│   ├── components/
│   │   ├── AddTask.tsx      # Add new task component
│   │   ├── Modal.tsx        # Reusable modal component
│   │   ├── Task.tsx         # Individual task item
│   │   └── ToDoList.tsx     # Task list container
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── data/
│   └── todos.json           # Local JSON database
├── types/
│   └── tasks.ts             # TypeScript interfaces
├── api.ts                   # API functions for CRUD operations
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vlicvn/next-js-to-do-app
   cd to-do-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the JSON Server** (in a separate terminal)
   ```bash
   npm run json-server
   ```
   This will start the JSON server on `http://localhost:3001`

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to (http://localhost:3000) to see the application

## 📋 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality
- `npm run json-server` - Start the JSON Server for local data storage

## 🎯 Usage

### Adding a Task
1. Click the "Add new task" button
2. Enter your task title in the modal
3. Click "Add Task" to save

### Editing a Task
1. Click the green edit icon (✏️) next to any task
2. Modify the task title in the modal
3. Click "Save Changes" to update

### Deleting a Task
1. Click the red delete icon (🗑️) next to any task
2. Confirm the deletion in the modal
3. Click "Yes" to permanently remove the task

## 🔧 API Endpoints

The app uses JSON Server to simulate a REST API:

- `GET /tasks` - Retrieve all tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update an existing task
- `DELETE /tasks/:id` - Delete a task

## 🎨 Design Features

- **DaisyUI Components**: Uses pre-built DaisyUI components for consistent styling
- **Modal Interactions**: Smooth modal animations for add/edit/delete operations
- **Responsive Tables**: Mobile-friendly table design for task display
- **Icon Integration**: Intuitive icons from React Icons library
- **Modern Typography**: Geist font family for clean readability

## 🔮 Future Enhancements

- [ ] Task completion status (checkbox functionality)
- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Search and filter functionality
- [ ] Drag and drop reordering
- [ ] Data persistence with a real database
- [ ] User authentication
- [ ] Dark/light theme toggle

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Vlicvn**

---

Made with ❤️ using Next.js and TypeScript