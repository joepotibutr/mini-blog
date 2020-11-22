import React from 'react'
import { CardWrapper } from './styled'
import userLogo from '../../assets/user.svg'

export interface Card {
    _id: string;
    title: string;
    content: string;
    author: string;
    status: string;
    category: string
    updatedAt: string;
}

interface Props {
    card: Card
    actions: boolean
    onEditBlog: (id: string) => void
    onDeleteBlog: (id: string) => void
    onOpenBlogModal: (id: string) => void
}

export default ({ card, actions, onEditBlog, onDeleteBlog, onOpenBlogModal }: Props) => {
    const updateTime = new Date(card.updatedAt).toDateString()
    return (
        <CardWrapper>
            <div>
            <span className="category"><b>{card.category}</b></span>
            {actions && 
            <span>
                <span onClick={() => onOpenBlogModal(card._id)}>
                EDIT
                </span>
                <span onClick={() => onDeleteBlog(card._id)}>
                X
                </span>
            </span>}
            </div>
            <div className="title-body">
                <p className="title">{card.title}</p>
            </div>
            <div className="author-body">
                <span><img className="thumbnail" src={userLogo} /></span>
                <label className="author">{card.author}</label>
            </div>
            <label className="date">{updateTime}</label>
        </CardWrapper>
    )
}
