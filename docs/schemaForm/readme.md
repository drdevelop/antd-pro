---
nav:
  title: schema表单
group:
  title: 概述
  order: 0
toc: content
---

## 命名
我们命名为antd pro x，antd pro意为antd的高阶组件，x意为无限可能

## 初衷
中后台项目有很多表单项，用jsx的形式开发非常耗时，且不利于复用，这时候急需一款既使用简单扩展性又强，且能满足所有复杂业务场景的解决方案，纵观业界现有的formily和antd-pro form，它们各有优劣，但都不足够好，使用不足够简单、适用场景不能足够复杂、学习成本过高，这时候便诞生了我们的schemaForm。

## 定位
就像code、lowcode和nocode，我们的定位与lowcode非常相似，schemaForm介于普通表单和全schema表单之间，我们在schema使用便捷的同时，又利用`分组渲染`的原理保留了极复杂业务场景的扩展性与普适性。

## 行业对比

| 解决方案 | reactive | 分组渲染 | 数据多加载模式<br/>（预加载和懒加载） | 性能 | 
| ----- | ------ | --- | -- | -- |
| antd-pro-x form（当前） | ✅ | ✅ | ✅ | ⭐️⭐️⭐️ |
| formily | ❎ | ❎ | ❎ | ⭐️⭐️⭐️⭐️⭐️ |
| antd pro form | ✅ | ❎ | ❎ | ⭐️⭐️⭐️⭐️ |
