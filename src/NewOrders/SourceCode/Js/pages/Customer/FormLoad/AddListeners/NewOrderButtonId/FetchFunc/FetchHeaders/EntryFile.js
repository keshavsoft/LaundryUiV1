import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalFromDom = jFLocalCustomerNameInputId();
    let jVarLocalMobileNumber = jVarLocalFromDom.split(":")[1];
    let jVarLocalUserName = localStorage.getItem("UserName");

    let LocalBody = {
        Key: "CustomerData",
        Value: {
            UserName: jVarLocalUserName,
            inMobileNumber: jVarLocalMobileNumber
        }
    };

    return {
        ...KeysJson,
        body: JSON.stringify(LocalBody)
    };
};

let jFLocalCustomerNameInputId = () => {
    let jVarLocalCustomerNameInputId = 'CustomerNameInputId';
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameInputId);

    if (jVarLocalHtmlId !== null) {
        return jVarLocalHtmlId.value.trim();
    }
};

export { StartFunc };
