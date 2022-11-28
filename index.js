import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import { tweets  } from "./data.js"

document.addEventListener("click", function(e){
    if(e.target.dataset.like){
        handleLikes(e.target.dataset.like)
    }else if(e.target.dataset.retweet){
        handleRetweets(e.target.dataset.retweet)
    }else if(e.target.dataset.comment){
        handleComments(`replies-${e.target.dataset.comment}`)
    }else if(e.target.id === "tweet-btn"){
        handleUTweets()
    }
})


function renderTwimba(){

    let beforeRender = "";

tweets.forEach(function(tweet){
    let colorGreen =""
    let colorRed =""
    if(tweet.isLiked){
        colorRed = "liked"
        
    }
    if(tweet.isRetweeted){
        colorGreen = "retweeted"
    }
    
    let replyText =""
    if(tweet.comment.length >0){
        
        tweet.comment.forEach(function(comment){
           replyText += `
            <div class="reply" id="replies">
                <img class="logo" src="${comment.avatar}" alt="">
                <div class="real-world-replys">
                    <h3>${comment.userName}</h3>
                    <p>${comment.Post}
                    </p>
            
                 </div>
            
            </div>
            `
        })
    
       
        
    }

    
beforeRender += `
<section class="container border-bottom">
<div class="real-world-tweets">
    <img class ="logo"src="${tweet.avatar}" alt="">
    <div class="real-world-tweets-one">
     <h3>${tweet.userName} </h3>
     <p>${tweet.Post}
     </p>
    <div class="conditions">
        <div class="icons" >
            <i class="fa-solid fa-heart ${colorRed}" data-like="${tweet.uuid}"> </i><span class="cond-span"> ${tweet.likes} </span>
        </div>
        <div class="icons">
            <i class="fa-solid fa-retweet ${colorGreen}" data-retweet="${tweet.uuid}"></i><span class="cond-span" > ${tweet.retweets} </span>
        </div>
        <div class="icons">
            <i class="fa-solid fa-comment-dots" data-comment="${tweet.uuid}"></i><span class="cond-span" > ${tweet.comments} </span>
        </div>
     
    </div>
    <div class="replys hidden" id = "replies-${tweet.uuid}"> 
    ${replyText}
    <div>
</div> 
</div> 


</section>
`


})

document.getElementById("inside").innerHTML = beforeRender
}
renderTwimba()

function handleLikes(tweetId){
const returnedVal = tweets.filter(function(tweet){
    return tweet.uuid === tweetId;
})[0]
if(!returnedVal.isLiked){
    returnedVal.likes ++
    
} else{
    returnedVal.likes --
}
returnedVal.isLiked = !returnedVal.isLiked
renderTwimba()
}
function handleRetweets(tweetId){
    const returnedVal = tweets.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    
    if(!returnedVal.isRetweeted){
        returnedVal.retweets ++
    } else{
        returnedVal.retweets --
    }
    returnedVal.isRetweeted = !returnedVal.isRetweeted
    renderTwimba()
}

function handleComments(tweetId){
    document.getElementById(tweetId).classList.toggle("hidden")

    
}
function handleUTweets(){
const tweet = document.getElementById("user-tweet")
let firstUser =     {
    userName: "@Ömer Faruk GÜRBÜZ✅",
    avatar: "/TwimbaExercise/images/Ben.jpg",
    Post: tweet.value,
    likes: 248121,
    retweets: 34684,
    comments: 84321,
    isLiked: false,
    isRetweeted: false,
    uuid: uuidv4(),
    comment: [
        {
            avatar: "/TwimbaExercise/images/İskenderBüyük.jpg",
            userName: "@İskender Büyük✅",
            Post: "Saygıdeğer abim özür dilerim ben ve arkadaşlar adına...",
            
        },
        {
            avatar: "/TwimbaExercise/images/MematiBaş.jpg",
            userName: "@Memati Baş✅",
            Post: "Abim kusura bakma, Hata yaptıysak affola...",
            
        },
        {
            avatar: "/TwimbaExercise/images/Polat Alemdar.webp",
            userName: "@Polat Alemdar✅",
            Post: "Ömer Abim cansın, bizim eşşekliğimiz özür dileriz.",
            
        },
        {
            avatar: "/TwimbaExercise/images/Ersoy Ulubey.jpg",
            userName: "@Ersoy Ulubey✅",
            Post: "Senin gibisi daha gelmedi abi, zor da bulunur... Affet bizi",
            
        }

    ]

}
tweets.unshift(firstUser)
tweet.value=""
renderTwimba()

}