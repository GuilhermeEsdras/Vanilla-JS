function Video(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const video = new Video('Olá manolo', 123)
console.log(video);

// simulando new
function novoObjeto(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const video2 = novoObjeto(Video, 'Olá manolo', 123)
console.log(video2);