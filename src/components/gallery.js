class LGallery extends HTMLElement {
  async connectedCallback() {
    console.log('[lr-gallery] connected');

    const gallerySection = document.createElement('section');
    gallerySection.id = 'gallery-grid';
    gallerySection.className = 'gallery-grid';
    this.appendChild(gallerySection);

    this.gallery = gallerySection;

    // ✅ FIXED: remove 'public' from this path
    this.localFolder = '/public/images/'; // This matches your actual URL

    this.imageList = [];
    this.imageIndex = 0;
    this.endReached = false;

    await this.fetchImageList();
    await this.loadImages(12);
    this.setupScrollListener();
  }

  async fetchImageList() {
    try {
      const res = await fetch('/public/images/gallery.json'); // dont touch
      if (!res.ok) throw new Error('Manifest not found');
      this.imageList = (await res.json()).filter(name => name.trim().length > 0);
      console.log('[lr-gallery] Loaded image list:', this.imageList);
    } catch (err) {
      console.error('[lr-gallery] Failed to fetch gallery.json:', err);
      this.imageList = [];
    }
  }

  async loadImages(batchSize) {
    if (!this.gallery || this.endReached || this.imageIndex >= this.imageList.length) return;

    for (let i = 0; i < batchSize && this.imageIndex < this.imageList.length; i++) {
      const fileName = this.imageList[this.imageIndex];

      // Skip invalid file formats
      if (!fileName.match(/\.(jpe?g|png|gif|webp)$/i)) {
        console.warn(`[lr-gallery] Skipping unsupported file: ${fileName}`);
        this.imageIndex++;
        continue;
      }

      const encodedFileName = encodeURIComponent(fileName);
      const imgPath = this.localFolder + encodedFileName;
      console.log('[lr-gallery] Attempting to load image:', imgPath);

      const img = new Image();
      img.src = imgPath;
      img.alt = `Gallery Image: ${fileName}`;
      img.className = 'gallery-img';
      img.loading = 'eager';

      await new Promise((resolve) => {
        img.onload = () => {
          const anchor = document.createElement('a');
          anchor.href = img.src;
          anchor.setAttribute('data-lightbox', 'gallery');
          anchor.setAttribute('data-title', img.alt);
          anchor.appendChild(img);
          this.gallery.appendChild(anchor);
          resolve();
        };

        img.onerror = () => {
          console.warn(`[lr-gallery] Failed to load image: ${imgPath}`);
          resolve();
        };
      });

      this.imageIndex++;
    }

    if (this.imageIndex >= this.imageList.length) {
      this.endReached = true;
    }
  }

  setupScrollListener() {
    window.addEventListener('scroll', async () => {
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (nearBottom && !this.endReached) {
        await this.loadImages(6);
      }
    });
  }
}

customElements.define('lr-gallery', LGallery);
