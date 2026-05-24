import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="landing-page flex min-h-screen items-center justify-center bg-gradient-to-br from-[#f9fdff] to-[#eef5fa]">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold font-display text-[#0077b6]">404</h1>
        <p className="mb-6 text-2xl text-[#0f2a3f] font-display">Oops! Page not found</p>
        <p className="mb-8 text-[#284660]">The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0077b6] to-[#00a6fb] text-white rounded-lg font-medium hover:shadow-lg transition-shadow">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
