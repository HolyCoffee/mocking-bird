# mocking-bird

## TODO:

1. [X] Наладить линтинг (dfomin)
2. [X] Наладить unit тестирование (dfomin)
3. [X] Наладить сборку ts в umd/iife (dfomin)
4. [X] Настроить ci/cd экшены (dfomin)
5. [X] Настроить прекоммит хук (dfomin)
6. [X] Сделать пайплайн для линтинга и тестов при мердже в мастер (dfomin)
7. [ ] Сделать класс с методом который примет в себя интерфейс и вернет назад мок данные
 
## Бизнес логика

Проект должен уметь принимать в себя интерфейсы на ts и отдавать назад сгенерированную структура с фейковыми данными. 

## Вопросы

* Что именно передавать в библиотеку? Файл с интерфейсами? А если в файле много экспортов, какой брать за основу?
* Как обрабатывать union типы?
* Как отличать ts типы от всего остального?
