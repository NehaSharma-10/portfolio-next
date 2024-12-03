import React from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
const ContactMe = () => {
  return (
    <>
      <main className="w-full ">
        <div className="container mx-auto flex flex-col lg:flex-row  gap-20 pt-20">
          <div className="w-full lg:w-1/2">
            <p className="text-center">Any Queries? let's connect</p>
            <div className="mt-3 flex gap-4 justify-center">
              <Link
                className="border-1 border-[#fff] p-3"
                target="_blank"
                href="https://github.com/NehaSharma-10/"
              >
                <GitHubIcon className="text-[#fff] text-[30px]" />
              </Link>

              <Link
                className="border-1 border-[#fff] p-3"
                target="_blank"
                href="https://www.linkedin.com/in/nehasharma8529/"
              >
                <LinkedInIcon className="text-[#fff] text-[30px]" />
              </Link>
              <Link
                target="_blank"
                className="border-1 border-[#fff] p-3"
                href="mailto:nehasharma8529@gmail.com"
              >
                <EmailIcon className="text-[#fff] text-[30px]" />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <form
              action=""
              className="w-5/6 flex flex-col justify-center gap-3"
            >
              <div>
                <p>Send a message</p>
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your name"
                className="px-3 py-2"
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                className="px-3 py-2"
              />
              <textarea
                width="100%"
                rows={10}
                cols={30}
                name=""
                id=""
                placeholder="Any Message"
                className="px-3 py-2"
              ></textarea>
              <div className="flex justify-center items-start">
                <button
                  type="submit"
                  className="bg-[#fff] text-[#000] w-1/3 px-5 py-2"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactMe;
