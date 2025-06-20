import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import {
  Zap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Chrome,
  Github,
  Apple,
  Sparkles,
  Award,
  Users,
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const socialLogins = [
    {
      name: "Google",
      icon: Chrome,
      color: "from-red-500 to-orange-500",
    },
    {
      name: "GitHub",
      icon: Github,
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Apple",
      icon: Apple,
      color: "from-gray-800 to-black",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Earn Credits",
      description: "Get rewarded for every activity",
    },
    {
      icon: Award,
      title: "Unlock Rewards",
      description: "Redeem exclusive discounts",
    },
    {
      icon: Users,
      title: "Join Community",
      description: "Connect with 10K+ students",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/60 to-violet-50/60 dark:from-gray-900 dark:via-gray-800/60 dark:to-gray-900/60">
      <Header />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Login Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-unicred-gradient rounded-2xl flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-400 dark:bg-neon-500 rounded-full animate-ping"></div>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-unicred-500 to-electric-500 bg-clip-text text-transparent">
                    Welcome Back!
                  </span>
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Sign in to continue earning credits and unlocking amazing
                  rewards
                </p>
              </div>

              <Card className="p-8 border-0 shadow-xl bg-slate-50/80 dark:bg-gray-800/40 backdrop-blur-sm dark:border-gray-700/20 dark:shadow-black/20">
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-gray-700 dark:text-gray-300 font-medium"
                      >
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="student@university.edu"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 h-12 border-gray-200 dark:border-gray-700 focus:border-unicred-500 dark:focus:border-unicred-400 bg-white dark:bg-gray-900/50 dark:text-gray-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="password"
                        className="text-gray-700 dark:text-gray-300 font-medium"
                      >
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 pr-10 h-12 border-gray-200 dark:border-gray-700 focus:border-unicred-500 dark:focus:border-unicred-400 bg-white dark:bg-gray-900/50 dark:text-gray-200"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-unicred-500 border-gray-300 rounded focus:ring-unicred-500 dark:border-gray-600 dark:bg-gray-700"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Remember me
                      </span>
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-unicred-500 hover:text-unicred-600 dark:text-unicred-400 dark:hover:text-unicred-300 font-medium"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-unicred-gradient hover:shadow-lg hover:shadow-unicred-500/25 text-white border-0 transition-all duration-300 text-lg font-semibold"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Sign In
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <div className="relative">
                    <Separator className="dark:bg-gray-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="px-4 text-sm text-gray-500 dark:text-gray-400 bg-slate-50/80 dark:bg-gray-800/40">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {socialLogins.map((provider) => (
                      <Button
                        key={provider.name}
                        variant="outline"
                        className="h-12 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 dark:text-gray-300"
                      >
                        <provider.icon className="w-5 h-5" />
                      </Button>
                    ))}
                  </div>

                  <div className="text-center">
                    <span className="text-gray-600 dark:text-gray-400">
                      Don't have an account?{" "}
                    </span>
                    <Link
                      to="/signup"
                      className="text-unicred-500 hover:text-unicred-600 dark:text-unicred-400 dark:hover:text-unicred-300 font-semibold"
                    >
                      Sign up for free
                    </Link>
                  </div>
                </form>
              </Card>
            </div>

            {/* Right Side - Benefits & Stats */}
            <div className="lg:pl-12">
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-electric-500 to-neon-500 bg-clip-text text-transparent">
                    Level Up Your
                  </span>
                  <br />
                  <span className="text-gray-800 dark:text-gray-200">
                    College Experience
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  Join thousands of students who are already earning credits and
                  unlocking exclusive rewards for their campus activities.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-6 mb-12">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-unicred-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: "Students", value: "10K+" },
                  { label: "Credits Earned", value: "500K+" },
                  { label: "Rewards", value: "100+" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-unicred-500 to-electric-500 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="relative mt-12 lg:block hidden">
                <div className="absolute top-10 right-10 w-32 h-32 bg-unicred-gradient opacity-20 rounded-full blur-2xl animate-float"></div>
                <div
                  className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-electric-400 to-neon-400 opacity-20 rounded-full blur-2xl animate-float"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div className="flex items-center justify-center p-8">
                  <Sparkles className="w-16 h-16 text-unicred-300 dark:text-unicred-600 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
