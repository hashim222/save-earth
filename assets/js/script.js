/***
 * Model Viewer integration for Annotations
 */
const landing = document.getElementById("landing");
const landingViewer = document.getElementById("landing-viewer");

if(landingViewer) {
    
    let modelSrc = landingViewer.getAttribute(landingViewer.getAttribute('src'));

    landingViewer.addEventListener("click", () => {
        switch (modelSrc) {
            case 'assets/models/earth/earth-model.gltf':
                landingViewer.setAttribute(
                    'src', 'assets/models/mars/mars-model.gltf'
                );
                break;
            case 'assets/models/mars/mars-model.gltf':
                landingViewer.setAttribute(
                    'src', 'assets/models/earth/earth-model.gltf'
                );
                break;
            default:
                landingViewer.setAttribute(
                    'src', 'assets/models/mars/mars-model.gltf'
                );
        }
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
