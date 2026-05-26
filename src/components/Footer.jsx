import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-neutral text-neutral-content">
        <div className="footer sm:footer-horizontal py-10 px-5 max-w-360 mx-auto">
          <aside>
            <img src="/adobe-logo.svg" alt="Adobe Logo" className="w-40" />
            <p>
              GNT Technologies
              <br />
              Your Reliable Source of Authentic Softwares
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a
                href="https://t.me/adobellcus"
                className="btn btn-circle btn-info"
              >
                <FaTelegramPlane className="size-5" />
              </a>
            </div>
          </nav>
        </div>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-neutral text-white p-4 border-t border-t-gray-900">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by GNT
            Technology
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
