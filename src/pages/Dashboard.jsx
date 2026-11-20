import React from 'react';
import StatsCards from '. . /components/StatsCards';
import Footer from '. . /components/Footer';

const Dashboard = () => {
  return (
    <div className="container-fluid p-3">

      {/* Welcome Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Dashboard</h2>
          <p className="text-muted">Welcome back, Admin! 👋</p>
        </div>
        <span className="badge bg-light text-dark p-3">
          📅 {new Date().toLocaleDateString()}
        </span>
      </div>

      {/* Statistics Cards */}
      <StatsCards />

      {/* Dashboard Content */}
      <div className="row mt-4 g-3">

        {/* Student Overview */}
        <div className="col-lg-6">
          <div className="card shadow-sm p-4 h-100">
            <h5 className="fw-bold text-primary">
              📊 Student Overview
            </h5>
            <div className="mt-4">
              <h3>Student Growth</h3>
              <div className="progress mb-3" style={{height: '12px'}}>
                <div className="progress-bar bg-primary" style={{width: '75%'}}></div>
              </div>
              <p className="text-muted">Overall student progress</p>
            </div>
          </div>
        </div>

        {/* Recent Admissions */}
        <div className="col-lg-6">
          <div className="card shadow-sm p-4 h-100">
            <h5 className="fw-bold text-primary">
              🎓 Recent Admissions
            </h5>
            <table className="table mt-3">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aaradhana</td>
                  <td>LKG</td>
                  <td><span className="badge bg-success">Approved</span></td>
                </tr>
                <tr>
                  <td>Vignesh</td>
                  <td>UKG</td>
                  <td><span className="badge bg-warning text-dark">Pending</span></td>
                </tr>
                <tr>
                  <td>Diya</td>
                  <td>Nursery</td>
                  <td><span className="badge bg-success">Approved</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-lg-6">
          <div className="card shadow-sm p-4">
            <h5 className="fw-bold text-primary">⚡ Quick Actions</h5>
            <div className="d-flex flex-wrap gap-3 mt-3">
              <button className="btn btn-primary">Add Student</button>
              <button className="btn btn-info text-white">New Admission</button>
              <button className="btn btn-success">Upload Photos</button>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="col-lg-6">
          <div className="card shadow-sm p-4">
            <h5 className="fw-bold text-primary">🔔 Recent Activities</h5>
            <p>New admission received</p>
            <p>Gallery image added</p>
            <p>Contact enquiry received</p>
            <p>Student profile updated</p>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  );
};

export default Dashboard;