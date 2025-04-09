import React from 'react';
import Bookmark from './Bookmark';
const BookmarkCollection = ({markedBook}) => {
    return (
        <div>
            {
                markedBook.map(bookmark => <Bookmark key = {bookmark.id} markedBook={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default BookmarkCollection;