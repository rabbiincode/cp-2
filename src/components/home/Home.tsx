import Body1 from '../body/Body1'
import Body2 from '../body/Body2'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import './_home.css'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='body'>
        <Header/>
        <div className='home-page'>
          <Body1/>
          <Body2/>
        </div>
      </div>
    </div>
  )
}

export default Home