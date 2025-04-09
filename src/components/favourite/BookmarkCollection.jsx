import React from 'react';
import Bookmark from './Bookmark';
const BookmarkCollection = ({markedBook,handleDeleteBookMark}) => {
    return (
        <div>
            {
                markedBook.map(bookmark => <Bookmark key = {bookmark.id} markedBook={bookmark} handleDeleteBookMark={handleDeleteBookMark}></Bookmark>)
            }
        </div>
    );
};

export default BookmarkCollection;