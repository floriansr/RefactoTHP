// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject

import React, { useState } from "react";

// import { updateProfile } from "tools/updateProfile";
// import { updatePic } from "tools/updatePic";
// import { deletePic } from "tools/deletePic";

// import { uploadPicture } from "tools/uploadPicture";
// import { uploadModal } from "tools/uploadModal";
// import { formatDate } from "tools/FormatDate";

// import MentionsTagsComponent from "components/MentionTagsComponent";
// import { updateMentions } from "tools/updateMentions";
// import { updateHashtags } from "tools/updateHashtags";

const App = () => {
  const [data, setData] = useState({
    editProfilModal: false,
    editPublicationModal: false,
    previewPublicationModal: false,
    previewItem: 0,
    uploadModal: false,
    description: "",
    hashtags: "",
    mentions: "",
    email: "myprofile@thp.fr",
    phoneNumber: "0601020304",
    firstname: "TheHacking",
    lastname: "Project",
    profileData: {
      username: "RefactoProject",
      email: "myprofile@thp.fr",
      phoneNumber: "0601020304",
      createdAt: "2020-02-23T07:50:17.335Z",
      firstname: "TheHacking",
      lastname: "Project",
      profilePicture:
        "https://blog.thehackingproject.org/wp-content/uploads/2019/03/short_white-1.png",
      posts: [
        {
          imageUrl:
            "https://f1.pngfuel.com/png/951/574/485/react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends-png-clip-art.png",
          description: "This is a Javascript logo",
          hashtags: ["#Javascript", "#reactJS"],
          mentions: ["TheHackingProject"],
          id: 1,
        },
        {
          imageUrl:
            "https://www.tuannguyen.tech/wp-content/uploads/2019/01/react.png",
          description: "This is the React logo",
          hashtags: ["#React", "#formation"],
          mentions: ["THP"],
          id: 2,
        },
        {
          imageUrl:
            "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4",
          description: "The Hacking Project logo",
          hashtags: ["#THP", "#TheHackingProject"],
          mentions: ["youhou", "week7"],
          id: 3,
        },
      ],
    },
  });
  // this.formatDate = this.formatDate.bind(this);
  // this.deletePic = this.deletePic.bind(this);
  // this.updatePic = this.updatePic.bind(this);
  // this.uploadPicture = this.uploadPicture.bind(this);
  // this.updateHashtags = this.updateHashtags.bind(this);
  // this.updateMentions = this.updateMentions.bind(this);
  // this.updateProfile = this.updateProfile.bind(this);

  const openPreview = (postNumber) => {
    setData({
      previewItem: postNumber,
      previewPublicationModal: true,
    });
  };

  return <></>;
};

export default App;

// <p>
//   <Icon type="calendar" className="p-icon" />
//   {this.formatDate(this.state.profileData.createdAt)}
// </p>
