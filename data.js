import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
export const tweets = [
    {
        userName: "@Polat Alemdar✅",
        avatar: "/TwimbaExercise/images/Polat Alemdar.webp",
        Post: "Yaşamak... Gerçekten büyük bir lütuf değil mi sizce de? İnsan gerçekten üzerine düşmeli bu hediyenin...",
        likes: 45212,
        retweets: 1246,
        comments: 3452,
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4(),
        comment: [
            {
                avatar: "/TwimbaExercise/images/İskenderBüyük.jpg",
                userName: "@İskender Büyük✅",
                Post: "Anca edebiyat yap başka işin yok...",
                
            },
            {
                avatar: "/TwimbaExercise/images/MematiBaş.jpg",
                userName: "@Memati Baş✅",
                Post: "İskender seni yakalamiyim oğlum. Mevzum var senle bak.",
                
            }
        ]

    },
    
    {
        userName: "@İskender Büyük✅",
        avatar: "/TwimbaExercise/images/İskenderBüyük.jpg",
        Post: "Atatürk'ün Askerleriyiz!",
        likes: 23451,
        retweets: 946,
        comments: 2481,
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4(),
        comment: []

    },
    {
    userName: "@Abdülhey Çoban✅",
    avatar: "/TwimbaExercise/images/Abdülhey.jpg",
    Post: "Aşiretten kaçan türkücü olur... Ama gene de İskenderden adam olmaz...",
    likes: 11212,
    retweets: 376,
    comments: 1258,
    isLiked: false,
    isRetweeted: false,
    uuid: uuidv4(),
    comment: [
        {
            avatar: "/TwimbaExercise/images/İskenderBüyük.jpg",
            userName: "@İskender Büyük✅",
            Post: "Ekipçe bana havlıyorsunuz bakıyorum da...",
            
        },
        {
            avatar: "/TwimbaExercise/images/Ersoy Ulubey.jpg",
            userName: "@Ersoy Ulubey✅",
            Post: "Memati'ciğime söyle de, Mamoşu öpsün benim için Zülfü'cüğüm...",
            
        }
    ]

},
]