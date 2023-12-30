import React from 'react'
import "./css/Cratenewemp.css"

export const Cratenewemp = () => {
  return (
    <>
      <div class="container">
        <h1>Employee Details Entry</h1>
        <form action="#">
            <div class="form-first">
                <div class="fields">

                    <div class="inputfield">
                        <label>Emp I'D</label>
                        <input type="number" required/>
                    </div>

                    <div class="inputfield">
                        <label>Emp Name</label>
                        <input type="text" required/>
                    </div>

                    <div class="inputfield">
                        <label>DOB</label>
                        <input type="datetime" required/>
                    </div>

                    <div class="inputfield">
                        <label>Address</label>
                        <input type="text" required/>
                    </div>

                    <div class="inputfield">
                        <label>Mobile Number</label>
                        <input type="number" required/>
                    </div>

                    <div class="inputfield">
                        <label>Blood Group</label>
                        <input type="text" required/>
                    </div>

                </div>
            </div>


            <div class="form-second">

                <div class="inputfield">
                    <label>Aadhaar</label>
                    <input type="file" required/>
                    <input type="image"/>
                </div>

                <div class="inputfield">
                    <label>Department</label>
                    <input type="text" required/>
                </div>

                
                <div class="inputfield">
                    <label>DOJ</label>
                    <input type="text" required/>
                </div>

                <div class="inputfield">
                    <label>DOR</label>
                    <input type="text" required/>
                </div>

                <div class="inputfield">
                    <label>Emp destination</label>
                    <input type="text" required/>
                </div>

                <div class="inputfield">
                    <label>Remarks</label>
                    <input type="text" required/>
                </div>

            </div>
        </form>
    </div>

    </>
  )
}
