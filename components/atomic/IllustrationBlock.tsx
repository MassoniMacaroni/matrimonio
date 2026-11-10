"use client";

import React from "react";
import {
  ReachingHandsIllustration,
  CoupleDoodleIllustration,
  ToastingGlassesIllustration,
  TwinCherriesIllustration,
  VintageSaveTheDateStamp,
  LeafFlourish,
  SparkleCluster,
  WashiTape,
} from "../decorations/Illustrations";

export type IllustrationBlockProps = {
  illustration?:
    | "hands"
    | "couple"
    | "champagne"
    | "cherries"
    | "stamp"
    | "leaf-left"
    | "leaf-right"
    | "sparkles"
    | "washi";
  align?: "center" | "left" | "right";
  marginY?: "none" | "sm" | "md" | "lg";
};

const alignClasses = {
  center: "flex justify-center items-center mx-auto",
  left: "flex justify-start items-center mr-auto",
  right: "flex justify-end items-center ml-auto",
};

const myClasses = {
  none: "my-0",
  sm: "my-2",
  md: "my-5",
  lg: "my-8",
};

export const IllustrationBlock: React.FC<IllustrationBlockProps> = ({
  illustration = "hands",
  align = "center",
  marginY = "md",
}) => {
  const renderItem = () => {
    switch (illustration) {
      case "couple":
        return <CoupleDoodleIllustration />;
      case "champagne":
        return <ToastingGlassesIllustration />;
      case "cherries":
        return <TwinCherriesIllustration />;
      case "stamp":
        return <VintageSaveTheDateStamp />;
      case "leaf-left":
        return <LeafFlourish flip />;
      case "leaf-right":
        return <LeafFlourish />;
      case "sparkles":
        return <SparkleCluster />;
      case "washi":
        return <WashiTape />;
      case "hands":
      default:
        return <ReachingHandsIllustration />;
    }
  };

  return (
    <div
      className={`${alignClasses[align] || alignClasses.center} ${
        myClasses[marginY] || myClasses.md
      } select-none`}
    >
      {renderItem()}
    </div>
  );
};
