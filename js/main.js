const $likeBtn = document.querySelector('.icon-heart');

$likeBtn.addEventListener('click', (e) => {
	const isLiked = e.target.parentElement.classList.toggle('is-liked');

	const counter = e.target.nextElementSibling;

	counter.textContent = isLiked
		? parseInt(counter.textContent) + 1
		: parseInt(counter.textContent) - 1;
});
