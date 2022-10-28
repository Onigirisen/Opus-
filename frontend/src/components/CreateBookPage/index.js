import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from '../../Modal/Modal'
import { createBook } from "../../store/books";
import './CreateBookPage.css'

const CreateBookPage = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [modalOpen, setModalOpen] = useState(false)
    const [coverColor, setCoverColor] = useState('#F8AAAA')
    const [bookTitle, setBookTitle] = useState('Insert Title')
    const [genre, setGenre] = useState('Fiction')


    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {title: bookTitle, coverColor: coverColor, genre: genre, user: sessionUser._id, public: true}
        dispatch(createBook(book))
        setModalOpen(true);
    }

    const handleModalClose = () => {
        setModalOpen(false);
    }

    return  (
        <>

        <Modal modalOpen={modalOpen} modalClose={handleModalClose}>
            <div className="book-created-div">
                <button className="book-created-exit-btn">X</button>
                <div>{bookTitle} has been created. Go to your profile page to check it out.</div>
            </div>
        </Modal>

        <div className="create-book-container">
            <div className="create-book-cover" style={{backgroundColor: coverColor}}>
                <div className="create-book-spine">

                </div>
                <div className="create-book-text-container">
                    <div className="create-book-title">
                        {bookTitle}
                    </div>
                    <div className="create-book-genre">
                        genre: {genre}
                    </div>
                    <div className="create-book-author">
                        Author: {sessionUser.username}
                    </div>
                    <div className="create-book-cc-txt">Cover Color : 
                        <input type="color" className="colorpicker" onChange={e => setCoverColor(e.target.value)} defaultValue={"#F8AAAA"} />
                    </div>
                </div>
            </div>
            <form className="create-book-form" onSubmit={handleSubmit}>
                <div className="create-book-title-bio-container">
                    <input type="text" className="create-book-title-text" spellCheck="false" value={bookTitle} onChange={e => setBookTitle(e.target.value)} />
                    <div className="create-book-genre-div">genre</div>
                    <input type="text" className="create-book-genre-text" spellCheck="false" value={genre} onChange={e => setGenre(e.target.value)}/>
                    <div className="create-book-description-text">Description</div>
                    <textarea className="create-book-description" spellCheck="false"></textarea>
                </div>
                <button type="submit" className="create-book-button">Create Book</button>
            </form>
        </div>
        </>
    )
}

export default CreateBookPage;