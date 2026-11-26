import React, { useState, useEffect } from 'react';
import {
  Users,
  UserPlus,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Eye,
  Trash2,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Heart,
  AlertCircle
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';
import { KidAvatar } from '../assets/illustrations';
import {
  getAdmissions,
  createAdmission,
  updateAdmissionStatus,
  deleteAdmission,
} from '../services/admissionService';

export default function Admissions({ defaultTab = 'list' }) {
  const {
    setSelectedStudent,
    setStudentModalOpen,
    searchQuery,
    setSearchQuery
  } = useSchool();

  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [filterClass, setFilterClass] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [successMessage, setSuccessMessage] = useState('');

  const fetchAdmissions = async () => {
    try {
      setLoading(true);
      const data = await getAdmissions({
        search: searchQuery || undefined,
        programClass: filterClass !== 'All' ? filterClass : undefined,
        status: filterStatus !== 'All' ? filterStatus : undefined,
      });
      setAdmissions(data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load admissions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmissions();
  }, [searchQuery, filterClass, filterStatus]);

  const updateStudentStatus = async (id, status) => {
    try {
      await updateAdmissionStatus(id, status);
      fetchAdmissions();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update status');
    }
  };

  const handleDeleteAdmission = async (id) => {
    try {
      await deleteAdmission(id);
      setSuccessMessage('Admission record deleted successfully.');
      setTimeout(() => setSuccessMessage(''), 4000);
      fetchAdmissions();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete admission');
    }
  };

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    age: '',
    gender: 'Boy',
    class: 'Nursery',
    section: 'Butterflies',
    bloodGroup: 'B+',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
    busRequired: 'Yes',
    mealSubscription: 'Yes',
    notes: '',
    status: 'Pending'
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.parentName.trim() || !formData.parentPhone.trim()) {
      alert('Please fill in required fields: Child Name, Parent Name, and Phone.');
      return;
    }

    addStudent({
      name: formData.name,
      class: formData.class,
      section: formData.section,
      gender: formData.gender,
      age: formData.age || '3 Yrs',
      bloodGroup: formData.bloodGroup,
      parentName: formData.parentName,
      parentPhone: formData.parentPhone,
      parentEmail: formData.parentEmail,
      address: formData.address,
      notes: `${formData.notes} | Bus: ${formData.busRequired} | Meal: ${formData.mealSubscription}`,
      status: formData.status
    });

    setSuccessMessage(`🎉 Admission registered successfully for ${formData.name}!`);
    setTimeout(() => setSuccessMessage(''), 6000);

    // Reset Form
    setFormData({
      name: '',
      dob: '',
      age: '',
      gender: 'Boy',
      class: 'Nursery',
      section: 'Butterflies',
      bloodGroup: 'B+',
      parentName: '',
      parentPhone: '',
      parentEmail: '',
      address: '',
      busRequired: 'Yes',
      mealSubscription: 'Yes',
      notes: '',
      status: 'Pending'
    });

    // Switch to list view so user immediately sees their record!
    setActiveTab('list');
  };

  // Filter Admissions
  const filteredAdmissions = admissions.filter((item) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      item.name.toLowerCase().includes(query) ||
      item.rollNo?.toLowerCase().includes(query) ||
      item.parentName.toLowerCase().includes(query) ||
      item.class.toLowerCase().includes(query);

    const matchesClass = filterClass === 'All' || item.class.toLowerCase() === filterClass.toLowerCase();
    const matchesStatus = filterStatus === 'All' || item.status.toLowerCase() === filterStatus.toLowerCase();

    return matchesSearch && matchesClass && matchesStatus;
  });

  const approvedCount = admissions.filter((a) => a.status === 'Approved').length;
  const pendingCount = admissions.filter((a) => a.status === 'Pending').length;

  return (
    <div className="admissions-page d-flex flex-column gap-4">
      {/* 1. Header & KPI Strip */}
      <div className="bg-white rounded-4 p-4 shadow-sm border d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
        <div>
          <span className="badge bg-purple-soft text-purple px-3 py-2 rounded-pill fw-bold mb-2">
            Admissions Register 2026-27 🎒
          </span>
          <h2 className="fw-bold text-dark mb-1">Student Admissions & Enrollment</h2>
          <p className="text-muted mb-0 font-body">Manage applications, review documents, and register new little champs.</p>
        </div>

        {/* Tab Toggle */}
        <div className="d-flex bg-light p-1 rounded-pill border">
          <button
            className={`btn rounded-pill px-4 py-2 fw-bold text-nowrap ${activeTab === 'list' ? 'btn-purple text-white bg-purple' : 'text-muted'}`}
            style={{ backgroundColor: activeTab === 'list' ? '#7C3AED' : 'transparent', color: activeTab === 'list' ? '#fff' : '#64748B' }}
            onClick={() => setActiveTab('list')}
          >
            📋 Application List ({admissions.length})
          </button>
          <button
            className={`btn rounded-pill px-4 py-2 fw-bold text-nowrap ${activeTab === 'new' ? 'btn-purple text-white bg-purple' : 'text-muted'}`}
            style={{ backgroundColor: activeTab === 'new' ? '#7C3AED' : 'transparent', color: activeTab === 'new' ? '#fff' : '#64748B' }}
            onClick={() => setActiveTab('new')}
          >
            ✍️ + New Admission
          </button>
        </div>
      </div>

      {/* Success Notification Alert */}
      {successMessage && (
        <div className="alert alert-success rounded-4 border-0 shadow-sm d-flex align-items-center justify-content-between p-3 mb-0">
          <div className="d-flex align-items-center gap-2">
            <Sparkles size={20} className="text-success" />
            <strong className="text-dark">{successMessage}</strong>
          </div>
          <button className="btn-close" onClick={() => setSuccessMessage('')}></button>
        </div>
      )}

      {/* 2. STATS ROW */}
      <div className="row g-3">
        <div className="col-6 col-lg-3">
          <div className="card-kid p-3 bg-white border">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <small className="text-muted fw-bold">Total Applications</small>
                <h3 className="fw-bold text-dark mb-0">{admissions.length}</h3>
              </div>
              <div className="bg-purple-soft text-purple p-2 rounded-circle">
                <Users size={22} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 col-lg-3">
          <div className="card-kid p-3 bg-white border">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <small className="text-muted fw-bold">Approved Admissions</small>
                <h3 className="fw-bold text-success mb-0">{approvedCount}</h3>
              </div>
              <div className="bg-green-soft text-green p-2 rounded-circle">
                <CheckCircle2 size={22} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 col-lg-3">
          <div className="card-kid p-3 bg-white border">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <small className="text-muted fw-bold">Pending Review</small>
                <h3 className="fw-bold text-warning mb-0">{pendingCount}</h3>
              </div>
              <div className="bg-yellow-soft text-yellow p-2 rounded-circle">
                <Clock size={22} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 col-lg-3">
          <div className="card-kid p-3 bg-white border">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <small className="text-muted fw-bold">Academic Year</small>
                <h4 className="fw-bold text-purple mb-0">2026 - 2027</h4>
              </div>
              <div className="bg-blue-soft text-blue p-2 rounded-circle">
                <Sparkles size={22} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. TAB 1: APPLICATIONS LIST */}
      {activeTab === 'list' && (
        <div className="card-kid bg-white p-4 border shadow-sm">
          {/* Search & Filters */}
          <div className="row g-3 mb-4">
            <div className="col-md-5">
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-muted">
                  <Search size={16} />
                </span>
                <input
                  type="text"
                  className="form-control bg-light border-start-0"
                  placeholder="Filter by child name, roll no, parent..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-3">
              <select
                className="form-select bg-light"
                value={filterClass}
                onChange={(e) => setFilterClass(e.target.value)}
              >
                <option value="All">All Classes</option>
                <option value="Playgroup">Playgroup</option>
                <option value="Nursery">Nursery</option>
                <option value="Junior KG">Junior KG</option>
                <option value="Senior KG">Senior KG</option>
                <option value="Day Care">Day Care</option>
              </select>
            </div>

            <div className="col-md-4">
              <select
                className="form-select bg-light"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="All">All Status (Approved & Pending)</option>
                <option value="Approved">Approved Only</option>
                <option value="Pending">Pending Only</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col" style={{ width: '40px' }}>#</th>
                  <th scope="col">Child Name & Roll No</th>
                  <th scope="col">Class & Section</th>
                  <th scope="col">Age / Gender</th>
                  <th scope="col">Parent / Contact</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col" className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAdmissions.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-center py-5 text-muted">
                      <AlertCircle size={32} className="text-muted mb-2 d-block mx-auto" />
                      No admission applications match your filter criteria.
                    </td>
                  </tr>
                ) : (
                  filteredAdmissions.map((student, idx) => (
                    <tr key={student.id}>
                      <td className="text-muted small">{idx + 1}</td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <KidAvatar seed={student.id} size={36} />
                          <div>
                            <strong className="text-dark d-block">{student.name}</strong>
                            <small className="text-muted" style={{ fontSize: '0.75rem' }}>{student.rollNo}</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-light text-dark border px-2 py-1">
                          {student.class}
                        </span>
                        <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>{student.section}</small>
                      </td>
                      <td>
                        <div style={{ fontSize: '0.85rem' }}>
                          <span className="text-dark fw-semibold">{student.age}</span> • <span className="text-muted">{student.gender}</span>
                          <span className="badge bg-danger bg-opacity-10 text-danger ms-1" style={{ fontSize: '0.7rem' }}>
                            {student.bloodGroup}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div style={{ fontSize: '0.85rem' }}>
                          <div className="text-dark fw-semibold">{student.parentName}</div>
                          <div className="text-muted small d-flex align-items-center gap-1">
                            <Phone size={12} /> {student.parentPhone}
                          </div>
                        </div>
                      </td>
                      <td>
                        <small className="text-muted">{student.date}</small>
                      </td>
                      <td>
                        <button
                          className={`btn btn-sm rounded-pill px-3 py-1 fw-bold ${
                            student.status === 'Approved'
                              ? 'btn-success bg-opacity-10 text-success border border-success'
                              : 'btn-warning bg-opacity-10 text-warning border border-warning'
                          }`}
                          style={{ fontSize: '0.78rem' }}
                          title="Click to toggle status"
                          onClick={() =>
                            updateStudentStatus(
                              student.id,
                              student.status === 'Approved' ? 'Pending' : 'Approved'
                            )
                          }
                        >
                          {student.status === 'Approved' ? '✓ Approved' : '⏳ Pending'}
                        </button>
                      </td>
                      <td className="text-end">
                        <div className="d-inline-flex gap-1">
                          <button
                            className="btn btn-sm btn-light text-purple rounded-circle p-2"
                            title="View Full Profile"
                            onClick={() => {
                              setSelectedStudent(student);
                              setStudentModalOpen(true);
                            }}
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            className="btn btn-sm btn-light text-danger rounded-circle p-2"
                            title="Delete Record"
                            onClick={() => {
                              setStudentToDelete(student);
                              setDeleteModalOpen(true);
                            }}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. TAB 2: NEW ADMISSION FORM */}
      {activeTab === 'new' && (
        <div className="card-kid bg-white p-4 p-lg-5 border shadow-sm">
          <div className="mb-4 text-center">
            <span className="badge bg-purple-soft text-purple px-3 py-2 rounded-pill fw-bold mb-2">
              Official Enrollment Form 2026-27 ✍️
            </span>
            <h3 className="fw-bold text-dark mb-1">Child Admission & Registration</h3>
            <p className="text-muted font-body">Please fill in accurate information to initiate the student admission process.</p>
          </div>

          <form onSubmit={handleFormSubmit}>
            {/* Step 1: Child Information */}
            <div className="mb-4">
              <h5 className="fw-bold text-purple mb-3 d-flex align-items-center gap-2">
                <span className="badge bg-purple text-white rounded-circle">1</span>
                Child Information
              </h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold text-dark">Child's Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control rounded-3 py-2"
                    placeholder="e.g. Diya Kulkarni"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="col-md-3">
                  <label className="form-label fw-semibold text-dark">Age / DOB *</label>
                  <input
                    type="text"
                    required
                    className="form-control rounded-3 py-2"
                    placeholder="e.g. 3.4 Yrs"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>

                <div className="col-md-3">
                  <label className="form-label fw-semibold text-dark">Gender *</label>
                  <select
                    className="form-select rounded-3 py-2"
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  >
                    <option value="Boy">Boy</option>
                    <option value="Girl">Girl</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold text-dark">Class Applying For *</label>
                  <select
                    className="form-select rounded-3 py-2"
                    value={formData.class}
                    onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                  >
                    <option value="Playgroup">Playgroup (1.5 - 2.5 Yrs)</option>
                    <option value="Nursery">Nursery (2.5 - 3.5 Yrs)</option>
                    <option value="Junior KG">Junior KG / LKG (3.5 - 4.5 Yrs)</option>
                    <option value="Senior KG">Senior KG / UKG (4.5 - 5.5 Yrs)</option>
                    <option value="Day Care">Day Care & Creche</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold text-dark">Section / Batch</label>
                  <select
                    className="form-select rounded-3 py-2"
                    value={formData.section}
                    onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                  >
                    <option value="Butterflies">Butterflies (Morning)</option>
                    <option value="Little Stars">Little Stars (Morning)</option>
                    <option value="Rainbow Champs">Rainbow Champs (Morning)</option>
                    <option value="Tiny Tots">Tiny Tots (Afternoon)</option>
                    <option value="Sunshine Room">Sunshine Room (Full Day)</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold text-dark">Blood Group</label>
                  <select
                    className="form-select rounded-3 py-2"
                    value={formData.bloodGroup}
                    onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Parent / Guardian Details */}
            <div className="mb-4">
              <h5 className="fw-bold text-purple mb-3 d-flex align-items-center gap-2">
                <span className="badge bg-purple text-white rounded-circle">2</span>
                Parent & Guardian Information
              </h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold text-dark">Father's / Mother's Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control rounded-3 py-2"
                    placeholder="e.g. Anand & Sneha Kulkarni"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  />
                </div>

                <div className="col-md-3">
                  <label className="form-label fw-semibold text-dark">Primary Mobile *</label>
                  <input
                    type="tel"
                    required
                    className="form-control rounded-3 py-2"
                    placeholder="+91 98765 43210"
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                  />
                </div>

                <div className="col-md-3">
                  <label className="form-label fw-semibold text-dark">Email Address</label>
                  <input
                    type="email"
                    className="form-control rounded-3 py-2"
                    placeholder="parent@gmail.com"
                    value={formData.parentEmail}
                    onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold text-dark">Residential Address</label>
                  <input
                    type="text"
                    className="form-control rounded-3 py-2"
                    placeholder="e.g. Flat 401, Sapphire Residency, Palm Beach Road"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Transportation & Special Notes */}
            <div className="mb-4">
              <h5 className="fw-bold text-purple mb-3 d-flex align-items-center gap-2">
                <span className="badge bg-purple text-white rounded-circle">3</span>
                School Services & Health Notes
              </h5>
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label fw-semibold text-dark">GPS Bus Transport Needed?</label>
                  <select
                    className="form-select rounded-3 py-2"
                    value={formData.busRequired}
                    onChange={(e) => setFormData({ ...formData, busRequired: e.target.value })}
                  >
                    <option value="Yes">Yes (Route #1 to #5)</option>
                    <option value="No">No (Parent Self Drop/Pickup)</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold text-dark">Warm Meals & Snack Plan?</label>
                  <select
                    className="form-select rounded-3 py-2"
                    value={formData.mealSubscription}
                    onChange={(e) => setFormData({ ...formData, mealSubscription: e.target.value })}
                  >
                    <option value="Yes">Yes (Chef Organic Meals)</option>
                    <option value="No">No (Home Tiffin Box)</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold text-dark">Initial Approval Status</label>
                  <select
                    className="form-select rounded-3 py-2"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="Approved">Approved (Admit Immediately)</option>
                    <option value="Pending">Pending (Requires Document Verification)</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold text-dark">Allergies / Special Dietary / Educator Notes</label>
                  <textarea
                    className="form-control rounded-3"
                    rows="3"
                    placeholder="Mention any allergies, speech habits, favourite toys, or emergency instructions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end gap-3 pt-3 border-top">
              <button
                type="button"
                className="btn btn-light rounded-pill px-4"
                onClick={() => setActiveTab('list')}
              >
                Cancel
              </button>
              <button type="submit" className="btn-kid-primary px-5">
                <Sparkles size={18} /> Submit & Register Student
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
