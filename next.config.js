const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "misty-test";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubPages ? `/${repoName}` : "");

const nextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    unoptimized: true,
  },
  ...(isGithubPages
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath,
        trailingSlash: true,
      }
    : {}),
};

module.exports = nextConfig;
