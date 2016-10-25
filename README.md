# tutu js test

# Fuzbuz задачи

## Задача №1

Написать функцию dscount, которая подсчитывает количество идущих подряд символов s1 и s2 в строке, без учёта регистра.
Функция должна пройти следующие тесты, как минимум:

```js
 function dscount(str, s1, s2) {
            var count = ((str.match(new RegExp(s1+s2, "gi")) || []).length);
            return count;
        }
```
