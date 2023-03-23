import logo from './logo.svg';
import './App.css';
// import NavBar from './Components/NavBar'
// import Home from './Components/Home'
import React, {Suspense, lazy} from 'react'

const Home = lazy(()=>import('./Components/Home'))

function App() {
  return (
    <div className="App">
     <h3>Lazzzy Loading ....</h3>
     <h3>Lazzzy Loading ....</h3>
     <h3>Lazzzy Loading ....</h3>
     {/* <Header /> */}
    {/* <NavBar /> */}

<Suspense fallback={<div>please wait until get result</div>}>
<Home />
</Suspense>


</div>
  );
}

export default App;
