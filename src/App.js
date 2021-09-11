import "./App.css";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Usestate from "./Usestate/State";
import Useeffect from "./Useeffect/Effect";
import Usecontext from "./Usecontext/Context";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="title">
          <p>Kelompok 16</p>
        </div>
        <nav>
          <Link className="text" to="/">
            UseState 
          </Link>
          <Link className="text" to="/effect">
            UseEffect 
          </Link>
          <Link className="text" to="/context">
            UseContext
          </Link>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Usestate} />
        <Route path="/effect" exact component={Useeffect} />
        <Route path="/context" exact component={Usecontext} />
      </Switch>
    </BrowserRouter>
  );
}
