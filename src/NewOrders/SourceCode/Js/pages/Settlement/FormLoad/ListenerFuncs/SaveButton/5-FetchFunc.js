import Configjson from "../../../Config.json" with { type: "json" };

let StartFunc = async ({ inSettlementData }) => {
    try {
        let jVarLocalFetchUrl = `${Configjson.PostUrl}/${inSettlementData.MainRowPK}/${inSettlementData.InsertKey}`;

        let jVarLocalFetchHeaderObject = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inSettlementData.inDataToUpdate)
        };

        let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);

        return await response;

    } catch (err) {
        return { success: false, error: err.message };
    }
};

export { StartFunc };
