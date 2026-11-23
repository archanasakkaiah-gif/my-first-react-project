import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StatsCards from '../components/StatsCards';
import { useSchool } from '../context/SchoolContext';
import { KidAvatar } from '../assets/illustrations';
import {
  Users,
  UserPlus,
  Image as ImageIcon,
  Calendar,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
  Eye,
  Trash2,
  Bell,
  Mail,
  Phone,
  Layers
} from 'lucide-react';

export default function Dashboard() {
  const {
    currentUser,
    admissions,
    programs,
    activities,
    enquiries,
    setAddStudentModalOpen,
    setUploadPhotoModalOpen,
    setSelectedStudent,
    setStudentModalOpen,
    setStudentToDelete,
    setDeleteModalOpen,
    updateStudentStatus
  } = useSchool();

  const navigate = useNavigate();

  // Recent 5 admissions
  const recentAdmissions = admissions.slice(0, 5);
  // Recent 4 enquiries
  const recentEnquiries = enquiries.slice(0, 4);

  return (
    <div className="dashboard-page d-flex flex-column gap-4">
      {/* 1. Welcome Banner */}
      <div className="bg-white rounded-4 p-4 shadow-sm border d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
        <div className="d-flex align-items-center gap-3">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center bg-purple-soft text-purple shadow-sm"
            style={{ width: '56px', height: '56px', fontSize: '1.8rem' }}
          >
            {currentUser?.avatar || '👩‍🏫'}
          </div>
          <div>
            <div className="d-flex align-items-center gap-2">
              <h2 className="fw-bold text-dark mb-0 fs-3">Welcome, {currentUser?.name || 'Principal'}!</h2>
              <span className="badge bg-success bg-opacity-10 text-success border border-success rounded-pill px-2 py-1 small">
                Active Session
              </span>
            </div>
            <p className="text-muted mb-0 font-body small">
              {currentUser?.role} • Little Champs Kids School (Academic Session {currentUser?.academicYear})
            </p>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="d-flex flex-wrap gap-2">
          <button
            className="btn-kid-primary btn-sm py-2 px-3"
            onClick={() => setAddStudentModalOpen(true)}
          >
            <UserPlus size={16} />
            <span>+ Quick Admission</span>
          </button>
          <button
            className="btn-kid-secondary btn-sm py-2 px-3"
            onClick={() => setUploadPhotoModalOpen(true)}
          >
            <ImageIcon size={16} />
            <span>+ Add Memory</span>
          </button>
          <button
            className="btn btn-outline-secondary btn-sm rounded-pill px-3 py-2 fw-semibold"
            onClick={() => navigate('/admissions')}
          >
            <span>Full Register</span>
          </button>
        </div>
      </div>

      {/* 2. Interactive KPI Stats Cards */}
      <StatsCards />

      {/* 3. Class Capacity & Recent Admissions Row */}
      <div className="row g-4">
        {/* Left: Class Seat Capacity Breakdown */}
        <div className="col-lg-5">
          <div className="card-kid bg-white p-4 h-100 border shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                <Layers size={18} className="text-purple" />
                <span>Class Enrollment Capacity</span>
              </h5>
              <span className="badge bg-purple-soft text-purple rounded-pill small">2026-27</span>
            </div>
            <p className="text-muted small font-body mb-4">
              Real-time student batch fill rate across playgroup, kindergarten, and daycare.
            </p>

            <div className="d-flex flex-column gap-3">
              {programs.map((prog) => {
                const percent = Math.round((prog.enrolled / prog.totalSeats) * 100);
                return (
                  <div key={prog.id} className="p-2 border rounded-3 bg-light">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <div className="d-flex align-items-center gap-2">
                        <span>{prog.icon}</span>
                        <strong className="text-dark small">{prog.name}</strong>
                      </div>
                      <span className="small fw-bold text-muted">
                        {prog.enrolled} / {prog.totalSeats} ({percent}%)
                      </span>
                    </div>
                    <div className="progress" style={{ height: '8px' }}>
                      <div
                        className="progress-bar rounded-pill"
                        style={{ width: `${percent}%`, backgroundColor: prog.color }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-top text-center">
              <Link to="/programs" className="text-purple small fw-bold text-decoration-none">
                View Detailed Curricula & Timings →
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Recent Admissions Table */}
        <div className="col-lg-7">
          <div className="card-kid bg-white p-4 h-100 border shadow-sm d-flex flex-column justify-content-between">
            <div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                  <Users size={18} className="text-purple" />
                  <span>Recent Admissions</span>
                </h5>
                <Link to="/admissions" className="btn btn-sm btn-light text-purple rounded-pill fw-bold">
                  View All ({admissions.length}) →
                </Link>
              </div>

              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">Student</th>
                      <th scope="col">Class</th>
                      <th scope="col">Status</th>
                      <th scope="col" className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentAdmissions.map((student) => (
                      <tr key={student.id}>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <KidAvatar seed={student.id} size={32} />
                            <div>
                              <strong className="text-dark d-block" style={{ fontSize: '0.88rem' }}>
                                {student.name}
                              </strong>
                              <small className="text-muted" style={{ fontSize: '0.72rem' }}>
                                {student.rollNo} • {student.parentPhone}
                              </small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-light text-dark border small">
                            {student.class}
                          </span>
                        </td>
                        <td>
                          <button
                            className={`btn btn-sm rounded-pill px-2 py-0 fw-bold ${
                              student.status === 'Approved'
                                ? 'btn-success bg-opacity-10 text-success border border-success'
                                : 'btn-warning bg-opacity-10 text-warning border border-warning'
                            }`}
                            style={{ fontSize: '0.74rem' }}
                            onClick={() =>
                              updateStudentStatus(
                                student.id,
                                student.status === 'Approved' ? 'Pending' : 'Approved'
                              )
                            }
                            title="Click to toggle status"
                          >
                            {student.status}
                          </button>
                        </td>
                        <td className="text-end">
                          <div className="d-inline-flex gap-1">
                            <button
                              className="btn btn-sm btn-light rounded-circle p-1 text-purple"
                              title="View Profile"
                              onClick={() => {
                                setSelectedStudent(student);
                                setStudentModalOpen(true);
                              }}
                            >
                              <Eye size={15} />
                            </button>
                            <button
                              className="btn btn-sm btn-light rounded-circle p-1 text-danger"
                              title="Delete Record"
                              onClick={() => {
                                setStudentToDelete(student);
                                setDeleteModalOpen(true);
                              }}
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pt-3 border-top d-flex justify-content-between align-items-center">
              <small className="text-muted">Showing {recentAdmissions.length} recent applicants</small>
              <button
                className="btn btn-sm btn-outline-primary rounded-pill fw-bold"
                onClick={() => setAddStudentModalOpen(true)}
              >
                + Register Another Child
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Live Activities & Parent Inquiries Row */}
      <div className="row g-4">
        {/* Live Activity Timeline */}
        <div className="col-lg-6">
          <div className="card-kid bg-white p-4 border shadow-sm h-100">
            <h5 className="fw-bold text-dark mb-3 d-flex align-items-center gap-2">
              <Sparkles size={18} className="text-warning" />
              <span>Real-Time Activity Stream</span>
            </h5>
            <div className="d-flex flex-column gap-3">
              {activities.map((act) => (
                <div key={act.id} className="p-3 rounded-3 border bg-light d-flex align-items-start gap-3">
                  <div
                    className="rounded-circle p-2 d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ backgroundColor: act.badgeBg, color: act.iconColor }}
                  >
                    <CheckCircle size={18} />
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <strong className="text-dark small">{act.title}</strong>
                      <small className="text-muted" style={{ fontSize: '0.72rem' }}>{act.time}</small>
                    </div>
                    <p className="text-muted small font-body mb-0" style={{ fontSize: '0.82rem' }}>
                      {act.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Parent Inquiries */}
        <div className="col-lg-6">
          <div className="card-kid bg-white p-4 border shadow-sm h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                <Mail size={18} className="text-purple" />
                <span>Parent Enquiries ({enquiries.length})</span>
              </h5>
              <Link to="/contact" className="text-purple small fw-bold text-decoration-none">
                Submit Test Enquiry →
              </Link>
            </div>

            <div className="d-flex flex-column gap-3">
              {recentEnquiries.map((enq) => (
                <div key={enq.id} className="p-3 rounded-3 border bg-light">
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <div>
                      <strong className="text-dark small d-block">{enq.parentName}</strong>
                      <small className="text-purple fw-semibold" style={{ fontSize: '0.74rem' }}>
                        Interest: {enq.programInterested} ({enq.childName})
                      </small>
                    </div>
                    <span className="badge bg-warning bg-opacity-25 text-dark rounded-pill small">
                      {enq.status}
                    </span>
                  </div>
                  <p className="text-muted small font-body mb-2" style={{ fontSize: '0.8rem' }}>
                    "{enq.message}"
                  </p>
                  <div className="d-flex justify-content-between align-items-center text-muted" style={{ fontSize: '0.72rem' }}>
                    <span>📞 {enq.phone}</span>
                    <span>{enq.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
