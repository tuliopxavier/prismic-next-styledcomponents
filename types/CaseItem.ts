export type CaseItem = {
    title: [{
      text: string
    }],
    thumbnail: {
      url: string
    },
    content?: [
      {
        type: string,
        text?: string,
        url?: string
      }
    ]
  };