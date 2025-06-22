import { FaGooglePlay, FaApple } from "react-icons/fa";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <div className="bg-slate-200 w-full">
      {/* Top Section */}
      <div className="my-2 shadow-lg">
        <div className="shadow-lg flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 py-2 gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-bold text-xl sm:text-2xl md:text-3xl">
              For better experience, download
            </span>
            <span className="font-bold text-xl sm:text-2xl md:text-3xl">
              the Silver Spoons app now
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <button className="flex items-center bg-black rounded-lg px-4 py-2 w-56 hover:scale-95 transition">
              <div className="text-white text-3xl mr-3">
                <FaGooglePlay />
              </div>
              <div className="flex flex-col justify-center text-left">
                <h4 className="text-white text-xs sm:text-sm font-medium">
                  GET IT ON
                </h4>
                <h1 className="text-white text-sm sm:text-lg font-semibold">
                  Google Play
                </h1>
              </div>
            </button>

            <button className="flex items-center bg-black rounded-lg px-4 py-2 w-56 hover:scale-95 transition">
              <div className="text-white text-3xl mr-3">
                <FaApple />
              </div>
              <div className="flex flex-col justify-center text-left">
                <h4 className="text-white text-xs sm:text-sm font-medium">
                  Download on the
                </h4>
                <h1 className="text-white text-sm sm:text-lg font-semibold">
                  App Store
                </h1>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black text-white px-6 sm:px-12 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Name */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-20 mb-2 sm:mb-0 sm:mr-4"
            />
            <div className="flex flex-col items-center sm:items-start">
              <span className="font-semibold text-2xl mb-2">Silver Spoons</span>
              <ul className="text-sm text-center sm:text-left">
                <li>© 2024 Bundl</li>
                <li>Technologies Pvt. Ltd</li>
              </ul>
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <ul className="space-y-2 ml-4">
              <li className="text-xl font-bold">Contact Us</li>
              {["Help & Support", "Partner with us", "Ride with us"].map(
                (item) => (
                  <li key={item} className="text-base font-serif">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-2 ml-4">
              <li className="text-xl font-bold">Company</li>
              {[
                "About",
                "Careers",
                "Team",
                "Silver Spoons One",
                "Silver Spoons Instamart",
                "Silver Spoons Genie",
              ].map((item) => (
                <li key={item} className="text-base font-serif">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-2 ml-4">
              <li className="text-xl font-bold">We deliver to :</li>
              {[
                "Bangalore",
                "Gurgaon",
                "Hyderabad",
                "Delhi",
                "Mumbai",
                "Pune",
              ].map((city) => (
                <li key={city} className="text-base font-serif">
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
