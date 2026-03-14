
import type { Language } from './LanguageContext';

export const ru = {
  authors: "Авторы",
  aboutGame: {
    button: "О игре",
    title: "Как играть?",
    description: "Добро пожаловать в нашу маленькую игру! Здесь вы найдете краткое руководство по основным механикам, чтобы ваше приключение было максимально понятным и увлекательным.",
    coreLoop: {
      title: "Основной игровой цикл: Вредность, Работа и Восстановление",
      text: "Ваш персонаж постоянно подвергается вредному воздействию, которое накапливается со временем. Если уровень вредности достигнет 100%, игра закончится.\nЧтобы противостоять этому, персонаж выполняет работу, зарабатывая очки. Эти очки можно потратить на 'напиток' (у каждого мира свой), который снижает уровень вредности. Скорость выполнения работы зависит от уровня 'счастья' персонажа — чем меньше вредность, тем быстрее он работает.",
    },
    upgrades: {
      title: "Улучшения",
      text: "Вы можете улучшать свой 'напиток', чтобы он эффективнее снижал вредность. Каждое улучшение стоит определенное количество очков работы. Чем выше уровень, тем сильнее эффект.",
    },
    goal: {
      title: "Цель игры: Путь к победе",
      text: "У каждого мира есть своя уникальная главная цель, разделенная на 5 этапов. Выполняя эти этапы за очки работы, вы приближаетесь к победе. Как только все 5 этапов будут завершены, игра закончится успехом, и вы увидите свой результат!",
    },
    worlds: {
      title: "Разнообразие миров",
      text: "В игре представлено четыре уникальных мира: Фэнтези, Киберпанк, Маленькие Пони и Офис. Каждый мир предлагает свою атмосферу, персонажа, ресурсы и цели. Выберите тот, что вам по душе!",
    },
    fairPlay: {
      title: "Честная игра: Защита от накрутки",
      text: "Мы ценим честность. Если вы свернете окно с игрой или переключитесь на другую вкладку, все игровые процессы (накопление вредности, времени и очков работы) будут приостановлены. Игра продолжится только тогда, когда вы вернетесь.",
    },
    languages: {
      title: "Поддержка языков",
      text: "Игра полностью переведена на русский и английский языки. Вы можете переключить язык в любой момент с помощью кнопок в правом верхнем углу экрана.",
    }
  },
  worldSelection: {
    title: "Выберите мир",
    subtitle: "Каждый мир имеет своих уникальных персонажей, ресурсы и испытания.",
    selectButton: "Выбрать",
  },
  game: {
    backToWorlds: "Вернуться к выбору мира",
    help: "Открыть справку",
    startGame: "Начать игру",
    stats: {
        workTime: "Время работы",
    },
    drinkButton: {
        withCost: (verb: string, name: string, cost: number, costName: string) => `${verb} ${name} (Стоимость: ${cost} ${costName})`,
        free: (verb: string, name: string) => `${verb} ${name}`,
    },
  },
  actionsPanel: {
    upgrade: {
      buttonText: (name: string, cost: number, costName: string) => `Улучшить ${name} (Стоимость: ${cost} ${costName})`,
      maxLevel: (name: string) => `${name} на макс. уровне!`,
      ariaLabel: (name: string, level: number, cost: number, costName: string) => `Улучшить ${name} до уровня ${level}. Стоимость: ${cost} ${costName}.`,
    },
    goal: {
      title: (current: number, max: number) => `Главная цель (${current}/${max})`,
      buttonText: (cost: number, costName: string) => `Выполнить (Стоимость: ${cost} ${costName})`,
      allCompleted: "Все цели достигнуты!",
    }
  },
  victoryScreen: {
    title: "Победа!",
    message: (time: string) => `Цель достигнута за ${time}!`,
    playAgain: "Сыграть снова",
  },
  gameOver: {
    tryAgain: "Попробовать еще раз",
    share: "Поделиться",
    copy: "Копировать",
    copied: "Скопировано!",
    shareTitle: (worldTitle: string) => `Мой результат в "${worldTitle}"`,
  },
  helpModal: {
    close: "Закрыть справку",
    level: "Уровень",
    recovery: "Восстановление",
    upgradeCost: (costName: string) => `Цена улучшения (${costName})`,
    usageCost: (drinkCostName: string, workCostName: string) => `${drinkCostName} (${workCostName})`,
  },
  achievementCard: {
      challenge: "Сможешь лучше?",
  },
  authorsScreen: {
    backButton: "Назад",
    mainTitle: "Кто стоит за этой игрой?",
    mainDescription: "Эта игра родилась из семейных вечеров, полных смеха, безумных идей и желания создать что-то своё. Мы — не большая студия, а просто семья, которая любит проводить время вместе и воплощать свои фантазии в жизнь. Каждый персонаж, каждая строчка кода и каждая шутка здесь — это частичка нас.",
    supportTitle: "Поддержать проект",
    supportDescription: "Если вам понравилась наша игра и вы хотите поддержать наше творчество (и, возможно, поучаствовать в финансировании следующей безумной идеи), мы будем безмерно благодарны. Ваша поддержка поможет нам и дальше создавать маленькие миры и платить за кофе для «папы-программиста».",
    son: { name: "Сын", role: "Основной генератор идей" },
    daughter: { name: "Дочь", role: "Источник черного юмора и язвительности" },
    dad: { name: "Папа", role: "Просто быстро печатает промпты" },
    mom: { name: "Мама", role: "Молчаливое одобрение" },
    ai: { name: "AI", role: "Без него не было бы игры" },
  },
  tombstone: {
      rip: "R.I.P.",
      epitaph: "Переработал",
  },
  wiltedFlower: {
      text: "Потускнела...",
  },
  firedBox: {
      text: "Вещи на выход...",
  },
  worlds: {
    fantasy: {
      title: "Проклятый Рудокоп",
      subtitle: "Напоить гнома тёмным пивом",
      selectionName: 'Фэнтези',
      selectionDescription: 'Добудьте мифрил в проклятой горе.',
      harmfulnessText: (p: number) => `Уровень вредности: ${p}%`,
      harmfulnessLabel: "Уровень вредности",
      goals: ["Выковать шлем", "Выковать наручи", "Выковать поножи", "Выковать нагрудник", "Выковать топор"],
      victoryText: "С полным комплектом брони и новым топором гном готов вернуться в подземелья и вернуть себе славу!",
      shareVictory: (time: string, title: string) => `Я выковал полный сет брони в "${title}" за ${time}! Попробуй побить мой рекорд!`,
      drink: {
        name: 'тёмное пиво', verb: 'Дать', statName: 'Пива выпито', levelName: 'Крепость пива',
        upgradeName: 'пиво', upgradeMax: 'Пиво улучшено', drinkingText: 'Пьет...',
        helpTitle: 'Справка по пиву',
        helpDesc: 'Улучшайте пиво за добытый мифрил, чтобы оно эффективнее снимало усталость. Первая кружка бесплатная, но за последующие придётся платить.',
        costName: 'Цена пинты',
      },
      workUnit: { statName: 'Мифрила добыто', costName: 'мифрила' },
      intro: {
        title: 'Клятва Хранителя',
        p1: 'В недрах проклятой горы, где воздух пропитан ядом и отчаянием, древний гном-рудокоп взывает о помощи. Его борода теряет блеск, а кирка становится неподъемной.',
        p2: 'Твоя задача — спуститься во тьму, неся с собой бочонок тёмного пива. Только оно может очистить его от скверны и вернуть ему былую мощь. Не дай последнему из рода пасть!',
        cta: 'Спуститься во тьму',
      },
      gameOver: {
        heading: "Последний глоток",
        p1: (work: number, drink: number) => `Он отдал всё, добыв <strong>${work}</strong> единиц мифрила и осушив <strong>${drink}</strong> кружек пива.`,
        p2: "Но скверна оказалась сильнее. Его титанический труд ушел в никуда, оставив лишь пыль и эхо ударов кирки.",
        subtext: "Зато в таверне вздохнули с облегчением. Спрос на пиво упал, и цены вернулись на прежний уровень."
      },
      share: (score: number, costName: string, title: string) => `Я получил ${score} ${costName} в игре "${title}"! Сможешь лучше?`,
      ranks: [
        { score: 0, title: "Начинающий копатель" }, { score: 10, title: "Закаленный рудокоп" },
        { score: 25, title: "Мастер-старатель" }, { score: 50, title: "Мифриловый барон" },
        { score: 100, title: "Легенда подземелий" }
      ],
    },
    cyberpunk: {
      title: "Хромированный Копатель",
      subtitle: "Перезарядить систему электрошоком",
      selectionName: 'Киберпанк',
      selectionDescription: 'Майните криптокоины в токсичных шахтах.',
      harmfulnessText: (p: number) => `Уровень вредности: ${p}%`,
      harmfulnessLabel: "Уровень вредности",
      goals: ["Установить нейро-ускоритель", "Установить оптику 'Кироши'", "Установить клинки 'Богомол'", "Установить усиленные сухожилия", "Установить синт-лёгкие 'Арес'"],
      victoryText: "Полностью экипированный и готовый к бою, копатель теперь не просто техник, а настоящая легенда нижних уровней Нео-Киото.",
      shareVictory: (time: string, title: string) => `Я полностью проапгрейдил свой кибер-костюм в "${title}" за ${time}! Сможешь быстрее?`,
      drink: {
        name: 'электрошок', verb: 'Применить', statName: 'Шоков принято', levelName: 'Мощность шока',
        upgradeName: 'электрошок', upgradeMax: 'Электрошок улучшен', drinkingText: 'Перезарядка...',
        helpTitle: 'Справка по электрошоку',
        helpDesc: 'Улучшайте электрошок за добытые криптокоины, чтобы он эффективнее восстанавливал систему. Первый разряд бесплатный, но за последующие придётся платить.',
        costName: 'Цена разряда',
      },
      workUnit: { statName: 'Криптокоинов добыто', costName: 'криптокоинов' },
      intro: {
        title: 'Контракт на извлечение',
        p1: 'В токсичных нижних уровнях Нео-Киото застрял хромированный техник-копатель. Его нейроинтерфейс перегружен, а наноботы в легких выходят из строя из-за мутагенной пыли.',
        p2: 'Твой дрон доставит мощный электрошок для перезарядки. Управляй им, калибруй мощность и не дай корпорации списать ценный актив. Его жизнь — твоя премия.',
        cta: 'Начать синхронизацию',
      },
      gameOver: {
        heading: "СИСТЕМНЫЙ СБОЙ",
        p1: (work: number, drink: number) => `Он отдал всё, добыв <strong>${work}</strong> криптокоинов и приняв <strong>${drink}</strong> разрядов электрошока.`,
        p2: "Но вредное производство оказалось сильнее. Его система сгорела, оставив лишь груду искореженного металлолома.",
        subtext: "Зато корпорация сэкономила на списании и выплатила акционерам неплохие дивиденды."
      },
      share: (score: number, costName: string, title: string) => `Я получил ${score} ${costName} в игре "${title}"! Сможешь лучше?`,
      ranks: [
        { score: 0, title: "Новичок-майнер" }, { score: 10, title: "Крипто-старатель" },
        { score: 25, title: "Сетевой барон" }, { score: 50, title: "Кибер-магнат" },
        { score: 100, title: "Властелин блокчейна" }
      ],
    },
    pony: {
      title: "Зачарованная Пони-Копательница",
      subtitle: "Угостить Блестяшку радужным молоком",
      selectionName: 'Маленькие Пони',
      selectionDescription: 'Соберите сферы дружбы в волшебных пещерах.',
      harmfulnessText: (p: number) => `Уровень вредности: ${p}%`,
      harmfulnessLabel: "Уровень вредности",
      goals: ["Собрать радужную муку", "Найти солнечный сахар", "Добавить ягоды-хохотушки", "Взбить облачную глазурь", "Украсить звёздной посыпкой"],
      victoryText: "Торт Дружбы готов! Его волшебный аромат наполнил пещеры, и Блестяшка снова сияет ярче всех звёзд!",
      shareVictory: (time: string, title: string) => `Я испекла Торт Дружбы в "${title}" за ${time}! Присоединяйся к веселью!`,
      drink: {
        name: 'радужное молоко', verb: 'Дать', statName: 'Молока выпито', levelName: 'Сила молока',
        upgradeName: 'молоко', upgradeMax: 'Молоко улучшено', drinkingText: 'Пьет...',
        helpTitle: 'Справка по молоку',
        helpDesc: 'Улучшайте молоко за собранные сферы дружбы, чтобы оно эффективнее снижало вредность. Молоко первого уровня бесплатное, но за последующие уровни придётся платить.',
        costName: 'Цена порции',
      },
      workUnit: { statName: 'Сфер дружбы собрано', costName: 'сфер дружбы' },
      intro: {
        title: 'Спасение Блестяшки!',
        p1: 'О, нет! Пони по имени Блестяшка заблудилась в Радужных Пещерах и надышалась сверкающей, но очень вредной пыльцой! Её грива тускнеет, а кьюти-марка почти исчезла!',
        p2: 'Только волшебное молоко из Облачного Молочного Пути может вернуть ей блеск и радость! Помоги ей, пока её магия дружбы не иссякла! Время для обнимашек на исходе!',
        cta: 'Спасти дружбу!',
      },
      gameOver: {
        heading: "Магия дружбы иссякла",
        p1: (work: number, drink: number) => `Она сделала всё, что могла, собрав <strong>${work}</strong> сфер дружбы и выпив <strong>${drink}</strong> порций радужного молока.`,
        p2: "Но вредная пыльца оказалась сильнее. Её грива потускнела, а кьюти-марка исчезла навсегда.",
        subtext: "Зато теперь у остальных пони есть поучительная история о том, почему не стоит заходить в Радужные Пещеры без надежных друзей."
      },
      share: (score: number, costName: string, title: string) => `Я собрала ${score} ${costName} в игре "${title}"! Сможешь лучше?`,
      ranks: [
        { score: 0, title: "Искательница искр" }, { score: 10, title: "Хранительница дружбы" },
        { score: 25, title: "Магистр гармонии" }, { score: 50, title: "Радужная королева" },
        { score: 100, title: "Легенда Эквестрии" }
      ],
    },
    office: {
      title: "Корпоративный Выгорающий",
      subtitle: "Отсрочить выгорание крепким кофе",
      selectionName: 'Офис',
      selectionDescription: 'Выполняйте задачи, чтобы отсрочить выгорание.',
      harmfulnessText: (p: number) => `Уровень выгорания: ${p}%`,
      harmfulnessLabel: "Уровень выгорания",
      goals: ["Погасить студенческий кредит", "Погасить кредит на машину", "Закрыть ипотеку", "Купить яхту", "Купить суперджет"],
      victoryText: "Достигнув вершин корпоративного мира, сотрудник теперь владеет всем, о чем можно мечтать. Частная яхта и суперджет — лишь символы его успеха. Что дальше? Может, купить небольшой остров?",
      shareVictory: (time: string, title: string) => `Я купил яхту и суперджет в "${title}" за ${time}! Попробуй превзойти мой успех!`,
      drink: {
        name: 'кофе', verb: 'Налить', statName: 'Кофе выпито', levelName: 'Крепость кофе',
        upgradeName: 'кофе', upgradeMax: 'Кофе улучшен', drinkingText: 'Пьет...',
        helpTitle: 'Справка по кофе',
        helpDesc: 'Улучшайте кофе за выполненные задачи, чтобы он эффективнее снимал выгорание. Первая чашка бесплатная, но за последующие придётся платить.',
        costName: 'Цена чашки',
      },
      workUnit: { statName: 'Задач выполнено', costName: 'задач' },
      intro: {
        title: 'Квартальный отчет',
        p1: 'В сером лабиринте офисных перегородок трудится рядовой "белый воротничок". Его глаза красны от монитора, а душа пуста от бесконечных созвонов и правок в Excel.',
        p2: 'Твоя миссия — поддержать его уровень кофеина. Только крепкий кофе из офисной кофемашины может спасти его от полного выгорания и увольнения. Не дай ему утонуть в море бумаг!',
        cta: 'Налить чашечку',
      },
      gameOver: {
        heading: "Уволен по итогам квартала",
        p1: (work: number, drink: number) => `Он выложился на 110%, выполнив <strong>${work}</strong> задач и выпив <strong>${drink}</strong> чашек кофе.`,
        p2: "Но дедлайн был вчера. Его показатели эффективности упали, и он был заменен более молодым и энергичным стажером.",
        subtext: "Зато теперь у него есть время на хобби. И на поиск новой работы."
      },
      share: (score: number, costName: string, title: string) => `Я выполнил ${score} ${costName} в игре "${title}"! Сможешь лучше?`,
      ranks: [
        { score: 0, title: "Младший стажер" }, { score: 10, title: "Эффективный менеджер" },
        { score: 25, title: "Гуру Excel" }, { score: 50, title: "Начальник отдела" },
        { score: 100, title: "CEO корпорации" }
      ],
    },
  },
};

const en: typeof ru = {
  authors: "Authors",
  aboutGame: {
    button: "About Game",
    title: "How to Play?",
    description: "Welcome to our little game! Here you'll find a brief guide to the main mechanics to make your adventure as clear and enjoyable as possible.",
    coreLoop: {
      title: "Core Game Loop: Harmfulness, Work, and Recovery",
      text: "Your character is constantly exposed to a harmful effect that accumulates over time. If the harmfulness level reaches 100%, the game will end.\nTo counteract this, the character performs work, earning points. These points can be spent on a 'drink' (unique to each world), which reduces the harmfulness level. The speed of work depends on the character's 'happiness' level—the lower the harmfulness, the faster they work.",
    },
    upgrades: {
      title: "Upgrades",
      text: "You can upgrade your 'drink' to make it more effective at reducing harmfulness. Each upgrade costs a certain amount of work points. The higher the level, the stronger the effect.",
    },
    goal: {
      title: "Game Goal: The Path to Victory",
      text: "Each world has its own unique main goal, divided into 5 stages. By completing these stages for work points, you get closer to victory. Once all 5 stages are completed, the game ends in success, and you will see your result!",
    },
    worlds: {
      title: "Variety of Worlds",
      text: "The game features four unique worlds: Fantasy, Cyberpunk, My Little Pony, and Office. Each world offers its own atmosphere, character, resources, and goals. Choose the one that suits your taste!",
    },
    fairPlay: {
      title: "Fair Play: Anti-Farming Protection",
      text: "We value honesty. If you minimize the game window or switch to another tab, all game processes (accumulation of harmfulness, time, and work points) will be paused. The game will only resume when you return.",
    },
    languages: {
      title: "Language Support",
      text: "The game is fully translated into Russian and English. You can switch the language at any time using the buttons in the top right corner of the screen.",
    }
  },
  worldSelection: {
    title: "Choose Your World",
    subtitle: "Each world has unique characters, resources, and challenges.",
    selectButton: "Select",
  },
  game: {
    backToWorlds: "Back to world selection",
    help: "Open help",
    startGame: "Start Game",
    stats: {
        workTime: "Work Time",
    },
    drinkButton: {
        withCost: (verb: string, name: string, cost: number, costName: string) => `${verb} ${name} (Cost: ${cost} ${costName})`,
        free: (verb: string, name: string) => `${verb} ${name}`,
    },
  },
  actionsPanel: {
    upgrade: {
      buttonText: (name: string, cost: number, costName: string) => `Upgrade ${name} (Cost: ${cost} ${costName})`,
      maxLevel: (name: string) => `${name} is fully upgraded!`,
      ariaLabel: (name: string, level: number, cost: number, costName: string) => `Upgrade ${name} to level ${level}. Cost: ${cost} ${costName}.`,
    },
    goal: {
      title: (current: number, max: number) => `Main Goal (${current}/${max})`,
      buttonText: (cost: number, costName: string) => `Complete (Cost: ${cost} ${costName})`,
      allCompleted: "All goals achieved!",
    }
  },
  victoryScreen: {
    title: "Victory!",
    message: (time: string) => `Goal achieved in ${time}!`,
    playAgain: "Play Again",
  },
  gameOver: {
    tryAgain: "Try Again",
    share: "Share",
    copy: "Copy",
    copied: "Copied!",
    shareTitle: (worldTitle: string) => `My result in "${worldTitle}"`,
  },
  helpModal: {
    close: "Close help",
    level: "Level",
    recovery: "Recovery",
    upgradeCost: (costName: string) => `Upgrade Cost (${costName})`,
    usageCost: (drinkCostName: string, workCostName: string) => `${drinkCostName} (${workCostName})`,
  },
  achievementCard: {
      challenge: "Can you do better?",
  },
  authorsScreen: {
    backButton: "Back",
    mainTitle: "Who is behind this game?",
    mainDescription: "This game was born from family evenings filled with laughter, crazy ideas, and the desire to create something of our own. We are not a large studio, but simply a family that loves to spend time together and bring our fantasies to life. Every character, every line of code, and every joke here is a part of us.",
    supportTitle: "Support the Project",
    supportDescription: "If you enjoyed our game and want to support our creativity (and perhaps help fund the next crazy idea), we would be immensely grateful. Your support helps us continue to create little worlds and pay for coffee for the 'programmer dad'.",
    son: { name: "Son", role: "Main idea generator" },
    daughter: { name: "Daughter", role: "Source of dark humor and sarcasm" },
    dad: { name: "Dad", role: "Just types prompts quickly" },
    mom: { name: "Mom", role: "Silent approval" },
    ai: { name: "AI", role: "The game wouldn't exist without it" },
  },
  tombstone: {
      rip: "R.I.P.",
      epitaph: "Overworked",
  },
  wiltedFlower: {
      text: "Faded...",
  },
  firedBox: {
      text: "Things to go...",
  },
  worlds: {
    fantasy: {
      title: "The Cursed Miner",
      subtitle: "Quench the dwarf's thirst with dark beer",
      selectionName: 'Fantasy',
      selectionDescription: 'Mine mythril in a cursed mountain.',
      harmfulnessText: (p: number) => `Harmfulness Level: ${p}%`,
      harmfulnessLabel: "Harmfulness Level",
      goals: ["Forge Helm", "Forge Bracers", "Forge Greaves", "Forge Chestplate", "Forge Axe"],
      victoryText: "With a full set of armor and a new axe, the dwarf is ready to return to the dungeons and reclaim his glory!",
      shareVictory: (time: string, title: string) => `I forged a full set of armor in "${title}" in ${time}! Try to beat my record!`,
      drink: {
        name: 'dark beer', verb: 'Give', statName: 'Beers Drank', levelName: 'Beer Strength',
        upgradeName: 'beer', upgradeMax: 'Beer upgraded', drinkingText: 'Drinking...',
        helpTitle: 'Beer Guide',
        helpDesc: 'Upgrade the beer with mined mythril to make it more effective at relieving fatigue. The first mug is free, but you\'ll have to pay for subsequent ones.',
        costName: 'Pint Cost',
      },
      workUnit: { statName: 'Mythril Mined', costName: 'mythril' },
      intro: {
        title: "The Keeper's Oath",
        p1: "In the depths of a cursed mountain, where the air is thick with poison and despair, an ancient dwarf miner calls for help. His beard is losing its shine, and his pickaxe feels impossibly heavy.",
        p2: "Your task is to descend into the darkness, carrying a keg of dark beer. Only it can cleanse him of the corruption and restore his former might. Don't let the last of his line fall!",
        cta: "Descend into Darkness",
      },
      gameOver: {
        heading: "The Last Sip",
        p1: (work: number, drink: number) => `He gave his all, mining <strong>${work}</strong> units of mythril and downing <strong>${drink}</strong> mugs of beer.`,
        p2: "But the corruption proved stronger. His titanic labor came to naught, leaving only dust and the echo of his pickaxe strikes.",
        subtext: "But at least the tavern breathed a sigh of relief. The demand for beer dropped, and prices returned to normal."
      },
      share: (score: number, costName: string, title: string) => `I got ${score} ${costName} in the game "${title}"! Can you do better?`,
      ranks: [
        { score: 0, title: "Novice Digger" }, { score: 10, title: "Hardened Miner" },
        { score: 25, title: "Master Prospector" }, { score: 50, title: "Mythril Baron" },
        { score: 100, title: "Legend of the Undermountain" }
      ],
    },
    cyberpunk: {
      title: "The Chrome Digger",
      subtitle: "Recharge the system with an electroshock",
      selectionName: 'Cyberpunk',
      selectionDescription: 'Mine cryptocoins in toxic shafts.',
      harmfulnessText: (p: number) => `Harmfulness Level: ${p}%`,
      harmfulnessLabel: "Harmfulness Level",
      goals: ["Install Neuro-Accelerator", "Install 'Kiroshi' Optics", "Install 'Mantis' Blades", "Install Reinforced Tendons", "Install 'Ares' Synth-Lungs"],
      victoryText: "Fully equipped and ready for combat, the digger is now not just a technician, but a true legend of the lower levels of Neo-Kyoto.",
      shareVictory: (time: string, title: string) => `I fully upgraded my cyber-suit in "${title}" in ${time}! Can you do it faster?`,
      drink: {
        name: 'electroshock', verb: 'Apply', statName: 'Shocks Taken', levelName: 'Shock Power',
        upgradeName: 'electroshock', upgradeMax: 'Electroshock upgraded', drinkingText: 'Recharging...',
        helpTitle: 'Electroshock Guide',
        helpDesc: 'Upgrade the electroshock with mined cryptocoins to make it more effective at system recovery. The first shock is free, but you\'ll have to pay for subsequent ones.',
        costName: 'Charge Cost',
      },
      workUnit: { statName: 'Cryptocoins Mined', costName: 'cryptocoins' },
      intro: {
        title: 'Extraction Contract',
        p1: "In the toxic lower levels of Neo-Kyoto, a chrome-plated tech-digger is stranded. His neuro-interface is overloaded, and the nanobots in his lungs are failing due to mutagenic dust.",
        p2: "Your drone will deliver a powerful electroshock for a recharge. Control it, calibrate the power, and don't let the corporation write off a valuable asset. His life is your bonus.",
        cta: 'Initiate Sync',
      },
      gameOver: {
        heading: "SYSTEM FAILURE",
        p1: (work: number, drink: number) => `He gave his all, mining <strong>${work}</strong> cryptocoins and taking <strong>${drink}</strong> electroshocks.`,
        p2: "But the hazardous environment proved stronger. His system burned out, leaving only a pile of mangled scrap metal.",
        subtext: "But at least the corporation saved on write-offs and paid out nice dividends to the shareholders."
      },
      share: (score: number, costName: string, title: string) => `I got ${score} ${costName} in the game "${title}"! Can you do better?`,
      ranks: [
        { score: 0, title: "Rookie Miner" }, { score: 10, title: "Crypto Prospector" },
        { score: 25, title: "Net Baron" }, { score: 50, title: "Cyber Tycoon" },
        { score: 100, title: "Lord of the Blockchain" }
      ],
    },
    pony: {
      title: "The Enchanted Pony-Digger",
      subtitle: "Treat Sparkle to some rainbow milk",
      selectionName: 'My Little Pony',
      selectionDescription: 'Gather friendship spheres in magical caves.',
      harmfulnessText: (p: number) => `Harmfulness Level: ${p}%`,
      harmfulnessLabel: "Harmfulness Level",
      goals: ["Gather Rainbow Flour", "Find Sunshine Sugar", "Add Giggle Berries", "Whip Cloud Icing", "Decorate with Starlight Sprinkles"],
      victoryText: "The Friendship Cake is ready! Its magical aroma filled the caves, and Sparkle is shining brighter than all the stars again!",
      shareVictory: (time: string, title: string) => `I baked a Friendship Cake in "${title}" in ${time}! Join the fun!`,
      drink: {
        name: 'rainbow milk', verb: 'Give', statName: 'Milk Drank', levelName: 'Milk Power',
        upgradeName: 'milk', upgradeMax: 'Milk upgraded', drinkingText: 'Drinking...',
        helpTitle: 'Milk Guide',
        helpDesc: 'Upgrade the milk with collected friendship spheres to make it more effective at reducing harmfulness. Level 1 milk is free, but you\'ll have to pay for subsequent levels.',
        costName: 'Serving Cost',
      },
      workUnit: { statName: 'Friendship Spheres', costName: 'friendship spheres' },
      intro: {
        title: "Saving Sparkle!",
        p1: "Oh no! A pony named Sparkle got lost in the Rainbow Caves and inhaled some sparkly, but very harmful, pollen! Her mane is dulling, and her cutie mark has almost disappeared!",
        p2: "Only magical milk from the Cloudy Milky Way can bring back her shine and joy! Help her before her magic of friendship runs out! Time for cuddles is running short!",
        cta: 'Save Friendship!',
      },
      gameOver: {
        heading: "The Magic of Friendship Has Faded",
        p1: (work: number, drink: number) => `She did all she could, gathering <strong>${work}</strong> friendship spheres and drinking <strong>${drink}</strong> servings of rainbow milk.`,
        p2: "But the harmful pollen proved stronger. Her mane dulled, and her cutie mark vanished forever.",
        subtext: "But now the other ponies have a cautionary tale about why you shouldn't enter the Rainbow Caves without a respirator."
      },
      share: (score: number, costName: string, title: string) => `I gathered ${score} ${costName} in the game "${title}"! Can you do better?`,
      ranks: [
        { score: 0, title: "Sparkle Seeker" }, { score: 10, title: "Friendship Keeper" },
        { score: 25, title: "Master of Harmony" }, { score: 50, title: "Rainbow Queen" },
        { score: 100, title: "Legend of Equestria" }
      ],
    },
    office: {
      title: "The Corporate Climber",
      subtitle: "Climb the ladder with strong coffee",
      selectionName: 'Office',
      selectionDescription: 'Complete tasks to climb the corporate ladder.',
      harmfulnessText: (p: number) => `Burnout Level: ${p}%`,
      harmfulnessLabel: "Burnout Level",
      goals: ["Pay off student loan", "Pay off car loan", "Close the mortgage", "Buy a yacht", "Buy a superjet"],
      victoryText: "Having reached the pinnacle of the corporate world, the employee now owns everything one could dream of. A private yacht and a superjet are just symbols of his success. What's next? Maybe buy a small island?",
      shareVictory: (time: string, title: string) => `I bought a yacht and a superjet in "${title}" in ${time}! Try to top my success!`,
      drink: {
        name: 'coffee', verb: 'Pour', statName: 'Coffees Drank', levelName: 'Coffee Strength',
        upgradeName: 'coffee', upgradeMax: 'Coffee upgraded', drinkingText: 'Drinking...',
        helpTitle: 'Coffee Guide',
        helpDesc: 'Upgrade the coffee with completed tasks to make it more effective at relieving burnout. The first cup is free, but you\'ll have to pay for subsequent ones.',
        costName: 'Cup Cost',
      },
      workUnit: { statName: 'Tasks Completed', costName: 'tasks' },
      intro: {
        title: 'Quarterly Report',
        p1: "In the gray maze of office cubicles, an ordinary 'white-collar' worker toils away. His eyes are red from the monitor, and his soul is empty from endless meetings and Excel revisions.",
        p2: "Your mission is to maintain his caffeine level. Only strong coffee from the office machine can save him from complete burnout and dismissal. Don't let him drown in a sea of paperwork!",
        cta: 'Pour a Cup',
      },
      gameOver: {
        heading: "Fired at the End of the Quarter",
        p1: (work: number, drink: number) => `He gave 110%, completing <strong>${work}</strong> tasks and drinking <strong>${drink}</strong> cups of coffee.`,
        p2: "But the deadline was yesterday. His performance metrics dropped, and he was replaced by a younger, more energetic intern.",
        subtext: "But now he has time for hobbies. And for looking for a new job."
      },
      share: (score: number, costName: string, title: string) => `I completed ${score} ${costName} in the game "${title}"! Can you do better?`,
      ranks: [
        { score: 0, title: "Junior Intern" }, { score: 10, title: "Effective Manager" },
        { score: 25, title: "Excel Guru" }, { score: 50, title: "Department Head" },
        { score: 100, title: "Corporate CEO" }
      ],
    },
  },
};

export const translations: Record<Language, typeof ru> = {
  en,
  ru,
};
