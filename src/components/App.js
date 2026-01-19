
import Header from "./Header";
import Profile from "./Profile";
 import { UserProvider } from "../context/user";
 import { ThemeProvider } from "../context/theme";
//  import { useContext } from "react"
  // import { ThemeContext } from "../context/theme"

function App() {
  // const { theme } = useContext(ThemeContext);
  // const [user, setUser] = useState(null);
  return (
    <main   >
       <ThemeProvider> 
      <UserProvider> 
      <Header   />
      <Profile   />
       </UserProvider> 
      </ThemeProvider> 
    </main>
  );
}

export default App;
