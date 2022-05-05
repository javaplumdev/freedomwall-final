import React, { useState, useContext } from 'react';
import { Posts } from '../Context/ContextAPI';

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

	const PostContent = useContext(Posts);

	return (
		<>
			<Container>
				<div className="row justify-content-center mb-3 mt-5">
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
					{users.map((item) => {
						return (
							<Container key={item.id} className="col-md-8">
								<Card className="p-3 mt-2">
									<div className="d-flex justify-content-between align-items-center">
										<h4 className="font-weight-bold">{item.title}</h4>
										<small>Date posted</small>
									</div>
									<p className="lead text-secondary">{item.content}</p>
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
