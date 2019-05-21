import React, { Component } from 'react';
import '../Legal/text-style.scss'
import BackButton from './back-button';

class TermsOfService extends Component {

    render() {
        return (
            <div className="text-container-legal text-container-legal-T text-container-legal-D">
                    <p>This WiFi service (“the WiFi”) provided by DFDS A/S (“DFDS”), enables connectivity to the Internet while you are on board a DFDS vessel.
                        The WiFi service is provided subject to these Terms and Conditions (“the T&C”).</p>

                    <section>
                        <h4>Restrictions on use</h4>
                        <p>Certain material is inappropriate for minors or may be deemed offensive or objectionable. 
                            Please show consideration to your fellow passengers, including minors, and their rights when using the WiFi onboard.</p>
                        <p>The WiFi may not be used for any unlawful, improper or criminal purpose or activity, including but not limited to hacking,
                             spamming, introducing viruses, worms, harmful code and/or Trojan horses on the Internet.</p>
                        <p> You may not post or transmit information or communications that, expressly or implied, are fraudulent, racist,
                             hateful, harassing, obscene, pornographic, or otherwise improper as determined by DFDS in its sole discretion,
                              or which violates any applicable local or international law, rule, order and/or regulation.</p>
                        <p>You may not interfere with another person's usage or enjoyment of the WiFi or any other service provided
                             by DFDS or to generate excessive amounts (as determined in our sole discretion) of WiFi traffic.</p>
                        <p>You may not use the WiFi to violate our or any third party's copyright, trademark, proprietary or other intellectual property rights. </p>     
                    </section>
                    <section>
                        <h4>Content</h4>
                        <p>Neither DFDS nor any of its affiliates accepts any responsibility for goods, services, information, software or other material gained or lost while using WiFi. </p>
                        <p>You agree to evaluate, and bear all risks associated with, the use of any content transmitted over the WiFi,
                             including any reliance on the accuracy, completeness, or usefulness of such content. </p>
                        <p>DFDS is not responsible for any content and will not pre-screen content transmitted by you over the WiFi, but DFDS shall have the right in its sole discretion to
                             refuse or move any such content that is available via the WiFi, including without limitation any content that violates these T&C, or is otherwise objectionable.</p>
                        <p>DFDS may preserve and disclose content if required to do so by law, or in the good faith belief that such preservation or disclosure is reasonably
                             necessary to comply with legal process, enforce these T&C, or respond to claims that any content violates the rights of third-parties.</p>
                    </section>
                    <section>
                        <h4>Limitation of DFDS’ Liability</h4>
                        <p>Neither DFDS nor any of its affiliates accepts any responsibility for any malfunction to your equipment, or if the WiFi does not function on your equipment.</p>
                        <p>The WiFi is provided on an a “as is” basis and DFDS does not warrant that the WiFi will be uninterrupted or error free,
                             nor is any minimum upload or download speeds guaranteed. </p>
                        <p>Neither DFDS nor any of its affiliates shall be liable for any direct, indirect,
                             incidental, consequential or other damages arising out of the use of the WiFi or inability to use the WiFi. </p>
                    </section>
                    <section>
                        <h4>Your obligation to indemnify DFDS</h4>
                        <p>You agree to indemnify DFDS against all claims, liability, damages, costs and expenses, including but not limited to,
                             reasonable attorney fees, arising out of or related to any and all use of your internet access account, including,
                             but not limited to, any content transmitted over the service, your use of the WiFi, your violation of these T&C,
                              and your violation of any rights of any other person.</p>
                    </section>
                    <section>
                        <h4>Proprietary Rights</h4>
                        <p>All copyrightable content distributed over the WiFi is copyrighted by the third-party content provider or DFDS, as applicable.
                             DFDS and/or such third-party content providers own all right title and interest to such content and you may not copy, distribute, 
                             transmit or publish, in any form, including printed, electronic, digitized, audio or otherwise, or modify all or any portion of such 
                             content without the prior written consent of the copyright owner.  </p>
                    </section>
                    <section>
                        <h4>Amendment of the T&C</h4>
                        <p>The T&C may be amended by DFDS without notice.
                             {/* ##NEED CORRECT LINK### The T&C in force at any time can be found here: 
                        <a href="[INSERT LINK]">link</a>*/} </p> 
                    </section>
                    <section>
                        <h4>How DFDS processes your personal data</h4>
                        <p>We process your personal data in accordance with the GDPR and our privacy notice which can be found here: 
                        <a href="http://www.dfds.com/en/legal/privacy">www.dfds.com/en/legal/privacy</a></p>
                    </section>
                    <section>
                        <h4>Choice of law and jurisdiction</h4>
                        <p>The T&C are subject to Danish law.</p>
                        <p>Any conflict that may arise from your use of the WiFi or these T&C must be brought before the Danish
                             courts and must be filed for the competent court at DFDS' place of business. Consumer jurisdiction rules apply in cases between DFDS and consumers.</p>
                    </section>
                    <BackButton backButton={this.props.backButton} />
                </div>
        );
    }
}

export default TermsOfService;