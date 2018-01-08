{
	let banners=document.querySelector(".banner")
	let banner_imgs=document.querySelectorAll(".banner_img li")
	let pagings=document.querySelectorAll(".banner_pagination li")
	let n=0
	pagings.forEach(function(ele, index) {
		ele.onclick = function() {
			for(let i = 0; i < pagings.length; i++) {
				pagings[i].classList.remove("active");
				banner_imgs[i].classList.remove("active");
			}
			ele.classList.add("active");
			banner_imgs[index].classList.add("active");
			n = index;
		}
	})
	function banner(){
		n++
		banner_imgs.forEach(function(ele){
			if(n===banner_imgs.length){
				n=0
			}
			for(let i=0;i<banner_imgs.length;i++){
				banner_imgs[i].classList.remove("active")
				pagings[i].classList.remove("active")
			}
			banner_imgs[n].classList.add("active")
			pagings[n].classList.add("active")
		})
	}
	let st =setInterval(banner,3000)
	banners.onmouseover = function() {
		clearInterval(st)
	};
	banners.onmouseout = function() {
		st = setInterval(banner, 3000);
	}
}
{
	let js_a=document.querySelector(".zuoping_main li a")
	let hot_into=document.querySelector(".hot_into")
	js_a.onmousemove=function(e){
		let w = js_a.offsetWidth; 
		let h = js_a.offsetHeight; 
		let x = (e.clientX - js_a.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1); 
		let y = (e.clientY - js_a.offsetTop - (h / 2)) * (h > w ? (w / h) : 1); 
		var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
		console.log(direction)
	
//		if(direction===2){
//			hot_into.style.top="0%"
//		}
		switch(direction){
			case 0:
				js_a.onmousemove=function(){
					hot_into.style.top="0"
				}
		}
	}
}
