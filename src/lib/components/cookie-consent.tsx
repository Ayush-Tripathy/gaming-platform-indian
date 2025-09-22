import { BarChart3, Cookie, Eye, Settings, Shield, X } from 'lucide-react';
import React, { useState } from 'react';

interface CookieConsentProps {
  onAccept: (preferences: CookiePreferences) => void;
  onDecline: () => void;
}

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: true
  });

  // useEffect(() => {
  //   const hasConsented = localStorage.getItem('cookie-consent');
  //   if (!hasConsented) {
  //     setIsVisible(true);
  //   }
  // }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allPreferences));
    onAccept(allPreferences);
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    onAccept(preferences);
    setIsVisible(false);
  };

  const handleDecline = () => {
    const minimalPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    localStorage.setItem('cookie-consent', JSON.stringify(minimalPreferences));
    onDecline();
    setIsVisible(false);
  };

  const handlePreferenceChange = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div className="bg-black/60 backdrop-blur-xl border border-white/20 max-w-2xl w-full relative overflow-hidden pointer-events-auto">
        {/* Corner decorative elements */}
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-purple-500/60" />
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-purple-500/60" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-purple-500/60" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-purple-500/60" />

        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-black/60 backdrop-blur-sm border border-purple-500/40 text-purple-300">
                <Cookie className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide">Cookie Preferences</h3>
                <p className="text-xs text-purple-400 font-medium tracking-wider">PRIVACY COMPLIANCE</p>
              </div>
            </div>
            <button
              onClick={handleDecline}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!showDetails ? (
            // Simple View
            <div className="space-y-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                We use cookies to enhance your gaming experience, analyze platform performance, and provide personalized content. 
                Your data is protected under <span className="text-purple-300 font-medium">DPDP Act 2023</span> and <span className="text-purple-300 font-medium">IT Act 2000</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-transparent border border-purple-500/50 text-purple-300 hover:bg-purple-600/20 hover:border-purple-400 hover:text-white transition-all duration-300 font-semibold tracking-wide py-3 px-4"
                >
                  Accept All
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex-1 bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:border-purple-500/50 transition-all duration-300 font-medium py-3 px-4"
                >
                  <Settings className="w-4 h-4 inline mr-2" />
                  Customize
                </button>
                <button
                  onClick={handleDecline}
                  className="flex-1 bg-transparent border border-gray-600 text-gray-400 hover:text-gray-300 hover:border-gray-500 transition-all duration-300 font-medium py-3 px-4"
                >
                  Decline All
                </button>
              </div>
            </div>
          ) : (
            // Detailed View
            <div className="space-y-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                Choose which cookies you want to allow. Necessary cookies are required for basic platform functionality.
              </p>

              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-4 bg-black/30 backdrop-blur-sm border border-white/10">
                  <div className="flex items-start gap-3 flex-1">
                    <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">Necessary Cookies</h4>
                      <p className="text-gray-400 text-xs mt-1">Essential for platform security, authentication, and core functionality.</p>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-purple-600 border-2 border-purple-500 flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white"></div>
                    </div>
                    <span className="text-xs text-gray-500 mt-1 block">Required</span>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between p-4 bg-black/30 backdrop-blur-sm border border-white/10">
                  <div className="flex items-start gap-3 flex-1">
                    <Settings className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">Functional Cookies</h4>
                      <p className="text-gray-400 text-xs mt-1">Save your preferences, settings, and enhance user experience.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('functional', !preferences.functional)}
                    className="ml-4"
                  >
                    <div className={`w-12 h-6 border-2 flex items-center px-1 transition-all duration-300 ${
                      preferences.functional 
                        ? 'bg-purple-600 border-purple-500 justify-end' 
                        : 'bg-gray-700 border-gray-600 justify-start'
                    }`}>
                      <div className="w-4 h-4 bg-white"></div>
                    </div>
                  </button>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 bg-black/30 backdrop-blur-sm border border-white/10">
                  <div className="flex items-start gap-3 flex-1">
                    <BarChart3 className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">Analytics Cookies</h4>
                      <p className="text-gray-400 text-xs mt-1">Help us understand platform usage and improve performance.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('analytics', !preferences.analytics)}
                    className="ml-4"
                  >
                    <div className={`w-12 h-6 border-2 flex items-center px-1 transition-all duration-300 ${
                      preferences.analytics 
                        ? 'bg-purple-600 border-purple-500 justify-end' 
                        : 'bg-gray-700 border-gray-600 justify-start'
                    }`}>
                      <div className="w-4 h-4 bg-white"></div>
                    </div>
                  </button>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 bg-black/30 backdrop-blur-sm border border-white/10">
                  <div className="flex items-start gap-3 flex-1">
                    <Eye className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">Marketing Cookies</h4>
                      <p className="text-gray-400 text-xs mt-1">Personalize content and show relevant gaming offers.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('marketing', !preferences.marketing)}
                    className="ml-4"
                  >
                    <div className={`w-12 h-6 border-2 flex items-center px-1 transition-all duration-300 ${
                      preferences.marketing 
                        ? 'bg-purple-600 border-purple-500 justify-end' 
                        : 'bg-gray-700 border-gray-600 justify-start'
                    }`}>
                      <div className="w-4 h-4 bg-white"></div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={handleAcceptSelected}
                  className="flex-1 bg-transparent border border-purple-500/50 text-purple-300 hover:bg-purple-600/20 hover:border-purple-400 hover:text-white transition-all duration-300 font-semibold tracking-wide py-3 px-4"
                >
                  Save Preferences
                </button>
                <button
                  onClick={() => setShowDetails(false)}
                  className="flex-1 bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:border-purple-500/50 transition-all duration-300 font-medium py-3 px-4"
                >
                  Back
                </button>
              </div>
            </div>
          )}

          {/* Legal Notice */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <p className="text-xs text-gray-500 leading-relaxed">
              By continuing to use our platform, you agree to our cookie usage as per IT Rules 2021. 
              You can modify these preferences anytime in your account settings.
            </p>
          </div>
        </div>

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      </div>
    </div>
  );
};

export default CookieConsent;