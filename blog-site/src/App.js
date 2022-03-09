import './App.css';
import Cards from './components/Cards';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Cards 
      image= {"https://images.unsplash.com/photo-1544856890-7fdbecf97726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRpc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
      title = {"This is my first time"}
      description = {"Building a react app is reallly nice, for now"}
      />
    </div>
  );
}

export default App;
