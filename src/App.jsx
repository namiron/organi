import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/routes/Main';
import './null.css'


const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
