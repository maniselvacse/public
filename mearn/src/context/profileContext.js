import React from "react";

const profileContext = React.createContext({
  profileError: null, profileLoader: false, profileData: null
});

export default profileContext;