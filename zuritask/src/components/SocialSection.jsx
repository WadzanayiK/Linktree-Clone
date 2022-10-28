import React from "react";
import "./socialSection.scss";
import { SlackIconSvg, GithubIconSvg } from "../images/Icons";

export const SocialSection = () => {
  return (
    <div className="socialContainer">
      <div className="socialItems">
        <a
          id="slack"
          href="https://app.slack.com/client/T042F7V19Q8/C041V6WKAUS"
          target={"_blank"}
          rel="noreferrer"
        >
          <SlackIconSvg />
        </a>

        <a
          id="slack"
          href="https://github.com/WadzanayiK"
          target={"_blank"}
          rel="noreferrer"
        >
          <GithubIconSvg />
        </a>
      </div>
    </div>
  );
};