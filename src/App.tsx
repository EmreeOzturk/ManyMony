import { Outlet, useLoaderData } from "react-router-dom"
import Header from "./components/Header";
function App() {
  const { userName } = useLoaderData() as { userName: string };
  return (
    <main>
      <Header userName={userName} />
      <Outlet />
      <h2>
        This is Layout Footer
      </h2>
    </main>
  )
}

export default App
