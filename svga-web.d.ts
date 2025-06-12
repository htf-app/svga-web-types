declare module 'svga-web' {
  export class Downloader {
    constructor();
    get(url: string): Promise<ArrayBuffer>;
    [key: string]: any;
  }

  export class Parser {
    constructor();
    do(fileData: ArrayBuffer): Promise<any>;
    [key: string]: any;
  }

  export class Player {
    constructor(canvas: HTMLCanvasElement | string);
    mount(videoItem: any): Promise<void>;
    start(): void;
    pause(): void;
    stop(): void;
    clear(): void;
    set(config: {
      loop?: number;
      fillMode?: 'forwards' | 'backwards' | 'none';
    }): void;
    progress: number;
    $on(event: string, callback: () => void): this;
    [key: string]: any;
  }
}
