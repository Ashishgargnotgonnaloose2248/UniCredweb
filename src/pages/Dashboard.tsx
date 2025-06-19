import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import {
  Zap,
  Award,
  TrendingUp,
  Calendar,
  Gift,
  Star,
  ArrowRight,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Header />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-unicred-500 to-electric-500 bg-clip-text text-transparent">
                Your Dashboard
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Welcome back! Here's your credit activity overview.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-8 border-0 shadow-lg bg-unicred-gradient text-white">
              <div className="flex items-center justify-between mb-4">
                <Zap className="w-8 h-8" />
                <Badge className="bg-white/20 text-white border-white/30">
                  Total
                </Badge>
              </div>
              <div className="text-3xl font-bold mb-2">2,847</div>
              <div className="text-white/90">Credits Earned</div>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8 text-electric-500" />
                <Badge className="bg-electric-100 text-electric-600 border-electric-200">
                  This Month
                </Badge>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">8</div>
              <div className="text-gray-600">Rewards Claimed</div>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 text-neon-500" />
                <Badge className="bg-neon-100 text-neon-600 border-neon-200">
                  Rank
                </Badge>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">#47</div>
              <div className="text-gray-600">Leaderboard Position</div>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Activities */}
            <div className="lg:col-span-2">
              <Card className="p-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Recent Activities
                  </h2>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      activity: "Tech Workshop Attendance",
                      credits: 150,
                      date: "Today",
                      category: "Learning",
                    },
                    {
                      activity: "Volunteer at Food Drive",
                      credits: 300,
                      date: "Yesterday",
                      category: "Service",
                    },
                    {
                      activity: "Photography Club Meeting",
                      credits: 100,
                      date: "2 days ago",
                      category: "Clubs",
                    },
                    {
                      activity: "Study Group Session",
                      credits: 80,
                      date: "3 days ago",
                      category: "Academic",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-unicred-gradient rounded-xl flex items-center justify-center">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {item.activity}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {item.date} • {item.category}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-unicred-500">
                          +{item.credits}
                        </div>
                        <div className="text-sm text-gray-600">credits</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Available Rewards */}
              <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Available Rewards
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Coffee Paradise",
                      discount: "20% OFF",
                      credits: 500,
                      canClaim: true,
                    },
                    {
                      title: "Fashion Forward",
                      discount: "15% OFF",
                      credits: 800,
                      canClaim: true,
                    },
                    {
                      title: "Tech Gadgets",
                      discount: "10% OFF",
                      credits: 1200,
                      canClaim: false,
                    },
                  ].map((reward, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 rounded-xl flex items-center justify-between"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {reward.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {reward.discount}
                        </p>
                        <p className="text-sm text-unicred-500">
                          {reward.credits} credits
                        </p>
                      </div>
                      <Button
                        size="sm"
                        disabled={!reward.canClaim}
                        className={
                          reward.canClaim
                            ? "bg-unicred-gradient text-white"
                            : ""
                        }
                      >
                        {reward.canClaim ? "Claim" : "Need More"}
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Upcoming Events */}
              <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Upcoming Events
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "AI Workshop",
                      date: "Tomorrow",
                      credits: 200,
                    },
                    {
                      title: "Music Festival",
                      date: "Friday",
                      credits: 150,
                    },
                    {
                      title: "Career Fair",
                      date: "Next Week",
                      credits: 250,
                    },
                  ].map((event, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 rounded-xl flex items-center justify-between"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {event.title}
                        </h4>
                        <p className="text-sm text-gray-600">{event.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-unicred-500">
                          {event.credits}
                        </div>
                        <div className="text-xs text-gray-600">credits</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-unicred-gradient text-white">
                  View All Events
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
