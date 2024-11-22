/**Play Button**/

document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.querySelector('.play-btn');
  const iframe = document.querySelector('.video-frame');
  const backgroundVideo = document.querySelector('.background-video');
  
  console.log('Play button:', playButton);
  console.log('Video iframe:', iframe);

  if (playButton && iframe && backgroundVideo) {
    playButton.addEventListener('click', function () {
      // Show the iframe and hide the play button
      iframe.style.display = 'block';
      playButton.style.display = 'none';
      
      // Hide the background image
      backgroundVideo.style.backgroundImage = 'none';
    });
  } else {
    if (!playButton) console.error('Play button not found');
    if (!iframe) console.error('Video iframe not found');
    if (!backgroundVideo) console.error('Background video not found');
  }
});
/*Accordian Js*/
document.addEventListener('DOMContentLoaded', () => {
  const togglers = document.querySelectorAll('[data-toggle]');
  
    togglers.forEach((btn) => {
      btn.addEventListener('click', (e) => {
         const selector = e.currentTarget.dataset.toggle
         const block = document.querySelector(`${selector}`);
        if (e.currentTarget.classList.contains('active')) {
          block.style.maxHeight = '';
        } else {
          block.style.maxHeight = block.scrollHeight + 'px';
        }
          
         e.currentTarget.classList.toggle('active')
      })
    })
	})


