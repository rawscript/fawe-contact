class LGallery extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `<section id="gallery-grid" class="gallery-grid"></section>`;
    this.localFolder = '/images/';
    this.remoteURL = 'https://unsplash.com/s/photos/women'; // optional
    this.imageList = [];
    this.imageIndex = 0;
    this.endReached = false;

    await this.fetchImageList();
    this.loadImages(12);
    this.setupScrollListener();
  }

  async fetchImageList() {
    try {
      const res = await fetch('/images/gallery.json');
      if (!res.ok) throw new Error('Manifest not found');
      this.imageList = await res.json();
    } catch (err) {
      console.error('Unable to fetch image list:', err);
      this.imageList = []; // fallback to empty if needed
    }
  }

  loadImages(batchSize) {
    if (this.endReached || this.imageIndex >= this.imageList.length) return;

    const gallery = document.getElementById('gallery-grid');

    for (let i = 0; i < batchSize && this.imageIndex < this.imageList.length; i++) {
      const fileName = this.imageList[this.imageIndex];
      const imgPath = this.localFolder + fileName;
      const img = new Image();
      img.src = imgPath;
      img.alt = `Gallery Image ${fileName}`;
      img.className = 'gallery-img';
      img.loading = 'lazy';

      img.onload = () => {
        const anchor = document.createElement('a');
        anchor.href = img.src;
        anchor.setAttribute('data-lightbox', 'gallery');
        anchor.setAttribute('data-title', img.alt);
        anchor.appendChild(img);
        gallery.appendChild(anchor);
      };

      img.onerror = () => console.warn(`Image failed to load: ${fileName}`);

      this.imageIndex++;
    }

    if (this.imageIndex >= this.imageList.length && !this.remoteURL) {
      this.endReached = true;
    }
  }

  setupScrollListener() {
    window.addEventListener('scroll', () => {
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (nearBottom && !this.endReached) {
        this.loadImages(6);
      }
    });
  }
}

customElements.define('lr-gallery', LGallery);
