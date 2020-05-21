import React from "react";

import { Card, Col, Icon, Row } from "antd/es";

const Publications = () => {
	return (
		<>
			<Row type="flex" justify="center">
				<Col sm={18} xs={24}>
					<Col span={24} className="container text-center">
						<h2>
							<Icon type="save" />
							<span className="span-icon">Publications</span>
						</h2>
						<Card
							bordered
							className="card-pubs"
							onClick={() => openPreview(0)}
						>
							<img
								src={state.profileData.posts[0].imageUrl}
								width={200}
								height={200}
								alt={state.profileData.posts[0].imageUrl}
							/>
						</Card>
						<Card
							bordered
							className="card-pubs"
							onClick={() => openPreview(1)}
						>
							<img
								src={state.profileData.posts[1].imageUrl}
								width={200}
								height={200}
								alt={state.profileData.posts[1].imageUrl}
							/>
						</Card>
						<Card
							bordered
							className="card-pubs"
							onClick={() => openPreview(2)}
						>
							<img
								src={state.profileData.posts[2].imageUrl}
								width={200}
								height={200}
								alt={state.profileData.posts[2].imageUrl}
							/>
						</Card>
					</Col>
				</Col>
			</Row>
		</>
	);
};
export default Publications;
