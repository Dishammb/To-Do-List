# TaskNest 🐰

A cozy, bunny-themed to-do list app built with plain HTML, CSS, and JavaScript. Add tasks, check them off, delete them, and pick up right where you left off — your list is saved automatically in the browser.

## Features

- **Add tasks** — type a task and hit Add (or press Enter) to drop it into your list
- **Check off tasks** — click a task to mark it complete, with a strikethrough and custom checkmark icon
- **Delete tasks** — click the × next to any task to remove it
- **Persistent storage** — your list is saved to `localStorage`, so it's still there when you refresh or come back later
- **Themed landing page** — a welcome screen introduces the app before you jump into your list

## Getting Started

No build tools, frameworks, or installs required — it's just static HTML, CSS, and JS.

1. Clone the repo:
   ```bash
   git clone https://github.com/Dishammb/To-Do-List.git
   ```
2. Open `index.html` in your browser.
3. Click **Get start** to head to your to-do list.

That's it — you're up and running.

## Project Structure

```
To-Do-List/
├── index.html       # Landing / welcome page
├── ToDo.html         # The to-do list app
├── style.css         # Styles for the landing page
├── ToDostyle.css      # Styles for the to-do list app
├── script.js          # App logic (add, check, delete, save/load tasks)
├── images/            # Icons and background assets
└── README.md
```

## How It Works

- `script.js` grabs the input field and task list from the DOM, and listens for clicks to add, check, or delete tasks.
- Every change (add, check, delete) calls `saveData()`, which stores the current list in `localStorage`.
- On page load, `showTask()` reads that saved data back in, so your list persists across sessions.

## Built With

- HTML5
- CSS3 (Flexbox, custom pseudo-elements for checkboxes)
- Vanilla JavaScript (DOM manipulation, event delegation, `localStorage`)

## Future Ideas

- [ ] Edit existing tasks
- [ ] Switchable themes
- [ ] Drag-and-drop task reordering
- [ ] Due dates and priority levels

## License

This project is open source and available for personal or educational use.
