import "./App.css";
import Card from "./components/Card";
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <Card productName='Apple Macbook Pro M4' price='2300' imageUrl=''/>
      <Card productName='Apple Iphone 17 Pro' price='1200'/>
      <Card productName='Bose Headphones' price='400'/>
      <Card productName='Ipad Pro 16th Gen' price='500'/>

    </div>
  );
}

export default App;
