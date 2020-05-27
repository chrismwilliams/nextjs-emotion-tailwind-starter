import Link from "next/link";

import StyledHeader from "./styled/header";

export default function header() {
  return (
    <StyledHeader>
      <nav role="navigation">
        <ul>
          <li className="logo">
            <Link href="/">
              <a aria-label="Homepage">
                <svg>
                  <use xlinkHref="/logo.svg#logo" />
                </svg>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
