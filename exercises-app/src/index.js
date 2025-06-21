const { app, Menu, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const db = require("./db");

ipcMain.handle("add-workout", (_, { date, day, type }) => {
  db.addWorkout({ date, day, type });
});

ipcMain.handle("get-workouts", () => {
  return db.getAllWorkouts();
});

ipcMain.handle("open-workout-window", () => {
  createWorkoutWindow();
});

if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, "icon.ico"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile(path.join(__dirname, "index.html"));
};

const createWorkoutWindow = () => {
  const workoutWindow = new BrowserWindow({
    width: 600,
    height: 500,
    title: "Today's Workout",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  workoutWindow.loadFile(path.join(__dirname, "workout.html"));
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  const menuTemplate = [
    {
      role: "quit",
    },
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
