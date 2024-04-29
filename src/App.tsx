import { Outlet } from "react-router-dom"
// import wave from "./assets/wave.svg"
import Header from "./components/Header";
function App() {
  // const { userName } = useLoaderData() as { userName: string };
  return (
    <
      // className="layout"
      >
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        {/* <img src={wave} alt="wave" /> */}
      </footer>
    </>
  )
}

export default App
