import Configjson from "../../../Config.json" with { type: "json" };
import CommonConfig from '../../../../CommonConfig.json' with {type: 'json'};

let StartFunc = async ({ inSettlementData }) => {

    try {
        let jVarLocalSubRoute = CommonConfig.routePath;

        let jVarLocalFetchUrl = `/${jVarLocalSubRoute}/${Configjson.PostUrl}/${inSettlementData.MainRowPK}/${inSettlementData.InsertKey}`;

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
