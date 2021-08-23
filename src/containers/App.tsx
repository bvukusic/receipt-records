import '@fontsource/roboto';
import ReceiptList from './ReceiptList';
import { useStyles } from '../styles/App.style';

const App = () => {
  const classes = useStyles();
 
  return (
    <div className={classes.App}>
      <header className={classes.appContainer}>
        <ReceiptList />
      </header>
    </div>
  );
}

export default App;
