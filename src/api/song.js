import {commonParams} from './config'
import axios from 'axios'
import {getUid} from 'common/js/uid'

export function getVKey (songmid, filename) {
  const url = '/api/getVKey'

  const data = Object.assign({}, commonParams, {
    cid: 205361747,
    format: 'json',
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    uin: 0,
    songmid,
    filename,
    guid: getUid()
  })

  return axios.get(url, { params: data }).then(res => {
    return Promise.resolve(res.data)
  })
}
