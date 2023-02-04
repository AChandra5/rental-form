import React from 'react'
import '../styles/Top.css'
import help from '../assets/help.svg'
import Group from '../assets/Group 1000002475.svg'
// import Group1 from '../assets/Group 1000002492.svg'
import close from '../assets/close-x-svgrepo-com.svg'
import left from '../assets/left-arrow-svgrepo-com.svg'



function Top() {
  return (
    <>
      <div className='top'>
        <div>
          <img src={left} alt="help" ></img>
        </div>
        <div>
          <img src={Group} alt="help" className='left-img'></img>
        </div>

        {/* <div className='top-bar'> */}
          <div>
            <p style={{ color: "gray" }}>1 of 4 steps</p>
            <p style={{ color: 'white' }}>Rental Details</p>
          </div>
          <div>
            <img src={help} alt="help" ></img>

          </div>
          <div>
            <img src={close} alt="help"  ></img>

          </div>

        </div>
      {/* </div> */}

      {/* <img src= {Group1} alt="help"></img> */}

      



    </>
  )
}

export default Top