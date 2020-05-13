window.onload = function() {
  let loader = document.getElementById('my-loader');

  // ..loader-wrap に .loaded を追加してローディング表示を消す
  loader.classList.add('loaded');
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("menuButton").addEventListener("click", function() {
		this.classList.toggle("active");
		document.getElementById("nav").classList.toggle("active");
	})
});
