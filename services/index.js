import { request, gql } from "graphql-request";
import axios from "axios";

const graphqlAPI = process.env.GRAPH_CMS_ENDPOINT;

export const getProjects = async () => {
  const query = gql`
    query MyQuery {
      projects {
        id
        photos {
          url
        }

        tech

        title
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  console.log({ result });
  return result;
};

export const getProject = async (id) => {
  const query = gql`
    query MyQuery($id: ID) {
      project(where: { id: $id }) {
        id
        title
        git
        preview
        photos {
          url
          size
          width
        }

        video {
          url
        }

        tags
        description
      }
    }
  `;

  const result = await request(graphqlAPI, query, { id });
  return result;
};

export const submitComment = async (obj) => {
  try {
    result = await axios.post("/api/comments", obj);
    return result.json();
  } catch (error) {
    console.log(error);
  }

  return result.json();
};
