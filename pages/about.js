import { NextSeo } from "next-seo";

import { Layout } from "../components/elements";
import StyledAboutPg from "../components/styled/about-pg.js";

export default function AboutPage() {
  return (
    <>
      <NextSeo title="About" />
      <Layout>
        <StyledAboutPg>
          <h1>About</h1>
          <div>
            <div className="section starter">
              <h2>NextJS Emotion Tailwind Starter</h2>
              <p>
                A NextJS starter combining some of my favourite libraries to
                create an awesome template to build your own website!
              </p>
            </div>
            <div className="section tech">
              <h2>Tech Stack</h2>
              <ul>
                <li>
                  <a
                    className="next"
                    href="https://www.gatsbyjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NextJS:
                  </a>{" "}
                  A blazing fast React framework for building websites & apps.
                </li>
                <li>
                  <a
                    className="emotion"
                    href="https://emotion.sh/docs/introduction"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Emotion:
                  </a>{" "}
                  Library designed for writing css styles with JavaScript.
                </li>
                <li>
                  <a
                    className="tailwind"
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tailwind CSS:
                  </a>{" "}
                  CSS framework that gives you all of the building blocks you
                  need to build bespoke designs with low-level utility classes.
                </li>
              </ul>
            </div>
            <div className="section features">
              <h2>Features</h2>
              <ul>
                <li>Filesystem based routing</li>
                <li>SEO friendly</li>
                <li>Support for Google Analytics</li>
                <li>Mobile friendly through Tailwind's utility classes</li>
                <li>
                  Statically generated and server-rendered React applications
                </li>
                <li>
                  Host your own static website on{" "}
                  <a
                    href="https://www.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Netlify
                  </a>
                  ,{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vercel
                  </a>
                  ,{" "}
                  <a
                    href="https://surge.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Surge
                  </a>
                  , and many more!
                </li>
              </ul>
            </div>
          </div>
        </StyledAboutPg>
      </Layout>
    </>
  );
}
