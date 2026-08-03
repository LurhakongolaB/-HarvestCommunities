import { useState } from 'react';

export default function Education() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        height: 'calc(100vh - 76px)',
        overflow: 'hidden',
        background: '#ffffff'
      }}
    >
      {/* Text Div */}
      <div
        style={{
          flex: 1,
          padding: '0 60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <span
          style={{
            color: '#16a34a',
            fontWeight: '700',
            fontSize: '14px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '15px'
          }}
        >
          What We Do
        </span>

        <h1
          style={{
            fontSize: '42px',
            fontWeight: '800',
            color: '#111827',
            marginBottom: '20px',
            lineHeight: '1.1',
            marginTop: 0
          }}
        >
          Education Programs
        </h1>

        <p
          style={{
            fontSize: '18px',
            color: '#4b5563',
            lineHeight: '1.7',
            marginBottom: '20px'
          }}
        >
          At Sustainable Harvest Communities (SUHACO), we believe education
          creates opportunities and transforms lives. We support children,
          youth and adults with learning opportunities that build knowledge,
          confidence and life skills.
        </p>

        {!showMore ? (
          <button
            onClick={() => setShowMore(true)}
            style={{
              width: '180px',
              padding: '12px 20px',
              background: '#16a34a',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '15px'
            }}
          >
            Read More ↓
          </button>
        ) : (
          <>
            {/* Social Emotional Learning */}

            <div
              style={{
                background: '#f9fafb',
                borderLeft: '5px solid #16a34a',
                padding: '20px',
                borderRadius: '10px',
                marginBottom: '20px'
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  color: '#111827'
                }}
              >
                Social and Emotional Learning (SEL)
              </h3>

              <p>We help learners to:</p>

              <ul
                style={{
                  lineHeight: '2',
                  color: '#4b5563'
                }}
              >
                <li>Build confidence</li>
                <li>Understand and manage emotions</li>
                <li>Develop positive relationships</li>
                <li>Improve communication</li>
                <li>Solve problems peacefully</li>
              </ul>
            </div>

            {/* Children's Education */}

            <div
              style={{
                background: '#f9fafb',
                borderLeft: '5px solid #16a34a',
                padding: '20px',
                borderRadius: '10px',
                marginBottom: '20px'
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  color: '#111827'
                }}
              >
                Children's Education Support
              </h3>

              <p>
                We help vulnerable children stay in school by providing school
                supplies and learning materials. Many children cannot attend
                school because they do not have basic items. Our support gives
                them the opportunity to learn, grow and build a better future.
              </p>

              <h4>Who We Support</h4>

              <ul
                style={{
                  lineHeight: '2',
                  color: '#4b5563'
                }}
              >
                <li>Vulnerable children</li>
                <li>Orphans</li>
              </ul>
            </div>

            {/* Second Chance Education */}

            <div
              style={{
                background: '#f9fafb',
                borderLeft: '5px solid #16a34a',
                padding: '20px',
                borderRadius: '10px'
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  color: '#111827'
                }}
              >
                Second Chance Education
              </h3>

              <p>
                Our Second Chance Education Program gives youth and adults who
                missed the opportunity to attend or complete school a new
                chance to learn and build a better future.
              </p>

              <p>
                Through literacy, numeracy and practical English skills,
                participants gain the confidence and knowledge they need to
                communicate effectively, access employment and training
                opportunities, support their families and participate actively
                in their communities.
              </p>
            </div>

            <button
              onClick={() => setShowMore(false)}
              style={{
                width: '180px',
                marginTop: '20px',
                padding: '12px 20px',
                background: '#374151',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '15px'
              }}
            >
              Show Less ↑
            </button>
          </>
        )}
      </div>

      {/* Image Div */}

      <div
        style={{
          flex: 1,
          height: '100%',
          position: 'relative'
        }}
      >
        <img
          src="/images/childFriendly.jpeg"
          alt="Education Programs"
          style={{
            width: '100%',
            height: '100%',
            paddingLeft: '20px',
            paddingBottom: '100px',
            paddingTop: '50px',
            paddingRight: '30px',
            objectFit: 'cover'
          }}
        />
      </div>
    </div>
  );
}