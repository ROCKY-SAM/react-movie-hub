import './App.css';
import DataFetching from './DataFetching';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <b className="mainTitle">Sam's MovieHub</b>
        <DataFetching/>
        <ScrollToTop smooth color="#6f00ff" />
    </div>
  );
}
export default App;
