---
sidebar_position: 5
---
# Localization

Support for languages:

- English (en)
- German (de)
- Spanish (es)
- French (fr)
- Italian (it)
- Portuguese Brazil (ptBR)
- Russian (ru)
- Chinese (zh)

Usage:
Pass prop language to Kalend

```
<Kalend
...
language={'de'}
/>
```

You can include your own translation with prop customLanguage. Create json locale file and import it to Kalend

```
import cz from 'cz.json'

<Kalend
...
customLanguage={cz}
/>
```
