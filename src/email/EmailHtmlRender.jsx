import React, { useEffect, useState } from "react";

const EmailHtmlRender = ({sethtmlString}) => {
    let [htmlFileString, setHtmlFileString] = useState();

    async function fetchHtml() {
        setHtmlFileString(await (await fetch(`Email.html`)).text());
    }
    
    useEffect(() => {
        fetchHtml();
    }, []);
    
    useEffect(() => {
        sethtmlString(htmlFileString)
    },[htmlFileString])

    return(
        <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
    )
}

export default EmailHtmlRender;
