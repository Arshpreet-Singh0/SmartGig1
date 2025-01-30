export interface FreelancerProfile {
    // Personal Information
    name : string;
    location: string;
    about: string;
    role : string;
    
    // Professional Details
    skills: string[];
    yearsOfExperience: number;
    
    // Education
    education: {
      degree: string;
      institution: string;
      startYear : string;
      endYear : string;
    }[];
    
    // Work Experience
    experience: {
      title: string;
      company: string;
      startDate: string;
      endDate: string;
      description: string;
    }[];
    
    // Rate and Availability
    hourlyRate: number;
    availability: 'full-time' | 'part-time' | 'contract';
  }