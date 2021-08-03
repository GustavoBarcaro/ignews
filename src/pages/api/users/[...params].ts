import { NextApiRequest, NextApiResponse } from "next";

// JWT
// next auth (social)
//Cognito, auth0

export default (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query;
  const users = [
    { id: "1", name: "Gustavo" },
    { id: "2", name: "Isadora" },
    { id: "3", name: "Rafa" },
  ];

  const user = users.find((user) => user.id === id);

  return response.json(user);
};
