/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  images: {
    domains: ["utfs.io", "coddingbucket.s3.ap-south-1.amazonaws.com"],
  },
};

module.exports = withContentlayer({ ...nextConfig });
