import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-white to-purple-100 text-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-800">Welcome to CodTech E-Learning</h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-6">
        Learn anytime, anywhere. Explore interactive courses, track your progress, and earn certificates.
      </p>
      <Link to="/courses">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg shadow-md transition">
          Explore Courses
        </button>
      </Link>
      <img
        src="https://images.unsplash.com/photo-1482398650355-d4c6462afa0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="E-learning"
        className="w-full max-w-md mt-10 rounded-xl shadow-lg"
      />
    </div>
  );
}

export default Home;
