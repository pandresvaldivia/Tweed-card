const $likeBtn = document.querySelector('.icon-heart');
const $retweetBtn = document.querySelector('.icon-retweet');

$likeBtn.addEventListener('click', tweetEvent);
$retweetBtn.addEventListener('click', tweetEvent);

function tweetEvent(e) {
	const isLiked = e.target.parentElement.classList.toggle('is-liked');
	const counter = e.target.nextElementSibling;

	counter.textContent = isLiked
		? parseInt(counter.textContent) + 1
		: parseInt(counter.textContent) - 1;
}
