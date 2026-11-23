import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  ShieldCheck,
  Sparkles,
  Award,
  Users,
  Compass,
  CheckCircle,
  Eye,
  Smile,
  GraduationCap,
  Calendar
} from 'lucide-react';
import { SchoolLogoSvg } from '../assets/illustrations';

export default function About() {
  const educators = [
    {
      name: 'Mrs. Sunita Sharma',
      role: 'Principal & Founder',
      experience: '18+ Years Experience',
      qualification: 'M.Ed (Early Childhood)',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Pioneering early learning with warmth, empathy, and joy. Dedicated to creating an inclusive haven for every child.'
    },
    {
      name: 'Ms. Radhika Nair',
      role: 'Lead Child Psychologist & Curriculum Head',
      experience: '12+ Years Experience',
      qualification: 'M.Sc Child Development',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80',
      bio: 'Specialist in toddler separation anxiety, emotional intelligence, and speech milestone nurturing.'
    },
    {
      name: 'Ms. Shalini Roy',
      role: 'Senior Montessori Coordinator',
      experience: '10+ Years Experience',
      qualification: 'AMI Certified Montessori Guide',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
      bio: 'Champion of sensory exploration, tactile motor development, and joyful classroom discovery.'
    },
    {
      name: 'Mr. Arvind Joseph',
      role: 'Activity & Physical Fitness Mentor',
      experience: '8+ Years Experience',
      qualification: 'B.P.Ed & Kids Yoga Master',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      bio: 'Instilling confidence, teamwork, and agility through joyful outdoor games, splash play, and morning yoga.'
    }
  ];

  const safetyFeatures = [
    { title: '24/7 CCTV Live App', desc: 'Secure parental streaming access for transparent everyday learning.' },
    { title: 'Pediatric First Aid Certified', desc: 'All staff trained and on-campus child nurse available full-time.' },
    { title: 'Non-Toxic Sanitized Environment', desc: 'Organic eco-friendly cleaning agents, rounded kid-safe furniture.' },
    { title: 'GPS Tracked School Vans', desc: 'Live route tracking with female attendant on every route.' }
  ];

  return (
    <div className="about-page d-flex flex-column gap-5">
      {/* 1. Header Banner */}
      <section className="bg-white rounded-4 p-4 p-lg-5 shadow-sm border text-center position-relative overflow-hidden">
        <span className="badge bg-purple-soft text-purple px-3 py-2 rounded-pill fw-bold mb-2">
          Our Story & Philosophy 📖
        </span>
        <h1 className="display-5 fw-bold text-dark mb-3">Nurturing Hearts & Inspiring Minds</h1>
        <p className="lead text-muted font-body mb-4" style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem' }}>
          Little Champs Kids School was founded with a singular heart-warming vision: to build a joyful preschool environment where young children are celebrated for their individuality, encouraged to ask endless questions, and loved unconditionally.
        </p>

        <div className="d-flex justify-content-center gap-3">
          <Link to="/programs" className="btn-kid-primary">
            Explore Curriculum
          </Link>
          <Link to="/contact" className="btn-kid-outline">
            Meet Our Teachers
          </Link>
        </div>
      </section>

      {/* 2. Vision & Mission Cards */}
      <section className="row g-4">
        <div className="col-md-6">
          <div className="card-kid p-4 h-100 bg-white border-0 shadow-sm">
            <div className="d-inline-flex bg-purple-soft p-3 rounded-circle text-purple mb-3">
              <Eye size={28} />
            </div>
            <h3 className="fw-bold text-purple mb-2">Our Vision</h3>
            <p className="text-muted font-body mb-0" style={{ lineHeight: '1.7' }}>
              To be the most trusted, warm, and inspiring early childhood sanctuary where every toddler discovers the joy of learning, develops empathetic social connections, and builds resilient self-confidence for life.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card-kid p-4 h-100 bg-white border-0 shadow-sm">
            <div className="d-inline-flex bg-pink-soft p-3 rounded-circle text-pink mb-3">
              <Heart size={28} />
            </div>
            <h3 className="fw-bold text-pink mb-2">Our Mission</h3>
            <p className="text-muted font-body mb-0" style={{ lineHeight: '1.7' }}>
              To combine proven Montessori playway methods with modern cognitive discovery in a 100% safe, loving environment that respects each child's natural pace and ignites their innate curiosity.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Safety & Hygiene Protocols */}
      <section className="bg-white rounded-4 p-4 p-lg-5 shadow-sm border">
        <div className="text-center mb-4">
          <span className="badge bg-green-soft text-green px-3 py-2 rounded-pill fw-bold mb-2">
            Safety First Always 🛡️
          </span>
          <h2 className="display-6 fw-bold">Uncompromising Safety & Child Wellness</h2>
          <p className="text-muted font-body">Your child's physical and emotional safety is our highest priority.</p>
        </div>

        <div className="row g-4">
          {safetyFeatures.map((f, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="p-3 bg-light rounded-3 h-100 border">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <CheckCircle size={20} className="text-success" />
                  <h6 className="fw-bold text-dark mb-0">{f.title}</h6>
                </div>
                <p className="text-muted small font-body mb-0">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Meet Our Caring Educators */}
      <section>
        <div className="text-center mb-4">
          <span className="badge bg-yellow-soft text-yellow px-3 py-2 rounded-pill fw-bold mb-2">
            Loving Mentors 👩‍🏫
          </span>
          <h2 className="display-6 fw-bold">The Heart Behind Little Champs</h2>
          <p className="text-muted font-body">Certified educators, passionate mentors, and loving second mothers to your kids.</p>
        </div>

        <div className="row g-4">
          {educators.map((edu, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="card-kid bg-white border-0 shadow-sm h-100 overflow-hidden text-center">
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img
                    src={edu.image}
                    alt={edu.name}
                    className="w-100 h-100 object-fit-cover"
                    style={{ transition: 'transform 0.3s ease' }}
                  />
                </div>
                <div className="p-4">
                  <h5 className="fw-bold text-dark mb-1">{edu.name}</h5>
                  <p className="text-purple small fw-bold mb-1">{edu.role}</p>
                  <span className="badge bg-light text-muted border mb-2 small">{edu.qualification}</span>
                  <p className="text-muted small font-body mb-0" style={{ lineHeight: '1.6' }}>
                    {edu.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Campus Tour CTA */}
      <section className="bg-purple-soft rounded-4 p-4 p-lg-5 text-center border border-purple">
        <h3 className="fw-bold text-purple mb-2">Come Walk Our Joyful Campus</h3>
        <p className="text-muted font-body mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Experience the cheerful classrooms, colorful sensory playgrounds, splash pool, and warm smiles in person!
        </p>
        <Link to="/contact" className="btn-kid-primary">
          <Calendar size={18} />
          <span>Book a Free Guided Campus Tour</span>
        </Link>
      </section>
    </div>
  );
}
