import jsTPS_Transaction from "../common/jsTPS.js"

export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, index, newSong, oldSong) {
        super();
        this.app = initApp;
        this.index = index;
        this.newSong = newSong;
        this.oldSong = oldSong;
    }

    doTransaction() {
        this.app.editSong(this.index, this.newSong);
    }
    
    undoTransaction() {
        this.app.editSong(this.index, this.oldSong);
    }
};
