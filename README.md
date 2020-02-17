# 2019-ncov

[Vue CLI](https://cli.vuejs.org/guide/creating-a-project.html)
`vue create 2019-ncov`

## Project setup

```s
yarn data
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

## Notes

[stylus-lang](http://stylus-lang.com/try.html)

## deploy

`yarn add gh-pages`

package.json

```js
"homepage": "https://jacobhsu.github.io/2019-nCov/",
  "scripts": {
    "deploy": "yarn build && gh-pages -d dist"
  },
```

vue.config.js

```js
module.exports = {
    publicPath: '2019-nCov'
}
```

## References

border-1px/[2019-nCov](https://github.com/border-1px/2019-nCov)  
[echarts](https://echarts.apache.org/zh/index.html)  
[vue-echarts](https://github.com/ecomfe/vue-echarts)/src/components/[ECharts.vue](https://github.com/ecomfe/vue-echarts/blob/master/src/components/ECharts.vue)
