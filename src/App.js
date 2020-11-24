import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// these three imports take those files and basically insert them 
// in the return in the function. This allows for a more loosely
// structured application
// import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
// import Header from "./components/Header";
// import Test from "./components/Test";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Index from "./components/Index";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (

    // className is React equivalent of class for referring to a div
    <div className="App">
      <Wrapper>
        {/* the way Header is here it will always display */}
        {/* <Header />  */}
        {/* You need a route path for a component for it to display
        only when directed to that route */}
        
        <Router>
        <Nav />
        {/* not sure if this is the optimal way to set this up
        but I'm sticking with this way because it's working */}
          <div>
            <Switch>
            <Route exact path ={["/", "/index", "/ReactPortfolio"]} component={Index} />
            <Route path ="/contact" component={Contact} />
            <Route path ="/portfolio" component={Portfolio} />
            </Switch>
          </div>
        </Router>
        {/* <Route exact path ="/" component={Index} /> */}
        {/* <Index /> */}
        {/* <Index  exact path={["/", "/"]}/> */}
        {/* <Contact /> */}
        {/* <Contact exact path=/> */}
        {/* <Portfolio /> */}
        {/* <Main /> */}
        {/* <Test /> */}
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
