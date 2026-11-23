import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { X, Check, AlertTriangle, Image as ImageIcon, User, Sparkles } from 'lucide-react';

export default function GlobalModals() {
  const {
    addStudentModalOpen,
    setAddStudentModalOpen,
    selectedStudent,
    setSelectedStudent,
    studentModalOpen,
    setStudentModalOpen,
    deleteModalOpen,
    setDeleteModalOpen,
    studentToDelete,
    setStudentToDelete,
    uploadPhotoModalOpen,
    setUploadPhotoModalOpen,
    addStudent,
    deleteStudent,
    addGalleryPhoto,
    programs
  } = useSchool();

  // Quick Add Student Form State
  const [formData, setFormData] = useState({
    name: '',
    class: 'Nursery',
    section: 'Butterflies',
    gender: 'Boy',
    age: '3 Yrs',
    bloodGroup: 'B+',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
    notes: '',
    status: 'Approved'
  });

  // Quick Photo Upload Form State
  const [photoData, setPhotoData] = useState({
    title: '',
    category: 'Classroom Fun',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=80',
    caption: ''
  });

  const handleAddStudentSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.parentName.trim()) {
      alert('Please fill in child name and parent name');
      return;
    }
    addStudent(formData);
    setAddStudentModalOpen(false);
    setFormData({
      name: '',
      class: 'Nursery',
      section: 'Butterflies',
      gender: 'Boy',
      age: '3 Yrs',
      bloodGroup: 'B+',
      parentName: '',
      parentPhone: '',
      parentEmail: '',
      address: '',
      notes: '',
      status: 'Approved'
    });
  };

  const handleAddPhotoSubmit = (e) => {
    e.preventDefault();
    if (!photoData.title.trim()) {
      alert('Please enter a photo title');
      return;
    }
    addGalleryPhoto(photoData);
    setUploadPhotoModalOpen(false);
    setPhotoData({
      title: '',
      category: 'Classroom Fun',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=80',
      caption: ''
    });
  };

  return (
    <>
      {/* 1. QUICK ADD STUDENT MODAL */}
      {addStudentModalOpen && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1060 }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
              <div className="modal-header bg-purple-soft text-purple border-0 py-3 px-4">
                <h5 className="modal-title fw-bold d-flex align-items-center gap-2">
                  <Sparkles size={20} className="text-warning" /> New Student Quick Admission
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setAddStudentModalOpen(false)}
                />
              </div>
              <form onSubmit={handleAddStudentSubmit}>
                <div className="modal-body p-4">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-dark">Child's Full Name *</label>
                      <input
                        type="text"
                        required
                        className="form-control rounded-3"
                        placeholder="e.g. Aarav Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-dark">Applying For Class *</label>
                      <select
                        className="form-select rounded-3"
                        value={formData.class}
                        onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                      >
                        <option value="Playgroup">Playgroup (1.5 - 2.5y)</option>
                        <option value="Nursery">Nursery (2.5 - 3.5y)</option>
                        <option value="Junior KG">Junior KG (3.5 - 4.5y)</option>
                        <option value="Senior KG">Senior KG (4.5 - 5.5y)</option>
                        <option value="Day Care">Day Care & Creche</option>
                      </select>
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-semibold text-dark">Age</label>
                      <input
                        type="text"
                        className="form-control rounded-3"
                        placeholder="e.g. 3.2 Yrs"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-semibold text-dark">Gender</label>
                      <select
                        className="form-select rounded-3"
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      >
                        <option value="Boy">Boy</option>
                        <option value="Girl">Girl</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-semibold text-dark">Blood Group</label>
                      <select
                        className="form-select rounded-3"
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

                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-dark">Parent / Guardian Name *</label>
                      <input
                        type="text"
                        required
                        className="form-control rounded-3"
                        placeholder="e.g. Rajesh & Priya Sharma"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-dark">Parent Phone *</label>
                      <input
                        type="tel"
                        required
                        className="form-control rounded-3"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.parentPhone}
                        onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-dark">Parent Email</label>
                      <input
                        type="email"
                        className="form-control rounded-3"
                        placeholder="e.g. parent@example.com"
                        value={formData.parentEmail}
                        onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold text-dark">Admission Status</label>
                      <select
                        className="form-select rounded-3"
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      >
                        <option value="Approved">Approved (Admitted)</option>
                        <option value="Pending">Pending Review</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold text-dark">Residential Address</label>
                      <input
                        type="text"
                        className="form-control rounded-3"
                        placeholder="e.g. Flat 304, Green Heights, Rose Avenue"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold text-dark">Special Notes / Dietary / Allergies</label>
                      <textarea
                        className="form-control rounded-3"
                        rows="2"
                        placeholder="e.g. Allergic to dairy, loves finger painting, requires bus route #2"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="modal-footer border-0 bg-light p-3">
                  <button
                    type="button"
                    className="btn btn-light rounded-pill px-4"
                    onClick={() => setAddStudentModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-kid-primary rounded-pill px-4">
                    <Check size={16} /> Enroll Child
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* 2. VIEW STUDENT DETAILS MODAL */}
      {studentModalOpen && selectedStudent && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1060 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
              <div className="modal-header bg-purple-soft text-purple border-0 py-3 px-4">
                <div className="d-flex align-items-center gap-2">
                  <span className="fs-3">🎒</span>
                  <div>
                    <h5 className="modal-title fw-bold mb-0">{selectedStudent.name}</h5>
                    <small className="text-muted">Roll No: {selectedStudent.rollNo}</small>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setStudentModalOpen(false)}
                />
              </div>
              <div className="modal-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3 p-3 bg-light rounded-3">
                  <div>
                    <div className="text-muted small">Class & Batch</div>
                    <div className="fw-bold text-dark fs-6">{selectedStudent.class} ({selectedStudent.section})</div>
                  </div>
                  <div>
                    <span className={`badge ${selectedStudent.status === 'Approved' ? 'bg-success' : 'bg-warning text-dark'} rounded-pill px-3 py-2`}>
                      {selectedStudent.status}
                    </span>
                  </div>
                </div>

                <div className="row g-2 mb-3">
                  <div className="col-4">
                    <div className="p-2 border rounded text-center">
                      <small className="text-muted d-block">Age</small>
                      <strong className="text-dark">{selectedStudent.age || '3 Yrs'}</strong>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 border rounded text-center">
                      <small className="text-muted d-block">Gender</small>
                      <strong className="text-dark">{selectedStudent.gender || 'Child'}</strong>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 border rounded text-center">
                      <small className="text-muted d-block">Blood Group</small>
                      <strong className="text-danger">{selectedStudent.bloodGroup || 'O+'}</strong>
                    </div>
                  </div>
                </div>

                <h6 className="fw-bold text-purple mb-2">Parent / Guardian Information</h6>
                <div className="p-3 bg-light rounded-3 mb-3" style={{ fontSize: '0.88rem' }}>
                  <div className="mb-1"><strong>Parents:</strong> {selectedStudent.parentName}</div>
                  <div className="mb-1"><strong>Phone:</strong> {selectedStudent.parentPhone}</div>
                  <div className="mb-1"><strong>Email:</strong> {selectedStudent.parentEmail || 'N/A'}</div>
                  <div><strong>Address:</strong> {selectedStudent.address || 'Local campus pickup'}</div>
                </div>

                {selectedStudent.notes && (
                  <div>
                    <h6 className="fw-bold text-purple mb-1">Teacher & Medical Notes</h6>
                    <p className="text-muted small bg-yellow-soft p-3 rounded-3 mb-0">
                      📝 {selectedStudent.notes}
                    </p>
                  </div>
                )}
              </div>
              <div className="modal-footer border-0 p-3 bg-light">
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-pill px-4"
                  onClick={() => setStudentModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. DELETE CONFIRMATION MODAL */}
      {deleteModalOpen && studentToDelete && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1060 }}>
          <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content rounded-4 border-0 shadow-lg text-center p-3">
              <div className="p-3">
                <div className="text-danger mb-3">
                  <AlertTriangle size={48} className="mx-auto" />
                </div>
                <h5 className="fw-bold mb-2">Remove Record?</h5>
                <p className="text-muted small mb-4">
                  Are you sure you want to remove <strong>{studentToDelete.name}</strong> from the admissions register?
                </p>
                <div className="d-flex gap-2 justify-content-center">
                  <button
                    className="btn btn-light rounded-pill px-3"
                    onClick={() => setDeleteModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-danger rounded-pill px-3"
                    onClick={() => deleteStudent(studentToDelete.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. UPLOAD PHOTO MODAL */}
      {uploadPhotoModalOpen && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1060 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
              <div className="modal-header bg-pink-soft text-pink border-0 py-3 px-4">
                <h5 className="modal-title fw-bold d-flex align-items-center gap-2">
                  <ImageIcon size={20} /> Add Memory to Kids Gallery
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setUploadPhotoModalOpen(false)}
                />
              </div>
              <form onSubmit={handleAddPhotoSubmit}>
                <div className="modal-body p-4">
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-dark">Activity / Event Title *</label>
                    <input
                      type="text"
                      required
                      className="form-control rounded-3"
                      placeholder="e.g. Clay Modelling Fun Day"
                      value={photoData.title}
                      onChange={(e) => setPhotoData({ ...photoData, title: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-dark">Event Category</label>
                    <select
                      className="form-select rounded-3"
                      value={photoData.category}
                      onChange={(e) => setPhotoData({ ...photoData, category: e.target.value })}
                    >
                      <option value="Classroom Fun">Classroom Fun</option>
                      <option value="Sports Day">Sports Day</option>
                      <option value="Art & Craft">Art & Craft</option>
                      <option value="Science Fair">Science Fair</option>
                      <option value="Annual Fest">Annual Fest</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-dark">Photo Image URL</label>
                    <input
                      type="url"
                      required
                      className="form-control rounded-3"
                      placeholder="https://images.unsplash.com/..."
                      value={photoData.image}
                      onChange={(e) => setPhotoData({ ...photoData, image: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-dark">Short Caption / Story</label>
                    <textarea
                      className="form-control rounded-3"
                      rows="2"
                      placeholder="e.g. Toddlers exploring colorful kinetic sand and crafting mini castles!"
                      value={photoData.caption}
                      onChange={(e) => setPhotoData({ ...photoData, caption: e.target.value })}
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer border-0 p-3 bg-light">
                  <button
                    type="button"
                    className="btn btn-light rounded-pill px-4"
                    onClick={() => setUploadPhotoModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-kid-secondary rounded-pill px-4">
                    <Check size={16} /> Publish Photo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
