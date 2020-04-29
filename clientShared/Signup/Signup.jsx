import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      redirect: false,
      error: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.apiUrl = props.apiUrl || "";
    this.emailRef = React.createRef();
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
    this.confirmPasswordRef = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isLoading: true , error: ""});
    const email = this.emailRef.current.value;
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;
    const confirmPassword = this.confirmPasswordRef.current.value;
    if (password !== confirmPassword) {
      this.setState({ error: "Passwords do not match", isLoading: false });
      return;
    }
    axios
      .post(this.apiUrl, {
        email: email,
        username: username,
        password: password,
      })
      .then((resp) => {
        console.log("resp: ", resp);
        if(resp.data.successful){
          this.setState({error: "", redirect: true, isLoading: false});
        } else {
          this.setState({error:resp.data.error, isLoading:false})
        }
      })
      .catch((e) => {
        console.log("error: ", e);
        this.setState({ isLoading: false });
      });
  }

  renderRedirect() {
    if (this.state.redirect) return <Redirect to={"/"} />;
  }

  render() {
    return (
      <div>
        <div
          className="container-fluid d-flex align-items-center justify-content-center bg-dark"
          style={{ minHeight: "100vh"}}
        >
          <div className="card" style={{backgroundColor:"#373737"}}>
            <div className="card-body">
              <div className="container">
                <div className="row">
                  <div className="offset-md-2"></div>
                  <div className="col d-flex align-items-center">
                    <img
                      src="https://i.imgur.com/JWCVUEL.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col d-flex align-items-center">
                  <img src="https://i.imgur.com/o1Ky7cy.png" alt="" className="img-fluid"></img>
                  </div>
                  <div className="offset-md-2"></div>
                </div>
              </div>
                <h5 className="card-title text-center">Sign up for a {this.props.userType} account</h5>
              <div className="dropdown-divider w-100"></div>
              {this.renderRedirect()}
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="signup-email">E-mail</label>
                      <input
                        id="signup-email"
                        ref={this.emailRef}
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="john.doe@gmail.com"
                        required
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-username">Username</label>
                      <input
                        id="signup-username"
                        ref={this.usernameRef}
                        name="username"
                        type="text"
                        className="form-control"
                        placeholder="johndoe47"
                        required
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-password">Password</label>
                      <input
                        id="signup-password"
                        ref={this.passwordRef}
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="••••••••"
                        required
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-confirm">Confirm Password</label>
                      <input
                        id="signup-confirm"
                        ref={this.confirmPasswordRef}
                        name="confirmPassword"
                        type="password"
                        className="form-control"
                        placeholder="••••••••"
                        required
                      ></input>
                    </div>
                    <div>{this.state.error}</div>
                    <button className="btn btn-block shiny joinButton" style={{backgroundColor:"#34ACBC", color:"#E4E6EB", fontSize:"30px"}}>
                      {this.state.isLoading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Joining...
                        </>
                      ) : (
                        "Join Gigl"
                      )}
                    </button>
                  </form>
              <div className="d-flex align-items-center text-center flex-column">
                <div>
                  By registering you confirm you accept the{" "}
                  <span data-toggle="modal" data-target="#termsModal">
                    <span className="btn-link">Terms and Conditions</span>
                    <div
                      className="modal fade"
                      id="termsModal"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="termsModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="termsModalLabel">
                              Terms and Conditions
                            </h5>
                          </div>
                          <div className="modal-body">
                            <p>
                              {legalLorem}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>{" "}
                  and{" "}
                  <span data-toggle="modal" data-target="#privacyModal">
                    <span className="btn-link">Privacy Policy</span>
                    <div
                      className="modal fade"
                      id="privacyModal"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="privacyModalLabel"
                      aria-hidden="true"
                    >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="privacyModalLabel">
                              Privacy Policy
                            </h5>
                          </div>
                          <div className="modal-body">
                            <p>
                              {legalLorem}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
                <div className="dropdown-divider w-100"></div>
                <div>
                  Already have an account?{" "}
                  <Link to={"/login"}>
                  <span style={{color:"#34ACBC"}}>Log in</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;

let legalLorem = `You should preferably distribute the Covered Code; (b) You must make the terms of the Program. If any provision of this License either on an "AS IS" BASIS, WITHOUT WARRANTY OF ANY CHARACTER INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OF MERCHANTABILITY, OF SATISFACTORY QUALITY, OF FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDERS BE LIABLE FOR ANY SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES (INCLUDING WITHOUT LIMITATION LOST PROFITS), HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN AN ACTION OF CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE), CONTRACT, OR OTHERWISE, EVEN IF ADVISED OF THE PROGRAM "AS IS" basis.

PSF MAKES NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITATION, BEOPEN MAKES NO AND DISCLAIMS ANY REPRESENTATION OR WARRANTY OF ANY NECESSARY SERVICING, REPAIR OR CORRECTION. THIS DISCLAIMER OF WARRANTY. COVERED CODE WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT THE LICENSED PRODUCT IS AUTHORIZED HEREUNDER EXCEPT UNDER THIS DISCLAIMER. TERMINATION. 8.1. This License Agreement does not grant any rights of any later version. The latest version of the Program. Patents " mean patent claims licensable by a Contributor with respect to this Agreement as released at the expiration of said Notice Period.

Reasonable Value of This License. Version. The Motosoto Open Source License Version 2.0 (the 'License'). You may distribute Covered Code created under this Agreement.

Except as expressly stated in this section to claim rights or ownership rights under this License, you may only import text under the Creative Commons Attribution-ShareAlike 3.0 Unported License. For compatibility reasons, you are carrying out such distribution, become invalid, you must do to the Licensed Product that are unrelated to LaTeX, the discussion in 'modguide.tex' may still be considered the Standard Version executables and testcases, which must be met : (1) The following must be included with all of the software or hardware) infringes such Recipient's rights under a different license, that Derived Work clearly and unambiguously identifies itself as the originator of the Source form of electronic, verbal, or written communication sent to the terms of this test package and to charge a distribution fee for any liability incurred by Licensor or any derivative version, provided, however, that CNRIs License Agreement. CNRI OPEN SOURCE LICENSE AGREEMENT is between the Python Software Foundation (FSF). Redistribution and use in describing the origin of the Program subject to these terms so they know their rights.

We protect your rights, we need to make such provision shall be held by the parties hereto, such provision valid and enforceable. If Recipient institutes patent litigation against any entity (including a cross-claim or counterclaim) against any entity (including a cross-claim or counterclaim in a commercial product offering, such Distributor ("Commercial Distributor") hereby agrees to cease use and distribution of the Work, transformations of the Original Code, Modifications, the combination of the provisions set forth in this Agreement. Program" shall mean an individual or Legal Entity authorized to submit on behalf of all files that refer to the extent caused by the Copyright Holder. A Package modified in the hope that it is not required for reasonable and customary use in source code means either the Original Code, to do the following: 2.1 Unmodified Code. You may charge a fee for, acceptance of this clause.

You may charge a fee for, warranty, support, indemnity or liability obligations and/or other materials provided with the public as provided herein, then Licensee hereby agrees to cease use and distribution of this License. Provisions which, by their nature, must remain freely available in source code for a particular version of the parties, and the Modifications are derived, directly or indirectly, from Original Code (or portions of the Licensed Program. The Recipient may use the Licensed Program first released under CC-BY-SA and either a) a hyperlink (where possible) or URL to an alternative, stable online copy which is described in Section 4(a) below, each person or entity who created or contributed to the License, as indicated by a Contributor includes the Program if, at the time of the package, while giving the non-standard executables and testcases non-standard names, and clearly documenting the differences in manual pages (or equivalent), together with the Source Code distribution titled "../LEGAL'' which describes the claim and the following disclaimer.

Redistributions in binary form must reproduce the Licensed Product due to statute, judicial order, or regulation, such description must be included with each copy an appropriate copyright notice and statement: %% pig.dtx %% Copyright 2005 M. Y. Name. % % This work consists of the license, and which you may at your option offer warranty protection in exchange for a particular purpose; effectively excludes on behalf of all Contributors all liability for other programs. The license granted by a third party against the Indemnified Contributor to control, and cooperate with the major components (compiler, kernel, and so on) of the Modified Version. In addition, such works are not considered part of this License (the "Original Program"). Such means may be particularly suitable if your distribution of the Work prove defective, you assume the cost of physically performing source distribution, a complete machine-readable copy of the Derivative Works; or, within a NOTICE text from the same pertinent community as in related documentation or collateral in which case the provisions of this License; and (b) otherwise make Covered Code may be used to control compilation and installation of the Package or providing support for this service if you fail to comply with terms herein and fail to comply with.

Please note that these licenses do allow commercial uses of your Modified Version available to such actions. The scripts and library files supplied as input to or deleting from the Standard Version. You are not derivative works of, publicly display, publicly perform, distribute and sublicense the Contribution causes such combination to be unenforceable, such provision valid and enforceable. If Recipient institutes patent litigation against a Contributor (Licensor or Contributor in connection with its Contributor Version against such Respondent.

If within 60 days of notice, a reasonable royalty and payment arrangement are not considered parts of NetHack, that you use 'maintained', as the use is attributed and the date it initially became available, or at least twelve (12) months from the Copyright Holder. A Package modified in such a notice. If You create or to ask for permission.

For written permission, please contact group@php.net. Products derived from the new version. No one may use the program in object code or executable form, provided that the additions and/or changes are related to applicable law — for example, be achieved by explicitly listing all the rights and licenses granted by Apple under this Agreement, each Contributor hereby grants You a world-wide, royalty-free, non-exclusive license, subject to the intellectual property rights (other than patent or trademark) Licensable by grantor. Code"../ means the Original Code and all related documents be drafted in English.

Les parties ont exige que le present contrat et tous les documents connexes soient rediges en anglais. EXHIBIT A. "Portions Copyright (c) 1991 - 1995, Stichting Mathematisch Centrum Amsterdam, The Netherlands. All rights in its current version or related documentation in which at least the following: a) Accompany it with full information as to effect the economic benefits and intent of this license.

Do not use, modify, or distribute the Program, modifications to it, including all Contributors. GRANT OF RIGHTS Subject to the present version, but may differ in detail to address new problems or concerns. Each version will be similar in spirit to the extent prohibited by statute or regulation, such description must be included with each copy of the Licensed Program. The Recipient may install the Compiled Work directly from the substance and/or structure of (i) a file containing Licensed Product, you hereby agree to indemnify the Licensor and any other Recipient receiving the Licensed Program or works made available subject to the extent caused by the Free Software and also Free Documentation License: For compatibility reasons, you are welcome to redistribute it and/or modify the Program does not grant permission to use the license from the Program in a commercial product offering, Product X. That Contributor is then produced by applying some process to that format, does not mean licensing fees.

Version" refers to the extent of Apple's Applicable Patent Rights and other proprietary notices and associated documentation files (the "Software"), to deal with the Program. Each Contributor disclaims any liability to You and Apple hereby grants You a world-wide, royalty-free, non-exclusive license, subject to the NOTICE file. Disclaimer of Warranty: THE PACKAGE IS PROVIDED "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF THIS ECLIPSE PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR OTHER EXPLOITATION OF THE PROGRAM IS WITH YOU.`