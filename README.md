# YTDownloaderAPI
Nodejs api for downloading video/audio from youtube with use of 

## Setup

To setup this project, simply clone the project and move into the project folder.
```
git clone https://github.com/VakeDomen/DC-sticky-notes.git
```
First you need to setup the ```.env``` file for the project. Move into the ```YTDownloaderAPI``` directory and make a copy of ```.env.sample``` and rename it to ```.env```. Than open the file and specify the required values.

After cloning run 
```
npm install
npm start
```

## Usage
Server opens an api endpoint at ```localhost:port/download```. The server listenes to ```GET``` requests. To specify the video you want to download define the ```URL``` query as such:
```
http://localhost:PORT/download?URL=https://www.youtube.com/watch?v=XYZ
```

You may also specify the quallity of the downloaded video with ```quality``` key.
```
http://localhost:PORT/download?URL=https://www.youtube.com/watch?v=XYZ&quality=highest
```
Supported qualities are ```highest```, ```lowest```, ```highestaudio```, ```lowestaudio```, ```highestvideo``` and ```lowestvideo```. The default is set to ```highest```.
Also there is the option to specify the type of returned content with the ```type``` key.

```
http://localhost:PORT/download?URL=https://www.youtube.com/watch?v=XYZ&type=videoonly
```

Supported qualities are ```audioandvideo```, ```video```, ```videoonly```, ```audio```, and ```audioonly```. The default is set to ```audioonly```.
