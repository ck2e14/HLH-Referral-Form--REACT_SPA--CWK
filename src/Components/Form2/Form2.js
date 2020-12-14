import React, { useState, useEffect } from "react";
import "./Form2.css";
// TODO: RUN RegExp validations against the user inputs + don't allow submit without passing
// TODO: *** BETA *** SENDS PLAIN TEXT MAIL - REQUEST API ENDPOINT TO BE SETUP TO HTTP POST THE DATA TO
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

const Form2 = () => {
   // PATIENT DETAILS STATE
   const [nhsNumber, setNhsNumber] = useState("");
   const [surname, setSurname] = useState("");
   const [forename, setForename] = useState("");
   const [dob, setDob] = useState("");
   const [address, setAddress] = useState("");
   const [email, setEmail] = useState("");
   const [telephone, setTelephone] = useState("");
   const [GPDetails, setGPDetails] = useState("");

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

   // RENDER CONTROLLERS
   const [renderPatientForm, setRenderPatientForm] = useState(false);
   const [renderReferrerForm, setRenderReferrerForm] = useState(false);
   const [renderClinicalDetailsForm, setRenderClinicalDetailsForm] = useState(false);
   const [renderSplash, setRenderSplash] = useState(false);
   const [activeTab, setActiveTab] = useState("");

   useEffect(() => {
      // setTimeout(() => {
      //    setRenderSplash(true);
      // }, 1500);
      setTimeout(() => {
         setRenderSplash(false);
         setRenderPatientForm(true);
      }, 4000);
   }, []);

   // This will send the completed form to the HLH backend, when configured.
   const sendDetails = () => {
      if (
         !nhsNumber ||
         !surname ||
         !forename ||
         !dob ||
         !address ||
         !email ||
         !telephone ||
         !GPDetails ||
         !referrerName ||
         !referrerProfession ||
         !GMCorHPCNumber ||
         !referrerEmailForReport ||
         !referrerPostalAddressForReport ||
         !referrerPhoneNumber ||
         !date ||
         !modality ||
         !knownAllergies ||
         !otherClinicalDetails ||
         !examinationRequest
      )
         return alert("Please ensure all input fields have a value");

      console.log(`NHS Number: ${nhsNumber}, 
      SURNAME: ${surname}, 
      FORENAME: ${forename}, 
      DoB: ${dob}, 
      ADDRESS: ${address}, 
      EMAIL: ${email}, 
      TELEPHONE: ${telephone}, 
      GP DETAILS: ${GPDetails}`);

      // fetch(`https://THIS GOES TO HLH .com`, {
      //    method: "POST",
      //    body: JSON.stringify("referralDetailsObject"),
      // })
      //    .then(resp => resp.json())
      //    .then(data => console.log(data));
   };

   const handleTabClick = tabType => {
      if (tabType === "patient") {
         setRenderPatientForm(true);
         setRenderReferrerForm(false);
         setRenderClinicalDetailsForm(false);
      }
      if (tabType === "referrer") {
         if (!nhsNumber || !surname || !forename || !dob || !address || !email || !telephone || !GPDetails) {
            return alert("<<Placeholder Alert>> \nPlease complete all patient information fields");
         } else {
            setRenderPatientForm(false);
            setRenderReferrerForm(true);
            setRenderClinicalDetailsForm(false);
         }
      }
      if (tabType === "clinical") {
         if (
            !referrerName ||
            !referrerProfession ||
            !GMCorHPCNumber ||
            !referrerEmailForReport ||
            !referrerPostalAddressForReport ||
            !referrerPhoneNumber ||
            !date
         ) {
            return alert("<<Placeholder Alert>> \nPlease provide all patient and referrer details");
         } else {
            setRenderPatientForm(false);
            setRenderReferrerForm(false);
            setRenderClinicalDetailsForm(true);
         }
      }
   };

   let patientDetailsComplete =
      nhsNumber && surname && forename && dob && address && email && telephone && GPDetails
         ? "sectionCompleted"
         : "";

   let referrerDetailsComplete =
      referrerName &&
      referrerProfession &&
      GMCorHPCNumber &&
      referrerEmailForReport &&
      referrerPostalAddressForReport &&
      referrerPhoneNumber &&
      date
         ? "sectionCompleted"
         : "";

   let clinicalDetailsComplete =
      modality && knownAllergies && examinationRequest && otherClinicalDetails ? "sectionCompleted" : "";

   let allDetailsComplete =
      patientDetailsComplete && referrerDetailsComplete && clinicalDetailsComplete ? "allSectionsCompleted" : "";

   return (
      <div className='formv2'>
         <div className='detailsv2'>

            {/* PATIENT DETAILS FORM */}
            <div className='patient-flexbox detailsv2FlexItem'>
               <h1>Patient Details</h1>
               <div className='form-flex-itemv2' id='NHS number'>
                  <div className='form-details-label'>NHS Number</div>
                  <input
                     type='number'
                     onChange={e => setNhsNumber(e.target.value)}
                     value={nhsNumber}
                     className='form-detailsv2-input'
                  />
               </div>

               <div className='form-flex-itemv2' id='Forename'>
                  <div className='form-details-label'>Forename</div>
                  <input
                     type='text'
                     onChange={e => setForename(e.target.value)}
                     value={forename}
                     className='form-detailsv2-input'
                  />
               </div>

               <div className='form-flex-itemv2' id='Surname'>
                  <div className='form-details-label'>Surname</div>
                  <input
                     type='text'
                     onChange={e => setSurname(e.target.value)}
                     value={surname}
                     className='form-detailsv2-input'
                  />
               </div>

               <div className='form-flex-itemv2' id='Date of Birth'>
                  <div className='form-details-label'>Date of Birth</div>
                  <input
                     type='date'
                     onChange={e => setDob(e.target.value)}
                     value={dob}
                     className='form-detailsv2-input'
                  />
               </div>

               <div className='form-flex-itemv2' id='Address'>
                  <div className='form-details-label'>Address</div>
                  <input
                     type='text'
                     onChange={e => setAddress(e.target.value)}
                     value={address}
                     className='form-detailsv2-input'
                  />
               </div>

               <div className='form-flex-itemv2' id='Email'>
                  <div className='form-details-label'>Email Address</div>
                  <input
                     type='email'
                     onChange={e => setEmail(e.target.value)}
                     value={email}
                     className='form-detailsv2-input'
                  />
               </div>

               <div className='form-flex-itemv2' id='Phone'>
                  <div className='form-details-label'>Telephone</div>
                  <input
                     type='number'
                     onChange={e => setTelephone(e.target.value)}
                     value={telephone}
                     className='form-detailsv2-input'
                  />
               </div>

               <div className='form-flex-itemv2' id='GP details'>
                  <div className='form-details-label'>GP Name / Address</div>
                  <input
                     type='textarea'
                     onChange={e => setGPDetails(e.target.value)}
                     value={GPDetails}
                     className='form-detailsv2-input'
                  />
               </div>
            </div>

            {/* REFERRER DETAILS FORM */}
            <div className='referrer-flexbox detailsv2FlexItem'>
            <h1>Referrer Details</h1>
               <div className='form-flex-itemv2' id='referrerName'>
                  <div className='form-details-label'>Name</div>
                  <input
                     type='text'
                     onChange={e => setReferrerName(e.target.value)}
                     value={referrerName}
                     className='form-detailsv2-input'
                  />
               </div>

               <div className='form-flex-itemv2' id='referrerProfession'>
                  <div className='form-details-label'>Profession</div>
                  <input
                     type='text'
                     onChange={e => setReferrerProfession(e.target.value)}
                     value={referrerProfession}
                     className='form-detailsv2-input'
                  />
               </div>

               <div className='form-flex-itemv2' id='GMCorHPCnumber'>
                  <div className='form-details-label'>GMC/HPC Number</div>
                  <input
                     type='number'
                     onChange={e => setGMCorHPCNumber(e.target.value)}
                     value={GMCorHPCNumber}
                     className='form-detailsv2-input'
                  />
               </div>

               <div className='form-flex-itemv2' id='referrerEmail'>
                  <div className='form-details-label'>Email Address for Report</div>
                  <input
                     type='email'
                     onChange={e => setReferrerEmailForReport(e.target.value)}
                     value={referrerEmailForReport}
                     className='form-detailsv2-input'
                  />
               </div>

               <div className='form-flex-itemv2' id='referrerPostal'>
                  <div className='form-details-label'>Postal Address for Report</div>
                  <input
                     type='text'
                     onChange={e => setReferrerPostalAddressForReport(e.target.value)}
                     value={referrerPostalAddressForReport}
                     className='form-detailsv2-input'
                  />
               </div>

               <div className='form-flex-itemv2' id='referrerTelephone'>
                  <div className='form-details-label'>Telephone Number</div>
                  <input
                     type='number'
                     onChange={e => setReferrerPhoneNumber(e.target.value)}
                     value={referrerPhoneNumber}
                     className='form-detailsv2-input'
                  />
               </div>

               <div className='form-flex-itemv2' id='Date'>
                  <div className='form-details-label'>Date</div>
                  <input
                     type='text'
                     onChange={e => setDate(e.target.value)}
                     value={date}
                     className='form-detailsv2-input'
                  />
               </div>
            </div>
         
            {/* CLINICAL DETAILS FORM */}
            <div className='form-flexbox detailsv2FlexItem'>
            <h1>Other Clinical Details</h1>
               <div className='form-flex-itemv2' id='modality'>
                  <div className='form-details-label'>Modality</div>
                  <input
                     type='text'
                     onChange={e => setModality(e.target.value)}
                     value={modality}
                     className='form-detailsv2-input'
                  />
               </div>

               <div className='form-flex-itemv2' id='allergies'>
                  <div className='form-details-label'>Known Allergies</div>
                  <input
                     type='text'
                     onChange={e => setKnownAllergies(e.target.value)}
                     value={knownAllergies}
                     className='form-detailsv2-input'
                  />
               </div>

               <div className='form-flex-itemv2' id='examinationRequested'>
                  <div className='form-details-label'>Examination Request</div>
                  <input
                     type='text'
                     onChange={e => setExaminationRequest(e.target.value)}
                     value={examinationRequest}
                     className='form-detailsv2-input'
                  />
               </div>

               <div className='form-flex-itemv2' id='OtherClinicalDetails'>
                  <div className='form-details-label'>Other Clinical Details</div>
                  <input
                     type='text'
                     onChange={e => setOtherClinicalDetails(e.target.value)}
                     value={otherClinicalDetails}
                     className='form-detailsv2-input'
                  />
               </div>
            </div>
       
         </div>

         <div className={`submit-btnv2 ${allDetailsComplete}`} onClick={() => sendDetails()}>
            Submit
         </div>
      </div>
   );
};

export default Form2;
