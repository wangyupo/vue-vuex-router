#!/bin/sh

echo "开始初始化模版..."
echo "我们需要精简一些项目无关文件，请放心使用"
rm -rf 使用说明.md LICENSE README.md
echo "开始将模版替换为简洁版本"
cp './src/views/template.vue' './src/views/home.vue'
cp './src/views/template.vue' './src/views/about.vue'
echo "模版初始化完成，开始销毁本脚步和模版文件，祝开发顺利！"
rm -rf './src/views/template.vue' init.sh
