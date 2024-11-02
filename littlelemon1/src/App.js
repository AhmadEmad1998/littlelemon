import './App.css';
import Header from './components/Header';
import Nav from './components/Nav'
import ResForm from './components/form';
import Menu from './components/Menu';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Menu/>
      <ResForm />
      <Footer/>
    </div>
  );
}

export default App;
