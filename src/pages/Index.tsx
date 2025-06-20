import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import AnimatedRoadmap from "@/components/AnimatedRoadmap";
import {
  Zap,
  Award,
  Users,
  Coffee,
  ShoppingBag,
  Star,
  TrendingUp,
  Calendar,
  MapPin,
  ArrowRight,
  Sparkles,
  Heart,
  BookOpen,
  Camera,
  Music,
  Gamepad2,
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("events");
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);

  const stats = [
    { label: "Active Students", value: "10K+", icon: Users },
    { label: "Credits Earned", value: "500K+", icon: Zap },
    { label: "Partner Venues", value: "100+", icon: Coffee },
    { label: "Rewards Claimed", value: "25K+", icon: Award },
  ];

  const activities = {
    events: [
      {
        icon: Calendar,
        name: "Tech Workshop",
        credits: 150,
        category: "Learning",
      },
      {
        icon: Music,
        name: "Music Festival",
        credits: 100,
        category: "Culture",
      },
      {
        icon: Camera,
        name: "Photography Contest",
        credits: 200,
        category: "Creative",
      },
      {
        icon: BookOpen,
        name: "Study Group",
        credits: 80,
        category: "Academic",
      },
    ],
    volunteer: [
      {
        icon: Heart,
        name: "Community Cleanup",
        credits: 300,
        category: "Service",
      },
      { icon: Users, name: "Peer Tutoring", credits: 250, category: "Help" },
      {
        icon: Sparkles,
        name: "Campus Tour Guide",
        credits: 180,
        category: "Ambassador",
      },
      {
        icon: BookOpen,
        name: "Library Assistant",
        credits: 120,
        category: "Academic",
      },
    ],
    clubs: [
      { icon: Gamepad2, name: "Gaming Club", credits: 100, category: "Fun" },
      { icon: Users, name: "Debate Society", credits: 150, category: "Skills" },
      {
        icon: Camera,
        name: "Photography Club",
        credits: 120,
        category: "Creative",
      },
      {
        icon: Music,
        name: "Music Band",
        credits: 200,
        category: "Performance",
      },
    ],
  };

  const rewards = [
    {
      title: "Coffee Paradise",
      discount: "20% OFF",
      credits: 500,
      image: "☕",
      color: "from-amber-400 to-orange-500",
    },
    {
      title: "Fashion Forward",
      discount: "15% OFF",
      credits: 800,
      image: "👕",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Tech Gadgets",
      discount: "10% OFF",
      credits: 1200,
      image: "📱",
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Food Delivery",
      discount: "Free Delivery",
      credits: 300,
      image: "🍕",
      color: "from-green-400 to-emerald-500",
    },
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Computer Science Major",
      text: "UniCred made my college experience so much more rewarding! I've earned enough credits for free coffee all semester.",
      avatar: "🧑‍💻",
      credits: 2400,
    },
    {
      name: "Maya Rodriguez",
      role: "Design Student",
      text: "Love how UniCred rewards me for doing what I already enjoy - attending workshops and joining clubs!",
      avatar: "👩‍🎨",
      credits: 1800,
    },
    {
      name: "Jordan Park",
      role: "Business Major",
      text: "The gamification aspect is genius. I'm more motivated to participate in campus activities than ever before.",
      avatar: "👨‍💼",
      credits: 3200,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-indigo-50/40 to-purple-50/30 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-800/10 dark:to-purple-800/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-200/25 to-cyan-200/25 dark:from-indigo-800/15 dark:to-cyan-800/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-200/15 to-pink-200/15 dark:from-purple-800/10 dark:to-pink-800/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center relative">
              {/* Background decorative elements */}
              <div className="absolute top-20 left-10 w-72 h-72 bg-unicred-gradient opacity-10 rounded-full blur-3xl animate-float"></div>
              <div
                className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-electric-400 to-neon-400 opacity-10 rounded-full blur-3xl animate-float"
                style={{ animationDelay: "2s" }}
              ></div>

              <div className="relative z-10">
                <Badge className="mb-6 bg-unicred-gradient-light text-unicred-600 border-unicred-200 text-sm font-medium px-6 py-2">
                  🎉 Join 10,000+ students earning credits daily!
                </Badge>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  <span className="block bg-gradient-to-r from-unicred-500 via-electric-500 to-neon-500 bg-clip-text text-transparent">
                    Earn Credits.
                  </span>
                  <span className="block bg-gradient-to-r from-electric-500 via-neon-500 to-unicred-500 bg-clip-text text-transparent">
                    Get Rewards.
                  </span>
                  <span className="block text-gray-800 dark:text-gray-200">
                    Level Up Life.
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Transform your college activities into valuable credits.
                  Attend events, volunteer, join clubs, and redeem amazing
                  rewards from your favorite local spots.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                  <Button
                    size="lg"
                    className="bg-unicred-gradient hover:shadow-2xl hover:shadow-unicred-500/30 text-white border-0 px-8 py-4 text-lg font-semibold transition-all duration-300 animate-pulse-glow"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Start Earning Credits
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setIsRoadmapOpen(true)}
                    className="border-2 border-unicred-200 dark:border-unicred-700 text-unicred-600 dark:text-unicred-400 hover:bg-unicred-50 dark:hover:bg-unicred-900/20 hover:text-unicred-700 dark:hover:text-unicred-300 px-8 py-4 text-lg font-semibold transition-all duration-300"
                  >
                    See How It Works
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="relative mb-4">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-unicred-100 to-electric-100 dark:from-unicred-900/30 dark:to-electric-900/30 rounded-2xl flex items-center justify-center border dark:border-unicred-800/20">
                          <stat.icon className="w-8 h-8 text-unicred-500 dark:text-unicred-400" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-400 dark:bg-neon-500 rounded-full animate-ping opacity-75"></div>
                      </div>
                      <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50/30 dark:bg-slate-800/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-unicred-500 to-electric-500 bg-clip-text text-transparent">
                  How UniCred Works
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Three simple steps to turn your campus activities into amazing
                rewards
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  step: "01",
                  title: "Participate & Earn",
                  description:
                    "Attend events, join clubs, volunteer, or complete academic activities to earn credits automatically.",
                  icon: Zap,
                  color: "from-unicred-500 to-unicred-600",
                },
                {
                  step: "02",
                  title: "Track Your Progress",
                  description:
                    "Watch your credits grow in real-time with our beautiful dashboard and leaderboards.",
                  icon: TrendingUp,
                  color: "from-electric-500 to-electric-600",
                },
                {
                  step: "03",
                  title: "Redeem Rewards",
                  description:
                    "Exchange your credits for discounts and perks at your favorite local cafes, stores, and services.",
                  icon: Award,
                  color: "from-neon-500 to-neon-600",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm relative overflow-hidden group dark:border-gray-700/20 dark:shadow-xl dark:shadow-black/10"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-unicred-500 via-electric-500 to-neon-500"></div>
                  <div className="relative z-10">
                    <div className="text-6xl font-bold text-gray-100 dark:text-gray-800 mb-4 group-hover:text-gray-50 dark:group-hover:text-gray-700 transition-colors">
                      {item.step}
                    </div>
                    <div
                      className={`absolute top-2 left-2 w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 mt-8">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-electric-500 to-neon-500 bg-clip-text text-transparent">
                  Earn Credits For Everything
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                From academic achievements to social activities, every
                participation counts!
              </p>
            </div>

            {/* Activity Tabs */}
            <div className="flex justify-center mb-12">
              <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-2 shadow-lg dark:shadow-black/20">
                {Object.keys(activities).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 capitalize ${
                      activeTab === tab
                        ? "bg-unicred-gradient text-white shadow-lg"
                        : "text-gray-600 dark:text-gray-300 hover:text-unicred-500 dark:hover:text-unicred-400"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Activity Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {activities[activeTab as keyof typeof activities].map(
                (activity, index) => (
                  <Card
                    key={index}
                    className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-slate-50/70 dark:bg-gray-800/40 backdrop-blur-sm hover:scale-105 group cursor-pointer dark:border-gray-700/20 dark:shadow-black/10"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-unicred-100 to-electric-100 dark:from-unicred-900/30 dark:to-electric-900/30 rounded-xl flex items-center justify-center group-hover:from-unicred-500 group-hover:to-electric-500 transition-all duration-300 dark:border dark:border-unicred-800/20">
                        <activity.icon className="w-6 h-6 text-unicred-500 dark:text-unicred-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <Badge className="bg-neon-100 dark:bg-neon-900/30 text-neon-600 dark:text-neon-400 border-neon-200 dark:border-neon-800">
                        {activity.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {activity.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Credits
                      </span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-unicred-500 to-electric-500 bg-clip-text text-transparent">
                        {activity.credits}
                      </span>
                    </div>
                  </Card>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Rewards Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-50/30 dark:bg-indigo-900/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-neon-500 to-unicred-500 bg-clip-text text-transparent">
                  Amazing Rewards Await
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Redeem your hard-earned credits for exclusive discounts and
                perks at local businesses
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {rewards.map((reward, index) => (
                <Card
                  key={index}
                  className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-slate-50/70 dark:bg-gray-800/40 backdrop-blur-sm hover:scale-105 group cursor-pointer overflow-hidden relative dark:border-gray-700/20 dark:shadow-black/10"
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-br ${reward.color} opacity-20 dark:opacity-30`}
                  ></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-4 text-center">
                      {reward.image}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">
                      {reward.title}
                    </h3>
                    <div className="text-center mb-4">
                      <span
                        className={`text-2xl font-bold bg-gradient-to-r ${reward.color} bg-clip-text text-transparent`}
                      >
                        {reward.discount}
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                      <Zap className="w-4 h-4" />
                      <span>{reward.credits} credits</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-unicred-500 to-neon-500 bg-clip-text text-transparent">
                  What Students Say
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-slate-50/60 dark:bg-gray-800/40 backdrop-blur-sm dark:border-gray-700/20 dark:shadow-black/10"
                >
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex text-yellow-400 dark:text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Badge className="bg-unicred-100 dark:bg-unicred-900/30 text-unicred-600 dark:text-unicred-400 border-unicred-200 dark:border-unicred-800">
                      {testimonial.credits} credits earned
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-unicred-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join thousands of students who are already leveling up their
              college experience with UniCred.
            </p>
            <div className="flex flex-col gap-6 items-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-unicred-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Get Started Now
                </Button>
              </div>

              {/* Mobile App Download Buttons */}
              <span className="text-white/90 text-sm font-medium">
                Download the app:
              </span>
              <div className="flex gap-4 items-center">
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-6 py-2 transition-all duration-300 backdrop-blur-sm"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    iOS
                  </Button>
                  <Button
                    size="sm"
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-6 py-2 transition-all duration-300 backdrop-blur-sm"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.699 12l1.999-2.491zM5.864 2.658L16.802 8.99l-2.303 2.302-8.635-8.634z" />
                    </svg>
                    Android
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-unicred-gradient rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">UniCred</span>
                </div>
                <p className="text-gray-400">
                  Transforming campus life through gamified credit rewards.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Platform</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      How it Works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Activities
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Rewards
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Leaderboard
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
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
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Community
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Partners</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Become a Partner
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Business Login
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      API Docs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Integration
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>
                &copy; 2024 UniCred. All rights reserved. Made with ❤️ for
                students.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Animated Roadmap Modal */}
      <AnimatedRoadmap
        isOpen={isRoadmapOpen}
        onClose={() => setIsRoadmapOpen(false)}
      />
    </div>
  );
};

export default Index;
