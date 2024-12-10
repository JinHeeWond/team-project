import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./RoutinePage.css";

const RoutinePage = ({ routine, setRoutine }) => {
  const handleRemoveExercise = (day, id) => {
    setRoutine((prevRoutine) => ({
      ...prevRoutine,
      [day]: prevRoutine[day].filter((exercise) => exercise.id !== id),
    }));
  };

  return (
    <div className="routine-page">
      <Header />
      <main className="routine-container">
        <h1 className="routine-title">나의 주간 운동 계획</h1>
        <div className="routine-days-row">
          {Object.keys(routine)
            .filter((day) => day !== "tempExercises") // tempExercises 필터링
            .map((day) => (
              <div key={day} className="routine-day">
                <h2>{day}</h2>
                <ul>
                  {routine[day].map((exercise) => (
                    <li key={exercise.id} className="exercise-item">
                      <span>{exercise.name}</span>
                      <button
                        className="delete-button"
                        onClick={() => handleRemoveExercise(day, exercise.id)}
                      >
                        삭제
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RoutinePage;
