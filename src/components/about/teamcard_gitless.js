import React from "react"
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import teamCardStyle from "../../styles/about/teamcard.module.scss"

import Container from "react-bootstrap/Container";

const TeamCardGitless = ({ name, title, link_linkedin, link_mail, img }) => {
  return (
      <Container
        fluid="true"
        className={teamCardStyle.teamCardOuter}        
      >
        <BackgroundImage
          fluid={img}
          className={teamCardStyle.teamCardInner}
          style={{
            height: `inherit`,
            padding: `0`,
            margin: `0`,
            overflow: `hidden`,            
          }}
        >
          <p className={teamCardStyle.name}>{name}</p>
          <p className={teamCardStyle.post}>
            <b>{title}</b>
          </p>
          <p className={teamCardStyle.tap}>(TAP TO CONNECT)</p>
        </BackgroundImage>
      <div className={teamCardStyle.socialIconContainer}>
        <div className={teamCardStyle.socialIconWrapper}>
          <div className={teamCardStyle.icon}>
            <a aria-label="LinkedIn" href={link_linkedin}>
              <FaLinkedin />
            </a>
          </div>
          <div className={teamCardStyle.icon}>
            <a aria-label="Mail" href={link_mail}>
              <FaEnvelope color="#00bce4" />
            </a>
          </div>
        </div>
      </div>
      </Container>    
  )}
  
  export default TeamCardGitless
