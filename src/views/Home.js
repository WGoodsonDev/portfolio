import React from 'react';
import HeroFull from '../components/sections/HeroFull';
import Tech from '../components/sections/Tech';
import FeaturesTabs from '../components/sections/FeaturesTabs';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Testimonial from '../components/sections/Testimonial';
import Pricing from '../components/sections/Pricing';
import Cta from '../components/sections/Cta';
import SectionHeader from "../components/sections/partials/SectionHeader";
import Button from "../components/elements/Button";
import Modal from "../components/elements/Modal";
import ContactForm from "../components/sections/ContactForm";
import GenericSection from "../components/sections/GenericSection";

class Home extends React.Component {

    state = {
        demoModalActive: false
    }

    openModal = (e) => {
        e.preventDefault();
        this.setState({ demoModalActive: true });
    }

    closeModal = (e) => {
        e.preventDefault();
        this.setState({ demoModalActive: false });
    }

  render() {
      const contactModalHeader = {
          title: 'Want to know more? Send me a message!'
      }
    return (
      <React.Fragment>
        <HeroFull className="illustration-section-01" />
        <Tech topDivider bottomDivider />
        <FeaturesTiles topDivider bottomDivider />
        <FeaturesTabs />
        <GenericSection topDivider>
          <div className="container-xs">
              <SectionHeader data={contactModalHeader} className="center-content" />
              <div className="center-content">
                  <Button
                      color="primary"
                      aria-controls="demo-modal"
                      onClick={this.openModal}>Contact Me</Button>
              </div>
              <Modal
                  id="contact-modal"
                  show={this.state.demoModalActive}
                  handleClose={this.closeModal}
              >
                  <ContactForm/>
                  <div className="center-content mt-24">
                      <a
                          className="text-xxs fw-500 tt-u"
                          aria-label="close"
                          href="#0"
                          onClick={this.closeModal}
                      >No thanks!</a>
                  </div>
              </Modal>
          </div >
        </GenericSection>
        {/*<Testimonial topDivider bottomOuterDivider className="gradient-section" />*/}
        {/*<Pricing topDivider pricingSlider className="has-bg-color-cut" />*/}
        {/*<Cta hasBgColor invertColor split />*/}
      </React.Fragment>
    );
  }
}

export default Home;
