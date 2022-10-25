import { Api, ApiConfigInterface } from './Api';
import { CANDIDATES_BASE_URL } from './baseUrls';
import { makeRequestViaFetch } from './makeRequestViaFetch';
import { sampleCandidatesList } from '@Common/samples';
import { CandidateInterface, IdType } from '@Common/types';

interface CandidatesApiInterface {
  getCandidates: (jobId: IdType) => Promise<CandidateInterface[]>;
  updateCandidateStatus: (
    jobId: IdType,
    candidateId: IdType,
    status: 0 | 1
  ) => Promise<0 | 1>;
}

export class CandidatesApi extends Api {
  private requestHandler = makeRequestViaFetch;

  constructor(config?: ApiConfigInterface) {
    let completedConfig = config ? config : {};

    completedConfig = {
      ...completedConfig,
      baseUrl: completedConfig.baseUrl
        ? completedConfig.baseUrl
        : CANDIDATES_BASE_URL
    };

    super(completedConfig);
  }

  public getCandidates: CandidatesApiInterface['getCandidates'] = async (
    jobId
  ) =>
    this.requestHandler({
      baseUrl: this.baseUrl,
      method: 'GET',
      jobId
    })
      .then(() => sampleCandidatesList)
      .catch(() => {
        throw new Error('An error occurred in the API request!');
      });

  public updateCandidateStatus: CandidatesApiInterface['updateCandidateStatus'] =
    async (jobId, candidateId, status) =>
      this.requestHandler({
        baseUrl: this.baseUrl,
        method: 'POST',
        jobId,
        candidateId,
        status
      })
        .then(() => status)
        .catch(() => {
          throw new Error('An error occurred in the API request!');
        });
}
