const latestContainer = document.getElementById("latest-container");
const postList = document.getElementById("post-list");
const postCount = document.getElementById("post-count")
const countIncrease = document.getElementById("countIncrease")
let count = 0
const searchInput = document.getElementById("search-input");




const allPost = async()=>{

  let indicate = null;

  const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts")

  const data = await res.json();

  AllData = data.posts


  AllData.forEach(data=>{

    if(data.isActive){
      indicate = '<span id="indicate" class="indicator-item indicator-start badge badge-success"></span>'
    }
    else
    {
      indicate ='<span id="indicate" class="indicator-item indicator-start badge badge-error"></span>'
    }


     const div = document.createElement("div");


     div.innerHTML=`

     <div  class="flex space-x-5 bg-slate-100 py-5 px-7 rounded-xl">

                    <div>

                         <div class="indicator">

                         ${indicate}
                        
                        <div class="grid w-32 h-32 bg-base-300 place-items-center"><img class="rounded-lg" src="${data.image}" alt=""></div>
                         </div>

                    </div>

                    <div class="space-y-4 ">

                        <div class="flex gap-10">
                            <h1># <span>${data.category} </span></h1>
                            <h1>Author: <span>${data.author.name}</span></h1>
                        </div>

                        <div>
                            <h1 class="text-xl font-extrabold">${data.title}</h1>
                        </div>

                        <div>
                            <p class="w-3/4">${data.description}</p>
                        </div>

                        <div class="divider"></div>

                        <div class="flex justify-between">
                            <div class="flex space-x-6">

                                <div class="space-x-2">
                                    <i class="fa-solid fa-envelope-open-text"></i><span>${data.comment_count}</span>
                                </div>

                                <div class="space-x-2">
                                    <i class="fa-regular fa-eye"></i> <span>${data.view_count}</span>
                                </div>

                                <div class="space-x-2">
                                    <i class="fa-regular fa-clock"></i> <span>${data.posted_time} min</span>
                                </div>



                            </div>

                            <div>
                                <button onclick="addPost('${data.title}','${data.view_count}')"><i class="fa-solid fa-envelope text-2xl text-teal-600"></i></button>
                            </div>
                        </div>

                    </div>

                </div>
     
     
     `

     postList.appendChild(div)

  })

}
allPost()


const addPost = (data1,data2)=>{




  const div = document.createElement("div");
  div.innerHTML =`
  <div class="flex justify-between bg-teal-50 rounded-xl px-5 py-3">
  <div>

      <h1>${data1}</h1>

  </div>

  <div>

      <i class="fa-regular fa-eye"></i> <span>${data2}</span>

  </div>
</div>
  `

  postCount.appendChild(div)

  countIncrease.innerText = count + 1;

  count++




}




const handleSearch =()=>{



  const searchInputData = searchInput.value;

  searchPost(searchInputData)




  


}


const searchPost = async(element)=>{

  let indicate = null;

  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${element}`)

  const data = await res.json();

  AllData = data.posts

  postList.textContent =" "


  AllData.forEach(data=>{

    if(data.isActive){
      indicate = '<span id="indicate" class="indicator-item indicator-start badge badge-success"></span>'
    }
    else
    {
      indicate ='<span id="indicate" class="indicator-item indicator-start badge badge-error"></span>'
    }


     const div = document.createElement("div");


     div.innerHTML=`

     <div  class="flex space-x-5 bg-slate-100 py-5 px-7 rounded-xl">

                    <div>

                         <div class="indicator">

                         ${indicate}
                        
                        <div class="grid w-32 h-32 bg-base-300 place-items-center"><img class="rounded-lg" src="${data.image}" alt=""></div>
                         </div>

                    </div>

                    <div class="space-y-4 ">

                        <div class="flex gap-10">
                            <h1># <span>${data.category} </span></h1>
                            <h1>Author: <span>${data.author.name}</span></h1>
                        </div>

                        <div>
                            <h1 class="text-xl font-extrabold">${data.title}</h1>
                        </div>

                        <div>
                            <p class="w-3/4">${data.description}</p>
                        </div>

                        <div class="divider"></div>

                        <div class="flex justify-between">
                            <div class="flex space-x-6">

                                <div class="space-x-2">
                                    <i class="fa-solid fa-envelope-open-text"></i><span>${data.comment_count}</span>
                                </div>

                                <div class="space-x-2">
                                    <i class="fa-regular fa-eye"></i> <span>${data.view_count}</span>
                                </div>

                                <div class="space-x-2">
                                    <i class="fa-regular fa-clock"></i> <span>${data.posted_time} min</span>
                                </div>



                            </div>

                            <div>
                                <button onclick="addPost('${data.title}','${data.view_count}')"><i class="fa-solid fa-envelope text-2xl text-teal-600"></i></button>
                            </div>
                        </div>

                    </div>

                </div>
     
     
     `

     postList.appendChild(div)

  })

}








const latestPostLoad = async()=>{

    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
    const data = await res.json();
    
    data.forEach(element => {

     const div = document.createElement("div");
     div.innerHTML= `
     <div class="card bg-base-100 shadow-xl">
     <figure class="px-10 pt-10">
       <img src="${element.cover_image}" alt="Shoes" class="rounded-xl" />
     </figure>
     <div class="card-body">
       <div class="flex gap-5 items-center">
         <i class="fa-solid fa-calendar-days"></i>
         <p class="font-extrabold"> ${element.author.posted_date || "No Publish Date"}</p>
       </div>
       <p class="font-extrabold"> ${element.title}</p>
       <p>${element.description}</p>
       <div class="flex gap-5">
         <div>
             <img class="w-12 rounded" src="${element.profile_image}" alt="">
         </div>
         <div>
         <p class="font-extrabold"> ${element.author.name}</p>
         <p class="font-extrabold"> ${element.author.designation || "Unknown"}</p>
         </div>
       </div>
     </div>
   </div>
     `
     latestContainer.appendChild(div)
        
    });


}
latestPostLoad()