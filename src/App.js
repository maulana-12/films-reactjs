import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import '../src/style/landingPage.css';

function App() {
  return (
    <div>
      {/* intro section */}
      <div className='myBG'>
        <NavigationBar/>
      </div>
      {/* end of intro */}
    </div>
  );
}

export default App;
