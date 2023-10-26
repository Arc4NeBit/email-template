import React from "react";

const titleDefaultStyles = {
    fontSize: "20px",
    padding: "5px",
    display: "block",
    textDecoration: "none",
    position: "relative",
    color: "#f6f6f6",
    background: "#000000",
    margin: "auto",
    textAlign: "center",
};
const tdDefaultStyles = {
    display: "block",
    border: "5px solid black",
    borderBottom: "30px solid black",
    height: "90px",
}

function MemeKingCard({title, description}) {
    return(
        <table >
            <tr style={{display: "block"}}>
                <td style={tdDefaultStyles} className="meme-king-td">
                    <h1 style={{...titleDefaultStyles}}>{title}</h1>
                    <p className="promo-title">{description}</p>
                </td>
            </tr>
        </table>
    )
}

export default MemeKingCard;