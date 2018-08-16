// ----------------------------------------------------
// Revolution Settings
// ----------------------------------------------------
var width = 1800;
var height = 1200;

/*
if (window) {
  width  = window.innerWidth;
  height = window.innerHeight/2;
}*/

jQuery(document).ready(function() {
   jQuery("#slider1").revolution({
      sliderType:"standard",
      delay:1000,
      startDelay:1000,
      navigation: {
          arrows:{enable:true}
      },gridwidth: width,
      gridheight: height,
      sliderLayout:"fullwidth",
      fullScreenAlignForce:"on",
      autoHeight:"on",
      spinner:"off",
      debugMode: false,
      viewPort:{
         enable:false,
         outof:'wait',
         visible_area:'60%'
      },
      navigation : {
        onHoverStop:"off"
      }
    });
    jQuery("#bottom").show();
});

// ----------------------------------------------------
// Isotope Settings
// ----------------------------------------------------
