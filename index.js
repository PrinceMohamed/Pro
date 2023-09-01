let nav = document.querySelector(".navbar");
let navse = document.querySelector(".navse");
let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let text3 = document.querySelector(".text3");
let contain1 = document.querySelector(".contain1");
let count1 = document.querySelector(".count1");
let count2 = document.querySelector(".count2");
let count3 = document.querySelector(".count3");
let count4 = document.querySelector(".count4");
let conte3 = document.querySelector(".conte3");
let conte4 = document.querySelector(".conte4");
let coins = document.querySelector(".coins");
let p1 = document.querySelector(".p1");
let h_or = document.querySelector(".h-ora");
let im1 = document.querySelector(".im1");
window.addEventListener("scroll" , function(){
    if (window.scrollY > 200){
        nav.classList.remove("bg-body-tertiary");
        nav.classList.add("bg-warning");
        navse.classList.remove("btn-outline-success")
        navse.classList.add("btn-outline-light")
        contain1.style.transition="1s"
        contain1.style.transform="translate(0,0px)"
    }else {
        nav.classList.add("bg-body-tertiary");
        nav.classList.remove("bg-warning");
        navse.classList.add("btn-outline-success")
        navse.classList.remove("btn-outline-light")
    }
}
)
// ###############################
let index1 = 1
let content1="Hello , Sir"
function write1(){
    text1.textContent = content1.slice(0,index1)
    index1++
}
setInterval(function(){
    write1()
} ,100)
text1.style.fontWeight ="bold"
// ###############################
let index2 = 1
let content2="Welcome to our website! We are excited to help you plan your next flight. We believe that travel is a wonderful experience, and we want to make it an unforgettable one for you."
function write2(){
    text2.textContent = content2.slice(0,index2)
    index2++
}
setInterval(function(){
    write2()
} ,70)
text2.style.fontWeight ="300"
// ################################
let index3 = 1
let content3="Start your journey with us today, and make it an experience you will never forget."
function write3(){
    text3.textContent = content3.slice(0,index3)
    index3++
}
setInterval(function(){
    write3()
} ,70)
text3.style.fontWeight ="300"
text3.style.width ="70%"
// ################################
// window.addEventListener("scroll" , function(){
// if(window.scrollY > 300){

// }
// })
// ##############################
let isConditionMet = false; 

window.addEventListener("scroll", function() {
    if (window.scrollY > 500 && !isConditionMet) {
        isConditionMet = true;

        c1 = 1;
        count1.innerHTML = `${c1}K`;
        function c1f() {
            if (parseInt(count1.innerHTML) < 300) {
                count1.innerHTML = `${c1++}K`;
            } else {
                clearInterval(setint1);
            }
        }
        let setint1 = setInterval(function() {
            c1f();
        }, 30);

        // ##############################
        c2 = 1;
        count2.innerHTML = c2;
        function c2f() {
            if (parseInt(count2.innerHTML) < 50) {
                count2.innerHTML = `${c2++} K`;
            } else {
                clearInterval(setint2);
            }
        }
        let setint2 = setInterval(function() {
            c2f();
        }, 80);

        // ##############################
        c3 = 1;
        count3.innerHTML = c3;
        function c3f() {
            if (parseInt(count3.innerHTML) < 400) {
                count3.innerHTML = `${c3++} K`;
            } else {
                clearInterval(setint3);
            }
        }
        let setint3 = setInterval(function() {
            c3f();
        }, 20);

        // ##############################
        c4 = 1;
        count4.innerHTML = c4;
        function c4f() {
            if (parseInt(count4.innerHTML) < 200) {
                count4.innerHTML = c4++;
            } else {
                clearInterval(setint4);
            }
        }
        let setint4 = setInterval(function() {
            c4f();
        }, 50);
    }
});
window.addEventListener("scroll", function(){
    if(window.scrollY > 700){
        conte3.style.transition = "1s";
        conte3.style.transform = ("translate(0,0)");
    }
})
window.addEventListener("scroll", function(){
    if(window.scrollY > 1800){
        coins.style.width = "90%";
        coins.style.transition = "1s";
    }
})
let h11 = document.createElement("h1");
h11.classList.add("text-center");
h11.classList.add("mt-5");
h11.style.fontSize="32px";
h11.innerHTML ="Travel for your business";
conte4.appendChild(h11);
p1.parentNode.insertBefore(h11, p1);
p1.style.width ="70%"
// ###############################
let divs = document.querySelector(".fakra div");
let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");
let div4 = document.querySelector(".div4");
let div5 = document.querySelector(".div5");
div1.style.background = "#000";
div1.addEventListener("click", function(){
    div1.style.background = "#000";
    div2.style.background = "#fff";
    div3.style.background = "#fff";
    div4.style.background = "#fff";
    div5.style.background = "#fff";
    h11.innerHTML="Travel for your business";
    p1.innerHTML="according to their personal needs and preferences. We provide reservation services and logistical arrangements, including hotel reservations, airline tickets and domestic transportation, to ensure a comfortable and integrated travel experience for customers.Our company relies on modern and advanced technology to facilitate the planning and reservation process, providing our customers with ease and flexibility in choosing and organizing their trips. We also provide ongoing customer support, ensuring accurate and detailed information on destinations, activities and services available";
    im1.src="../image/Un draw/undraw_businessman_9hq8.png";
});
div2.addEventListener("click", function(){
    div1.style.background = "#fff";
    div2.style.background = "#000";
    div3.style.background = "#fff";
    div4.style.background = "#fff";
    div5.style.background = "#fff";
    h11.innerHTML = "Travel to immigrate";
    p1.innerHTML="We provide a wide range of destinations and various tourist offers. We cater to clients' needs through customized tour packages and reliable logistic arrangements. We ensure a comfortable and easy customer experience through reservation services and logistics arrangements. We care about the customer experience from start to finish, and provide continuous support and follow-up to ensure their satisfaction. We use technology to facilitate the planning and booking process, and strive to provide a unique and distinctive experience for our customers.";
    im1.src="../image/Un draw/undraw_Chilling_re_4iq9.png";
});
div3.addEventListener("click", function(){
    div1.style.background = "#fff";
    div2.style.background = "#fff";
    div3.style.background = "#000";
    div4.style.background = "#fff";
    div5.style.background = "#fff";
    h11.innerHTML="Travel for vacation";
    p1.innerHTML="We advance your application and approach the impossible about countries and destinations that offer excellent immigration opportunities you wish. We work with immigration experts and attorneys-at-laws to provide clients with the necessary information about immigration-related visas. We help clients prepare the documents required for them, make travel and accommodation arrangements, and provide language and cultural support in the target location. We are trying to pursue smooth immigration and a successful pioneering life, so that we can build a new country in a clear live broadcast.";
    im1.src="../image/Un draw/undraw_Relaxation_re_ohkx.png";
});

div4.addEventListener("click", function(){
    div1.style.background = "#fff";
    div2.style.background = "#fff";
    div3.style.background = "#fff";
    div4.style.background = "#000";
    div5.style.background = "#fff";
    h11.innerHTML="Travel abroad to find work";
    p1.innerHTML="We take care of meeting the basic needs related to the search for work abroad, as we provide appropriate services to achieve this goal. We provide you with general guidance about the best medical destinations that offer excellent job opportunities in their professional fields. We provide comprehensive information about the labor market in optional destinations, including available opportunities, visa requirements, and residency. We help clients prepare the necessary documents, travel and accommodation prescriptions, which makes us move to a new country.";
    im1.src="../image/Un draw/undraw_Speech_to_text_re_8mtf.png";
});

div5.addEventListener("click", function(){
    div1.style.background = "#fff";
    div2.style.background = "#fff";
    div3.style.background = "#fff";
    div4.style.background = "#fff";
    div5.style.background = "#000";
    h11.innerHTML="Travel to study";
    p1.innerHTML="Our services include comprehensive travel and accommodation arrangements for students, including flight bookings, accommodation in suitable accommodation and local transportation. We work closely with prestigious educational institutions and international universities to provide programs of study tailored to the needs of students.We guarantee an ideal study experience for our clients, as we care about providing a stimulating learning environment and excellent educational resources. We offer comprehensive support to students throughout their studies, including academic, social and language support."
    im1.src="../image/Un draw/undraw_writer_q06d.png";
})
let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let c3 = document.querySelector(".c3");
let c4 = document.querySelector(".c4");
let csc = false;
window.addEventListener("scroll", function(){
    if (window.scrollY > 1000 && !csc) {
        csc = true;
        c1.style.transform = "translate(0px)";
        c2.style.transform = "translate(0px)";
    }
})