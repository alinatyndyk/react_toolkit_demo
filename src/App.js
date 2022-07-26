
import './App.css';
import CarForm from "./components/CarForm/CarForm";
import Cars from "./components/Cars/Cars";
import CarFormCreate from "./components/CarForm/CarFormCreate";

function App() {
  return (
    <div>
        <CarForm/>
        <CarFormCreate/>
      <hr/>
      <Cars/>
    </div>
  );
}

export default App;
