function solution(id_list, report, k) {
  let reportObj = {};
  let result = [];
  let reportCount;

  for (let reportId of report) {
    const reportedUser = reportId.split(" ")[0];
    const wasReportedUser = reportId.split(" ")[1];

    if (!(wasReportedUser in reportObj)) {
      reportObj[wasReportedUser] = {};
      reportObj[wasReportedUser].count = 1;
      reportObj[wasReportedUser].reportUser = [reportedUser];
    }

    if (!reportObj[wasReportedUser].reportUser.includes(reportedUser)) {
      reportObj[wasReportedUser].count++;
      reportObj[wasReportedUser].reportUser.push(reportedUser);
    }
  }

  for (let id of id_list) {
    reportCount = 0;
    for (let wRUser in reportObj) {
      if (
        reportObj[wRUser].count >= k &&
        reportObj[wRUser].reportUser.includes(id)
      ) {
        reportCount++;
      }
    }
    result.push(reportCount);
  }

  return result;
}

// 각 신고한 유저에게 신고된 아이디의 정지된 건 수를 보내는 문제
// k회가 되야 정지가 된다. 같은 유저가 한 유저를 여러번 신고 할 수는 없다.