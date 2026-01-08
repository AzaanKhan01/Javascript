import React,{ useState } from "react"
const App = () =>{
  //Step 1: Create a state variable to track the current mode (light or dark)
  const [darkMode, setDarkMode] = useState(false);
  //Step 2: Create a function to toggle the mode
  const toggleMode = () =>{
    setDarkMode(!darkMode);
  }
  //Step 3: Define styles for light and dark modes
  const lightStyle = {
    backgroundColor: "#ffffff",
    color: "#000000",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const darkStyle = {
    backgroundColor: "#000000",
    color: "#ffffff",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  //Step 4: Apply the styles based on the current mode
  const currentStyle = darkMode ? darkStyle : lightStyle;
  return(
    <div style={currentStyle}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleMode}>
        Toggle to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};
export default App;