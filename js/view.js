class View {
    constructor({
        onMemeChange,
        onTextUpChange,
        onTextDownChange
    }) {
        this.previewUpTextNode = document.querySelector('.js-up-text');
        this.previewDownTextNode = document.querySelector('.js-down-text');
        this.previewImageNode = document.querySelector('.js-img');

        this.settingsSelectNode = document.querySelector('.js-input-chose-mem')
        this.textUpInputNode = document.querySelector('.js-text-up-input');
        this.textDownInputNode = document.querySelector('.js-text-down-input');

        this.onMemeChange = onMemeChange;
        this.onTextUpChange = onTextUpChange;
        this.onTextDownChange = onTextDownChange;

        this.settingsSelectNode.addEventListener('change', this._handleSelectChange );
        this.textUpInputNode.addEventListener('input', this._handleTextUpChange );
        this.textDownInputNode.addEventListener('input', this._handleTextDownChange );
    };


    renderPreview(preview) {
        const {
            url,
            textUp,
            textDown
        } = preview;

        this.previewUpTextNode.innerText = textUp;
        this.previewDownTextNode.innerText = textDown;
        this.previewImageNode.src = url;
    }
//передаем список мемов. учусь генерить options
    renderMemesSelect(memes, currentMemId) {        
    memes.forEach(meme => {
    const {
        id,
        name
    } = meme;
    const optionNode = document.createElement('option');
    optionNode.setAttribute('value', id);
    optionNode.innerText = name;

    if (id === currentMemId) {
    optionNode.setAttribute('selected', true);
    }
    this.settingsSelectNode.appendChild(optionNode);
});
    }   

    _handleSelectChange = () => {
        const id = this.settingsSelectNode.value;
        this.onMemeChange(id);
    }

    _handleTextUpChange = (event) => {
        this.onTextUpChange(event.target.value);
    }

    _handleTextDownChange = (event) => {
        this.onTextDownChange(event.target.value);
    }
}   