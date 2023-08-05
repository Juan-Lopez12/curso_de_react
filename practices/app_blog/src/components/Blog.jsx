import { Link } from 'react-router-dom';
import posts from '../data/posts';

const Blog = () => {
	return (
		<div>
			<h2>Blog</h2>
			<ul>
				{posts.map((post) => {
					return (
						<li key={post.id}>
							<Link to={`/post/${post.id}`}>{post.title}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Blog;
