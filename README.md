# Agile - The Ultimate WorkFlow Management Platform

![Next.js](https://img.shields.io/badge/Next.js-14.2.14-black?style=for-the-badge&logo=next.js)  
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)  
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)  
![Prisma](https://img.shields.io/badge/Prisma-5.20.0-2D3748?style=for-the-badge&logo=prisma)  
![Clerk](https://img.shields.io/badge/Clerk-5.7.1-red?style=for-the-badge&logo=clerk)  

**Agile** is a modern, intuitive, and feature-rich work management platform designed to help teams organize, track, and manage their projects efficiently. With Agile, teams can effortlessly plan sprints, track issues, and collaborate in real-time.

---

## ✨ Features

✅ **Drag & Drop Kanban Boards** – Organize tasks visually with an easy-to-use board system powered by `@hello-pangea/dnd`.  
✅ **Authentication & Authorization** – Secure user authentication via `@clerk/nextjs`.  
✅ **Dark Mode Support** – Seamless theme switching with `next-themes`.  
✅ **Rich Text Editing** – Markdown support via `@uiw/react-md-editor`.  
✅ **Interactive UI Components** – Built using `@radix-ui/react` and `lucide-react` icons.  
✅ **Form Handling & Validation** – Robust form validation with `react-hook-form` and `zod`.  
✅ **Real-time Notifications** – Integrated toast notifications with `sonner`.  
✅ **Optimized Performance** – Utilizes `Prisma` ORM and `TailwindCSS` for a smooth experience.  

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)  
- **Backend**: [Prisma](https://www.prisma.io/), [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)  
- **Authentication**: [Clerk](https://clerk.dev/)  
- **State Management**: React Context API  
- **Styling & UI**: [Radix UI](https://www.radix-ui.com/), [ShadCN UI](https://ui.shadcn.com/)  

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (Latest LTS version recommended)
- **npm** or **pnpm** (Preferred for package management)
- **PostgreSQL** (Recommended for Prisma ORM)

### Installation

Clone the repository:
```sh
 git clone https://github.com/your-username/agile.git
 cd agile
```

Install dependencies:
```sh
 npm install  # or pnpm install
```

Set up environment variables:
```sh
 cp .env.example .env
```

Generate Prisma client:
```sh
 npx prisma generate
```

Start the development server:
```sh
 npm run dev  # or pnpm run dev
```

Now, open **http://localhost:3000** in your browser. 🚀

---

## 📌 Folder Structure
```
/agile
 ├── /app             # Next.js App Router
 ├── /components      # Reusable UI components
 ├── /pages           # Traditional Next.js pages
 ├── /prisma          # Prisma ORM schema
 ├── /public          # Static assets
 ├── /styles         # Global styles
 ├── .env.example     # Environment variables template
 ├── package.json     # Dependencies & scripts
 ├── tailwind.config.js # TailwindCSS configuration
 └── next.config.js   # Next.js configuration
```

---

## 💡 Contributing

We welcome contributions! 🚀

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

---

## ⚡ License

This project is licensed under the **MIT License**.

