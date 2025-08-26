import ConfigJson from '../../../../Config.json' with { type: 'json' };

let StartFunc = ({ inFromFetch }) => {
  if (inFromFetch) {
    Swal.fire({
      title: "Settlement Success",
      text: typeof inFromFetch === "string" ? inFromFetch : "Saved successfully!",
      icon: "success",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        jFLocalToURL();
      }
    });
  } else {
    Swal.fire({
      title: "Settlement Failed",
      text: "No response from server",
      icon: "error",
      confirmButtonText: "Ok",
    });
  }
};

let jFLocalToURL = () => {
  const jVarLocalRedirectUrl = ConfigJson.urls.SaveButtonId.redirectToUrl;
  const url = new URL(window.location.href);
  let NewURl = new URL(jVarLocalRedirectUrl, url);

  window.location.href = NewURl.href;
};

export { StartFunc };
