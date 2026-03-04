классификация паттренов проектировния.
//////////// snippet_01/////////////
- семейство: creational
- паттерн: singleton
- доказательство: 
    if ( DatabaseConnection . _instance ) {
        return DatabaseConnection . _instance ;
    }
    if (! DatabaseConnection . _instance ) {
            new DatabaseConnection ( ' localhost ' , 5432) ;
        }
        return DatabaseConnection . _instance ;

- ссылка: 
    creational patterns - контроль процесса создания объекта
    singleton - класс с единственным экземпляром и глобальной точкой доступа

- обоснование: конструктор позволяет создать больше одного эзкемпляра и сохраняет его в _instance. метод getInstance() всегда возвращает один и тот же объект. согласно определению из файла, это контролирует процесс создания объекта и гарантирует единственный экземпляр

///////////////snippet_02/////////////////
- семейство: behavioral
- паттерн: observer
- доказательсвто: 
    subscribe ( event , callback )
    publish ( event , data )
    handlers . forEach ( handler = > handler ( data ) ) ;

- ссылка: 
behavioral patterns - упрощают коммуникацию между объектами. observer - способ уведомления множества класснов об изменениях 

- обоснование: объекты подписываются на события и получают уведомления через publish(). отправитель не знает кто именно подписан. это соответствует определению observer - уведомление нескольких подписчиков о событии. фокус на взаимодействии объектов -> поведенческий паттерн

///////////////////snippet_03/////////////////
- семейство: structural 
- паттерн:facade
- доказательсвто:
    class UserSession {
        login(token){
            this._auth.validateToken(token)
            this._repo.findByToken(token)
            this._logger.log('login', user)
        }
    }

- ссылка:
structural patterns - организация связей между объектами
Facade - класс, скрывающий сложность подсистемы
- обоснование:
UserSession скрывает работу трех подсистем за одним методом login(). клиенту не нужно работаьь с AuthService, UserReprository и AuditLogger напрямую. это соответствует определению facade единая точка входа к сложной системе

/////////////snippet_04////////////////
- семейство: creational
- паттерн: factory method
- доказательсвто: 
    function createNotifier ( type ) {
         switch ( type ) {
            case ' email ': return new KazakhEmailNotifier () ;
            case ' sms ': return new SMSNotifier () ;
            case ' telegram ': return new TelegramNotifier () ;
            default : throw new Error ( ` Unknown notifier type : $ { type } `) ;
        }
    }
- ссылка: factory method - создает экземпляр лдного из нескольких производных классов
- обоснование: функция решает, какой класс создать в зависимости от параметра type. клент не выщывает new напрямую это соответствует factory method, потому что создание объектов централизовано и управляется логикой ынутри функции

/////////////snippet_05//////////////
- семейство: structural
- паттерн: decorator
- доказательсвто: 
    class SeverityLogger {
        constructor ( logger , level = ' INFO ') {
            this . _logger = logger ;
            this . _level = level ;
            }
            log ( message ) {
                this . _logger . log ( `[ $ { this . _level }] $ { message } `) ;
        }
    }
- ссылка: 
decorator -  динамически доавляет дополнительную обрвботку объектам
- обоснование: 
новые классы оборачивают существующий объект logger и добавляют поведение, не изменяя исходный класс. это плолностью соотвутствует опредению decorator - расширение функцинальсности через обертку

///////////////snippet_06///////////////
- семейство: creational
- паттерн: prototype
- доказательсвто: 
    const car = vehiclePrototype . clone () ;
    console . log ( `[ SNIPPET_06 ] car inherits from prototype ? $ { Object.getPrototypeOf ( car ) === vehiclePrototype } `) ;
    return vehiclePrototype ;
- ссылка: prototype - полностью иницифлизированный экземпляр используемый для копирования.
- обоснование: объекты создаются через клонирование прототипа а не через new. это соответствует паттерну prototype, поскольку новые объекты создаются путем копирования базового экхемпляра

/////////////snipper_07////////////////
- семейство: behavioral
- паттерн: chain of responsibility
- доказательсвто: 
    if ( ticket . priority <= this . level ) {
        console . log ( `[ SNIPPET_07 ] Level - $ { this . level } support resolved ticket # $ { ticket . id } `) ;
    } else if ( this . next ) {
        console . log ( `[ SNIPPET_07 ] Level - $ { this . level } passed ticket # $ {
        ticket . id } to next `) ;
    }
- ссылка: chain of responcibility - передача запроса по цепочке объектов пока один из них его не обработает
- обоснование: каждый обработчки либо решает задачу, оибо передает ее следующему. запрос перемеш=щается по цепочке объектов. это полностью соотвуствует определению данного паттерна

/////////////snipper_08////////////////
- семейство: behavioral
- паттерн: command
- доказательсвто: 
    class WriteCommand { constructor ( editor , chars ) {
        this . editor = editor ;
        this . chars = chars ;
    }
    execute () { this . editor . write ( this . chars ) ; }
    undo () { this . editor . delete ( this . chars . length ) ; }
    }

    history . run ( new WriteCommand ( editor , ' Hello ') ) ;
- ссылка: command - определяет выполнение команды т объекта который ее вызывает
- обоснование: каждое ейсвтие инкапсулировано в отдельный объект с методами execute() и undo(). история команд inkover не знает детаелей выполнения. это соответствует определению command

/////////////snipper_09////////////////
- семейство: structural
- паттерн: flyweight
- доказательсвто: 
    const TreeTypeFactory = {
        _types: {},
        get(name, color, texture) {
            if (!this._types[key]) {
            this._types[key] = new TreeType(...);
            }
        }
    }
- ссылка: flyweight - мелкий объект используемый для эффективного совместного использования данных
- обоснование: общие данные типа дерева создаются один раз и переиспользуются. уникальные данные координаты хранятся отдельно. это разделение внутреннего и внешнего состояния для экономии памяти

/////////////snipper_10////////////////
- семейство: behavioral
- паттерн: mediator
- доказательсвто: 
    class ChatRoom {
    send(from, message, toName) {
        target.receive(...);
    }
    }
- ссылка: Mediator — определяет упрощённую коммуникацию между классами, чтобы они не ссылались напрямую друг на друга
- обоснование: объекты user не взаимодествуют напрямую. все общение проходит через chatroom . медиатор - централизованный координатор взаимодействия