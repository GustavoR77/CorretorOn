"use client"

import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";
import FooterDownload from "./FooterDownload";
import { Toast } from "primereact/toast";
import { useContext } from "react";
import { NotifyContext } from "@/providers/NotifyProvider";

const Footer = () => {
  const {notify} = useContext(NotifyContext)
  
  return (
    <>
      <FooterDownload />
      <footer className="flex flex-col text-black-100 background-navy">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px:6 py-10">
          <div className="flex flex-col justify-start md-items-start items-center gap-6">
            <Image
              src="/logo.png"
              alt="logo"
              width={161}
              height={32}
              className="object-contain"
            />
            <p className="text-xs footer-text">
              Lorem ispum dolor sit amet swinx <br />
              admir notorium sans net Lorem
              <br /> ispum dolor sit amet swinx admir
              <br /> notorium sans net.
            </p>
            <div className="flex gap-6">
              <Link href="https://facebook.com/corretoron.helbor">
                <Image
                  src="/FacebookLogo.svg"
                  alt="Facebook Logo"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://instagram.com/corretoron.helbor">
                <Image
                  src="/InstagramLogo.svg"
                  alt="Instagram Logo"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://br.linkedin.com/company/corretoron-helbor">
                <Image
                  src="/LinkedinLogo.svg"
                  alt="Linkedin Logo"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <div className="footer__links">
            {footerLinks.map((link, i) => (
              <div key={link.title} className="footer__link">
                <h3 className="font-bold text-sm text-white">{link.title}</h3>
                {link.links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="footer-text text-sm"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap sm:px-16 px-6 py-10">
          <div className="footer__copyrights-link">
            <Link href="/" className="footer-text">
              @ 2023 Corretor On
            </Link>
          </div>
        </div>
      </footer>
      <Toast ref={notify} className={'text-sm w-80'} />
    </>
  );
};

export default Footer;
