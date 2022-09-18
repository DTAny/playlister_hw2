import React, { Component } from 'react';

export default class EditSongModal extends Component {
    handleEdit = () => {
        let title = document.getElementById("edit-song-modal-title-textfield").value;
        let artist = document.getElementById("edit-song-modal-artist-textfield").value;
        let youTubeId = document.getElementById("edit-song-modal-youTubeId-textfield").value;
        let song = {title: title, artist: artist, youTubeId: youTubeId};
        this.props.editSongCallback(song);
    }
    render() {
        const { hideEditSongModalCallback } = this.props;
        return (
            <div className="modal" id="edit-song-modal" data-animation="zoomInOut">
            <div className="modal-root" id='edit-song-root'>
                <div className="modal-north">
                    Edit Song
                </div>                
                <div className="modal-center">
                    <div className='modal-prompt' id="title-prompt">Title:</div>
                    <input className='modal-textfield' id="edit-song-modal-title-textfield"/>
                    <div className='modal-prompt' id="artist-prompt">Artist:</div>
                    <input className='modal-textfield' id="edit-song-modal-artist-textfield"/>
                    <div className='modal-prompt' id="you-tube-id-prompt">YouTube Id:</div>
                    <input className='modal-textfield' id="edit-song-modal-youTubeId-textfield"/>
                </div>
                <div className="modal-south">
                    <input type="button" id="edit-song-confirm-button" className="modal-button" value='Confirm' onClick={this.handleEdit}/>
                    <input type="button" id="edit-song-cancel-button" className="modal-button" value='Cancel' onClick={hideEditSongModalCallback}/>
                </div>
            </div>
        </div>
        );
    }
}