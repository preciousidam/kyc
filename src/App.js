import React, { Suspense, lazy }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import { Header } from "./component/header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './style/main.css';
import ErrorBoundry from './component/errorboundry';
import { faPhoneAlt, faMapMarked, faEnvelope, faBroadcastTower, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Footer } from './component/footer';
import { Loader } from './component/loader';

const Landing = lazy(() => import('./section/home'));
const Individual = lazy(() => import('./section/individual'));
const Corporate = lazy(() => import('./section/corporate'));
library.add(fab, faWhatsapp, faPhoneAlt, faMapMarked, faEnvelope, faBroadcastTower, faSpinner)

function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <Router>
          <Header />
          <Switch>
            <Route path="/individual">
              <ErrorBoundry>
                <Suspense fallback={<Loader />}>
                  <Individual />
                </Suspense>
              </ErrorBoundry>
            </Route>
            <Route path="/corporate">
              <ErrorBoundry>
                <Suspense fallback={<Loader />}>
                  <Corporate />
                </Suspense>
              </ErrorBoundry>
            </Route>
            <Route path="/">
              <ErrorBoundry>
                <Suspense fallback={<Loader />}>
                  <Landing />
                </Suspense>
              </ErrorBoundry>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ErrorBoundry>
    </div>
  );
}

export default App;
