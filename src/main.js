import './styles/app.css';

function renderMapsFrame(lat, lon) {

  const frame = document.createElement('iframe');
  lon = 11.6225668; // 14.3340639;
  lat = 48.218764; // 51.7609364;

  const mapsUrl = `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d31360.375337328645!2d${lon}!3d${lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1619582964914!5m2!1sde!2sde`
  frame.src = mapsUrl;
  frame.width = 600;
  frame.height = 450;
  frame.allowFullscreen = false;
  frame.style.border = 0;

  document.getElementById('gmap').appendChild(frame);

}
