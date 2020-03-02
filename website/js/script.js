
// sticky header
const header = document.querySelector('header');

	document.addEventListener("scroll", function() {
		if(window.scrollY > 0) {
			header.classList.add('fixed');
		} else {
			header.classList.remove('fixed');
		}
	});

	// show login form

const signin_btn = document.querySelector('.sign-in');
const login_form = document.querySelector('.sign-in-form');
signin_btn.addEventListener("click", function(){
	login_form.classList.toggle('show_login');
});
	
	// animate about section
	window.addEventListener('scroll', scrollAppear);

	function scrollAppear() {
		var about_content = document.querySelector('.about-content');
		var about_position = about_content.getBoundingClientRect().top;
		var screenPosition = window.innerHeight/2;
		console.log(about_position);
		if (about_position > screenPosition) {
			about_content.classList.add('appear');
		}
	}

