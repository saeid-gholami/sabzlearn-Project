const coursesDatas = [
    {
        id: 1,
        img: 'images/threeJs.webp',
        title: 'آموزش انیمیشن سازی برای فرانت‌اند با GSAP و Three.js',
        subTitle: 'دوره Three.js سبزلرن به شما یاد می‌دهد چطور گرافیک‌های سه‌بعدی جذاب با استفاده از این ...',
        teacher: "سارینا شعبانی",
        score: 5,
        registers: 400,
        price: 10_000_000,
        category: 'فرانت اند'
    },
    {
        id: 2,
        img: 'images/Leaf.webp',
        title: 'نمایش نقشه‌های تعاملی با Leaflet.js',
        subTitle: 'دوره Leaflet.JS به شما یاد می‌دهد چگونه نقشه‌های تعاملی سبک و جذاب بسازید. این ...',
        teacher: "مهرشاد براتی",
        score: 5,
        registers: 230,
        price: 2_000_000,
        category: 'بک اند'
    },
    {
        id: 3,
        img: 'images/webpack.webp',
        title: 'آموزش جامع webpack',
        subTitle: 'فرقی نمی‌کند که شما یک برنامه نویس تازه کار و یا حرفه‌ای باشید؛ در هرصورت به وب‌پک نیاز ...',
        teacher: "آرمین هوشمند",
        score: 4.5,
        registers: 30,
        price: 400_000,
        category: 'امنیت'
    },
    {
        id: 4,
        img: 'images/js-lib.webp',
        title: 'توسعه کتابخانه با جاوااسکریپت',
        subTitle: 'توسعه کتابخانه، نمونه کاری قوی برای رزومه شما است و این دوره آموزشی یادگیری چنین ...',
        teacher: "مهرشاد براتی",
        score: 3,
        registers: 150,
        price: 4_000_000,
        category: 'فرانت اند'
    },
    {
        id: 5,
        img: 'images/webextn.webp',
        title: 'توسعه افزونه مرورگر با جاوااسکریپت',
        subTitle: 'ما در این دوره، توسعه افزونه های مرورگر رو با پیاده سازی پروژه های کاربردی با دانش فرانت ...',
        teacher: "مهرشاد براتی",
        score: 3.5,
        registers: 100,
        price: 0,
        category: 'بک اند'
    },
    {
        id: 6,
        img: 'images/Dashboard.webp',
        title: 'پیاده سازی داشبورد های حرفه ای با CSS و JS',
        subTitle: 'این دوره فرصتی فوق‌العاده برای ارتقاء مهارت‌های فرانت اند شماست. با یادگیری از ...',
        teacher: "مهرشاد براتی",
        score: 3,
        registers: 52,
        price: 0,
        category: 'امنیت'
    },
    {
        id: 7,
        img: 'images/ezgif.com-jpg-to-webp-converted-32-1-768x432.webp',
        title: 'مینی پروژه های تخصصی با Html، Css + دیزاین اختصاصی',
        subTitle: 'عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این ...',
        teacher: "حمیدرضا عبادی",
        score: 5,
        registers: 152,
        price: 3_000_000,
        category: 'فرانت اند'
    },
    {
        id: 8,
        img: 'images/tailwind.webp',
        title: 'آموزش جامع و پروژه محور Tailwind Css + دیزاین فروشگاه قهوه',
        subTitle: 'tailwind css یک فریمورک Utility First هست، این فریمورک متشکل از یکسری کلاس های ...',
        teacher: "حمیدرضا عبادی",
        score: 5,
        registers: 1910,
        price: 899_000,
        category: 'بک اند'
    },
    {
        id: 9,
        img: 'images/20reactlib.webp',
        title: 'آموزش ۲۰ کتابخانه کاربردی ReactJS برای بازارکار',
        subTitle: '‌کتابخانه‌ها باعث افزایش سرعت کدنویسی میشن. در حدی که تو بازار کار هم از کتابخانه ...',
        teacher: "محمد امین سعیدی راد",
        score: 5,
        registers: 1580,
        price: 570_000,
        category: 'امنیت'
    },
    {
        id: 10,
        img: 'images/redux.webp',
        title: 'آموزش تخصصی Redux مقدماتی تا پیشرفته',
        subTitle: 'ریداکس یه کتابخونه پراستفاده واسه مدیریت حالت های مختلف یه برنامه جاوا اسکریپتیه که ...',
        teacher: "محمد امین سعیدی راد",
        score: 5,
        registers: 1499,
        price: 1_400_000,
        category: 'فرانت اند'
    },
    {
        id: 11,
        img: 'images/nextjs.webp',
        title: 'آموزش Next.js بصورت پروژه محور',
        subTitle: 'نکست یه فریمورک مبتنی بر ری‌اکت هست که امروزه تو بازار کار یکی از مهم‌ترین تکنولوژی‌ها ...',
        teacher: "محمد امین سعیدی راد",
        score: 5,
        registers: 1742,
        price: 2_800_000,
        category: 'بک اند'
    },
    {
        id: 12,
        img: 'images/PAW.webp',
        title: 'آموزش PWA بصورت پروژه محور',
        subTitle: 'کلمه PWA مخفف Progressive Web App بوده و یه تکنولوژی تقریبا جدیده که میتونیم ...',
        teacher: "محمد امین سعیدی راد",
        score: 5,
        registers: 621,
        price: 1_710_000,
        category: 'امنیت'
    },
    {
        id: 13,
        img: 'images/websocket.jpg',
        title: 'آموزش پروژه محور WebSocket',
        subTitle: ' با Socket می‌تونی مثل تلگرام یا سایت های ارز دیجیتال یه ارتباط Realtime بسازی و بدون نیاز ...',
        teacher: "محمد امین سعیدی راد",
        score: 5,
        registers: 8111,
        price: 1_800_000,
        category: 'ارتقای مهارت'
    },
]

export default coursesDatas