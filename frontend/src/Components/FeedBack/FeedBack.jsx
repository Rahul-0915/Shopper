import React from 'react'
import '../FeedBack/FeedBack.css'


function FeedBack() {
  return (

    <div className='mainfeed'>
        <br /><br /><br />
        <div className="container">
            <h2 className='h2'>Feedback</h2>
            <hr />
            <form action="" method=""> 
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="2">
                                <label>How do you rate your overall experience</label><br />
                                Bad <input type="radio" name="rate" value="bad" className='ok' />

                                     Average <input type="radio" name="rate" value="average" className='ok' />
                                 
                                     Good<input type="radio" name="rate" value="good" className='ok'/> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Full Name*</label><br />
                                <input type="text" name="fullname" className="txt" placeholder='Enter Name' />
                            </td>
                            <td>
                                <label>Email*</label><br />
                                <input type="text" name="email" className="txt" required placeholder='Enter Email id'/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Age*</label><br />
                                <input type="text" name="age" className="txt" placeholder='Enter age' />
                            </td>
                            <td>
                                <label>Phone*</label><br />
                                <input type="text" name="phone" className="txt" placeholder='Enter Contact Number' />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <label>Review Message*</label><br />
                                <textarea className="txtarea"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit" className="btn" onClick={alert("Your Order confirm")}>SUBMIT</button><br /><br />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
<br /><br /><br /><br />
    </div>
  )
}

export default FeedBack