import tw, { styled } from "twin.macro";

const StyledNav = styled.nav`
  ${tw`grid py-2 text-xl text-gray-800 place-content-center`};
  .logo {
    ${tw`flex items-center justify-center py-2`};
    svg {
      ${tw`block w-10 h-12 mr-4`};
    }
  }
`;

export default StyledNav;
