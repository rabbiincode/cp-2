import Dropdown from "../dropDown/DropDown";
import './_header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='intern'>
        <span className='london'>London Internship Program</span>
        <span>London</span>
      </div>
      <div className='dropdown'>
        <div className="size"><Dropdown/></div>
      </div>

      <div className='move'>
        <div className='images'>
          <img src='./images/header/icon1.png' alt='img'/>
          <img src='./images/header/person1.png' alt='img'/>
          <img src='./images/header/person2.png' alt='img'/>
          <img src='./images/header/person3.png' alt='img'/>
          <img src='./images/header/mail.png' alt='img'/>
        </div>
        <div className='buttons'>
          <button className='btn-1'>Move To Video Interview 1</button>
          <button className='btn-2'><img src='./images/header/arrow.png' alt='img'/></button>
        </div>
      </div>
    </div>
  )
}

export default Header