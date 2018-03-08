import {commonParams} from './config'
import axios from 'axios'

export function getRankList () {
  const url = '/api/getRankList'

  const data = Object.assign({}, commonParams, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5',
    format: 'json'
  })

  return axios(url, { params: data }).then(res => {
    return Promise.resolve(res.data)
  })
}
