import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const {user} = useSelector(state=>state.profile);
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      {/* User Image */}
      <div className="flex flex-col items-center">
        <img
          className="w-24 h-24 rounded-full mb-4"
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
        />
        <h2 className="text-xl font-bold">{`${user.firstName} ${user.lastName}`}</h2>
        <p className="text-gray-500">{user.email}</p>
      </div>

      {/* User Details */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Additional Details</h3>
        <div className="mt-4 space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">About:</span>
            <span className="text-gray-600">{user.additionalDetails.about || 'Not Provided'}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Contact Number:</span>
            <span className="text-gray-600">{user.additionalDetails.contactNumber || 'Not Provided'}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Date of Birth:</span>
            <span className="text-gray-600">{user.additionalDetails.dateOfBirth || 'Not Provided'}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Gender:</span>
            <span className="text-gray-600">{user.additionalDetails.gender || 'Not Provided'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard