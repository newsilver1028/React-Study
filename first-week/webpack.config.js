var path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ],
   entry : './src/test.js',
    output: {
        filename : 'bundle.js',
        path : path.resolve(__dirname + '/build')
    },
    mode : 'none',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};

const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv');
 
module.exports = (env) => {
// 여기서 첫번째 인자인 env는 아까 위 커맨드에서 --env 이후 값으로 받아올 수 있고
// 그다음 options는 추가적으로 설정한 값들을 받아올 수 있습니다.
// 전 여기서 --stage 라는 값을 사용했으니까 options.stage 로 해당 값을 받아올 수 있겠죠??
 
  dotenv.config({
    path: `./env/${'local' || 'server'}.env`
  });
  // 이제 아까 설치했던 dotenv에 config 메서드를 실행해주고
  // env파일의 경로를 env폴더의 options로 받은 stage의 값의 이름으로 된
  // .env 파일('./env/local.env' 또는 './env/server.env') 의 환경 변수를 등록합니다.
 
  console.log(process.env.API_URL);
  // 이렇게 콘솔을 찍어본다면,
  // 'npm run local'로 실행했다면, 'http//localhost'가 출력되고
  // 'npm run server'로 실행했다면, 'https//falsy.me'가 출력되겠죠?
 
  return {
    plugins: [
      new HtmlWebPackPlugin({
        // template: "./src/index.html",
        filename: "./index.html"
      }),
      new webpack.DefinePlugin({
        'process.env.API_URL': JSON.stringify(process.env.API_URL)
      }),
      new webpack.EnvironmentPlugin(['API_URL'])
    ],
    devtool: 'source-map',
    mode: 'development',
  };
};