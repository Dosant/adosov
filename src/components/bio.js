/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { MeetterLogo } from "../logos/meetter"
import { KibanaLogo } from "../logos/kibana"
import { ElasticLogo } from "../logos/elastic"

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
          Hi, I'm <strong>Anton</strong> <span role="none">👋</span>
          <br />I am building{" "}
          <a href={"https://www.remeet.com/"}>
            Remeet <MeetterLogo size={16} />
          </a>
          , a tool that keeps meeting fatigue away from dozens of distributed
          teams across the globe
          <br />I work on{" "}
          <a href={"https://github.com/elastic/kibana"}>
            Kibana <KibanaLogo size={14} />
          </a>{" "}
          at{" "}
          <a href={"https://elastic.co"}>
            Elastic <ElasticLogo />
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
