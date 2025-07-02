// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts


const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  openWorkoutWindow: () => ipcRenderer.invoke("open-workout-window"),
});

contextBridge.exposeInMainWorld("dbAPI", {
  addWorkout: (data) => ipcRenderer.invoke("add-workout", data),
  getWorkouts: () => ipcRenderer.invoke("get-workouts"),
});

