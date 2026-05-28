<div align="center">

<br/>

```
██╗   ██╗███╗   ██╗██╗██╗     ██╗███████╗███████╗
██║   ██║████╗  ██║██║██║     ██║██╔════╝██╔════╝
██║   ██║██╔██╗ ██║██║██║     ██║█████╗  █████╗  
██║   ██║██║╚██╗██║██║██║     ██║██╔══╝  ██╔══╝  
╚██████╔╝██║ ╚████║██║███████╗██║██║     ███████╗
 ╚═════╝ ╚═╝  ╚═══╝╚═╝╚══════╝╚═╝╚═╝     ╚══════╝
```

### 🎓 *"Everything a Student Needs, In One Place."*

<br/>

[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS%20%7C%20Web-4A90D9?style=for-the-badge)](/)
[![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen?style=for-the-badge)](/)
[![Made For](https://img.shields.io/badge/Made%20For-Students%20🎓-blueviolet?style=for-the-badge)](/)
[![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)](LICENSE)

<br/>

> **UniLife** is a comprehensive student productivity ecosystem built to simplify every aspect of university life —  
> from tracking attendance and deadlines to managing finances and calculating your CGPA.  
> One app. Zero chaos.

<br/>

---

</div>

## Table of Contents

- [About the Project](#-about-the-project)
- [Why UniLife?](#-why-unilife)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

##  About the Project

University life is exciting — but also overwhelming. Between managing lectures, assignments, group projects, exams, and finances, students often feel scattered and stressed. Most existing apps solve *one* problem at a time, forcing students to juggle 5–6 different tools.

**UniLife** was built to change that.

It's a **Student Daily Life Ecosystem** — a single, unified platform where every tool a student needs lives together. Whether you're a freshman trying to survive your first semester or a final-year student grinding your GPA, UniLife adapts to your academic journey.

This project was created with a deep understanding of student pain points, especially within the South Asian university context where attendance requirements, CGPA-based grading, and tight student budgets are real daily concerns.

---

##  Why UniLife?

| Problem | UniLife Solution |
|---|---|
| "I forgot to submit the assignment!" | Smart assignment reminders with deadline alerts |
| "Am I going to lose attendance?" | Real-time attendance tracking with shortage warnings |
| "I spent all my money and don't know where it went." | Visual budget tracker with category-wise breakdowns |
| "What's my CGPA this semester?" | Instant CGPA calculator with grade simulation |
| "I can't find the notes from last week's class." | Shared notes hub with classmates |
| "I keep getting distracted while studying." | Built-in study timer using the Pomodoro technique |

---

##  Features

###  Attendance Tracker
Never fall below your required attendance percentage again. UniLife lets you:
- Log attendance for each subject separately
- Automatically calculate your current attendance percentage
- Get **early warnings** when you're approaching the minimum threshold
- View a weekly/monthly attendance calendar
- See how many classes you can afford to miss — or need to attend to recover

---

###  Assignment Reminder
Stay on top of every deadline without the anxiety. Features include:
- Add assignments with subject name, deadline date & time, and priority level
- Receive **push notifications** before the deadline (24 hrs, 6 hrs, 1 hr)
- Mark assignments as completed and track your submission history
- Color-coded urgency indicators (urgent, upcoming, completed)
- Support for multiple assignment types: homework, projects, presentations, quizzes

---

###  Notes Sharing
A collaborative academic resource hub for your batch and department:
- Upload and share notes, PDFs, slides, and handwritten scans
- Browse notes by subject, semester, or topic
- Bookmark important notes for quick access
- Rate and review shared resources to highlight quality material
- Reduce dependency on scattered WhatsApp groups and Google Drive folders

---

###  Budget Tracking
Student life on a budget — made manageable:
- Set a monthly budget and track spending in real time
- Categorize expenses: food, transport, books, entertainment, etc.
- Visual charts showing where your money goes each month
- Get alerts when you're nearing your budget limit
- View spending history and spot patterns over time
- Designed specifically for student spending habits

---

###  CGPA Calculator
Stop guessing your grades — know them:
- Enter your course credits and grades to instantly compute your CGPA
- Supports standard **4.0 and 5.0 GPA scales** (configurable)
- **Simulate future grades** — see what you need to score to hit your target CGPA
- Semester-wise GPA breakdown and cumulative history
- Supports both letter grades (A+, A, B+…) and numerical grades

---

###  Study Timer
Build focus. Beat procrastination. Study smarter:
- **Pomodoro technique** built-in: 25-minute focus sessions with short breaks
- Customizable session lengths and break intervals
- Tracks total study hours per day, week, and month
- Subject-wise study log — know exactly how much time you've invested
- Ambient focus sounds (rain, café noise, white noise) to minimize distraction
- Streak tracking to build consistent study habits

---

##  Tech Stack

> *(Update with your actual stack)*

**Frontend**
- React Native / Flutter *(cross-platform mobile)*
- React.js *(web dashboard)*
- Tailwind CSS / NativeWind

**Backend**
- Node.js + Express.js
- REST API architecture

**Database**
- MongoDB (user data, notes, assignments)
- Firebase Realtime Database (live sync for shared notes)

**Authentication**
- Firebase Auth / JWT tokens

**Notifications**
- Firebase Cloud Messaging (FCM)

**Other Tools**
- Chart.js / Recharts *(budget & CGPA visualizations)*
- AsyncStorage / SecureStore *(local persistence)*

---

##  Getting Started

### Prerequisites

Make sure you have the following installed:

```bash
node >= 18.x
npm >= 9.x
git
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/unilife.git

# 2. Navigate into the project directory
cd unilife

# 3. Install dependencies
npm install

# 4. Set up environment variables
cp .env.example .env
# → Fill in your Firebase config, MongoDB URI, JWT secret, etc.

# 5. Start the development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory with the following:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_PROJECT_ID=your_firebase_project_id
FCM_SERVER_KEY=your_fcm_server_key
```

---

## 📁 Project Structure

```
unilife/
├── client/                  # Frontend (React / React Native)
│   ├── components/          # Reusable UI components
│   ├── screens/             # App screens
│   │   ├── Attendance/
│   │   ├── Assignments/
│   │   ├── Notes/
│   │   ├── Budget/
│   │   ├── CGPA/
│   │   └── StudyTimer/
│   ├── context/             # Global state management
│   └── utils/               # Helper functions
│
├── server/                  # Backend (Node.js + Express)
│   ├── controllers/         # Route logic
│   ├── models/              # Database schemas
│   ├── routes/              # API endpoints
│   ├── middleware/          # Auth & error handling
│   └── config/              # DB and service configs
│
├── .env.example
├── package.json
└── README.md
```

---

##  Screenshots

> *(Coming soon — screenshots will be added after UI completion)*

| Attendance Tracker | Assignment Reminders | Budget Dashboard |
|---|---|---|
| *Screenshot* | *Screenshot* | *Screenshot* |

| CGPA Calculator | Notes Sharing | Study Timer |
|---|---|---|
| *Screenshot* | *Screenshot* | *Screenshot* |

---

##  Roadmap

### Phase 1 — Foundation 
- [x] Project concept & feature planning
- [x] UI/UX wireframing
- [x] Repository setup

### Phase 2 — Core Development 
- [ ] User authentication (login/signup)
- [ ] Attendance Tracker module
- [ ] Assignment Reminder with notifications
- [ ] CGPA Calculator

### Phase 3 — Advanced Features 
- [ ] Notes Sharing with file upload
- [ ] Budget Tracker with visual charts
- [ ] Study Timer with Pomodoro mode

### Phase 4 — Polish & Launch 
- [ ] UI polish and dark mode
- [ ] Performance optimization
- [ ] Beta testing with real students
- [ ] Public release on Play Store / App Store

---

##  Contributing

Contributions are what make open-source projects thrive. If you'd like to help build UniLife:

1. **Fork** the repository
2. **Create** your feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** your changes
   ```bash
   git commit -m "feat: add your feature description"
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** and describe what you've changed

Please make sure your code follows the existing code style and includes relevant comments.

---

##  License

Distributed under the **MIT License**.  
See [`LICENSE`](LICENSE) for full details.

---

## Author

**Your Name**
- Arpita
- Monojit
- Snehasish
- Avijit
- Muskan

---

<div align="center">

<br/>

*Built with 💙 for students who deserve better tools.*

<br/>

⭐ **Found this useful? Drop a star — it means a lot and helps others discover the project!** ⭐

<br/>

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=Monoartiam99.uni_life)

</div>
