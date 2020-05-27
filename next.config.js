// .env files: https://nextjs.org/docs/basic-features/environment-variables

module.exports = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  },
};
