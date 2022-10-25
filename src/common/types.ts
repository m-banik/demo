import { ChangeEventHandler, MouseEventHandler } from 'react';
import { nanoid } from 'nanoid';

export type { Reducer as ReducerType } from 'redux';

export type IdType = ReturnType<typeof nanoid>;

export type InputChangeEventHandlerType = ChangeEventHandler<HTMLInputElement>;

export type ButtonEventHandlerType = MouseEventHandler<HTMLButtonElement>;

export interface CandidateInterface {
  id: IdType;
  name: string;
  currentJobTitle: string;
  currentCompany: string;
  tenureInCurrentRole: number;
  salaryInformation?: number;
  cvUploadTimeStamp: number;
  lastContactTimeStamp: number;
}

export interface GetRequestParamsInterface {
  method: 'GET';
  jobId: IdType;
}

export interface PostRequestParamsInterface {
  method: 'POST';
  jobId: IdType;
  candidateId: IdType;
  status: 0 | 1;
}

export type RequestParamsType = (
  | GetRequestParamsInterface
  | PostRequestParamsInterface
) & {
  baseUrl?: string;
};

export type MakeRequestType = (params: RequestParamsType) => Promise<unknown>;
