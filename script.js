// fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
// .then(res=>res.json())
// .then(data=>console.log(data))

const discussSession=async(categoryName,)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`)
    const data=await res.json();
    
    const forum=data.posts;
//    console.log(forum);
    display(forum,)
};


const display=(posts)=>{
    posts.forEach((post)=>{
    const kidsCard=document.getElementById('kids-card')
    // console.log(kidsCard);
    const newKidsCard=document.createElement('div');
    newKidsCard.innerHTML=`
<section class="lg:flex justify-between  items-center m-4">
  <div>
            <img src="${post.image}" alt="" srcset="">
  </div>
  <div>
       <div class="items-center">
          <div class="flex "> 
             <h5 class="mx-5"># ${post.category}</h5>
             <h5>author: ${post.author.name}</h5>
          </div>
          <div>
              <h3 id="post-title">${post.title}</h3>
              <p>${post.description}</p>
           </div>
       </div>
    
           <hr >
    <div class="flex justify-between">
       <div class=" flex justify-around ">
           <div class= "flex justify-between items-center">
               <img src="images/Group 13.png" alt="" srcset="">
               <p>${post.comment_count }</p>
            </div>
            <div id="capture-view"  class= "flex justify-between   items-center">
               <img id="icon-image" src="images/Group 16.png" alt="" srcset="">
               <p>${post. view_count}</p>
            </div>
            <div  class= "flex justify-between items-center">
               <img src="images/Group 18.png" alt="" srcset="">
               <p>${post. posted_time}</p>
            </div>
        </div>
        <div>
            <button  onclick="messageButton()" ><img src="images/Group 40106.png" alt="" srcset=""> </button>
        </div>
    </div>
  </div>
</section>
`;
    kidsCard.appendChild(newKidsCard) ;
// -----------------------------------------------

// -------------------------------------
   });
    
}

const searchButton=()=>{
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    // console.log(searchText);
    discussSession(searchText)

}

discussSession();

//------------------ latest post -----------------------
const latestPost=async()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const posts= await res.json()
    // console.log(posts);
    displayPost(posts);
};
const displayPost=(posts)=>{
//    console.log(posts)
const updatePost=document.getElementById('latest-post');

posts.forEach(post=>{
    // console.log(post)
    
    // console.log(updatePost);
    const postCard=document.createElement('div');
     postCard.innerHTML=`<div class="m-4">
     <img src="${post.cover_image}" alt="" srcset="">
     <div class="flex">
     <img src="images/Frame (1).png" alt="" srcset="">
     <p>${post.author.posted_date}</p>
     </div>
     <h4>${post.title}</h4>
     <p>${post.description}</p>
     <div class="flex justify-between items-center ">
     <div>
     <img src="${post.profile_image}" alt="" srcset="">
     </div>
     <div>
     <h4>${post.author.name}</h4>
     <p>${post.author.designation}</p>
     </div>
     </div>
     </div>`
     updatePost.appendChild(postCard);

    //  const newMessage=document.getElementById('message-button');
    //  console.log("newMessage");
})
}

latestPost();

const messageButton=()=>{

// -----------------------------------
    const newMessage=document.getElementById('count-number');
         newMessageCount=parseInt(newMessage.innerText)+1;
         newMessage.innerText=newMessageCount;
// --------------------------------------
         const messageDetails=document.getElementById('message-details');
         const postTitle=document.getElementById('post-title')
         const newMessageTitle=document.createElement('div');
         newMessageTitle.innerHTML=postTitle.innerText;
         messageDetails.appendChild(newMessageTitle);


          const countDetails=document.getElementById('count-details');
         const captureView=document.getElementById('capture-view');
         newMessageDetails=document.createElement('div');
         newMessageDetails.innerHTML=captureView.innerText;
         countDetails.appendChild(newMessageDetails);

         const iconShow=document.getElementById('icon-show');
         const iconImage=document.getElementById('icon-image');
         iconShow.appendChild(iconImage);

    }








