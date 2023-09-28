import './_body-2.css'

const Body2 = () => {
  interface Content {
    title: string;
    city: string;
    school: string;
  }

  const contents: Content[] = [
    {
      title: 'Aaliyah Sanderson',
      city: 'Riyadh, Saudi Arabia',
      school: 'Bachelor - Cambridge University (2023 - 2023)'
    },
    {
      title: 'John Doe',
      city: 'Bostom, USA',
      school: 'Bachelor - MIT (2023 - 2023)'
    },
    {
      title: 'Thomas Matt',
      city: 'Edinburgh, UK',
      school: 'Bachelor - Harvard University (2023 - 2023)'
    },
    {
      title: 'Kamilia Smith',
      city: 'London, UK',
      school: 'Bachelor - Boston University (2023 - 2023)'
    },
    {
      title: 'Roy Jade',
      city: 'Cambridge, UK',
      school: 'Bachelor - Yale (2023 - 2023)'
    }
  ]

  return (
    <div className='body-2'>
      <div className='heading-1'>
        <div className='checkbox'>
          <input type='checkbox'/>
          <span className='text-2'>247 Candidates</span>
        </div>
        <div className='heading-2'>
          <span className='text-2'>Qualified</span>
          <span className='numbers'>
            Task
            <span className='no'>25</span>
          </span>
          <span className='numbers'>
            Disqualified
            <span className='no'>78</span>
          </span>
        </div>
      </div>

      {
        contents.map((content) => (
          <div className='details'>
            <div className='left'>
              <input type='checkbox'/>
              <img src='./images/sidebar/logo.png' alt='img'/>
            </div>
            <div className='right'>
              <p className='name'>{content.title}</p>
              <small>{content.city}</small>
              <p className='school'>{content.school}</p>
              <div className='candidate'>
                <span>#top_candidate</span>
                <span>#top_candidate</span>
              </div>
              <div className='city'>
                <span>New York</span>
                <span>Marketing</span>
                <span>London</span>
              </div>
            </div>
          </div>
        ))
      }

      <div className='details'>
        <div className='left'>
          <input type='checkbox'/>
          <img src='./images/sidebar/logo.png' alt='img'/>
        </div>
        <div className='right'>
          <div className='name video'>
            Ahmed Salman
            <div className='extra'>
              <span className='four'>
                <img src='./images/body/video.png' alt='img'/>
                4
              </span>
              <span className='five'>
                <img src='./images/body/notebook.png' alt='img'/>
                5 Programs
              </span>
            </div>
          </div>
          <small>New York, USA</small>
          <p className='school'>Bachelor - Cambridge University (2023 - 2023)</p>
           <div className='candidate'>
            <span>#top_candidate</span>
            <span>#top_candidate</span>
          </div>
          <div className='city'>
            <span>New York</span>
            <span>Marketing</span>
            <span>London</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body2