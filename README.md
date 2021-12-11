[![Build status](https://ci.appveyor.com/api/projects/status/1s85jmt8ilnh54gc?svg=true)](https://ci.appveyor.com/project/ajoq/ajs-homeworks-10-async-10-3-testing-async-code)

## Testing Async code (задача со звёздочкой)

**Важно**: данная задача не является обязательной 

### Легенда

Асинхронный код - это здорово, но заглушки, которые были в предыдущих задачах ([задача 1](https://github.com/ajoq/ajs-homeworks_10-async_10.1-promises), [задача 2](https://github.com/ajoq/ajs-homeworks_10-async_10.2-async-await)) всегда resolv'ятся, а в реальной жизни так бывает не всегда.

### Описание

Используя механизмы Jest, замокайте функции-заглушку `read`, чтобы у вас была возможность протестировать как `resolve`, так и `reject` на выходе из этой функции.

Должно обеспечиваться 100% покрытие функций и классов, которые вы тестируете. Обратите внимание, что вы тестируете асинхронный код.

**Подсказка**: чтобы было удобно замокать эту функцию, вынесите её в отдельный модуль.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете. Обратите внимание, что вы тестируете асинхронный код.

Обратите внимание, для упрощения настройки Babel лучше добавить отдельную конфигурацию для режима тестирования (в файле `.babelrc`) после `presets` добавьте:

```json
  "env": {
    "test": {
      "presets": [
        [
          "@babel/preset-env",
          {
            "targets": {
              "node": "current"
            }
          }
        ]
      ]
    }
  }
```