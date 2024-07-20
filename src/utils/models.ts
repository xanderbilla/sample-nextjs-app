interface products {
    title: string;
    description?: string;
    price: number;
    category: string;
    color: [];
    size: [];
    imgSet: [
      {
        src: string;
        alt: string;
      }
    ];
  }
