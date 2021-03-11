import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import techImg01 from './../../assets/images/tech-01.svg';
import techImg02 from './../../assets/images/tech-02.svg';
import techImg03 from './../../assets/images/tech-03.svg';
import techImg04 from './../../assets/images/tech-04.svg';
import techImg05 from './../../assets/images/tech-05.svg';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Tech extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'clients section reveal-fade',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'clients-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div
            className={innerClasses}
          >
            <ul className="list-reset">
              <li className="reveal-from-bottom">
                <Image
                  src={techImg01}
                  alt="Tech 01"
                  width={124}
                  height={24} />
              </li>
              <li className="reveal-from-bottom" data-reveal-delay="150">
                <Image
                  src={techImg02}
                  alt="Tech 02"
                  width={83}
                  height={30} />
              </li>
              <li className="reveal-from-bottom" data-reveal-delay="300">
                <Image
                  src={techImg03}
                  alt="Tech 03"
                  width={125}
                  height={39} />
              </li>
              <li className="reveal-from-bottom" data-reveal-delay="450">
                <Image
                  src={techImg04}
                  alt="Tech 04"
                  width={150}
                  height={31} />
              </li>
              <li className="reveal-from-bottom" data-reveal-delay="600">
                <Image
                  src={techImg05}
                  alt="Tech 05"
                  width={113}
                  height={30} />
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

Tech.propTypes = propTypes;
Tech.defaultProps = defaultProps;

export default Tech;
