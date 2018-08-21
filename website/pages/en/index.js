/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
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
  target: '_self',
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
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('LOGO1.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="left" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'This is the content of my feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature One',
      },
      {
        content: 'The content of my second feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature Two',
      },
    ]}
  </Block>
);
const MainPage = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>

        <div className = "tableofcontents">

        <strong>  This section is related to Groceristar 2.0.0 version</strong>

          <br/>I'll list and explain methods, that we're using in our project. It should give a good onboarding for a new team members and also speed up development for related to GS projects.
          <pre>
            <code className="hljs">
              <span className="hljs-symbol">Department</span> router
    <br/><span className="hljs-symbol">Favorite</span> ingredients router
    <br/><span className="hljs-symbol">Grocery</span> router
    <br/><span className="hljs-symbol">Purchased</span> ingredients/<span className="hljs-keyword">items </span>router
    <br/><span className="hljs-symbol">Ingredients</span> router
    <br/></code>
          </pre>
      </div>


  </div>
);
const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Table of contents</h2>
        <div className = "tableofcontents">

          <ul>
    <li><a href="/documentation/docs/tests.html">Tests</a></li>
    <li><a href="/documentation/docs/shop-list-information/shop-list-information.html">Shop list information</a>
    <ul>
    <li><a href="/documentation/docs/shop-list-information/components-structure.html">Components structure</a></li>
    <li><a href="/documentation/docs/shop-list-information/templates.html">Templates, that we have in our previous esjs, jade version</a></li>
    </ul></li>
    <li><a href="/documentation/docs/schema.html">Current DB schema</a></li>
    <li><a href="/documentation/docs/subprojects.html">SubProjects</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/groceristar-website-methods-list.html">Groceristar Website Methods list</a>
    <ul>
    <li><a href="/documentation/docs/groceristar-website-methods-list/department-router/department-router.html">Department Router</a>
    <ul>
    <li><a href="/documentation/docs/groceristar-website-methods-list/department-router/dr1.html">Get data, related to single department</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/department-router/dr2.html">Get list of departments, related to one grocery list</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/department-router/dr3.html">Hide department, , Show All departments method, Toggle department status</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/department-router/dr4.html">remove department from grocery list</a></li>
    </ul></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/favorite-router/favorite-router.html">Favorite Router</a>
    <ul>
    <li><a href="/documentation/docs/groceristar-website-methods-list/favorite-router/1.html">Get All ingredients with status favorite</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/favorite-router/2.html">Delete ingredients from favorites list</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/favorite-router/3.html">Another version that adds favorites</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/favorite-router/4.html">Method that list all favorites</a></li>
    </ul></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/grocery-router/grocery-router.html">Grocery Router</a>
    <ul>
    <li><a href="/documentation/docs/groceristar-website-methods-list/grocery-router/1.html">Display Grocery List Data</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/grocery-router/3.html">display hidden departments( status hidden) 3</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/grocery-router/4.html">Add if(ultimate)then display only grocery from basic templates</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/grocery-router/5.html">Attach grocery list to user5</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/grocery-router/6.html">Clone list with all data to a new grocery list record</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/grocery-router/7.html">Display page with clone Form</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/grocery-router/8.html">Remove Grocery list from user account</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/grocery-router/9.html">Create New, Empty Grocery List inside the user account</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/grocery-router/10.html">page with Method, that will display all grocery lists, related to user</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/grocery-router/11.html">page with Method, that will display all grocery lists, related to user</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/grocery-router/12.html">Display shopping list (ingredients list group by department)</a></li>
    <li><a href="groceristar-website-methods-list/grocery-router/13.md">13</a></li>
    </ul></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/purchased-router/purchased-router.html">Purchased Router</a>
    <ul>
    <li><a href="/documentation/docs/groceristar-website-methods-list/purchased-router/method-that-toggle-purchased-item-ingredient.html">Method that toggle purchased item(ingredient)</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/purchased-router/method-that-will-remove-all-items-ingredients-from-purchased-list.html">Method that will remove all items(ingredients) from purchased list</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/purchased-router/method-that-will-remove-ingredient-from-grocery-list.html">Method that will remove ingredient, from grocery list</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/purchased-router/removed-that-item-from-purchased-list-and-removed-ingredient-from-grocery-list.html">removed that item from purchased list and removed ingredient from Grocery List</a></li>
    </ul></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/ingredients-router/ingredients-router.html">Ingredients Router</a>
    <ul>
    <li><a href="/documentation/docs/groceristar-website-methods-list/ingredients-router/untitled.html">Create or find at db new ingredient new ingredient and attach it to grocery list</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/ingredients-router/2.html">Method moves ingredient from one department to another(can work only with custom ingredients)</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/ingredients-router/3.html">Method that changes the ingredients -&gt; name works only with custom ingredients</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/ingredients-router/4.html">Method that delete array of ingredients</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/ingredients-router/5.html">Create a new custom ingredinet+ save it to db</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/ingredients-router/6.html">Method that will called only if we want to edit not a custom element</a></li>
    <li><a href="/documentation/docs/groceristar-website-methods-list/ingredients-router/7.html">Method that get list of ingredients from department</a></li>
    </ul></li>
    </ul></li>
    <li><a href="/documentation/docs/gs-sitemap.html">GS sitemap</a></li>
    <li><a href="/documentation/docs/gs-shoplist-screens.html">GS Shoplist screens</a></li>
    </ul>

      </div>


  </div>
);
const FeatureCallout2 = props => (

  <div className = "ogg" style={{textAlign: 'left'}}>
    <div className="wrapper">
      <div className="gridBlock">
        <div className="blockElement imageAlignSide imageAlignLeft twoByGridBlock">
          <div className="blockImage">
            <img src="/recipe-app-react-native/img/54A84DCB-F7EE-49E3-8DA1-1EF07F873622.png">

            </img>
          </div>
          <div className="blockContent"><h2><div><span><p>Description</p>
    </span></div></h2><div><span><p>
        Build with: Angular, Ionic Framework v.1
      <ul>
        <h3>Basic functionality:</h3>
        <li>Screen with recipes list</li>
        <li>Recipe details</li>
        <li>Basic grocery list</li>
        <li>Login screen.</li>
    </ul>



      </p>
    </span></div></div></div>
      </div>
    </div>
  </div>
);
const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Release #1 completed(Free Menu) ^ Build with: Angular, Ionic Framework v.1 Note: soon I’ll redo an app from scratch.',
        image: imgUrl('54A84DCB-F7EE-49E3-8DA1-1EF07F873622.png'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          {/* <Features /> */}
           {/* <TryOut /> */}

          <MainPage />
          <FeatureCallout />

           {/* <LearnHow /> */}

          {/* <Description />  */}
           {/* <Showcase language={language} /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
