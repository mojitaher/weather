# 🌦️ Weather App

A simple weather forecast application built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It fetches real-time weather data from [WeatherAPI](https://www.weatherapi.com/).

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

or

```bash
yarn install
```

### 3️⃣ Setup environment variables

To run this project, you need to set up your own API keys.

1. Go to [WeatherAPI](https://www.weatherapi.com/) and create a free account.
2. Copy your API key from the dashboard.
3. Create a `.env.local` file.
4. Add your values:

We are using environment variables to store API keys and configs.

- Copy `.env.example` to `.env.local` using in the main project terminal:

-‍‍‍‍```bash
cp .env.example .env.local

- Then, open `.env.local` and update it with your **real API key**:

```env
NEXT_PUBLIC_API_BASE=http://api.weatherapi.com/v1
NEXT_PUBLIC_API_KEY=your_api_key_here
```

> ⚠️ Never commit `.env.local` to GitHub. Only `.env.example` should be in the repo.

### 4️⃣ Run the development server

```bash
npm run dev
```

or

```bash
yarn dev
```

Now open [http://localhost:3000](http://localhost:3000) with your browser.

---

## 📂 Project Structure

```
.
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom hooks
│   ├── styles/          # Global styles
│   └── utils/           # Helper functions
├── .env.example         # Example environment variables
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) – React framework
- [TypeScript](https://www.typescriptlang.org/) – Static typing
- [Tailwind CSS](https://tailwindcss.com/) – Styling
- [WeatherAPI](https://www.weatherapi.com/) – Weather data

---

## 🌍 Deployment

The project is ready to be deployed on **Vercel**:

1. Push your code to GitHub.
2. Import the repo in [Vercel](https://vercel.com/).
3. Add environment variables from `.env.local` into Vercel settings.
4. Deploy 🚀

---
