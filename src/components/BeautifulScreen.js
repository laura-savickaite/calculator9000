import React, { Component } from "react";


function BeautifulScreen(props) {
    return (
        <section className="border-2 border-gray-500 rounded h-20 mb-5 text-end p-2 text-xl">{props.keypress}</section>
    )
}

export default BeautifulScreen;