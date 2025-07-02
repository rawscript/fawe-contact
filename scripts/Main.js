document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseover', () => {
    const href = link.getAttribute('href');
    if (href) {
      const linkEl = document.createElement('link');
      linkEl.rel = 'prefetch';
      linkEl.href = href;
      document.head.appendChild(linkEl);
    }
  });
});
