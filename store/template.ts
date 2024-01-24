import create from "zustand";
import { TemplateState } from "./types";

export const useTemplateStore = create<TemplateState>((set) => ({
  selectedTemplate: "first",
  setSelectedTemplate(callback) {
    set(({ selectedTemplate }) => ({
      selectedTemplate: callback(selectedTemplate),
    }));
  },
}));
