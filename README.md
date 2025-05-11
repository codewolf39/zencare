# Zencare – AI-Powered Healthcare Management Platform

Zencare is a full-stack, AI-driven healthcare management system designed to streamline doctor-patient interaction with modern UI, real-time SMS notifications, intelligent symptom analysis, and a responsive PWA experience.

## 🌐 Live Demo

> [Add your deployed link here]

---

## 📸 Screenshots

> ![Welcome Page](screenshots/welcome_page.png) > ![Registration Page](screenshots/registration_page.png) > ![Admin Dashboard](screenshots/admin_dashboard.png) > _Add screenshots inside the `screenshots/` folder._

---

## 🚀 Features

- User Authentication & Secure Registration
- AI Chatbot for Symptom Detection (Google Gemini API)
- Real-time Appointment Booking with SMS Notifications (Twilio)
- Admin Dashboard to manage appointments
- Fully Responsive UI (Mobile First)
- Modern form components: OTP, Date Picker, Country Input
- Performance Monitoring with Sentry
- Appwrite Integration for Backend & File Storage

---

## 📦 Tech Stack

**Frontend:** Next.js, TypeScript, Tailwind CSS, Shadcn/UI, React Hook Form, Zod  
**Backend:** Appwrite, Twilio  
**AI Integration:** Google Gemini API  
**Monitoring:** Sentry

---

## 🛠️ Installation

```bash
git clone https://github.com/yourusername/zencare.git
cd zencare
npm install
```

> Create a `.env.local` file in the root and configure the following:

```
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
GEMINI_API_KEY=your_gemini_key
SENTRY_DSN=your_sentry_dsn
```

---

## ▶️ Running the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 📂 Folder Structure

```
zencare/
├── components/
├── pages/
│   ├── index.tsx
│   ├── register.tsx
├── lib/
├── public/
│   └── screenshots/
├── styles/
└── utils/
```

---

## 📝 Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📣 Acknowledgements

- [Appwrite](https://appwrite.io/)
- [Twilio](https://www.twilio.com/)
- [Google Gemini](https://deepmind.google/technologies/gemini/)
- [Sentry](https://sentry.io/)
- [Shadcn/UI](https://ui.shadcn.dev/)

---

## 📄 License

[MIT](LICENSE)

---

## ✨ Project Status

✅ Completed & Deployed  
📈 Achieved 100% working integration with Appwrite, Twilio, and Gemini API  
👥 Used by 5+ team members collaboratively
