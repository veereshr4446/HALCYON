// ============================================================
//  DATA.JS — Mock/demo data only.
//  Nothing here is fetched from or sent to any real system.
//  Student names below are fictional, used only for the
//  Social Hub (search / leaderboard) demo.
// ============================================================

// ----- SUBJECTS — Semester 3, Section A (updated from the official
// timetable/course-handling sheet). No CIE marks exist for this semester
// yet, so the old demo attendance/CIE numbers are carried over as
// placeholders, just reassigned to these new subjects.
//
// EXAM PATTERN UPDATE: the college now runs 2 CIEs per subject
// (50 marks each) instead of 3 CIEs (25 marks each), and only the
// HIGHER of the two scores is considered — not a sum of the best two.
// `cie` below is therefore a 2-element array, each value out of 50. -----
const subjectsData = [
    { code: '1BMATCS301', name: 'Distributions and Statistics Probability', faculty: 'Prof. G. Gangamma', attendance: 84, cie: [40, 34] },
    { code: '1BCS302', name: 'Object Oriented Programming with Java', faculty: 'Dr. H. Girisha', attendance: 90, cie: [47, 42] },
    { code: '1BCS303', name: 'Digital Design and Computer Organization', faculty: 'Prof. Radhika Y', attendance: 88, cie: [49, 44] },
    { code: '1BCS304', name: 'Operating Systems', faculty: 'Prof. Sharmila G K', attendance: 85, cie: [43, 38] },
    { code: '1BCS305', name: 'Data Structures and Applications', faculty: 'Prof. Rajeswari R.P', attendance: 82, cie: [47, 41] },
    { code: '1BCSL306', name: 'Data Structures Laboratory', faculty: 'Dr. Nagaveni Biradar', attendance: 83, cie: [45, 39] },
    { code: '1BCSL307A', name: 'Project Management (with Git)', faculty: 'Prof. Prasanna Kumar', attendance: 78, cie: [39, 33] },
    { code: '1BCP308', name: 'Community Project / Societal Project', faculty: 'Dr. H. Girisha', attendance: 92, cie: [50, 46] }
];

// ----- FACULTY — Semester 3, Section A -----
// Note: mobile numbers were in the official sheet but are deliberately
// left out here — a student dashboard shouldn't publish teachers'
// personal phone numbers, even in a demo.
const facultyData = [
    { name: 'Prof. G. Gangamma', subject: 'Distributions and Statistics Probability', dept: 'Mathematics', photo: '👩‍🏫' },
    { name: 'Dr. H. Girisha', subject: 'Object Oriented Programming with Java', dept: 'CSE', photo: '👨‍🏫' },
    { name: 'Prof. Radhika Y', subject: 'Digital Design and Computer Organization', dept: 'CSE', photo: '👩‍🏫' },
    { name: 'Prof. Sharmila G K', subject: 'Operating Systems', dept: 'CSE', photo: '👩‍🏫' },
    { name: 'Prof. Rajeswari R.P', subject: 'Data Structures and Applications', dept: 'CSE', photo: '👩‍🏫' },
    { name: 'Dr. Nagaveni Biradar', subject: 'Data Structures Laboratory', dept: 'CSE', photo: '👩‍🏫' },
    { name: 'Prof. Prasanna Kumar', subject: 'Project Management (with Git)', dept: 'CSE', photo: '👨‍🏫' }
];

// ----- FICTIONAL CLASSMATES (Social Hub — search & leaderboard) -----
const classmatesData = [
    { name: 'Ananya Rao', usn: '3VC25CS101', branch: 'CSE A', attendance: 88 },
    { name: 'Rohan Kulkarni', usn: '3VC25CS103', branch: 'CSE A', attendance: 85 },
    { name: 'Sneha Iyer', usn: '3VC25CS104', branch: 'CSE A', attendance: 82 },
    { name: 'Kiran Patel', usn: '3VC25CS105', branch: 'CSE B', attendance: 79 },
    { name: 'Anjali Rao', usn: '3VC25CS106', branch: 'CSE B', attendance: 91 },
    { name: 'Vikram Naidu', usn: '3VC25CS108', branch: 'CSE B', attendance: 74 },
    { name: 'Meera Reddy', usn: '3VC25CS109', branch: 'ECE', attendance: 86 },
    { name: 'Deepika Joshi', usn: '3VC25EC101', branch: 'ECE', attendance: 83 },
    { name: 'Nikhil Sharma', usn: '3VC25ME101', branch: 'ME', attendance: 77 }
];

// ----- STUDY GROUPS -----
const groupsData = [
    { name: 'AI Study Circle', subject: 'Introduction to AI', members: 24, icon: '🤖', colorClass: 'group-icon-blue', joined: true },
    { name: 'Python Coders Club', subject: 'Python Programming', members: 31, icon: '🐍', colorClass: 'group-icon-green', joined: false },
    { name: 'Maths Doubt Solvers', subject: 'Applied Mathematics', members: 18, icon: '📐', colorClass: 'group-icon-amber', joined: true },
    { name: 'Chem Lab Prep Squad', subject: 'Applied Chemistry', members: 15, icon: '🧪', colorClass: 'group-icon-violet', joined: false }
];

// ----- EXAM / SEMESTER DATES (from the official Sem 3 schedule; used by
// Notifications + the Countdown tool. IA test dates weren't specified in
// the source document, so they're not included here rather than guessed.) -----
const examDates = [
    { name: 'Last Working Day of Semester', date: '2026-12-30' },
    { name: 'VTU Theory Exams Begin', date: '2027-01-04' },
    { name: 'Practical Examinations Begin', date: '2027-02-08' },
    { name: 'Next Semester Commences', date: '2027-02-22' }
];

// ----- GRADE POINTS (GPA calculator) -----
const gradePoints = {
    'S (10)': 10, 'A (9)': 9, 'B (8)': 8, 'C (7)': 7, 'D (6)': 6, 'E (5)': 5
};

// ============================================================
//  HELPER FUNCTIONS (pure calculations — no DOM, no storage)
// ============================================================

function getStatus(att) {
    if (att >= 85) return 'good';
    if (att >= 70) return 'warning';
    return 'danger';
}

// The higher of the subject's 2 CIE scores (each out of 50) — this is
// what actually counts toward the subject's CIE total under the new
// 2-CIE pattern.
function getBestCIE(sub) {
    return Math.max(sub.cie[0], sub.cie[1]);
}

function getOverallAttendance() {
    const total = subjectsData.reduce((sum, s) => sum + s.attendance, 0);
    return total / subjectsData.length;
}

// Average, across all subjects, of each subject's best CIE score (out of 50).
function getOverallCIE() {
    const total = subjectsData.reduce((sum, s) => sum + getBestCIE(s), 0);
    return total / subjectsData.length;
}

function getBelow85() {
    return subjectsData.filter(s => s.attendance < 85);
}

function getSubjectRanking() {
    return [...subjectsData].sort((a, b) => b.attendance - a.attendance);
}

function getFacultyList() {
    return [...new Set(subjectsData.map(s => s.faculty))];
}

// ============================================================
//  EXPOSE GLOBALLY (so charts.js and app.js can use these)
// ============================================================

window.subjectsData = subjectsData;
window.facultyData = facultyData;
window.classmatesData = classmatesData;
window.groupsData = groupsData;
window.examDates = examDates;
window.gradePoints = gradePoints;

window.getStatus = getStatus;
window.getBestCIE = getBestCIE;
window.getOverallAttendance = getOverallAttendance;
window.getOverallCIE = getOverallCIE;
window.getBelow85 = getBelow85;
window.getSubjectRanking = getSubjectRanking;
window.getFacultyList = getFacultyList;

console.log('📊 data.js loaded — demo data ready.');
