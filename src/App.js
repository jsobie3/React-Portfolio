import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import PortfolioContainer from './components/portfoliocontainer';

function App() {
  return (
   <div className= 'app'> 
   <Header/>
   <PortfolioContainer/>
   <Footer/>
  </div>
  );
}

export default App;
