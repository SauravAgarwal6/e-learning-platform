import { useState } from 'react';

const Certificate = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  // Simulating course completion status
  const handleCompletion = () => {
    setIsCompleted(true);
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-6">Certificate of Completion</h2>
      
      {!isCompleted ? (
        <div>
          <p className="text-lg mb-4">You need to complete the course to earn your certificate.</p>
          <button
            onClick={handleCompletion}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            Mark Course as Completed
          </button>
        </div>
      ) : (
        <div className="border-4 border-gray-300 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Congratulations!</h3>
          <p className="text-xl">You have successfully completed the course!</p>
          <div className="mt-6">
            <h4 className="text-lg font-semibold">Certificate Details:</h4>
            <p className="text-md mt-2">Course: Web Development</p>
            <p className="text-md mt-2">Instructor: Saurav Agarwal</p>
            <p className="text-md mt-2">Completion Date: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="mt-6">
            <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
              Download Certificate
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
