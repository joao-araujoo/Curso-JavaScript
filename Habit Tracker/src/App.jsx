import { useState } from "react";
import DiaryActivity from "./Model/DiaryActivity";

export default function App() {
  const [dayDescription, setDayDescription] = useState("");
  const [dayMood, setDayMood] = useState("");
  const [activities, setActivities] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setActivities((currentState) => [
      new DiaryActivity(dayDescription, dayMood),
      ...currentState,
    ]);

    setDayDescription(""); setDayMood("");
  };

  return (
    <>
      <main>
        <section>
          <form onSubmit={handleSubmit}>
            <textarea
              name="day-description"
              id="day-description"
              placeholder="Escreva algo que você aprendeu, algo que você fez..."
              value={dayDescription}
              onInput={(ev) => setDayDescription(ev.target.value)}
              rows="10"
              required
            ></textarea>
            <select
              name="day-mood"
              id="day-mood"
              value={dayMood}
              onChange={(ev) => setDayMood(ev.target.value)}
              required
            >
              <option value="" disabled>
                Humor Diário
              </option>
              <option value="happy">😄 Feliz</option>
              <option value="sad">😢 Triste</option>
              <option value="excited">🎉 Animado</option>
              <option value="calm">😌 Calmo</option>
              <option value="surprised">😯 Surpreso</option>
              <option value="angry">😡 Bravo</option>
              <option value="relaxed">😎 Relaxado</option>
              <option value="grateful">🙏 Agradecido</option>
              <option value="loved">❤️ Amado</option>
              <option value="anxious">😬 Ansioso</option>
              <option value="content">😊 Contente</option>
              <option value="hopeful">🤞 Esperançoso</option>
              <option value="blessed">🌟 Abençoado</option>
              <option value="motivated">💪 Motivado</option>
              <option value="curious">🤔 Curioso</option>
            </select>
            <input type="submit" value="Finalizar dia" />
          </form>
        </section>

        <section>
          <div className="container">
            {activities.length === 0 ? (
              <h3>Ainda não há registros.</h3>
            ) : (
              activities.map((activity) => (
                <>
                  <div key={Math.floor(Math.random() * 100000000)}>
                    <p>{activity.description}</p>
                    <h3>{activity.mood}</h3>
                  </div>
                </>
              ))
            )}
          </div>
        </section>
      </main>
    </>
  );
}