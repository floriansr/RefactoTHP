import React, { useContext } from "react";

import DataContext from "context/DataContext";

import { Avatar, Button, Card, Col, Icon, Row } from "antd/es";

const ProfilDetails = () => {
	const { data, setData } = useContext(DataContext);

	return (
		<>
			<Row type="flex" align="middle" justify="center">
				<Col sm={16} xs={24}>
					<Card bordered>
						<Row type="flex" align="middle" justify="center">
							<Col md={14} sm={16} xs={24}>
								<Row type="flex" justify="space-between">
									<Col span={10} className="text-center">
										<Avatar
											size={100}
											icon="user"
											className="profil-pic"
											src={
												data.profileData.profilePicture
											}
										/>
										<h3>{`${data.profileData.firstname} ${data.profileData.lastname}`}</h3>
									</Col>
									<Col span={10}>
										<p>
											<Icon
												type="user"
												className="p-icon"
											/>
											{data.profileData.username}
										</p>
										<p>
											<Icon
												type="mail"
												className="p-icon"
											/>
											{data.profileData.email}
										</p>
										<p>
											<Icon
												type="phone"
												className="p-icon"
											/>
											{data.profileData.phoneNumber}
										</p>
									</Col>
								</Row>
							</Col>
							<Col
								md={10}
								sm={16}
								xs={24}
								className="text-center"
							>
								<Button
									type="ghost"
									icon="setting"
									onClick={() =>
										setData({ editProfilModal: true })
									}
								>
									Edit account
								</Button>
								<br />
								<br />
								<Button
									type="ghost"
									icon="upload"
									onClick={() =>
										setData({ uploadModal: true })
									}
								>
									Upload a picture
								</Button>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</>
	);
};
export default ProfilDetails;
