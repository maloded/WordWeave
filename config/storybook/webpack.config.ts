import path from 'path';
import type webpack from 'webpack';
import { DefinePlugin } from 'webpack';
import { type BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  if (config?.module?.rules) {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: any) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  };

  config?.module?.rules?.push({ test: /\.svg$/, use: ['@svgr/webpack'] });
  config?.module?.rules?.push(cssLoader);

  config?.plugins?.push(new DefinePlugin({
    __IS_DEV__: true,
  }));

  return config;
};
