import React, { Component } from 'react';
import '../Legal/text-style.scss'
import BackButton from './back-button';


class TermsOfService extends Component {

    render() {
        return (
            <div className="text-container-legal text-container-legal-T text-container-legal-D">
                    <h2>Terms of service</h2>
                    <section>
                        <h4>Section Title</h4>
                        <p>Lorem ipsum dolor sit amet, est enim suspendisse penatibus, quis sed conubia risus mi ligula.
                            Ultrices at nulla non sem erat, sed integer vestibulum, justo lorem. Suspendisse pulvinar
                            placerat
                            enim, aptent quam scelerisque curabitur
                    </p>
                    </section>
                    <section>
                        <h4>Section Title</h4>
                        <p>Lorem ipsum dolor sit amet, est enim suspendisse penatibus, quis sed conubia risus mi ligula.
                            Ultrices at nulla non sem erat, sed integer vestibulum, justo lorem. Suspendisse pulvinar
                            placerat
                            enim, aptent quam scelerisque curabitur
                    </p>
                    </section>
                    <section>
                        <h4>Section Title</h4>
                        <p>Lorem ipsum dolor sit amet, est enim suspendisse penatibus, quis sed conubia risus mi ligula.
                            Ultrices at nulla non sem erat, sed integer vestibulum, justo lorem. Suspendisse pulvinar
                            placerat
                            enim, aptent quam scelerisque curabitur
                    </p>
                    </section>
                    <BackButton backButton={this.props.backButton} />
                </div>
        );
    }
}

export default TermsOfService;