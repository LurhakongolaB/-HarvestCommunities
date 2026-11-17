export default function AboutPage() {
  return (
    <div style={{ padding: '40px 5%', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Top Section: Split Layout */}
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginBottom: '50px', alignItems: 'center' }}>
        
        {/* LEFT DIV: Introduction Statement */}
        <div style={{ flex: '1 1 500px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#111827', marginBottom: '15px', lineHeight: '1.2', marginTop: 0 }}>
            About SUHACO
          </h1>
          <p style={{ fontSize: '20px', color: '#4b5563', lineHeight: '1.6', marginBottom: '30px' }}>
           About Sustainable Harvest Communities (SUHACO)

Sustainable Harvest Communities (SUHACO) is a registered Community-Based Organization (CBO) operating in Kakuma Refugee Camp and Kalobeyei Settlement, Turkana County, Kenya. We are dedicated to empowering refugees and vulnerable host communities through education, women's and girls' empowerment, , and livelihood development.


          </p>
          <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
            We believe that lasting change begins when individuals and communities have access to the knowledge, skills, resources, and opportunities they need to shape their own futures. Our approach focuses on practical, community-driven solutions that promote self-reliance, strengthen resilience, and create pathways towards sustainable livelihoods and economic inclusion.
          </p>
        </div>

        {/* RIGHT DIV: Mission & Vision (Stacked) */}
        <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          {/* Vision Div */}
          <div style={{ background: '#f0fdf4', padding: '20px', borderRadius: '12px', borderLeft: '5px solid #16a34a', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#166534', marginBottom: '8px', marginTop: 0 }}>Our Vision</h2>
            <div style={{ fontStyle: 'italic', fontSize: '15px', color: '#374151', lineHeight: '2' }}>
              "We envision a resilient, self-reliant, and integrated society that promotes dignity and mutual community growth."
            </div>
          </div>

          {/* Mission Div */}
          <div style={{ background: '#f0fdf4', padding: '20px', borderRadius: '12px', borderLeft: '5px solid #16a34a', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#166534', marginBottom: '8px', marginTop: 0 }}>Our Mission</h2>
            <div style={{ fontStyle: 'italic', fontSize: '15px', color: '#374151', lineHeight: '2' }}>
              "To empower vulnerable communities through sustainable livelihood, education and social support programs."
            </div>
          </div>

        </div>
      </div>

      {/* Our Values Section (2x2 Grid) */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '30px', textAlign: 'center', marginTop: 250 }}>Our Core Values</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
          {[
            { icon: '', title: 'Self-reliance', desc: 'Encouraging community members to actively participate in activities that improve their livelihoods and independence.' },
            { icon: '🌱', title: 'Sustainability', desc: 'Promoting practices that ensure long-term growth and benefits, such as poultry reproduction, crop cultivation, and responsible savings.' },
            { icon: '🎓', title: 'Empowerment', desc: 'Providing training, skills and education to enable individuals to improve their economic and educational status.' },
            { icon: '', title: 'Community Solidarity', desc: 'Fostering cooperation and mutual support through collective initiatives like VSLA and shared agricultural activities.' }
          ].map((value, i) => (
            <div key={i} style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #f3f4f6', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '32px', lineHeight: '1' }}>{value.icon}</div>
              <div>
                <h3 style={{ fontSize: '18px', color: '#111827', marginBottom: '5px', marginTop: 0 }}>{value.title}</h3>
                <p style={{ color: '#4b5563', lineHeight: '1.5', margin: 0, fontSize: '14px' }}>{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What We Do (Detailed) */}
      <div style={{ background: '#f9fafb', padding: '40px', borderRadius: '16px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '20px', marginTop: 0 }}>Our Approach</h2>
        <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.7', marginBottom: '15px' }}>
          Our programs focus on sustainable agriculture, social entrepreneurship, Village Savings and Loan Associations (VSLA), women's economic empowerment, Adult Basic Education, literacy and numeracy, leadership development, and community-driven livelihood initiatives.
        </p>
        <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.7', margin: 0 }}>
          Through these interventions, we help individuals and families improve food security, increase household income, develop marketable skills, and create sustainable economic opportunities. Working closely with local leaders, we ensure that vulnerable groups—including women, youth, persons with disabilities, and displaced families—have equal opportunities to thrive.
        </p>
      </div>

    </div>
  );
}
