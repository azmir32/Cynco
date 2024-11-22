import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { ChevronDown } from "lucide-react";

// Define the navigation items interface for type safety
interface NavItem {
  label: string;
  href: string;
}

// Array of navigation items for the dropdown
const navItems: NavItem[] = [
  {
    label: "Blog",
    href: "/blog", // Replace with your actual route
  },
  {
    label: "Option 2",
    href: "/tools/option2", // Replace with your actual route
  },
];

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center px-4">
        {/* Left side - Logo */}
        <div className="w-1/4">
          <Link to="/" className="flex items-center">
            <span className="text-4xl font-bold text-[#ACFA2B]">Cynco.io</span>
          </Link>
        </div>

        {/* Center - Custom Dropdown */}
        <div className="flex flex-1 justify-center">
          <div className="relative group">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-100 h-10 px-4 py-2">
              Total and Resource
              <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            
            {/* Gap bridge */}
            <div className="absolute invisible group-hover:visible w-48 bg-transparent h-2 left-1/2 -translate-x-1/2" />
            
            {/* Dropdown menu */}
            <div className="absolute invisible group-hover:visible hover:visible w-48 bg-white border rounded-md shadow-lg mt-2 left-1/2 -translate-x-1/2 z-50">
              <div className="py-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login button */}
        <div className="w-1/4 flex justify-end">
          <Link to="/login">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}