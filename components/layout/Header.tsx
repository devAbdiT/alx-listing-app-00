const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">StayEase</div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for accommodations..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                🔍
              </button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 font-medium">
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>
        </div>

        {/* Accommodation Types */}
        <div className="flex items-center justify-center space-x-8 py-4 border-t">
          {["Rooms", "Mansion", "Countryside", "Beach", "City", "Mountain"].map(
            (type) => (
              <button
                key={type}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {type}
              </button>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
