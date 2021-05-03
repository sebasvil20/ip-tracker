import { useEffect } from "react";
import { Header } from "./components/Header";
import { MapView } from "./components/MapView";

function App() {
  useEffect(() => {
    fetch('https://geo.ipify.org/service/account-balance?apiKey=at_mwJfcBhX9OvZKbEv5AQ4eHay6Ne7r&ipAddress=190.121.129.152')
    .then(response => console.log((response)))
  },[])

  return (
    <div className="App">
      <Header />
      <MapView />
    </div>
  );
}

export default App;
