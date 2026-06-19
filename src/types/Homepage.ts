export interface ComponentNode {
  id: string;
  type: string;
  title?: string;
  products?: any[];
  items?: any[];
}

export interface Homepage {
  theme: {
    primary: string;
    background: string;
  };

  components: ComponentNode[];
}