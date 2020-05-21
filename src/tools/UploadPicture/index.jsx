const uploadPicture = () => {
  alert(
    "J'upload une image avec la description : " +
      this.state.description +
      " et les hashtags " +
      this.state.hashtags +
      " et les mentions " +
      this.state.mentions
  );
};

export default uploadPicture;
