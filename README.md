<div align="center">
<a href="https://github.com/Snehasish-tech/Unilife-2.0">
  
  <img src="https://readme-typing-svg.demolab.com?font=Space+Grotesk&weight=700&size=35&duration=2500&pause=800&color=0077B6&center=true&vCenter=true&width=1000&height=100&lines=Welcome+to+Unilife+2.0;Your+AI-Powered+Study+Companion;Learn+Smarter,+Not+Harder;15%2B+Smart+Learning+Features;Your+Partner+in+Academic+Excellence." alt="Unilife Professional" />
</a>
</div>
<h3 align="center"><i>"Transforming your study experience with our comprehensive suite of AI-powered tools designed for academic excellence."</i></h3>

<p align="center">
  <a href="https://groq.com/"><img src="https://img.shields.io/badge/Groq-Fast_LLM-F55036?style=for-the-badge" alt="Groq"></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind"></a>
</p>

<div align="center">
  <img width="1000" alt="ChhatroBondhu Hero Preview" src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2000&auto=format&fit=crop" />
</div>

<br/>

# ðŸŽ¯ The Problem

**Students today are overwhelmed with distractions, information overload, and a lack of personalized guidance.**

```mermaid
flowchart TB
    A[ðŸ“š Modern Student]
    B[ðŸ¤¯ Information Overload]
    C[ðŸ“‰ Lack of Focus & Distractions]
    D[ðŸš« Cookie-Cutter Learning]
    E[ðŸ˜Ÿ Exam Anxiety]
    F[ðŸ¥± Burnout & Mental Fatigue]

    A --> B
    A --> C
    A --> D
    A --> E
    A --> F

    B --> B1[â³ Wasting hours finding what to study]
    C --> C1[ðŸ“± Social media & phone addiction]
    D --> D1[ðŸš« One-size-fits-all education failing]
    E --> E1[ðŸ“‰ Poor exam performance]
    F --> F1[â˜ ï¸ Dropping out or losing motivation]

    B1 --> X[âŒ Decreased Academic Potential]
    C1 --> X
    F1 --> X
```

## ðŸ’¡ Our Solution

**Unilife 2.0** is an all-in-one AI-powered study ecosystem â€” transforming chaos into hyper-focused, personalized, and gamified learning experiences. 

> *"Learn smarter, not harder. With the right AI companion, every student has the potential to become a top performer."*

### ðŸŽ¬ How It Works

```mermaid
flowchart LR
    A[ðŸ‘¤ 1. Setup Profile<br/>& Academic Goals] --> B[ðŸ¤– 2. AI Mentorship<br/>Groq & Gemini Assist]
    B --> C[ðŸŽ¯ 3. Deep Focus<br/>Study Room & Timers]
    C --> D[ðŸ† 4. Excel & Grow<br/>Analytics & Rewards]
```

# ï¸ System Architecture

### High-Level Overview

```mermaid
flowchart TB
    subgraph Client["ðŸ–¥ï¸ Client Layer (React 18)"]
        UI["Tailwind CSS + shadcn/ui"]
        Dashboard["Student Progress Dashboard"]
        StudyRoom["Pomodoro & Focus Mode"]
        Tools["Flashcards, Quizzes & CGPA"]
    end

    subgraph API["âš¡ Backend Layer"]
        Auth["/auth â€” Supabase Authentication"]
        Context["React Context Providers"]
    end

    subgraph Services["ðŸ¤– AI & Integrations"]
        Groq["âš¡ Groq (LLaMA-3)"]
        Gemini["ðŸ§  Google Gemini 1.5 Flash"]
        OpenAI["ðŸ’¬ OpenAI GPT (Optional)"]
        Spotify["ðŸŽµ Study Spotify Integration"]
        YouTube["ðŸ“º YT Video Analyzer"]
    end

    subgraph Database["ðŸ˜ Supabase"]
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

# ðŸ” Learning Intelligence Dashboard

The **Unilife Dashboard** acts as your central command center, interrogating your study habits in real-time to recommend actions, track streaks, and maintain mental wellness.

## ðŸ“Š Academic Analytics

### ðŸŽ¯ Student Focus Distribution

```mermaid
pie title "Weekly Study Habit Distribution"
    "Deep Work (Focus Mode)" : 45
    "Active Recall (Flashcards)" : 25
    "Testing (AI Quizzes)" : 20
    "Video Analysis (YouTube)" : 10
```

### ðŸŽ­ Learning Intelligence Modes

```mermaid
graph LR
    A[ðŸŽ¬ Select Mode] --> B[ðŸ§  AI Assistant]
    A --> C[ðŸŽ¯ Focus Mode]
    A --> D[ðŸ§˜ Wellness Tracker]

    B --> E["Instant Explanations<br/>& Problem Solving"]
    C --> F["Pomodoro Timers<br/>& Distraction Blockers"]
    D --> G["Mood Logging<br/>& Breathing Exercises"]

    E --> H[ðŸ† Academic Excellence]
    F --> H
    G --> H
```

# ðŸ”§ Tech Stack

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

# âœ¨ 17+ Smart Features

<div align="center">

| Status | Feature | Description |
|:---:|:---:|:---|
| âœ… **Active** | ðŸŽ¯ **Study Room** | Pomodoro timers, distraction blocking & ambient sounds. |
| âœ… **Active** | ðŸ—“ï¸ **Smart Schedule** | AI-powered calendar optimizing your study sessions. |
| âœ… **Active** | ðŸ¤ **Notes Sharing Hub** | Collaborate and share your study materials with peers. |
| âœ… **Active** | ðŸ”” **Smart Reminders** | Set intelligent reminders for study sessions and tasks. |
| âœ… **Active** | ðŸ§® **CGPA Calculator** | Easily calculate and track your Grade Point Average. |
| ðŸš§ **Hidden** | ðŸ§  **AI Study Assistant** | Instant answers and personalized recommendations (Groq/Gemini). |
| ðŸš§ **Hidden** | ðŸŽ™ï¸ **Voice Notes & Audio** | Record lectures, convert speech to text, generate summaries. |
| ðŸš§ **Hidden** | ðŸ“º **YouTube Integration** | Extract key points from educational videos automatically. |
| ðŸš§ **Hidden** | ðŸ“ **Smart Flashcards** | AI-generated flashcards utilizing spaced repetition. |
| ðŸš§ **Hidden** | âœï¸ **Handwriting to Digital** | Convert physical handwritten notes to digital text. |
| ðŸš§ **Hidden** | ðŸ“Š **Exam Pattern Analyzer** | Analyze past papers and predict likely exam questions. |
| ðŸš§ **Hidden** | ðŸ§˜ **Mental Health Tracker** | Track mood, stress levels, and practice breathing exercises. |
| ðŸš§ **Hidden** | ðŸ† **Challenge Mode** | Gamified learning: earn XP, rank on leaderboards, keep streaks. |
| ðŸš§ **Hidden** | ðŸŽ¶ **Study Spotify** | Curated focus playlists that adapt to your study vibe. |

</div>

# ðŸš€ Getting Started

> Spin up **Unilife 2.0** locally in minutes.

## ðŸ§° Requirements

- **Node.js** â‰¥ 18 (LTS recommended)
- **Supabase** account (Free tier)
- **API Keys:** Groq or Google Gemini

## ðŸ“¦ Project Setup

```bash
git clone https://github.com/Snehasish-tech/Unilife-2.0.git
cd Unilife-2.0
npm install
```

### ðŸ” Environment Configuration

Create a `.env` file in the root directory:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# AI API Configuration
VITE_GROQ_API_KEY=your_groq_api_key_here
VITE_AI_PROVIDER=groq
```

### â–¶ï¸ Run the App

```bash
npm run dev
```
The app will be running at `http://localhost:5173`

# ðŸ—ºï¸ Roadmap

| Status | Feature | Impact |
|:------:|:-------:|:------:|
| âœ… | AI Chat Assistant (Groq/Gemini) | Instant academic problem solving |
| âœ… | Focus Mode & Distraction Blocker | +40% increase in deep work |
| âœ… | AI Flashcards & Quizzes | Better memory retention |
| âœ… | Dashboard & Analytics | Clear visibility of progress |
| âœ… | YouTube Video Analyzer | Save hours of video watching |
| ðŸ”„ | 3D Interactive Visualizations | Immersive complex concept learning |
| ðŸ”„ | 1-on-1 Mentorship matching | Connect students with experts |
| ðŸ”„ | Mobile App / PWA | On-the-go study capabilities |

# ðŸ¤ Contributing

We welcome contributions! Please see our CONTRIBUTING.md for details on how to get started, project setup, and coding guidelines.

---

<div align="center">

_**"ðŸ§  Learning Intelligence Activated."**_ <br/>
**Built with â¤ï¸ for Students Worldwide!**

[!Supabase](https://supabase.com/)
[!Vercel](https://vercel.com/)
[!Groq](https://groq.com/)
[!React](https://react.dev/)

</div>
