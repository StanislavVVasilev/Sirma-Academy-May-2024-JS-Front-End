function calculateSphereVolume() {

    const radius = document.querySelector('input[name=radius]').value;
    const volume = (4 / 3 * Math.PI * Math.pow(radius, 3)).toFixed(4);
    document.querySelector('input[name=volume]').value = volume;
    
}