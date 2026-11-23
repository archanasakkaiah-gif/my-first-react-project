import React from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  StudentIllustration,
  GraduationIllustration,
  AbcBlocksIllustration,
  EmailIllustration
} from '../assets/illustrations';
import { ArrowUpRight } from 'lucide-react';

export default function StatsCards() {
  const { stats, admissions, programs, enquiries } = useSchool();

  const cards = [
    {
      title: 'Total Students',
      value: stats.totalStudents.toLocaleString(),
      growth: '+12% this year',
      icon: <StudentIllustration size={56} />,
      badgeBg: '#EDE9FE',
      badgeColor: '#7C3AED',
      borderColor: '#DDD6FE'
    },
    {
      title: 'Active Admissions',
      value: admissions.length.toLocaleString(),
      growth: '+8% this month',
      icon: <GraduationIllustration size={56} />,
      badgeBg: '#FCE7F3',
      badgeColor: '#EC4899',
      borderColor: '#FBCFE8'
    },
    {
      title: 'Active Programs',
      value: programs.length.toString(),
      growth: '5 Core Batches',
      icon: <AbcBlocksIllustration size={56} />,
      badgeBg: '#FEF3C7',
      badgeColor: '#F59E0B',
      borderColor: '#FDE68A'
    },
    {
      title: 'Parent Enquiries',
      value: enquiries.length.toLocaleString(),
      growth: '+15% fresh queries',
      icon: <EmailIllustration size={56} />,
      badgeBg: '#E0F2FE',
      badgeColor: '#0284C7',
      borderColor: '#BAE6FD'
    }
  ];

  return (
    <div className="row g-3">
      {cards.map((card, idx) => (
        <div key={idx} className="col-12 col-sm-6 col-xl-3">
          <div
            className="card-kid bg-white p-3 p-xl-4 h-100 border shadow-sm d-flex flex-column justify-content-between"
            style={{ borderColor: card.borderColor }}
          >
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div>
                <span className="text-muted small fw-bold text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                  {card.title}
                </span>
                <h3 className="fw-bold text-dark mt-1 mb-0">{card.value}</h3>
              </div>
              <div className="flex-shrink-0">
                {card.icon}
              </div>
            </div>

            <div className="pt-2 border-top d-flex align-items-center justify-content-between">
              <span
                className="badge rounded-pill fw-semibold"
                style={{ backgroundColor: card.badgeBg, color: card.badgeColor, fontSize: '0.75rem' }}
              >
                {card.growth}
              </span>
              <small className="text-muted d-flex align-items-center gap-1" style={{ fontSize: '0.72rem' }}>
                <ArrowUpRight size={14} className="text-success" /> Updated live
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
