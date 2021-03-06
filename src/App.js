import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import LayoutAlternative from './layouts/LayoutAlternative';
import LayoutSignin from './layouts/LayoutContact';

// Views
import Home from './views/Home';
import Gallery from './views/Gallery';
import Login from './views/Login';
import Contact from './views/Contact';

class App extends React.Component {

  componentDidMount() {
    document.body.classList.add('is-loaded')
    this.refs.scrollReveal.init();
  }

  // Route change
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.refs.scrollReveal.init();
    }
  }

  render() {
    return (
      <ScrollReveal
        ref="scrollReveal"
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/gallery" component={Gallery} layout={LayoutAlternative} />
            <AppRoute exact path="/contact" component={Contact} layout={LayoutAlternative} />
            <AppRoute exact path="/about-me" component={Contact} layout={LayoutDefault} />

          </Switch>
        )} />
    );
  }
}

export default withRouter(props => <App {...props} />);
