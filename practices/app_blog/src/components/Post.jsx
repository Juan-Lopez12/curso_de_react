import { Navigate, useParams } from 'react-router-dom';
import posts from '../data/posts';

const Post = () => {
	const { id } = useParams();

	return (
		<>
			{posts[id - 1] ? (
				<div>
					<h1>Post! {posts[id - 1].title} </h1>
					<p>{posts[id - 1].text}</p>
				</div>
			) : (
				<Navigate to={'/'} />
			)}
		</>
	);
};

export default Post;
