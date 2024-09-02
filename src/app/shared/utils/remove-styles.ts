export function removeStylesheet(url: string): void {
    const links = document.querySelectorAll(`link[href="${url}"]`);
    links.forEach(link => link.remove());
  }