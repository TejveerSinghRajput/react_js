import React from 'react';
import { Bookmark } from 'lucide-react';

const Card = () => {
  return (
    <div className='card'>
      <div className='top'>
        <img src="data:image/webp;base64,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" alt="" />
        <button>Save <Bookmark size={15} /></button>
      </div>
      <div className='center'>
        <h3>Amazon <span>5 days ago</span></h3>
        <h2>Senior UI/UX Designer</h2>
        <div className='tag'>
          <h4>Part Time</h4>
          <h4>Senior Level</h4>
        </div>
      </div>
      <div className='bottom'>
        <div>
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
        </div>
        <div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
