"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "$lib/components/ui/button"
import { Input } from "$lib/components/ui/input"
import { Label } from "$lib/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card"
import { Eye, EyeOff, Mail, Lock, Shield, Info } from "lucide-react"
import { useNavigation } from "src/navigation/NavigationContext"

export default function SigninPage() {
  const { goto } = useNavigation()

  const [showPassword, setShowPassword] = useState(false)
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signin logic here
    console.log("Signin attempt:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/images/signup-bg.png)`,
        }}
      />

      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-sm">
        <Card className="rounded-none bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl shadow-purple-500/20 relative overflow-hidden">
          {/* Corner decorative elements */}
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-purple-500/60" />
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-purple-500/60" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-purple-500/60" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-purple-500/60" />

          <CardHeader className="text-center space-y-4 pb-6 relative z-10">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 bg-black/60 backdrop-blur-sm border border-purple-500/40 text-purple-300">
                <Shield className="w-8 h-8" />
              </div>
            </div>
            <CardTitle className="text-xl font-bold text-white tracking-wide">
              Access the Network
            </CardTitle>
            <CardDescription className="text-gray-300 text-sm leading-relaxed">
              Enter your credentials to access the gaming platform
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 px-6 pb-6 relative z-10">
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    placeholder="Enter your password"
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

              {/* Forgot Password Link */}
              <div className="text-right">
                <button 
                  type="button"
                  onClick={() => goto("/forgot-password")}
                  className="text-purple-400 hover:text-purple-300 text-sm transition-colors"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="rounded-none w-full bg-transparent border border-purple-500/50 text-purple-300 hover:bg-purple-600/20 hover:border-purple-400 hover:text-white transition-all duration-300 font-semibold tracking-wider py-3"
              >
                Access System
              </Button>
            </form>

            {/* Register Link */}
            <div className="text-center pt-4 border-t border-white/10">
              <p className="text-gray-300 text-sm">
                New to platform?{" "}
                <button onClick={() => {
                  goto("/signup")
                }} className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                  Create Account
                </button>
              </p>
            </div>

            {/* Data Security Notice */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/20 backdrop-blur-sm border border-purple-500/40 text-purple-300 text-xs font-medium">
                <Shield className="w-3 h-3" />
                SSL Encrypted & RBI Compliant
              </div>
            </div>
          </CardContent>

          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        </Card>

        <div className="mt-6 max-w-sm">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 p-4 relative overflow-hidden">
            {/* Corner decorative elements */}
            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-purple-500/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-purple-500/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-purple-500/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-purple-500/60" />

            <div className="flex items-start gap-3 relative z-10">
              <Info className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-gray-400 leading-relaxed">
                <p className="mb-2 text-gray-300">
                  By signing in, you acknowledge compliance with:
                </p>
                <ul className="space-y-1 text-gray-500">
                  <li>• IT Act 2000 & IT Rules 2021</li>
                  <li>• DPDP Act 2023 (Data Protection)</li>
                </ul>
                <p className="mt-2 text-gray-400">
                  Platform operates under Indian jurisdiction. 
                  <button 
                    type="button"
                    onClick={() => goto("/terms")}
                    className="text-purple-400 hover:text-purple-300 ml-1 underline"
                  >
                    View Terms
                  </button>
                </p>
              </div>
            </div>

            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/5 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  )
}