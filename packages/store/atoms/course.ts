import { atom } from "recoil";

export interface Course {
  title?: string;
  description?: string;
  imageLink?: string;
  published?: boolean;
  price?: number;
}

export const courseState = atom<{ isLoading: boolean; course: Course | null }>({
  key: "courseState",
  default: {
    isLoading: false,
    course: null
  }
});
