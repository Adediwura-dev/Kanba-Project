import logo from "../assets/logo.png";
import facebookLogo from "../assets/facebookLogo.png";
import instagramLogo from "../assets/instagramLogo.png";
import xLogo from "../assets/xLogo.png";


function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 px-8 py-10">
      <div className="max-w-6xl mx-auto">

        
        <div className="flex flex-wrap justify-between gap-8">

          
          <div>
            <div className="">
              <img
                src={logo}
                className="w-[90px] "
              />
            </div>

            <p className="text-gray-600 mt-2 max-w-xs">
              Manage your tasks, stay organized, and get things done with PadiPal.
            </p>
          </div>

          
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <a href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </a>

              <a href="/about" className="text-gray-600 hover:text-gray-900">
                About Us
              </a>

              <a href="/tasks" className="text-gray-600 hover:text-gray-900">
                Tasks Board
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">
              Follow Us On:
            </h3>

            <div className="flex gap-7">
              <a href="#" className="text-gray-600 hover:text-gray-900">

                <img
                  src={facebookLogo}
                  className="w-7 h-auto mb-8 max-w-[30px]min-h-[20px]max-lg:
                   max-w-[120px]min-h-[40px]"
                />
              </a>

              <a href="#" className="text-gray-600 hover:text-gray-900">

                <img
                  src={instagramLogo}
                  className="w-7 h-auto mb-8 max-w-[30px]min-h-[20px]max-lg:
                   max-w-[120px]min-h-[40px]"
                />
              </a>

              <a href="#" className="text-gray-600 hover:text-gray-900">

                <img
                  src={xLogo}
                  className="w-8 h-auto mb-8 max-w-[30px]min-h-[20px]max-lg:
                   max-w-[120px]min-h-[40px]"
                />
              </a>
            </div>
          </div>

        </div>

        
        <div className="border-t border-gray-300 mt-8 pt-5 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 PadiPal. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
