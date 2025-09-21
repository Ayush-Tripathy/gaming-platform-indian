import { Button } from "$lib/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card"
import { Input } from "$lib/components/ui/input"
import { Badge } from "$lib/components/ui/badge"
import {
  Star,
  Users,
  Trophy,
  Calendar,
  Play,
  Mail,
  Github,
  Twitter,
  Diamond as Discord,
  Menu,
  Search,
  Bell,
  User,
} from "lucide-react"

export default function GamingPlatformLanding() {
  return (
    <div className="min-h-screen bg-background">
      <header className="navbar-glass sticky top-0 z-50 shadow-2xl">
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
                className="text-muted-foreground hover:text-white transition-all duration-300 font-semibold text-sm uppercase tracking-wide hover:scale-105 transform relative group"
              >
                Games
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#tournaments"
                className="text-muted-foreground hover:text-white transition-all duration-300 font-semibold text-sm uppercase tracking-wide hover:scale-105 transform relative group"
              >
                Tournaments
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#events"
                className="text-muted-foreground hover:text-white transition-all duration-300 font-semibold text-sm uppercase tracking-wide hover:scale-105 transform relative group"
              >
                Events
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#newsletter"
                className="text-muted-foreground hover:text-white transition-all duration-300 font-semibold text-sm uppercase tracking-wide hover:scale-105 transform relative group"
              >
                Community
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex text-muted-foreground hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex text-muted-foreground hover:text-white hover:bg-white/10 transition-all duration-300 relative"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex text-muted-foreground hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button
                size="sm"
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
      </header>

      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-800/20 to-transparent"></div>

        {/* Animated light beams background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Diagonal light beams */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent transform rotate-12 animate-pulse"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent transform -rotate-12 animate-pulse delay-1000"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/25 to-transparent transform rotate-6 animate-pulse delay-2000"></div>

          {/* Horizontal light beams */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse delay-500"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent animate-pulse delay-1500"></div>

          {/* Moving light orbs */}
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-white/30 rounded-full blur-sm animate-ping"></div>
          <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-white/40 rounded-full blur-sm animate-ping delay-700"></div>
          <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-white/50 rounded-full blur-sm animate-ping delay-1200"></div>

          {/* Scanning beam effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse duration-3000"></div>
        </div>

        {/* Enhanced particles background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/50 rounded-full animate-ping delay-600"></div>
          <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-white/25 rounded-full animate-pulse delay-900"></div>
          <div className="absolute top-1/6 left-2/3 w-1 h-1 bg-white/35 rounded-full animate-pulse delay-1100"></div>
          <div className="absolute bottom-1/6 left-1/6 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse delay-1400"></div>
        </div>

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>

        <div className="relative container mx-auto max-w-6xl">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect mb-8 hover:scale-105 transition-transform duration-300 border border-white/10">
            <span className="text-white text-sm font-bold mr-2">⚡</span>
            <span className="text-white text-sm font-semibold">Next-Generation Gaming Platform</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-balance mb-8 text-white leading-none tracking-tight drop-shadow-2xl">
            DOMINATE
            <span className="block gradient-text">THE ARENA</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the ultimate gaming ecosystem where skill meets technology. Compete in tournaments, discover new
            worlds, and rise through the ranks with the most advanced gaming platform ever created.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="text-lg px-12 py-6 gradient-accent hover:opacity-90 font-bold shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20"
            >
              Enter the Arena
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-12 py-6 border-white/40 text-white hover:bg-white/10 bg-transparent font-semibold hover:scale-105 transition-all duration-300"
            >
              Watch Trailer
            </Button>
          </div>
        </div>
      </section>

      <section id="games" className="py-24 px-6 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-balance mb-6 gradient-text">Featured Games</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Discover premium games handpicked by our community of professional gamers and industry experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                title: "Cyber Warriors",
                description: "Fast-paced multiplayer battle arena with next-gen graphics",
                players: "2.5M",
                rating: 4.8,
                image: "/futuristic-cyber-warriors-game.jpg",
                genre: "Action",
              },
              {
                title: "Kingdom Builder",
                description: "Strategic city building simulation with deep mechanics",
                players: "1.8M",
                rating: 4.6,
                image: "/medieval-kingdom-building-game.jpg",
                genre: "Strategy",
              },
              {
                title: "Space Odyssey",
                description: "Epic space exploration adventure with stunning visuals",
                players: "3.2M",
                rating: 4.9,
                image: "/space-exploration-game.png",
                genre: "Adventure",
              },
              {
                title: "Neon Racers",
                description: "High-speed cyberpunk racing with customizable vehicles",
                players: "1.2M",
                rating: 4.7,
                image: "/neon-cyberpunk-racing-game.jpg",
                genre: "Racing",
              },
              {
                title: "Dragon's Quest",
                description: "Fantasy RPG with epic battles and immersive storyline",
                players: "2.8M",
                rating: 4.8,
                image: "/fantasy-dragon-rpg-game.jpg",
                genre: "RPG",
              },
              {
                title: "Zombie Survival",
                description: "Intense survival horror experience with co-op gameplay",
                players: "1.5M",
                rating: 4.5,
                image: "/zombie-survival-horror.png",
                genre: "Horror",
              },
              {
                title: "Mech Warriors",
                description: "Giant robot combat simulator with tactical depth",
                players: "900K",
                rating: 4.6,
                image: "/mech-robot-combat-game.jpg",
                genre: "Action",
              },
              {
                title: "Pirate's Treasure",
                description: "Naval adventure and exploration with multiplayer raids",
                players: "1.1M",
                rating: 4.4,
                image: "/pirate-naval-adventure-game.jpg",
                genre: "Adventure",
              },
            ].map((game, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 glass-effect hover:border-white/30 group hover:scale-105 border border-white/10"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="gradient-accent font-bold border border-white/20">
                      Play Now
                    </Button>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-white/10 text-white border-white/20 font-semibold">
                      {game.genre}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-white text-white" />
                      <span className="text-sm font-bold text-white">{game.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 font-bold">{game.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                    {game.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span className="font-semibold">{game.players} players</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <Card className="p-10 glass-effect hover:border-white/30 transition-all duration-300 border border-white/10">
            <CardHeader>
              <div className="w-20 h-20 gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border border-white/20">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl text-balance font-black mb-4">Stay in the Game</CardTitle>
              <CardDescription className="text-pretty text-lg text-muted-foreground">
                Get the latest updates on new games, tournaments, and exclusive content delivered straight to your
                inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-input border-white/20 focus:border-white/40 transition-colors text-white placeholder:text-white/60"
                />
                <Button className="sm:w-auto gradient-accent font-bold hover:opacity-90 border border-white/20">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Join 50,000+ gamers already subscribed. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="events" className="py-20 px-4 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-balance mb-6 gradient-text">Upcoming Events</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto text-lg">
              Don't miss out on exciting tournaments, community events, and game launches.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Summer Championship",
                date: "July 15-17, 2024",
                prize: "$50,000 Prize Pool",
                participants: "500+ Teams",
                type: "Tournament",
              },
              {
                title: "New Game Launch",
                date: "August 1, 2024",
                prize: "Exclusive Beta Access",
                participants: "Limited Spots",
                type: "Launch Event",
              },
              {
                title: "Community Meetup",
                date: "August 20, 2024",
                prize: "Free Merchandise",
                participants: "All Welcome",
                type: "Social Event",
              },
              {
                title: "Speedrun Competition",
                date: "September 5, 2024",
                prize: "$10,000 Prize Pool",
                participants: "Individual Entry",
                type: "Competition",
              },
            ].map((event, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 glass-effect hover:border-white/30 group border border-white/10"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-white/10 text-white border-white/20 font-bold">
                      {event.type}
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{event.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-white transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex items-center space-x-3">
                      <Trophy className="w-5 h-5 text-white" />
                      <span className="font-semibold">{event.prize}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-white" />
                      <span className="font-semibold">{event.participants}</span>
                    </div>
                  </div>
                  <Button className="w-full gradient-accent font-bold hover:opacity-90 border border-white/20">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
