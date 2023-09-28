import './_body-1.css'

const Body1 = () => {

  interface Content {
    title: string;
  }

  const contents: Content[] = [
    {
      title: 'Personal Information'
    },
    {
      title: 'Education'
    },
    {
      title: 'Work Experience'
    },
    {
      title: 'Activity Filter'
    }
  ]

  return (
    <div className='body-1'>
      <form>
        <img src='./images/body/search.png' alt='img'/>
        <input type='text' placeholder='Search by name, edu, exp or #tag'/>
        <img src='./images/body/warning.svg' alt='img'/>
      </form>
      
      <div className='box-4'>
        <div className='filter'>
          <span className='text'>Filters</span>
          <span className='text-1'>0 Selected</span>
        </div>

        {
          contents.map((content) => (
          <div className='box-2'>
            <div className='content'>
              <div className='info'>
                <img src='./images/sidebar/list.png' alt='img'/>
                <span>{content.title}</span>
              </div>
              <img src='./images/body/arrow-down.png' alt='img'/>
            </div>
          </div>
        ))
      }
      <div className='box-2'>
        <div className='content'>
              <div className='info'>
                <img src='./images/sidebar/list.png' alt='img'/>
                <span>Advanced Filter</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Body1