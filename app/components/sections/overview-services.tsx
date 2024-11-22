import { Link } from '@remix-run/react';
import { ArrowRight } from 'lucide-react';

export function OverviewServices() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Left side content */}
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl">
          <div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Revenue done right,</span>
                <span className="block text-gray-900">in real time.</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Automate revenue tracking, get powerful insights, and focus on growth—all in one intelligent platform.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/action"
                    className="flex w-full items-center justify-center rounded-md bg-emerald-500 px-8 py-3 text-base font-medium text-white hover:bg-emerald-600 md:py-4 md:px-10 md:text-lg"
                  >
                    See It in Action
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side content */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-full flex flex-col p-6">
            {/* Top row with two cards */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* PDF Drop Card */}
              <div className="bg-white rounded-lg shadow-sm p-4 h-32">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-xs text-gray-600">
                          Drop your<br />contract
                          <div className="mt-1">
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">PDF</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">contract.pdf</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Invoice Status Card */}
              <div className="bg-white rounded-lg shadow-sm p-4 h-32">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                      <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    </div>
                    <span className="text-sm text-gray-600">Invoice sent</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Chart Card */}
            <div className="flex-grow bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Net MRR Growth</h3>
                  <div className="flex items-center mt-1">
                    <div className="mr-2">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                        <path d="M12 4L4 20h16L12 4z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-2xl font-bold">+185%</span>
                    <span className="text-sm text-gray-500 ml-2">From last month</span>
                  </div>
                </div>
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  Show all
                </button>
              </div>
              
              {/* Bar Chart */}
              <div className="h-48 flex items-end justify-between space-x-2">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jul', 'Aug', 'Sep', 'Oct'].map((month, i) => (
                  <div key={month} className="flex-1 flex flex-col items-center">
                    <div className="w-full flex flex-col justify-end" style={{height: '160px'}}>
                      <div className="bg-emerald-400 rounded-t w-full" style={{height: `${30 + i * 5}%`}}></div>
                      <div className="bg-gray-200 w-full" style={{height: '40%'}}></div>
                    </div>
                    <span className="text-xs text-gray-500 mt-2">{month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewServices;