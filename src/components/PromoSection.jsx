import React from "react";

const titleDefaultStyles = {
    fontSize: "20px",
    padding: "5px",
    display: "block",
    textDecoration: "none",
    top: "-80px",
    position: "relative",
    color: "#f6f6f6",
    background: "#000000",
    margin: "auto",
    textAlign: "center",
};

const imgDefaultStyles = {
    opacity: "70%",
    cursor: "pointer",
    objectFit: "cover",
    width: "40vw",
    height: "150px",
};

function PromoSection({href, imghref, title}) {

    return(
        <table >
            <tr>
                <td>
                    <a href={href} style={{textDecoration: "none", padding: "0", display: "block", width: "100%", height: "150px"}}>
                        <img src={imghref} alt="" srcset="" style={imgDefaultStyles} className="promo-img"/>
                        <p className="promo-title" style={{...titleDefaultStyles}} >{title}</p>
                   </a>
                </td>
            </tr>
        </table>
    )
}

export default PromoSection;