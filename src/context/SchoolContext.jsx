import React, { createContext, useContext, useState, useEffect } from 'react';

const SchoolContext = createContext();

export const SchoolProvider = ({ children }) => {
  // Mobile / Desktop Sidebar Collapse State
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Active Admin Profile
  const [currentUser, setCurrentUser] = useState({
    name: 'Mrs. Sunita Sharma',
    role: 'Principal & Super Admin',
    email: 'admin@littlechamps.edu',
    avatar: '👩‍🏫',
    schoolName: 'Little Champs Kids School',
    academicYear: '2026-2027'
  });

  // Dynamic Statistics
  const [stats, setStats] = useState({
    totalStudents: 5280,
    studentsGrowth: 12,
    totalAdmissions: 1240,
    admissionsGrowth: 8,
    totalPrograms: 5,
    programsGrowth: 0,
    totalEnquiries: 268,
    enquiriesGrowth: 15
  });

  // Recent Admissions & Student records
  const initialAdmissions = [
    {
      id: 1,
      name: 'Aarav Patel',
      rollNo: 'LC-2026-081',
      class: 'Nursery',
      section: 'Butterflies',
      parentName: 'Rajesh & Meera Patel',
      parentPhone: '+91 98765 43210',
      parentEmail: 'rajesh.patel@gmail.com',
      date: '18 Nov 2026',
      status: 'Approved',
      gender: 'Boy',
      age: '3.2 Yrs',
      bloodGroup: 'B+',
      address: 'Plot 42, Sunrise Enclave, Green Park',
      notes: 'Loves finger painting and musical rhymes. Allergic to peanuts.'
    },
    {
      id: 2,
      name: 'Ananya Verma',
      rollNo: 'LC-2026-082',
      class: 'Junior KG',
      section: 'Little Stars',
      parentName: 'Vikram & Pooja Verma',
      parentPhone: '+91 98111 22334',
      parentEmail: 'pooja.verma@yahoo.com',
      date: '17 Nov 2026',
      status: 'Approved',
      gender: 'Girl',
      age: '4.1 Yrs',
      bloodGroup: 'O+',
      address: 'B-12, Royal Palms Society',
      notes: 'Very communicative, speaks fluent English and Hindi.'
    },
    {
      id: 3,
      name: 'Reyansh Patel',
      rollNo: 'LC-2026-083',
      class: 'Playgroup',
      section: 'Tiny Tots',
      parentName: 'Sanjay & Divya Patel',
      parentPhone: '+91 99887 76655',
      parentEmail: 'divya.p@outlook.com',
      date: '16 Nov 2026',
      status: 'Pending',
      gender: 'Boy',
      age: '2.4 Yrs',
      bloodGroup: 'A+',
      address: '74, Blossom Avenue',
      notes: 'First time joining preschool. Needs mother presence on Day 1.'
    },
    {
      id: 4,
      name: 'Myra Kapoor',
      rollNo: 'LC-2026-084',
      class: 'Senior KG',
      section: 'Rainbow Champs',
      parentName: 'Karan & Ritu Kapoor',
      parentPhone: '+91 98223 34455',
      parentEmail: 'karan.kapoor@gmail.com',
      date: '15 Nov 2026',
      status: 'Approved',
      gender: 'Girl',
      age: '5.2 Yrs',
      bloodGroup: 'AB+',
      address: 'Flat 502, Golden Heights',
      notes: 'Participates actively in storytelling and clay modelling.'
    },
    {
      id: 5,
      name: 'Vivaan Gupta',
      rollNo: 'LC-2026-085',
      class: 'Nursery',
      section: 'Butterflies',
      parentName: 'Amit & Neha Gupta',
      parentPhone: '+91 97654 32190',
      parentEmail: 'amit.gupta@corp.in',
      date: '14 Nov 2026',
      status: 'Pending',
      gender: 'Boy',
      age: '3.4 Yrs',
      bloodGroup: 'O-',
      address: 'C-301, Silver Crest Residency',
      notes: 'Requested school bus pickup on Route #2.'
    },
    {
      id: 6,
      name: 'Sara Khan',
      rollNo: 'LC-2026-086',
      class: 'Day Care',
      section: 'Sunshine Room',
      parentName: 'Tariq & Fatima Khan',
      parentPhone: '+91 98333 44556',
      parentEmail: 'fatima.khan@gmail.com',
      date: '12 Nov 2026',
      status: 'Approved',
      gender: 'Girl',
      age: '2.8 Yrs',
      bloodGroup: 'A+',
      address: '15, Maplewood Gardens',
      notes: 'Full day session 9:00 AM - 5:30 PM with evening fruit snack.'
    },
    {
      id: 7,
      name: 'Advait Joshi',
      rollNo: 'LC-2026-087',
      class: 'Junior KG',
      section: 'Little Stars',
      parentName: 'Nitin & Shweta Joshi',
      parentPhone: '+91 98450 12345',
      parentEmail: 'shweta.joshi@gmail.com',
      date: '10 Nov 2026',
      status: 'Pending',
      gender: 'Boy',
      age: '4.0 Yrs',
      bloodGroup: 'B-',
      address: 'A-22, Orchid Greens',
      notes: 'Awaiting birth certificate submission from parent.'
    },
    {
      id: 8,
      name: 'Ishaan Nair',
      rollNo: 'LC-2026-088',
      class: 'Senior KG',
      section: 'Rainbow Champs',
      parentName: 'Manoj & Priya Nair',
      parentPhone: '+91 98711 00223',
      parentEmail: 'priya.nair@infosys.com',
      date: '08 Nov 2026',
      status: 'Approved',
      gender: 'Boy',
      age: '5.0 Yrs',
      bloodGroup: 'O+',
      address: 'Villa 18, Palm Meadows',
      notes: 'Fast learner, interested in abacus and phonics.'
    }
  ];

  const [admissions, setAdmissions] = useState(() => {
    const saved = localStorage.getItem('little_champs_admissions');
    return saved ? JSON.parse(saved) : initialAdmissions;
  });

  useEffect(() => {
    localStorage.setItem('little_champs_admissions', JSON.stringify(admissions));
  }, [admissions]);

  // Programs Data
  const initialPrograms = [
    {
      id: 'playgroup',
      name: 'Playgroup',
      tagline: 'Sensory Explorers & Early Curiosity',
      ageRange: '1.5 - 2.5 Years',
      timing: '9:00 AM - 11:30 AM',
      color: '#8B5CF6',
      badgeBg: '#EDE9FE',
      icon: '🎨',
      totalSeats: 60,
      enrolled: 54,
      fee: '$140 / mo',
      description: 'Hands-on sensory play, color recognition, rhythm movement, and social development in a safe, colorful environment.',
      curriculum: ['Sensory Activities', 'Rhymes & Music', 'Motor Skills', 'Social Play'],
      leadTeacher: 'Ms. Shalini Roy'
    },
    {
      id: 'nursery',
      name: 'Nursery',
      tagline: 'Letters, Sounds & Story Explorations',
      ageRange: '2.5 - 3.5 Years',
      timing: '8:45 AM - 12:00 PM',
      color: '#EC4899',
      badgeBg: '#FCE7F3',
      icon: '🧸',
      totalSeats: 80,
      enrolled: 76,
      fee: '$160 / mo',
      description: 'Building early phonics vocabulary, pre-writing pencil grip, numbers counting 1 to 20, and imaginative free play.',
      curriculum: ['Phonics Fun', 'Number Concept', 'Creative Arts', 'Physical Fitness'],
      leadTeacher: 'Ms. Radhika Nair'
    },
    {
      id: 'junior-kg',
      name: 'Junior KG (LKG)',
      tagline: 'Critical Thinking & Creative Discovery',
      ageRange: '3.5 - 4.5 Years',
      timing: '8:30 AM - 12:30 PM',
      color: '#F59E0B',
      badgeBg: '#FEF3C7',
      icon: '🧩',
      totalSeats: 90,
      enrolled: 88,
      fee: '$180 / mo',
      description: 'Structured literacy, emergent reading, sight words, basic math addition concepts, science nature experiments.',
      curriculum: ['Sight Words', 'Simple Math', 'World Around Us', 'Yoga & Dance'],
      leadTeacher: 'Ms. Kavita Saxena'
    },
    {
      id: 'senior-kg',
      name: 'Senior KG (UKG)',
      tagline: 'School Readiness & Confident Expressions',
      ageRange: '4.5 - 5.5 Years',
      timing: '8:30 AM - 1:00 PM',
      color: '#0284C7',
      badgeBg: '#E0F2FE',
      icon: '🚀',
      totalSeats: 90,
      enrolled: 86,
      fee: '$200 / mo',
      description: 'Preparing children seamlessly for Grade 1. Advanced sentence construction, word problems, coding basics & public speaking.',
      curriculum: ['Sentence Writing', 'Mental Math', 'Robotics & STEM', 'Public Speaking'],
      leadTeacher: 'Mr. Arvind Joseph'
    },
    {
      id: 'daycare',
      name: 'Daycare & Creche',
      tagline: 'Safe, Warm & Loving Second Home',
      ageRange: '1.0 - 8.0 Years',
      timing: '8:00 AM - 6:30 PM',
      color: '#10B981',
      badgeBg: '#DCFCE7',
      icon: '🎈',
      totalSeats: 50,
      enrolled: 42,
      fee: '$220 / mo',
      description: 'Nutritious chef-prepared warm meals, guided nap times, homework help, outdoor sandbox playtime, and CCTV live feed.',
      curriculum: ['Organic Meals', 'Guided Sleep', 'Outdoor Sports', 'Story Sessions'],
      leadTeacher: 'Mrs. Mary D’Souza'
    }
  ];
  const [programs] = useState(initialPrograms);

  // Gallery Photos
  const initialGallery = [
    {
      id: 1,
      title: 'Annual Sports Day 2026',
      category: 'Sports Day',
      date: '15 Nov 2026',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=700&q=80',
      caption: 'Little champions racing with balloon hops and cheering smiles!'
    },
    {
      id: 2,
      title: 'Little Champs Art & Clay Festival',
      category: 'Art & Craft',
      date: '10 Nov 2026',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=80',
      caption: 'Creative pottery, fingerprinting trees, and vibrant rainbow canvases.'
    },
    {
      id: 3,
      title: 'Storytelling Circle & Puppet Show',
      category: 'Classroom Fun',
      date: '05 Nov 2026',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80',
      caption: 'Listening to fairy tales with live sock puppets and whimsical characters.'
    },
    {
      id: 4,
      title: 'Junior Science & Nature Explorers',
      category: 'Science Fair',
      date: '28 Oct 2026',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=700&q=80',
      caption: 'Exploring sprouting beans, magnifying glasses, and water density boats.'
    },
    {
      id: 5,
      title: 'Halloween & Fancy Dress Costume Carnival',
      category: 'Annual Fest',
      date: '24 Oct 2026',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80',
      caption: 'Superheroes, butterflies, little astronauts, and fairy tale princesses.'
    },
    {
      id: 6,
      title: 'Music & Rhythm Jam Session',
      category: 'Classroom Fun',
      date: '18 Oct 2026',
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80',
      caption: 'Little drummers, xylophone melodies, and energetic morning dancing.'
    }
  ];

  const [gallery, setGallery] = useState(() => {
    const saved = localStorage.getItem('little_champs_gallery');
    return saved ? JSON.parse(saved) : initialGallery;
  });

  useEffect(() => {
    localStorage.setItem('little_champs_gallery', JSON.stringify(gallery));
  }, [gallery]);

  // Parent Enquiries
  const initialEnquiries = [
    {
      id: 1,
      parentName: 'Mrs. Priyanka Nair',
      email: 'priyanka.nair@hotmail.com',
      phone: '+91 98451 90812',
      childName: 'Aryan Nair (Age 2.2)',
      programInterested: 'Playgroup & Daycare',
      subject: 'Inquiry regarding Daycare timings & organic food options',
      message: 'Hello, we are relocating to the locality and wish to understand your toddler daycare batch sizes and if you provide morning and evening meals.',
      date: '18 Nov 2026, 11:20 AM',
      status: 'New'
    },
    {
      id: 2,
      parentName: 'Dr. Rohan Mehra',
      email: 'dr.rohan@apollo.com',
      phone: '+91 98200 45678',
      childName: 'Devansh Mehra (Age 4.0)',
      programInterested: 'Junior KG',
      subject: 'Admission criteria for 2026-27 Mid-term intake',
      message: 'We are looking for admission in Junior KG. Is bus transport available on Sector 14 route? Can we book a campus tour this Saturday?',
      date: '17 Nov 2026, 03:45 PM',
      status: 'Contacted'
    },
    {
      id: 3,
      parentName: 'Sneha Kulkarni',
      email: 'sneha.k@gmail.com',
      phone: '+91 97665 11223',
      childName: 'Avani Kulkarni (Age 3.1)',
      programInterested: 'Nursery',
      subject: 'Fee installment structure & scholarship enquiry',
      message: 'Please send across the brochure and fee payment terms for Nursery. Thanks!',
      date: '16 Nov 2026, 10:15 AM',
      status: 'In Progress'
    },
    {
      id: 4,
      parentName: 'Farhan Siddiqui',
      email: 'farhan.s@gmail.com',
      phone: '+91 99100 88776',
      childName: 'Zain Siddiqui (Age 5.1)',
      programInterested: 'Senior KG',
      subject: 'Transfer certificate from previous kindergarten',
      message: 'My son is currently in LKG at Sunshine Academy. Seeking direct admission into UKG for next term.',
      date: '15 Nov 2026, 01:30 PM',
      status: 'Enrolled'
    }
  ];

  const [enquiries, setEnquiries] = useState(() => {
    const saved = localStorage.getItem('little_champs_enquiries');
    return saved ? JSON.parse(saved) : initialEnquiries;
  });

  useEffect(() => {
    localStorage.setItem('little_champs_enquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  // Recent Activities Timeline
  const initialActivities = [
    {
      id: 1,
      title: 'New admission received',
      desc: 'Aarav Patel enrolled into Nursery (Butterflies section)',
      time: '2 hours ago',
      type: 'admission',
      iconColor: '#7C3AED',
      badgeBg: '#EDE9FE'
    },
    {
      id: 2,
      title: 'Gallery image added',
      desc: 'Annual Sports Day 2026 high-resolution album updated',
      time: '3 hours ago',
      type: 'gallery',
      iconColor: '#EC4899',
      badgeBg: '#FCE7F3'
    },
    {
      id: 3,
      title: 'Contact enquiry from parent',
      desc: 'Priya Sharma inquired regarding Daycare meal plans & timings',
      time: '4 hours ago',
      type: 'enquiry',
      iconColor: '#0284C7',
      badgeBg: '#E0F2FE'
    },
    {
      id: 4,
      title: 'Student profile updated',
      desc: 'Medical emergency contact updated for Kabir Mehta',
      time: '5 hours ago',
      type: 'update',
      iconColor: '#F59E0B',
      badgeBg: '#FEF3C7'
    }
  ];

  const [activities, setActivities] = useState(initialActivities);

  // Notifications
  const initialNotifications = [
    {
      id: 1,
      title: 'New Admission Application',
      message: 'Reyansh Patel registered for Playgroup',
      time: '15 mins ago',
      unread: true,
      category: 'admission'
    },
    {
      id: 2,
      title: 'Parent Inquiry Received',
      message: 'Mrs. Priyanka Nair requested campus tour',
      time: '1 hour ago',
      unread: true,
      category: 'enquiry'
    },
    {
      id: 3,
      title: 'Fee Payment Verified',
      message: 'Ananya Verma term fee received successfully',
      time: '2 hours ago',
      unread: true,
      category: 'finance'
    },
    {
      id: 4,
      title: 'Bus Route Alert',
      message: 'Route #4 driver checked-in for afternoon drop',
      time: '3 hours ago',
      unread: false,
      category: 'transport'
    }
  ];

  const [notifications, setNotifications] = useState(initialNotifications);

  // Active Modals & Selected items
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentModalOpen, setStudentModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const [addStudentModalOpen, setAddStudentModalOpen] = useState(false);
  const [uploadPhotoModalOpen, setUploadPhotoModalOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  // Search Query
  const [searchQuery, setSearchQuery] = useState('');

  // Actions
  const addStudent = (studentData) => {
    const newStudent = {
      ...studentData,
      id: Date.now(),
      rollNo: `LC-2026-0${admissions.length + 85}`,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: studentData.status || 'Pending'
    };
    setAdmissions([newStudent, ...admissions]);
    setStats(prev => ({
      ...prev,
      totalStudents: prev.totalStudents + 1,
      totalAdmissions: prev.totalAdmissions + 1
    }));
    // Add to activity timeline
    setActivities(prev => [
      {
        id: Date.now(),
        title: 'New admission received',
        desc: `${newStudent.name} registered for ${newStudent.class}`,
        time: 'Just now',
        type: 'admission',
        iconColor: '#7C3AED',
        badgeBg: '#EDE9FE'
      },
      ...prev
    ]);
  };

  const deleteStudent = (id) => {
    const student = admissions.find(s => s.id === id);
    setAdmissions(prev => prev.filter(s => s.id !== id));
    if (student) {
      setStats(prev => ({
        ...prev,
        totalStudents: Math.max(0, prev.totalStudents - 1)
      }));
    }
    setDeleteModalOpen(false);
    setStudentToDelete(null);
  };

  const updateStudentStatus = (id, newStatus) => {
    setAdmissions(prev =>
      prev.map(s => (s.id === id ? { ...s, status: newStatus } : s))
    );
  };

  const addGalleryPhoto = (photoData) => {
    const newPhoto = {
      ...photoData,
      id: Date.now(),
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    };
    setGallery([newPhoto, ...gallery]);
    setActivities(prev => [
      {
        id: Date.now(),
        title: 'Gallery image added',
        desc: `New photo added to ${newPhoto.category}: ${newPhoto.title}`,
        time: 'Just now',
        type: 'gallery',
        iconColor: '#EC4899',
        badgeBg: '#FCE7F3'
      },
      ...prev
    ]);
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const addEnquiry = (enquiryData) => {
    const newEnquiry = {
      ...enquiryData,
      id: Date.now(),
      date: new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      status: 'New'
    };
    setEnquiries([newEnquiry, ...enquiries]);
    setStats(prev => ({
      ...prev,
      totalEnquiries: prev.totalEnquiries + 1
    }));
    setActivities(prev => [
      {
        id: Date.now(),
        title: 'Contact enquiry from parent',
        desc: `${newEnquiry.parentName} inquired about ${newEnquiry.programInterested}`,
        time: 'Just now',
        type: 'enquiry',
        iconColor: '#0284C7',
        badgeBg: '#E0F2FE'
      },
      ...prev
    ]);
  };

  const updateEnquiryStatus = (id, newStatus) => {
    setEnquiries(prev =>
      prev.map(e => (e.id === id ? { ...e, status: newStatus } : e))
    );
  };

  return (
    <SchoolContext.Provider
      value={{
        sidebarCollapsed,
        setSidebarCollapsed,
        mobileSidebarOpen,
        setMobileSidebarOpen,
        currentUser,
        setCurrentUser,
        stats,
        setStats,
        admissions,
        setAdmissions,
        programs,
        gallery,
        setGallery,
        enquiries,
        setEnquiries,
        activities,
        setActivities,
        notifications,
        setNotifications,
        selectedStudent,
        setSelectedStudent,
        studentModalOpen,
        setStudentModalOpen,
        deleteModalOpen,
        setDeleteModalOpen,
        studentToDelete,
        setStudentToDelete,
        addStudentModalOpen,
        setAddStudentModalOpen,
        uploadPhotoModalOpen,
        setUploadPhotoModalOpen,
        notificationDropdownOpen,
        setNotificationDropdownOpen,
        userDropdownOpen,
        setUserDropdownOpen,
        searchQuery,
        setSearchQuery,
        addStudent,
        deleteStudent,
        updateStudentStatus,
        addGalleryPhoto,
        markAllNotificationsAsRead,
        addEnquiry,
        updateEnquiryStatus
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => useContext(SchoolContext);
