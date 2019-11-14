const path = require('path')

module.exports = {
    mode: 'development',//'production' 
    
    plugins: [
        
    ],
    module: {//所有第三方模块的匹配规则
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: '/node_modules/' },
            // {test:/\.css$/,use:['style-loader','css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]']}
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            },

                        }
                    }

                    , 'sass-loader']
            },
            {
                test: /\.ttf|woff|woff2|eot|svg$/,
                use: 'url-loader' 
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.join(__dirname, './src')
        }
    }
}

//使用export default{} 行不行？不行。
//这是ES6向外导出模块的API，对应 import ** from '路径'