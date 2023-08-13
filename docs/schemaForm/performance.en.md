---
nav:
  title: schema form
title: Performance
order: 6
toc: content
---

## Performance optimize

antd-pro-schema-form internal default to listening to the following props for re rendering the schema to avoid performance loss or page lag caused by frequent re rendering of the schema.
- schema
- schemaGroups
- globalState

Of course, if this does not meet your needs, it is also easy for you to force a re rendering of the schema. You can call it through the `forceRefresh` method of ref.
