# 🪗 React Accordion (FAQ Component)

A simple and interactive **Accordion / FAQ component** built using **React.js**.  
It dynamically displays questions and answers from a local JSON file, allowing users to toggle each section open or closed.

---

## 🚀 Features

- 📂 Data-driven — questions and answers imported from a local `faq.json` file  
- ⚛️ Built with **React functional components**  
- 🪝 Uses **useState** and **useEffect** hooks for dynamic rendering  
- 🔁 Toggle functionality — click to open or close answers  
- 💅 Clean and responsive UI styled with CSS  
- 🧱 Component-based structure (`Accordion` and `FAQ` components)

---

## 🧠 How It Works

- The `Accordion` component fetches data from `faq.json` using the `useEffect` hook.  
- It maps each FAQ item into a reusable `FAQ` component.  
- Each `FAQ` component receives:
  - `curData` → current FAQ object (question & answer)
  - `isActive` → controls open/close state
  - `onToggle` → toggles visibility of the answer  
- Only one question can be open at a time for a clean user experience.