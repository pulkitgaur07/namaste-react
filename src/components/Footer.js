import logo from "../images/logo.svg";
import googlePlay from "../images/googlePlay.png";
import apple from "../images/apple.png";

const Footer = () => {
  return (
    <div className="h-96 bg-slate-100">
      <div className="h-24 shadow-lg flex">
        <div className="h-full w-6/12 flex flex-col ml-14 items-center justify-center">
          <span className="font-bold text-3xl">
            For better experience,download
          </span>
          <span className="font-bold text-3xl ">the Silver Spoons app now</span>
        </div>
        <div className="h-full w-6/12 mr-14 flex items-center">
          <button className="h-16 w-2/6 ml-8 mr-4 cursor-pointer bg-black rounded-lg flex">
            <div className="h-full w-1/3 rounded-lg">
              <img className="p-3" src={googlePlay} />
            </div>
            <div className="h-full w-2/3 rounded flex flex-col justify-center">
              <h4 className="text-white text-sm font-medium">GET IT ON</h4>
              <h1 className="text-white text-xl font-semibold">Google Play</h1>
            </div>
          </button>
          <button className="h-16 w-2/6 rounded-lg bg-black flex">
            <div className="h-full w-1/3 rounded-lg">
              <img className="p-2" src={apple} />
            </div>
            <div className="h-full w-2/3 rounded flex flex-col justify-center">
              <h4 className="text-white text-sm font-medium">
                Download on the
              </h4>
              <h1 className="text-white text-xl font-semibold">App Store</h1>
            </div>
          </button>
        </div>
      </div>
      <div className="h-64 my-2 bg-black">
        <div className="h-full mx-16 flex items-center">
          <div className="h-56 w-1/4 m-2">
            <div className="h-32 flex">
              <div className="h-28 w-28">
                <img src={logo} />
              </div>
              <div className="h-28 w-44 flex justify-center items-center">
                <span className="font-semibold text-3xl text-white">
                Silver Spoons
                </span>
              </div>
            </div>
            <div>
              <ul className="pl-8 text-white font-semibold text-lg">
                <li>© 2024 Bundl</li>
                <li>Technologies Pvt. Ltd</li>
              </ul>
            </div>
          </div>
          <div className="h-56 w-1/4 m-2 pl-8 pt-4">
            <ul>
              <li className="text-white text-xl font-bold py-2">Company</li>
              <li className="text-white text-base font-normal font-serif">
                About
              </li>
              <li className="text-white text-base font-normal font-serif">
                Careers
              </li>
              <li className="text-white text-base font-normal font-serif">
                Team
              </li>
              <li className="text-white text-base font-normal font-serif">
                Silver Spoons One
              </li>
              <li className="text-base font-normal font-serif">
                Silver Spoons Instamart
              </li>
              <li className="text-base font-normal font-serif">
                Silver Spoons Genie
              </li>
            </ul>
          </div>
          <div className="h-56 w-1/4 m-2 pl-8 pt-4">
            <ul>
              <li className="text-white text-xl font-bold py-2">Contact Us</li>
              <li className="text-white text-base font-normal font-serif">
                Help & Support
              </li>
              <li className="text-white text-base font-normal font-serif">
                Partner with us
              </li>
              <li className="text-white text-base font-normal font-serif">
                Ride with us
              </li>
            </ul>
          </div>
          <div className="h-56 w-1/4 m-2 pl-8 pt-4">
            <ul>
              <li className="text-white text-xl font-bold py-2">
                We deliver to :
              </li>
              <li className="text-white text-base font-normal font-serif">
                Bangalore
              </li>
              <li className="text-white text-base font-normal font-serif">
                Gurgaon
              </li>
              <li className="text-white text-base font-normal font-serif">
                Hyderabad
              </li>
              <li className="text-white text-base font-normal font-serif">
                Dehli
              </li>
              <li className="text-white text-base font-normal font-serif">
                Mumbai
              </li>
              <li className="text-white text-base font-normal font-serif">
                Pune
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
