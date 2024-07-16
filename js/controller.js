class Controller {
    constructor() {
        this.model = new Model({

            onMemeChange:this.handleModelMemesChange,
            onCurrentMemeIdChange:this.handleModelCurrentMemeIdChange,
            onTextUpChange: this.handleModelUpChange,
            onTextDownChange: this.handleModelDownChange


        });
        this.view = new View({
            onMemeChange: this.handleViewMemesChange,
            onTextUpChange: this.handleViewTextUpChange,
            onTextDownChange: this.handleViewTextDownChange
        });
        this.api = new API();
    }

    init() {
        this.api.getMemes()
            .then(data => {
                const memes=data.data.memes;
               this.model.setMemes(memes); 
            })
        
    }

    handleModelMemesChange = () => {
        this.view.renderMemesSelect(this.model.getMemes(), this.model.getCurrentMemeId());
    }


   

    handleModelCurrentMemeIdChange=()=> {
        this.view.renderPreview(this.model.getPreview());
    }
    handleModelUpChange = () => {
        this.view.renderPreview(this.model.getPreview());
    }

    handleModelDownChange = () => {
        this.view.renderPreview(this.model.getPreview());
    }


    handleViewMemesChange = (id) => {
        this.model.setCurrentMemeId(id);
    }

    handleViewTextUpChange = (text) => {
         //добавить проверку на количество символов 
        this.model.setTextUp(text);
    }
    handleViewTextDownChange = (text) => {
        //добавить проверку на количество символов 
        this.model.setTextDown(text);
    }

   
}