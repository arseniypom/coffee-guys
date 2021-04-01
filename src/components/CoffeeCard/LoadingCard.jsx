import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingCard() {
    return (
        <ContentLoader 
        speed={2}
        width={207}
        height={415}
        viewBox="0 0 207 415"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="20" y="20" rx="0" ry="0" width="170" height="170" /> 
        <rect x="0" y="223" rx="4" ry="4" width="207" height="22" /> 
        <rect x="17" y="264" rx="10" ry="10" width="178" height="90" /> 
        <rect x="0" y="375" rx="4" ry="4" width="84" height="25" /> 
        <rect x="113" y="363" rx="20" ry="20" width="89" height="45" />
      </ContentLoader>
    )
}

export default LoadingCard
