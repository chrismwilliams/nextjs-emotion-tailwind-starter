import { tw, styled } from "twin.macro";

const StyledCard = styled.div`
  ${tw`relative flex flex-col overflow-hidden`};
  .card-content {
    ${tw`p-4`};
  }
`;

export default StyledCard;
