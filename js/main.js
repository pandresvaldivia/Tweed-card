const $likeBtn = document.querySelector('.icon-heart');
const $retweetBtn = document.querySelector('.icon-retweet');

$likeBtn.addEventListener('click', (e) => {
	tweetEvent(e);
});

$retweetBtn.addEventListener('click', (e) => {
	tweetEvent(e, false);
});

function tweetEvent(e, isChild = true) {
	const isLiked = e.target.parentElement.classList.toggle('is-liked');

	const counter = isChild
		? e.target.nextElementSibling
		: e.target.parentElement.nextElementSibling;

	counter.textContent = isLiked
		? parseInt(counter.textContent) + 1
		: parseInt(counter.textContent) - 1;
}
