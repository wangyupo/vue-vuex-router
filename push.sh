#!/bin/sh

echo "正在添加文件..."
git add .
echo -n "正在提交备注...，请填写备注（可空）"
read remarks
if [ ! -n "$remarks" ];then
	remarks=""
fi
git commit -m "$remarks"
echo "正在开始提交代码..."
git push
echo "代码提交成功，正在关闭..."
