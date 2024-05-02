import { Outlet } from "react-router-dom"
import AuthProvider from "./context/AuthProvider";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <AuthProvider>
      {
        location.pathname == "/" && <Header />
      }
      <main>
        <Outlet />
      </main>
    </AuthProvider>
  )
}

export default App
