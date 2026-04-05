import './about.css'
import project1 from '../assets/Home One files/project-1-1.jpg'
import { Link } from 'react-router'
const About = () => {
    return (
        <div>

            <section className='hero'>

                <div className='overlay'>

                    <div className='text'>
                        <img />  {/*  swmc logo */}

                        <h3>Your Full-Service <br /> partner.For Zero waste,
                            <br /> Dumpster rentals, Bulk  <br />pickup
                            and recycling service, <br />
                        </h3> <br /><br />

                        <p>
                            SWMS delivers expert solutions,  excellent options <br />
                            provide the best full site work services across the country.<br />
                            We own all of our equipments-from dumpsters to bins, we <br />
                            keep every project under our control, on schedule, and done <br />
                            right the first time. Our skilled team handles everything. With <br />
                            enthuasiasm we bring care, efficiency, and intergrity to every project<br />
                        </p><br />

                        <button>
                            <Link>Get Started</Link>
                        </button>
                    </div>


                </div>

                <img src={project1} style={{
                    width: '100vw',
                    height: '40rem',
                    objectFit: 'cover',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }} />


            </section><br /><br />


            <section className='hero2' >
                <h2>Yes, we own our own equipments</h2>

                <p>

                    In today’s industry, most companies don’t own the machines they rely on.
                    In fact, studies show that  over 90% of contractors rent their equipment,<br />
                    choosing to avoid the high upfront investment and ongoing maintenance.
                    While that approach is common, it often leads to delays, higher costs, and <br />
                    less control on the job site. We’ve taken a different path.  By owning our entire fleet,
                    we keep every project fully under our control. That <br />
                    means tighter schedules, dependable results, and work done
                    right the first time, without waiting on a third party. <br />

                </p>
            </section>

        </div>
    )
}
export default About