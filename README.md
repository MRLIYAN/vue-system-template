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
    redirect：和vue路由对象一致，存放要重定向的路径，用于一级菜单没有子菜单的情况下，重定向用；以及面包屑点击重定向到第一个子路由用，一般
            只要有children就要加重定向
    meta对象：定义其他的一些属性
        title（String）：
                路由的标题，对应菜单中要显示的名字，必填，不填菜单空了，没名字了。
        isChild（true（有子级菜单）/false（没有子菜单））：
                判断是否有子级菜单的，children不能作为判断子级菜单的标准，因为当一级菜单跳转时，必须要添加一个children子级路由，并且重定向到
                该子级路由中，如果当一级菜单只有一个子级路由的时候，都有子级路由，情况重复。不填表示默认没有子级菜单，有子级菜单，必填，推荐有
                没有都是必填项。
        icon（String）：
                定义图标名称，目前使用的element的图标库名字，可自行更改，使用其他的方式也可以，添加就会显示图标。
        hidden（true（显示）/false（不显示））：
                当前路由是否需要在菜单中显示，比如404，登录，布局等其他非菜单路由则需要过滤，不加默认不显示，要显示的菜单路由必须要加改属性，不
                加会默认不显示。
        breadCrumb（true（允许显示）/false（不显示））：
                是否在面包屑中显示
        breadCrumbClick（true（点击可跳转）/false（点击不可跳转））：
                是否允许面包屑点击，并且跳转路由，添加改属性，面包屑不可点击，点击不会跳转路由

            

