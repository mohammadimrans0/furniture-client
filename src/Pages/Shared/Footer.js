import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import { FaFacebookSquare, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
      <div>
        <footer className="text-gray-600 body-font mt-10">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <Link
                to="/"
                className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
              >
                <img className="w-28" src={logo} alt="" />
                <span className="ml-3 text-xl">Furniture</span>
              </Link>
              <p className="mt-2 text-sm text-gray-500">
                Welcome to a place of refinement and beauty. This is Furniture, a WP
                gem we made for all furniture stores & brands.
              </p>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                      First Link
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                      Second Link
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                      Third Link
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                      Fourth Link
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                      First Link
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                      Second Link
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                      Third Link
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                      Fourth Link
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                      First Link
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                      Second Link
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                      Third Link
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                      Fourth Link
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                      First Link
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                      Second Link
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                      Third Link
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                      Fourth Link
                    </Link>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-500 text-sm text-center sm:text-left">
                © 2020 Furniture —
                <Link
                  to="/"
                  href="https://twitter.com/knyttneve"
                  rel="noopener noreferrer"
                  className="text-gray-600 ml-1"
                  target="_blank"
                >
                  @mohammadimran
                </Link>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-xl">
                <Link to="/" className="text-gray-500">
                  <FaFacebookSquare/>
                </Link>
                <Link to="/" className="ml-3 text-gray-500">
                  <FaTwitter/>
                </Link>
                <Link to="/" className="ml-3 text-gray-500">
                  <FaLinkedin/>
                </Link>
                <Link to="/" className="ml-3 text-gray-500">
                 <FaInstagram/>
                </Link>
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;