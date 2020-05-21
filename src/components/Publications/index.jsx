import React, { useContext } from "react";

import DataContext from "context/DataContext";

import { Card, Col, Icon, Row } from "antd/es";

const Publications = () => {
	const { data, setData } = useContext(DataContext);

	const openPreview = (postNumber) => {
		setData({
			previewItem: postNumber,
			previewPublicationModal: true,
		});
	};

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
								src={data.profileData.posts[0].imageUrl}
								width={200}
								height={200}
								alt={data.profileData.posts[0].imageUrl}
							/>
						</Card>
						<Card
							bordered
							className="card-pubs"
							onClick={() => openPreview(1)}
						>
							<img
								src={data.profileData.posts[1].imageUrl}
								width={200}
								height={200}
								alt={data.profileData.posts[1].imageUrl}
							/>
						</Card>
						<Card
							bordered
							className="card-pubs"
							onClick={() => openPreview(2)}
						>
							<img
								src={data.profileData.posts[2].imageUrl}
								width={200}
								height={200}
								alt={data.profileData.posts[2].imageUrl}
							/>
						</Card>
					</Col>
				</Col>
			</Row>
		</>
	);
};
export default Publications;
