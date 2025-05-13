import { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: 'Saurav',
    email: 'your.email@example.com',
    bio: 'Java Developer | Web Developer | AI Enthusiast',
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // You can add logic to save the updated profile data (e.g., send to backend or local storage)
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6">Profile</h2>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {!isEditing ? (
          <div>
            <h3 className="text-2xl font-bold">{user.name}</h3>
            <p className="text-md">{user.email}</p>
            <p className="text-md">{user.bio}</p>
            <button
              onClick={handleEditToggle}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2" htmlFor="bio">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={user.bio}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700"
            >
              Save Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
