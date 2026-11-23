import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Video,
  Heart,
  Award,
  Users,
  CheckCircle,
  Clock,
  Calendar,
  Smile,
  BookOpen,
  Compass,
  Star,
  ChevronRight,
  PhoneCall
} from 'lucide-react';
import {
  SchoolLogoSvg,
  StudentIllustration,
  GraduationIllustration,
  AbcBlocksIllustration,
  EmailIllustration,
  KidAvatar
} from '../assets/illustrations';
import { useSchool } from '../context/SchoolContext';

export default function Home() {
  const { programs, setAddStudentModalOpen } = useSchool();
  const [calculatorAge, setCalculatorAge] = useState(3.0);

  // Quick eligibility calculator helper
  const getRecommendedProgram = (age) => {
    const num = parseFloat(age);
    if (num < 1.5) return { name: 'Infant Daycare & Creche', path: '/programs' };
    if (num < 2.5) return { name: 'Playgroup (1.5 - 2.5 Yrs)', path: '/programs' };
    if (num < 3.5) return { name: 'Nursery (2.5 - 3.5 Yrs)', path: '/programs' };
    if (num < 4.5) return { name: 'Junior KG / LKG (3.5 - 4.5 Yrs)', path: '/programs' };
    if (num <= 6.0) return { name: 'Senior KG / UKG (4.5 - 6 Yrs)', path: '/programs' };
    return { name: 'After School & Activity Club', path: '/programs' };
  };

  const recommended = getRecommendedProgram(calculatorAge);

  const testimonials = [
    {
      parent: 'Priya & Rajesh Sharma',
      child: 'Aarav (Nursery)',
      quote: 'Little Champs has been a second home for Aarav. From a shy toddler who wouldn’t leave my hand, he has blossomed into a chatterbox who sings phonics rhymes all day!',
      stars: 5,
      avatar: '👩'
    },
    {
      parent: 'Dr. Anand & Meera Verma',
      child: 'Ananya (Junior KG)',
      quote: 'The live CCTV access gives us complete peace of mind while we work. The teachers are exceptionally patient, warm, and encourage every child at their own natural pace.',
      stars: 5,
      avatar: '👨‍⚕️'
    },
    {
      parent: 'Karan & Ritu Kapoor',
      child: 'Myra (Senior KG)',
      quote: 'The holistic curriculum combining STEM play, storytelling, and messy sensory art prepared Myra so well for formal schooling. Cannot recommend Little Champs enough!',
      stars: 5,
      avatar: '👩‍💼'
    }
  ];

  return (
    <div className="home-page d-flex flex-column gap-5">
      {/* 1. HERO SECTION */}
      <section className="hero-banner bg-white rounded-4 p-4 p-lg-5 shadow-sm border border-light position-relative overflow-hidden">
        {/* Soft background decor blobs */}
        <div
          className="position-absolute rounded-circle"
          style={{
            width: '320px',
            height: '320px',
            background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, rgba(255,255,255,0) 70%)',
            top: '-80px',
            right: '-60px',
            zIndex: 0
          }}
        />
        <div
          className="position-absolute rounded-circle"
          style={{
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, rgba(255,255,255,0) 70%)',
            bottom: '-100px',
            left: '-60px',
            zIndex: 0
          }}
        />

        <div className="row align-items-center g-4 position-relative" style={{ zIndex: 1 }}>
          <div className="col-lg-7 text-start">
            <div className="d-inline-flex align-items-center gap-2 bg-purple-soft text-purple px-3 py-2 rounded-pill mb-3">
              <Sparkles size={16} className="text-warning" />
              <span className="fw-bold" style={{ fontSize: '0.85rem' }}>
                #1 Rated Kids Play School & Daycare
              </span>
            </div>

            <h1 className="display-5 fw-bold text-dark mb-3" style={{ lineHeight: '1.2' }}>
              Where <span className="text-purple">Curiosity</span> Takes Flight & Little <span className="text-pink">Champions Grow!</span> 🌟
            </h1>

            <p className="lead text-muted mb-4 font-body" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
              A joyful, loving haven where toddlers and preschoolers explore, laugh, and build lifelong confidence through sensory Montessori play, phonics fun, and empathetic educator guidance.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4">
              <Link to="/admissions/new" className="btn-kid-primary">
                <span>Enroll for 2026-27</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/programs" className="btn-kid-outline">
                <BookOpen size={18} />
                <span>Explore Programs</span>
              </Link>
              <Link to="/contact" className="btn btn-light rounded-pill px-4 py-2 border fw-semibold text-dark d-inline-flex align-items-center gap-2">
                <Calendar size={17} className="text-purple" />
                <span>Book Campus Tour</span>
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="row g-3 pt-3 border-top">
              <div className="col-6 col-sm-3">
                <div className="d-flex align-items-center gap-2">
                  <ShieldCheck size={20} className="text-success" />
                  <div>
                    <h6 className="mb-0 fw-bold">100% Safe</h6>
                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>CCTV Stream</small>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="d-flex align-items-center gap-2">
                  <Heart size={20} className="text-pink" />
                  <div>
                    <h6 className="mb-0 fw-bold">1:8 Ratio</h6>
                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>Personal Care</small>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="d-flex align-items-center gap-2">
                  <Award size={20} className="text-warning" />
                  <div>
                    <h6 className="mb-0 fw-bold">12+ Years</h6>
                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>Nurturing Kids</small>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="d-flex align-items-center gap-2">
                  <Smile size={20} className="text-primary" />
                  <div>
                    <h6 className="mb-0 fw-bold">5,000+</h6>
                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>Happy Alumni</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Mascot */}
          <div className="col-lg-5 text-center">
            <div className="position-relative d-inline-block">
              <div className="card-kid p-4 bg-white shadow-lg text-center floating-anim" style={{ maxWidth: '420px', margin: '0 auto' }}>
                <div className="d-flex justify-content-center mb-3">
                  <div className="bg-purple-soft p-3 rounded-circle">
                    <StudentIllustration size={90} />
                  </div>
                </div>
                <h4 className="fw-bold text-purple mb-1">Little Champs Academy</h4>
                <p className="text-muted small mb-3">Playgroup • Nursery • LKG • UKG • Daycare</p>
                <div className="bg-yellow-soft p-3 rounded-3 mb-3 text-start">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <span className="fw-bold text-dark" style={{ fontSize: '0.85rem' }}>Admissions Status:</span>
                    <span className="badge bg-success rounded-pill px-2 py-1">Open 2026-27</span>
                  </div>
                  <div className="progress" style={{ height: '8px' }}>
                    <div className="progress-bar bg-warning" style={{ width: '84%' }}></div>
                  </div>
                  <small className="text-muted d-block mt-1" style={{ fontSize: '0.75rem' }}>
                    84% seats filled across all kindergarten batches.
                  </small>
                </div>
                <button
                  className="btn btn-warning w-100 fw-bold rounded-pill text-dark"
                  onClick={() => setAddStudentModalOpen(true)}
                >
                  ⚡ Instant Admission Registration
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE LITTLE CHAMPS? (4 PILLARS) */}
      <section>
        <div className="text-center mb-4">
          <span className="badge bg-pink-soft text-pink px-3 py-2 rounded-pill fw-bold mb-2">
            Why Parents Love Us ❤️
          </span>
          <h2 className="display-6 fw-bold">A Wonder-Filled World Built For Children</h2>
          <p className="text-muted font-body" style={{ maxWidth: '640px', margin: '0 auto' }}>
            We understand that early childhood is the foundation for a lifetime of wonder, curiosity, and learning.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card-kid p-4 h-100 border-0 shadow-sm bg-white text-center">
              <div className="d-flex justify-content-center mb-3">
                <AbcBlocksIllustration size={64} />
              </div>
              <h5 className="fw-bold text-dark mb-2">Sensory & Playway</h5>
              <p className="text-muted small font-body mb-0">
                Hands-on tactile bins, clay sculpting, alphabet building blocks, and phonics rhymes that make learning thrilling.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card-kid p-4 h-100 border-0 shadow-sm bg-white text-center">
              <div className="d-flex justify-content-center mb-3">
                <GraduationIllustration size={64} />
              </div>
              <h5 className="fw-bold text-dark mb-2">School Readiness</h5>
              <p className="text-muted small font-body mb-0">
                Structured literacy, emergent math, handwriting posture, and confident public speaking for a smooth Grade 1 start.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card-kid p-4 h-100 border-0 shadow-sm bg-white text-center">
              <div className="d-flex justify-content-center mb-3">
                <div className="bg-blue-soft p-3 rounded-circle d-inline-flex">
                  <Video size={36} className="text-blue" />
                </div>
              </div>
              <h5 className="fw-bold text-dark mb-2">24/7 Live CCTV Feed</h5>
              <p className="text-muted small font-body mb-0">
                Full live smartphone camera access so parents can watch their little champs learn, eat, and play with confidence.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card-kid p-4 h-100 border-0 shadow-sm bg-white text-center">
              <div className="d-flex justify-content-center mb-3">
                <EmailIllustration size={64} />
              </div>
              <h5 className="fw-bold text-dark mb-2">Warm Parent Connect</h5>
              <p className="text-muted small font-body mb-0">
                Daily digital diary, meal and nap tracking, teacher photo updates, and weekly developmental milestone logs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR PROGRAMS PREVIEW */}
      <section className="bg-white rounded-4 p-4 p-lg-5 shadow-sm border border-light">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 gap-3">
          <div>
            <span className="badge bg-purple-soft text-purple px-3 py-2 rounded-pill fw-bold mb-2">
              Our Learning Milestones 🎓
            </span>
            <h2 className="display-6 fw-bold mb-1">Tailored For Every Wonder Year</h2>
            <p className="text-muted mb-0 font-body">From baby babble to confident readers and creators.</p>
          </div>
          <Link to="/programs" className="btn-kid-outline align-self-start align-self-md-auto">
            <span>View All Programs</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="row g-4">
          {programs.map((prog) => (
            <div key={prog.id} className="col-lg-4 col-md-6">
              <div className="card-kid p-4 h-100 d-flex flex-column justify-content-between border" style={{ backgroundColor: '#FAFAFD' }}>
                <div>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <span className="fs-1">{prog.icon}</span>
                    <span
                      className="badge fw-bold px-3 py-2 rounded-pill"
                      style={{ backgroundColor: prog.badgeBg, color: prog.color }}
                    >
                      {prog.ageRange}
                    </span>
                  </div>

                  <h4 className="fw-bold text-dark mb-1">{prog.name}</h4>
                  <p className="text-muted small fw-semibold mb-3">{prog.tagline}</p>

                  <p className="text-muted small font-body mb-3" style={{ lineHeight: '1.6' }}>
                    {prog.description}
                  </p>

                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {prog.curriculum?.map((curr, idx) => (
                      <span key={idx} className="badge bg-white text-dark border rounded-pill px-2 py-1 small">
                        ✓ {curr}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-top d-flex justify-content-between align-items-center">
                  <div>
                    <span className="text-muted small d-block">Timing</span>
                    <strong className="text-dark" style={{ fontSize: '0.85rem' }}>{prog.timing}</strong>
                  </div>
                  <Link to={`/admissions/new`} className="btn btn-sm btn-outline-primary rounded-pill px-3 fw-bold">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE AGE ELIGIBILITY CALCULATOR */}
      <section className="bg-purple-soft rounded-4 p-4 p-lg-5 text-dark border border-purple">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <span className="badge bg-white text-purple px-3 py-2 rounded-pill fw-bold mb-2">
              Instant Program Finder 🎯
            </span>
            <h3 className="display-6 fw-bold text-purple mb-3">Child Age Eligibility Calculator</h3>
            <p className="text-muted font-body mb-4" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              Wondering which classroom batch fits your child best? Adjust your child’s age slider below to see the recommended program and admission readiness!
            </p>

            <div className="bg-white p-4 rounded-4 shadow-sm">
              <label className="form-label fw-bold d-flex justify-content-between align-items-center">
                <span>Select Child's Age:</span>
                <span className="badge bg-purple text-white px-3 py-2 fs-6 rounded-pill">
                  {calculatorAge} Years Old
                </span>
              </label>
              <input
                type="range"
                className="form-range"
                min="1.0"
                max="6.0"
                step="0.1"
                value={calculatorAge}
                onChange={(e) => setCalculatorAge(e.target.value)}
              />
              <div className="d-flex justify-content-between text-muted small mt-1">
                <span>1.0 Yr (Infant)</span>
                <span>3.0 Yrs (Nursery)</span>
                <span>6.0 Yrs (Senior KG)</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card-kid bg-white p-4 shadow text-start">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="bg-yellow-soft p-3 rounded-circle fs-3">
                  🌟
                </div>
                <div>
                  <small className="text-muted text-uppercase fw-bold letter-spacing-1">Recommended Batch</small>
                  <h4 className="fw-bold text-dark mb-0">{recommended.name}</h4>
                </div>
              </div>

              <p className="text-muted small font-body mb-3">
                Based on your child's age of <strong>{calculatorAge} years</strong>, this batch focuses on age-appropriate sensory discovery, peer interaction, motor dexterity, and cognitive confidence.
              </p>

              <div className="p-3 bg-light rounded-3 mb-3">
                <div className="d-flex align-items-center gap-2 mb-1">
                  <CheckCircle size={16} className="text-success" />
                  <small className="text-dark fw-semibold">Personalized educator-to-child guidance</small>
                </div>
                <div className="d-flex align-items-center gap-2 mb-1">
                  <CheckCircle size={16} className="text-success" />
                  <small className="text-dark fw-semibold">Healthy fruit snack & warm meal support</small>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <CheckCircle size={16} className="text-success" />
                  <small className="text-dark fw-semibold">Doorstep GPS-enabled bus pickup available</small>
                </div>
              </div>

              <div className="d-flex gap-2">
                <Link to="/admissions/new" className="btn-kid-primary w-100 justify-content-center">
                  Apply for this Batch
                </Link>
                <Link to="/contact" className="btn-kid-outline w-100 justify-content-center">
                  Ask a Question
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PARENT TESTIMONIALS */}
      <section>
        <div className="text-center mb-4">
          <span className="badge bg-yellow-soft text-yellow px-3 py-2 rounded-pill fw-bold mb-2">
            Real Stories From Parents 💬
          </span>
          <h2 className="display-6 fw-bold">Loved By Over 2,000+ Happy Families</h2>
        </div>

        <div className="row g-4">
          {testimonials.map((t, idx) => (
            <div key={idx} className="col-md-4">
              <div className="card-kid p-4 h-100 bg-white border-0 shadow-sm d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center gap-1 text-warning mb-3">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" stroke="#F59E0B" />
                    ))}
                  </div>
                  <p className="text-muted font-body fst-italic mb-4" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
                    "{t.quote}"
                  </p>
                </div>

                <div className="d-flex align-items-center gap-3 pt-3 border-top">
                  <div className="fs-2">{t.avatar}</div>
                  <div>
                    <h6 className="fw-bold text-dark mb-0">{t.parent}</h6>
                    <small className="text-purple fw-semibold">Parent of {t.child}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="bg-gradient p-5 rounded-4 text-center text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)' }}>
        <h2 className="display-6 fw-bold text-white mb-2">Give Your Child The Best Start in Life</h2>
        <p className="text-white-50 font-body mb-4" style={{ maxWidth: '580px', margin: '0 auto', fontSize: '1.05rem' }}>
          Schedule an interactive campus walk, meet our loving teachers, and discover why Little Champs is the perfect joyful second home for your child.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Link to="/admissions/new" className="btn btn-warning rounded-pill px-4 py-3 fw-bold text-dark shadow">
            ✨ Submit Online Admission Form
          </Link>
          <Link to="/contact" className="btn btn-light rounded-pill px-4 py-3 fw-bold text-purple shadow">
            📞 Schedule Campus Walk
          </Link>
        </div>
      </section>
    </div>
  );
}
