---
nav:
  title: schema表单
group:
  title: 性能优化
  order: 6
toc: content
---

## 性能优化

我们默认监听了如下props进行重渲染schema，避免重渲染schema过于频繁导致性能损耗或页面卡顿
- schema
- schemaGroups
- globalState

当然如果这不满足您的需求，您想强制重渲染schema也是轻而易举的，可以通过ref的`forceRefresh`方式调用即可
