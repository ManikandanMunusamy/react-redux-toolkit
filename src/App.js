import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import Model from "./components/Model";
import { useSelector } from "react-redux";
function App() {
  const { isOpen } = useSelector((state)=> state.modal);
  return (
    <main>
      {isOpen && <Model />}
      <NavBar />
      <CartContainer />
    </main>
  )
}
export default App;
