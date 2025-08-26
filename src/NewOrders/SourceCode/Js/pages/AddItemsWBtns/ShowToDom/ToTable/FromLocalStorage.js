import ConfigJson from '../../Config.json' with {type: 'json'};

const StartFunc = () => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.OrderKey;
    let jVarLocalDataFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);

    let jVarLocalDataFromLocalStorageJson = jVarLocalDataFromLocalStorage ?
        JSON.parse(jVarLocalDataFromLocalStorage) : {};

    let jVarLocalItemsArray = jFLocalItemsObjectToArray({
        inItemsObject: jVarLocalDataFromLocalStorageJson.ItemsInOrder || {}
    });

    return jVarLocalItemsArray;
};

const jFLocalItemsObjectToArray = ({ inItemsObject }) => {
    return Object.entries(inItemsObject).map(([key, value]) => {
        return { ...value, pk: key };
    });
};

export { StartFunc };
