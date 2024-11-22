import { useNavigate } from "@remix-run/react";
import { Button } from "~/components/ui/button";

interface OnboardingCTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
}

export function OnboardingCTASection({
  title = "Join the ranks of successful founders who have automated their financial back office",
  subtitle = "",
  buttonText = "Join Now",
  className = "",
}: OnboardingCTASectionProps) {
  const navigate = useNavigate();

  const handleOnboardingClick = () => {
    // Navigate to onboarding form
    navigate("/blog");
  };

  return (
    <section 
      className={`flex min-h-[400px] w-full flex-col items-center justify-center bg-blue-100 px-4 py-16 text-center rounded-xl ${className}`}
    >
      <div className="container mx-auto max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mb-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          {subtitle}
        </p>
        <Button
          onClick={handleOnboardingClick}
          size="lg"
          className="bg-green-500 text-xl font-semibold"
        >
          {buttonText} <span className="ml-2"></span>
        </Button>
      </div>
    </section>
  );
}