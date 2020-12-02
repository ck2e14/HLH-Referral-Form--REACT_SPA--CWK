import React, { useState } from "react";
import "./Form.css";

const Form = () => {
   // PATIENT DETAILS STATE
   const [nhsNumber, setNhsNumber] = useState("");
   const [surname, setSurname] = useState("");
   const [forename, setForename] = useState("");
   const [dob, setDob] = useState("");
   const [address, setAddress] = useState("");
   const [email, setEmail] = useState("");
   const [telephone, setTelephone] = useState("");
   const [GPDetails, setGPDetails] = useState("");
   const [renderPatientForm, setRenderPatientForm] = useState(false);
   const [renderReferrerForm, setRenderReferrerForm] = useState(false);
   const [renderClinicalDetailsForm, setRenderClinicalDetailsForm] = useState(false);

   // REFERRER DETAILS STATE
   const [referrerName, setReferrerName] = useState("");
   const [referrerProfession, setReferrerProfession] = useState("");
   const [GMCorHPCNumber, setGMCorHPCNumber] = useState("");
   const [referrerEmailForReport, setReferrerEmailForReport] = useState("");
   const [referrerPostalAddressForReport, setReferrerPostalAddressForReport] = useState("");
   const [referrerPhoneNumber, setReferrerPhoneNumber] = useState("");
   const [date, setDate] = useState("");

   // CLINICAL DETAILS STATE
   const [modality, setModality] = useState("");
   const [knownAllergies, setKnownAllergies] = useState("");
   const [examinationRequest, setExaminationRequest] = useState("");
   const [otherClinicalDetails, setOtherClinicalDetails] = useState("");

   // This will send the completed form to the HLH backend, when configured.
   const sendDetails = () => {
      console.log(nhsNumber, surname, forename, dob, address, email, telephone, GPDetails);
      // fetch(`https://THIS GOES TO HLH .com`, {
      //    method: "POST",
      //    body: JSON.stringify("referralDetailsObject"),
      // })
      //    .then(resp => resp.json())
      //    .then(data => console.log(data));
   };

   // TODO: *** BETA VERSION *** SENDS PLAIN TEXT MAIL - REQUEST API ENDPOINT TO BE SETUP TO HTTP POST THE DATA TO
   //  Can instead somehow a call to an API that triggers a notif mail to the HLH admins. Or they should really just set up their own n
   //  notifs from webhooks
   // function sendMail() {
   //    var link =
   //       "mailto:admin@heartlunghealth.com" +
   //       "?cc=" +
   //       "&subject=" +
   //       escape("This is my subject") +
   //       "&body=" +
   //       `Patient and Referrer Details  %0D%0A *PATIENT* %0D NHS Number: ${nhsNumber} %0D Surname: ${surname} %0D Forename: ${forename} %0D D.o.B.: ${dob} %0D Email: ${email} %0D Address: ${address} %0D Telephone: ${telephone} %0D GP's Details: ${GPDetails} %0D %0D %0D %0D *REFERRER* %0D test %0D test`;
   //    // escape(document.getElementById("test").value);
   //    window.location.href = link;
   // }

   const handleTabClick = tabType => {
      if (tabType === "patient") {
         setRenderPatientForm(true);
         setRenderReferrerForm(false);
         setRenderClinicalDetailsForm(false);
      }
      if (tabType === "referrer") {
         setRenderPatientForm(false);
         setRenderReferrerForm(true);
         setRenderClinicalDetailsForm(false);
      }
      if (tabType === "clinical") {
         setRenderPatientForm(false);
         setRenderReferrerForm(false);
         setRenderClinicalDetailsForm(true);
      }
   };

   return (
      <div className='form'>
         <div className='tab-selector'>
            <h1 className='tab-title noSelect' onClick={() => handleTabClick("patient")}>
               <div className='tab-number'>1. &nbsp; </div> <div className='tab-value'>Patient Details</div>
            </h1>
            <h1 className='tab-title noSelect' onClick={() => handleTabClick("referrer")}>
               <div className='tab-number'>2. &nbsp; </div> <div className='tab-value'>Referrer Details</div>
            </h1>
            <h1 className='tab-title noSelect' onClick={() => handleTabClick("clinical")}>
               <div className='tab-number'>3. &nbsp; </div> <div className='tab-value'>Clinical Details</div>
            </h1>
         </div>
         <div className='details'>
            {!renderPatientForm && !renderReferrerForm && !renderClinicalDetailsForm && (
               <div className='splash-message'>
                  Welcome to the Heart &amp; LungHealth Referral form.
                  <br />
                  <br />
                  Please fill out the requested patient, referrer and clinical details and click submit.{" "}
               </div>
            )}

            {/* PATIENT DETAILS FORM */}
            {renderPatientForm && (
               <div className='patient-flexbox'>
                  <div className='form-flex-item' id='NHS number'>
                     <div className='form-details-label'>NHS Number</div>
                     <input
                        type='text'
                        onChange={e => setNhsNumber(e.target.value)}
                        value={nhsNumber}
                        className='form-details-input'
                     />
                  </div>

                  <div className='form-flex-item' id='Forename'>
                     <div className='form-details-label'>Forename</div>
                     <input
                        type='text'
                        onChange={e => setForename(e.target.value)}
                        value={forename}
                        className='form-details-input'
                     />
                  </div>

                  <div className='form-flex-item' id='Surname'>
                     <div className='form-details-label'>Surname</div>
                     <input
                        type='text'
                        onChange={e => setSurname(e.target.value)}
                        value={surname}
                        className='form-details-input'
                     />
                  </div>

                  <div className='form-flex-item' id='Date of Birth'>
                     <div className='form-details-label'>Date of Birth</div>
                     <input
                        type='text'
                        onChange={e => setDob(e.target.value)}
                        value={dob}
                        className='form-details-input'
                     />
                  </div>

                  <div className='form-flex-item' id='Address'>
                     <div className='form-details-label'>Address</div>
                     <input
                        type='text'
                        onChange={e => setAddress(e.target.value)}
                        value={address}
                        className='form-details-input'
                     />
                  </div>

                  <div className='form-flex-item' id='Email'>
                     <div className='form-details-label'>Email Address</div>
                     <input
                        type='text'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        className='form-details-input'
                     />
                  </div>

                  <div className='form-flex-item' id='Phone'>
                     <div className='form-details-label'>Telephone</div>
                     <input
                        type='text'
                        onChange={e => setTelephone(e.target.value)}
                        value={telephone}
                        className='form-details-input'
                     />
                  </div>

                  <div className='form-flex-item' id='GP details'>
                     <div className='form-details-label'>GP Name / Address</div>
                     <input
                        type='textarea'
                        onChange={e => setGPDetails(e.target.value)}
                        value={GPDetails}
                        className='form-details-input'
                     />
                  </div>
               </div>
            )}

            {/* REFERRER DETAILS FORM */}
            {renderReferrerForm && (
               <div className='referrer-flexbox'>
                  <div className='form-flex-item' id='referrerName'>
                     <div className='form-details-label'>Name</div>
                     <input
                        type='text'
                        onChange={e => setReferrerName(e.target.value)}
                        value={referrerName}
                        className='form-details-input'
                     />
                  </div>

                  <div className='form-flex-item' id='referrerProfession'>
                     <div className='form-details-label'>Profession</div>
                     <input
                        type='text'
                        onChange={e => setReferrerProfession(e.target.value)}
                        value={referrerProfession}
                        className='form-details-input'
                     />
                  </div>

                  <div className='form-flex-item' id='GMCorHPCnumber'>
                     <div className='form-details-label'>GMC or HPC Number</div>
                     <input
                        type='text'
                        onChange={e => setGMCorHPCNumber(e.target.value)}
                        value={GMCorHPCNumber}
                        className='form-details-input'
                     />
                  </div>

                  <div className='form-flex-item' id='referrerEmail'>
                     <div className='form-details-label'>Email Address for Report</div>
                     <input
                        type='text'
                        onChange={e => setReferrerEmailForReport(e.target.value)}
                        value={referrerEmailForReport}
                        className='form-details-input'
                     />
                  </div>

                  <div className='form-flex-item' id='referrerPostal'>
                     <div className='form-details-label'>Postal Address for Report</div>
                     <input
                        type='text'
                        onChange={e => setReferrerPostalAddressForReport(e.target.value)}
                        value={referrerPostalAddressForReport}
                        className='form-details-input'
                     />
                  </div>

                  <div className='form-flex-item' id='referrerTelephone'>
                     <div className='form-details-label'>Telephone Number</div>
                     <input
                        type='text'
                        onChange={e => setReferrerPhoneNumber(e.target.value)}
                        value={referrerPhoneNumber}
                        className='form-details-input'
                     />
                  </div>

                  <div className='form-flex-item' id='Phone'>
                     <div className='form-details-label'>Date</div>
                     <input
                        type='text'
                        onChange={e => setDate(e.target.value)}
                        value={date}
                        className='form-details-input'
                     />
                  </div>
               </div>
            )}

            {/* CLINICAL DETAILS FORM */}
            {renderClinicalDetailsForm && (
               <div className='form-flexbox'>
                  <div className='form-flex-item' id='modality'>
                     <div className='form-details-label'>Modality</div>
                     <input
                        type='text'
                        onChange={e => setModality(e.target.value)}
                        value={modality}
                        className='form-details-input'
                     />
                  </div>

                  <div className='form-flex-item' id='allergies'>
                     <div className='form-details-label'>Known Allergies</div>
                     <input
                        type='text'
                        onChange={e => setKnownAllergies(e.target.value)}
                        value={knownAllergies}
                        className='form-details-input'
                     />
                  </div>

                  <div className='form-flex-item' id='examinationRequested'>
                     <div className='form-details-label'>Examination Request</div>
                     <input
                        type='text'
                        onChange={e => setExaminationRequest(e.target.value)}
                        value={examinationRequest}
                        className='form-details-input'
                     />
                  </div>

                  <div className='form-flex-item' id='OtherClinicalDetails'>
                     <div className='form-details-label'>Other Clinical Details</div>
                     <input
                        type='text'
                        onChange={e => setDob(e.target.value)}
                        value={dob}
                        className='form-details-input'
                     />
                  </div>
               </div>
            )}
         </div>

         <div className='submit-btn' onClick={() => sendDetails()}>
            Submit
         </div>
      </div>
   );
};

export default Form;
