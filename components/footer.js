import StyledFooter from "./styled/footer";
import SocialList from "./elements/social-list";

export default function Footer() {
  return (
    <StyledFooter>
      <p className="title">
        <svg>
          <use xlinkHref="/logo.svg#logo" />
        </svg>
        NextJS Emotion Tailwind Starter
      </p>
      <SocialList />
      <p className="author">
        Created by{" "}
        <a
          href="https://github.com/chrismwilliams/nextjs-emotion-tailwind-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chris Williams
        </a>
      </p>
    </StyledFooter>
  );
}
