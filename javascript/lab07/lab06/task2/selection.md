//////////////scenario_01 — app-wide configuration store
problem summary
в приложении должно существовать ровно одно хранилище конфигурации, доступное всем модулям, и все вызовы должны возвращать один и тот же экземпляр.

selected pattern family
creational

selected specific pattern
singleton

why this family?
согласно appendix (ch. 6), creational-паттерны управляют процессом создания объектов, когда обычный способ усложняет систему. здесь необходимо строго контролировать создание объекта конфигурации.

why this pattern?
gof table: singleton — «a class with only a single instance with global access points». требуется ровно один экземпляр с глобальным доступом — это точное соответствие определению.

alternative considered
factory method — он управляет созданием объектов, но не гарантирует единственный экземпляр. поэтому не подходит.

//////////////scenario_02 — legacy payment gateway adapter
problem summary
современный код ожидает один интерфейс оплаты, но существует устаревший gateway с несовместимым интерфейсом.

selected pattern family
structural

selected specific pattern
adapter

why this family?
structural-паттерны отвечают за организацию связей между объектами. здесь нужно согласовать несовместимые интерфейсы.

why this pattern?
gof table: adapter — «matches interfaces of different classes so that classes can work together despite incompatible interfaces». именно это требуется — согласовать новый интерфейс с legacy api.

alternative considered
facade — он скрывает сложность подсистемы, но не решает проблему несовместимых интерфейсов.

//////////////scenario_03 — ui notification system
problem summary
несколько независимых компонентов должны автоматически реагировать на событие отправки домашней работы.

selected pattern family
behavioral

selected specific pattern
observer

why this family?
behavioral-паттерны управляют коммуникацией между объектами. здесь требуется механизм уведомления нескольких объектов об изменении состояния.

why this pattern?
gof table: observer — «a way of notifying change to a number of classes to ensure consistency between the classes». это полностью соответствует задаче.

alternative considered
mediator — он централизует коммуникацию, но здесь требуется именно подписка на события, а не координация сложного взаимодействия.

//////////////scenario_04 — report builder
problem summary
процесс построения отчёта одинаковый, но формат вывода (html, pdf, csv) различается. добавление нового формата не должно менять логику построения.

selected pattern family
creational

selected specific pattern
builder

why this family?
creational-паттерны управляют созданием объектов. здесь требуется контролировать процесс построения объекта отчёта.

why this pattern?
gof table: builder — «separates object construction from its representation; always creates the same type of object». процесс одинаковый, представление разное — точное соответствие.

alternative considered
factory method — он выбирает класс, но не отделяет процесс пошагового построения.

//////////////scenario_05 — undo/redo for task manager
problem summary
каждое действие пользователя должно быть объектом, который можно сохранить в истории, отменить и повторить.

selected pattern family
behavioral

selected specific pattern
command

why this family?
behavioral-паттерны управляют распределением ответственности и взаимодействием. здесь действия должны быть инкапсулированы и управляться историей.

why this pattern?
gof table: command — «a way to separate the execution of a command from its invoker». история (invoker) не должна знать деталей выполнения команды.

alternative considered
memento — он сохраняет состояние, но не инкапсулирует действия как объекты.

//////////////scenario_06 — large-scale particle system
problem summary
нужно уменьшить потребление памяти, разделив общие данные между тысячами объектов.

selected pattern family
structural

selected specific pattern
flyweight

why this family?
structural-паттерны организуют композицию объектов. здесь требуется изменить способ хранения состояния.

why this pattern?
gof table: flyweight — «a fine-grained instance used for efficient sharing of information that is contained elsewhere». общие данные (тип частицы) должны разделяться между экземплярами.

alternative considered
prototype — он копирует объекты, но не решает проблему совместного использования состояния.