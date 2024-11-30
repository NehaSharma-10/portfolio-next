import React from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const FrontPage = () => {
  return (
    <>
      <main className="flex flex-col">
        <div>
          <h1 className="lg:text-8xl md:text-6xl font-bold blueClr mb-3">
            {" "}
            <span className="text-[##020617]"> Neha Sharma</span>
          </h1>
          <p className="text-3xl blueClr uppercase text-center font-semibold">
            Frontend Engineer
          </p>
          <p className="mt-4 blueClr text-center">
            Creating smooth, dynamic websites that leave lasting impressions.
          </p>
        </div>

        <div className="mt-8">
          <ul className="flex gap-4 justify-center">
            <li>
              <Link target="_blank" href="https://github.com/NehaSharma-10/">
                <GitHubIcon className="blueClr text-[50px]" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/nehasharma8529/"
              >
                <LinkedInIcon className="blueClr text-[50px]" />
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default FrontPage;
