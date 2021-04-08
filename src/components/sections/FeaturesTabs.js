import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Tabs, { TabList, Tab, TabPanel } from './../elements/Tabs';
import Image from '../elements/Image';

import tabIcon01Img from './../../assets/images/features-tabs-icon-01.svg';
import tabIcon02Img from './../../assets/images/features-tabs-icon-02.svg';
import tabIcon03Img from './../../assets/images/features-tabs-icon-03.svg';
import tabIcon04Img from './../../assets/images/features-tabs-icon-04.svg';

import featuresTabsImg from './../../assets/images/features-tabs-image.png';
import featuresTabsImg01 from './../../assets/images/combo-viewer-example.jpg';
import featuresTabsImg02 from './../../assets/images/ssu_sched.png';
import featuresTabsImg03 from './../../assets/images/octane_gameplay.png';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class FeaturesTabs extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-tabs section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-tabs-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Projects',
      paragraph: 'These are some of the major projects I have worked on.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <Tabs active="tab-a">
              <TabList>
                <Tab tabId="tab-a">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={tabIcon01Img}
                      alt="Tab icon 01"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high text-sm">
                    SSBM Combo Visualizer
                  </div>
                </Tab>
                <Tab tabId="tab-b">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={tabIcon02Img}
                      alt="Tab icon 02"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high text-sm">
                    SSU Scheduler
                  </div>
                </Tab>
                <Tab tabId="tab-c">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={tabIcon03Img}
                      alt="Tab icon 03"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high text-sm">
                    Octane
                  </div>
                </Tab>
              </TabList>
              <TabPanel id="tab-a">
                <Image
                  className="has-shadow"
                  src={featuresTabsImg01}
                  alt="Features tabs image 01"
                  width={896}
                  height={504} />
                <p>This is a test paragraph that probably should include some kind of description of what this project is</p>
                <p>Gonna go ahead and test the default formatting here</p>
                <p>Need to put link to github / static site</p>
                <a href={"http://ssbm-combo-viewer.tech/"}>Link to site</a>
                <br/>
                <a href={"https://github.com/WGoodsonDev/ssbm-combo-visualizer"}>GitHub</a>
              </TabPanel>
              <TabPanel id="tab-b">
                <Image
                  className="has-shadow"
                  src={featuresTabsImg02}
                  alt="Features tabs image 02"
                  width={896}
                  height={504} />
                <p>This is a test paragraph that probably should include some kind of description of what this project is</p>
              </TabPanel>
              <TabPanel id="tab-c">
                <Image
                  className="has-shadow"
                  src={featuresTabsImg03}
                  alt="Features tabs image 03"
                  width={896}
                  height={504} />
                <p>This is a test paragraph that probably should include some kind of description of what this project is</p>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesTabs.propTypes = propTypes;
FeaturesTabs.defaultProps = defaultProps;

export default FeaturesTabs;
