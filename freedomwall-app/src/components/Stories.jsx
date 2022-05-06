import { useContext } from 'react';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Posts, goToTop } from '../Context/ContextAPI';

function Stories() {
	const [users] = useContext(Posts);

	return (
		<Container>
			<div className="row mt-3">
				<p className="lead text-center mt-3">
					There are {users.length} posts found.
				</p>
				{users.map((item) => {
					return (
						<Container key={item.id} className="col-sm-6 col-md-4 col-lg-3 ">
							<Link
								to={`/post/${item.id}`}
								className="text-decoration-none text-dark d-flex"
							>
								<Card
									className={`p-3 mt-2 w-100 border border-${item.color}`}
									style={{ height: '250px' }}
									onClick={() => goToTop()}
								>
									{item.title.length > 30 ? (
										<h5 className="fw-bold">{item.title.substr(0, 30)}...</h5>
									) : (
										<h5 className="fw-bold">{item.title}</h5>
									)}

									<small className="mb-3 text-secondary">
										{item.dateAndTime}
									</small>

									{item.content.length > 100 ? (
										<p className=" text-secondary">
											{item.content.substr(0, 100)}...
										</p>
									) : (
										<p className=" text-secondary">{item.content}</p>
									)}
								</Card>
							</Link>
						</Container>
					);
				})}
			</div>
		</Container>
	);
}

export default Stories;
