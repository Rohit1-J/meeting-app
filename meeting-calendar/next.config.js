/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // distDir: "build",
  env: {
    TWILIO_VIDEO_APP_URL: process.env.TWILIO_VIDEO_APP_URL,
    // "https://video-app-4265-5450-dev.twil.io/?passcode=07385842655450"
  },
};

module.exports = nextConfig;
