import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from '../Avatar/Avatar';

import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;

}

export function Comment({content, onDeleteComment}: CommentProps) {

const [likeCount, setLikeCount] = useState(0)

function handleDeleteComment() {
  onDeleteComment(content)
  
}

function handleLikeComment() {
  setLikeCount((state) => {
    return state + 1
  })

}

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt=""/>
      <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Millena Limaverde</strong>
            <time title="26 de Outubro às 18:06h" dateTime="2023-10-26 18:06:40">Cerca de 1h atras</time>
          </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>

        </header>
        <p>{content}</p>


      </div>
      <footer>
        <button onClick={handleLikeComment}>
          <ThumbsUp size={20} />
          Aplaudir <span>{likeCount}</span>
        </button>
      </footer>
      </div>
    </div>
  );
}
