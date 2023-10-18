
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/Header';
import FormSection from './components/item/Form ';
import Home from './components/item/Home';
import Rules from './components/item/rules';
function App() {

  return (
    <div >
      <div className='2xl:container mx-auto'>
        <Header />
        <Home />
        <Rules />
        {/* <FormSection /> */}
        <Footer />
      </div>


    </div>
  );
}

export default App;
