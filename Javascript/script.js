const display = document.getElementById('display');
const x = document.getElementById('x');
display.addEventListener('click', ()=>{
    display.style.display='none';
    x.style.display='block';
});
x.addEventListener('click',()=>{
    display.style.display='block';
   x.style.display='none';
})
 const navmoblie = document.getElementById('navmobile');
 navmoblie.style.top='-70%';
const mobilenav = ()=>{
   if(navmoblie.style.top=='-70%'){
      navmoblie.style.top='11%';
   }else{
      navmoblie.style.top='-70%';
   }
}
const button1 = document.getElementById('button1');
  button1.addEventListener('click',()=>{
      document.getElementById('secinit').style.display='flex';
      document.getElementById('secinit2').style.display='none';
      document.getElementById('secinit3').style.display='none';
  });
  const button2 = document.getElementById('button2');
  button2.addEventListener('click',()=>{
   document.getElementById('secinit2').style.display='flex'
   document.getElementById('secinit').style.display='none';
   document.getElementById('secinit3').style.display='none';
  });
  const button3 = document.getElementById('button3');
  button3.addEventListener('click',()=>{
     document.getElementById('secinit3').style.display='flex';
     document.getElementById('secinit').style.display='none';
     document.getElementById('secinit2').style.display='none'
  });
 
  const totop = document.querySelector('.to-top');
  window.addEventListener('scroll',()=>{
   if(window.scrollY > 100){
      totop.classList.add("active");
   }else{
      totop.classList.remove("active");
   }
  });
  const buttonevent = document.getElementById('buttonevent');
  buttonevent.addEventListener('mouseenter', ()=>{
   document.getElementById('customer').style.color='white';
  });
  buttonevent.addEventListener('mouseleave', ()=>{
   document.getElementById('customer').style.color='#000';
  });
    
  const buttonevent2 = document.getElementById('buttonevent2');
    buttonevent2.addEventListener('mouseenter', ()=>{
      document.getElementById('customer2').style.color='white';
    });
    buttonevent2.addEventListener('mouseleave' , ()=>{
      document.getElementById('customer2').style.color='#000';
    });
   const buttonevent3 = document.getElementById('buttonevent3');
     buttonevent3.addEventListener('mouseenter',()=>{
      document.getElementById('customer3').style.color='white';
     });
     buttonevent3.addEventListener('mouseleave',()=>{
      document.getElementById('customer3').style.color='#000';
     });
     const buttonevent4 = document.getElementById('buttonevent4');
     buttonevent4.addEventListener('mouseenter',()=>{
      document.getElementById('customer4').style.color='white';
     });
     buttonevent4.addEventListener('mouseleave',()=>{
      document.getElementById('customer4').style.color='#000';
     });
     const buttonevent5 = document.getElementById('buttonevent5');
     buttonevent5.addEventListener('mouseenter',()=>{
      document.getElementById('customer5').style.color='white';
     });
     buttonevent5.addEventListener('mouseleave',()=>{
      document.getElementById('customer5').style.color='#000';
     });
  function validation (){
      const firstname = document.getElementById('name').value;
      const namecheck = /^[a-zA-z]*$/;
      const email = document.getElementById('email').value;
       const emailcheck = /^[^]+@[^]+\.[a-z]{2,3}$/;
       const phone = document.getElementById('phone').value;
        const phonecheck = /^\d{10}$/;
        const subject = document.getElementById('subject').value;
       const  message = document.getElementById('Message').value;

      if(firstname.trim() == "") {
         alert('Type your name');
         return false;
      }else if(!firstname.match(namecheck)){
         alert('put in a valid name');
         return false;
      }else if(subject == ""){
         alert('fill in your subject ');
         return false
      }
      else if(email.trim()==""){
         alert ('fill in your email address');
         return false;
      }else if(!email.match(emailcheck)){
         alert('input a valid email address');
         return false;
      }else if (phone.trim() == ""){
         alert('fill in your phone number ')
         return false
         
      }else if(!phone.match(phonecheck)){
         alert ('fill in a valid phone number')
         return false
      }else if (message.trim() == ''){
         alert('write your message');
         return false;
      }else{
         alert('happy ending');
         return true;
      }





  }