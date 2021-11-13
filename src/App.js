import { CustomCard } from "./components/cards/card";
import { Head } from "./components/menu/head";
import './styles/main.css'

function App() {
  return (
    <div className='home'>
      <Head/>
      <CustomCard/>
    </div>
  );
}

export default App;
