# 📩 React Contact Form with EmailJS

A simple and secure contact form in React that sends emails **without
any backend API**, using **EmailJS**.

This project uses:

-   **React + Vite**
-   **EmailJS (`sendForm`)**
-   **Environment variables (`.env`)**
-   **HTML-based EmailJS Template**

------------------------------------------------------------------------

## ⭐ Features

✔ No backend required\
✔ Sends email directly from the browser\
✔ Uses secure EmailJS public keys\
✔ Works with HTML email templates\
✔ Very easy to customize

------------------------------------------------------------------------

## 📁 Project Structure

    src/
     ├── components/
     │    └── ContactForm.jsx
     ├── App.jsx
     └── main.jsx
    .env

------------------------------------------------------------------------

## 🔧 Installation

``` sh
npm install @emailjs/browser
```

------------------------------------------------------------------------

## 🔑 Setup EmailJS

### 1. Create a free EmailJS account

👉 https://www.emailjs.com/

### 2. Create:

-   **Email Service**
-   **Email Template**
-   **Public Key**

### 3. Add these variables in `.env` (Vite uses `VITE_` prefix)

    VITE_EMAILJS_PUBLIC_KEY=UhPZS7jbEpQt3tco4
    VITE_EMAILJS_SERVICE_ID=service_f6n7enk
    VITE_EMAILJS_TEMPLATE_ID=template_bk787ap

> Restart your development server after editing `.env`.

------------------------------------------------------------------------

## ▶️ Run the app

``` sh
npm run dev
```

------------------------------------------------------------------------

## ❗ Troubleshooting

### **400 --- The template ID not found**

-   Template ID is wrong\
-   Template variables do not match your form\
-   Missing `.env` variables

### **Grammarly "Iterable" error**

This comes from the Grammarly extension → **ignore it**.

------------------------------------------------------------------------

## ✅ Done!

Your React app can now send emails **with no backend**, using EmailJS.
