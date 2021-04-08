import React from "react";
import axios from "axios";

import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { Link } from 'react-router-dom';
import SectionHeader from './partials/SectionHeader';
import Input from '../elements/Input';
import Button from '../elements/Button';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

class ContactForm extends React.Component{

    state = {
        submitting: false,
        status: null
    }

    handleServerResponse = (ok, msg, form) => {
        this.setState({
            submitting: false,
            status: { ok, msg }
        });
        if(ok) {
            form.reset();
        }
    };
    handleOnSubmit = event => {
        event.preventDefault();
        const form = event.target;
        this.setState({ submitting: true });
        axios({
            method: "post",
            url: "https://formspree.io/f/mleaeorg",
            data: new FormData(form)
        })
            .then(res => {
                this.handleServerResponse(true, "Message sent, thanks so much!", form);
            })
            .catch(res => {
                this.handleServerResponse(false, res.response.data.error, form);
            });
    };

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
            'signin section',
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color',
            className
        );

        const innerClasses = classNames(
            'signin-inner section-inner',
            topDivider && 'has-top-divider',
            bottomDivider && 'has-bottom-divider',
            'reveal-from-top'
        );

        const sectionHeader = {
            title: 'Thanks for stopping by! Want to get in touch?',
        };

        return (
            <section
                {...props}
                className={outerClasses}
            >
                <div className="container" >
                    <div className={innerClasses}>
                        <SectionHeader tag="h1" data={sectionHeader} className="center-content" data-reveal-delay={"150"}/>
                        <div className="tiles-wrap">
                            <div className="tiles-item">
                                <div className="tiles-item-inner">
                                    <form onSubmit={this.handleOnSubmit}>
                                        <fieldset>
                                            <div className="mb-12">
                                                <Input
                                                    label={"Name"}
                                                    placeholder={"Name"}
                                                    name={"name"}
                                                    labelHidden
                                                    required />
                                            </div>
                                            <div className="mb-12">
                                                <Input
                                                    label={"Organization"}
                                                    name={"organization"}
                                                    placeholder={"Organization"}
                                                    labelHidden
                                                />
                                            </div>
                                            <div className="mb-12">
                                                <Input
                                                    type="email"
                                                    label="Email"
                                                    name={"email"}
                                                    placeholder={"Email"}
                                                    labelHidden
                                                    required />
                                            </div>
                                            <div className="mb-12">
                                                <Input
                                                    id={"message"}
                                                    name={"message"}
                                                    placeholder={"Message"}
                                                    type={"textarea"}
                                                    rows={6}
                                                    required />
                                            </div>
                                            <div className="mt-24 mb-32">
                                                <Button disabled={this.state.submitting} color="primary" wide>Send Message</Button>
                                            </div>
                                        </fieldset>
                                    </form>
                                    <div className="signin-bottom has-top-divider">
                                        <div className="pt-32 text-xs center-content text-color-low">
                                            {this.state.status && (
                                                <p className={!this.state.status.ok ? "errorMsg" : ""}>
                                                    {this.state.status.msg}
                                                    While you're here, have you checked out my <Link to={"https://github.com/WGoodsonDev"}>GitHub</Link>?
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

ContactForm.propTypes = propTypes;
ContactForm.defaultProps = defaultProps;

export default ContactForm;
