const eventData = [
  {
    id: 0,
    imgSrc: "images/event_img_1.png",
    category: "school",
    location: "Dhaka, Bangladesh",
    time: "08.00 am - 10.00 am",
    title: "Outdoor This Games",
    longTitle: "Outdoor This Games - A Fun Day of Outdoor Activities",
    slug: "outdoor-this-games",
    desc: "We can provide you with a reliable handyan in London you need to included the today..",
    longDesc:
      "Join us for a day of exciting outdoor activities and games in the beautiful Dhaka, Bangladesh. Whether you're a student or just looking for some outdoor fun, this event is perfect for you.",
    name: "hasan mahmud",
    price: 50.0,
    color: "blue",
  },
  {
    id: 1,
    imgSrc: "images/event_img_2.png",
    category: "music",
    location: "New York, USA",
    time: "07.30 pm - 11.00 pm",
    title: "Live Music Concert",
    longTitle: "Live Music Concert - An Unforgettable Night of Music",
    slug: "live-music-concert",
    desc: "Join us for an unforgettable night of live music with your favorite artists.",
    longDesc:
      "Experience the magic of live music in the heart of New York City. This concert features some of the most talented musicians performing your favorite songs. Get ready for a night to remember!",
    name: "Sarah Johnson",
    price: 60.0,
    color: "orange",
  },
  {
    id: 2,
    imgSrc: "images/event_img_3.png",
    category: "sports",
    location: "Los Angeles, USA",
    time: "10.00 am - 12.00 pm",
    title: "Basketball Tournament",
    longTitle: "Basketball Tournament - Showcase Your Skills on the Court",
    slug: "basketball-tournament",
    desc: "Compete in our annual basketball tournament and show off your skills on the court.",
    longDesc:
      "Calling all basketball enthusiasts! Join us for our annual basketball tournament in Los Angeles. It's your chance to showcase your skills, compete with others, and have a great time!",
    name: "Michael Smith",
    price: 35.0,
    color: "green",
  },
  {
    id: 3,
    imgSrc: "images/event_img_4.png",
    category: "science",
    location: "Chicago, USA",
    time: "09.30 am - 11.30 am",
    title: "Science Fair",
    longTitle: "Science Fair - Explore the Wonders of Science",
    slug: "science-fair",
    desc: "Explore the wonders of science at our annual science fair. Fun for all ages!",
    longDesc:
      "Curious about the world of science? Join us at the Chicago Science Fair and embark on a journey of discovery. This family-friendly event promises fun and learning for everyone!",
    name: "Linda Anderson",
    price: 15.0,
    color: "red",
  },
  {
    id: 4,
    imgSrc: "images/event_img_5.png",
    category: "food",
    location: "Paris, France",
    time: "06.00 pm - 09.00 pm",
    title: "Gourmet Food Festival",
    longTitle: "Gourmet Food Festival - A Culinary Adventure",
    slug: "gourmet-food-festival",
    desc: "Indulge in a culinary adventure with a variety of gourmet dishes from around the world.",
    longDesc:
      "Calling all food lovers! Join us for a culinary adventure at the Paris Gourmet Food Festival. Sample a diverse range of gourmet dishes from around the world and satisfy your taste buds!",
    name: "Julie Martin",
    price: 45.0,
    color: "blue",
  },
];

const faqData = [
  {
    id: 0,
    color: "orange",
    question: "Живые примеры",
    answer:
      "Знайте об эффективных техниках, которые используют профессиональные астрологи – преподаватели-практики поделятся своими секретами",
  },
  {
    id: 1,
    color: "green",
    question: "Правильные значения",
    answer:
      "Получите точные знания. Например, оппозиция Урана к Венере дает не транжирство, как принято говорить в интернете. На самом деле она отвечает за склонность закупаться впрок",
  },
  {
    id: 2,
    color: "red",
    question: "Грамотная проработка",
    answer:
      "Трактуйте гороскопы полноценно, применяйте техники компенсации и проработки напряженных аспектов – покажем способы включения тринов и секстилей",
  },
  {
    id: 3,
    color: "blue",
    question: "Прокачивание навыков",
    answer:
      "Повысьте свой профессионализм: научитесь консультировать клиентов – объяснять нюансы, отвечать на вопросы и давать индивидуальные советы",
  },
];

const allFaqData = [
  {
    id: 0,
    color: "orange",
    title: "What is the importance of education?",
    desc: "Education plays a crucial role in personal and societal development by imparting knowledge, skills, and values.",
  },
  {
    id: 1,
    color: "green",
    title: "What are the different levels of education?",
    desc: "Education encompasses various stages, including preschool, primary, secondary, higher education, and lifelong learning.",
  },
  {
    id: 2,
    color: "red",
    title: "How do I choose the right school for my child?",
    desc: "Selecting the right school involves considering factors such as location, curriculum, facilities, and educational philosophy.",
  },
  {
    id: 3,
    color: "blue",
    title: "What is the difference between public and private education?",
    desc: "Public schools are funded by the government, while private schools are independently funded, leading to differences in resources and curriculum.",
  },
  {
    id: 4,
    color: "orange",
    title: "How can I finance my education?",
    desc: "Explore options like scholarships, grants, loans, and financial aid to help fund your education.",
  },
  {
    id: 5,
    color: "green",
    title: "What are the benefits of online education?",
    desc: "Online education offers flexibility and accessibility, but it's important to understand the advantages and challenges.",
  },
  {
    id: 6,
    color: "blue",
    title: "How can I improve my study skills?",
    desc: "Enhance your study techniques with effective strategies for time management, note-taking, and more.",
  },
  {
    id: 7,
    color: "orange",
    title: "What careers are in demand and require specific education?",
    desc: "Learn about careers that demand specialized education and training to excel.",
  },
];

const workData = [
  {
    id: 0,
    imgSrc: "img/home/noroot-1.webp",
    task: "Давать практические рекомендации",
    color: "orange",
    desc: "Сможете с легкостью объяснять людям аспекты гороскопа – даже не прибегая к стандартным заученным фразам из научной литературы",
  },
  {
    id: 1,
    imgSrc: "img/home/norootty-2.webp",
    color: "green",
    task: "Различным методикам «чтения» карты",
    desc: "Овладеете различными методиками, чтобы выявить сильные и слабые стороны человека, определить таланты и другие моменты",
  },
  {
    id: 2,
    imgSrc: "img/home/norootdfg-3.webp",
    task: "Техникам коррекции и рекомендациям",
    color: "red",
    desc: "Обозначите проблемные точки натальной карты и определите наиболее подходящий способ их исправления",
  },
];

const testimonialData = [
  {
    id: 0,
    desc: "Только что прошла интенсив `Натальная карта от А до Я`. Долго выбирала где и у кого учиться, так как сейчас в дикрете и могу обучаться только удалённо, но при этом мне было важно чтобы обучение в online-формате было удобным (с ребёнком пока могу обучаться только пару часов в день) и при этом качественным и понятным лично для меня. Очень понравилось как Павел доносит информацию, быстро, лаконично и по сути, а то мне становится скучно и неинтересно, когда читают лекции медленно и безэмоционально)))). К тому же я тоже имею образование психолога, и мне нравится как Павел проводит иногда параллель с учением К. Г. Юнга. Также отдельное спасибо куратору Андрею - быстро отвечал и доступно объяснял многие нюансы: как работает астропрограмма, какой лучше именно вам выбрать дальше обучающий курс, тактично исправлял домашние задания. Спасибо, скоро буду продолжать обучение :)",
    imgSrc: "images/client_img_1.png",
    name: "Наталия Малахатько",
    designation: "Астрология от А до Я",
  },
  {
    id: 1,
    desc: "Андрей, Каждый день мысленно посылаю вам мою искреннюю благодарность за данный вовремя совет. Если бы не вы то в моей жизни никогда не было бы Инжениума и того огромного мира настоящей живой астрологии который мне открыл Павел.",
    imgSrc: "images/client_img_2.png",
    name: "Tetyana Gayvorons'ka",
    designation: "Курс Натальной астрологии - Живая Астрология 2.0",
  },
  {
    id: 2,
    desc: "Курс просто невероятный! Павел, вы просто переворачиваете сознание. Я ранее училась у других специалистов и всегда было много внутренних `протестов` т.к чувствовались какие то несостыковки по моим ощущениям, образам. Слушая вас я понимаю, что не просто так все это было. Настолько мне ложится все то, о чем вы рассказываете. В голове возникают просто сказочные образы. Это так замечательно. Очень хочу обучаться астрологии именно у вас! Еще раз, благодарю за чудесный курс. Всех вам земных благ!",
    imgSrc: "images/client_img_3.png",
    name: "Марьяна Магерамова",
    designation: "Тренинг - Алхмия Венеры",
  },
  {
    id: 3,
    desc: "Астрология от Павла Дементьева это нечто уникальное!!! Он очень гармонично соединил Астрологию с Психологией и с настоящим временем!!! Вся информация это практика!!! Я теперь понимаю, что Астрология это не плоскость, а многомерное пространство!!! Огромная благодарность за уникальные знания!!!",
    imgSrc: "images/client_img_2.png",
    name: "Татьяна Осадчук",
    designation: "Курс Натальной астрологии - `Живая Астрология 2.0`",
  },
];

const blogData = [
  {
    id: 0,
    imgSrc: "img/blog/opp-solnca-luny-400-250.webp",
    category: "астрология",
    color: "light_blue",
    title:
      "Оппозиция Солнца и Луны в натальной карте: как найти баланс между комфортом и самореализацией",
    longTitle: "Оппозиция Солнца и Луны. Разделяй и отдыхай!",
    slug: "oppozicziya-solncza-i-luny",
    desc: "Что означает оппозиция Солнца и Луны в астрологии? Почему такие люди испытывают внутренние конфликты и как выйти из замкнутого круга пассивности и перегрузки? Практичные рекомендации для обретения дисциплины и жизненного баланса.",
    longDesc: `<article>
  <p>
    В жизни человека, у которого в натальной карте есть оппозиция Солнца и Луны,
    как правило, не наблюдается гармонии. Комфорт, потребности и самореализация
    идут по разным дорогам и направлениям. В жизни постоянно возникают ситуации,
    когда необходимо делать мучительный выбор в пользу того или иного.
  </p>
  <p>
    Человек с оппозицией Солнце и Луны может жить по принципу, что само
    получится, само все сложится. Пытается найти поддержку во всем, в чем только
    можно. Сильная зацикленность на стабильности, стремлении иметь комфорт,
    покой. Поэтому часто происходит, что человек выходит из зоны комфорта,
    пытается проявить себя, свои цели, желания и намерения и тут же опять
    стремится к постоянному комфорту. Даже если я напрягаюсь, то потом я буду
    отдыхать, буду восстанавливаться.
  </p>
  <h3>Почему так происходит?</h3>

  <p>
    В оппозиции к Солнцу, Луна является трансформатор и обладает неким оттенком
    экзальтации, поэтому дает перебор покоя, сильно цепляется за комфорт, свои
    потребности. Человек проявляет излишнюю слабость, расхлябанность,
    инертность, зависимость, слишком восприимчивый. Присутствует инфантильность
    в поступках: я не готов ничего менять, не готов брать на себя за это
    ответственность. По Луне – живу и ничего не хочу менять. Быть более слабым,
    чем есть на самом деле, искать везде опоры и поддержки. Очень себя бережет,
    чтобы ни в коем случае не выйти из из режима безопасности. Например, делаю
    бизнес и мне нужно быть на 100% уверенным в завтрашнем дне. Но периодически
    оппозиция выводит из зоны комфорта, так как - это напряженный аспект. И чем
    больше человек пытается дотянутся до Луны, тем больше проваливается Солнце.
    Появляется ощущение пустоты, пропадает радость, теряется смысл жизни, нет
    мотивации. Поэтому периодически оппозиция выводит человека из зоны комфорта.
  </p>
  <p>
    Образуется два перекоса: то я долго нахожусь в режиме пассивности,
    восстановления, созерцания и отдыха. То рвусь куда-то изо всех сил, выжигаю
    свой ресурс окончательно.
  </p>
  <p>
    <strong>Задача - поменять Луну на Сатурн,</strong> периодически покидать
    зону комфорта. Ставить жесткие, конкретные цели и идти к ним. Придерживаться
    жесткого режима, балансировать между работой и отдыхом. Менять привычки,
    свое мировоззрение, представление и своё виденье мира. Убираем наивность,
    слабость, мягкость, все эмоции включаем требовательность, холодность,
    жесткость, решимость. Когда нужно включиться в процессы вместо того, чтобы
    проявлять слабость - нужно включить напор, проявить ответственность.
  </p>
  <p>
    Для людей с оппозицией Луны к Солнцу будет работать правило: либо я сегодня
    работаю, либо я сегодня только отдыхаю. Или дома выделить отдельную зону,
    отдельный кабинет, чтобы было разделение. Чётко распределить рабочие дни и
    выходные. Если у меня сегодня выходной, то я не занимаюсь работой ни при
    каких обстоятельствах. В бизнесе периоды неудач, кризиса надо преодолевать
    не путём пробивания, а изменять текущий подход. Например я бизнес строю,
    строю, а потом – тупик. Мир говорит - дальше по привычным схемам это
    работать не будет. Часто по оппозиции требуются радикальные изменения,
    решения. Поэтому я либо продаю бизнес и начинаю новый проект. Либо его
    полностью переделываю, делаю ребрендинг. Оппозиция запрещает линейность,
    инертность, привычный подход. Убираем все эмоции и включаем контроль.
    Подхожу к бизнесу, как к системе. Само ничего не сложится и не получится,
    разгильдяйство, которое есть нужно менять на Сатурн: дисциплина, режим,
    умение распределять задачи, контроль и требовательность.
  </p></article>`,
    author: "Андрей Семененко",
    date: "2019-04-01",
  },
  {
    id: 1,
    imgSrc: "images/blog_2.jpg",
    category: "technology",
    color: "orange",
    title: "Mastering JavaScript: Tips and Tricks for Web Developers",
    longTitle: "Mastering JavaScript: Tips and Tricks for Web Developers",
    slug: "mastering-javascript-tips-and-tricks-for-web-developers",
    desc: "Explore advanced JavaScript techniques to enhance your web development skills.",
    longDesc:
      "Take your web development skills to the next level with our comprehensive guide to mastering JavaScript. This blog post is packed with tips and tricks that will help both novice and experienced web developers write cleaner, more efficient code.",
    author: "Jane Smith",
    date: "26 Sep 2023",
  },
  {
    id: 2,
    imgSrc: "images/blog_3.jpg",
    category: "travel",
    color: "green",
    title: "Top 10 Must-Visit Destinations for Adventure Seekers",
    longTitle: "Top 10 Must-Visit Destinations for Adventure Seekers",
    slug: "top-10-must-visit-destinations-for-adventure-seekers",
    desc: "Embark on thrilling adventures by visiting these breathtaking destinations around the world.",
    longDesc:
      "Are you an adventure seeker looking for your next adrenaline rush? Discover the top 10 must-visit destinations that will satisfy your craving for adventure. From mountain treks to exotic wildlife encounters, these destinations have it all.",
    author: "Alice Johnson",
    date: "18 Aug 2023",
  },
  {
    id: 3,
    imgSrc: "images/blog_4.jpg",
    category: "food",
    color: "red",
    title: "Delicious and Nutritious: Healthy Recipes for a Balanced Diet",
    longTitle: "Delicious and Nutritious: Healthy Recipes for a Balanced Diet",
    slug: "delicious-and-nutritious-healthy-recipes-for-a-balanced-diet",
    desc: "Discover tasty recipes that will help you maintain a healthy and balanced diet.",
    longDesc:
      "Maintaining a healthy and balanced diet doesn't mean sacrificing flavor. Dive into our collection of delicious and nutritious recipes that will not only tantalize your taste buds but also support your journey toward a healthier you.",
    author: "Jack Ackerman",
    date: "25 May 2023",
  },
  {
    id: 4,
    imgSrc: "images/blog_5.jpg",
    category: "technology",
    color: "blue",
    title: "The Future of Artificial Intelligence: Trends and Innovations",
    longTitle: "The Future of Artificial Intelligence: Trends and Innovations",
    slug: "the-future-of-artificial-intelligence-trends-and-innovations",
    desc: "Stay updated on the latest AI trends and innovations shaping the future.",
    longDesc:
      "Artificial Intelligence is evolving rapidly. In this blog, we explore the most recent trends and innovations in AI technology, providing insights into how AI is shaping the future across various industries.",
    author: "Emily Davis",
    date: "12 Apr 2023",
  },
  {
    id: 5,
    imgSrc: "images/blog_6.jpg",
    category: "travel",
    color: "purple",
    title: "Exploring Hidden Gems: Off-the-Beaten-Path Travel Destinations",
    longTitle: "Exploring Hidden Gems: Off-the-Beaten-Path Travel Destinations",
    slug: "exploring-hidden-gems-off-the-beaten-path-travel-destinations",
    desc: "Escape the crowds and discover unique travel destinations around the world.",
    longDesc:
      "If you're tired of tourist traps, it's time to explore hidden gems. This blog takes you on a journey to off-the-beaten-path travel destinations that offer authentic experiences and a break from the crowds.",
    author: "Sophia Martinez",
    date: "5 Jul 2023",
  },
  {
    id: 6,
    imgSrc: "images/blog_7.jpg",
    category: "design",
    color: "light_blue",
    title: "Your Guide to Creating Stunning Website Designs",
    longTitle: "Your Guide to Creating Stunning Website Designs",
    slug: "your-guide-to-creating-stunning-website-designs",
    desc: "Learn essential tips and tricks for designing visually appealing websites.",
    longDesc:
      "Designing websites that captivate users requires a blend of creativity and technical know-how. This blog provides valuable insights and techniques for creating stunning website designs.",
    author: "David Wilson",
    date: "19 Nov 2023",
  },
  {
    id: 7,
    imgSrc: "images/blog_8.jpg",
    category: "food",
    color: "red",
    title: "The Art of Baking: Mastering Delicious Pastries",
    longTitle: "The Art of Baking: Mastering Delicious Pastries",
    slug: "the-art-of-baking-mastering-delicious-pastries",
    desc: "Discover the secrets to baking delectable pastries and desserts.",
    longDesc:
      "If you have a sweet tooth and a passion for baking, this blog is for you. Learn the art of baking and master the techniques to create mouthwatering pastries and desserts that will impress everyone.",
    author: "Ella Anderson",
    date: "8 Mar 2023",
  },
  {
    id: 8,
    imgSrc: "images/blog_9.jpg",
    category: "health",
    color: "green",
    title: "Mental Health Matters: Strategies for Well-Being",
    longTitle: "Mental Health Matters: Strategies for Well-Being",
    slug: "mental-health-matters-strategies-for-well-being",
    desc: "Explore effective strategies for maintaining mental health and well-being.",
    longDesc:
      "In today's fast-paced world, mental health is crucial. This blog delves into practical strategies and tips for maintaining mental well-being, reducing stress, and achieving a balanced and healthy life.",
    author: "Olivia Turner",
    date: "14 Feb 2023",
  },
  {
    id: 9,
    imgSrc: "images/blog_10.jpg",
    category: "technology",
    color: "orange",
    title: "Cybersecurity in a Digital World: Protecting Your Online Presence",
    longTitle:
      "Cybersecurity in a Digital World: Protecting Your Online Presence",
    slug: "cybersecurity-in-a-digital-world-protecting-your-online-presence",
    desc: "Learn essential cybersecurity practices to safeguard your online identity.",
    longDesc:
      "With the increasing reliance on the internet, cybersecurity is paramount. This blog discusses the importance of online security and provides tips and tools to protect your digital presence.",
    author: "Michael Carter",
    date: "22 Oct 2023",
  },
  {
    id: 10,
    imgSrc: "images/blog_11.jpg",
    category: "travel",
    color: "blue",
    title: "Culinary Adventures: Exploring World Cuisines",
    longTitle: "Culinary Adventures: Exploring World Cuisines",
    slug: "culinary-adventures-exploring-world-cuisines",
    desc: "Embark on a global culinary journey and savor the flavors of diverse cuisines.",
    longDesc:
      "Food is a universal language, and this blog takes you on a culinary adventure around the world. Discover the unique flavors, ingredients, and traditions of different cuisines that will tantalize your taste buds.",
    author: "Sophie Walker",
    date: "9 Jun 2023",
  },
  {
    id: 11,
    imgSrc: "images/blog_12.jpg",
    category: "science",
    color: "green",
    title: "The Wonders of Space: Exploring the Cosmos",
    longTitle: "The Wonders of Space: Exploring the Cosmos",
    slug: "the-wonders-of-space-exploring-the-cosmos",
    desc: "Journey through the cosmos and unravel the mysteries of space and astronomy.",
    longDesc:
      "Space has always fascinated humanity, and in this blog, we embark on a cosmic journey. Explore the mysteries of the universe, from distant galaxies to the wonders of our own solar system.",
    author: "Daniel White",
    date: "3 Nov 2023",
  },
  {
    id: 12,
    imgSrc: "images/blog_13.jpg",
    category: "food",
    color: "green",
    title: "Gourmet Delights: Culinary Adventures for Foodies",
    longTitle: "Gourmet Delights: Culinary Adventures for Foodies",
    slug: "gourmet-delights-culinary-adventures-for-foodies",
    desc: "Embark on a culinary journey to discover gourmet delicacies and epicurean experiences.",
    longDesc:
      "Calling all food enthusiasts! Join us as we embark on a gastronomic adventure to explore gourmet delights, from truffle tastings in France to wine pairings in Italy. Get ready to tantalize your taste buds.",
    author: "Ella Turner",
    date: "11 Sep 2023",
  },
  {
    id: 13,
    imgSrc: "images/blog_14.jpg",
    category: "health",
    color: "red",
    title: "Holistic Wellness: Nurturing Body, Mind, and Spirit",
    longTitle: "Holistic Wellness: Nurturing Body, Mind, and Spirit",
    slug: "holistic-wellness-nurturing-body-mind-and-spirit",
    desc: "Discover the principles of holistic wellness and achieve a balanced and fulfilling life.",
    longDesc:
      "True wellness encompasses more than just physical health. This blog explores the principles of holistic wellness, guiding you on a journey to nurture your body, mind, and spirit for a fulfilling and balanced life.",
    author: "Sophie Anderson",
    date: "29 Nov 2023",
  },
  {
    id: 14,
    imgSrc: "images/blog_15.jpg",
    category: "design",
    color: "light_blue",
    title: "Creating Digital Art: From Sketch to Masterpiece",
    longTitle: "Creating Digital Art: From Sketch to Masterpiece",
    slug: "creating-digital-art-from-sketch-to-masterpiece",
    desc: "Unlock your creativity and learn the process of creating stunning digital artworks.",
    longDesc:
      "Digital art offers endless possibilities for creative expression. In this blog, we guide you through the journey of creating digital art, from the initial sketch to the final masterpiece, with tips and techniques along the way.",
    author: "Alex Turner",
    date: "7 Jan 2023",
  },
];

const services = [
  {
    id: 0,
    iClassName: "fa fa-book",
    title: "Exclusive Man",
    desc: "Get exclusive handyman services for your home in London.",
    color: "red",
  },
  {
    id: 1,
    iClassName: "fa fa-palette",
    title: "UI/UX Design",
    desc: "Transform your digital user experience with our design expertise.",
    color: "gray",
  },
  {
    id: 2,
    iClassName: "fa fa-pencil-ruler",
    title: "Graphic Design",
    desc: "Create stunning visuals and graphics for your brand or project.",
    color: "green",
  },
  {
    id: 3,
    iClassName: "fa fa-analytics",
    title: "Digital Marketing",
    desc: "Boost your online presence and reach with our digital marketing strategies.",
    color: "blue",
  },
  {
    id: 4,
    iClassName: "fa fa-pencil-paintbrush",
    title: "Product Design",
    desc: "Bring your product ideas to life with our innovative design solutions.",
    color: "orange",
  },
];

const courseDataArray = [
  {
    id: 0,
    imgSrc: "images/courses_img_1.jpg",
    color: "orange",
    slug: "development-theory-learn",
    title: "Development Theory Learn",
    category: "Drawing",
    price: "$50.00",
    instructor: "Smith John",
    lessons: "14 lessons",
    description: "Learn about development theory in this comprehensive course.",
    rating: 4,
    students: "50+ students",
    instructorImg: "images/team_1.jpg",
    review: 43,
    date: "24 Jan 2023",
  },
  {
    id: 1,
    imgSrc: "images/courses_img_2.jpg",
    color: "green",
    slug: "learn-photography",
    title: "Learn Photography",
    category: "English",
    price: "$65.00",
    instructor: "Hasan Mahmud",
    lessons: "23 lessons",
    description: "Master the art of photography and take stunning pictures.",
    rating: 4,
    students: "94+ students",
    instructorImg: "images/team_2.jpg",
    review: 51,
    date: "28 Mar 2023",
  },
  {
    id: 2,
    imgSrc: "images/courses_img_3.jpg",
    color: "red",
    slug: "advance-wordpress",
    title: "Advance WordPress",
    category: "Design",
    price: "$99.00",
    instructor: "Khalid Hasan",
    lessons: "40 lessons",
    description:
      "Take your WordPress skills to the next level with advanced techniques.",
    rating: 4,
    students: "72+ students",
    instructorImg: "images/team_3.jpg",
    review: 21,
    date: "17 Jun 2023",
  },
  {
    id: 3,
    imgSrc: "images/courses_img_4.jpg",
    color: "blue",
    slug: "the-complete-financial-analyst",
    title: "The Complete Financial Analyst",
    category: "UI/UX",
    price: "$75.00",
    instructor: "Sazal Ahmed",
    lessons: "40 lessons",
    description:
      "Become a skilled financial analyst and excel in the world of finance.",
    rating: 4,
    students: "72+ students",
    instructorImg: "images/team_4.jpg",
    review: 35,
    date: "20 Apr 2023",
  },
  {
    id: 4,
    imgSrc: "images/courses_img_5.jpg",
    color: "orange",
    slug: "digital-marketing-mastery",
    title: "Digital Marketing Mastery",
    category: "Marketing",
    price: "$89.00",
    instructor: "Sarah Johnson",
    lessons: "35 lessons",
    description:
      "Master the art of digital marketing and boost your online presence.",
    rating: 4,
    students: "68+ students",
    instructorImg: "images/team_5.jpg",
    review: 37,
    date: "14 Jan 2023",
  },
  {
    id: 5,
    imgSrc: "images/courses_img_6.jpg",
    color: "green",
    slug: "data-science-fundamentals",
    title: "Data Science Fundamentals",
    category: "Data Science",
    price: "$120.00",
    instructor: "Alex Wilson",
    lessons: "50 lessons",
    description:
      "Learn the basics of data science and start your journey into data analysis.",
    rating: 4,
    students: "60+ students",
    instructorImg: "images/team_6.jpg",
    review: 63,
    date: "24 Oct 2023",
  },
  {
    id: 6,
    imgSrc: "images/courses_img_7.jpg",
    color: "red",
    slug: "web-development-bootcamp",
    title: "Web Development Bootcamp",
    category: "Web Development",
    price: "$149.00",
    instructor: "David Smith",
    lessons: "60 lessons",
    description:
      "Become a full-stack web developer with this intensive bootcamp.",
    rating: 4.5,
    students: "120+ students",
    instructorImg: "images/team_7.jpg",
    review: 38,
    date: "24 Nov 2023",
  },
  {
    id: 7,
    imgSrc: "images/courses_img_8.jpg",
    color: "blue",
    slug: "artificial-intelligence-101",
    title: "Artificial Intelligence 101",
    category: "Artificial Intelligence",
    price: "$99.00",
    instructor: "Emily White",
    lessons: "30 lessons",
    description: "Introduction to AI and its applications in the real world.",
    rating: 4.2,
    students: "80+ students",
    instructorImg: "images/team_8.jpg",
    review: 74,
    date: "28 Jul 2023",
  },
  {
    id: 8,
    imgSrc: "images/courses_img_9.jpg",
    color: "orange",
    slug: "modern-frontend-frameworks",
    title: "Modern Frontend Frameworks",
    category: "Web Development",
    price: "$79.00",
    instructor: "Sophia Turner",
    lessons: "45 lessons",
    description:
      "Explore modern frontend frameworks like React, Vue, and Angular.",
    rating: 4.3,
    students: "90+ students",
    instructorImg: "images/team_9.jpg",
    review: 85,
    date: "19 Jan 2023",
  },
  {
    id: 9,
    imgSrc: "images/courses_img_10.jpg",
    color: "green",
    slug: "advanced-machine-learning",
    title: "Advanced Machine Learning",
    category: "Machine Learning",
    price: "$129.00",
    instructor: "Daniel Brown",
    lessons: "55 lessons",
    description: "Master advanced machine learning algorithms and techniques.",
    rating: 4.4,
    students: "70+ students",
    instructorImg: "images/team_10.jpg",
    review: 63,
    date: "08 Jun 2023",
  },
  {
    id: 10,
    imgSrc: "images/courses_img_11.jpg",
    color: "red",
    slug: "professional-graphic-design",
    title: "Professional Graphic Design",
    category: "Design",
    price: "$89.00",
    instructor: "Olivia Davis",
    lessons: "38 lessons",
    description:
      "Learn the art of professional graphic design with industry tools.",
    rating: 4.6,
    students: "100+ students",
    instructorImg: "images/team_11.jpg",
    review: 95,
    date: "15 Sep 2023",
  },
  {
    id: 11,
    imgSrc: "images/courses_img_12.jpg",
    color: "blue",
    slug: "digital-entrepreneurship",
    title: "Digital Entrepreneurship",
    category: "Business",
    price: "$109.00",
    instructor: "Benjamin Carter",
    lessons: "42 lessons",
    description:
      "Start and grow your digital business with this comprehensive course.",
    rating: 4.7,
    students: "110+ students",
    instructorImg: "images/team_12.jpg",
    review: 98,
    date: "24 Jan 2023",
  },
  {
    id: 12,
    imgSrc: "images/courses_img_13.jpg",
    color: "orange",
    slug: "advanced-data-analysis",
    title: "Advanced Data Analysis",
    category: "Data Science",
    price: "$149.00",
    instructor: "Ella Turner",
    lessons: "48 lessons",
    description:
      "Take your data analysis skills to an advanced level with real-world projects.",
    rating: 4.4,
    students: "85+ students",
    instructorImg: "images/team_13.jpg",
    review: 73,
    date: "27 Nov 2023",
  },
  {
    id: 13,
    imgSrc: "images/courses_img_14.jpg",
    color: "green",
    slug: "professional-photography",
    title: "Professional Photography",
    category: "Photography",
    price: "$119.00",
    instructor: "Luisa Rodriguez",
    lessons: "50 lessons",
    description:
      "Become a professional photographer and capture stunning moments.",
    rating: 4.5,
    students: "95+ students",
    instructorImg: "images/team_14.jpg",
    review: 78,
    date: "20 May 2023",
  },
  {
    id: 14,
    imgSrc: "images/courses_img_15.jpg",
    color: "red",
    slug: "marketing-strategies-masterclass",
    title: "Marketing Strategies Masterclass",
    category: "Marketing",
    price: "$99.00",
    instructor: "Sophie Anderson",
    lessons: "35 lessons",
    description: "Learn effective marketing strategies to grow your business.",
    rating: 4.3,
    students: "75+ students",
    instructorImg: "images/team_15.jpg",
    review: 68,
    date: "24 Jun 2023",
  },
];

const teamData = [
  {
    id: 0,
    imgSrc: "images/team_1.jpg",
    name: "Benjamin Carter",
    designation: "Teacher",
    slug: "benjamin-carter",
    about:
      "I am a dedicated teacher with a passion for inspiring young minds. I believe in creating a positive learning environment to help students reach their full potential.",
    phone: "+1 (123) 456-7890",
  },
  {
    id: 1,
    imgSrc: "images/team_2.jpg",
    name: "John Smith",
    designation: "Principal",
    slug: "john-smith",
    about:
      "As the principal of this school, I am committed to fostering academic excellence and a supportive community. Together, we shape the future of our students.",
    phone: "+1 (234) 567-8901",
  },
  {
    id: 2,
    imgSrc: "images/team_3.jpg",
    name: "Emily Davis",
    designation: "Assistant Teacher",
    slug: "emily-davis",
    about:
      "I assist students in their learning journey, ensuring they grasp fundamental concepts. Together, we explore the exciting world of knowledge.",
    phone: "+1 (345) 678-9012",
  },
  {
    id: 3,
    imgSrc: "images/team_4.jpg",
    name: "Michael Johnson",
    designation: "Counselor",
    slug: "michael-johnson",
    about:
      "I provide guidance and support to students facing personal and academic challenges. My goal is to help them thrive emotionally and academically.",
    phone: "+1 (456) 789-0123",
  },
  {
    id: 4,
    imgSrc: "images/team_5.jpg",
    name: "David Wilson",
    designation: "Librarian",
    slug: "david-wilson",
    about:
      "As a librarian, I'm passionate about nurturing a love for reading and research. I'm here to assist students in their quest for knowledge.",
    phone: "+1 (567) 890-1234",
  },
  {
    id: 5,
    imgSrc: "images/team_6.jpg",
    name: "Daniel Brown",
    designation: "Science Teacher",
    slug: "daniel-brown",
    about:
      "Science is my passion, and I aim to make it exciting and accessible for all students. Let's explore the wonders of the natural world together.",
    phone: "+1 (678) 901-2345",
  },
  {
    id: 6,
    imgSrc: "images/team_7.jpg",
    name: "Olivia Davis",
    designation: "Art Teacher",
    slug: "olivia-davis",
    about:
      "I believe in the power of creativity to inspire and empower. Let's unleash our artistic potential and create beautiful masterpieces.",
    phone: "+1 (789) 012-3456",
  },
  {
    id: 7,
    imgSrc: "images/team_8.jpg",
    name: "Mia Hernandez",
    designation: "Math Teacher",
    slug: "mia-hernandez",
    about:
      "Mathematics is a fascinating puzzle waiting to be solved. I'm here to guide you through the world of numbers and equations.",
    phone: "+1 (890) 123-4567",
  },
  {
    id: 8,
    imgSrc: "images/team_9.jpg",
    name: "Luisa Rodriguez",
    designation: "Music Teacher",
    slug: "luisa-rodriguez",
    about:
      "Music is a universal language that brings joy and harmony. Let's explore the magic of melodies and rhythms together.",
    phone: "+1 (901) 234-5678",
  },
  {
    id: 9,
    imgSrc: "images/team_10.jpg",
    name: "Emma Garcia",
    designation: "Physical Education Teacher",
    slug: "emma-garcia",
    about:
      "Physical fitness is essential for a healthy life. Let's stay active and have fun while developing strength and coordination.",
    phone: "+1 (012) 345-6789",
  },
  {
    id: 10,
    imgSrc: "images/team_11.jpg",
    name: "Sophie Anderson",
    designation: "History Teacher",
    slug: "sophie-anderson",
    about:
      "History is a fascinating journey through time. Join me in uncovering the stories and events that have shaped our world.",
    phone: "+1 (123) 456-7890",
  },
  {
    id: 11,
    imgSrc: "images/team_12.jpg",
    name: "Ella Turner",
    designation: "Language Teacher",
    slug: "ella-turner",
    about:
      "Language opens doors to new cultures and perspectives. Let's embark on a linguistic adventure to broaden our horizons.",
    phone: "+1 (234) 567-8901",
  },
  {
    id: 12,
    imgSrc: "images/team_13.jpg",
    name: "Ava Martinez",
    designation: "Gym Instructor",
    slug: "ava-martinez",
    about:
      "Fitness is not just a goal; it's a lifestyle. Together, we'll work towards achieving a healthy and active way of life.",
    phone: "+1 (345) 678-9012",
  },
  {
    id: 13,
    imgSrc: "images/team_14.jpg",
    name: "Alex Turner",
    designation: "IT Specialist",
    slug: "alex-turner",
    about:
      "In the digital age, technology is our ally. I'm here to ensure our school's tech infrastructure runs smoothly and securely.",
    phone: "+1 (456) 789-0123",
  },
];

const activitiesData = [
  {
    id: 0,
    color: "light_blue",
    iClassName: "fa fa-book",
    title: "Parenting Bill",
  },
  {
    id: 1,
    color: "green",
    iClassName: "fa fa-graduation-cap",
    title: "Engineering",
  },
  {
    id: 2,
    color: "orange",
    iClassName: "fa fa-university",
    title: "Sports Training",
  },
  {
    id: 3,
    color: "blue",
    iClassName: "fa fa-books-medical",
    title: "School Directly",
  },
  {
    id: 4,
    color: "green",
    iClassName: "fa fa-analytics",
    title: "Digital Marketing",
  },
];

export {
  eventData,
  faqData,
  workData,
  testimonialData,
  blogData,
  services,
  courseDataArray,
  teamData,
  activitiesData,
  allFaqData,
};
