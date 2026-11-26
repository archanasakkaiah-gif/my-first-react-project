import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Calendar,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  MessageSquare
} from 'lucide-react';
import { createEnquiry, createTour } from '../services/contactService';

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [openFaq, setOpenFaq] = useState(0);

  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    programInterested: 'Nursery',
    subject: 'Campus Tour Booking',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!formData.parentName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError('Please provide parent name, email, and phone number.');
      return;
    }

    try {
      setSubmitting(true);
      if (formData.subject === 'Campus Tour Booking') {
        await createTour({
          parentName: formData.parentName,
          phoneNumber: formData.phone,
          email: formData.email,
          preferredDate: formData.preferredDate || new Date().toISOString().split('T')[0],
          preferredTime: formData.preferredTime || '10:00 AM',
          message: formData.message || `Interested in ${formData.programInterested}`,
        });
      } else {
        await createEnquiry({
          parentName: formData.parentName,
          phoneNumber: formData.phone,
          email: formData.email,
          message: formData.message || `${formData.subject} - ${formData.programInterested}`,
        });
      }
      setSuccess(true);
      setTimeout(() => setSuccess(false), 8000);

      setFormData({
        parentName: '',
        email: '',
        phone: '',
        childName: '',
        programInterested: 'Nursery',
        subject: 'Campus Tour Booking',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const faqs = [
    {
      q: 'What is the age criteria for admission into Little Champs?',
      a: 'We admit infants and toddlers starting from 1.0 Year in our Daycare & Creche, 1.5 Years in Playgroup, 2.5 Years in Nursery, 3.5 Years in Junior KG (LKG), and 4.5 Years in Senior KG (UKG).'
    },
    {
      q: 'Can parents visit and experience a trial morning session?',
      a: 'Absolutely! We encourage parents to schedule a campus tour where you and your child can spend a morning observing circle time, exploring learning stations, and meeting our lead teachers.'
    },
    {
      q: 'How do you assist children through separation anxiety?',
      a: 'Our transition policy allows parents or guardians to stay near the classroom for the first few days. Our warm educators are trained in reassuring attachment techniques and sensory soothing.'
    },
    {
      q: 'Do you provide school bus transport with GPS tracking?',
      a: 'Yes, our air-conditioned child-safe vans have female attendants, GPS live tracking, speed governors, and fire safety equipment covering key residential hubs in the city.'
    },
    {
      q: 'What are the school daycare and creche timings?',
      a: 'Our kindergarten academic batches run in the morning (8:30 AM to 12:30 PM), while Daycare & Creche operates from 8:00 AM to 6:30 PM with nutritious chef-prepared meals.'
    }
  ];

  return (
    <div className="contact-page d-flex flex-column gap-5">
      {/* 1. Header Banner */}
      <section className="bg-white rounded-4 p-4 p-lg-5 shadow-sm border text-center">
        <span className="badge bg-purple-soft text-purple px-3 py-2 rounded-pill fw-bold mb-2">
          Reach Out to Us 📞
        </span>
        <h1 className="display-5 fw-bold text-dark mb-3">Book a Tour & Connect With Us</h1>
        <p className="lead text-muted font-body mb-0" style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
          Have questions regarding preschool curriculum, seat availability, or wish to schedule a guided walk across our cheerful campus? We’re always here to help.
        </p>
      </section>

      {/* Success Alert */}
      {success && (
        <div className="alert alert-success rounded-4 border-0 shadow-sm p-4 text-center">
          <Sparkles size={32} className="text-success mb-2 mx-auto d-block" />
          <h4 className="fw-bold text-dark">Thank you! Your enquiry has been received.</h4>
          <p className="text-muted mb-0">
            Our admissions counselor will call you within 2 business hours to confirm your campus tour.
          </p>
        </div>
      )}

      {/* 2. Contact Info & Form */}
      <div className="row g-4">
        {/* Left Column: Campus Info Cards */}
        <div className="col-lg-5">
          <div className="d-flex flex-column gap-3">
            <div className="card-kid bg-white p-4 border shadow-sm">
              <div className="d-flex align-items-start gap-3">
                <div className="bg-purple-soft text-purple p-3 rounded-circle">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="fw-bold text-dark mb-1">Campus Address</h5>
                  <p className="text-muted small font-body mb-2">
                    Plot 42, Sunshine Enclave, Green Valley Road, Near Lotus Park, City Center - 600001
                  </p>
                  <span className="badge bg-light text-primary border">Landmark: Opposite City Public Library</span>
                </div>
              </div>
            </div>

            <div className="card-kid bg-white p-4 border shadow-sm">
              <div className="d-flex align-items-start gap-3">
                <div className="bg-pink-soft text-pink p-3 rounded-circle">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="fw-bold text-dark mb-1">Helpline & WhatsApp</h5>
                  <p className="text-muted small font-body mb-1">
                    Call: <strong>+91 98765 43210</strong>
                  </p>
                  <p className="text-muted small font-body mb-0">
                    WhatsApp: <strong>+91 98111 22334</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="card-kid bg-white p-4 border shadow-sm">
              <div className="d-flex align-items-start gap-3">
                <div className="bg-blue-soft text-blue p-3 rounded-circle">
                  <Clock size={24} />
                </div>
                <div>
                  <h5 className="fw-bold text-dark mb-1">Office & Visiting Hours</h5>
                  <p className="text-muted small font-body mb-1">
                    Monday to Friday: <strong>8:00 AM - 5:30 PM</strong>
                  </p>
                  <p className="text-muted small font-body mb-0">
                    Saturday: <strong>8:30 AM - 2:00 PM</strong> (Sunday Closed)
                  </p>
                </div>
              </div>
            </div>

            <div className="card-kid bg-white p-4 border shadow-sm">
              <div className="d-flex align-items-start gap-3">
                <div className="bg-yellow-soft text-yellow p-3 rounded-circle">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="fw-bold text-dark mb-1">Email Enquiries</h5>
                  <p className="text-muted small font-body mb-1">
                    admissions@littlechamps.edu
                  </p>
                  <p className="text-muted small font-body mb-0">
                    principal@littlechamps.edu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Campus Tour & Enquiry Form */}
        <div className="col-lg-7">
          <div className="card-kid bg-white p-4 p-lg-5 border shadow-sm">
            <div className="mb-4">
              <h3 className="fw-bold text-dark mb-1">Book a Campus Tour & Consultation</h3>
              <p className="text-muted font-body small">Fill in the form below and we will prepare a personalized visit for your family.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold text-dark">Parent / Guardian Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control rounded-3 py-2"
                    placeholder="e.g. Radhika Sharma"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold text-dark">Contact Phone *</label>
                  <input
                    type="tel"
                    required
                    className="form-control rounded-3 py-2"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold text-dark">Email Address</label>
                  <input
                    type="email"
                    className="form-control rounded-3 py-2"
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold text-dark">Child's Name & Current Age</label>
                  <input
                    type="text"
                    className="form-control rounded-3 py-2"
                    placeholder="e.g. Vivaan (3 Years)"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold text-dark">Program Interested In</label>
                  <select
                    className="form-select rounded-3 py-2"
                    value={formData.programInterested}
                    onChange={(e) => setFormData({ ...formData, programInterested: e.target.value })}
                  >
                    <option value="Playgroup">Playgroup (1.5 - 2.5 Yrs)</option>
                    <option value="Nursery">Nursery (2.5 - 3.5 Yrs)</option>
                    <option value="Junior KG">Junior KG (3.5 - 4.5 Yrs)</option>
                    <option value="Senior KG">Senior KG (4.5 - 5.5 Yrs)</option>
                    <option value="Daycare">Daycare & Creche</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold text-dark">Enquiry Subject</label>
                  <input
                    type="text"
                    className="form-control rounded-3 py-2"
                    placeholder="e.g. Schedule Saturday Campus Walk"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold text-dark">Any Specific Questions or Timings?</label>
                  <textarea
                    className="form-control rounded-3"
                    rows="4"
                    placeholder="Tell us about your child's interests, dietary preferences, or any specific information you would like to know..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <div className="col-12 mt-4">
                  <button type="submit" className="btn-kid-primary w-100 justify-content-center py-3">
                    <Send size={18} /> Send Tour Request
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 3. Interactive FAQ Accordion */}
      <section className="bg-white rounded-4 p-4 p-lg-5 shadow-sm border">
        <div className="text-center mb-4">
          <span className="badge bg-yellow-soft text-yellow px-3 py-2 rounded-pill fw-bold mb-2">
            Frequently Asked Questions ❓
          </span>
          <h2 className="display-6 fw-bold">Everything Parents Ask About Little Champs</h2>
        </div>

        <div className="d-flex flex-column gap-3" style={{ maxWidth: '850px', margin: '0 auto' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-4 overflow-hidden">
              <button
                className="w-100 p-3 text-start bg-light border-0 d-flex justify-content-between align-items-center fw-bold text-dark"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                style={{ fontSize: '0.98rem' }}
              >
                <span>{faq.q}</span>
                <span className="text-purple">
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              {openFaq === idx && (
                <div className="p-3 bg-white text-muted font-body" style={{ lineHeight: '1.7', fontSize: '0.92rem' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
