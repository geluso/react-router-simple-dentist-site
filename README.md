# React Router Simple Dentist Website
This website is a simple example of how to route URLs to different components
using `react-router-dom`. 

## Author Note
This repo uses `react-router-dom` specifically instead of `react-router`.
Consider this discussion thread describing the difference between the two:

<https://github.com/ReactTraining/react-router/issues/4648>

## Summary
Here's how you can hook up a nav bar to each component, and route URLs to
each component in your main `App.js` file:

`Home`, `Procedures`, and `Contact` are all components defined in their own
file. In order to route URLs to these components the components need to be
be imported at the beginning of the file and referenced in the `<Route>`
elements `path={}` attribute appropriately.

Notice that the root route, or the index route, at `path="/"` has an extra
attribute called `exact`. The `exact` attribute means that the component
will only be shown if the URL is *exactly* equal to that path. If the
`extra` attribute is ommitted then the Home component will be shown on the
`/procedures` and `/contact` URL routes as well because they start with
the slash `/` too.

```js
import React, { Component } from 'react';
import './App.css';

import Home from './home';
import Procedures from './procedures';
import Contact from './contact';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/procedures">Procedures</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/procedures" component={Procedures} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
```

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.

