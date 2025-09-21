import { Github, Play, Twitter, Diamond as Discord, } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {

  return (
    <footer className="gradient-secondary py-24 px-6 border-t border-border/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">NEXUS</span>
                  <div className="text-xs text-gray-400 -mt-1">GAMING</div>
                </div>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                The premier destination for competitive gaming. Built for champions, designed for victory.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-3">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-3">
                  <Discord className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-3">
                  <Github className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-white text-lg">Platform</h3>
              <ul className="space-y-3 text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Browse Games
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tournaments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Leaderboards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Streaming
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-white text-lg">Community</h3>
              <ul className="space-y-3 text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Forums
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Discord Server
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-white text-lg">Support</h3>
              <ul className="space-y-3 text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-16 pt-10 text-center text-gray-500">
            <p>&copy; 2024 NEXUS Gaming. All rights reserved. Engineered for excellence.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
