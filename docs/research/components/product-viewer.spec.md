# Product Viewer Section 规格文档

## 概述
"定睛细看"区域，展示 AirPods Pro 3 的 6 个细节视角，带交互切换。

## 布局结构
- Section header: H2 "定睛细看"
- AR CTA: "摆在眼前看看" + ARKit 图标
- 6 个 all-access-pass-pv-item，可切换查看
- 每个项目: 大图 (1728x1728) + 标题 + 描述 + footnote

## 内容数据
1. 音质 - "新的多孔声学架构让低音更沉、音场更广..." ⁴
2. 佩戴体验 - "新耳塞采用内旋设计..." ⁴
3. 心率传感功能 - "内置我们迄今最小的心率传感器..." ³
4. 防尘抗汗抗水 - "首款达到 IP57 级别..." ⁶
5. 触控操作 - "用简单的手势就能轻松操控..." ⁷
6. 充电盒 - "新一代超宽带技术..." ⁸

## 样式
- 背景: 透明
- 产品图居中展示，左右切换按钮
- 描述文字在图片下方

## 交互行为
- 点击/滑动切换不同视角
- 滚动触发 staggered-start 动画
- AR 模型查看链接

## 图片资源
- /images/productViewer/closer_look_initial.jpg
- /images/productViewer/closer_look_acoustic_a.jpg
- /images/productViewer/closer_look_fit_feel.jpg
- /images/productViewer/closer_look_heart_rate.jpg
- /images/productViewer/closer_look_water_resistance.jpg
- /images/productViewer/closer_look_touch_control.jpg
- /images/productViewer/closer_look_case.jpg