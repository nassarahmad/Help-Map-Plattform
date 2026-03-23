import prisma from "../prisma/client.js";

export const createRequest = async (data) => {
  return await prisma.request.create({
    data,
  });
};

export const getRequests = async () => {
  return await prisma.request.findMany({
    include: { user: true },
  });
};