/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
    reactStrictMode: false,
    experimental: {
        webpackBuildWorker: false,
        taint: true
    },
    env: {
        customKey: process.env.CUSTOM_KEY,
    },
    images: {
        domains: ['http://localhost', "i.pravatar.cc"],
        remotePatterns: [
            {
                protocol: "http",
                hostname: "**",
            },
        ],
    },
    webpack: (config) => {
        // camelCase style names from css modules
        config.module.rules
            ?.find(({oneOf}) => !!oneOf).oneOf
            .filter(({use}) => JSON.stringify(use)?.includes('css-loader'))
            .reduce((acc, {use}) => acc.concat(use), [])
            .forEach(({options}) => {
                if (options.modules) {
                    options.modules.exportLocalsConvention = 'camelCase';
                }
            });
        return config;
    },
    transpilePackages: [
        // antd & deps
        "@ant-design",
        "@rc-component",
        "antd",
        "rc-cascader",
        "rc-checkbox",
        "rc-collapse",
        "rc-dialog",
        "rc-drawer",
        "rc-dropdown",
        "rc-field-form",
        "rc-image",
        "rc-input",
        "rc-input-number",
        "rc-mentions",
        "rc-menu",
        "rc-motion",
        "rc-notification",
        "rc-pagination",
        "rc-picker",
        "rc-progress",
        "rc-rate",
        "rc-resize-observer",
        "rc-segmented",
        "rc-select",
        "rc-slider",
        "rc-steps",
        "rc-switch",
        "rc-table",
        "rc-tabs",
        "rc-textarea",
        "rc-tooltip",
        "rc-tree",
        "rc-tree-select",
        "rc-upload",
        "rc-util",
    ]
};

export default withNextIntl(nextConfig);
