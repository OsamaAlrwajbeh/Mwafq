import React from 'react'

function ContentService() {
  return (
    <div className="lg:col-span-9">
            <div className="bg-white rounded-3xl p-10 shadow-sm">
              {/* Header */}
              <div className="mb-6">
                <p className="text-cyan-400 text-sm font-medium mb-2">Delivery Examination</p>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  Driving License Medical Test
                </h1>
                
                <p className="text-blue-700 text-lg leading-relaxed border-b-2 border-blue-700 pb-6 inline-block">
                  The medical examination for the driving license is a necessary procedure to ensure that the applicant is in good health and able to drive safely.
                </p>
              </div>

              {/* What's Included Section */}
              <div className="mb-8 mt-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Included:</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-700 text-lg">Vision tests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-700 text-lg">General blood tests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-700 text-lg">Physical and mental health assessment</span>
                  </li>
                </ul>
              </div>

              {/* Process Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Process:</h2>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <div className="text-gray-700 text-base leading-relaxed">
                      <strong>Conducting the Tests:</strong> Medical tests are carried out at authorized medical centers.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <div className="text-gray-700 text-base leading-relaxed">
                      <strong>Sending Results:</strong> The examination results are sent directly to the Traffic Department.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <div className="text-gray-700 text-base leading-relaxed">
                      <strong>Approved Centers:</strong> A list of accredited medical centers can be found online or at Traffic Department branches.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <div className="text-gray-700 text-base leading-relaxed">
                      <strong>Validity:</strong> The medical test report is usually valid for 3 months, after which a new examination may be required.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Highlight Box */}
              <div className="mt-10 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border-l-4 border-cyan-400">
                <p className="text-cyan-600 text-lg font-medium leading-relaxed">
                  This examination plays a key role in ensuring road safety and reducing risks caused by health-related issues.
                </p>
              </div>
            </div>
          </div>
  )
}

export default ContentService