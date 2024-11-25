"use client";

import Link from "next/link";
import Image from "next/image";

import { useContext, useEffect, useState } from "react";

import CustomButton from "./CustomButton";
import { AuthContext } from "@/providers/AuthProvider";
import { UserCircle } from "@phosphor-icons/react";
import _ from 'lodash';

var loaded = false

const NavBar = () => {
  const {checkUserLogged, user} = useContext(AuthContext)

  if(!loaded){
    checkUserLogged();
    loaded = true
  }
  
  useEffect(() => {
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    };

    document.addEventListener("scroll", _.debounce(storeScroll, 2));
    storeScroll();
  });

  return (
    <nav className="dark:bg-gray-900 fixed w-full z-20 top-0 left-0 bg-transparent home-header">
      <div className="max-w-screen-xl flex lg:flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            className="h-8 mr-3 mb-2"
            alt="CorretorOn Logo"
            width={161}
            height={32}
          />
        </Link>
        <div className="flex md:order-2">
          {!user ?
            <div className="md:flex hidden">
              <Link href="/cadastro">
                <CustomButton
                  title="Cadastro"
                  btnType="button"
                  containerStyles="btn-text-navy bg-white text-sm hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:w-36"
                />
              </Link>
              <Link href="/login">
                <CustomButton
                  title="Login"
                  btnType="button"
                  containerStyles="text-white bg-blue-700 text-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:w-36 ml-4"
                />
              </Link>
            </div>
            :
            <div className="md:flex hidden">
              <Link href="/area-de-trabalho">
                <UserCircle size={32} className="text-white"/>
              </Link>
            </div>
          }

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 px-3 pr-5"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 text-white text-sm font-medium border border-gray-100 rounded-lg md:flex-row lg:space-x-8 space-x-3 md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:dark:hover:text-gray-200 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:dark:hover:text-gray-200 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/beneficios"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:dark:hover:text-gray-200 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Benefícios
              </Link>
            </li>
            <li>
              <Link
                href="/empreendimentos"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:dark:hover:text-gray-200 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Empreendimentos
              </Link>
            </li>
            <li>
              <Link
                href="/blog/home"
                className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:dark:hover:text-gray-200 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
