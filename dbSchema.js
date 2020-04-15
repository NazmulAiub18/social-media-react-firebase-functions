let db = {
  users: [
    {
      userId: "hgsugeuhgeghgiuegnsoi",
      email: "user@email.com",
      handle: "user",
      createdAt: "2020-03-16T17:24:19.958Z",
      imageUrl: "jiu9uewsgo",
      bio: "fjg lsht uc g",
      website: "fkjo gsh",
      location: "kjvuit"
    }
  ],
  screams: [
    {
      userHandle: "user",
      body: "This is a scream body",
      createdAt: "2020-03-16T17:24:19.958Z",
      likeCount: 5,
      commentCount: 3
    }
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "jgijajfnvnantpvunt",
      body: "This is a scream body",
      createdAt: "2020-03-16T17:24:19.958Z"
    }
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      screamId: "kjun5vqvtuptyvpy",
      type: "like | comment",
      createdAt: "2020-03-16T17:24:19.958Z"
    }
  ]
};

const userData = {
  //Redux data
  credentials: {
    userId: "hgsugeuhgeghgiuegnsoi",
    email: "user@email.com",
    handle: "user",
    createdAt: "2020-03-16T17:24:19.958Z",
    imageUrl: "jiu9uewsgo",
    bio: "fjg lsht uc g",
    website: "fkjo gsh",
    location: "kjvuit"
  },
  likes: [
    {
      userHandle: "user",
      screamId: "jgijajfnvnantpvunt"
    },
    {
      userHandle: "user1",
      screamId: "uc58nvnhyvncvu"
    }
  ]
};
