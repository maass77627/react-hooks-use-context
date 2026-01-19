
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user";
import { ThemeProvider, ThemeContext } from "../context/theme";
import { useContext } from "react";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme}>
      <Header />
      <Profile />
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
