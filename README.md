Loader Connect
=================

- [![Dependencies Status](https://david-dm.org/JacksonTian/loader-connect.png)](https://david-dm.org/JacksonTian/loader-connect)

## Introduction

Loader Connect是一个适配Connect/Express的静态资源加载器，它基于静态文件的文件扩展名来对源文件进行编译。

目前支持`.less`、`.styl`编译为CSS文件。`.coffee`、`.es`编译为普通的JavaScript文件。

从扩展名可以看出来，它使用了less/stylus/coffeescript/babel来编译文件。

## Usage
你可以像普通的`.css`/`.js`文件一样来加载拥有这些带有不同后缀名的文件：

```html
<script src="/assets/scripts/home.js"></script>
<script src="/assets/scripts/home.es"></script>
<script src="/assets/scripts/home.coffee"></script>
<link rel="stylesheet" href="/assets/styles/home.css" />
<link rel="stylesheet" href="/assets/styles/home.less" />
<link rel="stylesheet" href="/assets/styles/home.styl" />
```

如果没有Loader Connect的支持，它们将向浏览器输出原始的编码。

然而浏览器并不一定能直接运行`.es`/`.coffee`/`.less`/`.styl`文件。

### 启用编译支持
在你的Connect/Express项目中，可以通过如下方式来启用文件的自动编译。

安装本模块：

```sh
$ npm install loader-connect
```

添加中间件：

```js
var Loader = require('loader-connect');
// Loader.less一定要在静态文件中间件之前，否则.less文件会被静态文件中间件所处理
app.use(Loader.less(__dirname));
// Loader.stylus一定要在静态文件中间件之前，否则.styl文件会被静态文件中间件所处理
app.use(Loader.stylus(__dirname));
// Loader.coffee一定要在静态文件中间件之前，否则.coffee文件会被静态文件中间件所处理
app.use(Loader.coffee(__dirname));
// Loader.babel一定要在静态文件中间件之前，否则.es文件会被静态文件中间件所处理
app.use(Loader.babel(__dirname));
app.use('/assets', connect.static(__dirname + '/assets', {
  maxAge: 3600000 * 24 * 365
}));
```

以上的方式特别适合在开发环境中进行。

## License
The MIT License
