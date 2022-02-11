export type Case = {
    data: {
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
    },
    slugs: [0]
  }