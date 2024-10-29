import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '7e7e2253-572d-4aab-94d3-24888f74b989',
};

export const sampleWithPartialData: IAuthority = {
  name: '4958dc3b-738c-488c-be99-fa0a8b660670',
};

export const sampleWithFullData: IAuthority = {
  name: 'a2e83728-ac3d-40bc-870c-5cb47941415d',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
