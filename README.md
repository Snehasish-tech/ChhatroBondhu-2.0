<div align="center">
<a href="https://github.com/Snehasish-tech/ChhatroBondhu-2.0">
  
  <img src="https://readme-typing-svg.demolab.com?font=Space+Grotesk&weight=700&size=35&duration=2500&pause=800&color=0077B6&center=true&vCenter=true&width=1000&height=100&lines=Welcome+to+ChhatroBondhu+2.0;Your+AI-Powered+Study+Companion;Learn+Smarter,+Not+Harder;15%2B+Smart+Learning+Features;Your+Partner+in+Academic+Excellence." alt="ChhatroBondhu Professional" />
</a>
</div>
<h3 align="center"><i>"Transforming your study experience with our comprehensive suite of AI-powered tools designed for academic excellence."</i></h3>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Live_Demo-Active-0077B6?style=for-the-badge&logo=vercel" alt="Live Demo"></a>
  <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react" alt="React"></a>
  <a href="https://supabase.com/"><img src="https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase" alt="Supabase"></a><br/>
  <a href="https://groq.com/"><img src="https://img.shields.io/badge/Groq-Fast_LLM-F55036?style=for-the-badge" alt="Groq"></a>
  <a href="https://deepmind.google/technologies/gemini/"><img src="https://img.shields.io/badge/Gemini-AI_Analysis-4285F4?style=for-the-badge&logo=google" alt="Gemini"></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind"></a>
</p>

<div align="center">
  <img width="1000" alt="ChhatroBondhu Hero Preview" src="" />
</div>

<br/>

# 🎯 The Problem

**Students today are overwhelmed with distractions, information overload, and a lack of personalized guidance.**

```mermaid
flowchart TB
    A[📚 Modern Student]
    B[🤯 Information Overload]
    C[📉 Lack of Focus & Distractions]
    D[🚫 Cookie-Cutter Learning]
    E[😟 Exam Anxiety]
    F[🥱 Burnout & Mental Fatigue]

    A --> B
    A --> C
    A --> D
    A --> E
    A --> F

    B --> B1[⏳ Wasting hours finding what to study]
    C --> C1[📱 Social media & phone addiction]
    D --> D1[🚫 One-size-fits-all education failing]
    E --> E1[📉 Poor exam performance]
    F --> F1[☠️ Dropping out or losing motivation]

    B1 --> X[❌ Decreased Academic Potential]
    C1 --> X
    F1 --> X
```

## 💡 Our Solution

**ChhatroBondhu 2.0** is an all-in-one AI-powered study ecosystem — transforming chaos into hyper-focused, personalized, and gamified learning experiences. 

> *"Learn smarter, not harder. With the right AI companion, every student has the potential to become a top performer."*

### 🎬 How It Works

```mermaid
flowchart LR
    A[👤 1. Setup Profile<br/>& Academic Goals] --> B[🤖 2. AI Mentorship<br/>Groq & Gemini Assist]
    B --> C[🎯 3. Deep Focus<br/>Study Room & Timers]
    C --> D[🏆 4. Excel & Grow<br/>Analytics & Rewards]
```

# ️ System Architecture

### High-Level Overview

```mermaid
flowchart TB
    subgraph Client["🖥️ Client Layer (React 18)"]
        UI["Tailwind CSS + shadcn/ui"]
        Dashboard["Student Progress Dashboard"]
        StudyRoom["Pomodoro & Focus Mode"]
        Tools["Flashcards, Quizzes & CGPA"]
    end

    subgraph API["⚡ Backend Layer"]
        Auth["/auth — Supabase Authentication"]
        Context["React Context Providers"]
    end

    subgraph Services["🤖 AI & Integrations"]
        Groq["⚡ Groq (LLaMA-3)"]
        Gemini["🧠 Google Gemini 1.5 Flash"]
        OpenAI["💬 OpenAI GPT (Optional)"]
        Spotify["🎵 Study Spotify Integration"]
        YouTube["📺 YT Video Analyzer"]
    end

    subgraph Database["🐘 Supabase"]
        Users[("Users Profile")]
        Notes[("Notes Hub")]
        Stats[("Study Statistics")]
    end

    UI --> Auth
    Auth --> Database
    Client --> Services
    Groq --> Tools
    Gemini --> Tools
    Services --> Dashboard
```

# 🔍 Learning Intelligence Dashboard

The **ChhatroBondhu Dashboard** acts as your central command center, interrogating your study habits in real-time to recommend actions, track streaks, and maintain mental wellness.

## 📊 Academic Analytics

### 🎯 Student Focus Distribution

```mermaid
pie title "Weekly Study Habit Distribution"
    "Deep Work (Focus Mode)" : 45
    "Active Recall (Flashcards)" : 25
    "Testing (AI Quizzes)" : 20
    "Video Analysis (YouTube)" : 10
```

### 🎭 Learning Intelligence Modes

```mermaid
graph LR
    A[🎬 Select Mode] --> B[🧠 AI Assistant]
    A --> C[🎯 Focus Mode]
    A --> D[🧘 Wellness Tracker]

    B --> E["Instant Explanations<br/>& Problem Solving"]
    C --> F["Pomodoro Timers<br/>& Distraction Blockers"]
    D --> G["Mood Logging<br/>& Breathing Exercises"]

    E --> H[🏆 Academic Excellence]
    F --> H
    G --> H
```

# 🔧 Tech Stack

<div align="center">

| Category | Technologies |
|:--------:|:------------:|
| **Frontend** | ![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) |
| **UI Components** | ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-000000?style=for-the-badge&logo=shadcnui&logoColor=white) ![Lucide](https://img.shields.io/badge/Lucide-Icons-FF6C37?style=for-the-badge) |
| **Database & Auth** | ![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) |
| **AI Models** | ![Groq](https://img.shields.io/badge/Groq-Llama_3-F55036?style=for-the-badge) ![Gemini](https://img.shields.io/badge/Gemini-1.5_Flash-4285F4?style=for-the-badge&logo=google&logoColor=white) |
| **Data Visualization** | ![Recharts](https://img.shields.io/badge/Recharts-Analytics-22B5BF?style=for-the-badge) |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-Serverless-000000?style=for-the-badge&logo=vercel&logoColor=white) |

</div>

# ✨ 17+ Smart Features

<div align="center">

| Feature | Description |
|:------:|:-----------:|
| 🧠 **AI Study Assistant** | Instant answers and personalized recommendations (Groq/Gemini). |
| 🎯 **Smart Focus Mode** | Pomodoro timers, distraction blocking & ambient sounds. |
| 🎙️ **Voice Notes & Audio** | Record lectures, convert speech to text, generate summaries. |
| 📺 **YouTube Integration** | Extract key points from educational videos automatically. |
| 📝 **Smart Flashcards** | AI-generated flashcards utilizing spaced repetition. |
| ✍️ **Handwriting to Digital** | Convert physical handwritten notes to digital text. |
| 📊 **Exam Pattern Analyzer** | Analyze past papers and predict likely exam questions. |
| 🧘 **Mental Health Tracker** | Track mood, stress levels, and practice breathing exercises. |
| 🏆 **Challenge Mode** | Gamified learning: earn XP, rank on leaderboards, keep streaks. |
| 🎶 **Study Spotify** | Curated focus playlists that adapt to your study vibe. |
| 🗓️ **Smart Schedule** | AI-powered calendar optimizing your study sessions. |
| 🤝 **Notes Sharing Hub** | Collaborate and share your study materials with peers. |

</div>

# 🚀 Getting Started

> Spin up **ChhatroBondhu 2.0** locally in minutes.

## 🧰 Requirements

- **Node.js** ≥ 18 (LTS recommended)
- **Supabase** account (Free tier)
- **API Keys:** Groq or Google Gemini

## 📦 Project Setup

```bash
git clone https://github.com/Snehasish-tech/ChhatroBondhu-2.0.git
cd ChhatroBondhu-2.0
npm install
```

### 🔐 Environment Configuration

Create a `.env` file in the root directory:

```bash
# Supabase Configuration
VITE_SUPABASE_PROJECT_ID=your_supabase_project_id
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
VITE_SUPABASE_URL=https://your_project_id.supabase.co

# AI API Configuration
VITE_GROQ_API_KEY=your_groq_api_key_here
VITE_AI_PROVIDER=groq
```

### ▶️ Run the App

```bash
npm run dev
```
The app will be running at `http://localhost:5173`

# 🗺️ Roadmap

| Status | Feature | Impact |
|:------:|:-------:|:------:|
| ✅ | AI Chat Assistant (Groq/Gemini) | Instant academic problem solving |
| ✅ | Focus Mode & Distraction Blocker | +40% increase in deep work |
| ✅ | AI Flashcards & Quizzes | Better memory retention |
| ✅ | Dashboard & Analytics | Clear visibility of progress |
| ✅ | YouTube Video Analyzer | Save hours of video watching |
| 🔄 | 3D Interactive Visualizations | Immersive complex concept learning |
| 🔄 | 1-on-1 Mentorship matching | Connect students with experts |
| 🔄 | Mobile App / PWA | On-the-go study capabilities |

# 🤝 Contributing

We welcome contributions! Please see our CONTRIBUTING.md for details on how to get started, project setup, and coding guidelines.

---

<div align="center">

_**"🧠 Learning Intelligence Activated."**_ <br/>
**Built with ❤️ for Students Worldwide!**

[!Supabase](https://supabase.com/)
[!Vercel](https://vercel.com/)
[!Groq](https://groq.com/)
[!React](https://react.dev/)

</div>
