import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  checkAuthStatus: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthStatus = () => {
    const storedUser = localStorage.getItem("unicred_user");
    const isLoggedIn = localStorage.getItem("unicred_logged_in");

    if (storedUser && isLoggedIn === "true") {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error parsing user data:", error);
        logout();
      }
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate login validation
    const storedUser = localStorage.getItem("unicred_user");

    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        if (userData.email === email) {
          // In a real app, you'd validate the password on the backend
          setUser(userData);
          setIsAuthenticated(true);
          localStorage.setItem("unicred_logged_in", "true");
          return true;
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("unicred_logged_in");
    // Keep user data for potential re-login
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    checkAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
