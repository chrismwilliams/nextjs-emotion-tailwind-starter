import tw, { css, theme } from 'twin.macro'

const baseStyles = css`
  .light {
    --text-primary: ${theme`colors.gray.700`};
    --bg-primary: ${theme`colors.white`};
  }
  
  .dark {
    --text-primary: ${theme`colors.gray.200`};
    --bg-primary: ${theme`colors.gray.900`};
  }

  body {
    ${tw`min-h-screen font-sans font-normal text-primary`};

    #__next {
      ${tw`grid max-w-4xl mx-auto`};
      
      #skip-link {
        ${tw`sr-only focus:(not-sr-only fixed left-1 top-1.5)`};
      }
    }


  }
`

export default baseStyles