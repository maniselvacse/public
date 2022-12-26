import React from 'react';
import {Helmet} from "react-helmet";

class Head extends React.Component {
  render () {
    return (
      <Helmet>
        <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Mearn Project</title>

        <link href="http://fonts.googleapis.com/css?family=Nunito:400,700&amp;display=swap" rel="stylesheet" />
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/assets/css/style-liberty.css'} />
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/assets/css/font-awesome.min.css'} />
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/assets/css/common.css'} />
      </Helmet>
    );
  }
};

export default Head;
