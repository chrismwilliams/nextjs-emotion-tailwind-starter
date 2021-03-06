import { tw } from "twin.macro";

const StyledWrapper = tw.main`min-h-screen font-normal text-gray-700 max-w-6xl mx-auto`;

export default function PageWrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
