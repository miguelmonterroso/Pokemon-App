import { Api } from "./components/cards/api";
import { Head } from "./components/menu/head";
import './styles/main.css'

function App() {
  return (
    <div className='home'>
      <Head/>
      <Api/>
    </div>
  );
}

export default App;
