"use client";

import { useState } from "react";
import Link from "next/link";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue text-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl justify-center p-6 lg:px-8"
      >
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href="#about" className="text-white">
            About Me
          </Link>

          <Link href="#exp" className="text-white ">
            Experience
          </Link>
          <Link href="#exp" className="text-white ">
            Skills
          </Link>

          <Link href="#pro" className="text-white ">
            Projects
          </Link>

          <Link href="#contact" className="text-white">
            Contact Me
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 grid gap-5">
              <div className="space-y-3 py-6 grid">
                <Link href="#about" className="">
                  About Me
                </Link>

                <Link href="#exp" className=" ">
                  Experience
                </Link>
                <Link href="#exp" className="">
                  Skills
                </Link>

                <Link href="#pro" className="">
                  Projects
                </Link>

                <Link
                  href="#contact"
                  className="bg-blue w-fit text-white px-4 py-3"
                >
                  Contact Me
                </Link>
              </div>
              <div className="space-y-1 py-6">
                <ul className="flex gap-4 justify-start mt-5 ">
                  <li>
                    <Link
                      target="_blank"
                      href="https://github.com/NehaSharma-10/"
                    >
                      <GitHubIcon className="blueClr text-[30px]" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/nehasharma8529/"
                    >
                      <LinkedInIcon className="blueClr text-[30px]" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
