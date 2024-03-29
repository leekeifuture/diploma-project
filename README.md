## Описание объекта автоматизации и анализ предметной области
Взаимодействие с информацией, ее упорядочивание и простой доступ к ней, а также связь с преподавателем являются неотъемлемой частью обучения в университете. Структура самого университета представлена факультетами, у каждого из которых есть свои кафедры, а за кафедрой, в свою очередь, закреплены преподаватели. Преподаватели изо дня в день ведут лекции, предоставляя студентам необходимые для обучения материалы – но эти материалы бывает сложно распространить, структурировать и найти. Кафедры часто публикуют новости о том, что на них происходит – но размещение объявлений на стендах не является эффективным, особенно в наше время пандемий и удаленной учебы и работы. Учащимся зачастую необходимо найти информацию о преподавателе или связаться с ним (например, для отправления работы по электронной почте), но найти все необходимые сведения в одном месте чаще всего не так просто. Получается, что и студенты, и преподаватели сталкиваются с трудностями при выполнении повседневных задач. Необходима единая система, объединяющая две категории пользователей, которая облегчала бы выполнение часто встречающихся рутинных задач. Было решено создать информационную систему «Преподаватель БрГТУ», состоящую из веб-сервиса и клиентской части (front-end и back-end).
Будущих пользователей системы разделили на 3 типа:
— студенты (незарегистрированные);
— преподаватели (есть свой личный кабинет);
  — администраторы (суперпользователи).
В качестве объекта автоматизации рассматривается взаимодействие студента и преподавателя с материалами на сайте БрГТУ. Студент сможет искать необходимые данные по кафедрам, преподавателям, новостям и материалам, скачивать нужные файлы, просматривать новостные страницы и страницы преподавателей. Преподаватель сможет загружать файлы для студентов и редактировать информацию о себе в личном кабинете. Администратор сможет добавлять преподавателей в качестве новых пользователей и удалять кабинеты тех преподавателей, что уже не работают в университете, а также будет обладать правами редактирования информации обо всех преподавателях и добавления и удаления информации о них, а также менеджментом файлов (добавление\удаление).

## Постановка задачи
На основе результатов обследования объекта автоматизации и обоснования
необходимости создания системы, постановку задачи можно сформулировать
следующим образом. Автоматизируемая деятельность – взаимодействие студента и преподавателя с материалами на сайте БрГТУ. Цель автоматизации: упрощение взаимодействия с материалами и поиска информации при обучении, структуризация и оптимизация доступа к информации о преподавателях университета.
Система должна предоставлять следующие возможности:
1. Отображение списка факультетов
2. Отображение списка кафедр
3. Отображение новостей кафедры
4. Отображение списков преподавателей
5. Отображение страницы преподавателя с биографией, контактами и дополнительной информацией
6. Личный кабинет преподавателя с возможностью редактирования информации о себе и размещением материалов
7. Группировка материалов по предметам
8. Возможность мультипоиска
