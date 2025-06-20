import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, ArrowRight, ArrowLeft, UserPlus, Zap, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoadmapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AnimatedRoadmap = ({ isOpen, onClose }: RoadmapModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [carPosition, setCarPosition] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Register with Us",
      description:
        "Sign up for your UniCred account and join our amazing community of students.",
      icon: UserPlus,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      darkBgColor: "from-blue-900/20 to-cyan-900/20",
    },
    {
      id: 2,
      title: "Join Activities & Earn Credits",
      description:
        "Participate in curricular and non-curricular activities in your college and outside. Get rewarded with credits for every activity!",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      darkBgColor: "from-purple-900/20 to-pink-900/20",
    },
    {
      id: 3,
      title: "Redeem Exciting Coupons",
      description:
        "Use your earned credits to redeem amazing coupons and discounts from your favorite local businesses.",
      icon: Gift,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      darkBgColor: "from-green-900/20 to-emerald-900/20",
    },
  ];

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setCarPosition(0); // Start at 0% (first step)
    }
  }, [isOpen]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      // Calculate position to align car with step markers (0%, 50%, 100%)
      setCarPosition((newStep / (steps.length - 1)) * 100);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      // Calculate position to align car with step markers (0%, 50%, 100%)
      setCarPosition((newStep / (steps.length - 1)) * 100);
    }
  };

  if (!isOpen) return null;

  const currentStepData = steps[currentStep];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <Card
        className="w-full max-w-4xl h-[80vh] bg-white dark:bg-gray-900 border-0 shadow-2xl rounded-3xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-lg cursor-pointer"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Dynamic Background */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br transition-all duration-1000 ease-in-out",
            currentStepData.bgColor,
            `dark:${currentStepData.darkBgColor}`,
          )}
        >
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/15 rounded-full blur-xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="text-center py-8 px-8">
            <h2 className="text-4xl font-bold mb-4">
              <span
                className={cn(
                  "bg-gradient-to-r bg-clip-text text-transparent",
                  currentStepData.color,
                )}
              >
                How UniCred Works
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Follow the journey to start earning and redeeming credits
            </p>
          </div>

          {/* Road and Car Animation */}
          <div className="px-8 mb-8">
            <div className="relative">
              {/* Road */}
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-600 dark:to-gray-800"></div>
                {/* Road Lines */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/50 transform -translate-y-1/2">
                  <div className="flex space-x-4 animate-pulse">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className="w-6 h-0.5 bg-white/80"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Car */}
              <div
                className="absolute -top-6 transition-all duration-1000 ease-out transform -translate-x-1/2"
                style={{ left: `${carPosition}%` }}
              >
                <div className="relative">
                  <div className="text-4xl animate-bounce">🏎️</div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  {/* Speed lines when moving */}
                  {currentStep > 0 && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8">
                      <div className="flex space-x-1 opacity-60">
                        <div className="w-3 h-0.5 bg-blue-400 animate-pulse"></div>
                        <div
                          className="w-2 h-0.5 bg-blue-300 animate-pulse"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-1 h-0.5 bg-blue-200 animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Step Markers */}
              <div className="flex justify-between absolute -bottom-8 left-0 right-0">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={cn(
                      "flex flex-col items-center transition-all duration-500",
                      index <= currentStep ? "opacity-100" : "opacity-50",
                    )}
                  >
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-500",
                        index <= currentStep
                          ? `bg-gradient-to-r ${step.color}`
                          : "bg-gray-400 dark:bg-gray-600",
                      )}
                    >
                      {step.id}
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center max-w-20">
                      Step {step.id}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 px-8 pb-8">
            <div className="text-center max-w-2xl mx-auto">
              {/* Step Icon */}
              <div className="mb-6">
                <div
                  className={cn(
                    "w-20 h-20 mx-auto rounded-3xl flex items-center justify-center bg-gradient-to-r transition-all duration-500",
                    currentStepData.color,
                  )}
                >
                  <currentStepData.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Step Content */}
              <div className="animate-fadeIn">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  {currentStepData.title}
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  {currentStepData.description}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center space-x-4">
                <Button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  variant="outline"
                  className="px-6 py-3 disabled:opacity-50 border-gray-300 dark:border-gray-600"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <div className="flex space-x-2">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        index === currentStep
                          ? `bg-gradient-to-r ${currentStepData.color}`
                          : "bg-gray-300 dark:bg-gray-600",
                      )}
                    />
                  ))}
                </div>

                {currentStep < steps.length - 1 ? (
                  <Button
                    onClick={nextStep}
                    className={cn(
                      "px-6 py-3 text-white bg-gradient-to-r transition-all duration-300",
                      currentStepData.color,
                    )}
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={onClose}
                    className="px-6 py-3 text-white bg-gradient-to-r from-unicred-500 to-electric-500"
                  >
                    Get Started
                    <Zap className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AnimatedRoadmap;
