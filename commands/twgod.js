import axios from 'axios'
import { distance } from '../utils/distance.js'
import template from '../templates/taiwangods.js'
import fs from 'node:fs'

export default async event => {
  try {
    const { data } = await axios.post('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindFestivalTypeJ', new URLSearchParams({
      actId: '',
      actName: '',
      levelName: '',
      grade1: '',
      grade2: '',
      grade3: '',
      grade4: '',
      grade5: '',
      grade6: '',
      description: '',
      participation: '',
      cityId: 109,
      address: '',
      tel: '',
      org: '',
      startTime: '',
      endTime: '',
      cycle: '',
      noncycle: '',
      website: '',
      longitude: '',
      latitude: '',
      class1: '01',
      class2: '02',
      map: null,
      travellinginfo: '',
      parkinginfo: '',
      charge: '',
      remarks: '',
      cityName: '',
      imageUrl: ''
    }))
    const replies = data
      .map(d => {
        d.distance = distance(d.L_MapY, d.L_MapX, event.message.latitude, event.message.longitude, 'K')
        return d
      })
      .sort((a, b) => {
        return a.distance - b.distance
      })
      .slice(0, 5)
      .map(d => {
        const t = template()
        // const imageUrl = d.imageUrl && d.imageUrl.startsWith('http') ? d.imageUrl : 'https://via.placeholder.com/1024'
        // t.hero.url = d.imageUrl
        t.body.contents[0].text = d.actName
        t.body.contents[1].text = d.levelName
        t.body.contents[2].contents[0].contents[1].text = d.cityId + d.cityName + d.address
        t.body.contents[2].contents[1].contents[1].text = d.org
        t.body.contents[2].contents[2].contents[1].text = d.endTime
        t.footer.contents[0].action.uri = `https://www.google.com/maps/search/?api=1&query=${d.longitude},${d.latitude}`
        t.footer.contents[1].action.uri = `http://goo.gl/PGqEBv${d.actId}`
        return t
      })
    const result = await event.reply({
      type: 'flex',
      altText: '節慶活動查詢結果',
      contents: {
        type: 'carousel',
        contents: replies
      }
    })
    if (process.env.DEBUG === 'true') {
      console.log(result)
      if (result.message) {
        fs.writeFileSync('./dump/twgod.json', JSON.stringify(replies, null, 2))
      }
    }
  } catch (error) {
    console.log(error)
    event.reply('發生錯誤')
  }
}