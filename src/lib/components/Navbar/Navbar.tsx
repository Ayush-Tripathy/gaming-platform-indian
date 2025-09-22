import { Button } from "$lib/components/ui/button"
import { motion } from "framer-motion"
import { Bell, Coins, CreditCard, LogOut, Menu, Play, Search, User } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigation } from "src/navigation/NavigationContext"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { goto } = useNavigation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const val = window.localStorage.getItem("logged") === "1"
    setIsLoggedIn(val)
  }, [])

  const handleLogout = () => {
    setIsLoggedIn(false);
    window.localStorage.setItem('logged', '0');
  };

  const handlePurchaseCredits = () => {
    console.log('Purchase credits clicked');
  };

  return (
  <motion.nav
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-white/10 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    }`}
  >
    <div className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <button onClick={() => goto("/")} className="flex items-center space-x-4 cursor-pointer">
          <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center shadow-lg border border-white/10">
            <Play className="w-7 h-7 text-white" />
          </div>
        </button>

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
          
          {!isLoggedIn ? (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  goto("/signin")
                }}
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
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex text-white hover:text-white hover:bg-white/10 transition-all duration-300 relative"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></span>
              </Button>

              <div className="hidden md:flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2 border border-white/20">
                <Coins className="w-4 h-4 text-white" />
                <span className="text-white font-semibold text-sm">150</span>
                <span className="text-white/70 text-xs">credits</span>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handlePurchaseCredits}
                className="hidden md:flex text-white px-3 py-[18px] hover:text-white bg-green-500/20 hover:bg-green-500/30 transition-all duration-300 border border-green-400/30"
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Purchase
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="hidden md:flex text-white hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </>
          )}

          <Button variant="ghost" size="sm" className="lg:hidden text-white hover:bg-white/10">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  </motion.nav>)
}