# 🕒 Pi Accuracy Clock

A precise, browser-based digital clock that demonstrates real-time synchronization drift and how even small timing inaccuracies in JavaScript can accumulate over time. Built using HTML5 Canvas and pure JavaScript, this project visualizes how browser timers can fall out of sync and highlights the challenges of achieving time accuracy in web applications.

---

## 🔍 Features

- High-resolution digital clock display
- Visual demonstration of time drift caused by floating-point precision
- Periodic correction to improve accuracy
- Canvas-based rendering for smooth, custom visuals
- Minimalistic and fast — no external libraries used

---

## 📸 Preview

![Clock Preview](preview.png) <!-- Optional: Replace with your actual preview image if you have one -->

---

## 🧠 Concept

JavaScript's `setInterval()` and `setTimeout()` are not perfectly accurate due to floating-point operations and event loop delays. Over time, these inaccuracies accumulate, making clocks fall out of sync.

This clock demonstrates:
- How drift builds up over time
- How compensating by adjusting based on actual time helps maintain accuracy

---

## 🛠️ Tech Stack

- **HTML5 Canvas**
- **JavaScript**
- **CSS**

---

## 🚀 Getting Started

To run the clock:

1. Clone the repository:
   ```bash
   git clone https://github.com/DisasterUnknown/Pi-Accuracy-Clock.github.io
   cd Pi-Accuracy-Clock.github.io
