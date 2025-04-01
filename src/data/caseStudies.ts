
import { CaseStudyProps } from "../components/CaseStudyCard";

export const caseStudies: CaseStudyProps[] = [
  {
    id: "oceanview-towers",
    title: "OceanView Towers: Digital Marketing Transformation",
    description: "How we helped a luxury real estate developer achieve 230% ROI through integrated digital marketing.",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000",
    results: [
      {
        label: "ROI Increase",
        value: "230%"
      },
      {
        label: "Lead Quality",
        value: "↑ 85%"
      },
      {
        label: "Cost Per Lead",
        value: "↓ 40%"
      },
      {
        label: "Sales Velocity",
        value: "↑ 67%"
      }
    ]
  },
  {
    id: "horizon-residences",
    title: "Horizon Residences: Marketing Automation Implementation",
    description: "Implementing AI-driven marketing automation to streamline the sales process for a mid-size developer.",
    category: "Marketing Automation",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
    results: [
      {
        label: "Leads Generated",
        value: "3,500+"
      },
      {
        label: "Conversion Rate",
        value: "↑ 150%"
      },
      {
        label: "Response Time",
        value: "↓ 93%"
      },
      {
        label: "Sales Team Size",
        value: "↓ 30%"
      }
    ]
  },
  {
    id: "green-valley-estates",
    title: "Green Valley Estates: Conversion Funnel Optimization",
    description: "Creating a multi-step conversion funnel that transformed site visitors into qualified buyers.",
    category: "Conversion Funnels",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    results: [
      {
        label: "Conversion Rate",
        value: "↑ 215%"
      },
      {
        label: "Sales Cycle",
        value: "↓ 45%"
      },
      {
        label: "Site Visits",
        value: "↑ 180%"
      },
      {
        label: "Revenue",
        value: "↑ 320%"
      }
    ]
  },
  {
    id: "urban-skyline",
    title: "Urban Skyline: Email Marketing & Nurturing",
    description: "Developing personalized email sequences that nurture leads from interest to purchase.",
    category: "Email Marketing",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1000",
    results: [
      {
        label: "Open Rate",
        value: "65%"
      },
      {
        label: "Click Rate",
        value: "28%"
      },
      {
        label: "Response Rate",
        value: "↑ 190%"
      },
      {
        label: "Revenue",
        value: "$4.2M"
      }
    ]
  },
  {
    id: "golden-bay-villas",
    title: "Golden Bay Villas: AI Chatbot Implementation",
    description: "Implementing 24/7 AI chat solutions that qualify leads and book appointments automatically.",
    category: "AI & Automation",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1000",
    results: [
      {
        label: "Lead Capture",
        value: "↑ 90%"
      },
      {
        label: "After-Hours Conversions",
        value: "↑ 240%"
      },
      {
        label: "Response Time",
        value: "< 1 sec"
      },
      {
        label: "Customer Satisfaction",
        value: "94%"
      }
    ]
  },
  {
    id: "skyline-residences",
    title: "Skyline Residences: Broker & Investor Engagement",
    description: "Building and nurturing powerful relationships with key stakeholders through targeted programs.",
    category: "Stakeholder Engagement",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1000",
    results: [
      {
        label: "Broker Referrals",
        value: "↑ 170%"
      },
      {
        label: "Investor Retention",
        value: "92%"
      },
      {
        label: "Repeat Investment",
        value: "↑ 85%"
      },
      {
        label: "Network Growth",
        value: "↑ 310%"
      }
    ]
  }
];

export const getCaseStudyById = (id: string): CaseStudyProps | undefined => {
  return caseStudies.find(study => study.id === id);
};
