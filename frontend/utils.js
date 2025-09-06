// Dynamic API URL based on environment
const apiURL = import.meta.env.PROD
  ? "https://devspace-backend-h8m0.onrender.com" // Replace with your actual Render URL
  : "http://localhost:5000";

export default apiURL;
