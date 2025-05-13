import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Learn HTML, CSS, JavaScript, React, Node.js and MongoDB.",
    image: "https://www.shutterstock.com/image-vector/full-stack-developer-programmer-who-260nw-2273927175.jpg",
    progress: 70,
  },
  {
    id: 2,
    title: "Java Programming Masterclass",
    description: "Master OOP, DSA and backend development in Java.",
    image: "https://www.oracle.com/img/tech/cb88-java-logo-001.jpg",
    progress: 45,
  },
  {
    id: 3,
    title: "Machine Learning with Python",
    description: "Build smart apps with ML and deep learning.",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    progress: 30,
  },
];

function Courses() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Available Courses</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Link key={course.id} to={`/courses/${course.id}`}>
            <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-blue-700">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-600 h-4 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-right text-gray-500 mt-1">{course.progress}% completed</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Courses;

