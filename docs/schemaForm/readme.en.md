---
nav:
  title: schema form
title: Introduction
order: 0
toc: content
---

## Name
we named it is antd-pro-schema-form, antd pro means a higher-order component of antd，schema form means protocol form.

## Motivation
Middle and Backend projects have many form item，if you use jsx to develop it, this will be very time-consuming, and not convenient for reuse; Then we need a solution, not only easy to use、strong extensibility, but also capable of meeting all complex business scenarios. Looking at the existing formats in the industry, @ant-design/pro-form and ant formily each have their own advantages and disadvantages, but they are not good enough. They are not easy to use, their application scenarios are not complex enough, and their learning costs are too high. At this point, our schemaForm was born.

## Position
Just like code, lowcode, and nocode, our positioning is very similar to lowcode. The schemaForm is between a regular form and a full schema form. While the schema is convenient to use, we also use the principle of 'group rendering' to preserve the scalability and universality of extremely complex business scenarios.

## Comparision

| lib | reactive | group render | load data multiple mode<br/>(preload、lazyload) | performance | 
| ----- | ------ | --- | -- | -- |
| antd-pro-schema-form（current） | ✅ | ✅ | ✅ | ⭐️⭐️⭐️ |
| formily | ❎ | ❎ | ❎ | ⭐️⭐️⭐️⭐️⭐️ |
| @ant-design/pro-form | ✅ | ❎ | ❎ | ⭐️⭐️⭐️⭐️ |
