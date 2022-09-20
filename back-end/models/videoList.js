const fs = require('fs');
const path = require('path');

const pathJSON = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'videoList.json'
)

const videoList = {
    trailler: function (id) {
        fs.readFile(pathJSON, (err, data) => {
            let video = JSON.parse(data);
            if (!err) {
                let listvideo = video.map(item => {
                    if (item.id == id) {
                        return item
                    }
                })

                let itemPublic = listvideo.videos.sort(function (a, b) {
                    Date.parse(a.published_at) < Date.parse(b.published_at) ? 1 : -1
                })


                let item = itemPublic.map(videoItem => {
                    if (videoItem.official == true
                        && videoItem.site == 'YouTube') {
                        return videoItem;
                    }
                })
                return item;
            }
        })
    }
}
exports.videoList = videoList;