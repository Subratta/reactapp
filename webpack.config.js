var config = {
    entry: './main.js',
  	output: {
    filename: 'index.js',
    path: __dirname
    },

    devServer: {
    	inline: true,
    	port: 8080
    },

    module: {
    	loaders:[
    		{
    			test: /\.js?/,
    			exclude: '/node_nodules/',
    			loader: 'babel-loader',
    			query:{
    				presets: ['es2015', 'react']
    			}
    		}
    	]
    }

};

module.exports = config;