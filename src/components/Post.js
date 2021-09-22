import React from "react";
const Post = ({ article }) => {
  console.log(article);
  const { title, video, question } = article.fields;
  return (
    <div className="post">
      <section>{question}</section>
      {video && (
        <video
          className="image"
          src={video.fields.file.url}
          title={title}
          width="640"
          height="480"
        />
      )}
    </div>
  );
};

export default Post;
