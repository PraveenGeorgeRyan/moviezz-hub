import React from "react";
import { Link } from "react-router-dom";
import { Film, Search, List, LogOut } from "lucide-react";
import { useAuthStore } from "../store/authStore";

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <header className="bg-red-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Film className="mr-2" />
          MoviezzHub
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/search"
                className="flex items-center hover:text-gray-200"
              >
                <Search className="mr-1" size={18} />
                Search
              </Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link
                  to="/watchlist"
                  className="flex items-center hover:text-gray-200"
                >
                  <List className="mr-1" size={18} />
                  My Watchlist
                </Link>
              </li>
            )}
            {isAuthenticated ? (
              <li>
                <button
                  onClick={logout}
                  className="flex items-center hover:text-gray-200"
                >
                  <LogOut className="mr-1" size={18} />
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="flex items-center hover:text-gray-200"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
