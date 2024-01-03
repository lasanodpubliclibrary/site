"use client";
import React from "react";
import ReactMoment, { type MomentProps } from "react-moment";

export default function Moment({ ...props }: MomentProps) {
  return <ReactMoment {...props} />;
}
