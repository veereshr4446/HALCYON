<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=4F7DF3,6C63FF,743CFF&height=140&section=header" width="100%"/>

# ⚡ HALCYON

### Unified Student Dashboard

**Academic Intelligence · Productivity · Student Tools · Community**

A modern student-focused web dashboard that brings academic information,
performance insights, productivity tools, personalization, and student
community access into one interface.

<br>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-HALCYON-4F7DF3?style=for-the-badge)](https://halcyon-student-dashboard.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-111827?style=for-the-badge&logo=github)](https://github.com/veereshr4446/HALCYON)
[![Stack](https://img.shields.io/badge/Stack-HTML%20%7C%20CSS%20%7C%20JavaScript-6C63FF?style=for-the-badge)](#-technology-stack)
[![Status](https://img.shields.io/badge/Status-Working%20Prototype-743CFF?style=for-the-badge)](#-project-status)

</div>

---

> ⚠️ **Prototype Notice**
>
> HALCYON is an independently developed student project and is currently a
> working frontend prototype using demonstration data. It is **not an official
> RYMEC application**.

---

## ✦ What is HALCYON?

**HALCYON** is a student-centric web dashboard designed to bring commonly
used academic information and student utilities into one place.

The project combines:

- 📊 Academic overview and analytics
- 📚 Attendance and CIE information
- 📅 Timetable and important dates
- 👨‍🏫 Faculty information and local ratings
- 🎓 Academic calculation tools
- ⏱️ Productivity and Pomodoro tools
- 📝 Planner and notes
- 👤 Student profile and personalization
- 👥 Social Hub and student community access
- 🌙 Dark / Light theme

The current version is a **client-side prototype** built with HTML, CSS,
and JavaScript.

> **One dashboard. Multiple aspects of student life.**

---

# 🚀 Core Experience

<table>
<tr>
<td width="50%">

### 📊 Academic Intelligence

- Dashboard overview
- Attendance tracking
- CIE performance
- Subject-wise analytics
- Below-85% subject view
- Performance charts
- Timetable
- Important dates

</td>

<td width="50%">

### ⚡ Productivity

- Pomodoro focus timer
- Focus / break sessions
- Session history
- Planner
- Task filtering
- Progress tracking
- Notes
- Exam countdown

</td>
</tr>

<tr>
<td>

### 🎓 Academic Utilities

- SGPA calculator
- Attendance What-If calculator
- Academic report / print view
- Faculty directory
- Faculty rating interface
- Subject information

</td>

<td>

### 👥 Student Experience

- Student profile
- Editable name and bio
- Avatar selection
- Badges and progress
- Study groups
- Student leaderboard
- Classmate search
- Unofficial RYMEC community link

</td>
</tr>
</table>

---

# ✨ Feature System

## 📈 Dashboard

The dashboard provides a quick academic snapshot instead of making
students navigate through multiple sections.

It includes:

- Day streak
- Total subjects
- Overall attendance
- CIE overview
- Subjects below 85%
- College events
- Quick statistics
- Goals and progress

---

## 🧠 Performance Analytics

HALCYON converts academic values into visual information using charts.

```text
Academic Data
      ↓
Processing
      ↓
Visualization
      ↓
Insight
      ↓
Action
```

The analytics layer provides:

- Attendance trends
- CIE comparisons
- Subject performance
- Overall academic patterns
- Quick identification of lower-attendance subjects

---

## 📚 Academics

The academic area provides dedicated sections for:

- Attendance
- Subjects & CIE
- Timetable
- Faculty
- Analytics
- Academic Tools

The timetable and academic content currently use demonstration data.

---

# 🎓 Academic Tools

### SGPA Calculator

Students enter:

```text
Subject
Credits
Marks
```

JavaScript processes the values and calculates an **estimated SGPA**
using the implemented credit-weighted grade-point logic.

### Attendance What-If Calculator

The What-If tool allows students to explore attendance scenarios and
understand how future classes can affect their percentage.

### Exam Countdown

A dedicated countdown helps students track important academic dates.

### Academic Report

HALCYON includes a report/print view for presenting a student's academic
summary.

---

# 👨‍🏫 Faculty

The Faculty section provides:

- Faculty directory
- Subject mapping
- Department information
- Faculty detail view
- Local star-rating interface

Faculty ratings in the prototype are stored locally in the browser and
are not presented as official college evaluations.

---

# ⏱️ Productivity Layer

HALCYON is designed not only to display academic information, but also
to provide tools that help students act on it.

### Pomodoro Focus System

```text
┌─────────────────┐
│      FOCUS      │
│      25:00      │
└────────┬────────┘
         ↓
┌─────────────────┐
│      BREAK      │
│      05:00      │
└────────┬────────┘
         ↓
     Next Session
```

Features include:

- Focus timer
- Break timer
- Custom focus durations
- Session completion
- Focus history
- Productivity statistics
- Session streak tracking

---

# 📝 Planner & Notes

### Planner

Students can:

- Add tasks
- Assign subjects
- Set priorities
- Add dates
- Mark tasks complete
- Filter tasks
- Track completion progress
- Delete tasks

### Notes

Students can create quick note entries with:

- Title
- Subject
- Description
- Google Drive link

The current notes system stores the note information in the browser;
it does not upload files itself.

---

# 👤 Personalization

HALCYON includes a client-side profile system.

### Profile

- Editable name
- Editable bio
- Avatar selection
- Badges
- Progress information
- Profile statistics

Selected profile information and preferences are stored locally using
the browser's **LocalStorage API**.

---

# 👥 Social Hub

The Social Hub provides a prototype student interaction area.

### Current prototype features

```text
Study Groups
      │
      ├── AI Study Circle
      ├── Python Coders Club
      ├── Maths Doubt Solvers
      └── Chem Lab Prep Squad

Leaderboard
      │
      └── Student progress

Find Classmates
      │
      └── Search by name / USN / branch
```

The study groups, leaderboard, and classmate records are **demonstration
data** in the current prototype.

### RYMEC Student Community

HALCYON also provides a link to an **unofficial RYMEC student community**
for student interaction, opportunities, academics, hackathons, and
discussion.

The community itself is external to the HALCYON frontend.

---

# 🎨 HALCYON Design System

HALCYON uses a clean dashboard interface with blue/purple accents,
responsive layouts, cards, charts, transitions, and dark/light themes.

### HALCYON Palette

| Color | Hex | Usage |
|---|---|---|
| **HALCYON Blue** | `#4F7DF3` | Primary accent |
| **HALCYON Purple** | `#6C63FF` | Gradient / secondary accent |
| **HALCYON Violet** | `#743CFF` | Gradient / visual accent |
| **HALCYON Dark** | `#111827` | Dark theme background |

Additional UI colors are defined through CSS variables for borders,
text, backgrounds, success, warning, danger, and dark mode.

---

# 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure and semantic content |
| **CSS3** | Styling, layout, themes, animations and responsiveness |
| **JavaScript** | Application logic and interactivity |
| **Chart.js 4.4.0** | Academic data visualization |
| **Font Awesome 6.5.0** | Icons |
| **Google Fonts / Inter** | Typography |
| **LocalStorage** | Client-side preference persistence |
| **Vercel** | Deployment |
| **GitHub** | Source control |

---

# 🧩 Architecture

HALCYON currently follows a lightweight client-side architecture.

```text
                         ┌──────────────────────┐
                         │      HALCYON UI      │
                         │      index.html      │
                         └──────────┬───────────┘
                                    │
                         ┌──────────▼───────────┐
                         │        CSS           │
                         │     style.css        │
                         └──────────┬───────────┘
                                    │
                ┌───────────────────▼───────────────────┐
                │              JavaScript              │
                │                                       │
                │   app.js   │   charts.js   │ data.js │
                └───────────────────┬───────────────────┘
                                    │
                         ┌──────────▼───────────┐
                         │   Browser Storage    │
                         │     LocalStorage     │
                         └──────────────────────┘
```

### Application responsibilities

**`app.js`**
- Navigation
- Interactions
- Calculators
- Planner
- Notes
- Profile
- Avatar system
- Pomodoro
- Faculty ratings
- Modals
- Theme handling
- LocalStorage

**`charts.js`**
- Dashboard charts
- Analytics charts
- Chart color updates

**`data.js`**
- Subject data
- Faculty data
- Classmate demo data
- Study group data
- Exam dates
- Academic helper functions

---

# 📁 Project Structure

```text
HALCYON/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── charts.js
│   └── data.js
│
├── images/
│   ├── profile.jpg
│   ├── avatar-boy-1.jpeg
│   ├── avatar-boy-2.jpeg
│   ├── avatar-boy-3.jpeg
│   ├── avatar-girl-1.jpeg
│   ├── avatar-girl-2.jpeg
│   └── avatar-girl-3.jpeg
│
└── audio/
    └── lofi-focus.mp3
```

---

# 🔐 Privacy & Data

### Privacy-first prototype

The current HALCYON prototype uses **demonstration academic data** and
does not connect to RYMEC's internal student systems.

> 🔒 **No student data is collected, stored, or used by this project.**

Some user-side preferences, such as profile information, selected
avatars, ratings, theme settings, and productivity state, can be stored
locally in the browser through LocalStorage.

### No direct institutional access

HALCYON does **not** directly scrape or access private college data.

Any future integration would require:

```text
Institutional Approval
        ↓
Approved Data Access
        ↓
Authentication
        ↓
Security Review
        ↓
Controlled Deployment
```

---

# 🎯 Project Objectives

### 01 — Simplify

Bring commonly used student utilities into one interface.

### 02 — Visualize

Turn academic numbers into information that is easier to understand.

### 03 — Organize

Help students plan tasks, study sessions, notes, and deadlines.

### 04 — Personalize

Give students control over their profile and preferences.

### 05 — Connect

Provide a foundation for student-oriented interaction and community
access.

---

# 🧪 Project Status

<div align="center">

### 🟢 WORKING FRONTEND PROTOTYPE

</div>

The current project demonstrates:

- Working navigation
- Interactive academic sections
- Client-side calculations
- Academic charts
- Planner functionality
- Notes
- Pomodoro system
- Profile personalization
- Avatar persistence
- Faculty rating interface
- Social Hub prototype
- Theme switching
- Responsive layouts

Academic and student records shown in the prototype are demonstration
content.

---

# 🔮 Roadmap

## Phase 01 — Prototype

- [x] Dashboard
- [x] Academic overview
- [x] Attendance analytics
- [x] CIE analytics
- [x] Timetable
- [x] Faculty directory
- [x] Faculty rating interface
- [x] SGPA calculator
- [x] Attendance What-If calculator
- [x] Exam countdown
- [x] Pomodoro timer
- [x] Planner
- [x] Notes
- [x] Profile system
- [x] Avatar system
- [x] Dark / Light mode
- [x] Social Hub prototype
- [x] RYMEC community link

## Phase 02 — Institutional Integration

- [ ] Approved college data integration
- [ ] Secure student authentication
- [ ] Backend services
- [ ] Real-time academic data
- [ ] Notifications
- [ ] Official college announcements

## Phase 03 — Platform Expansion

- [ ] Mobile application
- [ ] Advanced academic analytics
- [ ] Faculty feedback system
- [ ] College bus information
- [ ] Event management
- [ ] Expanded student collaboration

---

# 🌐 Live Demo

<div align="center">

### Try HALCYON

**[https://halcyon-student-dashboard.vercel.app/](https://halcyon-student-dashboard.vercel.app/)**

<br>

### Source Code

**[https://github.com/veereshr4446/HALCYON](https://github.com/veereshr4446/HALCYON)**

</div>

---

# 💡 Why HALCYON?

HALCYON explores a simple idea:

> **Information → Insight → Action**

A student should not only be able to see academic numbers, but also
understand what they mean and have useful tools available to act on
them.

The project therefore combines academic visibility with productivity,
planning, personalization, and student-oriented features.

---

# 👨‍💻 Developer

<div align="center">

### **Viresh Ranjanagi**

**Computer Science & Engineering**  
**RYMEC, Ballari**

Student Developer

</div>

---

# 📜 Disclaimer

HALCYON is an independently developed student project and is currently
a demonstration prototype.

It is **not an official RYMEC application** and does not represent the
institution.

Any future institutional deployment, branding, data integration, or
access to college systems would require appropriate permission,
authorization, and security review from the institution.

---

<div align="center">

# ⚡ HALCYON

### *A simpler way to experience student life.*

Built with curiosity, code, and a lot of late-night debugging. ❤️

<br>

**HTML • CSS • JavaScript**

</div
