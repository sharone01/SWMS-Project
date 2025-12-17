import './home.css'
import { Link } from 'react-router'
import { Swiper, SwiperSlide} from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules";

import time from "../assets/calendartime.jpg"
import estimate from "../assets/loadestimate.jpg"
import bin from "../assets/bintrash.jpg"
import trashcar from "../assets/trashcar.jpg"
import man1 from "../assets/leading-waste.jpg"
import industries1 from "../assets/industries-1.jpg"
import industries2 from '../assets/industries-2.jpg'
import industries3 from '../assets/industries-3.jpg'
import restaurant from '../assets/restaurant.jpg'
import groceries from '../assets/grocceries.jpg'
import stethoscope from '../assets/stesthoscope.jpg'
import services1 from '../assets/services-1-1.webp'
import services2 from '../assets/services-1-2.jpg'
import services3 from '../assets/services-1-3.jpg'
import services4 from '../assets/services-1-2.jpg'
import project1 from '../assets/Home One files/project-1-1.jpg'
import project2 from '../assets/Home One files/project-1-2.jpg'
import project3 from '../assets/Home One files/project-1-3.jpg'
import project4 from '../assets/Home One files/project-1-4.jpg'
import slide1 from '../assets/slide1.jpg'
import slide from '../assets/slide.jpg'
import slide3 from '../assets/slide3.jpg'
import slide4 from '../assets/slide4.jpg'
import slide5 from '../assets/slide5.jpg'
import star from '../assets/star.jpg'
import testimonial1 from '../assets/Home One files/testimonial-1-1.jpg'
import testimonial2 from '../assets/Home One files/testimonial-1-2.jpg'
import testimonial3 from '../assets/Home One files/testimonial-1-3.jpg'
import X from '../assets/x.jpg'
import IG from '../assets/ig.jpg'
import FB from '../assets/fb.jpg'
import pinterest from '../assets/pinterest.jpg'



const Home = () => {

  const cardData = [
    {
      id: 1,
      image: industries1,
      title: 'Hoel and Restaurant',
      text: 'Sed quia magni dolores eos ratione voluptatem sequi site, qui nesciunt eque sit porro',
      img: restaurant,
      link: 'Read More'
    },

    {
      id: 2,
      image: industries2,
      title: 'Medical and Hospital',
      text: 'Sed quia magni dolores eos ratione voluptatem sequi site, qui nesciunt eque sit porro',
      img: stethoscope
      ,
      link: 'Read More'

    },
    {
      id: 3,
      image: industries3,
      title: ' Grocery Stores ',
      text: 'Sed quia magni dolores eos ratione voluptatem sequi site, qui nesciunt eque sit porro',
      img:groceries,
      link: 'Read More'
    },

  ];

  const cardsInfo = [
    {
      id: 1,
      content: '260+',
      title: 'Industries Served',
      text: 'Loren Ipsum is simply dummy text of new design'
    },
    {
      id: 2,
      content: "3600",
      title: "Waste picked up",
      text: 'Loren Ipsum is simply dummy text of new design'
    },
    {
      id: 3,
      content: '500+ ',
      title: 'Happy customers',
      text: 'Loren Ipsum is simply dummy text of new design'
    }

  ]

  const offerCard = [
    {
      id: 1,
      image: services1,
      title: "Zero waste",
      text: "Lorem ipsum dolor sit amet, adipelit do.",
      img: "trashbag"
    },
    {
      id: 2,
      image: services2,
      title: "Dumpster Rental",
      text: "Lorem ipsum dolor sit amet, adipelit do.",
      img: "Dumpster",
    },
    {
      id: 3,
      image: services3,
      title: "Portable Toilet",
      text: "Lorem ipsum dolor sit amet, adipelit do.",
      img: "Toilet",

    },
    {
      id: 4,
      image: services4,
      title: "Recycling Service",
      text: "Lorem ipsum dolor sit amet, adipelit do.",
      img: "Recycling Bin"
    }
  ]


  return (
    <>
      <section className='Hero '>


              <div id="carouselFade" class="carousel slide carousel-fade">

                
  <div className="carousel-inner">
 
    <div className="carousel-item active" data-bs-interval = "1000">
      <img src= {slide3} class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <div className='hero-content '>

          <h1
            style={{
              color: "white",
              fontFamily: "cursive,sans-serif",
              fontSize: "80px",
            }}>Your clutter is our <br />Bread
            <span style={{ color: '#F9D67B' }}> & </span>
            Butter</h1><br />

          <button >
            <Link to="/" style={{ color: "black" }}>Request a Pickup</Link>
            </button>

        </div>
        
      </div>
    </div>

    <div className="carousel-item " data-bs-interval = "1000">
      <img src= {slide3} class="d-block w-100" alt="..."/>

      <div className='hero-content '>

          <h1
            style={{
              color: "white",
              fontFamily: "cursive,sans-serif",
              fontSize: "80px",
            }}>Your clutter is our <br />Bread
            <span style={{ color: '#F9D67B' }}> & </span>
            Butter</h1><br />

          <button >
            <Link to="/" style={{ color: "black" }}>Request a Pickup</Link>
            </button>

        </div>
    </div>

    <div className="carousel-item" data-bs-interval = "1000">
      <img src= {slide4} className="d-block w-100" alt="..."/>

      <div className='hero-content '>

          <h1
            style={{
              color: "white",
              fontFamily: "cursive,sans-serif",
              fontSize: "80px",
            }}>Your clutter is our <br />Bread
            <span style={{ color: '#F9D67B' }}> & </span>
            Butter</h1><br />

          <button >
            <Link to="/" style={{ color: "black" }}>Request a Pickup</Link>
            </button>

        </div>
    </div>

    <div className="carousel-item">
      <img src= {slide5} class="d-block w-100" alt="..."/>
      <div className='hero-content '>

          <h1
            style={{
              color: "white",
              fontFamily: "cursive,sans-serif",
              fontSize: "80px",
            }}>Your clutter is our <br />Bread
            <span style={{ color: '#F9D67B' }}> & </span>
            Butter</h1><br />

          <button >
            <Link to="/" style={{ color: "black" }}>Request a Pickup</Link>
            </button>

        </div>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

  </div>

</div>
     
     
      </section>


      <section className='hero-sub container-fluid'
        style={{
          display: 'flex',
          justifyContent: "space-between",
          zIndex:"10",
          // gap:"100px",
          width: "1100px",
          color: "white",
          fontFamily: "cursive,sans-serif",
          fontSize: "80px",
          background: "#404a3d",
          position: "relative",
          top: "-50px",

        }} >

        <div className='sub-hero-sub'>
          <div className='circle'>
            <img src={time} className='icon' />
          </div>
          <h3>You choose <br /> a size</h3>
        </div>

        <div className='sub-hero-sub'>
          <div className='circle'>
            <img src={bin} className='icon' />
          </div>
          <h3>We pick <br />& clean up</h3>
        </div>

        <div className='sub-hero-sub'>
          <div className='circle'>
            <img src={trashcar} className='icon' />
          </div>
          <h3>We dispose <br /> Responsibly</h3>
        </div>

        <div className='sub-hero-sub'>
          <div className='circle'>
            <img src={estimate} className='icon' />
          </div>
          <h3>You estimate <br /> Load size</h3>
        </div>
      </section><br />

      <section className='about-us' style={{
        display: "flex",
        background: "whitesmoke",
        gap: "100px",
        justifyContent: "center",
        padding: "50px",
        // #ebe5dd

      }} >
        <img src={man1} />

        <div style={{
          textAlign: "left"
        }}>

          <p>Get to know about us</p>

          <h3 style={{
            fontFamily: "cursive,sans-serif",
            fontSize: "2.5rem"
          }}>
            Leading in Waste disposal <br />Management Services
          </h3><br />

          <p style={{
            color: "#878986",
            fontSize: "1.2rem"
          }}>We’re in this business

            <span style={{
              color: '#558e4c',
              fontFamily: "segoe, cursive",
              textDecoration: "underline"
            }} > Since 1987
            </span>

            and we<br /> provide the best services</p><br />

          <ul style={{
            color: "#404a3d",
            textDecoration: "none",
            fontSize: "1.3rem"
          }}>

            <li style={{ textDecoration: "none", }}>Lorem Ipsum is not simply random text</li><br />

            <li>Various versions have evolved over the years</li><br />

            <li>Making this the first true generator on the Internet</li>

          </ul><br />

          <button style={{
            background: "#F9D67b",
            padding: "20px",
            width: "200px",
            borderRadius: "0",

          }}>
            <Link to="/" style={{ color: "black" }}>Discover More</Link></button>

        </div>
      </section><br />

      <section style={{
        background: " #f5f0e9",

      }}>
        <p style={{ textAlign: "centre", }}>We Cover Industries</p>
        <h1 style={{
          fontFamily: "cursive,sans-serif",
          fontSize: "2.5rem",
        }}>Industries We Served</h1>

        <div style={{
          background: "",
          display: "flex",
          gap: "1rem",
        }}>

          {cardData.map((card) => (
            <div key={card.id}
              style={{
                background: "",

              }}>

              <img src={card.image} />
              <div style={{
                textAlign: "center",
              }}>
                <div className='circle-2'>
                  <img src={card.img} style={{
                    width: "3.6rem",
                    color: "#558e4c",

                  }} />
                </div>

                <h3 style={{
                  color: "#404a3d",
                }} >{card.title}</h3>
                <p style={{
                  color: "#878986",
                }}>{card.text}</p>

                <Link >More</Link>
              </div>

            </div>
          ))
          }
        </div>

      </section><br /><br/><br/>

      <section className='skills'>
        <div>
          <h4> Our Skills & Expertise </h4>
          <h1 style={{
            fontFamily: "cursive,sans-serif",
            fontSize: "2.5rem",
          }}>We are Dedicated to Serve<br /> you all Our Time</h1><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br />
            do eiusmod tempor incididunt ut labore et dolore magna <br />
            aliqua enim ad minim veniam.</p><br/>

            <div>
              <label>Waste Management</label><br/>
              <input type='range' id='range' min="0" max="500" value="450" style={{ width:"450px"}}/><br/>

              <label>Reporting</label><br/>
              <input type='range' id='range' min = "0" max = '100' value ="80" style={{ width:"450px"}}/>
            </div>
        </div>
        <div className='skills-left'>
          <img src= {slide} className='img1'/>
          <img src = {slide1} className='img2'/>
        </div>
      </section><br /><br/><br/>

      <section>

        <div style={{
          background: "#558e4c",
          display: "flex",
          gap: "1.5rem",
          padding: "3.5rem",
          alignItems: "center",

        }}>
          {cardsInfo.map((cards) => (

            <div key={cards.id}
              style={{
                background: " #404a3d" , //#198754
                textAlign: "left",
                padding: "2rem",
              }}>
              <h2>{cards.content}</h2>
              <h4 style={{
                color: "#ecdd5e"
              }}>{cards.title}</h4>
              <p>{cards.text}</p>

            </div>
          ))}
        </div>

      </section><br /><br />

      <section className='offers'
        style={{
          background: "beige"

        }}>
        #878986

        <div style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "2rem",
          padding: "3rem",
          gap: "7rem",
          
        }}>

          <div style={{
            textAlign: "left",
          }}>
            <h4>What We’re Offering</h4>
            <h1>The Services We’re Providing <br /> to Our Customers</h1>
          </div>

          <div style={{
            textAlign: "left",
          }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed <br />
            do eiusmod tempor incididunt ut labore et dolore magna <br />
            aliqua. quis nostrud exercitation ullamco laboris.
          </div>

        </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem"

        }}>

          {offerCard.map((offer) => (

            <div key={offer.id}>

              <img src={offer.image} />

              <div>
                <img src={offer.img} />
              </div>

              <div>
                <h3>{offer.title}</h3>
                <p>{offer.text}</p>
              </div>
            </div>

          ))}


        </div>


      </section> <br /><br /><br/>



      <section className='projects'>

        {/* top div */}

        <div className="project-top container-fluid" >
          <h2>Have Waste/Pickup?</h2>
          <div>
            <img />
          </div>

          <div>
            <p>Lorem ipsum dolor sit am cons sid</p>
            <strong>+1 (234)-(567)-(890)</strong>
          </div>

        </div>

        <div className='main-projects' style={{marginTop:"5rem", }}>
          <h4>Recent Closed Projects</h4>
          <h1>Recently We Successfully Completed <br /> Some Waste Projects</h1>
        </div>

        <div className='projects-completed'> 

          <div className='projects-proof'>
            <img src={project1} />
            <div className='project-box'>
              <h6> Waste Pickup</h6>
              <Link>Grocery Waste Removal</Link>
            </div>
          </div>

          <div className='projects-proof'>
            <img src={project2} />
            <div className='project-box'>
              <h6> Waste Pickup</h6>
              <Link>Home Trash</Link>
            </div>
          </div>

          <div className='projects-proof'>
            <img src={project3} />
            <div className='project-box'>
              <h6> Waste Pickup</h6>
              <Link>Construction Collection</Link>
            </div>
          </div>

          <div className='projects-proof'>
            <img src={project4} />
            <div className='project-box'>
              <h6> Waste Pickup</h6>
              <Link>Business Waste Pickup</Link>
            </div>
          </div>

        </div>

      </section><br/><br/>


      <section className='feedbacks cols-12'>

        <div className='left cols-6'>
          <h4>Our Customers Feedbacks</h4>
          <h2>What Our Customers <br/>Are Talking ABout <br/> Our Services</h2>

          <div>
            <p>Proin a lacus arcu. Nullam id dui eu orci <br/>
             maximus. Cras at auctor lectus, pretium tellus.</p>

             <img/>
          </div><br/>

          <button>
            <Link>View All Feedbacks</Link>
          </button>


        </div>

        
   <div className='feedback-slide '>       
    <div className='top'>
       <div className='stars-rating'>
        <img src= {star} className='stars' />
        <img src= {star} className='stars'/>
        <img src= {star} className='stars'/>
        <img src= {star} className='stars'/>
        <img src= {star} className='stars'/>
      </div>
       <p>GREAT JOB AND FAIR PRICING</p>
       
    </div>
    <div>
      <p> Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at <br/>
        auctor lectus, pretium tellus quis nostrud exercitation ullamco laboris </p>

        <div  className='d-flex'>
          <div className='circle-testimonial '>
            <img src= {testimonial1} class="rounded-5 " alt="..."/>
          </div>
          <div>
            <strong>Jessica Brown</strong>
            <p>Customer</p>
          </div>
        </div>

    </div>
     

        </div>

      </section>


      <footer>
        <div className= "footer-top">
          <div>
            <h2>SWMS</h2>
          <p>Waste Disposal Management & Pickup Services</p>
          </div>
          <Link>
          <img src= {X}/>
          </Link>
          <Link>
          <img src= {IG}/>
          </Link>
          <Link>
          <img src= {FB}/>
          </Link>
           <Link>
          <img src= {pinterest}/>
          </Link>
        </div>

        <div className='footer-bottom'>

          <div className='bottom-first'>
            <h4>About</h4><br/>

            <p>Lorem ipsum dolor sited ame etur adi <br/>
             pisicing elit tempor labore.</p>

            <input type='email' placeholder='Email Address' className='cols-200 p-3 rounded-3'/> 

          </div>
          <div className='bottom-center'>
            <h4>Services</h4><br/>
            <ul>
              <li><Link>Dumpster Rentals</Link></li>
        
              <li><Link>Bulk Trash pickup</Link></li>
              <li><Link>Waste Removal</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contacts</h4>
            <p> Malingo Molyko, Buea Cameroon</p>

            
          </div>
        </div>
      </footer>

    </>
  )
}

export default Home 