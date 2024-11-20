import { useEffect, useState } from "react";

export default function SyllabusAnalysis({ correctScore }) {
  const [syllabusScores, setSyllabusScores] = useState([]);

  // Syllabus topics names
  const syllabusTopics = [
    "HTML Basics",
    "HTML Elements and Attributes",
    "HTML Forms and Inputs",
    "Multimedia in HTML",
    "Advanced HTML and Best Practices"
  ];

  // Color classes for each topic
  const colorClasses = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500"
  ];

  useEffect(() => {
    const distributeScores = () => {
      let remainingScore = correctScore;
      const scores = Array.from({ length: syllabusTopics.length }, () => 0);

      // Assign random scores while respecting the limits
      for (let i = 0; i < scores.length; i++) {
        if (remainingScore > 0) {
          const maxScore = Math.min(3, remainingScore);
          const randomScore = Math.floor(Math.random() * (maxScore + 1));
          scores[i] = randomScore;
          remainingScore -= randomScore;
        }
      }

      // If there's remaining score, assign it to random syllabus topics
      while (remainingScore > 0) {
        for (let i = 0; i < scores.length && remainingScore > 0; i++) {
          if (scores[i] < 3) {
            scores[i]++;
            remainingScore--;
          }
        }
      }

      setSyllabusScores(scores);
    };

    distributeScores();
  }, [correctScore]);

  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-md lg:text-lg font-bold mb-4">Syllabus Wise Analysis</h2>
      <ul>
        {syllabusScores.map((score, index) => {
          const percentage = ((score / 3) * 100).toFixed(2);

          return (
            <li key={index} className="py-2 mt-8">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs lg:text-lg text-gray-700">
                  {syllabusTopics[index]}
                </span>
                <span className="text-xs lg:text-lg font-semibold text-gray-700">
                  {percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`${colorClasses[index]} h-3 rounded-full`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}




  