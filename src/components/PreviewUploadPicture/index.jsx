import React from "react";

import MentionsTagsComponent from "components/MentionTagsComponent";
import { Col, Row, Modal, Input } from "antd/es";

const PreviewUploadPicture = () => {
	return (
		<>
			<Modal
				title="Upload a picture"
				okText="Upload"
				visible={state.uploadModal}
				onOk={uploadPicture}
				onCancel={() => setState({ uploadModal: false })}
			>
				<Row type="flex" justify="center" className="input-container">
					<Col span={20}>
						<b>Description:</b>
						<Input
							id="description"
							title="Description"
							type="text"
							value={state.description}
							onChange={(e) =>
								setState({ description: e.target.value })
							}
						/>
					</Col>
				</Row>
				<MentionsTagsComponent
					type="mentions"
					value={state.mentions}
					title="Mention a user"
					setValue={updateMentions}
				/>
				<MentionsTagsComponent
					type="tags"
					value={state.hashtags}
					title="Hashtags"
					setValue={updateHashtags}
				/>
			</Modal>
		</>
	);
};
export default PreviewUploadPicture;
