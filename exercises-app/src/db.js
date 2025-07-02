const path = require("path");
const Database = require("better-sqlite3");

const db = new Database(path.join(__dirname, "workouts.db"));

db.exec(`
  CREATE TABLE IF NOT EXISTS workouts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    day TEXT NOT NULL,
    type TEXT NOT NULL
  )
`);

function addWorkout({ date, day, type }) {
  const stmt = db.prepare(
    "INSERT INTO workouts (date, day, type) VALUES (?, ?, ?)"
  );
  stmt.run(date, day, type);
}

function getAllWorkouts() {
  const stmt = db.prepare("SELECT * FROM workouts ORDER BY date DESC");
  return stmt.all();
}

module.exports = {
  addWorkout,
  getAllWorkouts,
};
