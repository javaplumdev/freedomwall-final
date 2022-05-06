import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Posts } from '../Context/ContextAPI';
import { Container, Card } from 'react-bootstrap';

function PostContent() {
	const { id } = useParams();
	const [users] = useContext(Posts);

	const filtered = users.filter((item) => item.id !== id);

	const limitedFilter = filtered.slice(0, 3);

	return (
		<Container>
			<div className="row">
				<div className="col-md-8 mt-4 pt-4">
					{users.map((item) => {
						if (item.id === id) {
							return (
								<div className="mt-4 pt-4 " key={item.id}>
									<h3 className="display-6">{item.title}</h3>
									<p className="mb-3 text-secondary">{item.dateAndTime}</p>
									<p className=" text-dark lead fs-4">{item.content}</p>
								</div>
							);
						}
					})}
				</div>
				<div className="col-md-4 mt-5 pt-4">
					<h3 className="mb-3">Discover some stories</h3>
					{limitedFilter.map((item) => {
						return (
							<Link
								to={`/post/${item.id}`}
								className="text-decoration-none text-dark d-flex"
							>
								<Card
									className={`p-3 mt-2 w-100 border border-${item.color}`}
									style={{ height: '250px' }}
								>
									<div className="mt-4 " key={item.id}>
										<h5 className="fw-bold">{item.title}</h5>
										<small className="mb-3 text-secondary">
											{item.dateAndTime}
										</small>
										<p className=" text-secondary">{item.content}</p>
									</div>
								</Card>
							</Link>
						);
					})}
				</div>
			</div>
		</Container>
	);
}

export default PostContent;
