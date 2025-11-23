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

Перед запуском необхідно створити Firebase проєкт і додати такі ключі:

``` javescript
// firebase-config.js
export const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

Після цього ініціалізуйте Firebase у вашому коді:

``` javescript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

## ▶️ Запуск проєкту

### 1. Скачайте або клонуйте репозиторій:

``` javescript
git clone https://github.com/ItGencer/Template-API-Link.git
```

### 2. Встановіть залежності (якщо є):

``` javescript
npm install
```

### 3. Запустіть локальний сервер:

``` javescript
npm run dev
```

### 4. Відкрийте у браузері:

``` javescript
http://localhost:3000
```

## 📌 План розвитку

- 🔐 Авторизація через Firebase Auth
- ⭐ Збереження улюблених API
- 🌓 Темна/світла тема
- 📊 Статистика використання API
- 🌐 Додавання тестування POST / PUT / DELETE