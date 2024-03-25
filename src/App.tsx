import { Outlet, useLoaderData } from "react-router-dom"
import wave from "./assets/wave.svg"
import Header from "./components/Header";
function App() {
  const { userName } = useLoaderData() as { userName: string };
  return (
    <div className="layout">
      <Header userName={userName} />
      <main>
        <Outlet />
      </main>
      <footer>
        <img src={wave} alt="wave" />
      </footer>
    </div>
  )
}

export default App
