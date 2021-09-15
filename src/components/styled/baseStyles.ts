import tw, { css } from 'twin.macro'

const baseStyles = css`
  body {
    ${tw`font-sans font-normal`};

    #__next {
      ${tw`max-w-4xl mx-auto`};
    }

    #skip-link {
      ${tw`sr-only focus:(not-sr-only fixed left-1 top-1.5)`};
    }

  }
`

export default baseStyles