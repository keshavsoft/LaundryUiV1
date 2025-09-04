import ConfigJson from '../../../Config.json' with {type: 'json'};
import CommonConfig from '../../../../CommonConfig.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalSubRoute = CommonConfig.routePath;
    let jVarLocalTableName = localStorage.getItem("BranchName");
    let jVarLocalLocalStorageKey = ConfigJson.localStorageKeys.OrderKey;

    let jVarLocalFetchUrl = `/${jVarLocalSubRoute}/BranOrdersKKD/Read/MaxRow`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromFetchJson = await jVarLocalFromFetch.json();

    localStorage.setItem(jVarLocalLocalStorageKey, JSON.stringify(jVarLocalFromFetchJson));
};

export { StartFunc }