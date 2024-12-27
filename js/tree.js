var phoneWidth =  parseInt(window.screen.width);
var phoneScale = phoneWidth/640;
var ua = navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)){
    var version = parseFloat(RegExp.$1);
    if(version>2.3){
        document.write('<meta name="viewport" content="width=640, minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
    }else{
        document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
    }
} else {
    document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
}

const rangeVideo = () => {
    const totalSize = 5524488
    const chunkSize = 500000
    const numChunks = Math.ceil(totalSize / chunkSize)
    let chunk = new Blob()
    let index = 0

    send()
    function send() {
      if (index >= numChunks) return
      const start = index * chunkSize
      const end = Math.min(start + chunkSize - 1, totalSize - 1)
      fetch('url', {
        headers: { Range: `bytes=${start}-${end}` },
      })
        .then((response) => {
          index++
          return response.blob()
        })
        .then((blob) => {
          send()
          chunk = new Blob([chunk, blob], { type: 'video/mp4' })
          const url = URL.createObjectURL(chunk)
          const currentTime = video.currentTime
          video.src = url
          video.currentTime = currentTime
          video.play()
        })
    }
  }

  
