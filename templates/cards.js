export default () => {
  return {
    type: 'bubble',
    hero: {
      type: 'image',
      url: '/e_new_upload/task/a66dc343-cd8b-4ee0-a265-8d7fff520c3b/C2_315080000H_081201/188177f01852154eab28a77efba87834dbb89da6.jpg',
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'cover',
      action: {
        type: 'uri',
        uri: 'https://line.me/'
      }
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '台灣設計展',
          weight: 'bold',
          size: 'xl',
          contents: []
        },
        {
          type: 'text',
          text: '全國級',
          weight: 'bold',
          size: 'lg',
          contents: []
        },
        {
          type: 'text',
          text: '經濟部、台南市政府',
          weight: 'bold',
          size: 'md',
          contents: []
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'lg',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'Place',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: '臺南市 中西區2024年活動地點尚未確定',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'startTime',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: 'Oct 1, 2024 12:00:00 AM',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                },
                {
                  type: 'text',
                  text: 'endTime',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: 'Oct 31, 2024 12:00:00 AM',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                },
                {
                  type: 'text',
                  text: 'description',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: '台中流行',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            }
          ]
        }
      ]
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        {
          type: 'button',
          style: 'link',
          height: 'sm',
          action: {
            type: 'uri',
            label: '地圖',
            uri: 'https://www.google.com/maps/search/?api=1&query=24.254294,121.251584'
          }
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [],
          margin: 'sm'
        }
      ],
      flex: 0
    },
    styles: {
      footer: {
        separator: true
      }
    }
  }
}
