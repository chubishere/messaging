#Config notes

##Webpack

Regarding:
new webpack.ContextReplacementPlugin(
		/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
		path.resolve(__dirname, 'doesnotexist/')
)

Fixes
`Warning./~/@angular/core/src/linker/system_js_ng_module_factory_loader.js
71:15-36 Critical dependency: the request of a dependency is an expression`

See
https://github.com/angular/angular/issues/11580

#Useful links
https://angular.io/docs/ts/latest/guide/typescript-configuration.html
https://angular.io/docs/ts/latest/guide/webpack.html
