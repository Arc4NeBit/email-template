import React from "react";
// could go further and pass in all kinds of styles and functions here or group all together into one single style prop
function Button({
    href , children, buttonStyles, sectionStyles
}) {
    return (
        <table style={{...sectionStyles}}>
            <tr>
                <td>
                    <a href={href} style={{...buttonStyles }}>
                        {children}
                    </a>
                </td>
            </tr>
        </table>
    );
}
export default Button