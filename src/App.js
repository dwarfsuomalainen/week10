import logo from './logo.svg';
import './App.css';
import MyContainer from './components/MyContainer';


function App() {
  const header = "This is a header of List";
  

  return (
    <div className="App">
      <h1>"Hello World!"</h1>
      <MyContainer header={header} />
    </div>
  );
}

export default App;
