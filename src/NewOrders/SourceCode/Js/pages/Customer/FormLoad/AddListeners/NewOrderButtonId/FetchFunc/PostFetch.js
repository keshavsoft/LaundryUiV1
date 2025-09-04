import { StartFunc as FetchHeaders } from "./FetchHeaders/EntryFile.js";
import CommonConfig from '../../../../../CommonConfig.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalSubRoute = CommonConfig.routePath;
    let jVarLocalFetchHeaders = FetchHeaders();
    // let jVarLocalMobileNumber = jVarLocalFetchHeaders.split(":")[1];
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalFetchUrl = `/${jVarLocalSubRoute}/BranOrdersKKD/AddWithDefault/InsertFromBody`;

    // let jVarLocalFetchUrl = `${ConfigJson.Urls.NewOrderButtonId.PostFetch}`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

