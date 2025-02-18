import "./App.css";
import Navbar from "./component/Navbar";
import Textform from './component/TextForm'

function App() {
  return (
    <>
      <Navbar title="textUtils"></Navbar>
      <div className="container my-3">
      <Textform heading="Enter the text"></Textform>
      </div>

    </>
  );
}

export default App;
