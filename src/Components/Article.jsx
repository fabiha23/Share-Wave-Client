import React from 'react';

const Article = ({article}) => {
    return (
        <div>
            {article&& <>{article.title} </>}
        </div>
    );
};

export default Article;