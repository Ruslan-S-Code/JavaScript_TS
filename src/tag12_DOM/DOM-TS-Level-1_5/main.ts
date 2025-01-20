class URLDisplay {
  constructor() {
    const button = document.getElementById("url-button") as HTMLButtonElement;
    const urlDisplay = document.getElementById("url-display") as HTMLElement;

    button.addEventListener("click", () => this.showURL(urlDisplay));
  }

  private showURL(urlDisplay: HTMLElement): void {
    const currentURL = window.location.href;
    urlDisplay.textContent = `Aktuelle URL: ${currentURL}`;
  }
}
window.addEventListener("load", () => new URLDisplay());
