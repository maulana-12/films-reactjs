import './App.css';
import NavigationBar from './components/NavigationBar';
import '../src/style/landingPage.css';
import Intro from './components/Intro';
import Trending from "./components/Trending";

function App() {
  return (
    <div>
      {/* intro section */}
      <div className='myBG'>
        <NavigationBar/>
        <Intro />
      </div>
      {/* end of intro */}

      {/* trending */}
      <div className='trending'>
        <Trending />
      </div>
      {/* end trending */}
    </div>
  );
}

export default App;
