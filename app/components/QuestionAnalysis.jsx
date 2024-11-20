import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'; 
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs, faStar } from '@fortawesome/free-solid-svg-icons'; // Import star icon

export default function QuestionAnalysis({ correctScore }) {
  const percentage = (correctScore / 15) * 100;
  
  return (
    <div className="bg-white p-6 shadow rounded">
      {/* Heading with score aligned right */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md lg:text-xl font-semibold">Question Analysis</h2>
        <p className="text-md lg:text-xl text-gray-800">{correctScore}/15</p>
      </div>
      
      {/* Message */}
      <p className="text-xs lg:text-lg text-gray-700 mt-4">
        <span className="text-xs lg:text-lg text-gray-700 font-semibold mb-4">
          You scored {correctScore} out of 15 correct answers.
        </span>
        However, it still needs some improvement.
      </p>

      {/* Circular Progress Bar Centered */}
      <div className="flex justify-center items-center mt-6">
        <div className="w-32 h-32 relative">
          <CircularProgressbar
            value={percentage}
            text=""
            styles={buildStyles({
              textSize: '16px',
              pathColor: `rgba(0, 191, 255, ${percentage / 100})`,
              trailColor: '#d6d6d6',
            })}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faCrosshairs} size="lg" color="red" />
          </div>
        </div>
      </div>
    </div>
  );
}

