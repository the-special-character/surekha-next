"use client";

export default function myImageLoader({ src, width, quality }) {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  const data = src.split("upload/");
  return `${data[[0]]}upload/${params.join(",")}/${data[1]}`;
}
