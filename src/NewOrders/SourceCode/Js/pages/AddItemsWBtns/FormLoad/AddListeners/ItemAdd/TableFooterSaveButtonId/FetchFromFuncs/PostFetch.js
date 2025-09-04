import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../../../Config.json" with { type: "json" };
import CommonConfig from '../../../../../../CommonConfig.json' with {type: 'json'};

let StartFunc = async () => {
    let LocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalSubRoute = CommonConfig.routePath;

    let jVarLocalOrderNumberId = parseInt(document.getElementById("OrderNumberId").innerHTML);
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/${jVarLocalSubRoute}/BranOrdersKKD/SubTableOnObj/Insert/AsIs/${jVarLocalOrderNumberId}/ItemsInOrder`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

