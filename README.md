# POC Strapi + Gatsby

Hello! This is the documentation available for our project.

## How it works?

We are using [Strapi]() as a Headless CMS to manage our content.

Also, we are using [Gatsby]() as a front-end solution to display these managed content.

The Strapi persist all information in one database layer (actually using SQLite, but it supports multiple databases like Postgres or MongoDB).

Then, the Strapi makes these information available via REST API and GraphQL.

We consume this information actually via the REST API on the Gatsby layer.

This consumer works on the [frontend/gatsby-node.js](frontend/gatsby-node.js). This file is loaded when the Gatsby is being build.

The consumer iterates over all available Pages created in the Strapi CMS and add new static pages using the `createPage` API from Gatsby.

It sends all available props from the Page Content Type to the [Page](frontend/src/templates/page.js) template component, including the `components` prop.

The `components` prop is a [Dynamic Zone]() attribute in Gatsby. It allows the end user to manipulate all available components and config them as desired.

## Running in development mode

1. cd strapi/ && yarn install && yarn develop
2. cd frontend/ && yarn install && cp .env.example .env && yarn start

## Adding new components

1. You must create a new component in the Strapi layer, using the Admin panel or creating a file in [strapi/components](strapi/components) folder.
2. Important: These components must belong to one category. Actually, we have only two categories, Display and Navigation.
3. The component should have the following structure (example):

```json
{
  "collectionName": "components_navigation_heroes",
  "info": {
    "name": "Hero",
    "icon": "anchor"
  },
  "options": {},
  "attributes": {
    "title": {
      "type": "string"
    },
    "button_text": {
      "type": "string"
    },
    "button_link": {
      "type": "string"
    },
    "featured_image": {
      "model": "file",
      "via": "related",
      "allowedTypes": ["images", "files", "videos"],
      "plugin": "upload",
      "required": false
    }
  }
}
```

4. Now we have the component registered in the Strapi layer, we can create him in the Gatsby layer. You must create the component file in [frontend/src/components/]. The sub-folder should be the category name, like [frontend/src/components/display]() or [frontend/src/components/navigation]().
5. After the component created in the Gatsby layer, you must add into the components tree, so the Page template can render it. To do this, you must edit the [frontend/src/components/index.js]:

```js
// example
import NavigationNavbar from "./navigation/navbar";

const tree = {
  "navigation.navbar": (props) => <NavigationNavbar {...props} />,
};

export default tree;
```

6. Observe the component will receive all props from the Dynamic Zone, so you can simply iterate over all component data inside the component file.

## Limitations

- WYSIWYG: By default, the Strapi uses the [Draft.js](https://draftjs.org/). [We can replace it with another WYSIWYG](https://strapi.io/blog/how-to-change-the-wysiwyg-in-strapi), like CKEditor. But it requires some custom configuration.

- File Upload: In the development mode, the Strapi uploads all files to the local storage. But in the production environment, we will need to upload these files to S3 bucket. Here are some tutorials about how to do this:

https://strapi.io/documentation/v3.x/plugins/upload.html#upload
https://www.npmjs.com/package/strapi-provider-upload-aws-s3
