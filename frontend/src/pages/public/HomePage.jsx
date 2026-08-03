import { useNavigate } from 'react-router-dom'
import '../../styles/home.css'

export default function HomePage() {

  const navigate = useNavigate()

  const programs = [
    {
      icon: "🌱",
      title: "Sustainable Agriculture",
      description:
        "Promoting climate-smart farming, poultry production and food security."
    },
    {
      icon: "👩🏽‍🌾",
      title: "Women Empowerment",
      description:
        "Supporting women through entrepreneurship, VSLA groups and skills development."
    },
    {
      icon: "📚",
      title: "Education",
      description:
        "Providing literacy, digital skills and educational opportunities."
    },
    {
      icon: "🤝",
      title: "Leadership",
      description:
        "Developing community leaders capable of creating lasting impact."
    }
  ]

  return (

    <main className="home">

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <span className="hero-tag">
            Sustainable Harvest Communities
          </span>

          <h1>
            Building
            <span> Sustainable Communities </span>
            Through Opportunity
          </h1>

          <p>

            SUHACO empowers refugees and vulnerable host communities through
            sustainable agriculture, education, women's empowerment,
            entrepreneurship and community leadership.

          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate('/get-involved/donate')}
            >
              Donate Now
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate('/about')}
            >
              Learn More
            </button>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="/images/poultry.jpeg"
            alt="SUHACO"
          />

        </div>

      </section>


      {/* STATISTICS */}

      <section className="stats">

        <div>

          <h2>1000+</h2>

          <p>Community Members Reached</p>

        </div>

        <div>

          <h2>50+</h2>

          <p>Women Groups Supported</p>

        </div>

        <div>

          <h2>20+</h2>

          <p>Community Projects</p>

        </div>

        <div>

          <h2>7+</h2>

          <p>Years of Community Service</p>

        </div>

      </section>


      {/* ABOUT */}

      <section className="about-home">

        <h2>Who We Are</h2>

        <p>

          Sustainable Harvest Communities (SUHACO) is a community-based
          organization dedicated to promoting resilience, economic inclusion
          and sustainable livelihoods among refugees and host communities
          in Kakuma Refugee Camp and Turkana County.

        </p>

      </section>


      {/* PROGRAMMES */}

      <section className="programs">

        <h2>Our Programmes</h2>

        <div className="program-grid">

          {programs.map((program,index)=>(

            <div
              key={index}
              className="program-card"
            >

              <div className="icon">

                {program.icon}

              </div>

              <h3>{program.title}</h3>

              <p>{program.description}</p>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}

      <section className="cta">

        <h2>
          Together We Can Transform Lives
        </h2>

        <p>

          Join us by volunteering, partnering or donating to create lasting
          change.

        </p>

        <button
          className="primary-btn"
          onClick={()=>navigate('/get-involved/donate')}
        >
          Support Our Mission
        </button>

      </section>

    </main>

  )

}