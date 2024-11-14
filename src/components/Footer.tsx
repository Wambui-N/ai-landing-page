import React from "react";
import WordMark from "./WordMark";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row">
      <div>
        <Link href="/">
          <WordMark />
          <span className="sr-only">Glisten.ai Home Page</span>
        </Link>
      </div>
      <nav aria-label="footer">
        <ul className="flex gap-6">
          {settings.data.naviagation.map((item) => (
            <li key={item.label} className="">
              <PrismicNextLink
                className="inline-flex min-h-11 items-center"
                field={item.link}
              >
                {item.label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
