document.getElementById('rotateButton').addEventListener('click', function() {
    var icon = document.getElementById('icon');
    var loader = document.getElementById('loader');
    var check = document.getElementById('check');
    
    // Show loader and icon
    loader.style.display = 'block';
    icon.style.display = 'block';

    // Trigger the rotation animation
    icon.classList.add('rotate-twice');
    loader.classList.add('rotate-twice');

    // Remove the elements after the animation is done
    loader.addEventListener('animationend', function() {
        loader.style.display = 'none';
        icon.style.display = 'none';
        check.style.display = 'block'; // Display the check mark
        loader.removeEventListener('animationend', this);
    });
});