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
import Collatz from "../sketches/Collatz";
import Ringz from "../sketches/Ringz";
import ContactForm from "../components/sections/ContactForm";


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
    const contactModalHeader = {
      title: 'Curious about the sketches or the math behind them? Let me know!'
    }

    return (
      <React.Fragment>
        <GenericSection topDivider>
          <div className="container-xs">
            <h2 className="mt-0">Graphics Gallery</h2>
            <p>
              Here are some selected p5.js "sketches" that I've used to explore the world of mathematical and data visualization.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h4>Recamán's Sequence</h4>
            <p>
              Recamán's Sequence is an integer sequence where the term a<sub>n</sub> is defined by the rules:<br/><br/>
              1) If n = 0, a<sub>n</sub> = 0.<br/>
              2) If a<sub>n-1</sub> - n > 0 and is not already found in the sequence, a<sub>n</sub> = a<sub>n-1</sub> - n.<br/>
              3) Otherwise,  a<sub>n</sub> = a<sub>n-1</sub> + n.
            </p>
            <p>
              In simpler terms, start with n = 0. The first term a<sub>0</sub> will be 0 by the first rule.<br/><br/>
              For the next term, n = 1, so a<sub>1</sub> will equal 0 + 1, or 1. Similarly, a<sub>2</sub> will equal 1 + 2, or 3, and a<sub>3</sub> will equal 3 + 3, or 6.<br/><br/>
              For a<sub>4</sub>, since 6 - 4 > 0, we instead subtract n from our term, giving us 6 - 4 = 2. And since 2 has not appeared in the sequence yet, we keep it as a<sub>4</sub>.
            </p>
            <p>
              This visualization is based on a Numberphile video where the jumps along the number line that the sequence takes are shown using semicircles, with semicircles above the line corresponding to steps using Rule 2, and semicircles below corresponding to steps using Rule 3.
            </p>
            <figure>
              <P5Wrapper sketch={Recaman} width={712} height={400}/>
              <figcaption className="text-color-low">Visualization of the first 500 terms of <span role="img" aria-label="mile">Recamán's Sequence</span></figcaption>
            </figure>
            <h4>Walks</h4>
            <p>
              In a Theory of Computation class I took in college, I was tasked with studying the behavior of certain classes of random walks. I fell in love with the walk as a mathematical object, and wanted to visualize its beauty.
            </p>
            <p>
              These walks are not self-avoiding, but they are restricted from doubling back on themselves. For example, if a step is taken in the up direction, the next step cannot be in the down direction.
            </p>
            <figure>
              <P5Wrapper sketch={Walks}/>
              <figcaption className="text-color-low">Random walks. Use the Z and X keys to zoom</figcaption>
            </figure>
            <h4>Polar Roses</h4>
            <p>
              These are a collection of "rose curves" drawn using polar coordinates.
            </p>
            <p>
              Polar roses are of the form r = a * sin(2&theta;) or r = a * cos(2&theta;), and in this visualization they form the outer "petals" of the figures.
            </p>
            <p>
              The moving shapes within the roses are simply lines with vertices on the curve itself, whose endpoints are travelling along the curve at a constant speed. This creates a striking visual effect that reveals a lot about the geometry of the curves.
            </p>
            <figure>
              <P5Wrapper sketch={PolarRoses}/>
              <figcaption className="text-color-low">Use the A and S keys to step through different curves, and the D key to jump to a random curve.<br/>Use the F key to toggle the outer rose curve.</figcaption>
            </figure>
          </div>
        </GenericSection>

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
