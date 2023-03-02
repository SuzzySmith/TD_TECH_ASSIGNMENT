import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Topbar from './Component/Topbar';
import Searchbar from './Component/Searchbar';
import Food from './Component/Food';
import Foodlist from './Component/Foodlist';

function App() {
  return (
    <div className="App" >   
      <Topbar/>
      <div className="container">
        <Searchbar/>
        <Foodlist/>
      </div>
      
    </div>
  );
}

export default App;

