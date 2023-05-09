/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	webpack(config) {
		config.experiments = { ...config.experiments, topLevelAwait: true };
		return config;
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig
