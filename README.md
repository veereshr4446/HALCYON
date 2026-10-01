<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=4F7DF3,6C63FF,743CFF&height=140&section=header" width="100%"/>

# ⚡ HALCYON

### Unified Student Dashboard

**Academics · Productivity · Student Tools · Community**

A student-focused web dashboard that brings attendance, CIE marks, planning tools,
a focus timer and student community access into one interface.

<br>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-HALCYON-4F7DF3?style=for-the-badge)](https://halcyon-student-dashboard.vercel.app/)
[![Stack](https://img.shields.io/badge/Stack-HTML%20%7C%20CSS%20%7C%20JavaScript-6C63FF?style=for-the-badge)](#-tech-stack)
[![Status](https://img.shields.io/badge/Status-Working%20Prototype-743CFF?style=for-the-badge)](#-status--roadmap)

</div>

---

> ⚠️ **Prototype notice**
>
> HALCYON is an independently developed student project and a working frontend
> prototype. It is **not an official RYMEC application**, it is not connected to any
> college system, and the academic values shown are sample content for demonstration.

---

## ✦ About

Students usually check attendance, marks, timetable, tasks and study tools in different
places. HALCYON puts them together in one dashboard, and turns raw numbers into charts
and simple tools you can act on, such as "how many classes can I still miss?"

> **Information → Insight → Action**

It is a client-side app built with plain HTML, CSS and JavaScript. There is no backend
and no build step.

---

## 🚀 Features

| Area | What you get |
|---|---|
| 📊 **Dashboard** | Day streak, total subjects, overall attendance, CIE overview, subjects below 85%, college events, goals and progress |
| 📚 **Academics** | Attendance, subjects and CIE marks, timetable, important dates, subject-wise analytics |
| 🎓 **Academic tools** | SGPA calculator, attendance what-if calculator, exam countdown, printable academic report |
| 👨‍🏫 **Faculty** | Faculty directory with subject mapping, detail view, and a star-rating interface stored locally in your browser |
| ⏱️ **Productivity** | Pomodoro focus timer with break sessions, custom durations, session history and streaks |
| 📝 **Planner & notes** | Tasks with subject, priority and date, filtering and completion progress; quick notes with an optional Google Drive link |
| 👤 **Profile** | Editable name and bio, avatar selection, badges and progress |
| 👥 **Social hub** | Study groups, leaderboard, classmate search, and a link to an unofficial RYMEC student community |
| 🎨 **Interface** | Dark / light theme, responsive layout, card-based design, interactive charts |

---

## 🧠 How it works

**SGPA calculator.** You enter each subject's credits and marks. JavaScript converts the
marks to grade points and calculates a credit-weighted **estimated** SGPA.

**Attendance what-if.** It takes your attended and total classes and shows how your
percentage changes if you attend or miss the next classes.

**Analytics.** Subject data is processed in JavaScript and drawn as charts, so lower-attendance
subjects and CIE patterns are easy to spot.

**Persistence.** Your profile, avatar, planner, notes, ratings, theme and focus history are
saved in your browser's LocalStorage, so they are still there next time.

---

## 🛠️ Tech stack

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure |
| **CSS3** | Layout, themes, animations, responsive design |
| **JavaScript** | Application logic and interactivity |
| **Chart.js** | Charts and data visualization |
| **Font Awesome** | Icons |
| **Google Fonts (Inter)** | Typography |
| **LocalStorage** | Client-side persistence |
| **Vercel** | Hosting |

---

## 📁 Project structure

```text
HALCYON/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── app.js        # navigation, tools, planner, notes, profile, timer, theme
│   ├── charts.js     # dashboard and analytics charts
│   └── data.js       # sample subjects, faculty, study groups, exam dates
├── images/
│   ├── profile.jpg
│   └── avatar-*.jpeg
└── audio/
    └── lofi-focus.mp3
```

<!-- Add the source and licence of lofi-focus.mp3 here, e.g. "Focus music: <title> by <artist>, <licence>" -->

---

## 💻 Run locally

No installation is needed.

```bash
git clone https://github.com/veereshr4446/HALCYON.git
cd HALCYON
# open index.html in your browser
```

For auto-reload while editing, use the VS Code **Live Server** extension.

---

## 🔐 Privacy & data

- HALCYON has **no backend** and does not send your data to any server of its own.
- It does **not** connect to RYMEC's systems and does not scrape or access any private
  college data.
- The academic values, timetable, faculty list, study groups and classmate records shown
  in the app are **sample content for demonstration**.
- Anything you enter (profile, planner, notes, ratings, settings) is saved only in your
  own browser's LocalStorage. Clearing your browser data removes it.
- Faculty ratings are a local interface only. They are **not** official evaluations and
  are not shared with anyone.

Connecting HALCYON to real college data would need institutional approval, approved data
access, secure authentication and a security review.

---

## 🧪 Status & roadmap

**🟢 Working frontend prototype.**

**Phase 1: Prototype (done)**
- [x] Dashboard, academic overview, attendance and CIE analytics
- [x] Timetable and faculty directory
- [x] SGPA calculator, attendance what-if, exam countdown, academic report
- [x] Pomodoro timer, planner and notes
- [x] Profile and avatars, dark / light mode
- [x] Social hub prototype and community link

**Phase 2: Institutional integration**
- [ ] Approved college data integration
- [ ] Secure student authentication and backend services
- [ ] Notifications and official announcements

**Phase 3: Expansion**
- [ ] Mobile app
- [ ] Advanced analytics
- [ ] Events and college bus information

---

## 🌐 Live demo

**[halcyon-student-dashboard.vercel.app](https://halcyon-student-dashboard.vercel.app/)**

---

## 👨‍💻 Developer

**Viresh Ranjanagi**
Computer Science & Engineering, RYMEC, Ballari

---

## 📜 Disclaimer

HALCYON is an independently developed student project. It is not an official RYMEC
application and does not represent the institution. Any institutional deployment, branding
or data integration would need permission, authorization and a security review from the
institution.

---

<div align="center">

### ⚡ HALCYON
*A simpler way to experience student life.*

Built with curiosity, code, and a lot of late-night debugging.

</div>
