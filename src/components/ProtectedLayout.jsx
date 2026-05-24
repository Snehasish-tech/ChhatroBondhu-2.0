import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import SidebarNavigation from "@/components/SidebarNavigation";

const ProtectedLayout = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If user is not authenticated and loading is done, redirect to auth
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, don't render layout
  if (!user) {
    return null;
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex w-full h-screen bg-gradient-to-br from-[#f9fdff] to-[#eef5fa]">
        {/* Sidebar */}
        <Sidebar className="w-64 flex-shrink-0 border-r border-[#d4e8f7] bg-white shadow-lg">
          <SidebarNavigation />
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ProtectedLayout;
