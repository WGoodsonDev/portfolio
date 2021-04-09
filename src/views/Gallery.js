import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import HeroFull from '../components/sections/HeroFull02';
import Team from '../components/sections/Team';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import GenericSection from '../components/sections/GenericSection';
import Roadmap from '../components/sections/Roadmap';
import Cta from '../components/sections/Cta';
// import some required elements
import Image from '../components/elements/Image';
import Input from '../components/elements/Input';
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Modal from '../components/elements/Modal';
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';
// import image files for clean props passing
import placeholderImg from './../assets/images/image-placeholder.png';
// import p5 wrapper for sketches
import P5Wrapper from 'react-p5-wrapper';
// import individual sketches
import Recaman from "../sketches/Recaman";
import Walks from "../sketches/Walks";
import PolarRoses from "../sketches/PolarRoses";


class Gallery extends React.Component {

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

    const genericSection01Header = {
      title: 'FAQ - Lorem ipsum is placeholder text commonly used.'
    }

    const genericSection02Header = {
      title: 'Buttons - Lorem ipsum is placeholder text commonly used.'
    }

    const genericSection03Header = {
      title: 'Input forms - Lorem ipsum is placeholder text commonly used.'
    }

    const genericSection04Header = {
      title: 'Modal - Lorem ipsum is placeholder text commonly used.'
    }

    return (
      <React.Fragment>
        {/*<HeroFull className="illustration-section-01" />*/}
        {/*<Team />*/}
        {/*<FeaturesSplit invertMobile imageFill topDivider />*/}

        <GenericSection topDivider>
          <div className="container-xs">
            <h2 className="mt-0">Graphics Gallery</h2>
            <p>
              Here are some selected p5.js "sketches" that I've used to explore the world of mathematical and data visualization.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h4>Recamán Sequence</h4>
            <p>
              This is a description of the Recamán Sequence, hopefully with a bit of math sprinkled in. Need to look impressive with iterative formulas and such.
            </p>
            <figure>
              <P5Wrapper sketch={Recaman} width={712} height={400}/>
              <figcaption className="text-color-low">Visualization of the first 1000 terms of the <span role="img" aria-label="mile">Recamán Sequence</span></figcaption>
            </figure>
            <h4>Walks</h4>
            <p>
              In a Theory of Computation class I took in college, I was tasked with studying the behavior of certain classes of random walks. I fell in love with the walks, and wanted to visualize their beauty.
            </p>
            <figure>
              <P5Wrapper sketch={Walks}/>
              <figcaption className="text-color-low">Random walks. Use the Z and X keys to zoom</figcaption>
            </figure>
            <h4>Polar Roses</h4>
            <p>
              These are a collection of "rose curves" drawn using polar coordinates.
            </p>
            <figure>
              <P5Wrapper sketch={PolarRoses}/>
              <figcaption className="text-color-low">Use the A and S keys to step through different curves, and the D key to jump to a random curve.<br/>Use the F key to toggle the outer rose curve.</figcaption>
            </figure>
            <h4>Flexibility</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </GenericSection>

        <GenericSection topDivider>
          <div className="container-xs">
            <SectionHeader data={genericSection01Header} className="center-content" />
            <Accordion>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut." active>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </AccordionItem>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </AccordionItem>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </AccordionItem>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </AccordionItem>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </AccordionItem>
            </Accordion>
          </div>
        </GenericSection>

        <GenericSection topDivider className="center-content">
          <div className="container">
            <SectionHeader data={genericSection02Header} className="center-content" />
            <ButtonGroup>
              <Button color="primary" wideMobile>Get started now</Button>
              <Button color="secondary" wideMobile>Get started now</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button color="dark" wideMobile>Get started now</Button>
              <Button wideMobile>Get started now</Button>
            </ButtonGroup>
          </div>
        </GenericSection>

        <GenericSection topDivider>
          <div className="container-xs">
            <SectionHeader data={genericSection03Header} className="center-content" />
            <form style={formStyle}>
              <div className="mb-24">
                <Input
                  type="email"
                  label="This is a label"
                  placeholder="Your best email.."
                  formGroup="desktop"
                  labelHidden>
                  <Button color="primary">Early access</Button>
                </Input>
              </div>
              <div className="mb-24">
                <Input
                  type="email"
                  label="This is a label"
                  placeholder="Your best email.."
                  defaultValue="hello@cruip.com"
                  formGroup="desktop"
                  labelHidden>
                  <Button color="primary" loading>Early access</Button>
                </Input>
              </div>
              <div className="mb-24">
                <Input
                  type="email"
                  label="This is a label"
                  placeholder="Your best email.."
                  formGroup="desktop"
                  labelHidden
                  status="error"
                  hint="Something is wrong.">
                  <Button color="primary">Early access</Button>
                </Input>
              </div>
              <div className="mb-24">
                <Input
                  type="email"
                  label="This is a label"
                  placeholder="Your best email.."
                  formGroup="desktop"
                  labelHidden
                  status="success"
                  hint="You've done it.">
                  <Button color="primary">Early access</Button>
                </Input>
              </div>
            </form>
          </div>
        </GenericSection>

        <GenericSection topDivider>
          <div className="container-xs">
            <SectionHeader data={genericSection04Header} className="center-content" />
            <div className="center-content">
              <Button
                color="primary"
                aria-controls="demo-modal"
                onClick={this.openModal}>Open modal</Button>
            </div>
            <Modal
              id="demo-modal"
              show={this.state.demoModalActive}
              handleClose={this.closeModal}
            >
              <div className="center-content">
                <h3 className="mt-16 mb-8">Join our newsletter</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </p>
              </div>
              <form style={modalFormStyle}>
                <div className="mb-12">
                  <Input
                    type="email"
                    label="This is a label"
                    placeholder="Your best email"
                    labelHidden />
                </div>
                <Button color="primary" wide>Subscribe</Button>
              </form>
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

        <Roadmap topDivider />
        <Cta invertColor split className="has-bg-color-cut" />
      </React.Fragment>
    );
  }
}

// inline style
const formStyle = {
  maxWidth: '420px',
  margin: '0 auto'
}

const modalFormStyle = {
  maxWidth: '320px',
  margin: '0 auto'
}

export default Gallery;
