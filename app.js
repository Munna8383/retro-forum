const latestContainer = document.getElementById("latest-container")



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