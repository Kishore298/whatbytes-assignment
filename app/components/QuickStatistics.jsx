import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faCheckCircle, faChartBar } from "@fortawesome/free-solid-svg-icons";

export default function QuickStatistics({ rank, percentile, correctScore }) {
  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Quick Statistics</h2>
      {/* Use flex-col on small screens and switch to flex-row on large screens */}
      <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-4 lg:space-y-0">
        {/* Rank */}
        <div className="flex items-center space-x-4">
          <div className="bg-gray-200 p-3 rounded-full">
            <FontAwesomeIcon icon={faTrophy} className="text-yellow-500" size="2x" />
          </div>
          <div>
            <p className="text-2xl font-bold">{rank}</p>
            <p>Your Rank</p>
          </div>
          <div className="hidden lg:block border-l border-gray-300 h-16"></div>
        </div> 
        {/* Percentile */}
        <div className="flex items-center space-x-4">
          <div className="bg-gray-200 p-3 rounded-full">
            <FontAwesomeIcon icon={faChartBar} className="text-blue-500" size="2x" />
          </div>
          <div>
            <p className="text-2xl font-bold">{percentile}%</p>  
            <p>Your Percentile</p>
          </div>
        </div>
        <div className="hidden lg:block border-l border-gray-300 h-16"></div>
        {/* Correct Answers */}
        <div className="flex items-center space-x-4">
          <div className="bg-gray-200 p-3 rounded-full">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" size="2x" />
          </div>
          <div>
            <p className="text-2xl font-bold">{correctScore}/15</p>
            <p>Correct Answers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

