const updateProfile = () => {
	let tmp = this.state.profileData;
	tmp.email = this.state.email;
	tmp.firstname = this.state.firstname;
	tmp.lastname = this.state.lastname;
	tmp.phoneNumber = this.state.phoneNumber;
	this.setState({ profileData: tmp, editProfilModal: false });
	message.success("Profile well updated", 3);
};

export default updateProfile;
