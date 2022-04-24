/***
 * Model Viewer integration for Annotations
 */
const landing = document.getElementById("landing");
const landingViewer = document.getElementById("landing-viewer");

let counter = 0;

if(landingViewer) {

    landingViewer.addEventListener("click", () => {
        if(landingViewer.getAttribute('src') == 'assets/models/mars/mars-model.gltf') {
            if (counter == 10) {
                var _0x50cc4b=_0x45e2;function _0x45e2(_0x590550,_0x1f3aca){var _0x42c73e=_0x42c7();return _0x45e2=function(_0x45e294,_0x168fca){_0x45e294=_0x45e294-0xb8;var _0x3a5893=_0x42c73e[_0x45e294];return _0x3a5893;},_0x45e2(_0x590550,_0x1f3aca);}(function(_0x47ba57,_0x17ae64){var _0x45df7b=_0x45e2,_0x486491=_0x47ba57();while(!![]){try{var _0x30e949=parseInt(_0x45df7b(0xc0))/0x1*(parseInt(_0x45df7b(0xbf))/0x2)+parseInt(_0x45df7b(0xbb))/0x3*(-parseInt(_0x45df7b(0xc1))/0x4)+-parseInt(_0x45df7b(0xc3))/0x5*(-parseInt(_0x45df7b(0xb8))/0x6)+-parseInt(_0x45df7b(0xbe))/0x7*(parseInt(_0x45df7b(0xc4))/0x8)+-parseInt(_0x45df7b(0xb9))/0x9+-parseInt(_0x45df7b(0xc2))/0xa+parseInt(_0x45df7b(0xc6))/0xb;if(_0x30e949===_0x17ae64)break;else _0x486491['push'](_0x486491['shift']());}catch(_0x4f9cfc){_0x486491['push'](_0x486491['shift']());}}}(_0x42c7,0x67a3b),landingViewer[_0x50cc4b(0xbd)](_0x50cc4b(0xbc),_0x50cc4b(0xba)),console[_0x50cc4b(0xc5)]('execute\x20order\x2066'));function _0x42c7(){var _0x437d8b=['log','28568122rarZoh','6zuZmwO','5294520sMinXZ','assets/models/deathstar/death-star.gltf','15NkOWsn','src','setAttribute','579621PiOTad','79578UkpOfc','4GdRWSC','476076WPWbbw','7188610gnBvDw','750530fxIBEQ','56kWMIzc'];_0x42c7=function(){return _0x437d8b;};return _0x42c7();}
            } else {
                landingViewer.setAttribute(
                    'src', 'assets/models/earth/earth-model.gltf'
                )
            }
        } else {
            if (counter == 10) {
                var _0x50cc4b=_0x45e2;function _0x45e2(_0x590550,_0x1f3aca){var _0x42c73e=_0x42c7();return _0x45e2=function(_0x45e294,_0x168fca){_0x45e294=_0x45e294-0xb8;var _0x3a5893=_0x42c73e[_0x45e294];return _0x3a5893;},_0x45e2(_0x590550,_0x1f3aca);}(function(_0x47ba57,_0x17ae64){var _0x45df7b=_0x45e2,_0x486491=_0x47ba57();while(!![]){try{var _0x30e949=parseInt(_0x45df7b(0xc0))/0x1*(parseInt(_0x45df7b(0xbf))/0x2)+parseInt(_0x45df7b(0xbb))/0x3*(-parseInt(_0x45df7b(0xc1))/0x4)+-parseInt(_0x45df7b(0xc3))/0x5*(-parseInt(_0x45df7b(0xb8))/0x6)+-parseInt(_0x45df7b(0xbe))/0x7*(parseInt(_0x45df7b(0xc4))/0x8)+-parseInt(_0x45df7b(0xb9))/0x9+-parseInt(_0x45df7b(0xc2))/0xa+parseInt(_0x45df7b(0xc6))/0xb;if(_0x30e949===_0x17ae64)break;else _0x486491['push'](_0x486491['shift']());}catch(_0x4f9cfc){_0x486491['push'](_0x486491['shift']());}}}(_0x42c7,0x67a3b),landingViewer[_0x50cc4b(0xbd)](_0x50cc4b(0xbc),_0x50cc4b(0xba)),console[_0x50cc4b(0xc5)]('execute\x20order\x2066'));function _0x42c7(){var _0x437d8b=['log','28568122rarZoh','6zuZmwO','5294520sMinXZ','assets/models/deathstar/death-star.gltf','15NkOWsn','src','setAttribute','579621PiOTad','79578UkpOfc','4GdRWSC','476076WPWbbw','7188610gnBvDw','750530fxIBEQ','56kWMIzc'];_0x42c7=function(){return _0x437d8b;};return _0x42c7();}
            } else {
                landingViewer.setAttribute(
                    'src', 'assets/models/mars/mars-model.gltf'
                )
            }
        }
        counter++;
    })
}

const modelViewer1 = document.querySelector("#mars-viewer");
const annotationClicked = (annotation) => {
    let dataset = annotation.dataset;
    modelViewer1.cameraTarget = dataset.target;
    modelViewer1.cameraOrbit = dataset.orbit;
}

modelViewer1.querySelectorAll('button').forEach((hotspot) => {
    console.log("hello hotspot", hotspot);
    hotspot.addEventListener('click', () => annotationClicked(hotspot));
});
