const movies = document.querySelectorAll(".image");
let L = movies.length;
var image_variable = 1;
movies.forEach((b) => {
    if (image_variable == 6) {
        image_variable = 1;
    }

    b.style.backgroundImage = `url("assets/images/${image_variable}.png")`;
    image_variable++;
});

var btn = document.querySelectorAll("#btn");
var left = 500;


btn[0].onclick = () => {
    left += 500;
    if (left > 1500) {
        left = 1500;
    }
    document.querySelector(".movies").scrollTo({
        left: left,
        behavior: 'smooth',
    });
};
btn[1].onclick = () => {
    left -= 500;
    if (Math.sign(left) == -1) {
        left = 0;
    }
    document.querySelector(".movies").scrollTo({
        left: left,
        behavior: 'smooth',
    });
};



const list = document.querySelectorAll(".h3-div");
let flag = 1;
var count=0;
list.forEach((l)=>{
    l.onclick=()=>{
        if(flag==0){
            flag=1;
        l.childNodes[3].style.display='none';
    }
    else{
        flag=0;
        list.forEach((li)=>{
            li.childNodes[3].style.display='none';
        });
        
        l.childNodes[3].style.display='block';
    }

    }

});
