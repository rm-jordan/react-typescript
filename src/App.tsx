import { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

interface Istate {
  people: {
    name: string,
    age: number,
    url: string,
    // question mark indicates it is optional
    note?: string
  }[]
}

function App() {


const [people, setPeople] = useState <Istate["people"]>([
  {
    name: "Bender",
    age: 46,
    url: "https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png",
    note: "Hey skinbag!",
  }
]);



  return (
    <div className="App">
      <h1>People invited to our Party!</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;
