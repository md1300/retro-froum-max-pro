// fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
// .then(res=>res.json())
// .then(data=>console.log(data))

const discussSession=async()=>{
    const res=await fetch(' https://openapi.programming-hero.com/api/retro-forum/posts?category=coding')
    const data=await res.json();
    
    const forum=data.posts[0];
    console.log(forum);
    display(forum)
};

discussSession();
const display=(forums)=>{
    console.log('what are you waiting for',forums);
    const kidsCard=document.getElementById('kids-card')
    console.log(kidsCard);
    const newKidsCard=document.createElement('div');
    newKidsCard.innerHTML=`
    <section class="flex justify-between justify-items-center items-center">
    <div>
    <img src="${forums.image}" alt="" srcset="">
    </div>
    <div>
    <div class="items-center">
    <div class="flex "> 
    <h5 class="mx-5"># ${forums.category}</h5>
    <h5>author: ${forums.author.name}</h5>
    </div>
    <div>
    <h3>${forums.title}</h3>
    <p>${forums.description}</p>
    </div>
    </div>
    
    <hr >
    <div class="flex justify-between">
    <div class=" flex justify-around ">
    <div class= "flex justify-between items-center">
    <img src="images/Group 13.png" alt="" srcset="">
    <p>${forums.comment_count }</p>
    </div>
    <div  class= "flex justify-between items-center">
     <img src="images/Group 16.png" alt="" srcset="">
    <p>${forums. view_count}</p>
    </div>
    <div  class= "flex justify-between items-center">
    <img src="images/Group 18.png" alt="" srcset="">
    <p>${forums. posted_time}</p>
    </div>
    </div>
    <div>
    <img src="images/Group 40106.png" alt="" srcset="">
    </div>
    </div>
    </div>
    </section>

    <h3>${forums.isActive}</h3>
    `;
    kidsCard.appendChild(newKidsCard) ;
};