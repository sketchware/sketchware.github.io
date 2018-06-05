/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + "/siteConfig.js");

function imgUrl(img) {
  return siteConfig.baseUrl + "img/" + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + "docs/" + (language ? language + "/" : "") + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + "/" : "") + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: "_self"
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || "";
    return (
      <SplashContainer>
        {/* <Logo img_src={imgUrl("logo.png")} /> */}
        <div className="inner">
          <ProjectTitle />
          <a target="_blank" href="https://goo.gl/t3sasn">
            <img
              className="google-play-badge"
              src={imgUrl("images/google_play_badge.png")}
            />
          </a>
          <PromoSection>
            <Button href={docUrl("firebase-getting-started.html", language)}>
              Go to Documentation
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const FeatureItem = props => (
  <div id="feature-item">
    <img className="feature-image" src={props.src} />
    <h2 className="title">{props.title}</h2>
    <p className="description">{props.description}</p>
  </div>
);

const Features = props => (
  <div className="features">
    <FeatureItem
      src={imgUrl("icons/icons8-one_finger.png")}
      title="Setup"
      description="It only takes one click to setup"
    />
    <FeatureItem
      src={imgUrl("icons/icons8-classroom.png")}
      title="Learn"
      description="Learn from more than 50 step-by-step tutorials"
    />
    <FeatureItem
      src={imgUrl("icons/icons8-two_smartphones.png")}
      title="Create"
      description="Create apps without typing a single line of code"
    />
    <FeatureItem
      src={imgUrl("icons/icons8-google_play.png")}
      title="Publish"
      description="Publish your finished projects on the Play Store"
    />
  </div>
);

const Intro = props => (
  <div className="layout">
    <div className="text-box">
      <h2 className="title">
        Building native mobile apps using Block Language
      </h2>
      <h3 className="subtitle">Programming Simplified</h3>
      <p className="description">
        Sketchware lets you build mobile apps using lego-like blocks. Block
        language lets you go beyond prebuilt widgets, allowing your application
        to be flexible and scalable.
      </p>
    </div>
    <div className="md-block">
      <div className="md-layout">
        <p className="subtitle label">On PC</p>
        <MarkdownBlock>
          {`\`\`\`java
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.widget.Toast;

public class HelloWorld extends AppCompatActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Toast.makeText(this, "Hello World!", 
          Toast.LENGTH_SHORT).show();
    }
}
\`\`\``}
        </MarkdownBlock>
      </div>
      <img className="md-img-more" src={imgUrl("icons/icons8-more.png")} />
      <div className="md-layout">
        <p className="subtitle label">On Sketchware</p>
        <img
          className="md-img-block"
          src={imgUrl("images/hello-world-block.png")}
        />
      </div>
    </div>
  </div>
);

const WYSIWYG = props => (
  <div className="demo-layout">
    <div className="demo-text">
      <h2 className="title">What You See Is What You Get</h2>
      <p className="subtitle">Create apps by simply drag and dropping</p>

      <p className="description">
        From designing to programming, you can create a completely native
        Android application by simply drag and dropping.
      </p>
    </div>
    <div className="demo-container">
      <img className="demo-gif" src={imgUrl("images/dragdrop_demo.gif")} />
    </div>
  </div>
);

const Workflow = props => (
  <div className="workflow-layout">
    <div className="text-box">
      <h2 className="title">Completely PC-Independent</h2>
      <h3 className="subtitle">Learn, Create, and Publish</h3>
      <p className="description">
        From setting up to publishing your first Android application, you can
        handle all the process without leaving your smartphone.
      </p>
    </div>
    <div className="resp-container">
      <iframe
        className="resp-iframe"
        src="https://www.youtube.com/embed/AhEHu7KoPnY"
        allow="encrypted-media"
        allowFullScreen
      />
    </div>
  </div>
);

const Showcase = props => {
  if ((siteConfig.apps || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.apps
    .filter(app => {
      return app.pinned;
    })
    .map((app, i) => {
      return (
        <a href={app.infoLink} key={i}>
          <img
            className="showcase-item"
            src={app.image}
            alt={app.caption}
            title={app.caption}
          />
        </a>
      );
    });

  return (
    <div className="layout">
      <div className="showcase-layout">
        <h2 className="title">{"Who's Using Sketchware?"}</h2>
        <p className="subtitle">
          These apps on the Play Store were created using Sketchware
        </p>

        <div className="showcase-logos">{showcase}</div>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || "";

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <WYSIWYG />
          <Intro />
          <Workflow />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
