import React, { useState, useEffect } from 'react';
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
import { getPrograms, createProgram } from '../services/programService';

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProgram, setNewProgram] = useState({
    programName: '',
    ageGroup: '',
    description: '',
    duration: '',
    fees: '',
    status: 'Active',
  });
  const [selectedProgram, setSelectedProgram] = useState('');
  const navigate = useNavigate();

  const fetchPrograms = async () => {
    try {
      setLoading(true);
      const data = await getPrograms();
      setPrograms(data);
      if (data.length > 0 && !selectedProgram) {
        setSelectedProgram(data[0]._id);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load programs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  const handleAddProgram = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!newProgram.programName || !newProgram.ageGroup || !newProgram.description || !newProgram.duration || !newProgram.fees) {
      setError('Please fill in all required program fields.');
      return;
    }
    try {
      setSubmitting(true);
      await createProgram(newProgram);
      setSuccess('Program added successfully!');
      setNewProgram({ programName: '', ageGroup: '', description: '', duration: '', fees: '', status: 'Active' });
      setShowAddForm(false);
      await fetchPrograms();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add program');
    } finally {
      setSubmitting(false);
    }
  };

  const activeProg = programs.find((p) => p._id === selectedProgram) || programs[0];

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
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/admissions/new" className="btn-kid-primary">
            <span>Apply for Admission 2026-27</span>
            <ArrowRight size={17} />
          </Link>
          <Link to="/contact" className="btn-kid-outline">
            Schedule a Trial Day
          </Link>
          <button
            type="button"
            className="btn-kid-secondary"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? 'Close Add Form' : '+ Add Program'}
          </button>
        </div>
      </section>

      {showAddForm && (
        <section className="bg-white rounded-4 p-4 shadow-sm border">
          <h4 className="fw-bold text-dark mb-3">Add New Program</h4>
          {success && <div className="alert alert-success rounded-3">{success}</div>}
          {error && <div className="alert alert-danger rounded-3">{error}</div>}
          <form onSubmit={handleAddProgram} className="row g-3">
            <div className="col-md-4">
              <label className="form-label small fw-bold">Program Name *</label>
              <input
                type="text"
                className="form-control"
                value={newProgram.programName}
                onChange={(e) => setNewProgram({ ...newProgram, programName: e.target.value })}
                placeholder="e.g., Playgroup"
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label small fw-bold">Age Group *</label>
              <input
                type="text"
                className="form-control"
                value={newProgram.ageGroup}
                onChange={(e) => setNewProgram({ ...newProgram, ageGroup: e.target.value })}
                placeholder="e.g., 1.5 - 2.5 Years"
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label small fw-bold">Duration *</label>
              <input
                type="text"
                className="form-control"
                value={newProgram.duration}
                onChange={(e) => setNewProgram({ ...newProgram, duration: e.target.value })}
                placeholder="e.g., 3 Hours/Day"
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label small fw-bold">Fees *</label>
              <input
                type="text"
                className="form-control"
                value={newProgram.fees}
                onChange={(e) => setNewProgram({ ...newProgram, fees: e.target.value })}
                placeholder="e.g., 25000"
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label small fw-bold">Status</label>
              <select
                className="form-select"
                value={newProgram.status}
                onChange={(e) => setNewProgram({ ...newProgram, status: e.target.value })}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="form-label small fw-bold">Description *</label>
              <textarea
                className="form-control"
                rows="2"
                value={newProgram.description}
                onChange={(e) => setNewProgram({ ...newProgram, description: e.target.value })}
                placeholder="Program description..."
                required
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn-kid-primary" disabled={submitting}>
                {submitting ? 'Saving...' : 'Save Program'}
              </button>
            </div>
          </form>
        </section>
      )}

      {/* 2. All Program Cards */}
      <section>
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-purple" role="status"></div>
            <p className="text-muted mt-2">Loading programs...</p>
          </div>
        )}
        {error && (
          <div className="alert alert-danger rounded-4">{error}</div>
        )}
        {!loading && !error && programs.length === 0 && (
          <div className="alert alert-info rounded-4 text-center">No programs found in database.</div>
        )}
        <div className="row g-4">
          {programs.map((prog) => {
            return (
              <div key={prog._id} className="col-lg-4 col-md-6">
                <div className="card-kid bg-white p-4 h-100 border d-flex flex-column justify-content-between shadow-sm">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className="fs-1">🎓</span>
                      <span
                        className="badge fw-bold px-3 py-2 rounded-pill bg-purple-soft text-purple"
                      >
                        {prog.ageGroup}
                      </span>
                    </div>

                    <h4 className="fw-bold text-dark mb-1">{prog.programName}</h4>
                    <p className="text-muted small fw-semibold mb-3">Status: {prog.status}</p>

                    <p className="text-muted small font-body mb-3" style={{ lineHeight: '1.6' }}>
                      {prog.description}
                    </p>

                    {/* Teacher & timing */}
                    <div className="p-3 bg-light rounded-3 mb-3 small">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted">Duration:</span>
                        <strong className="text-dark">{prog.duration}</strong>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="text-muted">Tuition Fees:</span>
                        <strong className="text-success fw-bold">{prog.fees}</strong>
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
