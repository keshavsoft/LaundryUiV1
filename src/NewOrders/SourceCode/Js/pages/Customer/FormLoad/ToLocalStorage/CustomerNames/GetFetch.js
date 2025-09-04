 import CommonConfig from '../../../../CommonConfig.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalSubRoute = CommonConfig.routePath;
    let jVarLocalFetchUrl = `/${jVarLocalSubRoute}/MastersCustomers/Read/AsIs`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let jVarLocalFromFetchJson = await jVarLocalFromFetch.json();

    localStorage.setItem(jVarLocalLocalStorageKey, JSON.stringify(jVarLocalFromFetchJson));
};

export { StartFunc }