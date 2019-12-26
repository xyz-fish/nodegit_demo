const path = require('path')
const MQn = require('@mengmaxx/qn_upload')

const upload = new MQn(
  {
    bucket: 'w',
    accessKey: 'cw-tW',
    secretKey: 'cw-WecZ_T9kKztH1lQEro43pidhzUrxz'
  }
)

upload.upload(path.resolve(__dirname, 'fa.jpg'), 'fa.jpg')