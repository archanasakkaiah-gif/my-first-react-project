
import React from 'react';
import {
  FaUserGraduate,
  FaGraduationCap,
  FaBoxes,
  FaEnvelopeOpenText
} from 'react-icons/fa';

const stats = [
  {
    title: 'Total Students',
    value: '5,000+',
    icon: <FaUserGraduate size={32} />,
    percent: '12%',
    bg: 'bg-primary bg-opacity-10',
    color: 'text-primary',
    borderColor: 'border-primary',
  },
  {
    title: 'Total Admissions',
    value: '1,200+',
    icon: <FaGraduationCap size={32} />,
    percent: '8%',
    bg: 'bg-success bg-opacity-10',
    color: 'text-success',
    borderColor: 'border-success',
  },
  {
    title: 'Programs',
    value: '5',
    icon: <FaBoxes size={32} />,
    percent: '0%',
    bg: 'bg-warning bg-opacity-10',
    color: 'text-warning',
    borderColor: 'border-warning',
  },
  {
    title: 'Total Enquiries',
    value: '250+',
    icon: <FaEnvelopeOpenText size={32} />,
    percent: '15%',
    bg: 'bg-info bg-opacity-10',
    color: 'text-info',
    borderColor: 'border-info',
  },
];

const StatsCards = () => {
  return (
    <div className="row g-3">
      {stats.map((s, idx) => (
        <div key={idx} className="col-12 col-md-6 col-lg-3">
          <div className={`card h-100 shadow-sm ${s.bg} ${s.borderColor}`}>
            <div className="card-body d-flex align-items-center">

              <div className={`me-3 ${s.color}`}>
                {s.icon}
              </div>

              <div className="flex-grow-1 text-start">
                <h6 className="mb-1">{s.title}</h6>
                <h4 className="mb-0 fw-bold">{s.value}</h4>
              </div>

              <small className="text-success fw-bold">
                {s.percent} ↑
              </small>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
