import "./App.css";
import { createContext } from "react";
import Header from "./Header/Header";

export const ThemeContext = createContext();
export const UserContext = createContext();
function App() {
  const theme = { dark: "dark", light: "light" };
  const user = { name: "Ramesh", age: 34 };
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={user}>
          <Header />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
