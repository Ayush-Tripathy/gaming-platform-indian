import { Github, Play, Twitter, Diamond as Discord, } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigation } from "src/navigation/NavigationContext";

const Footer = () => {

  const { goto } = useNavigation()

  return (
    <footer className="bg-gradient-to-b from-black to-black py-24 px-6 border-t border-purple-500/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-cyan-500/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm shadow-lg border border-purple-400/30">
                <Play className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">GP</span>
                <div className="text-xs text-purple-400 -mt-1 font-semibold">GAMING</div>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              The premier destination for competitive gaming. Built for champions, designed for victory.
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-purple-600/20 hover:text-purple-300 p-3 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-purple-600/20 hover:text-purple-300 p-3 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
              >
                <Discord className="w-5 h-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-purple-600/20 hover:text-purple-300 p-3 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-white text-lg">Platform</h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors duration-300">
                  Browse Games
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors duration-300">
                  Tournaments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors duration-300">
                  Leaderboards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors duration-300">
                  Streaming
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-white text-lg">Community</h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors duration-300">
                  Forums
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors duration-300">
                  Discord Server
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors duration-300">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors duration-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-white text-lg">Support</h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors duration-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <button onClick={() => {
                  goto("/privacy")
                }} className="hover:text-purple-300 transition-colors duration-300">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => {
                  goto("/terms")
                }} className="hover:text-purple-300 transition-colors duration-300">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-purple-500/20 mt-16 pt-10 text-center text-gray-500">
          <p>&copy; 2025 GP Gaming. All rights reserved. Engineered for excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
