import React, { useContext } from "react";

import DataContext from "context/DataContext";

import MentionsTagsComponent from "components/MentionTagsComponent";
import { Col, Row, Modal, Input } from "antd/es";

const PreviewUploadPicture = () => {
	const { data, setData } = useContext(DataContext);

	const uploadPicture = () => {
		alert(
			"J'upload une image avec la description : " +
				data.description +
				" et les hashtags " +
				data.hashtags +
				" et les mentions " +
				data.mentions
		);
	};

	const updateMentions = (value) => {
		setData({ ...data, mentions: value });
	};

	const updateHashtags = (value) => {
		setData({ ...data, hashtags: value });
	};

	return (
		<>
			<Modal
				title="Upload a picture"
				okText="Upload"
				visible={data.uploadModal}
				onOk={uploadPicture}
				onCancel={() => setData({ ...data, uploadModal: false })}
			>
				<Row type="flex" justify="center" className="input-container">
					<Col span={20}>
						<b>Description:</b>
						<Input
							id="description"
							title="Description"
							type="text"
							value={data.description}
							onChange={(e) =>
								setData({
									...data,
									description: e.target.value,
								})
							}
						/>
					</Col>
				</Row>
				<MentionsTagsComponent
					type="mentions"
					value={data.mentions}
					title="Mention a user"
					setValue={updateMentions}
				/>
				<MentionsTagsComponent
					type="tags"
					value={data.hashtags}
					title="Hashtags"
					setValue={updateHashtags}
				/>
			</Modal>
		</>
	);
};
export default PreviewUploadPicture;
