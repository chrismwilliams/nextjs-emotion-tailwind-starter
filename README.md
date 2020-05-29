<p align="center">
  <img alt="Starter Logo" src="./public/icon.png" width="80" />
</p>
<h1 align="center">
  NextJS Emotion Tailwind Starter
</h1>

A starter template to create a lightening-fast static website. Comes pre-built with NextJS, Emotion, and Tailwind to get you up and running quickly.

[Demo](nextjs-emotion-tailwind-starter.now.sh) hosted on Vercel.

[![Deploy to Vercel](/button)](https://vercel.com/import/project?template=https://github.com/chrismwilliams/nextjs-emotion-tailwind-starter)

## Features

- React framework [NextJS](https://www.nextjs.org/)
- CSS-in-JS library [Emotion](https://emotion.sh/) for your styled components
- CSS utility framework [Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind/) to quickly add style
- Google Analytics
- Simple SEO

## Getting started

```sh
# download the template zip via dropdown or
git clone https://github.com/chrismwilliams/gatsby-emotion-tailwind-starter.git
```

## Start developing

_Navigate into directory_

```sh
# install dependencies
yarn install

# develop -> localhost:3000
yarn dev

# build for production
yarn build
```

**Using Emotion & Tailwind**

With the CSS utility library Tailwind you can quickly add styles and responsive design, all without having to write any css. Emotion allows you to name and style elements within your js files.

```JSX
/*
  import {tw, styled} from 'twin.macro';

  ** Creating a styled div, centering children via flex-box **
*/

const StyledDiv = styled.div`
  ${tw`flex justify-center items-center`}
`

const AltStyledDiv = tw.div`flex justify-center items-center`

return (
 <>
    <StyledDiv>
      <p>I'm centred</p>
      <p>Me too!</p>
    </StyledDiv>
    <AltStyledDiv>
      <p>Same here</p>
    </AltStyledDiv>
 </>
);
```

The [tailwind docs](https://tailwindcss.com) are a great resource to get you started. The starter uses [twin.macro](https://github.com/ben-rogerson/twin.macro) which also has some additional helpful utilities.

**Customisation**

- [Tailwind config](https://tailwindcss.com/docs/configuration). Open up the `tailwind.config.js` file to set your own project preferences & requirements, such as break-points, colours, and fonts.

- A layout component (`components/elements/layout.js`) is used for setting a standardised default layout.

- Remember to add any chosen font(s) into `tailwind.config.js`, either the fonts sans/serif array, in order to use tailwind utilities.

- SEO component allowing you to add your SEO title's & descriptions. Configure site/app defaults in `utils/next-seo.config.js`

- Favicon. Replace the current favicon (`public/favicon.ico`) with your own.

- Analytics. Add your google analytics id in an .env file with the key `GOOGLE_ANALYTICS_ID`.

- Find out more on working with .env files with NextJS [here](https://nextjs.org/docs/basic-features/environment-variables) and how to add your own to `next.config.js`.
