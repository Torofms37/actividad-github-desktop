import "./App.css";

const becalos =
  "https://pbs.twimg.com/profile_images/1383066796903792643/BVa0vSbx_400x400.png";

const devF =
  "https://pbs.twimg.com/profile_images/1569806172319875073/JIn3eNLT_400x400.jpg";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={becalos} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={devF} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rubén Aragón</h1>
      <div className="card">
        <p>Este es mi aportación a la tarea de Github Desktop</p>
      </div>
    </>
  );
}

export default App;
