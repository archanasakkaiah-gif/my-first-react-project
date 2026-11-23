import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Clock,
  Users,
  CheckCircle,
  Calendar,
  Sparkles,
  ArrowRight,
  Sun,
  Smile,
  Shield,
  Coffee
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export default function Programs() {
  const { programs } = useSchool();
  const [selectedProgram, setSelectedProgram] = useState(programs[0]?.id || 'nursery');
  const navigate = useNavigate();

  const activeProg = programs.find((p) => p.id === selectedProgram) || programs[0];

  const dailySchedule = [
    { time: '08:30 AM', title: 'Welcome Circle & Morning Rhymes', desc: 'Warm greetings, attendance song, and energetic stretching to start the day.', icon: '☀️' },
    { time: '09:15 AM', title: 'Montessori & Sensory Exploration', desc: 'Hands-on tactile materials, alphabet puzzles, and fine motor activity stations.', icon: '🧩' },
    { time: '10:15 AM', title: 'Healthy Organic Snack Time', desc: 'Fresh fruits, milk/juice, and practicing polite table manners with friends.', icon: '🍎' },
    { time: '10:45 AM', title: 'Phonics Fun & Story Puppet Theater', desc: 'Interactive letter sounds, reading circles, and dramatic character storytelling.', icon: '📚' },
    { time: '11:30 AM', title: 'Outdoor Play & Splash Adventure', desc: 'Sandbox exploration, tricycle riding, slides, and gross motor agility games.', icon: '🛝' },
    { time: '12:15 PM', title: 'Creative Art, Music & Clay Play', desc: 'Finger painting, rhythm percussion jam, and imagination clay crafting.', icon: '🎨' },
    { time: '01:00 PM', title: 'Warm Lunch & Daycare Nap Time', desc: 'Chef-prepared nutritious lunch, soothing lullabies, and cozy nap pod rest.', icon: '🧸' }
  ];

  return (
    <div className="programs-page d-flex flex-column gap-5">
      {/* 1. Page Header */}
      <section className="bg-white rounded-4 p-4 p-lg-5 shadow-sm border text-center">
        <span className="badge bg-purple-soft text-purple px-3 py-2 rounded-pill fw-bold mb-2">
          Curriculum & Batches 🎓
        </span>
        <h1 className="display-5 fw-bold text-dark mb-3">Programs Designed For Every Stage</h1>
        <p className="lead text-muted font-body mb-4" style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem' }}>
          Our early childhood curriculum seamlessly blends Montessori play-based inquiry with social-emotional development, ensuring your child learns through joyful discovery.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/admissions/new" className="btn-kid-primary">
            <span>Apply for Admission 2026-27</span>
            <ArrowRight size={17} />
          </Link>
          <Link to="/contact" className="btn-kid-outline">
            Schedule a Trial Day
          </Link>
        </div>
      </section>

      {/* 2. All 5 Program Cards */}
      <section>
        <div className="row g-4">
          {programs.map((prog) => {
            const seatsFilledPercent = Math.round((prog.enrolled / prog.totalSeats) * 100);

            return (
              <div key={prog.id} className="col-lg-4 col-md-6">
                <div className="card-kid bg-white p-4 h-100 border d-flex flex-column justify-content-between shadow-sm">
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

                    {/* Key highlights */}
                    <div className="mb-3">
                      <small className="text-muted fw-bold d-block mb-2">Curriculum Highlights:</small>
                      <div className="d-flex flex-column gap-1">
                        {prog.curriculum?.map((c, i) => (
                          <div key={i} className="d-flex align-items-center gap-2 small text-dark">
                            <CheckCircle size={14} className="text-success" />
                            <span>{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Teacher & timing */}
                    <div className="p-3 bg-light rounded-3 mb-3 small">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted">Timing:</span>
                        <strong className="text-dark">{prog.timing}</strong>
                      </div>
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted">Lead Teacher:</span>
                        <strong className="text-purple">{prog.leadTeacher}</strong>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="text-muted">Tuition:</span>
                        <strong className="text-success fw-bold">{prog.fee}</strong>
                      </div>
                    </div>

                    {/* Seat capacity progress */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-between text-muted small mb-1">
                        <span>Admissions Filled:</span>
                        <strong>{prog.enrolled} / {prog.totalSeats} seats</strong>
                      </div>
                      <div className="progress" style={{ height: '6px' }}>
                        <div
                          className="progress-bar"
                          style={{
                            width: `${seatsFilledPercent}%`,
                            backgroundColor: prog.color
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-top d-flex gap-2">
                    <button
                      className="btn btn-outline-primary btn-sm rounded-pill w-100 fw-bold"
                      onClick={() => navigate('/admissions/new')}
                    >
                      Enroll in {prog.name}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Daily Schedule Timeline */}
      <section className="bg-white rounded-4 p-4 p-lg-5 shadow-sm border">
        <div className="text-center mb-4">
          <span className="badge bg-yellow-soft text-yellow px-3 py-2 rounded-pill fw-bold mb-2">
            A Day of Joyful Routine ⏰
          </span>
          <h2 className="display-6 fw-bold">Typical Daily Schedule at Little Champs</h2>
          <p className="text-muted font-body">Structured freedom that builds predictability and excitement for children.</p>
        </div>

        <div className="row g-3 justify-content-center">
          {dailySchedule.map((slot, idx) => (
            <div key={idx} className="col-lg-10">
              <div className="p-3 rounded-4 border bg-light d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="fs-2">{slot.icon}</div>
                  <div>
                    <span className="badge bg-purple text-white px-3 py-1 rounded-pill small fw-bold mb-1">
                      {slot.time}
                    </span>
                    <h5 className="fw-bold text-dark mb-0">{slot.title}</h5>
                  </div>
                </div>
                <div className="text-muted font-body small" style={{ maxWidth: '420px' }}>
                  {slot.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Enrollment Banner */}
      <section className="bg-pink-soft rounded-4 p-4 p-lg-5 text-center border border-pink">
        <h3 className="fw-bold text-pink mb-2">Want to Experience a Classroom in Action?</h3>
        <p className="text-muted font-body mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
          We welcome parents and children to join us for an obligation-free trial morning session!
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/contact" className="btn-kid-secondary">
            Book Trial Morning Session
          </Link>
          <Link to="/admissions" className="btn-kid-outline">
            View Admission Register
          </Link>
        </div>
      </section>
    </div>
  );
}
