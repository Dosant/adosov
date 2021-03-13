/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/ad.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.summary && (
        <p>
          Hi, I'm <strong>Anton</strong>.
          <br/>
          I am building <a href={'https://meetter.app'} target={"_blank"}>Meetter</a>, a tool that keeps meeting fatigue away from dozens of remote teams scattered across the globe.
          <br/>
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You can follow my journey on Twitter.
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
