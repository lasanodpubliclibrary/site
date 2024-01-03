import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageURL(fileName: string | null | undefined) {
  if (!fileName) {
    return "";
  }
  return `https://${process.env.AWS_S3_API_ENDPOINT}/${process.env.AWS_S3_BUCKET_NAME}/${fileName}`;
}
