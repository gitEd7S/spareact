# WMSelect
Бібліотека від компанії [`WebMaestro`](https://webmaestro.com.ua/).
### Зміст
##### [Підключення](#include)
##### [Ініціалізація](#init)
##### [Вхідні дані](#data)
##### [Методи](#methods)
##### [Події](#events)
##### [JSON](#json)
__

#### Підключення <a name="include"></a>
```html
<link rel="stylesheet" href="dist/wmselect.bundle.css">
 ```

```html
<script src="dist/wmselect.bundle.js"></script>
 ```
#### Ініціалізація <a name="init"></a>
**`1 параметром`** - елемент node.
**`2 параметром`** - об'єкт з вхідними даними.
```js
new WMSelect(document.getElementById('select'), {})
```
#### Вхідні дані <a name="data"></a>
**`showLine`** - `Number`, за замовчуванням `5`.
Відповідає за висоту випадаючого блоку зі списком результатів, з урахуванням заголовків, і опцій.
**`search`** - приймає дві властивості `{ is: Bolean, min: Number }`.  
`is` - за замовчуванням `false`.
`min` - за замовчуванням `0`.
Відповідає за підключення пошуку.
Властивість `min` - мінімальна кількість символів, від яких буде здійснюватись пошук.
**`intervalInput`** - `Number`, вимірюється в `ms`, за замовчуванням `800`.  
Зупинка запитів на сервер в момент введення користувачем у форму даних.
**`parentDisabled`** - `String`, немає значеннь за замовчуванням. 
Селектор батьківсього select, для взаємозв'язку. 
Даний параметр слідкує за батьківським select, і відповідно його стану блокує наявний select, або розблоковує.
**`reverseIconSelection`** - `Bolean`, за замовчуванням `false`.
Відповідає за зміну зображення в selection при виборі опцій з зображенням. 
`Зауваження:`
Зображення не буде змінним, якщо не описати властивість `iconSelection`.
**`iconSelection`** - приймає дві властивості `{ format: String, data: String }`.
`format` - наявні три формата: `img`, `sprite`, `xml`.
`data` - приймає значення в залежності від формата: `img` - приймає url; `sprite` - приймає url; `xml` - приймає сам svg.
Відповідає за зображення в selection.
**`iconSelectionArrow`** - приймає дві властивості `{ format: String, data: String }`, за замовчуванням `xml` іконка.
`format` - наявні три формата: `img`, `sprite`, `xml`.
`data` - приймає значення в залежності від формата: `img` - приймає url; `sprite` - приймає url; `xml` - приймає сам svg.
Відповідає за зміну іконки в кнопці.
**`templateResult`** - `callback`, який приймає `Object`, і повинен повернути `html` шаблон тип якого `String`.
Приймає text / img, в залежності від структури даних.
Властивість призначена для створення свого шаблону результатів, які будуть у випадаючому списку.
```js
templateResult (state) {
    return `
        ${!!state.img ? state.img : ''}
        <span class="static-text">${state.text}</span>
    `.trim();
}
```
**`templateSelection`** - `callback`, який приймає `Object`, і повинен повернути `html` шаблон тип якого `String`. Подібний до
 властивості `templateResult`.
В залежності даних, потрібно формувати свій шаблон. Не приймає `img`, він формується динамічно в залежності значення
 `reverseIconSelection`.
Властивість призначена для створення свого шаблону в секції вибраного результату.
**`ajax`** - `callback`, який приймає `Object` з властивостями:
`native` - нативний select над яким здійснюється запит.
`currentPage` - номер наявної сторінки.
`value` - введене значення з форми користувачем.
`params` - додаткові параметри, які передаються за домогою метода `open` детальніше в розділі `методи`.
`resolve` - функція, яка приймає результат ajax запиту.
 Властивість описує всі наявні запити для `прокрутки`,  `пошуку`, `початкової загрузки даних`. Працює в зв'язці з бібліотекою axios.
```js
ajax ({ native, currentPage, value, params, resolve }) {
    axios.get('http://json').then(response => {
        resolve(response.data);
    })
}
```
#### Методи <a name="methods"></a>
Варіанти роботи над методами:
```js
document.getElementById('select').wmopen();
or
init.wmopen();
```
**`wmopen({ dataAjax: [Object, String, Number ...] })`** - метод приймає `Object`. 
`dataAjax` - властивість, яка призначена для передачі даних у параметр `params` функції `ajax` та приймає будь яке значення будь якого типу. 
Даний метод відкриває select, при потребі є можливість передати дані для ajax запитів.
```js
document.getElementById('models').wmopen({
    dataAjax: e.target.value,
});
```
**`wmclose()`** - метод закриває випадаючий список з результатами.
**`wmvalid()`** - вертає `Bolean`, в залежності чи select вибраний чи ні.
**`wmchange(String)`** - приймає значення `value` типом `String`.
Спрацьовує, якщо дані уже підвантажились, в противному випадку буде попередження в консолі.
**`wmreset({ disabled: true })`** - приймає властивість `disabled` зі значенням `true`.
`disabled` - дана властивість робить не активним select. Немає потреби ставити значення false, просто не передаємо у метод нічого.
Виконує такі дані:
`1` очищає всі опції і заголовки з випадаючого списку.
`2` вертає початковий стан зображення selection.
`3` скидує вибраний елемент в кастомного і нативного select, і повертає placeholder.
```js
document.getElementById('models').wmreset();
or
document.getElementById('models').wmreset({ disabled: true });
```
#### Події <a name="events"></a>
Прив'язка подій здійснюється на нативний елемент (не екземпляра).
**`wmselect:open`** - подія спрацьовує коли здійснюється відкриття випадаючого списку з результатами.
```js
document.getElementById('models').addEventListener('wmselect:open', (e) => { })
```
**`wmselect:close`** - подія спрацьовує коли здійснюється закриття випадаючого списку з результатами.
```js
document.getElementById('models').addEventListener('wmselect:close', (e) => { })
```
**`wmselect:change`** - подія спрацьовує коли вибране значення.
```js
document.getElementById('models').addEventListener('wmselect:change', (e) => { })
```
**`wmselect:afterAjax`** - подія спрацьовує коли ajax запити завершився.
```js
document.getElementById('models').addEventListener('wmselect:afterAjax', (e) => { })
```
#### JSON <a name="json"></a>
