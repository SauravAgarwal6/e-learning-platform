import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">E-Learning Platform</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/certificate"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Certificate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
