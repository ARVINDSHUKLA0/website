"use client";

export default function AwardSection({ textRef }) {
  const awards = [
    { platform: "Awwwards", description: "3x creative agency of the day", year: "2023" },
    { platform: "Envato", description: "1x agency of the year", year: "2010" },
    { platform: "CSS Winner", description: "5x honorable mentioned", year: "2012" },
    { platform: "CSS Winner", description: "5x honorable mentioned", year: "2012" },
    { platform: "CSS Winner", description: "5x honorable mentioned", year: "2012" },
    { platform: "CSS Winner", description: "5x honorable mentioned", year: "2012" },
    { platform: "CSS Winner", description: "5x honorable mentioned", year: "2012" },
    { platform: "CSS Winner", description: "5x honorable mentioned", year: "2012" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400&family=Barlow+Condensed:wght@700&display=swap');

        .awards-section {
          background: black;
          color: #fff;
          padding: 80px 40px 100px;
          font-family: 'Barlow', sans-serif;
          min-height: 100vh;
        }

        .awards-headline {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.01em;
          color: #fff;
          max-width: 680px;
          margin: 0 0 80px 0;
        }

        .awards-table {
          border-top: 1px solid #333;
        }

        .award-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 0;
          border-bottom: 1px solid #2a2a2a;
          gap: 16px;
          transition: background 0.2s;
        }

        .award-row:hover {
          background: rgba(255,255,255,0.03);
          padding-left: 8px;
          padding-right: 8px;
          border-radius: 4px;
        }

        .award-platform {
          font-size: 0.95rem;
          font-weight: 400;
          color: #fff;
          min-width: 140px;
        }

        .award-description {
          font-size: 0.95rem;
          font-weight: 300;
          color: #ccc;
          flex: 1;
        }

        .award-year {
          font-size: 0.95rem;
          font-weight: 400;
          color: #fff;
          text-align: right;
          min-width: 60px;
        }

        @media (max-width: 576px) {
          .awards-section {
            padding: 60px 20px 80px;
          }

          .award-platform {
            min-width: 100px;
            font-size: 0.85rem;
          }

          .award-description {
            font-size: 0.82rem;
          }

          .award-year {
            font-size: 0.85rem;
            min-width: 45px;
          }
        }
      `}</style>

      <section className="awards-section mt-5 rounded-3">
        <div className="container-fluid px-0">
          <div className="row g-0">

            {/* Headline - Left Half */}
            <div className="col-12 col-md-6">
              <h2  ref={textRef}  className="awards-headline">
                Making work that wins awards is not our destination. It is a starting point
              </h2>
            </div>

            {/* Awards Table - Right Half */}
        
          </div>
          <div className="row">
            <div className="col-lg-4"></div>
                <div className="col-lg-8 col-md-6">
              <div className="awards-table">
                {awards.map((award, i) => (
                  <div className="award-row" key={i}>
                    <span className="award-platform">{award.platform}</span>
                    <span className="award-description text-center">{award.description}</span>
                    <span className="award-year">{award.year}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}