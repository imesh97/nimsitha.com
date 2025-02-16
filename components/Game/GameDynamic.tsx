"use client";

import dynamic from "next/dynamic";

const GameCanvas = dynamic(() => import("@/components/Game/GameCanvas"), {
  ssr: false,
});

export default function GameDynamic() {
  return <GameCanvas />;
}
