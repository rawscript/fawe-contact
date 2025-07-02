setupScrollListener() {
  // Create loader element once
  this.loader = document.createElement('div');
  this.loader.className = 'gallery-loader';
  this.loader.textContent = 'Loading more images...';
  this.gallery.after(this.loader);
  this.loader.style.display = 'none';

  window.addEventListener('scroll', async () => {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    if (nearBottom && !this.endReached) {
      this.loader.style.display = 'block';
      await this.loadImages(6);
      this.loader.style.display = 'none';
    }
  });
}
