const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use(cors());

app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});
app.get('/download', (req,res) => {
    const URL = req.query.URL;
    const videoOptions = {
        quality:    req.query.quality || 'highestvideo',
        filter:     req.query['type'] || 'audioonly',
    }
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(URL, videoOptions).pipe(res);
});

app.get("/help", (req, res) => {
    res.send({
        query: {
            usage: '<url>/download?key=value&...&keyn=valuen'
        },
        filters: [
            {
                key: 'URL',
                usage: '<url>/download?URL=<youtube video url>',
                values: [
                    'any valid yt url'    
                ]
            },
            {
                key: 'type',
                usage: '<url>/download?type=<type>',
                values: [
                    'audioandvideo',
                    'video',
                    'videoonly',
                    'audio',
                    'audioonly'    
                ]
            },
            {
                key: 'quality',
                usage: '<url>/download?quality=<quality>',
                values: [
                    'highest',
                    'lowest',
                    'highestaudio',
                    'lowestaudio',
                    'highestvideo',
                    'lowestvideo' 
                ]
            },
        ]
    })
})