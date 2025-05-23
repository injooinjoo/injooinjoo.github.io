declare module 'canvas-scroll-clip' {
  interface ScrollAnimationKeyframe {
    offset: number;
    transform: string;
    opacity: number;
  }

  interface ScrollAnimation {
    selector: string;
    keyframes: ScrollAnimationKeyframe[];
  }

  interface CanvasScrollClipOptions {
    canvas: HTMLCanvasElement;
    container: HTMLElement;
    framePath?: string;
    frameCount?: number;
    scrollArea?: number;
    scrollAnimations?: ScrollAnimation[];
    respectReduceMotion?: boolean;
    debug?: boolean;
  }

  class CanvasScrollClip {
    constructor(options: CanvasScrollClipOptions);
    destroy(): void;
  }

  export default CanvasScrollClip;
} 