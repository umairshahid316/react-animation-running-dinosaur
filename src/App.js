import logo from './logo.svg';
import './App.css';
import Vector from './images/vector1.gif';
import Women from './images/women.gif';
import Rock from './images/rock.png';
import Palm from './images/palm3_small.png';
import Bush from './images/bush_small.png';
import Birds from './images/birds.gif';
import Trees from './images/trees.gif';
import Men from './images/men.gif';
import useWebAnimations from "@wellyshen/use-web-animations";
import { useEffect } from 'react';

function App() {
// 

useEffect(() => {
  const interval = setInterval(() => {
  const animationBackground1 = background1.getAnimation();
  const animationBackground2 = background2.getAnimation();
  const animationBackground3 = background3.getAnimation();
  const animationForeground1 = foreground1.getAnimation();
  const animationForeground2 = foreground2.getAnimation();
  const animationForeground3 = foreground3.getAnimation();

if(animationBackground1.playbackRate > 0.4)  
{
  animationBackground1.updatePlaybackRate(animationBackground1.playbackRate *= .9);
  animationBackground2.updatePlaybackRate(animationBackground2.playbackRate *= .9);
  animationBackground3.updatePlaybackRate(animationBackground3.playbackRate *= .9);
  animationForeground1.updatePlaybackRate(animationForeground1.playbackRate *= .9);
  animationForeground2.updatePlaybackRate(animationForeground2.playbackRate *= .9);
  animationForeground3.updatePlaybackRate(animationForeground3.playbackRate *= .9);
}

  }, 3000);
  return () => clearInterval(interval);
  console.log("new ")
});




const background1 = useWebAnimations({
  keyframes:   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }   
  ],
  timing: {
    duration:29000,
    iterations: Infinity
  },
});
const background2 = useWebAnimations({
  keyframes:   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }   
  ],
  timing: {
    duration:29000,
    iterations: Infinity
  },
});
const background3 = useWebAnimations({
  keyframes:   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }   
  ],
  timing: {
    duration:29000,
    iterations: Infinity
  },
  });
const foreground1 = useWebAnimations({
 keyframes:   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }   
  ],
  timing : {
    duration: 22000,
    iterations: Infinity,
      }
});
const foreground2 = useWebAnimations({
  keyframes:   [
     { transform: 'translateX(100%)' },
     { transform: 'translateX(-100%)' }   
   ],
   timing : {
     duration: 22000,
     iterations: Infinity,
       }
 });
 const foreground3 = useWebAnimations({
  keyframes:   [
     { transform: 'translateX(100%)' },
     { transform: 'translateX(-100%)' }   
   ],
   timing : {
     duration: 22000,
     iterations: Infinity,
       }
 });
////////////////////////////

const speedUp = () => {
  const animationBackground1 = background1.getAnimation();
  const animationBackground2 = background2.getAnimation();
  const animationBackground3 = background3.getAnimation();

  const animationForeground1 = foreground1.getAnimation();
  const animationForeground2 = foreground2.getAnimation();
  const animationForeground3 = foreground3.getAnimation();
  animationBackground1.updatePlaybackRate(animationBackground1.playbackRate *= 1.1);
  animationBackground2.updatePlaybackRate(animationBackground2.playbackRate *= 1.1);
  animationBackground3.updatePlaybackRate(animationBackground3.playbackRate *= 1.1);
  animationForeground1.updatePlaybackRate(animationForeground1.playbackRate *= 1.1);
  animationForeground2.updatePlaybackRate(animationForeground2.playbackRate *= 1.1);
  animationForeground3.updatePlaybackRate(animationForeground3.playbackRate *= 1.1);
};  


// useEffect(() => {
//   const animationBackground1 = background1.getAnimation();
//   const animationBackground2 = background2.getAnimation();
//   const animationBackground3 = background3.getAnimation();
//   const animationForeground1 = foreground1.getAnimation();
//   const animationForeground2 = foreground2.getAnimation();
//   const animationForeground3 = foreground3.getAnimation();

// if(animationBackground1.playbackRate > 0.4)  
// {
//   animationBackground1.updatePlaybackRate(animationBackground1.playbackRate *= .9);
//   animationBackground2.updatePlaybackRate(animationBackground2.playbackRate *= .9);
//   animationBackground3.updatePlaybackRate(animationBackground3.playbackRate *= .9);
//   animationForeground1.updatePlaybackRate(animationForeground1.playbackRate *= .9);
//   animationForeground2.updatePlaybackRate(animationForeground2.playbackRate *= .9);
//   animationForeground3.updatePlaybackRate(animationForeground3.playbackRate *= .9);

// console.log("hello ",animationBackground1.playbackRate)
// }
//  console.log("new ",animationBackground1.playbackRate)
// })
  // 
  return (
    <div className="wrapper" onClick={speedUp} id="temp">
        
    <div className="sky">    

    <div className="earth">
    <div id="red-queen_and_alice">
        <img id="red-queen_and_alice_sprite"   src={Vector}  alt="s"/>
    </div>

    <div id="red-queen">
        <img id="red-queen_and_alice_sprit"   src={Women}  alt="s"/>
    </div>

</div>



    <div className="scenery" id="foreground1" ref={foreground1.ref}>
        <img id="palm3" src={Rock} srcSet={Rock}  alt=" "/>
    </div>

    
    <div className="scenery" id="foreground2" ref={foreground2.ref}>    
        <img id="w_rook_upright" src={Palm}  alt=" "/>
      </div>

  
      <div className="scenery" id="foreground3" ref={foreground3.ref}>    
      <img id="w_rook_upright1" src={Bush}  alt=" "/>
      <img id="w_rook_upright2" src={Bush}  alt=" "/>
      </div>
      

      <div className="scenery" id="background1" ref={background1.ref}>
        <img id="palm1" src={Birds}  alt=" "/>
      </div>
  

      <div className="scenery" id="background2" ref={background2.ref}>    
        <img id="bush" src={Trees} alt=" "/>
        </div>

        <div className="scenery" id="background3" ref={background3.ref}>    
            <img id="bush1" src={Trees}  alt=" "/>
            <img id="bush2" src={Men} alt=" "/>
              
        </div>
        


</div>



</div>



  );
}

export default App;
