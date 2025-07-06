import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="text-sm text-gray-800">
      {/* Upper Section */}
      <div className="bg-gray-100 p-6 space-y-4">
        <p>
          <a href="#" className="text-blue-600 underline">
            Online Banking Service Agreement
          </a>
        </p>
        <p>
          Investing in securities involves risks, and there is always the
          potential of losing money when you invest in securities. You should
          review any planned financial transactions that may have tax or legal
          implications with your personal tax or legal advisor.
        </p>
        <p>
          Securities products are provided by Merrill Lynch, Pierce, Fenner &
          Smith Incorporated (also referred to as "MLPFS", or "Merrill"), a
          registered broker-dealer, registered investment adviser,{" "}
          <a href="#" className="text-blue-600 underline">
            Member SIPC
          </a>
          , and a wholly-owned subsidiary of Bank of America Corporation. MLPFS
          makes available certain investment products sponsored, managed,
          distributed or provided by companies that are affiliates of Bank of
          America Corporation.
        </p>
        <p>
          Bank of America Private Bank is a division of Bank of America, N.A.,
          Member FDIC and a wholly owned subsidiary of Bank of America
          Corporation. Trust and fiduciary services are provided by Bank of
          America, N.A. and U.S. Trust Company of Delaware. Both are indirect
          subsidiaries of Bank of America Corporation.
        </p>
        <p>
          Insurance Products are offered through Merrill Lynch Life Agency Inc.
          (MLLA) and/or Banc of America Insurance Services, Inc., both of which
          are licensed insurance agencies and wholly-owned subsidiaries of Bank
          of America Corporation.
        </p>
        <p>
          Banking, credit card, automobile loans, mortgage and home equity
          products are provided by Bank of America, N.A. and affiliated banks,
          Members FDIC and wholly owned subsidiaries of Bank of America
          Corporation. Credit and collateral are subject to approval. Terms and
          conditions apply. This is not a commitment to lend. Programs, rates,
          terms and conditions are subject to change without notice.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#002d72] text-white p-6">
        <div className="flex flex-wrap justify-center gap-3 text-sm mb-4">
          <a href="#" className="hover:underline">
            Locations
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Help & Support
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Browse with Specialist
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Accessible Banking
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Children’s Privacy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Security
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Online Banking Service Agreement
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            View Full Online Banking Site
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 text-sm mb-4">
          <a href="#" className="hover:underline">
            Advertising Practices
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Your Privacy Choices
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Site Map
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Careers
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Share Your Feedback
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 text-xl mb-4">
          <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
          <FaInstagram className="hover:text-gray-300 cursor-pointer" />
          <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
          <FaPinterestP className="hover:text-gray-300 cursor-pointer" />
          <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
          <FaYoutube className="hover:text-gray-300 cursor-pointer" />
        </div>

        {/* Legal Text */}
        <div className="text-center text-sm">
          <p>
            Bank of America, N.A. Member FDIC.{" "}
            <a href="#" className="underline">
              Equal Housing Lender
            </a>{" "}
            <span className="inline-block align-middle">🏠</span>
          </p>
          <p>© 2025 Bank of America Corporation. All rights reserved.</p>
          <a href="#" className="underline">
            Patent: patents.bankofamerica.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
