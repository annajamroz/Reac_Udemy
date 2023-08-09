import logo from './logo.svg';
import './App.css';
import Ftest from './components/Ftest';
import Ctest from './components/Ctest';
import ShopingList from './components/ShopingList';
import AddSign from './components/Aplikacja Add sign/AddSign';
import Input from './components/Input/Input';
import Message from './components/Przycisk pokaż ukryj/Message';
import Counter from './components/Zliczanie klikniec/Counter';
import ChechboxAgeConfirmation from './Checkbox/Checkbox';
import TicketShop from './Checkbox/TicketShop';



function App() {

  return (
    <div className="App">
      
      <h2>**********Aplikacja add sign**********</h2>
      <ShopingList/>
      <AddSign/>

      
      <h2>**********Input**********</h2>
      <Input/>

      
      <h2>**********Przycisk pokaż ukryj**********</h2>
      <Message/>

      
      <h2>**********Zliczanie klikniec**********</h2>
      <Counter result={5}/>

      <h2>**********Checkbox**********</h2>
      <ChechboxAgeConfirmation/>

       <h2>**********TicketShop**********</h2>
      <TicketShop/>
    </div>
  );
}

export default App;
