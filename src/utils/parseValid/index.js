import React from "react";

export const parseName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
}

export const parseNumber = (item) => {
    let id = item.id;
    let dig = 3;
    let er = (n,d)=>{let e=10**d;return n<e?((n+e)+"").slice(1):n+""};
    let idValue = er(id,dig);

    return idValue;
}

export const parseHeight = (height) => {
    return (
        <>
            {height
                ?.toString()
                .slice(
                    0, height.toString().length -1
                )}.
                {height
                ?.toString()
                .slice(
                    height.toString().length -1,
                    height.toString().length,
                )}
        </>
    )
}

export const parseWeight= (weight) => {
    return (
        <>
            {weight
                ?.toString()
                .slice(
                    0, weight.toString().length -1
                )}.
                {weight
                ?.toString()
                .slice(
                    weight.toString().length -1,
                    weight.toString().length,
                )}
        </>
    )
}
