import '../styles/Home.css'
import Iphones from '../../assets/homepage_img.png'

const Home = () => {
  return (
    <div id='homepage'>
      <div className='homepage_text'>
        <h1>Üdvözlünk a Sufni GSM Oldalán!</h1>
        <p>
          Itt biztos megtalálod a neked való készüléket, széles termékkinálatunk
          csak rád vár!
        </p>
        <p>
          Használt mobilokkal is kereskedünk,ezenkivül szervizes
          kollegáink,állnak rendelkezésedre!
        </p>
      </div>
      <div className='homepage_img'>
        <img src={Iphones} alt='iphones' className='img' />
      </div>
    </div>
  )
}

export default Home
