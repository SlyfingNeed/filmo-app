import { plugin } from 'postcss';

/** @type {import('next').NextConfig} */
const nextConfig = {};

plugin: [
    function ({}) {
        const newUtilities = {
            '.no-scrollbar::-webkit-scrollbar': {
                display: 'none',
            },
            '.no-scrollbar': {
                '-ms-overflow-style': 'none',
                'scrollbar-width': 'none',
            },
        }

        addUtilities(newUtilities)
    }
]
export default nextConfig;
