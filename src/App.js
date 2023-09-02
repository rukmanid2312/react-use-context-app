import "./App.css";
import { createContext } from "react";

import Header from "./Header/Header";
import ToDos from "./ToDos/ToDos";

import { useQueryParams } from "./custom-hooks/useQueryParams";

export const ThemeContext = createContext();
export const UserContext = createContext();
function App() {
  const theme = { dark: "dark", light: "light" };
  const user = { name: "Ramesh", age: 34 };
  const { params } = useQueryParams();
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={user}>
          <Header />
        </UserContext.Provider>
      </ThemeContext.Provider>
      <div>Search param is {params.get("policy")}</div>
      <ToDos />
    </div>
  );
}

export default App;
