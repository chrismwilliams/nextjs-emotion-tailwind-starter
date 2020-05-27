import { FaCodepen, FaGithub, FaTwitter } from "react-icons/fa";

import StyledSocialList from "./styled/social-list";

export default function SocialList(props) {
  return (
    <StyledSocialList className="social-list" {...props}>
      <li>
        <a
          href="https://github.com/chrismwilliams/nextjs-emotion-tailwind-starter"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/chrismwilliams/nextjs-emotion-tailwind-starter"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FaTwitter />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/chrismwilliams/nextjs-emotion-tailwind-starter"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FaCodepen />
        </a>
      </li>
    </StyledSocialList>
  );
}
