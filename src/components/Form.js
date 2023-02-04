import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import vector from '../assets/Vector.svg'
import niro from '../assets/svgexport-1.svg'

import '../styles/Form.css'

function AddressForm() {
    return (
        <>
            <div>
                <h2>Rental Property Details</h2>
            </div>
            <form>
                <label htmlFor='flat-number' className='labeheight: 19px;
    display: inline;l'>flat no./Building name</label>
                <input type="text" id="flat-number"></input>
                <div className='warning'>
                    <img className='vector' src={vector} alt="help"></img>
                    <p className='warning-text'>This address will be used for verification</p>
                </div>
                <label htmlFor='street-name' className='label'>Street Name</label>
                <input type="text" id="street-name"></input>
                <label htmlFor='Locality' className='label'>Locality</label>
                <input type="text" id="Locality"></input>
                <label htmlFor='pin-code' className='label'>Property PIN Code</label>
                <input type="text" id="pin-code"></input>
                <label htmlFor='city' className='label'>City </label>
                <input type="text" id="city" ></input>
                <label htmlFor='state' className='label'>State </label>
                <input type="text" id="state"></input>
                <label htmlFor='amount' className='label' placeholder='₹'>Amount </label>
                <input type="text" id="amount"></input>
                <div className='warning'>
                    <img className='vector' src={vector} alt="help"></img>
                    <p className='warning-text'>Only rent payments above ₹10,000 can be paid using this credit line</p>
                </div>
            </form>

            <h4 className='bottom'>Paying Rent For</h4>
            <div className='month-divs'>
                <div className='month'>May</div>
                <div className='month'>June</div>
                <div className='month'>July</div>
            </div>
            <div className='button'>
                <div className='detail-verification-tag'><p>Please verify these details as they cannot be changed later</p></div>
                <button className='continue'>Continue</button>
            </div>
            <footer>Powered by  <span><img src={niro} alt="niro" className='niro'></img></span> </footer>
        </>
    );
}

export default AddressForm;