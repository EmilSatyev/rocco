import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () =>  (
  <ContentLoader
    speed={2}
    width={234}
    height={138}
    viewBox="0 0 234 138"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="55" y="0" rx="5" ry="5" width="179" height="15" />
    <rect x="55" y="20" rx="5" ry="5" width="151" height="15" />
    <rect x="55" y="70" rx="5" ry="5" width="179" height="15" />
    <rect x="55" y="97" rx="5" ry="5" width="166" height="15" />
    <rect x="55" y="123" rx="5" ry="5" width="135" height="15" />
    <rect x="0" y="0" rx="5" ry="5" width="42" height="35" />
  </ContentLoader>
)
export default Skeleton