import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Routes from "./routes/Routes";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
