import React from 'react';
import HeroFull from '../components/sections/HeroFull';
import Tech from '../components/sections/Tech';
import FeaturesTabs from '../components/sections/FeaturesTabs';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Testimonial from '../components/sections/Testimonial';
import Pricing from '../components/sections/Pricing';
import Cta from '../components/sections/Cta';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroFull className="illustration-section-01" />
        <Tech topDivider bottomDivider />
        <FeaturesTabs />
        <FeaturesTiles topDivider />
        {/*<Testimonial topDivider bottomOuterDivider className="gradient-section" />*/}
        {/*<Pricing topDivider pricingSlider className="has-bg-color-cut" />*/}
        <Cta hasBgColor invertColor split />
      </React.Fragment>
    );
  }
}

export default Home;
