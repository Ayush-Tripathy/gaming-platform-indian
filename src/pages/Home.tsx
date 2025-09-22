import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "$lib/components/ui/button"
import { Card } from "$lib/components/ui/card"
import { ChevronLeft, ChevronRight, ChevronDown, Menu, Star, Users, Play, Search, Bell, User, Trophy, Zap, Target, ArrowRight, Clock, CreditCard, Coins, LogOut } from "lucide-react"
import { useNavigation } from "src/navigation/NavigationContext"
import Navbar from "$lib/components/Navbar/Navbar"
import CookieConsent from "$lib/components/cookie-consent"

export default function GamingPlatform() {
  const [currentVideo, setCurrentVideo] = useState(0)

  const videoCarousel = [
    {
      title: "Black Myth: Wukong",
      url: "https://cdn.edge-net.co/game_assets/47358f5d1cc64c7ba959262d1629467d1f365ba9b9e04bf5b74d9375cefdfe01/videos/video_hero_banner_16_9/black-myth-wukong-video-hero-banner-16-91725974664.mp4",
    },
    {
      title: "Elden Ring",
      url: "https://cdn.edge-net.co/game_assets/726b93dda0cc49be8854e2d553b6a924022b39cd981044e8bea36418d618a975/videos/video_hero_banner_16_9/elden-ring-nightreign-video-hero-banner-16-91748597225.mp4",
    },
    {
      title: "Avatar",
      url: "https://cdn.edge-net.co/game_assets/b4e5dcfd427f468b9a659181a7d99a404568273e1e8b48abbd824c36d46db81c/videos/video_hero_banner_16_9/avatar-frontiers-of-pandora-video-hero-banner-16-91747294551.mp4",
    },
    {
      title: "Assassins Creed",
      url: "https://cdn.edge-net.co/game_assets/fa64907543cc427bbcb29373bae12b12b9e3cac65dc9474d93f4246bcfad730b/videos/video_hero_banner_16_9/assassins-creed-shadows-video-hero-banner-16-91747114382.mp4",
    },
  ]

  const weeklyTournaments = [
    {
      id: 1,
      title: "FORTNITE",
      schedule: "Every Friday at 7 PM",
      format: "SOLO OR DUOS",
      description:
        "Compete against other players in a battle royale format for the chance to win exclusive in-game prizes and bragging rights!",
    },
    {
      id: 2,
      title: "FC 2025",
      schedule: "Every Friday at 7 PM",
      format: "SINGLE ELIMINATION",
      description:
        "Compete against other players in a battle royale format for the chance to win exclusive in-game prizes and bragging rights!",
    },
    {
      id: 3,
      title: "UFC 5",
      schedule: "Every Friday at 7 PM",
      format: "SINGLE ELIMINATION",
      description:
        "Compete against other players in a battle royale format for the chance to win exclusive in-game prizes and bragging rights!",
    },
    {
      id: 4,
      title: "COUNTER STRIKE 2",
      schedule: "Every Friday at 7 PM",
      format: "GROUP STAGE",
      description:
        "Compete against other players in a battle royale format for the chance to win exclusive in-game prizes and bragging rights!",
    },
  ]

  const featuredTournaments = [
    {
      id: 1,
      title: "PHANTOM PRO SERIES",
      dateRange: "Oct 15 - Nov 3, 2025",
      status: "ONLINE",
      format: "GROUP STAGE + BRACKET",
      description:
        "Compete against other players in a battle royale format for the chance to win exclusive in-game prizes and bragging rights!",
      image: "https://picsum.photos/800/400",
    },
    {
      id: 2,
      title: "IGNITION CUP 2025",
      dateRange: "Oct 10 - Nov 1, 2025",
      status: "ONLINE",
      format: "SINGLE ELIMINATION",
      description:
        "Compete against other players in a battle royale format for the chance to win exclusive in-game prizes and bragging rights!",
      image: "https://picsum.photos/800/400",
    },
  ]

  const featuredGames = [
    {
      id: 1,
      title: "Cyber Warriors",
      description: "Fast-paced multiplayer battle arena with next-gen graphics",
      category: "Action",
      rating: 4.8,
      players: "2.5M",
      image: "https://picsum.photos/seed/5/800/400",
      featured: true,
    },
    {
      id: 2,
      title: "Neon Racers",
      description: "High-speed racing through futuristic cityscapes",
      category: "Racing",
      rating: 4.6,
      players: "1.8M",
      image: "https://picsum.photos/seed/5/800/400",
      featured: true,
    },
    {
      id: 3,
      title: "Space Odyssey",
      description: "Epic space exploration and combat adventure",
      category: "Adventure",
      rating: 4.9,
      players: "3.2M",
      image: "https://picsum.photos/seed/5/800/400",
      featured: true,
    },
  ]

  const popularGames = [
    {
      id: 4,
      title: "Battle Royale X",
      description: "Ultimate survival battle with 100 players",
      category: "Battle Royale",
      rating: 4.7,
      players: "5.1M",
      image: "https://picsum.photos/seed/0/800/400",
    },
    {
      id: 5,
      title: "Mystic Realms",
      description: "Fantasy RPG with magical worlds to explore",
      category: "RPG",
      rating: 4.5,
      players: "2.9M",
      image: "https://picsum.photos/seed/0/800/400",
    },
    {
      id: 6,
      title: "Quantum Strike",
      description: "Tactical shooter with quantum mechanics",
      category: "Shooter",
      rating: 4.8,
      players: "4.3M",
      image: "https://picsum.photos/seed/0/800/400",
    },
    {
      id: 7,
      title: "Dragon's Legacy",
      description: "Medieval fantasy with epic dragon battles",
      category: "Fantasy",
      rating: 4.6,
      players: "1.7M",
      image: "https://picsum.photos/seed/0/800/400",
    },
    {
      id: 8,
      title: "Mech Warfare",
      description: "Giant robot battles in post-apocalyptic world",
      category: "Mech",
      rating: 4.4,
      players: "2.1M",
      image: "https://picsum.photos/seed/0/800/400",
    },
    {
      id: 9,
      title: "Stellar Command",
      description: "Strategic space conquest and fleet management",
      category: "Strategy",
      rating: 4.7,
      players: "1.3M",
      image: "https://picsum.photos/seed/0/800/400",
    },
  ]

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videoCarousel.length)
  }

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videoCarousel.length) % videoCarousel.length)
  }

  const handleAccept = (preferences) => {
    console.log('Cookie preferences:', preferences);
  };

  const handleDecline = () => {
    console.log('Cookies declined');
  };

  return (
    <div className="min-h-screen bg-black text-foreground overflow-x-hidden">
      <Navbar />

      <CookieConsent 
        onAccept={handleAccept} 
        onDecline={handleDecline} 
      />

      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <video key={currentVideo} autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src={videoCarousel[currentVideo].url} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-black/80" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 hidden md:block">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent transform -skew-x-12 rotate-12" />
              <div className="absolute inset-4 bg-gradient-to-r from-purple-500/10 to-transparent transform -skew-x-12 rotate-12" />
            </div>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 hidden md:block">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-l from-purple-600/20 to-transparent transform skew-x-12 -rotate-12" />
              <div className="absolute inset-4 bg-gradient-to-l from-purple-500/10 to-transparent transform skew-x-12 -rotate-12" />
            </div>
          </div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6">
          <div className="text-center space-y-6 md:space-y-8 max-w-7xl w-full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-xs sm:text-sm font-medium mb-6 md:mb-8"
            >
              <span>⚡</span>
              <span className="hidden sm:inline">Next-Generation Gaming Platform</span>
              <span className="sm:hidden">Next-Gen Gaming</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-[Saira_Extra_Condensed] text-5xl
                          sm:text-6xl
                          md:text-7xl
                          lg:text-[8rem]
                          xl:text-[10rem]
                          [@media_(min-width:1024px)_and_(max-height:700px)]:!text-[5rem]
                          [@media_(min-width:1024px)_and_(min-height:701px)_and_(max-height:930px)]:!text-[6rem]
                          font-black text-white tracking-wider leading-none"
            >
              DOMINATE
              <br />
              THE ARENA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="
              text-base 
              sm:text-lg 
              md:text-xl 
              [@media_(min-width:1024px)_and_(max-height:700px)]:!text-lg 
              text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
            >
              Experience the ultimate gaming ecosystem where skill meets technology. 
              <span className="hidden sm:inline"> Compete in tournaments, discover
              new worlds, and rise through the ranks with the most advanced gaming platform ever created.</span>
              <span className="sm:hidden"> Compete, discover, and rise through the ranks.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 py-8 md:py-16 [@media_(min-width:1024px)_and_(max-height:900px)]:py-4"
            >
              {/* Desktop navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevVideo}
                  className="text-white hover:bg-white/10 w-12 h-12"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <div className="flex space-x-4">
                  {videoCarousel.map((video, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideo(index)}
                      className={`[@media_(min-width:1024px)_and_(max-height:900px)]:text-sm px-6 py-3 border transition-all duration-300 ${
                        index === currentVideo
                          ? "bg-purple-600/30 border-purple-400 text-white"
                          : "bg-black/30 border-purple-600/30 text-gray-400 hover:bg-purple-600/20"
                      }`}
                    >
                      {video.title}
                    </button>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextVideo}
                  className="text-white hover:bg-white/10 w-12 h-12"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </div>

              {/* Mobile navigation */}
              <div className="md:hidden w-full max-w-sm">
                <div className="flex items-center justify-between mb-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevVideo}
                    className="text-white hover:bg-white/10 w-10 h-10"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  
                  <div className="text-white text-sm font-medium">
                    {currentVideo + 1} / {videoCarousel.length}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextVideo}
                    className="text-white hover:bg-white/10 w-10 h-10"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {videoCarousel.map((video, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideo(index)}
                      className={`px-3 py-2 rounded-lg border transition-all duration-300 text-xs ${
                        index === currentVideo
                          ? "bg-purple-600/30 border-purple-400 text-white"
                          : "bg-black/30 border-purple-600/30 text-gray-400 hover:bg-purple-600/20"
                      }`}
                    >
                      {video.title}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-white animate-bounce" />
        </motion.div>

        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-gray-600 text-xs tracking-widest transform rotate-90 origin-center hidden lg:block">
          <div className="space-y-4">
            <div>GAMING</div>
            <div>PLATFORM</div>
            <div>EXPERIENCE</div>
          </div>
        </div>
      </section>

      <section
        id="tournaments"
        className="py-20 bg-gradient-to-b from-gaming-darker via-purple-950/20 to-gaming-darker relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white text-sm font-semibold tracking-wide mb-8 backdrop-blur-sm"
            >
              [ WEEKLY SHOWDOWN ]
            </motion.div>
            <motion.h2
              className="text-4xl md:text-6xl font-black text-white tracking-wider mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              AN EXCITING LINEUP OF TOURNAMENTS
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                FOR GAMERS OF ALL SKILL LEVELS.
              </span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {weeklyTournaments.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Card className="rounded-none bg-white/5 backdrop-blur-xl border border-white/10 p-8 transition-all duration-500 hover:border-purple-500/50 hover:bg-white/10 hover:backdrop-blur-2xl hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 h-full overflow-hidden relative">
                  {/* Glassmorphism gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Animated purple glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-400/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-purple-400/5 group-hover:to-pink-500/10 transition-all duration-700" />
                  
                  <div className="relative z-10 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white/90 mb-3 group-hover:text-white transition-colors duration-300 leading-tight">
                        {tournament.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/60 text-sm mb-4 group-hover:text-purple-300 transition-colors duration-300">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">{tournament.schedule}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-bold uppercase tracking-wider group-hover:bg-purple-500/20 group-hover:border-purple-400/50 group-hover:text-purple-200 transition-all duration-300">
                        {tournament.format}
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed font-medium group-hover:text-white/90 transition-colors duration-300">
                        {tournament.description}
                      </p>
                    </div>

                    <Button
                      size="sm"
                      className="rounded-none w-full bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-purple-500/30 hover:border-purple-400/60 hover:text-white transition-all duration-300 group-hover:scale-105 font-semibold tracking-wide py-3"
                    >
                      LEARN MORE
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>

                  {/* Glass reflection effect */}
                  <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Corner glow accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              With top-tier players, cutting-edge strategies, and an unbreakable spirit, we dominate the esports scene.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredTournaments.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <Card className="rounded-none bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden hover:border-purple-500/50 hover:bg-black/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 relative">
                  {/* Corner decorative elements */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-purple-500/60" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-purple-500/60" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-purple-500/60" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-purple-500/60" />

                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tournament.image || "/placeholder.svg"}
                      alt={tournament.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Status badge */}
                    <div className="absolute top-6 right-6">
                      <span className="px-4 py-2 bg-black/60 backdrop-blur-sm text-white text-xs font-bold tracking-wider border border-purple-500/40">
                        [ {tournament.status} ]
                      </span>
                    </div>

                    {/* Tournament info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-white tracking-wide group-hover:text-purple-300 transition-colors duration-300">
                          {tournament.title}
                        </h3>
                        <div className="text-gray-300 text-sm font-medium tracking-wide">
                          {tournament.dateRange}
                        </div>
                        
                        <div className="inline-block px-3 py-1 bg-black/50 backdrop-blur-sm border border-purple-500/40 text-purple-300 text-xs font-bold tracking-wider">
                          {tournament.format}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-black/20 backdrop-blur-sm border-t border-white/10">
                    <div className="space-y-4">
                      <p className="text-gray-300 text-sm leading-relaxed font-light">
                        {tournament.description}
                      </p>

                      <button className="group/btn relative w-full bg-transparent border border-purple-500/50 text-white hover:border-purple-400 transition-all duration-300 py-3 px-6 overflow-hidden">
                        <span className="relative z-10 flex items-center justify-center gap-2 font-semibold tracking-wider text-sm">
                          Learn more
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-purple-600/0 group-hover/btn:bg-purple-600/20 transition-all duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Glassmorphism overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-purple-400/5 group-hover:to-purple-500/10 transition-all duration-700 pointer-events-none" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-500/5 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-pulse" />
        </div>
      </section>

      <section
        id="games"
        className="py-20 bg-gradient-to-b from-gaming-darker via-purple-950/20 to-gaming-darker relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white tracking-widest mb-8 leading-none"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              textShadow: '0 0 40px rgba(147, 51, 234, 0.3)',
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))'
            }}
          >
            FEATURED GAMES
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Experience the most{' '}
            <span className="text-white font-medium">immersive gaming adventures</span>
          </motion.p>
        </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {featuredGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Card className="rounded-none bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden hover:border-purple-500/50 hover:bg-black/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 h-96 relative">
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-purple-500/60 z-10" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-purple-500/60 z-10" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-purple-500/60 z-10" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-purple-500/60 z-10" />

                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-purple-300 text-xs font-bold tracking-wider border border-purple-500/40">
                        {game.category}
                      </span>
                    </div>

                    {/* Rating badge */}
                    <div className="absolute top-6 right-6 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-1 border border-white/20">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-white text-xs font-bold tracking-wide">{game.rating}</span>
                    </div>

                    {/* Game title overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-purple-300 transition-colors duration-300">
                        {game.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 bg-black/20 backdrop-blur-sm border-t border-white/10 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <p className="text-gray-300 text-sm leading-relaxed font-light">
                        {game.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Users className="w-4 h-4" />
                          <span className="text-sm font-medium tracking-wide">{game.players} players</span>
                        </div>
                        
                        <button className="group/btn relative bg-transparent border border-purple-500/50 text-purple-300 hover:border-purple-400 hover:text-white transition-all duration-300 px-4 py-2 overflow-hidden">
                          <span className="relative z-10 font-semibold tracking-wider text-sm">
                            Play Now
                          </span>
                          <div className="absolute inset-0 bg-purple-600/0 group-hover/btn:bg-purple-600/20 transition-all duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Glassmorphism overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-purple-400/5 group-hover:to-purple-500/10 transition-all duration-700 pointer-events-none" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-500/5 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-pulse" />
        </div>
      </section>

      <section className="min-h-[70vh] py-32 bg-gradient-to-b from-gaming-darker via-black/20 to-gaming-darker relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            {/* Enhanced main heading with modern gradient */}
            <motion.h2
              className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white tracking-widest leading-none"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                textShadow: '0 0 40px rgba(147, 51, 234, 0.3)',
                filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))'
              }}
            >
              LEVEL UP
            </motion.h2>

            {/* Enhanced subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Join millions of gamers worldwide and experience the future of{' '}
              <span className="text-white font-medium">competitive gaming</span>
            </motion.p>

            {/* Enhanced feature badges with glassmorphism */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <div className="group relative">
                <div className="flex items-center gap-3 bg-black/30 backdrop-blur-xl border border-white/20 px-8 py-4 transition-all duration-500 hover:bg-black/50 hover:border-purple-500/40 hover:scale-105">
                  <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-purple-500/60" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-purple-500/60" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-purple-500/60" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-purple-500/60" />
                  
                  <Trophy className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white font-semibold tracking-wide">Tournaments</span>
                </div>
              </div>

              <div className="group relative">
                <div className="flex items-center gap-3 bg-black/30 backdrop-blur-xl border border-white/20 px-8 py-4 transition-all duration-500 hover:bg-black/50 hover:border-purple-500/40 hover:scale-105">
                  <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-purple-500/60" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-purple-500/60" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-purple-500/60" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-purple-500/60" />
                  
                  <Zap className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white font-semibold tracking-wide">Live Streaming</span>
                </div>
              </div>

              <div className="group relative">
                <div className="flex items-center gap-3 bg-black/30 backdrop-blur-xl border border-white/20 px-8 py-4 transition-all duration-500 hover:bg-black/50 hover:border-purple-500/40 hover:scale-105">
                  <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-purple-500/60" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-purple-500/60" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-purple-500/60" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-purple-500/60" />
                  
                  <Target className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white font-semibold tracking-wide">Leaderboards</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* Animated floating orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-500/15 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* Radial gradient overlay for depth */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/20" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <div className="absolute top-32 right-1/3 w-1 h-1 bg-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
          <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gaming-darker via-purple-950/10 to-gaming-darker relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-5xl md:text-7xl font-black text-white tracking-wider mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              POPULAR GAMES
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Discover what millions of players are enjoying right now
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {popularGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Card className="rounded-none bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden hover:border-purple-500/50 hover:bg-black/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 h-96 relative">
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-purple-500/60 z-10" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-purple-500/60 z-10" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-purple-500/60 z-10" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-purple-500/60 z-10" />

                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-purple-300 text-xs font-bold tracking-wider border border-purple-500/40">
                        {game.category}
                      </span>
                    </div>

                    <div className="absolute top-6 right-6 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-1 border border-white/20">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-white text-xs font-bold tracking-wide">{game.rating}</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-purple-300 transition-colors duration-300">
                        {game.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 bg-black/20 backdrop-blur-sm border-t border-white/10 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <p className="text-gray-300 text-sm leading-relaxed font-light">
                        {game.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Users className="w-4 h-4" />
                          <span className="text-sm font-medium tracking-wide">{game.players} players</span>
                        </div>
                        
                        <button className="group/btn relative bg-transparent border border-purple-500/50 text-purple-300 hover:border-purple-400 hover:text-white transition-all duration-300 px-4 py-2 overflow-hidden">
                          <span className="relative z-10 font-semibold tracking-wider text-sm">
                            Play Now
                          </span>
                          <div className="absolute inset-0 bg-purple-600/0 group-hover/btn:bg-purple-600/20 transition-all duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-purple-400/5 group-hover:to-purple-500/10 transition-all duration-700 pointer-events-none" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
