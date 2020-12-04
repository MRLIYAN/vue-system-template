# vue-sytem-template
vue+element创建的一个后台管理系统模板
vue-cli4.x

# Project setup
```
npm install
```

## Compiles and hot-reloads for development
```
npm run serve
```

## Compiles and minifies for production
```
npm run build
```

## Lints and fixes files
```
npm run lint
```

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



# 系统中的一些文件定义规则
## 菜单规则：
### 字段介绍
    path：和vue路由对象一致，存放访问路由的路径
    component：和vue路由对象一致，存放路由在项目中对应的路径
    name：和vue路由对象一致，添加路由的name属性
    redirect：和vue路由对象一致，存放要重定向的路径，一般用于一级菜单没有子菜单的情况下
    title：路由的标题，对应菜单中要显示的名字
    meta对象：定义其他的一些属性
        icon：定义图标名称，目前使用的element的图标库名字，可自行更改，使用其他的方式也可以
        hidden：当前路由是否需要在菜单中显示，比如404，布局等其他非菜单路由则需要过滤
        breadCrumb：是否则面包屑中显示
        breadCrumbClick：是否允许面包屑点击，并且跳转路由，（面包屑保存的是菜单路由的父子完整路径，当面包屑中存在折叠的菜单时，折叠的肯
                         定不能跳转，跳转空白页面了）
### 使用规则
    对应menu和menuTree组件的循环规则思路
    1、 一级路由点击跳转需要二级路由才能展示，不添加二级路由直接跳转会刷新当前页面，并没有在router-view中显示。
        所以，当一级路由没有子菜单时，会添加redirect属性，重定向到子菜单显示当前路由，所以，有redirect属性的不需要
        判是否有子级菜单，直接跳过，有子级菜单的则不需要添加redirect属性，再去判断chilren即可。
            

