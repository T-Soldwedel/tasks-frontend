import React from 'react'
import "../styles/SidebarRight.css"

const SideBarRight = () => {
  return (
    <div className="sidebar-right">
      <div className="img-placeholder"></div>
      <div className="iframe-container">
          <iframe src="https://www.youtube.com/embed/jfKfPfyJRdk?si=GBmuJzMrnSzkndM1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
    </div>
  )
}

export default SideBarRight