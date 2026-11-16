import { useState } from 'react';

export default function Leadership() {
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
      {/* Image Div */}
      <div
        style={{
          flex: 1,
          height: '100%',
          position: 'relative'
        }}
      >
        <img
          src="/images/Leaders.jpeg"
          alt="Leadership Development"
          style={{
            width: '100%',
            height: '100%',
            paddingLeft: '30px',
            paddingBottom: '100px',
            paddingTop: '50px',
            objectFit: 'cover'
          }}
        />
      </div>

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
          Leadership Development
        </h1>

        <p
          style={{
            fontSize: '18px',
            color: '#4b5563',
            lineHeight: '1.7',
            marginBottom: '20px'
          }}
        >
          Our Leadership Program helps develop strong, responsible, and
          community-centered leaders who can inspire positive change and guide
          sustainable development initiatives.
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
                <strong>Leadership Program</strong>
              </h3>

             <strong> <p><em>We train community members to:</em></p></strong>

              <ul
                style={{
                  lineHeight: '2',
                  color: '#4b5563'
                }}
              >
                <li>- Become effective and responsible leaders.</li>
                <li>- Make informed and ethical decisions.</li>
                <li>- Manage community activities and initiatives.</li>
              </ul>
            </div>

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
               <strong> Peace & Conflict Resolution</strong>
              </h3>

              <p><strong><em>We empower community members to:</em></strong></p>

              <ul
                style={{
                  lineHeight: '2',
                  color: '#4b5563'
                }}
              >
                <li>- Solve problems peacefully.</li>
                <li>- Promote unity and social cohesion.</li>
                <li>- Prevent and manage conflicts within communities.</li>
              </ul>
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
    </div>
  );
}