import Navbar from '$lib/components/Navbar/Navbar';
import { AlertCircle, Database, Eye, FileCheck, Lock, Shield, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const PrivacyPolicyPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const privacyData = [
    {
      id: 1,
      icon: <FileCheck className="w-5 h-5" />,
      title: "Introduction",
      content: [
        'This Privacy Policy explains how GP ("we", "our", "us") collects, uses, stores, and protects your personal information when you use our gaming platform, in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act), the Information Technology Act, 2000, and the Indian Constitution (Right to Privacy under Article 21).',
        "By using our services, you agree to this Privacy Policy."
      ]
    },
    {
      id: 2,
      icon: <Database className="w-5 h-5" />,
      title: "Information We Collect",
      content: [
        "We may collect the following information:",
        "Personal Information: Name, email ID, phone number and date of birth.",
        "Gameplay Information: Scores, achievements, game history, preferences.",
        "Device & Technical Data: IP address, browser, operating system, device ID, cookies.",
        "Payment Information: UPI, card details, or wallet information (processed securely via RBI-compliant payment gateways).",
        "Parental Consent Data: For users under 18, we may request guardian details."
      ]
    },
    {
      id: 3,
      icon: <Eye className="w-5 h-5" />,
      title: "Purpose of Data Collection",
      content: [
        "We collect your data to:",
        "• Provide access to games and improve your gaming experience.",
        "• Prevent cheating, fraud, or illegal activity (IT Act Sec. 66D, 66F).",
        "• Process payments and manage transactions.",
        "• Send you service-related updates and offers (with your consent).",
        "• Comply with Indian legal requirements."
      ]
    },
    {
      id: 4,
      icon: <Shield className="w-5 h-5" />,
      title: "Data Protection & Security",
      content: [
        "We use encryption, firewalls, and secure servers to protect user data.",
        "Sensitive payment data is handled only by PCI-DSS & RBI-compliant payment partners.",
        "In case of a data breach, we will notify users and authorities as per CERT-In Guidelines (2022)."
      ]
    },
    {
      id: 5,
      icon: <Users className="w-5 h-5" />,
      title: "Data Sharing",
      content: [
        "We do not sell your personal data.",
        "We may share data only with:",
        "• Legal authorities if required by law (IT Act Sec. 69 – lawful interception).",
        "• Third-party service providers (e.g., payment gateways, analytics tools) – only with minimum required data."
      ]
    },
    {
      id: 6,
      icon: <Lock className="w-5 h-5" />,
      title: "User Rights (DPDP Act, 2023)",
      content: [
        "As a user, you have the right to:",
        "• Access your personal data.",
        "• Correct or update inaccurate data.",
        "• Withdraw consent for data processing.",
        "• Request deletion of your data (unless retention required by law).",
        "• File grievances with our Grievance Officer."
      ]
    },
    {
      id: 7,
      icon: <Users className="w-5 h-5" />,
      title: "Children's Privacy",
      content: [
        "Users under 18 years must have parental/guardian consent.",
        "We do not knowingly collect data from children without such consent."
      ]
    },
    {
      id: 8,
      icon: <Eye className="w-5 h-5" />,
      title: "Cookies & Tracking",
      content: [
        "We may use cookies to improve gameplay experience, save preferences, and show relevant content.",
        "You can disable cookies, but some features may not work properly."
      ]
    },
    {
      id: 9,
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Grievance Redressal",
      content: [
        "As per IT Rules 2021, a Grievance Officer is appointed to address complaints.",
        "Contact: grievance@GP.in",
        "Complaints acknowledged in 24 hours, resolved within 15 days."
      ]
    },
    {
      id: 10,
      icon: <FileCheck className="w-5 h-5" />,
      title: "Governing Law",
      content: [
        "This Privacy Policy is governed by:",
        "• DPDP Act 2023 (data rights & consent)",
        "• IT Act 2000 & IT Rules 2021 (data security, grievance handling)",
        "• Indian Constitution (Article 21 – Right to Privacy)"
      ]
    },
    {
      id: 11,
      icon: <FileCheck className="w-5 h-5" />,
      title: "Changes to Policy",
      content: [
        "We may update this Privacy Policy from time to time. Users will be notified of major changes."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-800 via-purple-500 to-white z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/3 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/4 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.08) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </div>

      <Navbar />

      <div className="container mx-auto px-4 py-36 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-black/30 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold tracking-wide mb-8">
            <Shield className="w-4 h-4" />
            [ PRIVACY FRAMEWORK ]
          </div>
          
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white tracking-widest mb-8 leading-none"
            style={{
              fontFamily: 'Saira Extra Condensed, sans-serif',
              textShadow: '0 0 40px rgba(147, 51, 234, 0.3)',
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))'
            }}
          >
            PRIVACY<br />POLICY
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            Comprehensive data protection guidelines for our{' '}
            <span className="text-white font-medium">gaming platform</span>
          </p>
        </div>

        {/* Single Privacy Policy Card */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12 relative overflow-hidden">
            {/* Corner decorative elements */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-purple-500/60" />
            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-purple-500/60" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-purple-500/60" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-purple-500/60" />

            <div className="relative z-10 space-y-12">
              {privacyData.map((section) => (
                <div key={section.id} className="border-b border-white/10 pb-8 last:border-b-0 last:pb-0">
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-black/60 backdrop-blur-sm border border-purple-500/40 text-purple-300">
                      {section.icon}
                    </div>
                    <div>
                      <div className="text-xs text-purple-400 font-bold tracking-widest mb-1">
                        SECTION {section.id.toString().padStart(2, '0')}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                        {section.title}
                      </h3>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="ml-16 space-y-3">
                    {section.content.map((paragraph, pIndex) => (
                      <p 
                        key={pIndex} 
                        className="text-gray-300 text-sm md:text-base leading-relaxed font-light"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/5 pointer-events-none" />
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center py-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-sm border border-purple-500/40 text-purple-300 text-sm font-bold tracking-wider">
              <Shield className="w-4 h-4" />
              DPDP ACT 2023 COMPLIANT
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Your privacy is our priority. We are committed to protecting your data in accordance with Indian privacy laws.
              <br />
              For any privacy concerns, contact our{' '}
              <span className="text-purple-300 font-semibold">Data Protection Officer</span> or{' '}
              <span className="text-purple-300 font-semibold">Grievance Officer</span>.
            </p>
            
            <div className="text-sm text-gray-500 tracking-wide">
              Last Updated: {new Date().toLocaleDateString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-32 right-1/3 w-1 h-1 bg-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;