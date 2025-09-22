import type React from "react"

import { useState } from "react"
import { Button } from "$lib/components/ui/button"
import { Input } from "$lib/components/ui/input"
import { Label } from "$lib/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card"
import { Eye, EyeOff, User, Mail, Lock, Calendar, ArrowRight, CheckCircle } from "lucide-react"
import { useNavigation } from "src/navigation/NavigationContext"

export default function SignupPage() {
  const { goto } = useNavigation()

  const [currentStep, setCurrentStep] = useState<'age-verification' | 'signup-form'>('age-verification')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const calculateAge = (birthDate: string) => {
    const today = new Date()
    const birth = new Date(birthDate)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    
    return age
  }

  const handleAgeVerification = () => {
    if (!dateOfBirth) return
    
    // const age = calculateAge(dateOfBirth)
    // if (age < 18) {
    //   alert("You must be at least 18 years old to create an account.")
    //   return
    // }
    
    setCurrentStep('signup-form')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!acceptedTerms) {
      alert("Please accept the Terms & Conditions and Privacy Policy to continue.")
      return
    }
    
    console.log("Signup attempt:", { ...formData, dateOfBirth })
    window.localStorage.setItem("logged", "1")
    goto("/")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/images/signup-bg.png)`,
        }}
      />

      {/* Dark overlay for better form visibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-sm">
        {currentStep === 'age-verification' ? (
          // Age Verification Step
          <Card className="rounded-none bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl shadow-purple-500/20 relative overflow-hidden">
            {/* Corner decorative elements */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-purple-500/60" />
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-purple-500/60" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-purple-500/60" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-purple-500/60" />

            <CardHeader className="text-center space-y-4 pb-6 relative z-10">
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-black/60 backdrop-blur-sm border border-purple-500/40 text-purple-300">
                  <Calendar className="w-8 h-8" />
                </div>
              </div>
              <CardTitle className="text-xl font-bold text-white tracking-wide">
                Age Verification
              </CardTitle>
              <CardDescription className="text-gray-300 text-sm leading-relaxed">
                Please enter your date of birth to verify your age and comply with our terms of service
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 px-6 pb-6 relative z-10">
              <div className="space-y-3">
                <Label htmlFor="dateOfBirth" className="text-white font-medium tracking-wide">
                  Date of Birth
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-4 w-4" />
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="pl-10 bg-black/30 backdrop-blur-sm border border-white/20 text-white focus:border-purple-500/50 focus:ring-purple-400/20"
                    required
                  />
                </div>
              </div>

              <Button
                onClick={handleAgeVerification}
                disabled={!dateOfBirth}
                className="rounded-none w-full bg-transparent border border-purple-500/50 text-purple-300 hover:bg-purple-600/20 hover:border-purple-400 hover:text-white transition-all duration-300 font-semibold tracking-wider py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Verify Age & Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <div className="text-center pt-3 border-t border-white/10">
                <p className="text-gray-400 text-xs leading-relaxed">
                  You must be at least 18 years old to create an account. Your date of birth will be kept secure and private.
                </p>
              </div>
            </CardContent>

            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/5 pointer-events-none" />
          </Card>
        ) : (
          // Signup Form Step
          <Card className="rounded-none bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl shadow-purple-500/20 relative overflow-hidden">
            {/* Corner decorative elements */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-purple-500/60" />
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-purple-500/60" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-purple-500/60" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-purple-500/60" />

            <CardHeader className="text-center space-y-1 pb-4 relative z-10">
              <CardTitle className="text-xl font-bold text-white tracking-wide">Join the Network</CardTitle>
              <CardDescription className="text-gray-300 text-sm">
                Create your account to access the system
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 px-4 pb-4 relative z-10">
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-4 w-4" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="pl-10 bg-black/30 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500/50 focus:ring-purple-400/20"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-4 w-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10 bg-black/30 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500/50 focus:ring-purple-400/20"
                      required
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white font-medium">
                    Phone Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-4 w-4" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="pl-10 bg-black/30 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500/50 focus:ring-purple-400/20"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-4 w-4" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="pl-10 pr-10 bg-black/30 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500/50 focus:ring-purple-400/20"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white font-medium">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-4 w-4" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      className="pl-10 pr-10 bg-black/30 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500/50 focus:ring-purple-400/20"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <button
                      type="button"
                      onClick={() => setAcceptedTerms(!acceptedTerms)}
                      className="mt-0.5 flex-shrink-0"
                    >
                      <div className={`w-5 h-5 border-2 flex items-center justify-center transition-all duration-300 ${
                        acceptedTerms 
                          ? 'bg-purple-600 border-purple-500' 
                          : 'bg-black/30 border-white/20 hover:border-purple-500/50'
                      }`}>
                        {acceptedTerms && <CheckCircle className="w-3 h-3 text-white" />}
                      </div>
                    </button>
                    <div className="text-sm text-gray-300 leading-relaxed">
                      I accept the{' '}
                      <button 
                        type="button"
                        onClick={() => goto("/terms")}
                        className="text-purple-400 hover:text-purple-300 underline transition-colors"
                      >
                        Terms & Conditions
                      </button>
                      {' '}and{' '}
                      <button 
                        type="button"
                        onClick={() => goto("/privacy")}
                        className="text-purple-400 hover:text-purple-300 underline transition-colors"
                      >
                        Privacy Policy
                      </button>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={!acceptedTerms}
                  className="rounded-none w-full bg-transparent border border-purple-500/50 text-purple-300 hover:bg-purple-600/20 hover:border-purple-400 hover:text-white transition-all duration-300 font-semibold tracking-wider py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Initialize Account
                </Button>
              </form>

              {/* Login Link */}
              <div className="text-center pt-3 border-t border-white/10">
                <p className="text-gray-300 text-sm">
                  Already have access?{" "}
                  <button onClick={() => {
                    goto("/signin")
                  }} className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                    Sign In
                  </button>
                </p>
              </div>
            </CardContent>

            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/5 pointer-events-none" />
          </Card>
        )}
      </div>
    </div>
  )
}