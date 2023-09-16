import React from 'react';

const ResumeForm = () => {
  return (
    <div className="my-9 border border-gray-500 rounded-md h-screen mx-48 p-4 bg-white shadow-lg " >
      <form>
        <div className="mb-4">
          <label className=" text-gray-600">Full Name</label>
          <input type="text" className="border rounded w-full py-2 px-3" />
        </div>
        {/* Add more input fields for other resume details */}
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResumeForm;
