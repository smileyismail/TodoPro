import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      Page Not Found
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default NotFoundPage;
