
import './App.css';
import Routing from './components/Routing/Routing';
import Footer from './components/footer/footer';
import Header from './components/header/Header';

// import Rules from './components/item/rules';
function App() {

  return (
    <div >
      <div className='2xl:container mx-auto'>
        <Header />
        <Routing />
        <Footer />
      </div>


    </div>
  );
}

export default App;
