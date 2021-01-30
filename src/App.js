import "assets/scss/style.scss";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" component={LandingPage} />
      </Router>
    </div>
  );
}

export default App;
