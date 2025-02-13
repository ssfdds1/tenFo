// (c) NextCode
// see https://nextparticle.nextco.de/ for more details

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 800;

const settings = {
  particleGap: isMobile ? 4:2,
  particleSize: isMobile ? 4 : 2,
  mouseForce: 15,
  noise: 15,
  layerCount: isMobile ? 6 : 3,
  layerDistance: 1,
  heartBeat: false,
  beatStrength: 200 };


const heart = new NextParticle({
  renderer: 'webgl',
  image: document.querySelector('#valentines'),
  width: window.innerWidth,
  height: window.innerHeight,
  particleGap: settings.particleGap,
  particleSize: settings.particleSize,
  mouseForce: settings.mouseForce,
  noise: settings.noise,
  layerCount: settings.layerCount,
  layerDistance: settings.layerDistance });


function redraw() {
  heart.particleGap = settings.particleGap;
  heart.particleSize = settings.particleSize;
  heart.mouseForce = settings.mouseForce;
  heart.noise = settings.noise;
  heart.layerCount = settings.layerCount;
  heart.layerDistance = settings.layerDistance;
  heart.width = window.innerWidth;
  heart.height = window.innerHeight;

  heart.start({
    initPosition: 'none',
    initDirection: 'none' });

};



window.addEventListener('resize', redraw);

setInterval(() => {
  if (settings.heartBeat) {
    const strength = settings.beatStrength;
    heart.origins.map(o => o.z -= strength);
    setTimeout(() => {
      heart.origins.map(o => o.z += strength);
    }, isMobile ? 200 : 100);
  }
}, isMobile ? 2500 : 1500);