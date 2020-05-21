import React, { useContext } from "react";

import DataContext from "context/DataContext";

import { Col, Row, Modal, Input, message } from "antd/es";

const PreviewUpdateProfil = () => {
	const { data, setData } = useContext(DataContext);

	const updateProfile = () => {
		const tmp = data.profileData;
		tmp.email = data.email;
		tmp.firstname = data.firstname;
		tmp.lastname = data.lastname;
		tmp.phoneNumber = data.phoneNumber;
		setData({ ...data, profileData: tmp, editProfilModal: false });
		message.success("Profile well updated", 3);
	};

	return (
		<>
			<Modal
				title="Edit your account"
				okText="Update"
				visible={data.editProfilModal}
				onOk={updateProfile}
				onCancel={() => setData({ ...data, editProfilModal: false })}
			>
				<Row type="flex" justify="center" className="input-container">
					<Col span={20}>
						<b>Email</b>
						<Input
							id="email"
							type="text"
							value={data.email}
							onChange={(e) =>
								setData({ ...data, email: e.target.value })
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
							value={data.firstname}
							onChange={(e) =>
								setData({ ...data, firstname: e.target.value })
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
							value={data.lastname}
							onChange={(e) =>
								setData({ ...data, lastname: e.target.value })
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
							value={data.phoneNumber}
							onChange={(e) =>
								setData({
									...data,
									phoneNumber: e.target.value,
								})
							}
						/>
					</Col>
				</Row>
			</Modal>
		</>
	);
};
export default PreviewUpdateProfil;
