import Link from "next/link";

import StyledNav from "./styled/nav";

export default function header() {
  return (
    <StyledNav aria-label="Main Navigation">
      <Link href="/">
        <a aria-label="Homepage" className="logo">
          <svg>
            <use xlinkHref="/logo.svg#logo" />
          </svg>
          NextJS Emotion Tailwind Starter
        </a>
      </Link>
    </StyledNav>
  );
}
