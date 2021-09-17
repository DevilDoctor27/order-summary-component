import { useState, useEffect } from "react";
import "./app.css"
import Card from "./Card"

const App = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(true)
  }, [])
  return <div className="component">
    <Card active={active} setActive={setActive} />
    <button className="subscribe" onClick={() => setActive(true)}>Subscribe</button>
  </div>;
}

export default App;
