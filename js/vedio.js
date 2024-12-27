const rangeVideo = () => {
    const totalSize = 9350042
    const chunkSize = 1000000
    const numChunks = Math.ceil(totalSize / chunkSize)
    let index = 0

    const assetURL = 'url'
    var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'

    if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
      var mediaSource = new MediaSource()
      video.src = URL.createObjectURL(mediaSource)
      mediaSource.addEventListener('sourceopen', sourceOpen)
    } else {
      console.error('Unsupported MIME type or codec: ', mimeCodec)
    }

    function sourceOpen(e) {
      var mediaSource = e.target
      var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec)

      const send = () => {
        if (index >= numChunks) {
          sourceBuffer.addEventListener('updateend', function (_) {
            mediaSource.endOfStream()
          })
        } else {
          const start = index * chunkSize
          const end = Math.min(start + chunkSize - 1, totalSize - 1)
          fetch(assetURL, {
            headers: {
              Range: `bytes=${start}-${end}`,
              responseType: 'arraybuffer',
            },
          }).then(async (response) => {
            response = await response.arrayBuffer()
            index++
            sourceBuffer.appendBuffer(response)
            send()
            video.play()
          })
        }
      }

      send()
    }
  }

