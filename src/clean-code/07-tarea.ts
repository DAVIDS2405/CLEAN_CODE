(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  interface HtmlElementProps {
    id: string;
    type: HtmlType;
  }

  class HtmlElement {
    public id: string;
    public type: HtmlType;

    constructor({ id, type }: HtmlElementProps) {
      this.id = id;
      this.type = type;
    }
  }

  interface InputProps {
    value: string;
    placeholder: string;
  }

  class InputAttributes {
    public value: string;
    public placeholder: string;
    constructor({ value, placeholder }: InputProps) {
      this.value = value;
      this.placeholder = placeholder;
    }
  }

  class InputEvents {
    constructor() {}
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  interface InputElementProps {
    value: string;
    placeholder: string;
    id: string;
  }

  class InputElement {
    public htmlElement: HtmlElement;
    public inputAttributes: InputAttributes;
    public inputEvents: InputEvents;
    constructor({ value, placeholder, id }: InputElementProps) {
      this.htmlElement = new HtmlElement({ id, type: "input" });
      this.inputAttributes = new InputAttributes({ value, placeholder });
      this.inputEvents = new InputEvents();
    }
  }

  const nameField = new InputElement({
    value: "Fernando",
    placeholder: "Enter first name",
    id: "txtName",
  });

  console.log({ nameField });
})();
