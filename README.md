🧮 Calculator

Born during an exam break. Built with pure HTML, CSS & JavaScript.


![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![No Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen?style=flat-square)
![Made with Love](https://img.shields.io/badge/made%20with-%E2%98%95%20and%20boredom-orange?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blueviolet?style=flat-square)

[✨ Features](#-features) • [🚀 Quick Start](#-quick-start) • [🕹️ Usage](#️-how-to-use) • [🧠 How It Works](#-how-it-works) • [🗺️ Roadmap](#️-roadmap) • [🤝 Contribute](#-contributing)


💡 About

Exams are stressful. Breaks are long. So I built a calculator.

This project is a small, friendly calculator that runs entirely in your browser. It's a great example of how far you can get with just the web basics: no build tools, no packages, no setup. It's also a handy starting point if you're learning DOM manipulation and event handling.

✨ Features

| | Feature | Details |
| ➕ | **Core arithmetic** | Addition, subtraction, multiplication and division |
| 📺 | **Two-line display** | See what you're typing on top, the operator and result below |
| ⚡ | **Live results** | The answer updates on screen as you enter the second number |
| ⌫ | **Backspace** | Made a typo? Delete just the last digit |
| 🔄 | **CE (Clear Everything)** | One tap and you're back to a clean slate |
| 🎨 | **Clean grid layout** | Big, tappable buttons arranged with CSS Grid |
| 🪶 | **Featherweight** | Three files. No installs. Works offline |

## 🚀 Quick Start

Getting running takes about ten seconds.

bash
# 1. Clone the repo
git clone https://github.com/Yugcoder123/Calculator.git

# 2. Step inside
cd Calculator

# 3. Open it in your browser
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows


> 💡 **No terminal?** Just download the ZIP from GitHub, unzip it, and double-click `index.html`.

🕹️ How to Use

| Button | Action |
|:------:|--------|
| `0` – `9` | Type your numbers |
| `+` `-` `X` `/` | Pick an operation |
| `⌫` | Delete the last digit |
| `CE` | Reset everything |
| `=` | Finish the calculation |

🎯 Try it

1. Press **`8`**
2. Press **`X`**
3. Press **`5`**
4. Watch **`40`** appear on the display 🎉

🧠 How It Works

The logic lives in about 60 lines of readable JavaScript:

- **Number buttons** (`.num`) append each digit to `number_1` and show it on the top line.
- **Operator buttons** (`.but`) store the chosen operator, then move the typed number into `number_2` so you can enter the next one.
- **`operation()`** uses a `switch` statement to pick the right math (`+`, `-`, `X`, `/`) and writes the result to the display.
- **`dothis()`** trims the last character off the current number (the backspace).
- **`CE`** simply reloads the page for a guaranteed clean reset.

js
switch (operator) {
  case '+': result = Number(number_2) + Number(number_1); break;
  case '-': result = Number(number_2) - Number(number_1); break;
  case 'X': result = Number(number_2) * Number(number_1); break;
  case '/': result = Number(number_2) / Number(number_1); break;
}

📁 Project Structure
Calculator/
├── 📂 images/       → project images & assets
├── 📄 index.html    → page structure & buttons
├── 🎨 style.css     → layout & styling (Grid + Flexbox)
├── ⚙️  script.js     → calculator logic & events
└── 📖 README.md     → you are here
🛠️ Tech Stack

| Technology            | Used for                                                      |
|   HTML5               | Page structure and buttons                                    |
| CSS3                  |Grid layout, styling, Google Fonts (Roboto, Poppins, Orbitron) |
| JavaScript (ES6)      |Logic, DOM updates, event listeners                            |

🗺️ Roadmap

This calculator is a work in progress. Here's what could come next:

- [ ] ➗ Decimal point (`.`) support
- [ ] 💯 Percentage (`%`) and sign toggle (`±`)
- [ ] ⌨️ Keyboard input
- [ ] 🔗 Chained calculations (like `2 + 3 X 4`)
- [ ] 🕘 Calculation history
- [ ] 🚫 Friendly divide-by-zero error message
- [ ] 📱 Fully responsive layout for small screens
- [ ] 🌙 Light / dark theme toggle

Pick one and make it yours! 👇
🤝 Contributing

Contributions, ideas and bug reports are all welcome, whatever your skill level.
Found a bug or have a suggestion? [Open an issue](https://github.com/Yugcoder123/Calculator/issues) and let's talk.
👤 Author

Yugcoder123 · [GitHub](https://github.com/Yugcoder123)

If this project made you smile (or helped you learn something), drop a ⭐ and share it with a friend.

Built with ☕, boredom and a little too much free time between exams.
Yugcoder123 — [GitHub](https://github.com/Yugcoder123)

If you found this useful, consider giving the repo a ⭐!
