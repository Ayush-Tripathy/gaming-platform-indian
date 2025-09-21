import { Button } from '$lib/components/ui/button';
import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, Bell, FileText, Lock, Menu, Play, Scale, Search, Shield, User, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigation } from 'src/navigation/NavigationContext';

const LegalPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const { goto } = useNavigation()

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const termsData = [
    {
      id: 1,
      icon: <Users className="w-5 h-5" />,
      title: "Your Account",
      content: [
        "You must register using true and accurate information.",
        "Accounts are personal, non-transferable and may not be sold or leased.",
        "If under 18, consent from a parent/guardian is mandatory (as per IT Act 2000, Sec. 11 read with Indian Contract Act 1872)."
      ]
    },
    {
      id: 2,
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Account Termination & Suspension",
      content: [
        "We reserve the right to suspend or terminate your account for:",
        "• Violation of Terms of Service",
        "• Involvement in fraud, money laundering, or illegal activity (IT Act Sec. 66D – cheating by personation, Sec. 66F – cyber terrorism)",
        "• Abusive or offensive behavior against other users",
        "Termination may result in loss of in-game assets and virtual currency."
      ]
    },
    {
      id: 3,
      icon: <FileText className="w-5 h-5" />,
      title: "License to Use",
      content: [
        "You are granted a limited, non-exclusive, revocable license to access and use the Platform for entertainment purposes.",
        "No reverse engineering, copying, or commercial exploitation allowed (Copyright Act, 1957)."
      ]
    },
    {
      id: 4,
      icon: <Shield className="w-5 h-5" />,
      title: "Virtual Goods, Game Currency & Purchases",
      content: [
        "Virtual goods and in-game currency have no monetary value outside the Platform.",
        "All purchases are final and non-refundable, except as required under Consumer Protection Act, 2019.",
        "Payments processed in compliance with RBI guidelines & IT Act 2000 Sec. 43A (data security in financial transactions)."
      ]
    },
    {
      id: 5,
      icon: <Scale className="w-5 h-5" />,
      title: "Fees & Taxes",
      content: [
        "All transactions include applicable GST and other Indian taxes.",
        "Users are responsible for any charges imposed by their payment providers."
      ]
    },
    {
      id: 6,
      icon: <Users className="w-5 h-5" />,
      title: "User Conduct Rules",
      content: [
        "Users must not:",
        "• Post or share obscene, defamatory, or unlawful material (IT Act Sec. 67)",
        "• Promote hate speech or violence (restricted under Article 19(2) of Constitution)",
        "• Cheat, exploit bugs, or use unauthorized software (violates Sec. 65 – tampering with computer source code)",
        "Respect for other users is mandatory (aligned with Article 14 – Right to Equality)."
      ]
    },
    {
      id: 7,
      icon: <FileText className="w-5 h-5" />,
      title: "User-Generated Content",
      content: [
        "You retain rights over your content, but grant us a license to use, display, and distribute it on the Platform.",
        "Prohibited: obscene, harmful, infringing, or misleading content."
      ]
    },
    {
      id: 8,
      icon: <Shield className="w-5 h-5" />,
      title: "Monitoring & Anti-Cheat",
      content: [
        "Platform may use anti-cheat tools and monitoring systems to detect unfair practices.",
        "Data may be shared with authorities in compliance with IT Act Sec. 69 (lawful interception) & CERT-In directions (2022)."
      ]
    },
    {
      id: 9,
      icon: <ArrowRight className="w-5 h-5" />,
      title: "Updates & Modifications",
      content: [
        "We may update the Platform, including rules, features, and terms, to comply with future Indian laws and improve services."
      ]
    },
    {
      id: 10,
      icon: <FileText className="w-5 h-5" />,
      title: "Third-Party Services & Links",
      content: [
        "Platform may provide links to payment gateways, advertisers, or third-party services.",
        "We are not liable for their actions or privacy policies."
      ]
    },
    {
      id: 11,
      icon: <Lock className="w-5 h-5" />,
      title: "Intellectual Property Rights",
      content: [
        "All Platform content, games, software, and branding are protected under Copyright Act 1957 & Trademarks Act 1999.",
        "Users may not copy, distribute, or commercially exploit without consent."
      ]
    },
    {
      id: 12,
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Notice & Copyright Infringement",
      content: [
        "Users may report copyright violations under Sec. 51 of Copyright Act 1957.",
        "A Copyright Grievance Officer will handle takedown requests under IT Rules, 2021."
      ]
    },
    {
      id: 13,
      icon: <Shield className="w-5 h-5" />,
      title: "Warranty Disclaimer",
      content: [
        "Services are provided \"as is\" without any warranty.",
        "We do not guarantee uninterrupted or error-free operation."
      ]
    },
    {
      id: 14,
      icon: <Scale className="w-5 h-5" />,
      title: "Limitation of Liability",
      content: [
        "We are not liable for:",
        "• Data loss, service downtime, or hacking (Sec. 43 – compensation for damage to computer system)",
        "• Unauthorized transactions caused by user negligence",
        "• Any indirect, incidental, or consequential damages"
      ]
    },
    {
      id: 15,
      icon: <Scale className="w-5 h-5" />,
      title: "Governing Law",
      content: [
        "These Terms are governed by:",
        "• Indian Constitution (Art. 14, 19, 21)",
        "• IT Act 2000",
        "• DPDP Act 2023",
        "• Consumer Protection Act 2019",
        "Any disputes fall under the jurisdiction of Indian courts."
      ]
    },
    {
      id: 16,
      icon: <Scale className="w-5 h-5" />,
      title: "Dispute Resolution",
      content: [
        "Disputes first resolved via internal grievance redressal.",
        "If unresolved, then arbitration under the Arbitration & Conciliation Act, 1996.",
        "Venue: India."
      ]
    },
    {
      id: 17,
      icon: <Lock className="w-5 h-5" />,
      title: "Privacy & Data Protection",
      content: [
        "We collect only necessary data with user consent (DPDP Act, 2023).",
        "Data stored securely, not sold to third parties.",
        "User rights under DPDP Act: access, correction, withdrawal of consent, and deletion requests.",
        "Sensitive data (like Aadhaar, PAN) not collected unless required by law."
      ]
    },
    {
      id: 18,
      icon: <Users className="w-5 h-5" />,
      title: "Grievance Redressal Mechanism",
      content: [
        "A Grievance Officer (as per IT Rules, 2021) will be appointed.",
        "Contact: grievance@[platform].in",
        "Complaints will be acknowledged within 24 hours and resolved within 15 days."
      ]
    },
    {
      id: 19,
      icon: <FileText className="w-5 h-5" />,
      title: "Miscellaneous",
      content: [
        "If any provision is found invalid, remaining clauses remain enforceable.",
        "Platform reserves right to amend Terms as required by future Indian laws."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black text-white relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-800 via-purple-500 to-white z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </div>

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center shadow-lg border border-white/10">
                <Play className="w-7 h-7 text-white" />
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#games"
                className="text-white hover:text-white transition-all duration-300 font-semibold text-sm uppercase tracking-wide hover:scale-105 transform relative group"
              >
                Games
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#tournaments"
                className="text-white hover:text-white transition-all duration-300 font-semibold text-sm uppercase tracking-wide hover:scale-105 transform relative group"
              >
                Tournaments
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#events"
                className="text-white hover:text-white transition-all duration-300 font-semibold text-sm uppercase tracking-wide hover:scale-105 transform relative group"
              >
                Events
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#community"
                className="text-white hover:text-white transition-all duration-300 font-semibold text-sm uppercase tracking-wide hover:scale-105 transform relative group"
              >
                Community
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex text-white hover:text-white bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex text-white hover:text-white hover:bg-white/10 transition-all duration-300 relative"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex text-white hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  goto("/signup")
                }}
                className="gradient-accent hover:opacity-90 font-bold shadow-lg border border-white/20 hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Button>
              <Button variant="ghost" size="sm" className="lg:hidden text-white hover:bg-white/10">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="container mx-auto px-4 py-36 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-black/30 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold tracking-wide mb-8">
            <Scale className="w-4 h-4" />
            [ LEGAL FRAMEWORK ]
          </div>
          
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white tracking-widest mb-8 leading-none"
            style={{
              fontFamily: 'Saira Extra Condensed, sans-serif',
              textShadow: '0 0 40px rgba(147, 51, 234, 0.3)',
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))'
            }}
          >
            TERMS &<br />CONDITIONS
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            Legal framework governing your use of our{' '}
            <span className="text-white font-medium">gaming platform</span>
          </p>
        </div>

        {/* Single Terms Card */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12 relative overflow-hidden">
            {/* Corner decorative elements */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-purple-500/60" />
            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-purple-500/60" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-purple-500/60" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-purple-500/60" />

            <div className="relative z-10 space-y-12">
              {termsData.map((term, index) => (
                <div key={term.id} className="border-b border-white/10 pb-8 last:border-b-0 last:pb-0">
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-black/60 backdrop-blur-sm border border-purple-500/40 text-purple-300">
                      {term.icon}
                    </div>
                    <div>
                      <div className="text-xs text-purple-400 font-bold tracking-widest mb-1">
                        SECTION {term.id.toString().padStart(2, '0')}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                        {term.title}
                      </h3>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="ml-16 space-y-3">
                    {term.content.map((paragraph, pIndex) => (
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
              GOVERNED BY INDIAN LAW
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              These terms are effective immediately and govern your use of our platform.
              <br />
              For any legal queries, contact our{' '}
              <span className="text-purple-300 font-semibold">legal team</span> or{' '}
              <span className="text-purple-300 font-semibold">grievance officer</span>.
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

export default LegalPage;