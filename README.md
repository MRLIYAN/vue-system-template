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
    path：（String|必填）和vue路由对象一致，存放访问路由的路径
    component：（String|必填）和vue路由对象一致，存放路由在项目中对应的路径，一级路由必须是layout，其他的就是路由自己。
    name：（String|必填）和vue路由对象一致，添加路由的name属性，主要用于keep-alive缓存
    redirect：（String| 一级路由必填，重定向到子路由。有子菜单的折叠菜单的路由必填，默认重定向到第一个子菜单）
                和vue路由对象一致，存放要重定向的路径，用于一级菜单没有子菜单的情况下，重定向用；以及面包屑点击重定向到第一个子路由用，一般
               只要有children就要加重定向
    meta对象：定义其他的一些属性
        title（String|必填）：
                路由的标题，对应菜单中要显示的名字，必填，不填菜单空了，没名字了。
        isChild（true（有子级菜单）/false（没有子菜单|必填），也可以用字符串的true,false，判断没用全等）：
                判断是否有子级菜单的，children不能作为判断子级菜单的标准，因为当一级菜单跳转时，必须要添加一个children子级路由，并且重定向到
                该子级路由中，如果当一级菜单只有一个子级路由的时候，都有子级路由，情况重复。不填表示默认没有子级菜单，有子级菜单，必填，推荐有
                没有都是必填项。
        icon（String）：
                定义图标名称，目前使用的element的图标库名字，可自行更改，使用其他的方式也可以，添加就会显示图标。
        hidden（true（显示）/false（不显示），也可以用字符串的true,false，判断没用全等）：
                当前路由是否需要在菜单中显示，比如404，登录，布局等其他非菜单路由则需要过滤，不加默认显示，如果该路由不需要在菜单中显示，必须
                加改该属性。父级加了true，子级菜单默认都不显示
        breadCrumb（true（允许显示）/false（不显示））：
                是否在面包屑中显示，默认显示
        breadCrumbClick（true（点击可跳转）/false（点击不可跳转））：
                是否允许面包屑点击，并且跳转路由，添加改属性，面包屑不可点击，点击不会跳转路由，默认可点击
        keepAlive（true/false）：
                该组件是否允许keep-alive开启缓存，在默认不加的情况下，系统默认会把打开的菜单缓存，在切换菜单和顶部标签时会缓存该路由，当路由关闭
                后，再次打开会自动刷新该路由，如果在任何情况下都不缓存该路由，则必填该属性。

            

