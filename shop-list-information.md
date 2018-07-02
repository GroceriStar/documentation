# Shop list information

## Components architecture

This is a list of elements/files that we have at our website version

```
Item
 - new_item
 - item_right
 - item_center
 - item_checkbox

 todo_item
 - header
 - footer
 - footer2

 shoplist_mobile
 - empty-center
 - empty-checkbox
 - empty-item
```

{% hint style="info" %}
 Super-powers are granted randomly so please submit an issue if you're not happy with yours.
{% endhint %}

Once you're strong enough, save the world:

```
// Ain't no code for that yet, sorry
echo 'You got to trust me on this, I saved the world'
```





существуют два основных состояния у шопинг листа это превью - когда просматривается темплейт и данные которые ты добавляешь или удаляешь - они не влияют на значения из базы данных

и просмотр/редактирование своих собственных листов там уже все данные хранятся в твоем пользователе и ты полностью можешь ими управлять

кнопка back должна сохранять состояние предыдущей страницы. тоесть если ты открыл лист из своего аккаунта - вернуться ты можешь в аккаунт если ты переходил между разными департментами - возвращаешься ты в предыдущий департментами

надо сделать нормальный селект, потому что сейчас селект департментов выглядит херово.

нам нужен метод который будет возвращать айдишник департмента - возможно брать его откудато из props также нам нужен гросерилист id

мобильная версия должна быть

есть фильтры они нужны чтобы показывать все ингредиенты, только купленные и не купленные \('all'\) \('active'\) \('completed'\)

при нажатии на текст - он заменятся на инпут в котором можно сразу редактировать данные

еще есть кнопка clear all - удалит все purchased items еще есть кнопка выделить все айтемы внутри листа

сверху есть поле формы, которое создает новый ингредиент возможно мы сделаем его не просто текстовым полем а полем с autocomplete

основные эвенты нашего листа onChange checkbox dblClick on item label - edit current item keyUp when you edit focusOut when you finished editing your items

click to destroy item link/button

items must be sortable.

we checking esc key pressing and enter key pressing

each item should have order attribute. and when we change the ingredient place by sorting them - we should update all orders inside this sub-list



---

shopping list views. before i just get a layouts and js code from TODOMVC and apply it. but it has some troubles with converting a logic. and it was not really optimized to mobiles. so when my friend starts joke about it - i spend few weeks and redo it basically from scratch. i find a HTML framework with styles related to mobile form elements and apply groceristar logic into that elements. Not sure if i want to redo it again. maybe it'll be better to implement a gap between Gs and some other TODO list projects. cause I don't want to reinvent the wheel - better to focus on expanding features of it.





