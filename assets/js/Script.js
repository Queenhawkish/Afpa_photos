let gallery = document.getElementById("gallery")

for (let i = 0; i < 8; i++) {
    gallery.innerHTML += `
    <a href="https://picsum.photos/1000?random=${i}" data-lightbox="image-1" data-title="My caption" class="image">
    <img src="https://picsum.photos/1000?random=${i}" alt="image">
    </a> 
    `
}