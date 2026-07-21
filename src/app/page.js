'use client';

import { colors } from '../styles/colors.js';

import React, { useState, useEffect } from 'react';

// Squirrel images live in /public. Each has a `weight`; a squirrel's chance
// of being picked is its weight divided by the total of all weights.
// The rare photo (squr.jpg) is weighted so it shows up ~1 in 50 loads.
const SQUIRRELS = [
  { src: '/squir_cz_nobk.png', weight: 49 },  // hatted/scarfed squirrel
  { src: '/squir_nobk.png',    weight: 49 },  // plain squirrel
  { src: '/squr.jpg',          weight: 2 }    // rare real photo (~1/50)
];

function pickSquirrel() {
  const total = SQUIRRELS.reduce((sum, s) => sum + s.weight, 0);
  let roll = Math.random() * total;
  for (const s of SQUIRRELS) {
    roll -= s.weight;
    if (roll < 0) return s.src;
  }
  return SQUIRRELS[0].src;
}

// Teaching-style cards. Edit freely — cards alternate periwinkle / yellow by position.
const POLICIES = [
  { title: 'Interactive Lecture', body: 'Three times a week there will be an interactive lecture, offered both in person and recorded. Attendance is not required, but it earns you extra credit!' },
  { title: 'Second Chance Exams', body: 'Sometimes we just need a second chance. There are three exams, and each one has a second chance retake, so one bad day does not ruin your grade.' },
  { title: 'Professor Office Hours', body: 'After each class (three times a week), I personally hold office hours to connect and clear up any misunderstandings.' },
  { title: 'Additional Material', body: 'For each exam, I provide plenty of practice problems to help you feel fully prepared.' },
  { title: 'AI Conscious Material', body: 'My PhD is in AI, so I understand both its strengths and its limits. I have designed the coursework to give you the tools you need to succeed in an AI world.' },
  { title: 'Three Large Projects', body: 'Each multi-week project helps you solidify concepts and build something you can be proud of. Weekly checkpoints keep the workload manageable.' }
];

export default function CoursePortal() {
  const constants = {
    courseNumber: 'CS 128',
    section: 'Spring 2027 - Legende Section',
    courseTitle: 'Introduction to Computer Science II',
    professor: 'Professor Jule Legende (Schatz)',
    institution: 'University of Illinois Urbana-Champaign'
  };

  // Squirrel: pick image + a random horizontal position along the top.
  // Chosen on the client after mount to avoid a hydration mismatch.
  const [squirrel, setSquirrel] = useState(null);

  useEffect(() => {
    const src = pickSquirrel();
    const left = 6 + Math.random() * 82;   // 6%–88% from the left
    setSquirrel({ src, left });
  }, []);

  const styles = {
    container: {
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: colors.white,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      overflow: 'hidden'
    },
    // Floats above the content along the top; does not affect layout.
    squirrelImg: (isPhoto, leftPct) => ({
      position: 'absolute',
      top: '8px',
      left: `${leftPct}%`,
      height: '96px',
      width: isPhoto ? '96px' : 'auto',
      objectFit: isPhoto ? 'cover' : 'contain',
      borderRadius: isPhoto ? '12px' : '0',
      pointerEvents: 'none',
      zIndex: 1
    }),
    content: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '860px',
      margin: '0 auto',
      padding: '56px 32px 64px 32px'
    },
    hero: {
      textAlign: 'center',
      marginBottom: '36px'
    },
    title: {
      fontSize: '52px',
      fontWeight: 'bold',
      color: colors.black,
      lineHeight: '1',
      margin: 0
    },
    sectionLabel: {
      display: 'inline-block',
      backgroundColor: colors.navBlue,
      color: '#3c3489',
      fontWeight: '600',
      fontSize: '13px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '4px 14px',
      borderRadius: '999px',
      marginTop: '12px'
    },
    subtitle: {
      fontSize: '18px',
      color: colors.darkGray,
      marginTop: '16px',
      marginBottom: '0'
    },
    professor: {
      fontSize: '16px',
      color: colors.mediumGray,
      marginTop: '6px',
      marginBottom: '0'
    },
    introBand: {
      backgroundColor: '#f0f2fd',
      borderRadius: '16px',
      padding: '28px 32px',
      marginBottom: '48px'
    },
    introText: {
      fontSize: '16px',
      color: colors.darkGray,
      lineHeight: '1.7',
      textAlign: 'center',
      maxWidth: '640px',
      margin: '0 auto'
    },
    sectionHeading: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: colors.black,
      textAlign: 'center',
      marginBottom: '6px'
    },
    sectionSub: {
      fontSize: '15px',
      color: colors.mediumGray,
      textAlign: 'center',
      marginBottom: '24px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
      gap: '16px',
      marginBottom: '48px'
    },
    card: (tone) => ({
      backgroundColor: tone === 0 ? '#d7dbf7' : '#fdf3d4',
      borderRadius: '14px',
      padding: '22px'
    }),
    cardTitle: (tone) => ({
      fontSize: '17px',
      fontWeight: '600',
      color: tone === 0 ? '#2f2870' : '#6e4f08',
      marginBottom: '6px'
    }),
    cardBody: (tone) => ({
      fontSize: '14px',
      color: tone === 0 ? '#3d3c54' : '#4f4020',
      lineHeight: '1.6'
    }),
    involvedBand: {
      backgroundColor: '#f0f2fd',
      borderRadius: '16px',
      padding: '28px 32px'
    },
    involvedItem: {
      fontSize: '15px',
      color: colors.darkGray,
      lineHeight: '1.7',
      marginBottom: '14px'
    },
    involvedItemLast: {
      fontSize: '15px',
      color: colors.darkGray,
      lineHeight: '1.7',
      marginBottom: '0'
    },
    link: {
      color: '#3c3489',
      fontWeight: '600',
      textDecoration: 'underline'
    }
  };

  return (
    <div style={styles.container}>
      <style jsx>{`
        @media (max-width: 640px) {
          .squirrel-img {
            height: 72px !important;
          }
        }
        a:focus-visible,
        button:focus-visible {
          outline: 3px solid ${colors.focusBlue};
          outline-offset: 2px;
        }
        a:focus:not(:focus-visible),
        button:focus:not(:focus-visible) {
          outline: none;
        }
      `}</style>

      {squirrel && (
        <img
          src={squirrel.src}
          alt="CS 128 squirrel mascot"
          style={styles.squirrelImg(squirrel.src.endsWith('.jpg'), squirrel.left)}
          className="squirrel-img"
        />
      )}

      <div style={styles.content}>
        <header style={styles.hero}>
          <h1 style={styles.title}>{constants.courseNumber}</h1>
          <div style={styles.sectionLabel}>{constants.section}</div>
          <p style={styles.subtitle}>{constants.courseTitle}</p>
          <p style={styles.professor}>
            Taught by {constants.professor} &middot; {constants.institution}
          </p>
        </header>

        <section style={styles.introBand} aria-label="Welcome">
          <p style={styles.introText}>
            Prof. Legende (previously known as Prof. Schatz) will again teach a
            section of CS 128! This course teaches you the fundamentals you need to
            succeed in CS 225 and beyond. We cover the same material as other
            sections of CS 128, but with a different teaching style.
          </p>
        </section>

        <section aria-labelledby="style-heading">
          <h2 id="style-heading" style={styles.sectionHeading}>What to expect</h2>
          <p style={styles.sectionSub}>
            A few of the course policies designed to support you.
          </p>
          <div style={styles.grid}>
            {POLICIES.map((p, i) => (
              <div key={p.title} style={styles.card(i % 2)}>
                <div style={styles.cardTitle(i % 2)}>{p.title}</div>
                <div style={styles.cardBody(i % 2)}>{p.body}</div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="involved-heading">
          <h2 id="involved-heading" style={styles.sectionHeading}>Get involved</h2>
          <p style={styles.sectionSub}>
            Enrolling, joining the course staff, and learning more
          </p>
          <div style={styles.involvedBand}>
            <p style={styles.involvedItem}>
              <strong>Enrolling:</strong> For Spring 2027, select the Legende or Schatz section of CS 128 when you register. This section is completely seperate from the Nowak section.
            </p>
            <p style={styles.involvedItem}>
              <strong>Course Assistants (CAs):</strong> If you would like to be an
              undergraduate course assistant, email me at{' '}
              <a href="mailto:drschatz@illinois.edu" style={styles.link}>drschatz@illinois.edu</a>.
              I am not accepting applications for graduate teaching assistants at
              this time.
            </p>
            <p style={styles.involvedItemLast}>
              <strong>Learn more:</strong> To read more about me and my teaching
              style, visit{' '}
              <a href="https://juleschatz.com" target="_blank" rel="noopener noreferrer" style={styles.link}>juleschatz.com</a>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
