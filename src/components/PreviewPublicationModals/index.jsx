import React from "react";

import { Col, Row, Modal, List, Tag } from "antd/es";

const PreviewPublicationModals = () => {
	return (
		<>
			<Modal
				width={520}
				visible={state.previewPublicationModal}
				onCancel={() => setState({ previewPublicationModal: false })}
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
							src={
								state.profileData.posts[state.previewItem]
									.imageUrl
							}
							width={200}
							height={200}
							alt={
								state.profileData.posts[state.previewItem]
									.description
							}
						/>
					</Col>

					<Col xs={24} md={12}>
						<div>
							<b>Description: </b>
							<p>
								{
									state.profileData.posts[state.previewItem]
										.description
								}
							</p>
						</div>
						<div>
							<b>Hashtag:</b>
							<List
								grid={{ gutter: 16, column: 2 }}
								dataSource={
									state.profileData.posts[state.previewItem]
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
									state.profileData.posts[state.previewItem]
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
			;
		</>
	);
};

export default PreviewPublicationModals;
