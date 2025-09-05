import CommonConfig from "../../../../CommonConfig.json" with { type: "json" };

let StartFunc = async ({ inParams }) => {
    let jVarLocalSubRoute = CommonConfig.routePath;
    let jVarLocalinPk = inParams.inPk;
    let jVarLocalBranchName = inParams.BranchName;

    // let jVarLocalFetchUrl = `/${ConfigJson.routePath}/${jVarLocalBranchName}/Show/Filter/pk/${jVarLocalinPk}`;
    let jVarLocalFetchUrl = `/${jVarLocalSubRoute}/${jVarLocalBranchName}/Read/RowDataWithPk/${jVarLocalinPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };