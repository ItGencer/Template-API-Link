# 📌 API Directory & Firebase Integration

**Проєкт для зберігання, перегляду та тестування безкоштовних API + налаштування Firebase**

## 📖 Опис проєкту

Цей проєкт створений як **збірник безкоштовних публічних API**, з можливістю переглядати інформацію про кожен API, відкривати посилання, тестувати ендпоінти та зберігати власні налаштування.  
Також реалізована **інтеграція Firebase** для зберігання даних, користувацьких конфігурацій та майбутньої авторизації.

Проєкт підійде для:

- вивчення JavaScript / TypeScript  
- практики роботи з API  
- тестування REST-запитів  
- зберігання власних API у хмарі  
- навчання роботі з Firebase  

---

## 🚀 Основний функціонал

### 🔗 **1. Каталог API**
- список безкоштовних JSON-API  
- інформація для кожного API: назва, опис, базове посилання  
- категоризація та пошук  
- можливість швидко перейти на сайт API  

### ⚙️ **2. Тестування API**
- форма для введення URL  
- відправка HTTP-запитів (GET/POST…)  
- показ результатів у форматі JSON  

### 🔥 **3. Інтеграція Firebase**
- початкове підключення Firebase  
- зберігання API у Firestore  
- можливість додавати власні API та зберігати їх у хмару  
- підготовка до майбутньої авторизації  

---

## 🛠️ Технології

- **HTML / SCSS / JavaScript**  
- **Firebase (Firestore, Hosting)**  
- **Fetch API** для роботи з HTTP-запитами  
- **Modular JS structure**  
- **ES Modules**

---

## 🔥 Firebase Setup

🔥 Як підключити Firebase до фронтенд-проєкту

### 1. ✅ Створити проєкт у Firebase
   1. Перейди на https://console.firebase.google.com
   2. Натисни Add project / Додати проєкт
   3. Введи назву → Continue
   4. Вимкни Google Analytics (не обов’язково) → Create project

### 2. ✅ Додати Web-додаток

Після створення проєкту:
1. У Project Overview натисни іконку </> Web App
2. Введи назву (наприклад: frontend-app)
3. Натисни Register app

Після реєстрації Firebase дасть тобі такий код:

```js
const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdefg12345"
};
```

Це твої ключі — їх треба вставити у проєкт.

### 3. 🛠 Встановити Firebase SDK
#### 👉 Варіант 1: звичайний JavaScript / TypeScript

У корені проєкту:
```bash
npm install firebase

// Глобально встановити
npm install -g firebase-tools
```
#### 👉 Варіант 2: Angular

Angular 16+ також встановлює Firebase так само:
```bash
npm install firebase
```

Якщо хочеш офіційний AngularFire:
```bash
ng add @angular/fire
```

Після цього Angular CLI сам попросить вставити ключі.

### 4. 🧩 Ініціалізація Firebase у твоєму коді

Створи файл:
```bash
src/firebase.js
```

і встав:
```js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "XXXX",
  authDomain: "XXXX",
  projectId: "XXXX",
  storageBucket: "XXXX",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

// Start Firebase
export const app = initializeApp(firebaseConfig);
```
### 5. 📦 Підключення потрібних сервісів
Firestore
```js
import { getFirestore } from "firebase/firestore";
export const db = getFirestore(app);
```
Authentication
```js
import { getAuth } from "firebase/auth";
export const auth = getAuth(app);
```
Storage
```js
import { getStorage } from "firebase/storage";
export const storage = getStorage(app);
```
### 6. 🧪 Перевірка — зробимо тестовий запит до Firestore
```js
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

async function addTest() {
  await addDoc(collection(db, "test"), {
    name: "Gencer",
    created: Date.now()
  });
}
addTest();
```

Якщо колекція створилась — Firebase працює 🎉

## Deploy to Firebase Hosting
1. You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.

Sign in to Google

```bash
firebase login
```

2. Initiate your project Run this command from your app's root directory:

```bash
firebase init
```
3. When you're ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:

```bash
firebase deploy
```

4. After deploying, view your app at template-api-link.web.app
Need help? Check out the Hosting docs

### Якщо будуть помилки

## ✅ 🔥 РІШЕННЯ — №1 (ПРАВИЛЬНЕ)
Ти маєш запускати проект через локальний сервер

Наприклад:

Якщо використовуєш VS Code → Live Server

1. Постав розширення Live Server
2. Відкрий проект
3. Натисни Go Live
4. Проект відкриється на:
```ccp
http://127.0.0.1:5500/
```

І імпорти Firebase працюватимуть.

## ✅ РІШЕННЯ №2 — npm + Vite (найкраще для ES Modules)

Якщо запускаєш проект через Node:
```bash
npm init -y
npm install firebase
npm install vite --save-dev
```
У package.json додай:
```json
"scripts": {
  "dev": "vite",       // дає посилання хостінга
  "dev": "vite --open" // дає посилання хостінга і одразу його відкриває
}
```

Запуск:
```bash
npm run dev
```

🔥 Тоді import "firebase/firestore" працюватиме 100%.

### Отримання даних з Firebase Database
1. Не забуваййте у Firebase Database або у Realtime Database (Api link) в rules
- Firebase Database

```firebase
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```
- Realtime Database

```firebase
{
  "rules": {
    ".read": true, // на ваш росуд
    ".write": true // на ваш росуд
  }
}
```

2. Для того щоб витягнути дані

```js

// ДОДАТИ тестовий документ
async function addTest() {
  try {
    await addDoc(collection(db, "test"), {
      name: "Gencer",
      created: Date.now()
    });
    console.log("Document added!");
  } catch (err) {
    console.error("Error:", err);
  }
}
```

```js
// ОТРИМАТИ всі документи
async function getData() {
  try {
    const querySnapshot = await getDocs(collection(db, "test"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (err) {
    console.error("Error:", err);
  }
}

addTest();
getData();
```