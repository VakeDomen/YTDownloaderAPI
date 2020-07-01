const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const conf = require("./config");
const sanitizer = require("./sanitizer");

require('dotenv').config()
if (!process.env.PORT) {
    console.log("No port specified!");
    process.exit(0);
}

app.use(cors());

app.listen(process.env.PORT, () => {
    console.log('Server Works !!! At port ' + process.env.PORT);
});
app.get('/download', (req,res) => {
    const URL = req.query.URL;
    const videoOptions = {
        quality:    sanitizer.checkQualityInput(req.query.quality) || 'highest',
        filter:     sanitizer.checkTypeInput(req.query.type) || 'audioonly',
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
                values: conf.types
            },
            {
                key: 'quality',
                usage: '<url>/download?quality=<quality>',
                values: conf.qualities
            },
        ]
    })
})