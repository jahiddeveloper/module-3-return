import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Baller from "./Baller";
import Users from "./Users";
import Friends from "./Friends";
import { Suspense } from "react";

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())

const fetchFriends = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}


function App() {
  const friendPromise = fetchFriends

  return (
    <>

      <h1>Vite + React</h1>

      <Suspense fallback= {<h3>Loaded...</h3>}>
        <Friends friendPromise= {friendPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUser = {fetchUser}></Users>
      </Suspense>
      
      <Baller></Baller>
      <Batsman></Batsman>
      <Counter></Counter>
      
    </>
  );
}

export default App;
