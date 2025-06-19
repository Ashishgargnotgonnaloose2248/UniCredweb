import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Award, Gift, User, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Earn Credits", href: "#earn", icon: Zap },
    { name: "Rewards", href: "#rewards", icon: Gift },
    { name: "Leaderboard", href: "#leaderboard", icon: Award },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 backdrop-blur-lg border-b border-gray-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-8 h-8 bg-unicred-gradient rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-unicred-500 to-electric-500 bg-clip-text text-transparent">
              UniCred
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-unicred-500 transition-colors font-medium"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-2 text-gray-700 hover:text-unicred-500 transition-colors font-medium",
                    location.pathname === item.href && "text-unicred-500",
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ),
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-unicred-500"
            >
              Sign In
            </Button>
            <Link to="/dashboard">
              <Button className="bg-unicred-gradient hover:shadow-lg hover:shadow-unicred-500/25 text-white border-0 transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-unicred-500 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-700 hover:text-unicred-500 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-3 text-gray-700 hover:text-unicred-500 transition-colors font-medium py-2",
                    location.pathname === item.href && "text-unicred-500",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ),
            )}
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
              <Button
                variant="ghost"
                className="justify-start text-gray-700 hover:text-unicred-500"
              >
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
              <Button className="justify-start bg-unicred-gradient hover:shadow-lg hover:shadow-unicred-500/25 text-white border-0">
                <Zap className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
