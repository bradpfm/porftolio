import Typed from '/portfolio/node_modules/typed.js/src/typed.js';
 console.log("hello")
 const loadDynamicBannerText = () => {
   console.log("hello");
   const typedInput = document.getElementById('banner-typed-text');
   console.log(typedInput);
   new Typed("#banner-typed-text", {
     strings: ['<span id="banner-typed-text">Hello, my name is Bradley</span> </br> <span id="banner-typed-text"> Im a Full-Stack Developer</span>'],
     typeSpeed: 50,
     loop: false

   });
 }
//  const loadDynamicBannerText = () => {
//   console.log("hello");
//   const typedInput = document.getElementById('banner-typed-text');
//   console.log(typedInput);
//   new Typed("#bio-typed-text", {
//     strings: ["<span id="bio-typed-text">Originally hailing from the great city of Oxford, I spent most of my life hopping back and forth over the atlantic.Between the sunny beaches of Florida and the dreary skies of England Ive met many people grown to appreciate the differences in the human experience.</span></br></br><span id="bio-typed-text">I enjoy creating client-facing applications, working within a group of talented peoplee, and I have experience working in github. I am a recent Le Wagon Full-Stack coding bootcamp graduate and I'm looking to kickstart my career and begin a new chapter in my life.</span></br></br><span id="bio-typed-text">When I'm not planted in an editor you can find me gaming, fencing or just out for a stroll in the Oxfordshire country-side.</span> </br> <span id="bio-typed-text"> Im a Full-Stack Developer </span>"],
//     typeSpeed: 50,
//     loop: false
//   });
// }
 export { loadDynamicBannerText };