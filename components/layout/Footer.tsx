const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="text-2xl font-bold text-white mb-4">StayEase</div>
            <p className="text-gray-300 mb-4">
              Find your perfect accommodation anywhere in the world.
            </p>
            <div className="flex space-x-4">
              {["fb", "tw", "ig", "in"].map((social) => (
                <button
                  key={social}
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Discover */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Discover</h3>
            <ul className="space-y-2">
              {[
                "Trust & Safety",
                "Travel Credit",
                "Gift Cards",
                "Business Travel",
                "Guidebooks",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hosting</h3>
            <ul className="space-y-2">
              {[
                "Host Your Home",
                "Host an Experience",
                "Responsible Hosting",
                "Resource Center",
                "Community",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                "Help Center",
                "Contact Us",
                "Cancellation Options",
                "Safety Information",
                "Support",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm">
            © 2024 StayEase. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy", "Terms", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
