export class BoardPhoto {
  private id: string;
  private src: string;
  private tags: string[] = [];
  private saved: boolean = false;

  get isSaved(): boolean {
    return this.saved;
  }

  constructor(id: number, src: string) {
    this.id = `board-photo-${id}`;
    this.src = src;
  }

  save(): void {
    this.saved = true;
  }

  getId(): string {
    return this.id;
  }

  getImg(): string {
    return `<img class="board-photo" src="${this.src}"/>${this.getTags()}`
  }

  addTag(tag: string): void {
    this.tags.push(tag);
  }

  private getTags(): string {
    return this.tags.join();
  }
}

export class Board {
  id: number;
  name: string;
  photos: BoardPhoto[] = [];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  isPhoto(): boolean {
    return this.photos.length > 0 && this.photos.findIndex(p => !p.isSaved) > -1;
  }

  addPhoto(imgLink: string): void {
    const photo = new BoardPhoto(this.photos.length, imgLink);
    this.photos.push(photo);
  }

  savePhotos(): Promise<void> {
    return new Promise(res => {
      this.photos.forEach(p => {
        !p.isSaved && p.save();
      });
      res();
    })
  }

  deleteNotSavedPhotos(): Promise<void> {
    return new Promise(res => {
      const idx = this.photos.findIndex(p => !p.isSaved);
      this.photos.splice(idx);
      res();
    })
  }
}