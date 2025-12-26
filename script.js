// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click",e=>{
    e.preventDefault();
    const target=document.querySelector(anchor.getAttribute("href"));
    if(!target)return;
    const offset=90;
    const top=target.getBoundingClientRect().top+window.pageYOffset-offset;
    window.scrollTo({top,behavior:"smooth"});
  });
});

// Reveal animation
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.15});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
