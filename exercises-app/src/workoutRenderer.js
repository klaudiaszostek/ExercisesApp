const workoutData = {
  Monday: [
    { name: "Squats", sets: 4, reps: 12 },
    { name: "Deadlift or Hip Thrust", sets: 4, reps: 10 },
    { name: "Rowing or Pull-ups", sets: 3, reps: 10 },
    { name: "Overhead Press", sets: 3, reps: 10 },
    { name: "Plank", sets: 3, duration: 45 },
    { name: "Leg Raises", sets: 3, reps: 15 },
    { name: "Russian Twists", sets: 3, reps: 20 },
  ],
  Tuesday: [
    { name: "Cardio (fast walk or intervals)", duration: 30 },
    { name: "Side Plank", sets: 3, duration: 30 },
    { name: "Bicycle Crunches", sets: 3, reps: 20 },
    { name: "Reverse Crunches", sets: 3, reps: 15 },
    { name: "Dead Bug", sets: 3, reps: 15 },
  ],
  Wednesday: [
    { name: "Squats", sets: 4, reps: 12 },
    { name: "Deadlift or Hip Thrust", sets: 4, reps: 10 },
    { name: "Rowing or Pull-ups", sets: 3, reps: 10 },
    { name: "Overhead Press", sets: 3, reps: 10 },
    { name: "Plank", sets: 3, duration: 45 },
    { name: "Leg Raises", sets: 3, reps: 15 },
    { name: "Russian Twists", sets: 3, reps: 20 },
  ],
  Thursday: [], // Rest day or optional walk
  Friday: [
    { name: "Squats", sets: 4, reps: 12 },
    { name: "Deadlift or Hip Thrust", sets: 4, reps: 10 },
    { name: "Rowing or Pull-ups", sets: 3, reps: 10 },
    { name: "Overhead Press", sets: 3, reps: 10 },
    { name: "Plank", sets: 3, duration: 45 },
    { name: "Leg Raises", sets: 3, reps: 15 },
    { name: "Russian Twists", sets: 3, reps: 20 },
  ],
  Saturday: [{ name: "Cardio (bike, run, walk)", duration: 30 }],
  Sunday: [], // Rest day
};

const getTodayName = () => {
  return new Date().toLocaleDateString("en-US", { weekday: "long" });
};

window.addEventListener("DOMContentLoaded", () => {
  const today = getTodayName();
  const exercises = workoutData[today] || [];
  const container = document.getElementById("workoutContainer");

  if (exercises.length === 0) {
    container.innerHTML = `<p>No training planned for today.</p>`;
    return;
  }

  let currentExercise = 0;
  let currentSet = 1;

  const renderExercise = () => {
    const ex = exercises[currentExercise];
    container.innerHTML = `
        <h3>${ex.name}</h3>
        <p>Set ${currentSet} of ${ex.sets || 1}</p>
        <p>${
          ex.reps
            ? `Reps: ${ex.reps}`
            : `Time: ${ex.duration} ${ex.duration > 10 ? "minutes" : "seconds"}`
        }</p>
        <button id="okBtn">OK</button>
      `;

    document.getElementById("okBtn").addEventListener("click", () => {
      currentSet++;
      if (currentSet > (ex.sets || 1)) {
        currentSet = 1;
        currentExercise++;
      }

      if (currentExercise >= exercises.length) {
        container.innerHTML = `<h3>✅ Workout completed!</h3>`;
      } else {
        renderExercise();
      }
    });
  };

  renderExercise();
});
