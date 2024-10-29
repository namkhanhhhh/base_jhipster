import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 30434,
  login: 'BQKF',
};

export const sampleWithPartialData: IUser = {
  id: 15064,
  login: 'OuIw5@-\\\\kk\\OH\\qmaHz',
};

export const sampleWithFullData: IUser = {
  id: 5208,
  login: 'mL@rzS',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
