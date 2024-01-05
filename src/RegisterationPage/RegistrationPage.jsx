import React from "react";

// CSS
import './Registration.css' 



function RegistrationPage(){


    return(

        <div className="r-container">
        <center><h1>Employee Details Entry</h1></center>
        <form id='registration-form' action="#">
            <div className="r-form">
                

                    <div className="inputfield">
                        <label>Emp I'D</label>
                        <input type="number" required />
                    </div>

                    <div className="inputfield">
                        <label>Emp Name</label>
                        <input type="text" required />
                    </div>

                    <div className="inputfield">
                        <label>DOB</label>
                        <input type="datetime" required />
                    </div>

                    <div className="inputfield">
                        <label>Address</label>
                        <input type="text" required />
                    </div>

                    <div className="inputfield">
                        <label>Mobile Number</label>
                        <input type="number" required />
                    </div>

                    <div className="inputfield">
                        <label>Blood Group</label>
                        <input type="text" required />
                    </div>
                    <div className="r-btn">

                        <button className="r-btn1">Update</button>
                        <button className="r-btn1">Previvew</button>
                    </div>

            
            </div>


            <div className="r-form">
               
                    <div className="inputfield">
                        <label>Aadhaar</label>
                        <div className="r-pdf">
                            <input type="file" required id="pdfFile" />
                            <label for="pdfFile">
                                <img src="assets/img/registration_form/pdf-upload.png" alt="PDF Icon" srcset="" width="38px" />
                            </label>
                        </div>
                        <label>Image</label>
                        <div className="r-pdf">
                            
                            <input type="file" id="photoPic" />
                            <label for="photoPic">
                                <img src="assets/img/registration_form/img-upload.png" alt="Image Pic" width="38px" />
                            </label>
                        </div>
                    </div>
                    

                    <div className="inputfield">
                        <label>Department</label>
                        <input type="text" required />
                    </div>


                    <div className="inputfield">
                        <label>DOJ</label>
                        <input type="text" required />
                    </div>

                    <div className="inputfield">
                        <label>DOR</label>
                        <input type="text" required />
                    </div>

                    <div className="inputfield">
                        <label>Emp destination</label>
                        <input type="text" required />
                    </div>

                    <div className="inputfield">
                        <label>Remarks</label>
                        <input type="text" required />
                    </div>

                    <div className="r-btn">

                        <button className="r-btn1">Submit</button>
                        <button className="r-btn1">Reset</button>
                    
                </div>
                </div>
        </form>
        </div>
    
    )
}


export default RegistrationPage;