window.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startWorkoutBtn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      window.electronAPI.openWorkoutWindow();
    });
  }
});
