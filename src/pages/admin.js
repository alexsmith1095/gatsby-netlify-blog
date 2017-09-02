import React from 'react'
import Helmet from 'react-helmet'

class Admin extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Content Manager</title>
          <link rel="stylesheet" href="https://unpkg.com/netlify-cms@~0.4/dist/cms.css" />
        </Helmet>
        <div>
          <script src="https://unpkg.com/netlify-cms@~0.4/dist/cms.js" />
        </div>
      </div>
    )
  }
}

export default Admin
