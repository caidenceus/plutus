import LeftSidebar from './components/common/LeftSidebar';
import './App.css';

function App() {
   

  return (
    <div id="app">
      <LeftSidebar />

      <div id="content">
        <h1 style={{ color: "white", marginLeft: "5rem" }}>
          Content
        </h1>
      </div>
    </div>
  );
}

export default App;
