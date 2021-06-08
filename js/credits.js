const divs = document.querySelectorAll('.person') ; 
divs.forEach((name , index) => {
    name.addEventListener('mouseenter' , () => {
        // y u guys not responding????
        // 😠
        name.style.height  = "83vh" ;
        document.querySelectorAll('.img')[index].style.flex = "3.5" ; 
        document.querySelectorAll('.info')[index].style.flex = "3.5" ; 
        document.querySelectorAll('.info')[index].style.justifyContent = "flex-start" ; 
        document.querySelectorAll('.info')[index].innerHTML = `
        <h3>Name:-${data[index].name}</h3>
        <h3>Role:- ${data[index].Role}</h3>
        <h3>Birthday:- ${data[index].Birthday}</h3>
        <h3>Hobbies:- ${data[index].hobbies}</h3>
        <h3>Tagline:- <i> ${data[index].Tagline}</i></h3>
        `; 
        if(index === 3 || index === 2){
            setTimeout(() => {
                document.body.scrollTop = 1000 ; 
            } , 800)
        }
        

        // Name:
// Role:
// Hobby:
// Birthday:
// Tagline:
// 	justify-content: center;
	// align-items: center;


    })
})
divs.forEach((name , index) => {
    name.addEventListener('mouseleave' , () => {
        name.style.height  = "40vh" ; 
        document.querySelectorAll('.img')[index].style.flex = "3" ; 
        document.querySelectorAll('.info')[index].style.flex = "0.5" ; 
        document.querySelectorAll('.info')[index].innerHTML = `<h2>${data[index].name}</h2>`
        // document.querySelectorAll('.img')[index].style.height = "70%" ;  
        
    }) ; 
})
// 	height:40vh ; 
	// width:22vw; 



//height:29% ; 
// height:70% ; 

const data = [
    {
        name:"Abhinav Sardar" , 
        hobbies:"Guitar , Coding , Coding and alot of Coding" , 
        Birthday:"19th March" , 
        Tagline:"Success is about winning the war , not every battle." , 
        Role:"Main Coder"
    } , 
    {
        name:"Shashank Chandak" , 
        hobbies:"Guitar , Coding , a LOT of coding!" , 
        Birthday:"21st August" , 
        Tagline:"Where there is a will, there is a way!" , 
        Role:"Coder"
    } , 
    {
        name:"Anirudha" , 
        hobbies:"Art, Coding, and mainly TP :P" , 
        Birthday:"3rd October" , 
        Tagline:"You may have won the day, but the year is mine :D" , 
        Role: "Main idea",
    } , 
    {
        name:"Abhiroop Sarkar" , 
        hobbies:"Guitar, Sketching & Gaming!!!!" , 
        Birthday:"11th March" , 
        Tagline:"Bwahahahaaaa 8D",
        Role: "Designer, Coder"
        
    } , 



]