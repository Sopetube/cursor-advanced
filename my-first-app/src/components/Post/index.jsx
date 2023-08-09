import React from 'react'
import styles from './post.module.css'

function Post({post}) {
  return (
    <div className={styles.post}>
        <div className={styles.head}>
            <img src={post.author.photo} alt="avatar" width="50px" className={styles.avatar}/>
            <h2>{post.author.name}</h2>
            <span className={styles.nickname}>{post.author.nickname}</span>
            <span className={styles.date}>{post.date}</span>
        </div>
        <div className={styles.content}>
            <div className='text_content'>{post.content}</div>
            <div className='img_content'><img src={post.image} alt="titka" width="650px" className={styles.content_image}/></div>
    <div className={styles.socials}>
    <span>{post.chat} 482</span>
    <span>{post.repost} 146</span>
    <span>{post.like} 887</span>
    <span>{post.download}</span>
    </div>
        </div>
    </div>
  );
}

export default Post;
