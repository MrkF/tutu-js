# Решения

# Fuzbuz задачи

## Задача №1

Написать функцию dscount, которая подсчитывает количество идущих подряд символов s1 и s2 в строке, без учёта регистра.

```js
 
    function dscount(str, s1, s2) {
        var count = ((str.match(new RegExp(s1 + s2, "gi")) || []).length);
        return count;
    }
```

## Задача №2

Реализовать функцию checkSyntax(string), проверяющую на синтаксическую верность последовательность скобок. Задача не сводится к простой проверке сбалансированности скобок. Нужно еще учитывать их последовательность (вложенность).

```js
     function checkSyntax(str) {
        let opening = {
            '[': ']',
            '{': '}',
            '(': ')',
            '<': '>',
        }
        let closing = {
            ']': '[',
            '}': '{',
            ')': '(',
            '>': '<'
        }
        let stack = [];

        for (let i = 0; i < str.length; i++) {

            let current = str[i];
            if (!opening[current] && !closing[current]) continue;

            if (opening[current]) {
                stack.push(current);
            } else {
                if (stack.length != 0) {
                    if (stack.pop() != closing[current]) return 1;
                }
                else {
                    return 1;
                }
            }
        }
        return 0;
    }
```



# Алгоритмы

## Задача №1
- Есть 2 сковороды для оладьев, каждая из которых вмещает ровно по 1 блинчику за 1 раз.
- Есть 3 панкейка (блинчика), которые надо пожарить.
- За 1 минуту жарится 1 сторона блинчика.
- Блинчики надо обжарить с 2х сторон.

Итерацией считать процесс жарки 1й стороны 2х блинчиков на 2х сковородах. Сколько нужно времени (итераций) при оптимальном распределении чтобы пожарить 3 панкейка?

```js
     for (var step = 0; step <= 4; step++) {

        switch (step) {
            case 0:
                confirm('Готовим панкейки в 3 итерации');
                break;
            case 1:
                confirm('итерация 1: Берем первые два панкейка и кладём на сковороду');
                break;
            case 2:
                confirm('итерация 2: Через минуту переворачиваем первый панкейк,второй кладём на тарелку, третий(сырой)   выкладываем на скороводу');
                break;
            case 3:
                confirm('итерация 3: Еще через минуту первый панкейк готов. Теперь переворачиваем третий и кладем недожаренный');
                break;
            case 4:
                confirm('Спустя 3 минуты все три панкейка готовы');
                break;
        }

    }

```



# Рефакторинг
Задачи на работу с чужим кодом.

## Задача №1

```js
  function func(s, a, b) {
        return Math.max(s.lastIndexOf(a), s.lastIndexOf(b));
    }
```

## Задача №2
```js
 function drawRating(vote) {
            if ((vote < 0) || (vote > 100)) throw new SyntaxError("Данные некорректны");

            var stars =  Math.ceil( vote / 20 );

            stars = (stars == 0) ? 1 : stars;

            return stars; // кол-во звезд

        }
```

# Практические задачи

## Задача №1
Реализуйте функцию `parseUrl(string)`, которая будет парсить URL строку и возвращать объект с распарсенными данными.

```js
 function parseUrl(href) {
                var link = document.createElement("a");
                link.href = href;
                return link;
            }
    
         var link = parseUrl("http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo");
         
            console.log(link.href)
            console.log(link.hash)
            console.log(link.port)
            console.log(link.host)
            console.log(link.protocol)
            console.log(link.hostname)
            console.log(link.pathname)
            console.log(link.origin)
```
## Задача №2

Необходимо разработать javascript-компонент для сортировки таблиц с данными.

**Функционал**

- Сортировка по столбцам: при нажатии на название столбца строки таблицы сортируются по возрастанию, при повторном клике - по убыванию. Графическим элементом или текстовым сообщением указывается направление сортировки.
- Клиентская пагинация: данные необходимо отображать постранично, максимум 50 элементов на страницу. Необходимо предоставить пользовательскую навигацию для перехода по страницам.
- Фильтрация: компонент предоставляет текстовое поле, в которое пользователь может ввести текст и строки таблицы, данные которых не содержат подстроку, введённую пользователем, скрываются. Перефильтрация осуществляется по нажатию на кнопку Найти.
- По клике на строку таблицы значения полей выводятся в дополнительном блоке под таблицей.
- Данные в таблицу загружаются с сервера. Способ загрузки с сервера на ваш выбор.

Для решения используем плагин www.datatables.net;

```html
 <table id="example" class="display" width="100%" cellspacing="0">
            <thead>
            <tr>
                <th>id</th>
                <th>First name</th>
                <th>Last name</th>
                <th>email</th>
                <th>phone</th>
            </tr>
            </thead>
        </table>
```
```js

    $('#example').DataTable({
        lengthMenu: [[10, 25, 50], [10, 25, 50]],
        processing: true,
        serverSide: false,
        ajax: {
            url: 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&adress=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
            dataSrc: ''
        },
        columns: [{data: 'id'},
            {data: 'firstName'},
            {data: 'lastName'},
            {data: 'email'},
            {data: 'phone'}
        ]
    });
```
