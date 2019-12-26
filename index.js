const path = require('path')
const MQn = require('@mengmaxx/qn_upload')

const upload = new MQn(
  {
    bucket: 'mengmax',
    accessKey: 'FbWLLAAcB2uOMwRtGCcsKNJNxpGO0eRryoOoM-tW',
    secretKey: 'tT4E1VbdIn-WecZ_T9kKztH1lQEro43pidhzUrxz'
  }
)

upload.upload(path.resolve(__dirname, 'fa.jpg'), 'fa.jpg')