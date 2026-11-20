import React from 'react';

// Cute School Logo
export const SchoolLogoSvg = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="32" cy="32" r="30" fill="url(#logo_grad)" />
    <path d="M12 28L32 18L52 28L32 38L12 28Z" fill="#FFD166" />
    <path d="M20 33V42C20 45 25 48 32 48C39 48 44 45 44 42V33L32 39L20 33Z" fill="#F77F00" />
    <circle cx="48" cy="30" r="3" fill="#EF476F" />
    <path d="M48 33V44C48 45 47 46 45 46" stroke="#EF476F" strokeWidth="2" strokeLinecap="round" />
    {/* Smiling face & stars */}
    <circle cx="28" cy="27" r="1.5" fill="#4A154B" />
    <circle cx="36" cy="27" r="1.5" fill="#4A154B" />
    <path d="M30 31C30.8 32.5 33.2 32.5 34 31" stroke="#4A154B" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="16" cy="18" r="2" fill="#06D6A0" />
    <circle cx="48" cy="16" r="2.5" fill="#118AB2" />
    <circle cx="32" cy="54" r="2" fill="#FFD166" />
    <defs>
      <linearGradient id="logo_grad" x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6C2BD9" />
        <stop offset="1" stopColor="#3B1366" />
      </linearGradient>
    </defs>
  </svg>
);

// Card 1: Total Students (Cute kid with backpack and star)
export const StudentIllustration = ({ size = 70 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="#EDE9FE" />
    {/* Ambient sparkles */}
    <circle cx="20" cy="24" r="4" fill="#C4B5FD" />
    <circle cx="82" cy="28" r="3" fill="#8B5CF6" />
    <path d="M78 68L80 74L86 76L80 78L78 84L76 78L70 76L76 74L78 68Z" fill="#FBBF24" />
    {/* Body */}
    <ellipse cx="50" cy="74" rx="22" ry="16" fill="#7C3AED" />
    <path d="M36 68C36 62 42 58 50 58C58 58 64 62 64 68V82H36V68Z" fill="#8B5CF6" />
    <path d="M44 58H56V66C56 69.3 53.3 72 50 72C46.7 72 44 69.3 44 66V58Z" fill="#FDE047" />
    {/* Neck */}
    <rect x="46" y="48" width="8" height="12" rx="4" fill="#FCD34D" />
    {/* Head */}
    <circle cx="50" cy="38" r="18" fill="#FDE68A" />
    {/* Hair */}
    <path d="M32 36C32 26 40 18 50 18C60 18 68 26 68 36C68 37 66 38 64 36C62 34 60 30 56 30C52 30 50 33 46 31C42 29 38 33 34 35C33 35.5 32 37 32 36Z" fill="#6B21A8" />
    {/* Cheeks */}
    <circle cx="40" cy="42" r="3.5" fill="#F472B6" fillOpacity="0.6" />
    <circle cx="60" cy="42" r="3.5" fill="#F472B6" fillOpacity="0.6" />
    {/* Eyes */}
    <ellipse cx="43" cy="36" rx="2.2" ry="3" fill="#3B1366" />
    <ellipse cx="57" cy="36" rx="2.2" ry="3" fill="#3B1366" />
    <circle cx="44" cy="35" r="1" fill="#FFFFFF" />
    <circle cx="58" cy="35" r="1" fill="#FFFFFF" />
    {/* Smile */}
    <path d="M46 42C48 45 52 45 54 42" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
    {/* Pencil in hand */}
    <g transform="translate(64, 46) rotate(25)">
      <rect x="0" y="4" width="8" height="24" rx="2" fill="#F59E0B" />
      <polygon points="0,4 8,4 4,0" fill="#EF4444" />
      <rect x="0" y="24" width="8" height="4" fill="#D97706" />
      <polygon points="0,28 8,28 4,34" fill="#1E293B" />
    </g>
  </svg>
);

// Card 2: Total Admissions (Graduation Cap & Diploma)
export const GraduationIllustration = ({ size = 70 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="#FCE7F3" />
    {/* Confetti & Stars */}
    <circle cx="22" cy="30" r="3" fill="#EC4899" />
    <circle cx="80" cy="22" r="4" fill="#F472B6" />
    <circle cx="20" cy="74" r="3" fill="#FBBF24" />
    <path d="M76 66L78 71L83 73L78 75L76 80L74 75L69 73L74 71L76 66Z" fill="#F43F5E" />
    {/* Graduation Cap */}
    <path d="M50 24L16 40L50 56L84 40L50 24Z" fill="#BE185D" />
    <path d="M50 27L22 40L50 53L78 40L50 27Z" fill="#DB2777" />
    {/* Cap Underneath */}
    <path d="M30 47V61C30 67 39 72 50 72C61 72 70 67 70 61V47L50 56L30 47Z" fill="#9D174D" />
    {/* Tassel Button & String */}
    <circle cx="50" cy="40" r="3.5" fill="#FBBF24" />
    <path d="M50 40C60 42 70 48 72 56V68" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="70" y="66" width="5" height="10" rx="1" fill="#D97706" />
    {/* Diploma Roll */}
    <g transform="translate(18, 56) rotate(-15)">
      <rect x="0" y="0" width="28" height="10" rx="5" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1.5" />
      <rect x="11" y="-1" width="6" height="12" rx="1" fill="#EF4444" />
    </g>
  </svg>
);

// Card 3: Programs (ABC Toy Blocks & Teddy/Star)
export const AbcBlocksIllustration = ({ size = 70 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="#FEF3C7" />
    {/* Block A (Yellow) */}
    <g transform="translate(20, 48)">
      <rect width="28" height="28" rx="6" fill="#F59E0B" />
      <rect x="2" y="2" width="24" height="24" rx="4" fill="#FBBF24" />
      <text x="14" y="19" textAnchor="middle" fill="#78350F" fontSize="16" fontWeight="bold" fontFamily="sans-serif">A</text>
    </g>
    {/* Block B (Pink/Red) */}
    <g transform="translate(52, 48)">
      <rect width="28" height="28" rx="6" fill="#E11D48" />
      <rect x="2" y="2" width="24" height="24" rx="4" fill="#FB7185" />
      <text x="14" y="19" textAnchor="middle" fill="#881337" fontSize="16" fontWeight="bold" fontFamily="sans-serif">B</text>
    </g>
    {/* Block C (Blue/Teal on top) */}
    <g transform="translate(36, 20)">
      <rect width="28" height="28" rx="6" fill="#0284C7" />
      <rect x="2" y="2" width="24" height="24" rx="4" fill="#38BDF8" />
      <text x="14" y="19" textAnchor="middle" fill="#082F49" fontSize="16" fontWeight="bold" fontFamily="sans-serif">C</text>
    </g>
    {/* Crayon decoration */}
    <g transform="translate(68, 22) rotate(45)">
      <rect x="0" y="0" width="8" height="20" rx="2" fill="#10B981" />
      <polygon points="0,0 8,0 4,-5" fill="#059669" />
    </g>
    <circle cx="22" cy="26" r="3" fill="#F59E0B" />
    <circle cx="82" cy="80" r="4" fill="#FBBF24" />
  </svg>
);

// Card 4: Total Enquiries (Email Envelope with Paper Plane & Heart)
export const EmailIllustration = ({ size = 70 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="#E0F2FE" />
    {/* Bubbles */}
    <circle cx="22" cy="24" r="4" fill="#7DD3FC" />
    <circle cx="80" cy="74" r="3.5" fill="#38BDF8" />
    {/* Envelope Body */}
    <rect x="22" y="38" width="56" height="38" rx="8" fill="#0284C7" />
    <path d="M22 42L50 60L78 42" stroke="#BAE6FD" strokeWidth="2.5" strokeLinejoin="round" />
    {/* Flap Open Letter */}
    <rect x="28" y="28" width="44" height="24" rx="4" fill="#FFFFFF" />
    <line x1="34" y1="35" x2="54" y2="35" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
    <line x1="34" y1="41" x2="62" y2="41" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
    {/* Envelope Front Fold */}
    <path d="M22 76L44 56" stroke="#0369A1" strokeWidth="2" />
    <path d="M78 76L56 56" stroke="#0369A1" strokeWidth="2" />
    {/* Heart Notification Badge */}
    <g transform="translate(60, 20)">
      <circle cx="10" cy="10" r="10" fill="#EF4444" />
      <path d="M10 15S5.5 12 5.5 8.5C5.5 6.5 7 5.5 8.5 5.5C9.5 5.5 10 6.5 10 6.5S10.5 5.5 11.5 5.5C13 5.5 14.5 6.5 14.5 8.5C14.5 12 10 15 10 15Z" fill="#FFFFFF" />
    </g>
  </svg>
);

// Cute Student Avatar Helper (for table & profiles)
export const KidAvatar = ({ seed = 1, size = 38 }) => {
  const bgColors = ['#EDE9FE', '#FCE7F3', '#FEF3C7', '#E0F2FE', '#DCFCE7', '#FFE4E6'];
  const skinColors = ['#FDE68A', '#FCD34D', '#FED7AA', '#FBBF24'];
  const hairColors = ['#4A154B', '#92400E', '#1E293B', '#B45309', '#6B21A8'];
  const shirtColors = ['#7C3AED', '#EC4899', '#0284C7', '#10B981', '#F59E0B', '#6366F1'];

  const bg = bgColors[seed % bgColors.length];
  const skin = skinColors[seed % skinColors.length];
  const hair = hairColors[seed % hairColors.length];
  const shirt = shirtColors[seed % shirtColors.length];

  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '50%' }}>
      <rect width="40" height="40" rx="20" fill={bg} />
      {/* Shirt */}
      <circle cx="20" cy="38" r="14" fill={shirt} />
      {/* Head */}
      <circle cx="20" cy="18" r="9" fill={skin} />
      {/* Hair */}
      <path d="M11 17C11 12 15 8 20 8C25 8 29 12 29 17C29 17.5 28 17.5 27 16.5C25 14.5 23 15 20 15C17 15 15 14.5 13 16.5C12 17.5 11 17.5 11 17Z" fill={hair} />
      {/* Eyes */}
      <circle cx="17" cy="18" r="1.2" fill="#1E293B" />
      <circle cx="23" cy="18" r="1.2" fill="#1E293B" />
      {/* Smile */}
      <path d="M18 21C19 22.5 21 22.5 22 21" stroke="#92400E" strokeWidth="1" strokeLinecap="round" />
      {/* Rosy cheeks */}
      <circle cx="15.5" cy="20" r="1.2" fill="#F472B6" fillOpacity="0.7" />
      <circle cx="24.5" cy="20" r="1.2" fill="#F472B6" fillOpacity="0.7" />
    </svg>
  );
};
