# 🧩 MultiApp Dashboard

MultiApp Dashboard is a simple, responsive **single-page web dashboard** that hosts multiple mini applications such as an **Expense Tracker**, **Weather App**, and **To-Do Manager**. It is built using **vanilla web technologies** and leverages **Browser APIs** for state management and dynamic UI updates.

---

## 🚀 Tech Stack

* **Frontend:** HTML5, CSS3
* **Language:** JavaScript (ES6)
* **APIs:** Weather API, Browser APIs (DOM, Local Storage)

---

## ✨ Features

### 🌦️ Weather App

* Fetches real-time weather data by city
* Displays temperature and weather conditions
* Uses external Weather API with asynchronous requests

### 📝 To-Do Manager

* Create, read, update, and delete tasks (CRUD)
* Persistent task storage using `localStorage`
* Dynamic UI updates without page reloads

### 💰 Expense Tracker

* Add and track daily expenses
* Client-side data persistence
* Clean UI with real-time updates

### 🧠 Dashboard Architecture

* Single-page dashboard hosting multiple apps
* Modular JavaScript structure
* Centralized state management using Browser APIs
* Clean code practices for readability and maintainability

---

## 📁 Project Structure

```
multiapp-dashboard/
├── index.html
├── style.css
├── javascript/
│   ├── weather.js
│   ├── todo.js
│   ├── expenseTracker.js
│   └── script.js
└── README.md
```

---

## 🛠️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Sulakshyana/multiapp-dashboard.git
cd multiapp-dashboard
```

### 2️⃣ Open in Browser

Simply open `index.html` in your preferred browser:

```bash
open index.html
```

or use a local server (recommended):

```bash
npx serve
```

---

## ⚙️ Configuration

* Add your **Weather API key** inside the relevant JavaScript file:

```js
const API_KEY = "YOUR_API_KEY";
```

* No backend or database required
* All data is stored locally in the browser

---

## 📌 Key Learnings

* Working with Browser APIs
* Managing application state using `localStorage`
* DOM manipulation and event handling
* Structuring modular JavaScript applications
* Building SPAs without frameworks

---

## 🔮 Future Improvements

* Dark mode support
* User authentication
* IndexedDB for advanced storage
* Charts and analytics for expenses
* Progressive Web App (PWA) support

---

## 👤 Maintainer

**Your Name**
GitHub: [https://github.com/Sulakshyana](https://github.com/Sulakshyana)
