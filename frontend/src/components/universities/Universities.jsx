import React from 'react'
import './universities.css'

const Universities = () => {
  return (
    <div className='uni'>
        <p>Here are some of our partenered universities</p>
        <div class='logos'>
        <div className='list'>
            <img src="logos\UCF.png" alt="UCF Logo" 
            className='logo'/>
            <img src="logos\OSU.png" alt="Ohio State Logo" 
            className='logo'/>
            <img src="logos\Mich.png" alt="Alabama Logo" 
            className='logo'/>
            <img src="logos\PSU.png" alt="Alabama Logo" 
            className='logo'/>
            <img src="logos\Bama.png" alt="Alabama Logo" 
            className='logo'/>
        </div>
        <div className='list'>
        <img src="logos\UT.png" alt="Tennessee Logo" 
            className='logo'/>
            <img src="logos\UM.png" alt="Miami Logo" 
            className='logo'/>
            <img src="logos\USC.png" alt="USC Logo" 
            className='logo'/>
            <img src="logos\Oregon.png" alt="Oregon Logo" 
            className='logo'/>
            <img src="logos\LSU.png" alt="LSU Logo" 
            className='logo'/>
        </div>
        </div> 
    </div>
  )
}

export default Universities