const workoutData = {
  Monday: [
    { name: "Bodyweight Squats", sets: 4, reps: 15 },
    { name: "Lunges (each leg)", sets: 4, reps: 12 },
    { name: "Push-ups", sets: 3, reps: "10-15" },
    { name: "Hip Thrusts", sets: 4, reps: 15 },
    { name: "Plank with single arm row", sets: 3, reps: 12 },
    { name: "Plank", sets: 3, duration: "40 sec" },
    { name: "Leg Raises", sets: 3, reps: 15 },
    { name: "Russian Twists", sets: 3, reps: 20 },
    { name: "Bicycle Crunches", sets: 3, reps: 20 },
    { name: "Reverse Crunches", sets: 3, reps: 15 },
  ],
  Tuesday: [
    {
      name: "CARDIO",
      duration:
        "BIKE: 20-40 min (2 min faster, 1 min slower intervals) " +
        "OR RUN: 25-30 min steady pace OR 15-20 min intervals (1 min faster, 2 min slower) " +
        "OR WALK: 8,000-10,000 steps",
    },
    { name: "Side Plank (each side)", sets: 4, duration: "30 sec" },
    { name: "Dead Bug", sets: 3, reps: 15 },
  ],
  Wednesday: [
    { name: "Bodyweight Squats", sets: 4, reps: 15 },
    { name: "Lunges (each leg)", sets: 4, reps: 12 },
    { name: "Push-ups", sets: 3, reps: "10-15" },
    { name: "Hip Thrusts", sets: 4, reps: 15 },
    { name: "Plank with single arm row", sets: 3, reps: 12 },
    { name: "Plank", sets: 3, duration: "40 sec" },
    { name: "Leg Raises", sets: 3, reps: 15 },
    { name: "Russian Twists", sets: 3, reps: 20 },
    { name: "Bicycle Crunches", sets: 3, reps: 20 },
    { name: "Reverse Crunches", sets: 3, reps: 15 },
  ],
  Thursday: [{ name: "REST OR WALK" }],
  Friday: [
    { name: "Bodyweight Squats", sets: 4, reps: 15 },
    { name: "Lunges (each leg)", sets: 4, reps: 12 },
    { name: "Push-ups", sets: 3, reps: "10-15" },
    { name: "Hip Thrusts", sets: 4, reps: 15 },
    { name: "Plank with single arm row", sets: 3, reps: 12 },
    { name: "Plank", sets: 3, duration: "40 sec" },
    { name: "Leg Raises", sets: 3, reps: 15 },
    { name: "Russian Twists", sets: 3, reps: 20 },
    { name: "Bicycle Crunches", sets: 3, reps: 20 },
    { name: "Reverse Crunches", sets: 3, reps: 15 },
  ],
  Saturday: [
    {
      name: "CARDIO",
      duration:
        "BIKE: 20-40 min (2 min faster, 1 min slower intervals) " +
        "OR RUN: 25-30 min steady pace OR 15-20 min intervals (1 min faster, 2 min slower) " +
        "OR WALK: 8,000-10,000 steps",
    },
    { name: "Side Plank (each side)", sets: 4, duration: "30 sec" },
    { name: "Dead Bug", sets: 3, reps: 15 },
  ],
  Sunday: [{ name: "REST" }],
};

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

const day = getQueryParam("day") || getTodayName();
const exercises = workoutData[day] || [];

window.addEventListener("DOMContentLoaded", () => {
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
