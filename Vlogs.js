// Example: Load videos dynamically from an array (you could fetch this from a server later)
const videos = [
  "https://www.youtube.com/embed/video1",
  "https://www.youtube.com/embed/video2"
];

const vlogsSection = document.getElementById('vlogs');
videos.forEach(video => {
  const iframe = document.createElement('iframe');
  iframe.src = video;
  iframe.allowFullscreen = true;
  vlogsSection.appendChild(iframe);
});
