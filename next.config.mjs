/** @type {import('next').NextConfig} */
const nextConfig = {
    // `output: 'export'` disables Server Actions and API routes — keep default (Node) if you use DB.
    images: { unoptimized: true }
};

export default nextConfig;
