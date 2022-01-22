import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <BrowserRouter>
    <div className="wrapper-er">
      <nav className="nav">
        <h1 className="heading">Math Magicians</h1>
        <ul className="link">
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/quotes">Quote</Link>
        </ul>
      </nav>
    </div>

    <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/calculator" component={Calculator} />
      <Route exact path="/quotes" component={Quote} />

    </Switch>

  </BrowserRouter>
);
export default App;
