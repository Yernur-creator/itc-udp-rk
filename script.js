function showTab(name, el) {
 document.querySelectorAll('[id^="content-"]').forEach(tab => tab.style.display = 'none');
 document.querySelectorAll('.tab').forEach(t => t.classList.remove('tab--active'));
 document.getElementById('content-' + name).style.display = 'block';
 el.classList.add('tab--active');
}

function toggleAccessibility() {
  document.body.classList.toggle('accessible');
}

const translations = {
  ru: {
    'access-btn': 'Версия для слабовидящих',
    'hero-title': 'ИТЦ УДП РК',
    'hero-desc': 'Ведущая компания на рынке информационно-коммуникационных услуг. Наша <strong>миссия</strong>: создание экосистем госуправления для формирования цифрового будущего.',
    'hero-btn': 'О компании',
    'stat-1': 'Более <strong>17 лет</strong> успешной работы на рынке IT и цифровых решений',
    'stat-2': 'Сплоченная команда <strong>опытных специалистов</strong>',
    'stat-3': 'Разработка <strong>уникальных решений</strong>, не имеющих аналогов',
    'stat-4': 'Более <strong>1000 клиентов</strong>, включая ГО, МИО и квазигоссектор РК',
    'products-title': 'НАШИ ПРОДУКТЫ',
    'tab-sak-name': 'САК', 'tab-sak-desc': 'Ситуационно-аналитический комплекс',
    'tab-epir-name': 'ЕПИР', 'tab-epir-desc': 'Единая платформа интернет-ресурсов',
    'tab-oss-name': 'ОСС', 'tab-oss-desc': 'Обслуживание слаботочных систем',
    'tab-tech-name': 'Техническое сопровождение', 'tab-tech-desc': 'Техническое сопровождение официальных мероприятий',
    'tab-byuro-name': 'Бюро пропусков', 'tab-byuro-desc': 'Цифровая система допуска',
    'sak-title': 'О проекте', 'sak-text1': '<strong>«Ситуационно-аналитический комплекс»</strong> (САК) – это платформа для анализа и обработки данных, визуализирующая данные из различных источников в режиме реального времени.', 'sak-text2': 'Функционал САК позволяет собирать данные из разных источников, хранить, анализировать большие массивы данных и представлять на веб-экране в виде отчетов, содержащих графики и схемы.', 'sak-text3': 'САК предназначен для анализа предметной области и вывода основных ключевых показателей.',
    'sak-ai-label': 'ИИ-решения в САК:', 'sak-ai-1': 'Выявление скрытых закономерностей', 'sak-ai-2': 'Прогнозирование по данным', 'sak-ai-3': 'Формирование рекомендаций',
    'sak-offer-title': 'Наше <span class="blue">предложение</span>', 'sak-offer-subtitle': '«Аналитическая платформа» объединяющая данные из разных систем для анализа в реальном времени',
    'sak-what': 'Что входит?', 'sak-item1': 'Визуализация данных', 'sak-item2': 'Интеграция с любыми информационными системами', 'sak-item3': 'Пакеты тарифов аналитических услуг с возможностью комбинирования дашбордов', 'sak-item4': 'Решение для комплексной аналитической поддержки',
    'sak-unique-label': 'Уникальность:', 'sak-unique1': 'Максимальная адаптация под индивидуальные запросы', 'sak-unique2': 'Использование технологий ИИ для аналитики и прогнозирования',
    'sak-motiv-label': 'Мотивация к внедрению', 'sak-motiv1': 'Необходимость оптимального решения для быстрого и точного внедрения аналитики',
    'sak-dev-label': 'Преимущества:', 'sak-adv1': 'Интеграция с информационными системами «Единая кадровая система», ИАС «Smart Dala-Ukimet» и возможность охвата более 500 показателей по различным направлениям в 20 регионах страны', 'sak-adv2': 'САК занял 1 место в конкурсе WSIS Prizes 2025',
    'epir-title': 'О проекте', 'epir-text1': '<strong>Единая платформа интернет-ресурсов</strong> (ЕПИР) – цифровое решение позволяющее разместить интернет-ресурсы всех головных и подведомственных организаций на одной платформе.',
    'epir-plus-label': 'Плюсы:', 'epir-plus1': 'Оптимизация затрат на техническое сопровождение, хостинг и домен', 'epir-plus2': 'Размещение информации через единое типовое окно администрирования', 'epir-plus3': 'Предоставление технической поддержки и сопровождения на аппаратном и программном уровнях',
    'epir-grid-label': 'Возможно размещение интернет-ресурсов:', 'epir-g1': 'Школы', 'epir-g2': 'Детские сады', 'epir-g3': 'Поликлиники', 'epir-g4': 'Больницы', 'epir-g5': 'Учебные заведения', 'epir-g6': 'Коммунальные предприятия', 'epir-g7': 'Транспортные организации', 'epir-g8': 'Прочее',
    'epir-prob-title': 'Текущие <span class="red">проблемы</span>', 'epir-p1': 'Каждая организация <strong>самостоятельно закупает</strong> услуги;', 'epir-p2': 'Во многих организациях <strong>не продлен хостинг</strong>;', 'epir-p3': 'Интернет-ресурсы созданы <strong>на устаревших технологиях</strong>;', 'epir-p4': '<strong>Отсутствует возможность</strong> гибкого управления содержимым;', 'epir-p5': 'Устаревшие UI и UX, что <strong>влияет на посещаемость</strong>;', 'epir-p6': '<strong>Нет ведения статистики</strong> посещаемости;', 'epir-p7': '<strong>Затраты</strong> на <strong>разработку</strong> дизайна;', 'epir-p8': '<strong>Отсутствует механизм мониторинга</strong> актуализации;', 'epir-p9': '<strong>Разные бюджеты</strong> у всех организаций.',
    'epir-sol-title': 'Предлагаемые <span class="blue">решения</span>', 'epir-s1': '<strong>Сокращение расходов</strong> на содержание веб-сайтов;', 'epir-s2': '<strong>Централизованный хостинг</strong> с поддержкой 24/7;', 'epir-s3': '<strong>Единые стандарты</strong> администрирования;', 'epir-s4': '<strong>Унифицированный дизайн,</strong> единый корпоративный стиль;', 'epir-s5': '<strong>Аналитика и мониторинг</strong> контента и посещаемости;', 'epir-s6': 'Возможность подключения <strong>любых учреждений;</strong>', 'epir-s7': '<strong>Прозрачность</strong> в закупках и платежах;', 'epir-s8': 'Возможность выбора <strong>общего инфоповода</strong> для всех.',
    'epir-offer-title': 'Наше <span class="blue">предложение</span>', 'epir-offer-sub': 'Централизованная веб-платформа, объединяющая интернет ресурсы в едином формате и стиле',
    'epir-what': 'Что входит?', 'epir-item1': 'CMS (Управление контентом)', 'epir-item2': 'Хостинг', 'epir-item3': 'Техническая поддержка', 'epir-item4': 'Безопасность',
    'epir-unique-label': 'Уникальность:', 'epir-unique1': 'Централизованное и безопасное решение <strong>в едином цифровом пространстве</strong>', 'epir-unique2': 'Обеспечение <strong>безопасности и визуальной целостности</strong>',
    'epir-motiv-label': 'Мотивация к внедрению', 'epir-motiv1': 'Необходимость в единой точке входа', 'epir-motiv2': 'Стремление к единым стандартам', 'epir-motiv3': 'Приоритет единого подхода к стилю и структуре',
    'epir-adv-label': 'Преимущества:', 'epir-adv1': 'Полный административный контроль', 'epir-adv2': '<strong>100+</strong> сайтов на одной платформе', 'epir-adv3': 'Доступность <strong>24/7</strong>', 'epir-adv4': 'Разработка любых дизайн-решений',
    'oss-title': 'Наши <span style="color:#185CA4;">услуги</span> по монтажу:', 'oss-l1': 'Монтаж абонентской сети специальной связи', 'oss-d1': 'Прокладка и подключение сетевых кабелей специальной закрытой связи', 'oss-l2': 'Внутренние локальные сети, телефония', 'oss-d2': 'Прокладка и соединение медных и оптоволоконных кабелей для высокоскоростной передачи данных и телефонии', 'oss-l3': 'Цифровое телевидение', 'oss-d3': 'Подача сигнала кабельного и спутникового цифрового телевидения', 'oss-l4': 'Предоставление ID карт для госорганов и бизнеса', 'oss-d4': 'Выдача ID карт для системы контроля и управления доступом', 'oss-l5': 'Системы контроля и управления доступом', 'oss-d5': 'Установка оборудования для контроля входа и выхода, безопасность помещений',
    'oss-offer-title': 'Наше <span class="blue">предложение</span>', 'oss-what': 'Что входит?', 'oss-item1': 'Внутренние локальные сети, телефония', 'oss-item2': 'Цифровое телевидение', 'oss-item3': 'Предоставление ID карт для госорганов и бизнеса', 'oss-item4': 'Монтаж абонентской сети специальной связи', 'oss-item5': 'Оснащение режимных объектов и помещений системой контроля и управления доступом',
    'oss-unique-label': 'Уникальность:', 'oss-unique1': 'Инженерный контроль с многолетним опытом работы в помещениях ограниченного доступа и особо охраняемых объектах', 'oss-motiv-label': 'Мотивация к внедрению', 'oss-motiv1': 'Требования к качеству и надёжности выполнения работ',
    'oss-adv-label': 'Преимущества:', 'oss-adv1': 'Подготовленная команда', 'oss-adv2': 'Качество и надёжность', 'oss-adv3': 'Комплексный подход', 'oss-adv4': 'Поддержка <strong>24/7</strong>',
    // Техническое сопровождение
    'tech-title': 'Наш <span style="color:#185CA4;">опыт:</span>',
    'tech-text1': 'Специалисты службы были задействованы при техническом сопровождении следующих <strong>крупных международных мероприятий:</strong>',
    'tech-e1': 'Саммит Шанхайской Организации Сотрудничества', 'tech-e2': 'Всемирные Игры Кочевников', 'tech-e3': 'Сессия Совета Коллективной Безопасности ОДКБ', 'tech-e4': 'Встреча Глав Государств Центральной Азии', 'tech-e5': 'Государственный визит Генерального секретаря ЦК Коммунистической партии Китая', 'tech-e6': 'Государственный визит Президента России', 'tech-e7': 'И т.д.',
    'tech-e8': '34 Сессия Ассамблеи народа Казахстана', 'tech-e9': 'Саммит «Центральная Азия - Италия»', 'tech-e10': 'И т.д.',
    'tech-offer-title': 'Наше <span class="blue">предложение</span>', 'tech-what': 'Что входит?',
    'tech-item1': 'Конференц-залы на объектах:', 'tech-item1-sub': 'Президентский центр Республики Казахстан | Дворец Независимости',
    'tech-item2': 'Видеосистемы | Видеостены', 'tech-item3': 'Конференц-системы | Звуковое и световое оборудование', 'tech-item4': 'Системы синхронного перевода',
    'tech-unique-label': 'Уникальность:', 'tech-unique1': 'Техническое сопровождение мероприятий на уровне межгосударственных взаимодействий с участием Глав Государств',
    'tech-adv-label': 'Преимущества:', 'tech-adv1': 'Реализация проектов любой сложности', 'tech-adv2': 'Уникальное оборудование (в единственном экземпляре в РК)', 'tech-adv3': 'Премиальные акустические системы', 'tech-adv4': 'Световое оборудование лучших мировых брендов', 'tech-adv5': 'Обеспечение синхронного перевода на 32 языка (до 2000 человек)',
    // Бюро пропусков — ЖАҢА ҚОСЫЛДЫ
    'byuro-prob-title': 'Текущие <span class="red">проблемы</span>',
    'byuro-p1': 'Ручная <strong>подача заявок</strong> на пропуска (бумажные носители, устные согласования)', 'byuro-p2': 'Потеря или <strong>задержка данных</strong> по заявкам на допуск', 'byuro-p3': 'Отсутствие <strong>электронного журнала</strong> учета посещений', 'byuro-p4': 'Отсутствие <strong>оперативного контроля</strong> выходов и выходов посетителей на объекте', 'byuro-p5': 'Риск <strong>несанкционированного допуска</strong>',
    'byuro-sol-title': 'Предлагаемые <span class="blue">решения</span>',
    'byuro-s1': 'Централизованный и автоматизированный процесс <strong>подачи и согласования заявок</strong>', 'byuro-s2': '<strong>Прозрачный учёт</strong> и сохранение истории всех событий допуска', 'byuro-s3': 'Исключение <strong>бумажного документооборота и человеческого фактора</strong>', 'byuro-s4': 'Возможность <strong>онлайн-мониторинга входов и выходов</strong> посетителей в режиме реального времени', 'byuro-s5': 'Сокращение <strong>времени обработки заявок</strong> и снижение нагрузки на персонал', 'byuro-s6': 'Повышение <strong>уровня безопасности</strong> объектов',
    'byuro-offer-title': 'Наше <span class="blue">предложение</span>', 'byuro-what': 'Что входит?',
    'byuro-item1': 'Цифровая система допуска и идентификации, интегрированная с системой контроля и управления доступом',
    'byuro-unique-label': 'Уникальность:', 'byuro-unique1': 'Опыт работы в режимных объектах', 'byuro-unique2': 'Решение проектировалось с учётом требований безопасности объектов с ограниченным доступом', 'byuro-unique3': 'Обработка более <strong>200 пропусков в день</strong>',
    'byuro-adv-label': 'Преимущества:', 'byuro-adv1': '<strong>Контроль в реальном времени</strong> позволяет отслеживать все факты входа и выхода сотрудников и посетителей', 'byuro-adv2': '<strong>Снижение бумажного документооборота</strong> — полная автоматизация допуска к объектам <strong>от подачи заявки до прохождения турникета</strong>', 'byuro-adv3': 'Время оформления пропуска <strong>меньше одной минуты</strong>',
    'cost-title': 'РАСЧЕТ <span class="blue">СТОИМОСТИ</span>', 'cost-point-1': 'Каждая услуга <strong>оценивается</strong> исходя из объёма, сложности и сроков', 'cost-point-2': 'Окончательная <strong>смета и сроки выполнения</strong> — по результатам технического задания', 'cost-point-3': 'Предоставляем детальный коммерческий расчёт в течение <strong>10 рабочих дней</strong>',
    'cost-step-1': 'Вы <strong>оставляете заявку</strong> или присылаете техзадание', 'cost-step-2': 'Мы уточняем требования и <strong>формируем КП</strong>', 'cost-step-3': 'Согласование <strong>бюджета</strong> и <strong>сроков</strong> выполнения', 'cost-step-4': '<strong>Начало работ</strong> после подписания договора',
    'cost-note': 'Все расчёты <strong>прозрачны</strong> и гибко <strong>адаптируются</strong> под ваши задачи',
    'footer-address-label': 'Адрес', 'footer-address': '010000, г. Астана,<br/>пр-т Мангилик Ел, 8,<br/>подъезд 1В', 'footer-phone-label': 'Контактные телефоны', 'footer-email-label': 'Электронная почта', 'footer-social-label': 'Социальные сети:', 'footer-copy': '2026 ©️ РГП на ПХВ «Инженерно-технический центр УДП РК»',
  },
  kz: {
    'access-btn': 'Нашар көретіндерге арналған нұсқа', 'hero-title': 'ИТО УДП ҚР',
    'hero-desc': 'Ақпараттық-коммуникациялық қызметтер нарығындағы жетекші компания. Біздің <strong>миссиямыз</strong>: цифрлық болашақты қалыптастыру үшін мемлекеттік басқару экожүйелерін құру.',
    'hero-btn': 'Компания туралы',
    'stat-1': '<strong>17 жылдан</strong> астам IT және цифрлық шешімдер нарығындағы табысты жұмыс', 'stat-2': '<strong>Тәжірибелі мамандардың</strong> ынтымақтасқан командасы', 'stat-3': 'Аналогтары жоқ <strong>бірегей шешімдерді</strong> әзірлеу', 'stat-4': 'МО, ЖАО және ҚР квазимемлекеттік секторын қоса алғанда <strong>1000-нан астам клиент</strong>',
    'products-title': 'БІЗДІҢ ӨНІМДЕР',
    'tab-sak-name': 'ЖАК', 'tab-sak-desc': 'Жағдаяттық-аналитикалық кешен', 'tab-epir-name': 'ИРБП', 'tab-epir-desc': 'Интернет-ресурстардың бірыңғай платформасы', 'tab-oss-name': 'ӘТЖҚК', 'tab-oss-desc': 'Әлсіз ток жүйелерін қызмет көрсету', 'tab-tech-name': 'Техникалық қамтамасыз ету', 'tab-tech-desc': 'Ресми іс-шараларды техникалық қамтамасыз ету', 'tab-byuro-name': 'Өткізу бюросы', 'tab-byuro-desc': 'Цифрлық рұқсат жүйесі',
    'sak-title': 'Жоба туралы', 'sak-text1': '<strong>«Жағдаяттық-аналитикалық кешен»</strong> (ЖАК) — әртүрлі көздерден деректерді нақты уақыт режимінде визуализациялайтын деректерді талдау және өңдеу платформасы.', 'sak-text2': 'ЖАК функционалы әртүрлі көздерден деректер жинауға, сақтауға, үлкен деректер массивтерін талдауға және графиктер мен схемалар түріндегі есептер ретінде веб-экранда ұсынуға мүмкіндік береді.', 'sak-text3': 'ЖАК пәндік саланы талдауға және негізгі түйінді көрсеткіштерді шығаруға арналған.',
    'sak-ai-label': 'ЖАК-тағы ЖИ шешімдері:', 'sak-ai-1': 'Жасырын заңдылықтарды анықтау', 'sak-ai-2': 'Деректер бойынша болжау', 'sak-ai-3': 'Ұсынымдар қалыптастыру',
    'sak-offer-title': 'Біздің <span class="blue">ұсынысымыз</span>', 'sak-offer-subtitle': 'Деректерді нақты уақытта талдау үшін әртүрлі жүйелердің деректерін біріктіретін «Аналитикалық платформа»',
    'sak-what': 'Не кіреді?', 'sak-item1': 'Деректерді визуализациялау', 'sak-item2': 'Кез келген ақпараттық жүйелермен интеграция', 'sak-item3': 'Дашбордтарды үйлестіру мүмкіндігімен аналитикалық қызметтердің тариф пакеттері', 'sak-item4': 'Кешенді аналитикалық қолдауға арналған шешім',
    'sak-unique-label': 'Бірегейлік:', 'sak-unique1': 'Жеке сұраныстарға максималды бейімделу', 'sak-unique2': 'Аналитика және болжау үшін ЖИ технологияларын пайдалану',
    'sak-motiv-label': 'Енгізуге ынталандыру', 'sak-motiv1': 'Аналитиканы жылдам және нақты енгізу үшін оңтайлы шешім қажеттілігі',
    'sak-dev-label': 'Артықшылықтары:', 'sak-adv1': '«Бірыңғай кадр жүйесі», ИАЖ «Smart Dala-Ukimet» ақпараттық жүйелерімен интеграция және елдің 20 өңірінде 500-ден астам көрсеткішті қамту мүмкіндігі', 'sak-adv2': 'ЖАК WSIS Prizes 2025 байқауында 1-орын алды',
    'epir-title': 'Жоба туралы', 'epir-text1': '<strong>Интернет-ресурстардың бірыңғай платформасы</strong> (ЕИАР) — барлық басты және бағынышты ұйымдардың интернет-ресурстарын бір платформада орналастыруға мүмкіндік беретін цифрлық шешім.',
    'epir-plus-label': 'Артықшылықтары:', 'epir-plus1': 'Техникалық қолдау, хостинг және домен шығындарын оңтайландыру', 'epir-plus2': 'Бірыңғай әкімшілік терезе арқылы ақпарат орналастыру', 'epir-plus3': 'Аппараттық және бағдарламалық деңгейлерде техникалық қолдау көрсету',
    'epir-grid-label': 'Интернет-ресурстарды орналастыру мүмкін:', 'epir-g1': 'Мектептер', 'epir-g2': 'Балабақшалар', 'epir-g3': 'Емханалар', 'epir-g4': 'Ауруханалар', 'epir-g5': 'Оқу орындары', 'epir-g6': 'Коммуналдық кәсіпорындар', 'epir-g7': 'Көлік ұйымдары', 'epir-g8': 'Басқалары',
    'epir-prob-title': 'Қазіргі <span class="red">мәселелер</span>', 'epir-p1': 'Әр ұйым қызметтерді <strong>өз бетінше сатып алады;</strong>', 'epir-p2': 'Көп ұйымдарда <strong>хостинг ұзартылмаған;</strong>', 'epir-p3': 'Интернет-ресурстар <strong>ескірген технологиялармен</strong> жасалған;', 'epir-p4': 'Мазмұнды икемді басқару <strong>мүмкіндігі жоқ;</strong>', 'epir-p5': 'Ескірген UI және UX <strong>қаралымға әсер етеді;</strong>', 'epir-p6': '<strong>Қаралым статистикасы</strong> жүргізілмейді;', 'epir-p7': 'Дизайн <strong>әзірлеуге шығындар;</strong>', 'epir-p8': 'Ақпаратты жаңарту <strong>мониторинг механизмі жоқ;</strong>', 'epir-p9': 'Барлық ұйымдарда <strong>бюджеттер әртүрлі.</strong>',
    'epir-sol-title': 'Ұсынылатын <span class="blue">шешімдер</span>', 'epir-s1': 'Веб-сайттарды ұстауға <strong>шығындарды қысқарту;</strong>', 'epir-s2': 'ИТО серверлерінде 24/7 <strong>орталықтандырылған хостинг;</strong>', 'epir-s3': 'Веб-сайттарды әкімшілендірудің <strong>бірыңғай стандарттары;</strong>', 'epir-s4': '<strong>Бірыңғай дизайн,</strong> бірыңғай корпоративтік стиль;', 'epir-s5': '<strong>Аналитика және мониторинг;</strong>', 'epir-s6': '<strong>Кез келген мекемелерді</strong> қосу мүмкіндігі;', 'epir-s7': 'Сатып алулар мен төлемдерде <strong>ашықтық;</strong>', 'epir-s8': 'Барлық ұйымдар үшін <strong>ортақ ақпараттық мазмұнды</strong> таңдау мүмкіндігі.',
    'epir-offer-title': 'Біздің <span class="blue">ұсынысымыз</span>', 'epir-offer-sub': 'Интернет-ресурстарды бірыңғай форматта біріктіретін орталықтандырылған веб-платформа',
    'epir-what': 'Не кіреді?', 'epir-item1': 'CMS (Мазмұнды басқару)', 'epir-item2': 'Хостинг', 'epir-item3': 'Техникалық қолдау', 'epir-item4': 'Қауіпсіздік',
    'epir-unique-label': 'Бірегейлік:', 'epir-unique1': 'Басты және бағынышты ұйымдардың интернет-ресурстарына арналған <strong>бірыңғай цифрлық кеңістіктегі</strong> орталықтандырылған шешім', 'epir-unique2': '<strong>Қауіпсіздік пен визуалдық тұтастықты</strong> қамтамасыз ету',
    'epir-motiv-label': 'Енгізуге ынталандыру', 'epir-motiv1': 'Барлық пайдаланушылар үшін бірыңғай кіру нүктесі қажеттілігі', 'epir-motiv2': 'Бірыңғай стандарттарға ұмтылу', 'epir-motiv3': 'Стиль мен құрылымға бірыңғай тәсілді басымдыққа алу',
    'epir-adv-label': 'Артықшылықтары:', 'epir-adv1': 'Толық әкімшілік бақылау', 'epir-adv2': 'Бір платформада <strong>100+</strong> сайт', 'epir-adv3': '<strong>24/7</strong> қолжетімділік', 'epir-adv4': 'Кез келген дизайн шешімдерін әзірлеу',
    'oss-title': 'Монтаж бойынша <span style="color:#185CA4;">қызметтеріміз:</span>', 'oss-l1': 'Арнайы байланыстың абоненттік желісін монтаждау', 'oss-d1': 'Арнайы жабық байланыстың желілік кабельдерін тарту және қосу', 'oss-l2': 'Ішкі жергілікті желілер, телефония', 'oss-d2': 'Жоғары жылдамдықты деректер беру және телефония үшін мыс және талшықты-оптикалық кабельдерді тарту', 'oss-l3': 'Цифрлық телевидение', 'oss-d3': 'Кабельдік және жерсеріктік цифрлық телевидение сигналын беру', 'oss-l4': 'Мемлекеттік органдар мен бизнеске ID карталарын беру', 'oss-d4': 'Кіруді бақылау және басқару жүйесіне арналған ID карталарын беру', 'oss-l5': 'Кіруді бақылау және басқару жүйелері', 'oss-d5': 'Кіру-шығуды бақылауға арналған жабдықтарды орнату',
    'oss-offer-title': 'Біздің <span class="blue">ұсынысымыз</span>', 'oss-what': 'Не кіреді?', 'oss-item1': 'Ішкі жергілікті желілер, телефония', 'oss-item2': 'Цифрлық телевидение', 'oss-item3': 'Мемлекеттік органдар мен бизнеске ID карталарын беру', 'oss-item4': 'Арнайы байланыстың абоненттік желісін монтаждау', 'oss-item5': 'Режимдік объектілер мен үй-жайларды кіруді бақылау жүйесімен жарақтандыру',
    'oss-unique-label': 'Бірегейлік:', 'oss-unique1': 'Шектеулі қолжетімді үй-жайларда жұмыс істеудің көпжылдық тәжірибесі бар инженерлік бақылау', 'oss-motiv-label': 'Енгізуге ынталандыру', 'oss-motiv1': 'Жұмыстарды орындаудың сапасы мен сенімділігіне қойылатын талаптар',
    'oss-adv-label': 'Артықшылықтары:', 'oss-adv1': 'Дайындалған команда', 'oss-adv2': 'Сапа мен сенімділік', 'oss-adv3': 'Кешенді тәсіл', 'oss-adv4': '<strong>24/7</strong> қолдау',
    // Техникалық қамтамасыз ету
    'tech-title': 'Біздің <span style="color:#185CA4;">тәжірибеміз:</span>',
    'tech-text1': 'Қызмет мамандары мына <strong>ірі халықаралық іс-шараларды</strong> техникалық қамтамасыз ету барысында қатысты:',
    'tech-e1': 'Шанхай Ынтымақтастық Ұйымының саммиті', 'tech-e2': 'Дүниежүзілік Көшпенділер ойындары', 'tech-e3': 'ҰҚҰК Ұжымдық Қауіпсіздік Кеңесінің сессиясы', 'tech-e4': 'Орталық Азия мемлекет басшыларының кездесуі', 'tech-e5': 'Қытай Коммунистік партиясы ОК Бас хатшысының мемлекеттік сапары', 'tech-e6': 'Ресей Президентінің мемлекеттік сапары', 'tech-e7': 'Және т.б.',
    'tech-e8': 'Қазақстан халқы Ассамблеясының 34-сессиясы', 'tech-e9': '«Орталық Азия - Италия» саммиті', 'tech-e10': 'Және т.б.',
    'tech-offer-title': 'Біздің <span class="blue">ұсынысымыз</span>', 'tech-what': 'Не кіреді?',
    'tech-item1': 'Объектілердегі конференц-залдар:', 'tech-item1-sub': 'Қазақстан Республикасының Президенттік орталығы | Тәуелсіздік сарайы',
    'tech-item2': 'Бейне жүйелері | Бейне қабырғалар', 'tech-item3': 'Конференц-жүйелер | Дыбыстық және жарық жабдықтары', 'tech-item4': 'Синхронды аударма жүйелері',
    'tech-unique-label': 'Бірегейлік:', 'tech-unique1': 'Мемлекет басшыларының қатысуымен мемлекетаралық өзара іс-қимыл деңгейіндегі іс-шараларды техникалық қамтамасыз ету',
    'tech-adv-label': 'Артықшылықтары:', 'tech-adv1': 'Кез келген күрделіліктегі жобаларды іске асыру', 'tech-adv2': 'Бірегей жабдықтар (ҚР-да жалғыз данада)', 'tech-adv3': 'Премиум акустикалық жүйелер', 'tech-adv4': 'Әлемнің үздік брендтерінің жарық жабдықтары', 'tech-adv5': '32 тілге синхронды аударманы қамтамасыз ету (2000 адамға дейін)',
    // Өткізу бюросы — ЖАҢА ҚОСЫЛДЫ
    'byuro-prob-title': 'Қазіргі <span class="red">мәселелер</span>',
    'byuro-p1': '<strong>Өтінімдерді қолмен беру</strong> (қағаз тасымалдаушылар, ауызша келісімдер)', 'byuro-p2': 'Рұқсат өтінімдері бойынша деректердің <strong>жоғалуы немесе кешігуі</strong>', 'byuro-p3': '<strong>Электрондық журналдың</strong> болмауы', 'byuro-p4': 'Объектідегі келушілердің кіру-шығуына <strong>жедел бақылаудың болмауы</strong>', 'byuro-p5': '<strong>Рұқсатсыз кіру</strong> тәуекелі',
    'byuro-sol-title': 'Ұсынылатын <span class="blue">шешімдер</span>',
    'byuro-s1': '<strong>Өтінімдерді беру және келісудің</strong> орталықтандырылған және автоматтандырылған процесі', 'byuro-s2': '<strong>Мөлдір есеп</strong> және барлық рұқсат оқиғаларының тарихын сақтау', 'byuro-s3': '<strong>Қағаздық құжат айналымы мен адам факторын</strong> жою', 'byuro-s4': 'Келушілердің кіру-шығуын нақты уақытта <strong>онлайн мониторингтеу мүмкіндігі</strong>', 'byuro-s5': '<strong>Өтінімдерді өңдеу уақытын</strong> қысқарту және персоналға түсетін жүктемені азайту', 'byuro-s6': 'Объектілердің <strong>қауіпсіздік деңгейін</strong> арттыру',
    'byuro-offer-title': 'Біздің <span class="blue">ұсынысымыз</span>', 'byuro-what': 'Не кіреді?',
    'byuro-item1': 'Кіруді бақылау және басқару жүйесімен интеграцияланған цифрлық рұқсат және сәйкестендіру жүйесі',
    'byuro-unique-label': 'Бірегейлік:', 'byuro-unique1': 'Режимдік объектілерде жұмыс тәжірибесі', 'byuro-unique2': 'Шешім шектеулі қолжетімді объектілердің қауіпсіздік талаптарын ескере отырып жасалды', 'byuro-unique3': 'Күніне <strong>200-ден астам рұқсатты</strong> өңдеу',
    'byuro-adv-label': 'Артықшылықтары:', 'byuro-adv1': '<strong>Нақты уақыттағы бақылау</strong> қызметкерлер мен келушілердің кіру-шығу деректерін бақылауға мүмкіндік береді', 'byuro-adv2': '<strong>Қағаздық құжат айналымын азайту</strong> — объектілерге рұқсатты <strong>өтінім берілгеннен турникеттен өткенге дейін</strong> толық автоматтандыру', 'byuro-adv3': 'Рұқсат ресімдеу уақыты <strong>бір минуттан аз</strong>',
    'cost-title': 'ҚҰНЫН <span class="blue">ЕСЕПТЕУ</span>', 'cost-point-1': 'Әрбір қызмет көлемі, күрделілігі және мерзімдері негізінде <strong>бағаланады</strong>', 'cost-point-2': 'Түпкілікті <strong>смета және орындау мерзімдері</strong> — техникалық тапсырма нәтижелері бойынша', 'cost-point-3': '<strong>10 жұмыс күні</strong> ішінде егжей-тегжейлі коммерциялық есеп береміз',
    'cost-step-1': 'Сіз <strong>өтінім қалдырасыз</strong> немесе техтапсырма жібересіз', 'cost-step-2': 'Біз талаптарды нақтылап, <strong>КҰ қалыптастырамыз</strong>', 'cost-step-3': '<strong>Бюджет</strong> пен <strong>мерзімдерді</strong> келісу', 'cost-step-4': 'Шарт жасасқаннан кейін <strong>жұмысты бастау</strong>',
    'cost-note': 'Барлық есептер <strong>ашық</strong> және сіздің міндеттеріңізге икемді <strong>бейімделеді</strong>',
    'footer-address-label': 'Мекенжай', 'footer-address': '010000, Астана қ.,<br/>Мәңгілік Ел даңғылы, 8,<br/>1В кіреберіс', 'footer-phone-label': 'Байланыс телефондары', 'footer-email-label': 'Электрондық пошта', 'footer-social-label': 'Әлеуметтік желілер:', 'footer-copy': '2026 ©️ «ҚР УДП Инженерлік-техникалық орталығы» ШЖҚ РМК',
  },
  en: {
    'access-btn': 'Accessibility version', 'hero-title': 'ITC UDA RK',
    'hero-desc': 'Leading company in the information and communication services market. Our <strong>mission</strong>: creating public administration ecosystems for shaping the digital future.',
    'hero-btn': 'About company',
    'stat-1': 'More than <strong>17 years</strong> of successful work in the IT and digital solutions market', 'stat-2': 'A cohesive team of <strong>experienced specialists</strong>', 'stat-3': 'Development of <strong>unique solutions</strong> with no analogues', 'stat-4': 'More than <strong>1000 clients</strong>, including government bodies and quasi-government sector of RK',
    'products-title': 'OUR PRODUCTS',
    'tab-sak-name': 'SAC', 'tab-sak-desc': 'Situational Analytics Complex', 'tab-epir-name': 'UIPR', 'tab-epir-desc': 'Unified Internet Platform for Resources', 'tab-oss-name': 'LSS', 'tab-oss-desc': 'Low-voltage Systems Service', 'tab-tech-name': 'Technical Support', 'tab-tech-desc': 'Technical support of official events', 'tab-byuro-name': 'Pass Bureau', 'tab-byuro-desc': 'Digital access system',
    'sak-title': 'About the project', 'sak-text1': '<strong>"Situational Analytics Complex"</strong> (SAC) is a platform for data analysis and processing, visualizing data from various sources in real time.', 'sak-text2': 'SAC functionality allows collecting data from different sources, storing, analyzing large data arrays and presenting them on a web screen in reports containing charts and diagrams.', 'sak-text3': 'SAC is designed to analyze subject areas and display key performance indicators.',
    'sak-ai-label': 'AI solutions in SAC:', 'sak-ai-1': 'Identifying hidden patterns', 'sak-ai-2': 'Data forecasting', 'sak-ai-3': 'Generating recommendations',
    'sak-offer-title': 'Our <span class="blue">proposal</span>', 'sak-offer-subtitle': '"Analytics Platform" combining data from different systems for real-time analysis',
    'sak-what': 'What is included?', 'sak-item1': 'Data visualization', 'sak-item2': 'Integration with any information systems', 'sak-item3': 'Analytical service packages with dashboard combination options', 'sak-item4': 'Solution for comprehensive analytical support',
    'sak-unique-label': 'Uniqueness:', 'sak-unique1': 'Maximum adaptation to individual requests', 'sak-unique2': 'Using AI technologies for analytics and forecasting',
    'sak-motiv-label': 'Motivation for implementation', 'sak-motiv1': 'Need for an optimal solution for fast and accurate analytics implementation',
    'sak-dev-label': 'Advantages:', 'sak-adv1': 'Integration with "Unified HR System", IAS "Smart Dala-Ukimet" and coverage of 500+ indicators across 20 regions', 'sak-adv2': 'SAC won 1st place at WSIS Prizes 2025',
    'epir-title': 'About the project', 'epir-text1': '<strong>Unified Internet Platform for Resources</strong> (UIPR) is a digital solution for placing internet resources of all organizations on one platform.',
    'epir-plus-label': 'Benefits:', 'epir-plus1': 'Cost optimization for technical support, hosting and domain', 'epir-plus2': 'Information placement through a unified administration window', 'epir-plus3': 'Technical support at hardware and software levels',
    'epir-grid-label': 'Internet resources can be hosted for:', 'epir-g1': 'Schools', 'epir-g2': 'Kindergartens', 'epir-g3': 'Clinics', 'epir-g4': 'Hospitals', 'epir-g5': 'Educational institutions', 'epir-g6': 'Public utilities', 'epir-g7': 'Transport organizations', 'epir-g8': 'Others',
    'epir-prob-title': 'Current <span class="red">problems</span>', 'epir-p1': 'Each organization <strong>independently procures</strong> services;', 'epir-p2': 'Many organizations have <strong>expired hosting;</strong>', 'epir-p3': 'Internet resources built on <strong>outdated technologies</strong>;', 'epir-p4': '<strong>No ability</strong> for flexible content management;', 'epir-p5': 'Outdated UI and UX <strong>affecting traffic;</strong>', 'epir-p6': '<strong>No traffic statistics</strong> tracking;', 'epir-p7': '<strong>Costs</strong> for design development;', 'epir-p8': '<strong>No monitoring mechanism</strong> for updates;', 'epir-p9': '<strong>Different budgets</strong> across all organizations.',
    'epir-sol-title': 'Proposed <span class="blue">solutions</span>', 'epir-s1': '<strong>Cost reduction</strong> for maintaining websites;', 'epir-s2': '<strong>Centralized hosting</strong> with 24/7 support;', 'epir-s3': '<strong>Unified standards</strong> for administration;', 'epir-s4': '<strong>Unified design,</strong> single corporate style;', 'epir-s5': '<strong>Analytics and monitoring;</strong>', 'epir-s6': 'Ability to connect <strong>any institutions;</strong>', 'epir-s7': '<strong>Transparency</strong> in procurement;', 'epir-s8': 'Ability to choose a <strong>common information feed.</strong>',
    'epir-offer-title': 'Our <span class="blue">proposal</span>', 'epir-offer-sub': 'Centralized web platform uniting internet resources in a unified format',
    'epir-what': 'What is included?', 'epir-item1': 'CMS (Content Management)', 'epir-item2': 'Hosting', 'epir-item3': 'Technical support', 'epir-item4': 'Security',
    'epir-unique-label': 'Uniqueness:', 'epir-unique1': 'Centralized and secure solution <strong>in a unified digital space</strong>', 'epir-unique2': 'Ensuring <strong>security and visual integrity</strong>',
    'epir-motiv-label': 'Motivation for implementation', 'epir-motiv1': 'Need for a unified entry point', 'epir-motiv2': 'Striving for unified standards', 'epir-motiv3': 'Priority of unified approach to style',
    'epir-adv-label': 'Advantages:', 'epir-adv1': 'Full administrative control', 'epir-adv2': '<strong>100+</strong> websites on one platform', 'epir-adv3': 'Availability <strong>24/7</strong>', 'epir-adv4': 'Development of any design solutions',
    'oss-title': 'Our <span style="color:#185CA4;">installation services:</span>', 'oss-l1': 'Installation of special communication subscriber network', 'oss-d1': 'Laying and connecting network cables of special closed communication', 'oss-l2': 'Internal local networks, telephony', 'oss-d2': 'Laying copper and fiber optic cables for high-speed data transmission', 'oss-l3': 'Digital television', 'oss-d3': 'Providing cable and satellite digital television signal', 'oss-l4': 'Providing ID cards for government and business', 'oss-d4': 'Issuing ID cards for access control systems', 'oss-l5': 'Access control and management systems', 'oss-d5': 'Installing equipment for entry and exit control',
    'oss-offer-title': 'Our <span class="blue">proposal</span>', 'oss-what': 'What is included?', 'oss-item1': 'Internal local networks, telephony', 'oss-item2': 'Digital television', 'oss-item3': 'Providing ID cards for government and business', 'oss-item4': 'Installation of special communication subscriber network', 'oss-item5': 'Equipping restricted facilities with access control systems',
    'oss-unique-label': 'Uniqueness:', 'oss-unique1': 'Engineering control with years of experience in restricted access premises', 'oss-motiv-label': 'Motivation for implementation', 'oss-motiv1': 'Requirements for quality and reliability of work',
    'oss-adv-label': 'Advantages:', 'oss-adv1': 'Prepared team', 'oss-adv2': 'Quality and reliability', 'oss-adv3': 'Comprehensive approach', 'oss-adv4': 'Support <strong>24/7</strong>',
    // Technical Support
    'tech-title': 'Our <span style="color:#185CA4;">experience:</span>',
    'tech-text1': 'Service specialists provided technical support for the following <strong>major international events:</strong>',
    'tech-e1': 'Shanghai Cooperation Organisation Summit', 'tech-e2': 'World Nomad Games', 'tech-e3': 'CSTO Collective Security Council Session', 'tech-e4': 'Meeting of Central Asian Heads of State', 'tech-e5': 'State visit of the General Secretary of the CPC Central Committee', 'tech-e6': 'State visit of the President of Russia', 'tech-e7': 'And others.',
    'tech-e8': '34th Session of the Assembly of People of Kazakhstan', 'tech-e9': '"Central Asia - Italy" Summit', 'tech-e10': 'And others.',
    'tech-offer-title': 'Our <span class="blue">proposal</span>', 'tech-what': 'What is included?',
    'tech-item1': 'Conference halls at facilities:', 'tech-item1-sub': 'Presidential Centre of the Republic of Kazakhstan | Palace of Independence',
    'tech-item2': 'Video systems | Video walls', 'tech-item3': 'Conference systems | Sound and lighting equipment', 'tech-item4': 'Simultaneous interpretation systems',
    'tech-unique-label': 'Uniqueness:', 'tech-unique1': 'Technical support of events at the level of intergovernmental interactions with participation of Heads of State',
    'tech-adv-label': 'Advantages:', 'tech-adv1': 'Implementation of projects of any complexity', 'tech-adv2': 'Unique equipment (the only one in RK)', 'tech-adv3': 'Premium acoustic systems', 'tech-adv4': 'Lighting equipment from world leading brands', 'tech-adv5': 'Simultaneous interpretation in 32 languages (up to 2000 people)',
    // Pass Bureau — NEWLY ADDED
    'byuro-prob-title': 'Current <span class="red">problems</span>',
    'byuro-p1': 'Manual <strong>submission of pass requests</strong> (paper, verbal approvals)', 'byuro-p2': 'Loss or <strong>delay of data</strong> on access requests', 'byuro-p3': 'Absence of <strong>electronic journal</strong> of visits', 'byuro-p4': 'Absence of <strong>operational control</strong> of visitor entry and exit', 'byuro-p5': 'Risk of <strong>unauthorized access</strong>',
    'byuro-sol-title': 'Proposed <span class="blue">solutions</span>',
    'byuro-s1': 'Centralized and automated process of <strong>submitting and approving requests</strong>', 'byuro-s2': '<strong>Transparent tracking</strong> and history of all access events', 'byuro-s3': 'Elimination of <strong>paper workflow and human factor</strong>', 'byuro-s4': 'Ability for <strong>online monitoring of visitor entry and exit</strong> in real time', 'byuro-s5': 'Reduction of <strong>request processing time</strong> and staff workload', 'byuro-s6': 'Increasing <strong>security level</strong> of facilities',
    'byuro-offer-title': 'Our <span class="blue">proposal</span>', 'byuro-what': 'What is included?',
    'byuro-item1': 'Digital access and identification system integrated with access control and management system',
    'byuro-unique-label': 'Uniqueness:', 'byuro-unique1': 'Experience working in restricted facilities', 'byuro-unique2': 'Solution designed with security requirements for restricted access facilities', 'byuro-unique3': 'Processing more than <strong>200 passes per day</strong>',
    'byuro-adv-label': 'Advantages:', 'byuro-adv1': '<strong>Real-time control</strong> allows tracking all entry and exit of employees and visitors', 'byuro-adv2': '<strong>Reduction of paper workflow</strong> — full automation of access <strong>from request submission to turnstile passage</strong>', 'byuro-adv3': 'Pass processing time <strong>less than one minute</strong>',
    'cost-title': 'COST <span class="blue">CALCULATION</span>', 'cost-point-1': 'Each service is <strong>evaluated</strong> based on volume, complexity and deadlines', 'cost-point-2': 'Final <strong>estimate and deadlines</strong> — based on technical specifications', 'cost-point-3': 'We provide detailed commercial calculation within <strong>10 business days</strong>',
    'cost-step-1': 'You <strong>submit a request</strong> or send technical specifications', 'cost-step-2': 'We clarify requirements and <strong>prepare a commercial proposal</strong>', 'cost-step-3': 'Agreeing on <strong>budget</strong> and <strong>deadlines</strong>', 'cost-step-4': '<strong>Work begins</strong> after signing the contract',
    'cost-note': 'All calculations are <strong>transparent</strong> and flexibly <strong>adapted</strong> to your tasks',
    'footer-address-label': 'Address', 'footer-address': '010000, Astana,<br/>Mangilik El Ave, 8,<br/>entrance 1B', 'footer-phone-label': 'Contact phones', 'footer-email-label': 'Email', 'footer-social-label': 'Social networks:', 'footer-copy': '2026 ©️ RSE "Engineering and Technical Center of UDA RK"',
  }
};

function changeLang(lang) {
  try {
    document.querySelectorAll('.lang a').forEach(a => a.classList.remove('active'));
    const activeLink = document.querySelector(`.lang a[onclick*="'${lang}'"]`);
if (activeLink) activeLink.classList.add('active');
    const t = translations[lang];
    const g = (id) => document.getElementById(id);

    try { document.querySelector('.topbar-access').innerHTML = `<img src="icons/ochki.png" width="22" height="10" alt="" /> ${t['access-btn']}`; } catch(e) {}
    try { document.querySelector('.hero-title').textContent = t['hero-title']; } catch(e) {}
    try { document.querySelector('.hero-desc').innerHTML = t['hero-desc']; } catch(e) {}
    try { document.querySelector('.btn-outline').textContent = t['hero-btn']; } catch(e) {}
    try { const s = document.querySelectorAll('.stat-item p'); if(s[0])s[0].innerHTML=t['stat-1']; if(s[1])s[1].innerHTML=t['stat-2']; if(s[2])s[2].innerHTML=t['stat-3']; if(s[3])s[3].innerHTML=t['stat-4']; } catch(e) {}
    try {
      document.querySelector('.products-title').textContent = t['products-title'];
      const tabs = document.querySelectorAll('.tab');
      for(let i=0; i<5; i++) {
        const names = ['sak','epir','oss','tech','byuro'];
        if(tabs[i]) { tabs[i].querySelector('.tab-name').textContent = t['tab-'+names[i]+'-name']; tabs[i].querySelector('.tab-desc').textContent = t['tab-'+names[i]+'-desc']; }
      }
    } catch(e) {}

    // САК
    const sakIds = ['sak-title-el','sak-text1-el','sak-text2-el','sak-text3-el','sak-ai-label-el','sak-ai-1','sak-ai-2','sak-ai-3','sak-offer-title','offer-soffer-subtitile','sak-what','sak-item1','sak-item2','sak-item3','sak-item4','sak-unique-label','sak-unique1','sak-unique2','sak-motiv-label','sak-motiv1','sak-dev-label','sak-adv1','sak-adv2'];
    const sakKeys = ['sak-title','sak-text1','sak-text2','sak-text3','sak-ai-label','sak-ai-1','sak-ai-2','sak-ai-3','sak-offer-title','sak-offer-subtitle','sak-what','sak-item1','sak-item2','sak-item3','sak-item4','sak-unique-label','sak-unique1','sak-unique2','sak-motiv-label','sak-motiv1','sak-dev-label','sak-adv1','sak-adv2'];
    sakIds.forEach((id,i) => { try { const el = g(id); if(el) el.innerHTML = t[sakKeys[i]]; } catch(e) {} });

    // ЕПИР + ОСС + ТЕХ + БЮРО
    ['epir-title','epir-text1','epir-plus-label','epir-plus1','epir-plus2','epir-plus3','epir-grid-label','epir-g1','epir-g2','epir-g3','epir-g4','epir-g5','epir-g6','epir-g7','epir-g8','epir-prob-title','epir-p1','epir-p2','epir-p3','epir-p4','epir-p5','epir-p6','epir-p7','epir-p8','epir-p9','epir-sol-title','epir-s1','epir-s2','epir-s3','epir-s4','epir-s5','epir-s6','epir-s7','epir-s8','epir-offer-title','epir-offer-sub','epir-what','epir-item1','epir-item2','epir-item3','epir-item4','epir-unique-label','epir-unique1','epir-unique2','epir-motiv-label','epir-motiv1','epir-motiv2','epir-motiv3','epir-adv-label','epir-adv1','epir-adv2','epir-adv3','epir-adv4',
    'oss-title','oss-l1','oss-d1','oss-l2','oss-d2','oss-l3','oss-d3','oss-l4','oss-d4','oss-l5','oss-d5','oss-offer-title','oss-what','oss-item1','oss-item2','oss-item3','oss-item4','oss-item5','oss-unique-label','oss-unique1','oss-motiv-label','oss-motiv1','oss-adv-label','oss-adv1','oss-adv2','oss-adv3','oss-adv4',
    'tech-title','tech-text1','tech-e1','tech-e2','tech-e3','tech-e4','tech-e5','tech-e6','tech-e7','tech-e8','tech-e9','tech-e10','tech-offer-title','tech-what','tech-item1','tech-item1-sub','tech-item2','tech-item3','tech-item4','tech-unique-label','tech-unique1','tech-adv-label','tech-adv1','tech-adv2','tech-adv3','tech-adv4','tech-adv5',
    'byuro-prob-title','byuro-p1','byuro-p2','byuro-p3','byuro-p4','byuro-p5','byuro-sol-title','byuro-s1','byuro-s2','byuro-s3','byuro-s4','byuro-s5','byuro-s6','byuro-offer-title','byuro-what','byuro-item1','byuro-unique-label','byuro-unique1','byuro-unique2','byuro-unique3','byuro-adv-label','byuro-adv1','byuro-adv2','byuro-adv3']
    .forEach(id => { try { const el = g(id); if(el) el.innerHTML = t[id]; } catch(e) {} });

    try { document.querySelector('.cost-title').innerHTML = t['cost-title']; } catch(e) {}
    try { const cp = document.querySelectorAll('.cost-point p'); if(cp[0])cp[0].innerHTML=t['cost-point-1']; if(cp[1])cp[1].innerHTML=t['cost-point-2']; if(cp[2])cp[2].innerHTML=t['cost-point-3']; } catch(e) {}
    try { const cs = document.querySelectorAll('.cost-step p'); if(cs[0])cs[0].innerHTML=t['cost-step-1']; if(cs[1])cs[1].innerHTML=t['cost-step-2']; if(cs[2])cs[2].innerHTML=t['cost-step-3']; if(cs[3])cs[3].innerHTML=t['cost-step-4']; } catch(e) {}
    try { document.querySelector('.cost-note p').innerHTML = t['cost-note']; } catch(e) {}
    try { const fl = document.querySelectorAll('.footer-label'); if(fl[1])fl[1].textContent=t['footer-address-label']; if(fl[2])fl[2].textContent=t['footer-phone-label']; if(fl[3])fl[3].textContent=t['footer-email-label']; if(fl[4])fl[4].textContent=t['footer-social-label']; } catch(e) {}
    try { document.querySelector('.footer-brand p').innerHTML = t['footer-copy']; } catch(e) {}
    try { const fc = document.querySelectorAll('.footer-col'); if(fc[0]){const p=fc[0].querySelector('p:last-child'); if(p)p.innerHTML=t['footer-address'];} } catch(e) {}
  } catch(e) { console.log('Lang error:', e); }

}
document.addEventListener('DOMContentLoaded',function() { changeLang('ru'); });
