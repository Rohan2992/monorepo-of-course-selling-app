import { selector } from "recoil";
import { courseState } from "../atoms/course";

export const courseDetails = selector({
  key: "courseDetailsState",
  get: ({ get }) => {
    const state = get(courseState);
    return state.course;
  }
});

export const courseLoading = selector({
  key: "courseLoadingState",
  get: ({ get }) => {
    const state = get(courseState);
    return state.isLoading;
  }
});

export const courseTitle = selector({
  key: "courseTitleState",
  get: ({ get }) => {
    const state = get(courseState);
    if (state.course) {
      return state.course.title;
    }
    return "";
  }
});

export const courseDescription = selector({
  key: "courseDescriptionState",
  get: ({ get }) => {
    const state = get(courseState);
    if (state.course) {
      return state.course.description;
    }
    return "";
  }
});

export const coursePrice = selector({
  key: "coursePriceState",
  get: ({ get }) => {
    const state = get(courseState);
    if (state.course) {
      return state.course.price;
    }
    return "";
  }
});

export const courseImageLink = selector({
  key: "courseImageLinkState",
  get: ({ get }) => {
    const state = get(courseState);
    if (state.course) {
      return state.course.imageLink;
    }
    return "";
  }
});

export const coursePublished = selector({
  key: "coursePublishedState",
  get: ({ get }) => {
    const state = get(courseState);
    if (state.course) {
      return state.course.published;
    }
    return "";
  }
});
