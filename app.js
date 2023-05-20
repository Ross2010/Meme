const form = document.querySelector('#container');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const imageUrl = document.querySelector('#imageUrl').value;
  const topText = document.querySelector('#topText').value;
  const bottomText = document.querySelector('#bottomText').value;

  const memeContainer = document.querySelector('#meme-container');
  memeContainer.innerHTML = '';

  const meme = document.createElement('div');
  meme.classList.add('meme');

  const image = document.createElement('img');
  image.setAttribute('src', imageUrl);
  image.setAttribute('id', 'memeImage');

  const topCaption = document.createElement('div');
  topCaption.classList.add('caption', 'top-caption');
  topCaption.innerText = topText;

  const bottomCaption = document.createElement('div');
  bottomCaption.classList.add('caption', 'bottom-caption');
  bottomCaption.innerText = bottomText;

  meme.appendChild(image);
  meme.appendChild(topCaption);
  meme.appendChild(bottomCaption);
  memeContainer.appendChild(meme);
});