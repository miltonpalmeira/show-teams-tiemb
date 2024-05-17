/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.api-futebol.com.br',
                port: '',
                pathname: '/**'
            }
        ]
    },
};

export default nextConfig;
