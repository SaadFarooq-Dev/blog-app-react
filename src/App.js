import NavBar from "./components/navbar";
import createRoutes from "./routes/routes";
import "bootstrap/dist/css/bootstrap.css";

const routes = createRoutes();

function App() {
  return (
    <div className="App">
      {<NavBar />}
      {routes}
    </div>
  );
}

export default App;
