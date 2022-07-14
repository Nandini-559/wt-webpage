var filter=document.getElementById("filter");
filter.addEventListener('keyup',searchItem,false);
function searchItem(e)
{
	var text=e.target.value.toLowerCase();
	var items=document.getElementsByClassName("nameslist");
	Array.from(items).forEach((item)=>{
		itemValue=item.firstChild.textContent;
		if(itemValue.toLowerCase().indexOf(text)!=-1)
		{
			item.style.display="block";
		}
		else
		{
			item.style.display="none";
		}
	});
}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
var slideindex= 0;
showSSlides();
function showSSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideindex++;
  if (slideindex > slides.length) {slideindex = 1}
  slides[slideindex-1].style.display = "block";
  setTimeout(showSSlides, 2000); // Change image every 2 seconds
}
var branch=document.getElementById('branch1');
branch.addEventListener('onmouseover',branches,false);
function branches()
{
	let ourbranches=document.getElementsByClassName("ourbranches");
	ourbranches.style.display = "block";
}



 /*Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}