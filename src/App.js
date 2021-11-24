import { Head } from "./components/menu/head";
import { Home } from "./pages/home";
import './styles/main.css'

function App() {
  return (
    <div className='home'>
      <Head/>
      <Home/>
    </div>
  );
}

export default App;
