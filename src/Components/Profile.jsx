import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#21243f] p-4">
      {/* Cover with background and welcome message */}
      <div className="w-full h-64 bg-[#2B1B42] flex items-center justify-center rounded-t-lg">
        <h1 className="text-3xl font-bold text-white">Welcome, {user.displayName}!</h1>
      </div>

      {/* User information card */}
      <div className="bg-white shadow-lg rounded-lg p-6 -mt-16 w-full max-w-md text-center">
        {/* User photo */}
        <img
          src={user.photoURL}
          alt="User"
          className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg"
        />

        {/* User name and email */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">{user.displayName}</h2>
          <p className="text-slate-900">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;