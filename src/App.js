// import { Api } from "./components/cards/api";
import { GetPokemons } from "./components/cards/getPokemos";
import { Head } from "./components/menu/head";
import './styles/main.css'

function App() {
  return (
    <div className='home'>
      <Head/>
      {/* <Api/> */}
      <GetPokemons/>
    </div>
  );
}

export default App;
