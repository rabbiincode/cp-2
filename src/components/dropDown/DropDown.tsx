import { useState } from 'react';
import './_dropdown.css'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMouseEnter = () => setIsOpen(true)
  const handleMouseLeave = () => setIsOpen(false)

  return (
    <div
      className="dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="dropdown-button">
        <span>Opportunity Browsing</span>
        <img src='./images/header/arrow1.png' alt='img'/>
      </div>
      {
        isOpen && (
        <div className="dropdown-content">
          {/* Your dropdown menu items */}
          <div className='hover-list'>
            <span>Applied</span>
            <span className='count'>1745</span>
          </div>
          <div className='hover-list'>
            <span>Shortlisted</span>
            <span className='count'>453</span>
          </div>
          <div className='hover-list'>
            <span>Technical Interview</span>
            <span className='count'>123</span>
          </div>
          <div className='hover-list'>
            <span>Opportunity Browsing</span>
            <span className='count'>243</span>
          </div>
          <div className='hover-list'>
            <span>Video Interview I</span>
            <span className='count'>25</span>
          </div>
          <div className='hover-list'>
            <span>Video Interview II</span>
            <span className='count'>25</span>
          </div>
          <div className='hover-list'>
            <span>Video Interview III</span>
            <span className='count'>25</span>
          </div>
          <div className='hover-list'>
            <span>Offer</span>
            <span className='count'>25</span>
          </div>
          <div className='hover-list'>
            <span>Withdrawn</span>
            <span className='count'>25</span>
          </div>
        </div>
      )}
    </div>
  )
};

export default Dropdown;