import ConfigJson from '../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalSubRoute = ConfigJson.routePath;
    //let jVarLocalFolderName = ConfigJson.folderName;
    //let jVarLocalTableName = ConfigJson.tableName;

    let jVarLocalLocalStorageKey = ConfigJson.localStorageKeys.ItemNamesKey;

    let jVarLocalFetchUrl = `/V1/MastersItems/Read/AsIs`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromFetchJson = await jVarLocalFromFetch.json();

    localStorage.setItem(jVarLocalLocalStorageKey, JSON.stringify(jVarLocalFromFetchJson));
};

export { StartFunc }