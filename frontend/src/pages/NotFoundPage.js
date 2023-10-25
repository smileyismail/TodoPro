import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      Page Not Found
      <button
        onClick={() => navigate(-1)}
        className="bg-purple-500 px-6 py-3 text-xl text-neutral-100"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
