// import './App.css';
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./components/context/AccountProvider";
function App() {
  const clientId='668695065714-o7937r2nbir5dle955431ll5d6s8m2jg.apps.googleusercontent.com';
  return (

    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
    <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
