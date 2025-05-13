import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const courseData = {
  1: {
    title: "Full Stack Web Development",
    description:
      "Master the MERN stack: MongoDB, Express, React, and Node.js. Build scalable full-stack applications with best practices.",
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
    lessons: [
      { title: "HTML & CSS Basics", progress: 50 },
      { title: "JavaScript Essentials", progress: 20 },
      { title: "React.js Introduction", progress: 10 },
      { title: "Backend with Node.js", progress: 0 },
      { title: "MongoDB & Mongoose", progress: 0 },
    ],
  },
  2: {
    title: "Java Programming Masterclass",
    description:
      "Comprehensive Java course covering core concepts, OOP, DSA, and backend with Spring Boot.",
    videoUrl: "https://www.youtube.com/embed/grEKMHGYyns",
    lessons: [
      { title: "Java Basics & Syntax", progress: 100 },
      { title: "Object-Oriented Programming", progress: 60 },
      { title: "Data Structures & Algorithms", progress: 30 },
      { title: "Java Collections Framework", progress: 0 },
      { title: "Spring Boot API Development", progress: 0 },
    ],
  },
  3: {
    title: "Machine Learning with Python",
    description:
      "Learn how to build intelligent systems using Python, scikit-learn, and deep learning libraries.",
    videoUrl: "https://www.youtube.com/embed/GwIo3gDZCVQ",
    lessons: [
      { title: "Introduction to ML", progress: 80 },
      { title: "Data Preprocessing", progress: 50 },
      { title: "Supervised Learning", progress: 20 },
      { title: "Unsupervised Learning", progress: 0 },
      { title: "Neural Networks Basics", progress: 0 },
    ],
  },
};

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseData[id];

  if (!course) {
    return <div className="p-10 text-red-600 font-bold text-xl">Course not found!</div>;
  }

  const handleContinueLearning = () => {
    const firstIncompleteLesson = course.lessons.find(
      (lesson) => lesson.progress < 100
    );
    if (firstIncompleteLesson) {
      alert(`Continue learning: ${firstIncompleteLesson.title}`);
    } else {
      alert("You have completed all lessons!");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">{course.title}</h2>
      <p className="text-lg mb-6 text-gray-700">{course.description}</p>

      <div className="aspect-video mb-6">
        <iframe
          className="w-full h-full rounded-xl"
          src={course.videoUrl}
          title="Course Preview"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Lessons</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        {course.lessons.map((lesson, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{lesson.title}</span>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${lesson.progress}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-500">{lesson.progress}%</span>
          </li>
        ))}
      </ul>

      <button
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
        onClick={handleContinueLearning}
      >
        Continue Learning
      </button>
    </div>
  );
}

export default CourseDetail;
