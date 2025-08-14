import { useState } from 'react'

function App() {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [score1, setScore1] = useState("");
  const [score2, setScore2] = useState("");
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Sadržaj koji će se upisati u fajl
    const content = { key:key, first:team1, second:team2, firstScore:score1, secondScore:score2 };
    try {
      const res = await fetch("https://tournament-backend-app.onrender.com/add-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      const data = await res.json();
      setMessage(data.message)
    } catch (err) {
      console.error("Greška:", err.message);
    }
  };

  return (
    
    <>
       
    <div className="d-flex align-items-center justify-content-center vh-100 bg-dark">
      <div className="card shadow-lg bg-dark text-light p-4" style={{ width: "100%", maxWidth: "450px" }}>
        <h1 className="text-center mb-4 text-info">Rezultat utakmice</h1>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3 text-light text-center">
            <div className="col">
              <label className="form-label">Tim 1</label>
              <input
                type="number"
                className="form-control text-center"
                placeholder=""
                value={team1}
                onChange={(e) => setTeam1(e.target.value)}
                required
                min = "0" 
              />
            </div>
            -
            <div className="col">
              <label className="form-label">Tim 2</label>
              <input
                type="number"
                className="form-control text-center"
                placeholder=""
                value={team2}
                onChange={(e) => setTeam2(e.target.value)}
                required
                min = "0" 
              />
            </div>
          </div>

          <div className="row mb-3  text-light text-center">
            <div className="col">
              <label className="form-label">Score 1</label>
              <input
                type="number"
                className="form-control text-center"
                placeholder=""
                value={score1}
                onChange={(e) => setScore1(e.target.value)}
                required
                min = "0" 
              />
            </div>
            -
            <div className="col">
              <label className="form-label">Score 2</label>
              <input
                type="number"
                className="form-control text-center"
                placeholder=""
                value={score2}
                onChange={(e) => setScore2(e.target.value)}
                required
                min = "0" 
              />
            </div>
          </div>

          <div className="my-4">
            <input
              type="password"
              className="form-control bg-dark border-0"
              placeholder="very secret key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              required
            />
          </div>
          <p className="text-info text-center">{message}</p>
          <button type="submit" className="btn btn-outline-light w-100 btn-lg">
            POŠALJI REZULTAT
          </button>
        </form>
      </div>
    </div>
  
    </>
  )
}

export default App
