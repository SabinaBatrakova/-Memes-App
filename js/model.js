class Model {
    constructor({
        onCurrentMemeIdChange,
        onMemeChange,
        onTextUpChange,
        onTextDownChange

    }) {
        this.memes = [];
        this.currentMemeId = null;
        this.textUp = '';
        this.textDown = '';

        this.onMemeChange = onMemeChange;
        this.onCurrentMemeIdChange = onCurrentMemeIdChange;  
        this.onTextUpChange = onTextUpChange;
        this.onTextDownChange = onTextDownChange;
    }

    getMemes() {
    return this.memes;
}
    setMemes(memes) {
    this.memes = memes; 
    this.currentMemeId = memes[0].id;
    this.onMemeChange();
    this.onCurrentMemeIdChange();
}

setTextUp(text) {
    this.textUp = text;
    this.onTextUpChange();

}

setTextDown(text) {
    this.textDown = text;
    this.onTextDownChange();

}

setCurrentMemeId(currentMemeId) {
    this.currentMemeId = currentMemeId ;
    this.onCurrentMemeIdChange();
}

getCurrentMemeId() {
    return this.currentMemeId;
}
 getPreview = () => {
        return {
            textUp: this.textUp,
            textDown: this.textDown,
            url: this.getCurrentMeme().url
        }
    }


getCurrentMeme() {
    let currentMeme = null;
    this.memes.forEach(meme => {

               if (meme.id === this.getCurrentMemeId())  {
                currentMeme = meme;
        }  
    })
    return currentMeme;
}}