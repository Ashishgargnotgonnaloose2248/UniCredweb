import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
  User,
  AtSign,
  ArrowRight,
  Chrome,
  Github,
  Apple,
  Sparkles,
  Award,
  Users,
  CheckCircle,
} from "lucide-react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

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
      title: "Instant Credit Tracking",
      description: "Automatically track your activities and credits",
    },
    {
      icon: Award,
      title: "Exclusive Rewards",
      description: "Access to premium discounts and offers",
    },
    {
      icon: Users,
      title: "Student Community",
      description: "Connect with students across campuses",
    },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (
      !/^[a-zA-Z0-9@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(
        formData.username,
      )
    ) {
      newErrors.username =
        "Username can contain letters, numbers, and special characters";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Store user data in localStorage (in real app, this would be sent to backend)
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem("unicred_user", JSON.stringify(userData));

      // Redirect to login page with success message
      navigate("/login?signup=success");
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-indigo-50/40 to-purple-50/30 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-800/10 dark:to-purple-800/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-200/25 to-cyan-200/25 dark:from-indigo-800/15 dark:to-cyan-800/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="relative z-10">
        <Header />

        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Sign Up Form */}
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-unicred-gradient rounded-2xl flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-400 dark:bg-neon-500 rounded-full animate-ping"></div>
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-unicred-500 to-electric-500 bg-clip-text text-transparent">
                      Join UniCred!
                    </span>
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Start earning credits for your activities and unlock amazing
                    rewards
                  </p>
                </div>

                <Card className="p-8 border-0 shadow-xl bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm dark:border-gray-700/20 dark:shadow-black/20">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="firstName"
                          className="text-gray-700 dark:text-gray-300 font-medium"
                        >
                          First Name
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={(e) =>
                              handleInputChange("firstName", e.target.value)
                            }
                            className={`pl-10 h-12 border-gray-200 dark:border-gray-700 focus:border-unicred-500 dark:focus:border-unicred-400 bg-white dark:bg-gray-900/50 dark:text-gray-200 ${errors.firstName ? "border-red-500" : ""}`}
                          />
                        </div>
                        {errors.firstName && (
                          <p className="text-red-500 text-sm">
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="lastName"
                          className="text-gray-700 dark:text-gray-300 font-medium"
                        >
                          Last Name
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={(e) =>
                              handleInputChange("lastName", e.target.value)
                            }
                            className={`pl-10 h-12 border-gray-200 dark:border-gray-700 focus:border-unicred-500 dark:focus:border-unicred-400 bg-white dark:bg-gray-900/50 dark:text-gray-200 ${errors.lastName ? "border-red-500" : ""}`}
                          />
                        </div>
                        {errors.lastName && (
                          <p className="text-red-500 text-sm">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Username */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="username"
                        className="text-gray-700 dark:text-gray-300 font-medium"
                      >
                        Username
                      </Label>
                      <div className="relative">
                        <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="username"
                          type="text"
                          placeholder="john_doe123"
                          value={formData.username}
                          onChange={(e) =>
                            handleInputChange("username", e.target.value)
                          }
                          className={`pl-10 h-12 border-gray-200 dark:border-gray-700 focus:border-unicred-500 dark:focus:border-unicred-400 bg-white dark:bg-gray-900/50 dark:text-gray-200 ${errors.username ? "border-red-500" : ""}`}
                        />
                      </div>
                      {errors.username && (
                        <p className="text-red-500 text-sm">
                          {errors.username}
                        </p>
                      )}
                      <p className="text-gray-500 text-xs">
                        Can contain letters, numbers, and special characters
                      </p>
                    </div>

                    {/* Email */}
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
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className={`pl-10 h-12 border-gray-200 dark:border-gray-700 focus:border-unicred-500 dark:focus:border-unicred-400 bg-white dark:bg-gray-900/50 dark:text-gray-200 ${errors.email ? "border-red-500" : ""}`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                      )}
                    </div>

                    {/* Password */}
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
                          placeholder="Create a secure password"
                          value={formData.password}
                          onChange={(e) =>
                            handleInputChange("password", e.target.value)
                          }
                          className={`pl-10 pr-10 h-12 border-gray-200 dark:border-gray-700 focus:border-unicred-500 dark:focus:border-unicred-400 bg-white dark:bg-gray-900/50 dark:text-gray-200 ${errors.password ? "border-red-500" : ""}`}
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
                      {errors.password && (
                        <p className="text-red-500 text-sm">
                          {errors.password}
                        </p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="confirmPassword"
                        className="text-gray-700 dark:text-gray-300 font-medium"
                      >
                        Confirm Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) =>
                            handleInputChange("confirmPassword", e.target.value)
                          }
                          className={`pl-10 pr-10 h-12 border-gray-200 dark:border-gray-700 focus:border-unicred-500 dark:focus:border-unicred-400 bg-white dark:bg-gray-900/50 dark:text-gray-200 ${errors.confirmPassword ? "border-red-500" : ""}`}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-sm">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="w-4 h-4 text-unicred-500 border-gray-300 rounded focus:ring-unicred-500 dark:border-gray-600 dark:bg-gray-700"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        I agree to the{" "}
                        <Link
                          to="/terms"
                          className="text-unicred-500 hover:text-unicred-600 dark:text-unicred-400"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          to="/privacy"
                          className="text-unicred-500 hover:text-unicred-600 dark:text-unicred-400"
                        >
                          Privacy Policy
                        </Link>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-unicred-gradient hover:shadow-lg hover:shadow-unicred-500/25 text-white border-0 transition-all duration-300 text-lg font-semibold"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Create Account
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    <div className="relative">
                      <Separator className="dark:bg-gray-700" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="px-4 text-sm text-gray-500 dark:text-gray-400 bg-white/60 dark:bg-gray-800/40">
                          Or sign up with
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {socialLogins.map((provider) => (
                        <Button
                          key={provider.name}
                          type="button"
                          variant="outline"
                          className="h-12 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 dark:text-gray-300"
                        >
                          <provider.icon className="w-5 h-5" />
                        </Button>
                      ))}
                    </div>

                    <div className="text-center">
                      <span className="text-gray-600 dark:text-gray-400">
                        Already have an account?{" "}
                      </span>
                      <Link
                        to="/login"
                        className="text-unicred-500 hover:text-unicred-600 dark:text-unicred-400 dark:hover:text-unicred-300 font-semibold"
                      >
                        Sign in here
                      </Link>
                    </div>
                  </form>
                </Card>
              </div>

              {/* Right Side - Benefits */}
              <div className="lg:pl-12">
                <div className="text-center lg:text-left mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-electric-500 to-neon-500 bg-clip-text text-transparent">
                      Start Your
                    </span>
                    <br />
                    <span className="text-gray-800 dark:text-gray-200">
                      Credit Journey
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    Join the revolution in student rewards and unlock a world of
                    opportunities with every activity you do.
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

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { label: "Students", value: "10K+", icon: Users },
                    { label: "Universities", value: "50+", icon: Award },
                    { label: "Partners", value: "200+", icon: CheckCircle },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-unicred-100 to-electric-100 dark:from-unicred-900/30 dark:to-electric-900/30 rounded-xl flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-unicred-500 dark:text-unicred-400" />
                      </div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-unicred-500 to-electric-500 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
