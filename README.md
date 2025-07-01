#  Lab 2: Custom Hooks Implementation 

This project implements two custom React Hooks: `usePagination` and `useDebounce`. Each hook is built to encapsulate reusable logic for managing pagination and debounced input handling. Demo components are provided to showcase how each hook works in a real application.

---

## Project Structure

```
src/
├── hooks/
│ ├── usePagination.js
│ └── useDebounce.js
├── components/
│ ├── PaginationDemo.jsx
│ └── DebounceSearchDemo.jsx
├── App.jsx
├── index.css
└── main.jsx
```
 
## Features
### usePagination
- Tracks page state and item range
- Provides `nextPage`, `prevPage`, and `setPage`
- Handles edge cases safely

### useDebounce
- Returns value after delay
- Built with `useEffect` and cleanup
- Useful for APIs, search bars, filters

## Technologies Used

- React (Functional Components)
- Tailwind CSS
- Vite
- JavaScript (ES6)

## Setup Instructions

```bash
npm create vite@latest lab2-custom-hooks
cd lab2-custom-hooks
npm install
npm install tailwindcss @tailwindcss/vite
```

## Run
``` bash
npm run dev
```

## Screenshot

![image](https://github.com/user-attachments/assets/46c74931-0bd2-4328-97d7-6e6ca266f39d)


### 1. Clone the Repo

```bash
git clone  https://github.com/HaidaMarese/lab2-custom-hooks.git
cd lab2-custom-hooks
```



