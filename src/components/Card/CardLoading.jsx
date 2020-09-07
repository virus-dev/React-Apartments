import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={267}
    height={231}
    viewBox="0 0 267 231"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="2" y="1" rx="3" ry="3" width="265" height="149" /> 
    <rect x="11" y="160" rx="6" ry="6" width="150" height="19" /> 
    <rect x="11" y="185" rx="6" ry="6" width="180" height="19" /> 
    <rect x="11" y="210" rx="6" ry="6" width="160" height="19" />
  </ContentLoader>
)

export default MyLoader