import http from "./httpService";

export function changeProposalStatusApi({ proposalId, ...reset }) {
  return http
    .patch(`/proposal/${proposalId}`, reset)
    .then(({ data }) => data.data);
}

export function getProposalsApi() {
  return http.get(`/proposal/list`).then(({ data }) => data.data);
}

export function createProposalApi(data) {
  return http.post(`/proposal/add`, data).then(({ data }) => data.data);
}
