export class Promo {
  id: number;
  name: string;
  text: Subtext[];

  constructor(name: string, text: Subtext[]) {
    this.name = name;
    this.text = text;
  }
}

export class Subtext {
  text: string;
  style: Style;

  constructor(text: string, style: Style = Style.none) {
    this.text = text;
    this.style = style;
  }
}

export enum Style {
  bold = 0,
  underline = 1,
  italic = 2,
  none = 3
}
