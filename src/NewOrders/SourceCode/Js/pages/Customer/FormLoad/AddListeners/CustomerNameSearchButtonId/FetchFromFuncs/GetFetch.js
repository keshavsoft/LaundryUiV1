import CommonConfig from '../../../../../CommonConfig.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalSubRoute = CommonConfig.routePath;
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalCustomersDataListId = document.getElementById("CustomerNameInputId");
    let jVarLocalCustomerValue = jVarLocalCustomersDataListId.value;
    let jVarLocalCustomernumbersOnly = jVarLocalCustomerValue.replace(/\D/g, "");
    let postData = {};
    postData.inKey = "element.CustomerData.inMobileNumber"
    postData.inValue = jVarLocalCustomernumbersOnly;
    let jVarLocalFetchUrl = `/${jVarLocalSubRoute}/${jVarLocalBranchName}/Filter/ByBody`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    };
    let response = await fetch(jVarLocalFetchUrl, requestOptions);

    return await response;
};
export { StartFunc };

