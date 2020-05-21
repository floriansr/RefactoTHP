import React from "react";

import { Col, Row, Modal, Input } from "antd/es";

const PreviewUpdateProfil = () => {
	return (
		<>
			<Modal
				title="Edit your account"
				okText="Update"
				visible={state.editProfilModal}
				onOk={updateProfile}
				onCancel={() => setState({ editProfilModal: false })}
			>
				<Row type="flex" justify="center" className="input-container">
					<Col span={20}>
						<b>EMail</b>
						<Input
							id="email"
							type="text"
							value={state.email}
							onChange={(e) =>
								setState({ email: e.target.value })
							}
						/>
					</Col>
				</Row>
				<Row type="flex" justify="center" className="input-container">
					<Col span={20}>
						<b>Firstname</b>
						<Input
							id="firstname"
							type="text"
							value={state.firstname}
							onChange={(e) =>
								setState({ firstname: e.target.value })
							}
						/>
					</Col>
				</Row>
				<Row type="flex" justify="center" className="input-container">
					<Col span={20}>
						<b>Lastname</b>
						<Input
							id="lastname"
							type="text"
							value={state.lastname}
							onChange={(e) =>
								setState({ lastname: e.target.value })
							}
						/>
					</Col>
				</Row>
				<Row type="flex" justify="center" className="input-container">
					<Col span={20}>
						<b>Phone number</b>
						<Input
							id="email"
							type="text"
							value={state.phoneNumber}
							onChange={(e) =>
								setState({ phoneNumber: e.target.value })
							}
						/>
					</Col>
				</Row>
			</Modal>
		</>
	);
};
export default PreviewUpdateProfil;
