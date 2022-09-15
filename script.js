const foodish_btn=document.getElementById("foodish_btn");
const foodish_result=document.getElementById("foodish_result");
//creat and eventlistness when user click on button

foodish_btn.addEventListener("click",()=>{
    fetch("https://foodish-api.herokuapp.com/api/")
    .then((res)=>res.json())
    .then((data)=>{
        //console.log(data);
        // data to UI
        foodish_result.innerHTML=`<img src="${data.image}" alt="foodish" width=1920 height=850/>
        `
    }).catch((err)=>{
        cat_result.innerHTML="Data not found"
    })
})

