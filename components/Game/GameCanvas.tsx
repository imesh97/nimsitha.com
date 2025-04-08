"use client";

import { useEffect, useRef, useState, type FC } from "react";

interface ModuleConfig {
  canvas: HTMLCanvasElement | null;
  preRun: Array<() => void>;
  postRun: Array<() => void>;
  print: (text: string) => void;
  printErr: (text: string) => void;
  setStatus: (text: string) => void;
  locateFile?: (path: string) => string;
  onRuntimeInitialized?: () => void;
  noAudioDecoding?: boolean;
  noAudioWorklet?: boolean;
  elementPointerLock?: boolean;
  doNotCaptureKeyboard?: boolean;
  blockCanvasEvents?: boolean;
}

declare global {
  interface Window {
    Module?: ModuleConfig;
  }
}

const GameCanvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (
      !canvasRef.current ||
      !containerRef.current ||
      scriptLoadedRef.current
    ) {
      return undefined;
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;

    const handleError = (message: string): void => {
      console.error("Game Error:", message);
      setError(message);
    };

    // Remove any existing Module instance
    if (window.Module) {
      delete window.Module;
    }

    // Configure the Module
    window.Module = {
      canvas,
      preRun: [
        (): void => {
          console.log("Game pre-run initialization");
        },
      ],
      postRun: [
        (): void => {
          console.log("Game post-run initialization");
          // Ensure the canvas has focus
          canvas.focus();
        },
      ],
      print: (text: string): void => {
        console.log("Game:", text);
      },
      printErr: (text: string): void => {
        // Only show non-runtime keepalive messages
        if (!text.includes("runtimeKeepalive")) {
          handleError(text);
        }
      },
      setStatus: (text: string): void => {
        if (text) console.log("Game Status:", text);
      },
      locateFile: (path: string): string => {
        return `/${path}`;
      },
      onRuntimeInitialized: (): void => {
        console.log("Emscripten runtime initialized");
      },
      // Disable audio
      noAudioDecoding: true,
      noAudioWorklet: true,
      // Event handling settings
      elementPointerLock: true,
      doNotCaptureKeyboard: false,
      blockCanvasEvents: false,
    };

    // Create script element
    const script = document.createElement("script");
    script.src = "/ultrasuperspacerocks.js";
    script.async = true;

    script.onerror = (e: Event | string): void => {
      handleError("Failed to load game script");
      console.error("Script load error:", e);
    };

    // Create fallback event handlers
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "F11") {
        e.preventDefault();
      }
    };

    const handleContextMenu = (e: Event): void => {
      e.preventDefault();
    };

    // Add event listeners
    canvas.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    scriptLoadedRef.current = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }

      // Remove event listeners
      canvas.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);

      // Clean up Module
      if (window.Module) {
        delete window.Module;
      }
      scriptLoadedRef.current = false;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex h-screen w-full items-center justify-center bg-black">
      {error && (
        <div className="absolute left-4 top-4 rounded bg-red-500 p-4 text-white">
          Error: {error}
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="max-h-full max-w-full focus:outline-hidden"
        width={800}
        height={450}
        tabIndex={1}
      />
    </div>
  );
};

export default GameCanvas;
