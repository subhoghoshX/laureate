export interface TemplateState {
  selectedTemplate: Template;
  setSelectedTemplate: (
    callback: (selectedTemplate: Template) => Template,
  ) => void;
}

type Template = "first" | "second" | "third";
