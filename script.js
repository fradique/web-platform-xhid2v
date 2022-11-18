const elem=document.getElementById("test1");
let a="";
for (let i=0;i<5;i++)
{
  a+=`${i}+`;
}

elem.innerHTML=a;
