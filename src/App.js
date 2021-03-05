import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from 'pages/Checkout';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/properties/:id" component={DetailsPage} />
          <Route exact path="/checkout" component={Checkout} />
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
