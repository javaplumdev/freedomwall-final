import React, { useState, useContext } from 'react';
import { Posts } from '../Context/ContextAPI';
import { PostContent } from '../Context/ContextAPI';

import {
	Container,
	Button,
	Card,
	Modal,
	FloatingLabel,
	Form,
} from 'react-bootstrap';

function Landingpage() {
	// Data coming from firebase config
	const [users] = useContext(Posts);

	// For modal functionalities
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// Getting datas from user inputs
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	return (
		<>
			<Container>
				<div className="row justify-content-center mb-3 mt-5">
					<h1 className="text-center my-5 py-5">
						Share your stories here anonymously..
					</h1>

					<div className="col-md-8 justify-content-center">
						<Button
							variant="dark"
							className="w-100 p-3 rounded-pill"
							onClick={handleShow}
						>
							What's on your mind?
						</Button>
					</div>
				</div>

				<div className="row">
					<p className="lead text-center mt-3">
						There are {users.length} posts found.
					</p>
					{users.map((item) => {
						return (
							<Container
								key={item.id}
								className="col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch"
							>
								<Card className="p-3 mt-2">
									<h4 className="fw-bold">{item.title}</h4>
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
							</Container>
						);
					})}
				</div>
			</Container>

			{/* For modal */}
			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Express your inner self</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FloatingLabel
						controlId="floatingInput"
						label="Title"
						className="mb-3"
						onChange={(e) => setTitle(e.target.value)}
					>
						<Form.Control type="text" />
					</FloatingLabel>
					<FloatingLabel
						controlId="floatingTextarea2"
						label="Your content here"
						onChange={(e) => setContent(e.target.value)}
					>
						<Form.Control
							as="textarea"
							style={{ height: '100px', resize: 'none' }}
						/>
					</FloatingLabel>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="dark" onClick={() => PostContent(title, content)}>
						Post
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Landingpage;
