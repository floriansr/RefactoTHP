import React, { useContext } from "react";

import DataContext from "context/DataContext";

import { Col, Row, Modal, List, Tag, Button } from "antd/es";

const PreviewPublicationModals = () => {
	const { data, setData } = useContext(DataContext);

	const updatePic = () => {
		alert(
			"J'update la publcation avec l'id : " +
				data.profileData.posts[data.previewItem].id
		);
	};

	const deletePic = () => {
		alert(
			"Je supprime la publcation avec l'id : " +
				data.profileData.posts[data.previewItem].id
		);
	};

	return (
		<>
			<Modal
				width={520}
				visible={data.previewPublicationModal}
				onCancel={() =>
					setData({ ...data, previewPublicationModal: false })
				}
				footer={
					<Row type="flex">
						<Col span={12} className="text-center">
							<Button
								type="ghost"
								icon="edit"
								onClick={updatePic}
							>
								Edit
							</Button>
						</Col>
						<Col span={12} className="text-center">
							<Button
								type="danger"
								icon="delete"
								onClick={deletePic}
							>
								Delete
							</Button>
						</Col>
					</Row>
				}
			>
				<Row type="flex" align="middle">
					<Col xs={24} md={12} className="text-center">
						<img
							src={`${
								data.profileData.posts[data.previewItem]
									.imageUrl
							}`}
							width={200}
							height={200}
							alt={`${
								data.profileData.posts[data.previewItem]
									.description
							}`}
						/>
					</Col>

					<Col xs={24} md={12}>
						<div>
							<b>Description: </b>
							<p>
								{
									data.profileData.posts[data.previewItem]
										.description
								}
							</p>
						</div>
						<div>
							<b>Hashtag:</b>
							<List
								grid={{ gutter: 16, column: 2 }}
								dataSource={
									data.profileData.posts[data.previewItem]
										.hashtags
								}
								renderItem={(tag) => (
									<List.Item>
										<Tag>{`${tag}`}</Tag>
									</List.Item>
								)}
							/>
						</div>

						<div>
							<b>Mention:</b>

							<List
								grid={{ gutter: 16, column: 2 }}
								dataSource={
									data.profileData.posts[data.previewItem]
										.mentions
								}
								renderItem={(user) => (
									<List.Item>
										<Tag>{`@${user}`}</Tag>
									</List.Item>
								)}
							/>
						</div>
					</Col>
				</Row>
			</Modal>
		</>
	);
};

export default PreviewPublicationModals;
