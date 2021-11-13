import { CustomCard } from "./components/cards/card";
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
  root:{
      background:'#F1FAEE',
      color:'white',
      height:'100vh',
      width:'100vw',
      marginLeft:'-8px',
      marginTop:'-21px',
      padding:0,
      boxSizing:'border-box'
  }
})

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CustomCard/>
    </div>
  );
}

export default App;
