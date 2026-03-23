const prisma = require("../prisma/client");
 const createRequest = async (data) => {
  return await prisma.request.create({
    data,
  });
};

 const getRequests = async () => {
  return await prisma.request.findMany({
    include: { user: true },
  });
};

module.exports = {
  createRequest,
  getRequests,
};