const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  openWorkoutWindow: () => ipcRenderer.invoke("open-workout-window"),
});

contextBridge.exposeInMainWorld("dbAPI", {
  addWorkout: (data) => ipcRenderer.invoke("add-workout", data),
  getWorkouts: () => ipcRenderer.invoke("get-workouts"),
});

