import { useState } from 'react';
import './App.css';
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


const [people, setPeople] = useState<Istate["people"]>([]);



  return (
    <div className="App">
      <h1>People invited to our Party!</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
