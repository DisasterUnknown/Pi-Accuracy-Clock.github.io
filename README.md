# 🎯 How a Tiny π Error Can Wreck an Entire Game Loop  
…and how I visualized it with a live “π Accuracy Radar Clock”

Ever wondered what would happen if you replaced `Math.PI` with just `3.14` in your game loop? Or used `22/7` thinking it's “close enough”?  
**Spoiler alert:** It works… until it doesn’t.

---

## 🧪 I Built a Visualization

A canvas-based radar animation (aka "π Clock") that shows how different approximations of π — like `3.14`, `22/7`, `3.14159`, and the true `Math.PI` — accumulate tiny errors over time.

It looks smooth at first...  
But then:

- ⚠️ The orbiting balls drift  
- 🌀 The angles desync  
- 📉 Even one wrong decimal starts to spiral (pun intended) out of sync

And the best part?  
The canvas tracks and displays how many multiples of π your approximation has drifted away from the real value — in **real time**.

---

## 🔍 What’s Happening Under the Hood?

- One full orbit = **2π radians**
- If your game loop uses an **inaccurate value** for π, every frame adds a tiny rotational error
- Over hundreds of frames, these add up to a **noticeable desync**
- At `3.14`, the ball **overshoots** before even completing half a rotation compared to the real `Math.PI`

---

## 🎮 This Isn't Just Visual — It's Real

In actual games, this kind of math bug causes:

- 🕒 Incorrect object rotations or orbiting paths  
- 🧭 Drifting compasses, clocks, or animations  
- 🔄 Broken cyclic behaviors  
- 🐛 Simulation desync over time

---

## ⚠️ Real Game Examples

### 🟫 Minecraft (Modded)

Many mods use custom math and timers. When float values or π approximations are used:

- Redstone clocks misfire  
- Entity rotations stutter  
- Space mods (like Galacticraft) get **drifting planetary orbits**

### 🧊 Unity / Unreal Projects

Hardcoded `3.14` shows up surprisingly often:

- Physics becomes unpredictable  
- Day/night cycles fall out of phase  
- Projectiles randomly miss over time

🔍 These bugs are hard to detect — they often appear **only after minutes or hours** of live play.

---

## 🧠 Takeaway

- ✅ Use built-in constants like `Math.PI`, `M_PI`, or language equivalents — accurate to 15+ digits  
- ❌ Don’t use `3.14`, `22/7`, or other approximations unless you're intentionally demonstrating failure (like here 😅)  
- ⏱ Even errors in the 10th decimal place can break animation, simulation, or physics loops

---

## 🛠️ Try It Yourself!

Visualize π drift in real-time right in your browser:  
**🔗 [Pi Accuracy Clock Demo](https://disasterunknown.github.io/Pi-Accuracy-Clock.github.io/)**

Just open `index.html` — no setup required.

---

## 💬 Final Thought

If you're a game dev, graphics nerd, or math lover:  
π isn't just a number — it's a **ticking time bomb** when mishandled. 💣🔁🎮

---

## 🧾 License

MIT — Free to learn, remix, or build upon.
