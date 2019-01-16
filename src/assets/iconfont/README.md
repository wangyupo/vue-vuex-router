## 为什么以及如何使用以icon font?

### 为什么？

```
iconfont在针对小型图标的处理上能帮助我们减少网络请求，而且更便于控制（如：用css的font-size、color即可控制其大小、颜色）
```

### 如何使用？

```
1、登陆iconfont —— http://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2
2、选择自己想用的图标到购物车
3、点击购物车，将图标添加到一个项目中去
4、进入项目，选择Font class
5、点击下载至本地
6、将以下文件拷贝自己的项目目录去iconfont.eot、iconfont.svg、iconfont.ttf、iconfont.woff、iconfont.css
7、在需要使用的地方@import 'iconfont.css'
8、用以下方式即可应用图标
    <i class="iconfont icon-xxx"></i>

补充:
图标的大小和颜色可以通过css来控制，比如：color: #ff6632;font-size: 16px;
```

### svg如何转换成iconfont？

```
1、进入iconfont的上传页面 —— https://www.iconfont.cn/icons/upload?spm=a313x.7781069.1998910419.d059fa781
2、将你的svg上传上去
3、在"图标管理" - "我的图标" - "我上传的icon"中，把icon添加到购物车
4、将购物车里所有icon添加到项目中
5、找到"我的项目"，点击"下载到本地"
6、svg转iconfont完成
```
