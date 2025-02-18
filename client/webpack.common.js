import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import * as url from 'url';

const BUILD_ENVS = {
    dev: 'development',
    prod: 'production',
};
// eslint-disable-next-line no-underscore-dangle
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const RESOURCES_PATH = path.resolve(__dirname);
const ENTRY_REACT = path.resolve(RESOURCES_PATH, 'src/index.tsx');
const HTML_PATH = path.resolve(RESOURCES_PATH, 'src/index.html');

const PUBLIC_PATH = path.resolve(__dirname, '../build/static');

const BUILD_ENV = BUILD_ENVS[process.env.BUILD_ENV];

const isDev = BUILD_ENV === BUILD_ENVS.dev;

const currentYmdHis = (() => {
    const now = new Date();
    const Y = now.getFullYear();
    const m = (now.getMonth() + 1).toString().padStart(2, '0');
    const d = now.getDate().toString().padStart(2, '0');
    const H = now.getHours().toString().padStart(2, '0');
    const i = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');
    return `${Y}${m}${d}${H}${i}${s}`;
})();

const config = {
    mode: BUILD_ENV,
    target: 'web',
    context: RESOURCES_PATH,
    entry: {
        main: ENTRY_REACT,
    },
    output: {
        path: PUBLIC_PATH,
        filename: `[name].${currentYmdHis}.js`,
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.ya?ml$/,
                type: 'json',
                use: 'yaml-loader',
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            root: PUBLIC_PATH,
            verbose: false,
            dry: false,
        }),
        new HtmlWebpackPlugin({
            inject: true,
            cache: false,
            chunks: ['main'],
            template: HTML_PATH,
        }),
        new MiniCssExtractPlugin({
            filename: isDev ? '[name].css' : `[name].${currentYmdHis}.css`,
            chunkFilename: isDev ? '[id].css' : `[id].${currentYmdHis}.css`,
        }),
    ],
};

export default config;
