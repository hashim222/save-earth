/***
 * Model Viewer integration for Annotations
 */
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
