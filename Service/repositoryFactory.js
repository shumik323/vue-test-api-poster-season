import GetRepository from "../GetRepository";

const repositories = {
    data: GetRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};



